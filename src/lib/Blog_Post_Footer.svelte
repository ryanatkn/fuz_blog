<script lang="ts">
	import type {Blog_Post_Item} from '$lib/blog.js';

	interface Props {
		item: Blog_Post_Item;
	}

	const {item}: Props = $props();

	item; // TODO
</script>

<footer>
	<div class="panel p_lg">
		<p>
			<span>
				find me on <a href="https://joinmastodon.org/">Mastodon</a> and
				<a href="https://wikipedia.org/wiki/ActivityPub">ActivityPub</a>:</span
			>
			<br />
			<a href="https://hci.social/@ryanatkn">@ryanatkn@hci.social</a>
		</p>
	</div>
</footer>

<style>
	footer {
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
