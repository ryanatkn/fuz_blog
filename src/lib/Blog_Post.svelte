<script lang="ts">
	import type {SvelteHTMLElements} from 'svelte/elements';
	import type {Snippet} from 'svelte';
	import Toot from '@ryanatkn/fuz_mastodon/Toot.svelte';
	import {mastodon_cache_context} from '@ryanatkn/fuz_mastodon/mastodon_cache.svelte.js';

	import Blog_Post_Header from '$lib/Blog_Post_Header.svelte';
	import {blog_feed_context, type Blog_Post_Data} from '$lib/blog.js';

	interface Props {
		post: Blog_Post_Data;
		attrs?: SvelteHTMLElements['article'] | undefined;
		footer?: Snippet;
		separator?: Snippet; // TODO currently only used before comments, maybe rename to `comments_header` or something?
		children: Snippet;
	}

	const {post, attrs, footer, separator = default_separator, children}: Props = $props();

	const feed = blog_feed_context.get();

	// TODO maybe clean up the type vs `post`
	const item = feed.items.find((i) => i.slug === post.slug);

	const cache = mastodon_cache_context.get();
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
			{@render footer?.()}
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
							settings_storage_key="{item.id}_comments_settings"
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
