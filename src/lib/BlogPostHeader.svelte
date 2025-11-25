<script lang="ts">
	import FeedItemDate from './FeedItemDate.svelte';
	import type {BlogPostItem} from './blog.js';

	interface Props {
		item: BlogPostItem;
	}

	const {item}: Props = $props();
</script>

<header>
	<h1 class="mt_xl5 mb_lg">{item.title}</h1>
	<p class="mb_xl5">
		<FeedItemDate {item} />
	</p>
</header>
