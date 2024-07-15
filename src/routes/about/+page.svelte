<script lang="ts">
	import Package_Detail from '@ryanatkn/fuz/Package_Detail.svelte';
	import {parse_package_meta} from '@ryanatkn/gro/package_meta.js';
	import Library_Footer from '@ryanatkn/fuz/Library_Footer.svelte';
	import Community_Links_Panel from '@ryanatkn/fuz/Community_Links_Panel.svelte';
	import Breadcrumb from '@ryanatkn/fuz/Breadcrumb.svelte';

	import {package_json, src_json} from '$routes/package.js';

	const pkg = parse_package_meta(package_json.homepage, package_json, src_json);

	// TODO standardize
</script>

<main class="mx_auto p_lg width_md">
	<section class="box">
		<header class="box">
			<h1 class="mt_xl2">fuz_blog</h1>
		</header>
		<Breadcrumb>{package_json.glyph}</Breadcrumb>
	</section>
	<Community_Links_Panel />
	<section class="box w_100 mb_lg">
		<div class="panel p_lg width_md">
			<Package_Detail {pkg} />
		</div>
	</section>
	<section class="box">
		<Library_Footer {pkg} root_url="https://www.fuz.dev/">
			<div class="mb_xl3">
				<Breadcrumb>{package_json.glyph}</Breadcrumb>
			</div>
		</Library_Footer>
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
