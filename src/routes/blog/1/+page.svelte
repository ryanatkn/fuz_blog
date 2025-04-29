<script lang="ts" module>
	import type {Blog_Post_Data} from '$lib/blog.js';

	export const post = {
		title: 'Hello fuz_blog',
		slug: 'hello-fuz-blog',
		date_published: '2024-07-10T16:04:49.688Z',
		date_modified: '2024-07-15T18:27:36.477Z',
		summary: 'fuz_blog is now a reusable library',
		tags: ['blog software', 'sveltekit'],
		comments: {
			url: 'https://fosstodon.org/@webdevladder/112791910038764650',
			type: 'mastodon',
		},
	} satisfies Blog_Post_Data;
</script>

<script lang="ts">
	import Blog_Post from '$lib/Blog_Post.svelte';
	import Blog_Post_Footer from '$routes/blog/Blog_Post_Footer.svelte';
</script>

<Blog_Post {post}>
	<section>
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
	</section>
	{#snippet footer()}
		<Blog_Post_Footer />
	{/snippet}
</Blog_Post>
