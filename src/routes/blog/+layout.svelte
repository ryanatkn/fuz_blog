<script lang="ts">
	import Breadcrumb from '@ryanatkn/fuz/Breadcrumb.svelte';
	import type {Snippet} from 'svelte';
	import Fuz_Logo from '@ryanatkn/fuz/Fuz_Logo.svelte';
	import {DEV} from 'esm-env';
	import {onMount} from 'svelte';

	interface Props {
		children: Snippet;
	}

	const {children}: Props = $props();

	// TODO BLOCK use a cache helper?
	let cache: Fetch_Value_Cache | undefined | null = $state();

	onMount(async () => {
		if (DEV) {
			cache = new Map((await import('./mastodon_dev_cache_data.js')).mastodon_dev_cache_data);
			// To get the latest cache data, run this in the console: (and disable the `reply_filter` if you want all the data)
			// cache = new Map();
			// window.cache = cache;
			// setTimeout(() => navigator.clipboard.writeText(JSON.stringify(Array.from(cache.entries()))), 500)
		} else {
			cache = null;
		}
	});

	// TODO redirect from the numbers or render UI to navigate to it, maybe in `Blog_Post`
</script>

<div class="breadcrumbs">
	<Breadcrumb><Fuz_Logo project="fuz_blog" size="var(--size_xl)" /></Breadcrumb>
</div>
<div class="wrapper">
	{@render children()}
</div>
<div class="breadcrumbs mb_xl9">
	<Breadcrumb><Fuz_Logo project="fuz_blog" size="var(--size_xl)" /></Breadcrumb>
</div>

<!-- TODO 404, needs to work with prerendering -->
<!-- <section>
	<p>
		nothing's here, sorry if this is an
		<a href="https://www.w3.org/Provider/Style/URI">uncool URI</a>
	</p>
</section> -->

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		flex: 1;
		padding: var(--space_xl2);
	}
	.breadcrumbs {
		margin-top: var(--space_xl3);
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
