import type {Blog_Feed_Data} from '$lib/blog.js';

// TODO extract to fuz.config.ts?
export const blog: Blog_Feed_Data = {
	title: "fuz_blog's blog",
	id: 'https://blog.fuz.dev/',
	home_page_url: 'https://blog.fuz.dev/',
	description: 'blog software from scratch with SvelteKit',
	icon: 'https://blog.fuz.dev/favicon.png',
	favicon: 'https://blog.fuz.dev/favicon.png',
	author: {
		name: 'Ryan Atkinson',
		url: 'https://www.ryanatkn.com/',
		email: 'mail@ryanatkn.com',
	},
	atom: {
		feed_url: 'https://blog.fuz.dev/blog/feed.xml',
	},
};
