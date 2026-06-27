import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

const config = {
  extensions: ['.svelte', '.md', '.svx'],
  preprocess: [
    vitePreprocess(),
    mdsvex({ extensions: ['.md'] }),
    mdsvex({ extensions: ['.svx', '.md'] })
  ],
  kit: { adapter: adapter() }
};

export default config;
