// generated by src/lib/blog.gen.ts

import type {Blog_Feed} from '$lib/blog.js';

export const feed: Blog_Feed = {
	title: "fuz_blog's blog",
	id: 'https://blog.fuz.dev/',
	home_page_url: 'https://blog.fuz.dev/',
	description: 'blog software from scratch with SvelteKit',
	icon: 'https://blog.fuz.dev/favicon.png',
	favicon: 'https://blog.fuz.dev/favicon.png',
	author: {name: 'Ryan Atkinson', url: 'https://www.ryanatkn.com/', email: 'mail@ryanatkn.com'},
	atom: {feed_url: 'https://blog.fuz.dev/blog/feed.xml'},
	items: [
		{
			id: 'https://blog.fuz.dev/blog/1',
			url: 'https://blog.fuz.dev/blog/hello-fuz-blog',
			blog_post_id: 1,
			title: 'Hello fuz_blog',
			slug: 'hello-fuz-blog',
			date_published: '2024-07-10T16:04:49.688Z',
			date_modified: '2024-07-15T18:27:36.477Z',
			summary: 'fuz_blog is now a reusable library',
			tags: ['blog software', 'sveltekit'],
			comments: {url: 'https://mastodon.social/@webdevladder/112791910038764650', type: 'mastodon'},
		},
	],
};

// generated by src/lib/blog.gen.ts
