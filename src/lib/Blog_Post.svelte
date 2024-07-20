<script lang="ts">
	import type {SvelteHTMLElements} from 'svelte/elements';
	import type {Snippet} from 'svelte';
	import Toot from '@ryanatkn/fuz_mastodon/Toot.svelte';

	import Blog_Post_Header from '$lib/Blog_Post_Header.svelte';
	import {get_blog_feed, type Blog_Post_Data} from '$lib/blog.js';
	import {get_mastodon_cache} from '$routes/blog/Mastodon_Cache.svelte.js';

	interface Props {
		post: Blog_Post_Data;
		attrs?: SvelteHTMLElements['article'] | undefined;
		footer?: Snippet;
		separator?: Snippet; // TODO currently only used before comments, maybe rename to `comments_header` or something?
		children: Snippet;
	}

	const {post, attrs, footer, separator = default_separator, children}: Props = $props();

	const feed = get_blog_feed();

	// TODO maybe clean up the type vs `post`
	const item = feed.items.find((i) => i.slug === post.slug);

	const cache = get_mastodon_cache();
</script>

<svelte:head>
	<!-- TODO title suffix like - ryanatkn.com/blog -->
	<title>{post.title}</title>
</svelte:head>

<div class="blog_post width_md">
	{#if item}
		<article {...attrs}>
			<Blog_Post_Header {item} />
			{@render children()}
			{#if footer}{@render footer()}{/if}
			{#if item.comments}
				{@render separator()}
				<!-- TODO the storage key is weird -->
				<!-- TODO use local cache in dev -->
				<section>
					<h2>Comments</h2>
					{#if !cache || cache.data !== undefined}
						<Toot
							url={item.comments.url}
							include_replies
							initial_autoload
							reply_filter={(item) => ({type: 'favourited_by', favourited_by: [item.account.acct]})}
							storage_key="{item.id}_comments"
							cache={cache?.data}
						/>
					{/if}
				</section>
				{@render separator()}
			{/if}
		</article>
	{:else}
		<div>cannot find post <code>{post.slug}</code></div>
	{/if}
</div>

{#snippet default_separator()}<hr />{/snippet}
