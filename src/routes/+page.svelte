<script lang="ts">
	import {base} from '$app/paths';
	import Card from '@ryanatkn/fuz/Card.svelte';
	// TODO @multiple why is this import needed? `Code` already imports it. Fails in dev with SSR enabled without it. Is there a Vite config option that would be better? I tried the combinations of `ssr.external/noExternal/external` with `@ryanatkn/fuz_code` and `prismjs`.
	import 'prismjs';
	import Code from '@ryanatkn/fuz_code/Code.svelte';

	/* eslint-disable @typescript-eslint/no-unnecessary-template-expression */
</script>

<main class="box">
	<section class="box">
		<header>
			<h1 class="mt_xl2">fuz_blog</h1>
		</header>
		<blockquote>blog software from scratch with SvelteKit</blockquote>
	</section>
	<section>
		<Card href="{base}/blog" icon="🖊️">blog</Card>
	</section>
	<section class="width_md">
		<h2>Docs</h2>
		<aside>⚠️ Docs are a work in progress!</aside>
		<p>
			To enable your generated <code>feed.xml</code>, include it as a <code>link</code> in your layout:
		</p>
		<div class="w_100">
			<Code
				content={`<!-- src/routes/+layout.svelte -->
${'<'}script lang="ts">
	import {set_blog_feed, get_blog_feed} from '@ryanatkn/fuz_blog/blog.js';
	import {feed} from '@ryanatkn/fuz_blog/feed.js';

	set_blog_feed(feed);

	// To get the feed from any descendent:
	const feed = get_blog_feed(); 
</script>

<svelte:head>
	<title>(your title here)</title>
	<link
		rel="alternate"
		type="application/atom+xml"
		title="Atom"
		href={feed.atom.feed_url}
	/>
</svelte:head>`}
			/>
		</div>
	</section>
	<footer class="mb_xl5">
		<a href="https://github.com/ryanatkn/fuz_blog">source code</a>
	</footer>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 auto;
	}
</style>
