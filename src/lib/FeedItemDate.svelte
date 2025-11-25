<script lang="ts">
	import type {FeedItem} from './feed.js';
	import {format_date} from './util.js';

	interface Props {
		item: FeedItem;
	}

	const {item}: Props = $props();
</script>

{format_date(
	item.date_published || item.date_modified,
)}{#if item.date_published && item.date_modified && item.date_published !== item.date_modified},
	updated {format_date(item.date_modified)}{/if}
