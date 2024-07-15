<script lang="ts">
	import type {SvelteHTMLElements} from 'svelte/elements';
	import type {Snippet} from 'svelte';

	import Blog_Post_Header from '$lib/Blog_Post_Header.svelte';
	import {get_blog_feed, type Blog_Post_Data} from '$lib/blog.js';

	interface Props {
		post: Blog_Post_Data;
		attrs?: SvelteHTMLElements['article'] | undefined;
		footer?: Snippet;
		children: Snippet;
	}

	const {post, attrs, footer, children}: Props = $props();

	const feed = get_blog_feed();

	const item = feed.items.find((i) => i.slug === post.slug);
</script>

<svelte:head>
	<!-- TODO title suffix like - ryanatkn.com/blog -->
	<title>{post.title}</title>
</svelte:head>

{#if item}
	<article class:width_md={true} {...attrs}>
		<Blog_Post_Header {item} />
		{@render children()}
		<!-- TODO maybe make this hr optional or conditional on other content? -->
		<hr />
		{#if footer}{@render footer()}{/if}
	</article>
{:else}
	<div>cannot find post <code>{post.slug}</code></div>
{/if}
