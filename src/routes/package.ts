// generated by src/routes/package.gen.ts

import type {Package_Json} from '@ryanatkn/gro/package_json.js';
import type {Src_Json} from '@ryanatkn/gro/src_json.js';

export const package_json = {
	name: '@ryanatkn/fuz_blog',
	version: '0.10.0',
	description: 'blog software from scratch with SvelteKit',
	glyph: '🖊️',
	logo: 'logo.svg',
	logo_alt: 'a friendly yellow spider facing you',
	public: true,
	homepage: 'https://blog.fuz.dev/',
	repository: 'https://github.com/ryanatkn/fuz_blog',
	scripts: {
		start: 'gro dev',
		dev: 'gro dev',
		build: 'gro build',
		check: 'gro check',
		test: 'gro test',
		preview: 'vite preview',
		deploy: 'gro deploy',
	},
	type: 'module',
	engines: {node: '>=20.17'},
	peerDependencies: {
		'@ryanatkn/belt': '*',
		'@ryanatkn/fuz': '*',
		'@ryanatkn/fuz_mastodon': '*',
		'@ryanatkn/gro': '*',
		'@ryanatkn/moss': '*',
		'@sveltejs/kit': '^2',
		'date-fns': '^4',
		svelte: '^5',
	},
	devDependencies: {
		'@changesets/changelog-git': '^0.2.0',
		'@ryanatkn/belt': '^0.25.3',
		'@ryanatkn/eslint-config': '^0.5.5',
		'@ryanatkn/fuz': '^0.130.1',
		'@ryanatkn/fuz_code': '^0.20.0',
		'@ryanatkn/fuz_mastodon': '^0.28.0',
		'@ryanatkn/gro': '^0.143.2',
		'@ryanatkn/moss': '^0.18.2',
		'@sveltejs/adapter-static': '^3.0.6',
		'@sveltejs/kit': '^2.7.3',
		'@sveltejs/package': '^2.3.7',
		'@sveltejs/vite-plugin-svelte': '^4.0.0',
		'@types/node': '^22.8.1',
		'date-fns': '^4.1.0',
		eslint: '^9.13.0',
		'eslint-plugin-svelte': '^2.46.0',
		prettier: '^3.3.3',
		'prettier-plugin-svelte': '^3.2.7',
		svelte: '^5.1.3',
		'svelte-check': '^4.0.5',
		tslib: '^2.8.0',
		typescript: '^5.6.3',
		'typescript-eslint': '^8.11.0',
		uvu: '^0.5.6',
	},
	prettier: {
		plugins: ['prettier-plugin-svelte'],
		useTabs: true,
		printWidth: 100,
		singleQuote: true,
		bracketSpacing: false,
		overrides: [{files: 'package.json', options: {useTabs: false}}],
	},
	sideEffects: ['**/*.css'],
	files: ['dist'],
	exports: {
		'./package.json': './package.json',
		'./blog_helpers.js': {types: './dist/blog_helpers.d.ts', default: './dist/blog_helpers.js'},
		'./Blog_Post_Header.svelte': {
			types: './dist/Blog_Post_Header.svelte.d.ts',
			svelte: './dist/Blog_Post_Header.svelte',
			default: './dist/Blog_Post_Header.svelte',
		},
		'./Blog_Post.svelte': {
			types: './dist/Blog_Post.svelte.d.ts',
			svelte: './dist/Blog_Post.svelte',
			default: './dist/Blog_Post.svelte',
		},
		'./blog.gen.js': {types: './dist/blog.gen.d.ts', default: './dist/blog.gen.js'},
		'./blog.js': {types: './dist/blog.d.ts', default: './dist/blog.js'},
		'./Feed_Item_Date.svelte': {
			types: './dist/Feed_Item_Date.svelte.d.ts',
			svelte: './dist/Feed_Item_Date.svelte',
			default: './dist/Feed_Item_Date.svelte',
		},
		'./feed.js': {types: './dist/feed.d.ts', default: './dist/feed.js'},
		'./Hash_Link.svelte': {
			types: './dist/Hash_Link.svelte.d.ts',
			svelte: './dist/Hash_Link.svelte',
			default: './dist/Hash_Link.svelte',
		},
		'./post.task.js': {types: './dist/post.task.d.ts', default: './dist/post.task.js'},
		'./update_post.task.js': {
			types: './dist/update_post.task.d.ts',
			default: './dist/update_post.task.js',
		},
		'./util.js': {types: './dist/util.d.ts', default: './dist/util.js'},
	},
} satisfies Package_Json;

export const src_json = {
	name: '@ryanatkn/fuz_blog',
	version: '0.10.0',
	modules: {
		'./package.json': {path: 'package.json', declarations: []},
		'./blog_helpers.js': {
			path: 'blog_helpers.ts',
			declarations: [
				{name: 'resolve_blog_post_item', kind: 'function'},
				{name: 'collect_blog_post_ids', kind: 'function'},
				{name: 'load_blog_post_modules', kind: 'function'},
				{name: 'to_next_blog_post_id', kind: 'function'},
				{name: 'to_blog_post_path', kind: 'function'},
			],
		},
		'./Blog_Post_Header.svelte': {path: 'Blog_Post_Header.svelte', declarations: []},
		'./Blog_Post.svelte': {path: 'Blog_Post.svelte', declarations: []},
		'./blog.gen.js': {path: 'blog.gen.ts', declarations: [{name: 'gen', kind: 'variable'}]},
		'./blog.js': {
			path: 'blog.ts',
			declarations: [
				{name: 'Blog_Feed_Data', kind: 'type'},
				{name: 'Blog_Feed', kind: 'type'},
				{name: 'Blog_Post_Data', kind: 'type'},
				{name: 'Blog_Comments', kind: 'type'},
				{name: 'Mastodon_Blog_Comments', kind: 'type'},
				{name: 'Blog_Module', kind: 'type'},
				{name: 'Blog_Post_Module', kind: 'type'},
				{name: 'Blog_Post_Id', kind: 'type'},
				{name: 'Blog_Post_Item', kind: 'type'},
				{name: 'blog_feed_context', kind: 'variable'},
			],
		},
		'./Feed_Item_Date.svelte': {path: 'Feed_Item_Date.svelte', declarations: []},
		'./feed.js': {
			path: 'feed.ts',
			declarations: [
				{name: 'Feed', kind: 'type'},
				{name: 'Feed_Item', kind: 'type'},
				{name: 'create_atom_feed', kind: 'function'},
			],
		},
		'./Hash_Link.svelte': {path: 'Hash_Link.svelte', declarations: []},
		'./post.task.js': {path: 'post.task.ts', declarations: [{name: 'task', kind: 'variable'}]},
		'./update_post.task.js': {
			path: 'update_post.task.ts',
			declarations: [{name: 'task', kind: 'variable'}],
		},
		'./util.js': {
			path: 'util.ts',
			declarations: [
				{name: 'format_date', kind: 'function'},
				{name: 'to_pathname', kind: 'function'},
			],
		},
	},
} satisfies Src_Json;

// generated by src/routes/package.gen.ts
