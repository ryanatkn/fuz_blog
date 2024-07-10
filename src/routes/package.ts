// generated by src/routes/package.gen.ts

import type {Package_Json} from '@ryanatkn/gro/package_json.js';
import type {Src_Json} from '@ryanatkn/gro/src_json.js';

export const package_json = {
	name: '@ryanatkn/fuz_blog',
	version: '0.1.3',
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
	engines: {node: '>=20.12'},
	peerDependencies: {
		'@ryanatkn/belt': '*',
		'@ryanatkn/fuz': '*',
		'@ryanatkn/moss': '*',
		'@sveltejs/kit': '^2',
		'date-fns': '^3',
		svelte: '^5.0.0-next.0',
	},
	devDependencies: {
		'@changesets/changelog-git': '^0.2.0',
		'@ryanatkn/belt': '^0.24.4',
		'@ryanatkn/eslint-config': '^0.4.0',
		'@ryanatkn/fuz': '^0.108.4',
		'@ryanatkn/gro': '^0.129.14',
		'@ryanatkn/moss': '^0.7.1',
		'@sveltejs/adapter-static': '^3.0.2',
		'@sveltejs/kit': '^2.5.18',
		'@sveltejs/package': '^2.3.2',
		'@sveltejs/vite-plugin-svelte': '^3.1.1',
		'@types/node': '^20.14.10',
		'date-fns': '^3.6.0',
		eslint: '^9.6.0',
		'eslint-plugin-svelte': '^2.41.0',
		prettier: '^3.3.2',
		'prettier-plugin-svelte': '^3.2.5',
		svelte: '^5.0.0-next.175',
		'svelte-check': '^3.8.4',
		tslib: '^2.6.3',
		typescript: '^5.5.2',
		'typescript-eslint': '^8.0.0-alpha.39',
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
		'./Blog_Post_Footer.svelte': {
			types: './dist/Blog_Post_Footer.svelte.d.ts',
			svelte: './dist/Blog_Post_Footer.svelte',
			default: './dist/Blog_Post_Footer.svelte',
		},
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
		'./util.js': {types: './dist/util.d.ts', default: './dist/util.js'},
	},
} satisfies Package_Json;

export const src_json = {
	name: '@ryanatkn/fuz_blog',
	version: '0.1.3',
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
		'./Blog_Post_Footer.svelte': {path: 'Blog_Post_Footer.svelte', declarations: []},
		'./Blog_Post_Header.svelte': {path: 'Blog_Post_Header.svelte', declarations: []},
		'./Blog_Post.svelte': {path: 'Blog_Post.svelte', declarations: []},
		'./blog.gen.js': {path: 'blog.gen.ts', declarations: [{name: 'gen', kind: 'variable'}]},
		'./blog.js': {
			path: 'blog.ts',
			declarations: [
				{name: 'Blog_Feed_Data', kind: 'type'},
				{name: 'Blog_Feed', kind: 'type'},
				{name: 'Blog_Post_Data', kind: 'type'},
				{name: 'Blog_Module', kind: 'type'},
				{name: 'Blog_Post_Module', kind: 'type'},
				{name: 'Blog_Post_Id', kind: 'type'},
				{name: 'Blog_Post_Item', kind: 'type'},
				{name: 'get_blog_feed', kind: 'function'},
				{name: 'set_blog_feed', kind: 'function'},
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
