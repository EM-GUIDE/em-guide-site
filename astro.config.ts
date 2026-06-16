import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from "@tailwindcss/vite";
import astroMetaTags from "astro-meta-tags";

// https://astro.build/config
export default defineConfig({
  site: 'https://emgui.de',
  integrations: [mdx(), sitemap(), astroMetaTags()],
  image: {
    // Authorize remote CMS images so getImage()/<Image> can download and
    // optimize them into local assets at build time.
    remotePatterns: [{ protocol: 'https' }],
  },
  vite: {
    plugins: [tailwindcss()],
  },
  compressHTML: true,
});