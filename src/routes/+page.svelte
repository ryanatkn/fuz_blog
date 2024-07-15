<script lang="ts">
	import {base} from '$app/paths';
	import Card from '@ryanatkn/fuz/Card.svelte';
	import Fuz_Logo from '@ryanatkn/fuz/Fuz_Logo.svelte';
	import Library_Footer from '@ryanatkn/fuz/Library_Footer.svelte';
	// TODO @many why is this import needed? `Code` already imports it. Fails in dev with SSR enabled without it. Is there a Vite config option that would be better? I tried the combinations of `ssr.external/noExternal/external` with `@ryanatkn/fuz_code` and `prismjs`.
	import 'prismjs';
	import Code from '@ryanatkn/fuz_code/Code.svelte';
	import {parse_package_meta} from '@ryanatkn/gro/package_meta.js';

	import {package_json, src_json} from '$routes/package.js';

	const pkg = parse_package_meta(package_json.homepage, package_json, src_json);

	/* eslint-disable @typescript-eslint/no-unnecessary-template-expression */
</script>

<main class="mx_auto p_lg width_md">
	<section class="box">
		<header class="pt_sm">
			<Fuz_Logo project="fuz_blog" size="var(--icon_size_xl3)" />
			<h1 class="mt_xl2 text_align_center">fuz_blog</h1>
		</header>
		<blockquote>blog software from scratch with SvelteKit</blockquote>
	</section>
	<section class="box">
		<Card href="{base}/blog" icon="🖊️">blog</Card>
	</section>
	<section>
		<h2>Docs</h2>
		<aside>⚠️ Docs are a work in progress!</aside>
		<p>
			To enable your generated <code>feed.xml</code>, include it as a <code>link</code> in your layout:
		</p>
		<Code
			content={`<!-- src/routes/+layout.svelte -->
${'<'}script lang="ts">
	import {set_blog_feed, get_blog_feed} from '@ryanatkn/fuz_blog/blog.js';

	import {feed} from '$routes/blog/feed.js';

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
		<h3>Create a new post</h3>
		<Code
			content={`$ gro post "Some post title"
$ gro post --help`}
		/>
		<h3>Update an existing post</h3>
		<Code
			content={`$ gro update_post 1
$ gro update_post --help`}
		/>
	</section>
	<section class="mb_xl5 box">
		<a class="chip mb_xl3" href="{base}/about">about</a>
		<Library_Footer {pkg} root_url="https://www.fuz.dev/" />
	</section>
</main>
