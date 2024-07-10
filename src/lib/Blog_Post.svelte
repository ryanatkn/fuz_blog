<script lang="ts">
	import type {SvelteHTMLElements} from 'svelte/elements';
	import type {Snippet} from 'svelte';

	import Blog_Post_Header from '$lib/Blog_Post_Header.svelte';
	import Blog_Post_Footer from '$lib/Blog_Post_Footer.svelte';
	import {get_blog_feed, type Blog_Post_Data} from '$lib/blog.js';

	interface Props {
		post: Blog_Post_Data;
		attrs?: SvelteHTMLElements['article'] | undefined;
		children: Snippet;
	}

	const {post, attrs, children}: Props = $props();

	const feed = get_blog_feed();

	const item = feed.items.find((i) => i.slug === post.slug);
</script>

<svelte:head>
	<!-- TODO title suffix like - ryanatkn.com/blog -->
	<title>{post.title}</title>
</svelte:head>

{#if item}
	<article class:width_md={true} {...attrs}>
		<header>
			<Blog_Post_Header {item} />
		</header>
		{@render children()}
		<hr />
		<Blog_Post_Footer {item} />
	</article>
{:else}
	<div>cannot find post <code>{post.slug}</code></div>
{/if}
