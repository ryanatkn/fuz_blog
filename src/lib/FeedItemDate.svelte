<script lang="ts">
	import type {FeedItem} from './feed.js';
	import {format_date} from './util.js';

	const {
		item,
	}: {
		item: FeedItem;
	} = $props();
</script>

{format_date(
	item.date_published || item.date_modified,
)}{#if item.date_published && item.date_modified && item.date_published !== item.date_modified},
	updated {format_date(item.date_modified)}{/if}
