import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import circleDependency from 'vite-plugin-circular-dependency';

import path from 'path';

export default defineConfig({
	plugins: [
		sveltekit(),
		circleDependency({
			include: [/\.[jt]sx?$/, /\.svelte\?$/]
		})
	],
	resolve: {
		alias: {
			src: path.resolve(__dirname, './src')
		}
	},
	test: {
		passWithNoTests: true,
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
