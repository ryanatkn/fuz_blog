<script lang="ts">
	import Feed_Item_Date from '$lib/Feed_Item_Date.svelte';
	import type {Blog_Post_Item} from '$lib/blog.js';

	interface Props {
		item: Blog_Post_Item;
	}

	const {item}: Props = $props();
</script>

<header>
	<h1 class="mt_xl5 mb_lg">{item.title}</h1>
	<p class="mb_xl5">
		<Feed_Item_Date {item} />
	</p>
</header>
