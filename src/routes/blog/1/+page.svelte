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
	import {base} from '$app/paths';

	import Blog_Post from '$lib/Blog_Post.svelte';
</script>

<Blog_Post {post}>
	<p>
		<a href="{base}/a/b/c">todo a local link example</a>
	</p>
</Blog_Post>
