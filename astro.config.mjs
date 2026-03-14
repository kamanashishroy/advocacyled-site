import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://advocacyled.com',
  output: 'static',
  integrations: [sitemap()],
});
