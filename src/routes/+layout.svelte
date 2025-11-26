<script lang="ts">
	import '@ryanatkn/moss/style.css';
	import '@ryanatkn/moss/theme.css';
	import '@ryanatkn/fuz_code/theme.css';
	import '$routes/moss.css';
	import '$routes/style.css';

	import Themed from '@ryanatkn/fuz/Themed.svelte';
	import Dialog from '@ryanatkn/fuz/Dialog.svelte';
	import ContextmenuRoot from '@ryanatkn/fuz/ContextmenuRoot.svelte';
	import {contextmenu_attachment} from '@ryanatkn/fuz/contextmenu_state.svelte.js';
	import {Library, library_context} from '@ryanatkn/fuz/library.svelte.js';
	import type {Snippet} from 'svelte';

	import Settings from '$routes/Settings.svelte';
	import {blog_feed_context} from '$lib/blog.js';
	import {feed} from '$routes/blog/feed.js';
	import {library_json} from '$routes/library.js';

	interface Props {
		children: Snippet;
	}

	const {children}: Props = $props();

	library_context.set(new Library(library_json));

	blog_feed_context.set(feed);

	let show_settings = $state(false);
</script>

<svelte:head>
	<title>fuz_blog</title>
	<!-- TODO add JSONFeed -->
	<link rel="alternate" type="application/atom+xml" title="Atom" href={feed.atom.feed_url} />
</svelte:head>

<svelte:body
	{@attach contextmenu_attachment([
		{
			snippet: 'text',
			props: {
				content: 'Settings',
				icon: '?',
				run: () => {
					show_settings = true;
				},
			},
		},
		{
			snippet: 'text',
			props: {
				content: 'Reload',
				icon: '⟳',
				run: () => {
					location.reload();
				},
			},
		},
	])}
/>

<Themed>
	<ContextmenuRoot>
		{@render children()}
		{#if show_settings}
			<Dialog onclose={() => (show_settings = false)}>
				<div class="pane p_md width_upto_md mx_auto">
					<Settings />
				</div>
			</Dialog>
		{/if}
	</ContextmenuRoot>
</Themed>
