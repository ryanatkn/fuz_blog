import {Task_Error, type Task} from '@ryanatkn/gro';
import {z} from 'zod';
import {format_file} from '@ryanatkn/gro/format_file.js';
import {mkdir, writeFile} from 'node:fs/promises';
import {dirname, join} from 'node:path';
import {load_package_json} from '@ryanatkn/gro/package_json.js';
import {slugify} from '@ryanatkn/belt/path.js';

import {collect_blog_post_ids, to_next_blog_post_id} from '$lib/blog_helpers.js';

const Args = z
	.object({
		_: z.array(z.string()).meta({description: 'post title'}).max(1).default([]),
		date: z.string().meta({description: "the post's date_published"}).optional(),
	})
	.strict();
type Args = z.infer<typeof Args>;

export const task: Task<Args> = {
	summary: 'create a new blog post',
	Args,
	run: async ({args, log, invoke_task}) => {
		const {
			_: [raw_title],
			date = new Date().toISOString(),
		} = args;

		if (!raw_title) {
			throw new Task_Error('post title is required, e.g. `gro post "Hello world"`');
		}
		const title = raw_title.trim();
		const slug = slugify(title);

		// TODO @many parameterize and refactor

		const package_json = load_package_json();
		const fuz_blog_import_path =
			package_json.name === '@ryanatkn/fuz_blog' ? '$lib' : '@ryanatkn/fuz_blog';

		const dir = process.cwd();
		const blog_dirname = 'blog'; // TODO @many harcoded /blog/
		const routes_path = 'src/routes'; // TODO read from SvelteKit config;
		const blog_dir = join(dir, routes_path, blog_dirname);

		const blog_post_ids = collect_blog_post_ids(blog_dir);

		const next_blog_post_id = to_next_blog_post_id(blog_post_ids);

		const next_blog_post_path = join(blog_dir, next_blog_post_id + '/+page.svelte');

		const unformatted = `
			<script lang="ts" module>
				import type {Blog_Post_Data} from '${fuz_blog_import_path}/blog.js';

				export const post = {
					title: ${JSON.stringify(title)},
					slug: '${slug}',
					date_published: '${date}',
					date_modified: '${date}',
					summary: 'todo',
					tags: ['todo'],
				} satisfies Blog_Post_Data;
			</script>

			<script lang="ts">
				import Blog_Post from '${fuz_blog_import_path}/Blog_Post.svelte';
			</script>

			<!-- This component is totally optional, you have full control over the page. -->
			<Blog_Post {post}>
				<p>
					TODO content goes here
				</p>
			</Blog_Post>
		`;
		const formatted = await format_file(unformatted, {parser: 'svelte'});

		await mkdir(dirname(next_blog_post_path), {recursive: true});
		await writeFile(next_blog_post_path, formatted, 'utf8');

		await invoke_task('gen');

		log.info(`created empty blog post with index ${next_blog_post_id} at ${next_blog_post_path}`);
	},
};
