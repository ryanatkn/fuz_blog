<script lang="ts" context="module">
	import type {Blog_Post_Data} from '$lib/blog.js';

	export const post = {
		title: 'Hello fuz_blog',
		slug: 'hello-fuz-blog',
		date_published: '2024-07-10T16:04:49.688Z',
		date_modified: '2024-07-10T16:04:49.688Z',
		summary: 'fuz_blog is now a reusable library',
		tags: ['blog software', 'sveltekit'],
	} satisfies Blog_Post_Data;
</script>

<script lang="ts">
	import Blog_Post from '$lib/Blog_Post.svelte';
</script>

<Blog_Post {post}>
	<p>
		This is <code>fuz_blog</code>'s first blog post. <code>fuz_blog</code>
		is a reusable SvelteKit library for adding blogs to your repos. It works!
	</p>
	<p>
		The source code is <a href="https://github.com/ryanatkn/fuz_blog">here on GitHub</a>.
	</p>
	<p>
		To watch the process of me creating this project (where the first part unfortunately has my
		giant head obscuring parts of the screen, but I fix it later!), visit TODO. The code is at <a
			href="https://github.com/ryanatkn/fuz_blog/pull/1">PR #1</a
		>.
	</p>
</Blog_Post>
