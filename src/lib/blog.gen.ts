import type {Gen} from '@ryanatkn/gro/gen.js';
import {join} from 'node:path';
import {load_package_json} from '@ryanatkn/gro/package_json.js';

import {create_atom_feed} from '$lib/feed.js';
import {
	collect_blog_post_ids,
	load_blog_post_modules,
	resolve_blog_post_item,
} from '$lib/blog_helpers.js';
import type {Blog_Feed, Blog_Module} from '$lib/blog.js';

export const gen: Gen = async ({origin_path}) => {
	// TODO @many parameterize and refactor

	const package_json = load_package_json();
	const fuz_blog_import_path =
		package_json.name === '@ryanatkn/fuz_blog' ? '$lib' : '@ryanatkn/fuz_blog';

	const dir = process.cwd();
	const blog_dirname = 'blog';
	const routes_path = 'src/routes'; // TODO read from SvelteKit config;
	const blog_dir = join(dir, routes_path, blog_dirname);
	const {blog} = (await import(join(blog_dir, 'blog.ts'))) as Blog_Module; // TODO zod parse

	const blog_post_ids = collect_blog_post_ids(blog_dir);

	const modules = await load_blog_post_modules(blog_dir, blog_post_ids);

	// TODO zod schema validation including parsing the status context url (with zod?)
	// for (const mod of modules) {
	// 	validate_blog_post(mod.post)
	// }

	const blog_url = blog.id + blog_dirname;

	const items = modules.map((mod, i) => resolve_blog_post_item(i + 1, blog_url, mod.post));

	const feed: Blog_Feed = {...blog, items};

	return [
		{
			// TODO @many harcoded /blog/
			filename: join(dir, 'static/blog/feed.xml'),
			content: create_atom_feed(feed),
		},
		{
			filename: join(blog_dir, 'feed.ts'),
			content: `
				// generated by ${origin_path}

				import type {Blog_Feed} from '${fuz_blog_import_path}/blog.js';

				export const feed: Blog_Feed = ${JSON.stringify(feed)}

				// generated by ${origin_path}
			`,
		},
		...(await Promise.all(
			modules.map((item, i) => {
				const post = item.post;
				const slug = post.slug;
				const blog_post_id = i + 1;
				return {
					filename: join(blog_dir, slug, '+page.svelte'),
					content: `
						<!-- generated by ${origin_path} -->

						<script lang="ts">
							import Blog_Post_${blog_post_id} from '../${blog_post_id}/+page.svelte';
						</script>

						<Blog_Post_${blog_post_id} />

						<!-- generated by ${origin_path} -->
					`,
				};
			}),
		)),
	];
};

// const to_prerender_entries = (blog: Feed): string[] => {
// 	const entries = [];
// 	for (let index = 0; index < blog.items.length; index++) {
// 		const item = blog.items[index];
// 		const {pathname} = new URL(item.url);
// 		entries.push(pathname);
// 		// replace the last segment with the index
// 		for (let i = pathname.length - 1; i >= 0; i--) {
// 			if (pathname[i] === '/') {
// 				entries.push(pathname.substring(0, i + 1) + (1 + index));
// 				break;
// 			}
// 		}
// 	}
// 	return entries;
// };
