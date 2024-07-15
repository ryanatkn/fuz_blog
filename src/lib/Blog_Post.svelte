<script lang="ts">
	import type {SvelteHTMLElements} from 'svelte/elements';
	import type {Snippet} from 'svelte';
	import Toot from '@ryanatkn/fuz_mastodon/Toot.svelte';

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

	// TODO maybe clean up the type vs `post`
	const item = feed.items.find((i) => i.slug === post.slug);
</script>

<svelte:head>
	<!-- TODO title suffix like - ryanatkn.com/blog -->
	<title>{post.title}</title>
</svelte:head>

{#if item}
	<article class="width_md" {...attrs}>
		<Blog_Post_Header {item} />
		{@render children()}
		<!-- TODO maybe make this hr optional or conditional on other content? -->
		<hr />
		{#if footer}{@render footer()}{/if}
	</article>
	{#if item.comments}
		<!-- TODO the storage key is weird -->
		<!-- TODO use local cache in dev -->
		<!-- TODO remove `:any` when fuz_mastodon types are fixed -->
		<section class="width_md">
			<h2>Comments</h2>
			<Toot
				url={item.comments.url}
				replies
				autoload={true}
				reply_filter_rules={(item: any) => [
					{type: 'favourited_by', favourited_by: [item.account.acct]},
				]}
				storage_key="{item.id}_comments"
			/>
		</section>
	{/if}
{:else}
	<div>cannot find post <code>{post.slug}</code></div>
{/if}
