import type {Url} from '@ryanatkn/gro/package_json.js';
import type {Fetch_Value_Cache_Item} from '@ryanatkn/belt/fetch.js';

export const mastodon_dev_cache_data: Array<[Url, Fetch_Value_Cache_Item]> = [
	[
		'GET::https://fosstodon.org/api/v1/statuses/112791910038764650/context',
		{
			key: 'GET::https://fosstodon.org/api/v1/statuses/112791910038764650/context',
			url: 'https://fosstodon.org/api/v1/statuses/112791910038764650/context',
			value: {ancestors: [], descendants: []},
			etag: null,
			last_modified: null,
		},
	],
	[
		'GET::https://fosstodon.org/api/v1/statuses/112791910038764650',
		{
			key: 'GET::https://fosstodon.org/api/v1/statuses/112791910038764650',
			url: 'https://fosstodon.org/api/v1/statuses/112791910038764650',
			value: {
				id: '112791910038764650',
				created_at: '2024-07-15T18:26:03.246Z',
				in_reply_to_id: null,
				in_reply_to_account_id: null,
				sensitive: false,
				spoiler_text: '',
				visibility: 'public',
				language: 'en',
				url: 'https://fosstodon.org/@ryanatkn/113510864332714371',
				replies_count: 0,
				reblogs_count: 0,
				favourites_count: 0,
				edited_at: '2024-07-15T18:26:35.884Z',
				content:
					'<p>I added support for Mastodon comments in fuz_blog, which is a <a href="https://fosstodon.org/tags/SvelteKit" class="mention hashtag" rel="tag">#<span>SvelteKit</span></a> library for developers to make blogs</p><p>blog posts just need to point to a toot on Mastodon</p><p>this post is visible at <a href="https://blog.fuz.dev/blog/1" target="_blank" rel="nofollow noopener noreferrer" translate="no"><span class="invisible">https://</span><span class="">blog.fuz.dev/blog/1</span><span class="invisible"></span></a> and the code that added this functionality is at <a href="https://github.com/ryanatkn/fuz_blog/pull/5" target="_blank" rel="nofollow noopener noreferrer" translate="no"><span class="invisible">https://</span><span class="ellipsis">github.com/ryanatkn/fuz_blog/p</span><span class="invisible">ull/5</span></a></p><p>replies to this post that I favourite show up on the blog using fuz_mastodon - <a href="https://github.com/ryanatkn/fuz_mastodon" target="_blank" rel="nofollow noopener noreferrer" translate="no"><span class="invisible">https://</span><span class="ellipsis">github.com/ryanatkn/fuz_mastod</span><span class="invisible">on</span></a></p>',
				reblog: null,
				application: {name: 'Web', website: null},
				account: {
					id: '112020728666685461',
					username: 'webdevladder',
					acct: 'webdevladder',
					display_name: 'webdevladder',
					locked: false,
					bot: false,
					discoverable: null,
					indexable: false,
					group: false,
					created_at: '2024-03-01T00:00:00.000Z',
					note: '<p>a YouTube channel and blog for realworld webdev with <a href="https://fosstodon.org/tags/TypeScript" class="mention hashtag" rel="tag">#<span>TypeScript</span></a> and <a href="https://fosstodon.org/tags/svelte" class="mention hashtag" rel="tag">#<span>svelte</span></a></p>',
					url: 'https://fosstodon.org/@webdevladder',
					uri: 'https://fosstodon.org/users/webdevladder',
					avatar:
						'https://files.fosstodon.org/accounts/avatars/112/020/728/666/685/461/original/4d51355f1091bbd6.png',
					avatar_static:
						'https://files.fosstodon.org/accounts/avatars/112/020/728/666/685/461/original/4d51355f1091bbd6.png',
					header:
						'https://files.fosstodon.org/accounts/headers/112/020/728/666/685/461/original/494899529f069baf.webp',
					header_static:
						'https://files.fosstodon.org/accounts/headers/112/020/728/666/685/461/original/494899529f069baf.webp',
					followers_count: 1,
					following_count: 0,
					statuses_count: 16,
					last_status_at: '2024-07-20',
					hide_collections: null,
					noindex: false,
					emojis: [],
					roles: [],
					fields: [
						{
							name: 'youtube',
							value:
								'<a href="https://youtube.com/@webdevladder" target="_blank" rel="nofollow noopener noreferrer me" translate="no"><span class="invisible">https://</span><span class="">youtube.com/@webdevladder</span><span class="invisible"></span></a>',
							verified_at: null,
						},
						{
							name: 'website',
							value:
								'<a href="https://www.webdevladder.net/" target="_blank" rel="nofollow noopener noreferrer me" translate="no"><span class="invisible">https://www.</span><span class="">webdevladder.net/</span><span class="invisible"></span></a>',
							verified_at: '2024-07-09T05:35:59.267+00:00',
						},
						{
							name: 'github',
							value:
								'<a href="https://github.com/ryanatkn/webdevladder.net" target="_blank" rel="nofollow noopener noreferrer me" translate="no"><span class="invisible">https://</span><span class="ellipsis">github.com/ryanatkn/webdevladd</span><span class="invisible">er.net</span></a>',
							verified_at: null,
						},
						{
							name: 'me',
							value:
								'<a href="https://www.ryanatkn.com/" target="_blank" rel="nofollow noopener noreferrer me" translate="no"><span class="invisible">https://www.</span><span class="">ryanatkn.com/</span><span class="invisible"></span></a>',
							verified_at: '2024-03-01T17:19:07.902+00:00',
						},
					],
				},
				media_attachments: [],
				mentions: [],
				tags: [{name: 'sveltekit', url: 'https://fosstodon.org/tags/sveltekit'}],
				emojis: [],
				card: {
					url: 'https://blog.fuz.dev/blog/1',
					title: 'Hello fuz_blog',
					description: '',
					language: 'en',
					type: 'link',
					author_name: '',
					author_url: '',
					provider_name: '',
					provider_url: '',
					html: '',
					width: 0,
					height: 0,
					image: null,
					image_description: '',
					embed_url: '',
					blurhash: null,
					published_at: null,
					authors: [{name: '', url: '', account: null}],
				},
				poll: null,
			},
			etag: null,
			last_modified: null,
		},
	],
];
