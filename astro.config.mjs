import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

import sitemap from "@astrojs/sitemap";

// https://ibacachefabian.github.io
export default defineConfig({
  devToolbar: {
    enabled: false
  },
  integrations: [react(), tailwind(), sitemap()]
});
