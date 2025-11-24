<script lang="ts">
	import Package_Detail from '@ryanatkn/fuz/Package_Detail.svelte';
	import {pkg_context} from '@ryanatkn/fuz/pkg.svelte.js';
	import Docs_Footer from '@ryanatkn/fuz/Docs_Footer.svelte';
	import Ecosystem_Links_Panel from '@ryanatkn/fuz/Ecosystem_Links_Panel.svelte';
	import Breadcrumb from '@ryanatkn/fuz/Breadcrumb.svelte';

	const pkg = pkg_context.get();
</script>

<main class="mx_auto p_lg width_upto_md">
	<section class="box">
		<header class="box">
			<h1 class="mt_xl2">fuz_blog</h1>
		</header>
		<Breadcrumb>{pkg.package_json.glyph}</Breadcrumb>
	</section>
	<section class="box width_100 mb_lg">
		<div class="panel p_lg width_upto_md">
			<Package_Detail {pkg} />
		</div>
	</section>
	<Ecosystem_Links_Panel />
	<section class="box">
		<Docs_Footer {pkg} root_url="https://www.fuz.dev/">
			<div class="mb_xl3">
				<Breadcrumb>{pkg.package_json.glyph}</Breadcrumb>
			</div>
		</Docs_Footer>
	</section>
</main>

<style>
	h1 {
		display: flex;
		align-items: baseline;
		text-align: center;
	}
	section {
		margin-bottom: var(--space_xl5);
	}
</style>
