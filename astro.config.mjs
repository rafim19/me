// @ts-check

import cloudflare from "@astrojs/cloudflare";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://rafimuhammad.dev",

	integrations: [mdx(), sitemap()],

	adapter: cloudflare(),

	markdown: {
		shikiConfig: {
			theme: "github-dark",
			wrap: true,
		},
	},

	vite: {
		plugins: [tailwindcss()],
	},
});
