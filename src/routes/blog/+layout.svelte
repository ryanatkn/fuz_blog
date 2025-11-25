<script lang="ts">
	import Breadcrumb from '@ryanatkn/fuz/Breadcrumb.svelte';
	import Svg from '@ryanatkn/fuz/Svg.svelte';
	import {fuz_blog_logo} from '@ryanatkn/fuz/logos.js';
	import {DEV} from 'esm-env';
	import type {Snippet} from 'svelte';
	import {
		MastodonCache,
		mastodon_cache_context,
	} from '@ryanatkn/fuz_mastodon/mastodon_cache.svelte.js';

	interface Props {
		children: Snippet;
	}

	const {children}: Props = $props();

	if (DEV) {
		mastodon_cache_context.set(
			new MastodonCache(
				async () => (await import('./mastodon_dev_cache_data.js')).mastodon_dev_cache_data,
			),
		);

		// // To get the latest cache data, add these lines:
		// if (typeof window !== 'undefined') {
		// 	const mastodon_cache = mastodon_cache_context.get();
		// 	// $inspect('data', JSON.stringify(Array.from(mastodon_cache.data.entries())));
		// 	window.mastodon_cache = mastodon_cache;
		// 	// Then run this in the console and then click into the document to make the clipboard work: (and disable the `reply_filter` if you want all the data)
		// 	setTimeout(() => {
		// 		const text = JSON.stringify(Array.from(mastodon_cache.data.entries()));
		// 		console.log(text);
		// 		void navigator.clipboard.writeText(text);
		// 	}, 500);
		// }
		// Then paste the string into `$routes/blog/mastodon_dev_cache_data.ts`
		// as the exported `mastodon_dev_cache_data` value.
	}

	// TODO redirect from the numbers or render UI to navigate to it, maybe in `BlogPost`
</script>

<div class="breadcrumbs">
	<Breadcrumb><Svg data={fuz_blog_logo} size="var(--font_size_xl)" /></Breadcrumb>
</div>
<div class="wrapper">
	{@render children()}
</div>
<div class="breadcrumbs mb_xl9">
	<Breadcrumb><Svg data={fuz_blog_logo} size="var(--font_size_xl)" /></Breadcrumb>
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
