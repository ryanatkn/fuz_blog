<script lang="ts">
	import PackageDetail from '@ryanatkn/fuz/PackageDetail.svelte';
	import {pkg_context} from '@ryanatkn/fuz/pkg.svelte.js';
	import DocsFooter from '@ryanatkn/fuz/DocsFooter.svelte';
	import EcosystemLinksPanel from '@ryanatkn/fuz/EcosystemLinksPanel.svelte';
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
			<PackageDetail {pkg} />
		</div>
	</section>
	<EcosystemLinksPanel />
	<section class="box">
		<DocsFooter {pkg} root_url="https://www.fuz.dev/">
			<div class="mb_xl3">
				<Breadcrumb>{pkg.package_json.glyph}</Breadcrumb>
			</div>
		</DocsFooter>
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
