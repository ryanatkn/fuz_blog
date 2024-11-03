<script lang="ts">
	import '@ryanatkn/moss/style.css';
	import '@ryanatkn/moss/theme.css';
	import '@ryanatkn/fuz_code/theme.css';
	import '$routes/moss.css';
	import '$routes/style.css';

	import Themed from '@ryanatkn/fuz/Themed.svelte';
	import Dialog from '@ryanatkn/fuz/Dialog.svelte';
	import Contextmenu_Root from '@ryanatkn/fuz/Contextmenu_Root.svelte';
	import {contextmenu_action} from '@ryanatkn/fuz/contextmenu_state.svelte.js';
	import type {Snippet} from 'svelte';

	import Settings from '$routes/Settings.svelte';
	import {blog_feed_context} from '$lib/blog.js';
	import {feed} from '$routes/blog/feed.js';

	interface Props {
		children: Snippet;
	}

	const {children}: Props = $props();

	blog_feed_context.set(feed);

	let show_settings = $state(false);
</script>

<svelte:head>
	<title>fuz_blog</title>
	<!-- TODO add JSONFeed -->
	<link rel="alternate" type="application/atom+xml" title="Atom" href={feed.atom.feed_url} />
</svelte:head>

<svelte:body
	use:contextmenu_action={[
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
	]}
/>

<Themed>
	<Contextmenu_Root>
		{@render children()}
		{#if show_settings}
			<Dialog onclose={() => (show_settings = false)}>
				<div class="pane">
					<Settings />
				</div>
			</Dialog>
		{/if}
	</Contextmenu_Root>
</Themed>
