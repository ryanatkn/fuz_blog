import type {Component} from 'svelte';
import type {Flavored, Omit_Strict} from '@ryanatkn/belt/types.js';
import {create_context} from '@ryanatkn/fuz/context_helpers.js';

import type {Feed} from './feed.js';

// TODO inconsistent naming with `Blog_Post_Data` and `Blog_Post_Item`,
// consider `BlogItem` or `Blog_Feed_Item`?
// maybe `Metadata` instead of `Data` in both cases?
// also think about `Blog_Feed_Item` instead of `Blog_Post_Item`
export type Blog_Feed_Data = Omit_Strict<Feed, 'items'>;

export interface Blog_Feed extends Feed {
	items: Array<Blog_Post_Item>;
}

/**
 * The author-defined data for each post.
 */
export interface Blog_Post_Data {
	title: string;
	slug: string;
	date_published: string; // TODO maybe calculated instead of manually defined?
	date_modified: string; // TODO maybe calculated instead of manually defined?
	summary: string;
	tags?: Array<string>;
	comments?: Blog_Comments;
}

// TODO support other comment providers
export type Blog_Comments = Mastodon_Blog_Comments;

export interface Mastodon_Blog_Comments {
	url: string;
	type: 'mastodon';
}

export interface Blog_Module {
	blog: Blog_Feed_Data;
}

export interface Blog_Post_Module {
	post: Blog_Post_Data;
	default: Component<any>; // TODO types
}

export type Blog_Post_Id = Flavored<number, 'Blog_Post_Id'>;

export interface Blog_Post_Item extends Blog_Post_Data {
	/**
	 * Blog post path with `blog_post_id`.
	 */
	id: string;

	/**
	 * Blog post path with `slug`.
	 */
	url: string;

	/**
	 * Incrementing 1-based integer.
	 */
	blog_post_id: Blog_Post_Id; // TODO maybe random?

	tags: Array<string>; // required
}

export const blog_feed_context = create_context<Blog_Feed>();
