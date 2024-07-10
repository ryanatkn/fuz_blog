<script lang="ts">
	import {base} from '$app/paths';
	import Card from '@ryanatkn/fuz/Card.svelte';
</script>

<main>
	<section class="box">
		<header>
			<h1 class="mt_xl2">fuz_blog</h1>
		</header>
		<blockquote>blog software from scratch with SvelteKit</blockquote>
	</section>
	<section>
		<Card href="{base}/blog" icon="🖊️">blog</Card>
	</section>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 auto;
	}
</style>
