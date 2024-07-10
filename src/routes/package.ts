// generated by src/routes/package.gen.ts

import type {Package_Json} from '@ryanatkn/gro/package_json.js';
import type {Src_Json} from '@ryanatkn/gro/src_json.js';

export const package_json = {
	name: '@ryanatkn/fuz_blog',
	version: '0.0.1',
	description: 'blog software from scratch with SvelteKit',
	glyph: '🖊️',
	logo: 'logo.svg',
	logo_alt: 'a friendly pixelated spider facing you',
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
	devDependencies: {
		'@ryanatkn/belt': '^0.24.4',
		'@ryanatkn/eslint-config': '^0.4.0',
		'@ryanatkn/fuz': '^0.108.4',
		'@ryanatkn/gro': '^0.129.14',
		'@ryanatkn/moss': '^0.7.1',
		'@sveltejs/adapter-static': '^3.0.2',
		'@sveltejs/kit': '^2.5.18',
		'@sveltejs/package': '^2.3.2',
		'@sveltejs/vite-plugin-svelte': '^3.1.1',
		eslint: '^9.6.0',
		'eslint-plugin-svelte': '^2.41.0',
		prettier: '^3.3.2',
		'prettier-plugin-svelte': '^3.2.5',
		svelte: '^5.0.0-next.175',
		'svelte-check': '^3.8.4',
		tslib: '^2.6.3',
		typescript: '^5.5.3',
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
	exports: {'./package.json': './package.json'},
} satisfies Package_Json;

export const src_json = {
	name: '@ryanatkn/fuz_blog',
	version: '0.0.1',
	modules: {'./package.json': {path: 'package.json', declarations: []}},
} satisfies Src_Json;

// generated by src/routes/package.gen.ts
