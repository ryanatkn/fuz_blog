import {Task_Error, type Task} from '@ryanatkn/gro';
import {existsSync, readFileSync, writeFileSync} from 'node:fs';
import {z} from 'zod';

const Args = z
	.object({
		// TODO accept `slug` as well as `id` ?
		_: z.array(z.string(), {description: 'id of the post to update'}).default([]),
		date: z.string({description: "the post's date_modified"}).optional(),
	})
	.strict();
type Args = z.infer<typeof Args>;

export const task: Task<Args> = {
	summary: 'updates the `date_modified` of a blog post',
	Args,
	run: async ({args, invoke_task}) => {
		const {
			_: [id],
			date = new Date().toISOString(),
		} = args;

		if (!id) {
			throw new Task_Error('post id is required');
		}

		// TODO @multiple harcoded `/blog/`
		const filename = `src/routes/blog/${id}/+page.svelte`;
		if (!existsSync(filename)) {
			throw new Task_Error(`post with id '${id}' not found at path '${filename}'`);
		}
		const content = readFileSync(filename, 'utf8');
		const updated_content = content.replace(/date_modified: '.*'/u, `date_modified: '${date}'`);
		writeFileSync(filename, updated_content, 'utf8');

		await invoke_task('gen');
	},
};
