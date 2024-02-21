import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import astroMetaTags from "astro-meta-tags";

// https://astro.build/config
export default defineConfig({
  site: 'https://emgui.de',
  integrations: [mdx(), sitemap(), tailwind(), astroMetaTags()]
});