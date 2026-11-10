
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';
import cloudflare from '@astrojs/cloudflare';
import node from '@astrojs/node';
import tailwindcss from '@tailwindcss/vite';

const isDev = process.env.NODE_ENV === 'development';

export default defineConfig({
  output: 'server',

  integrations: [
    react(),
    markdoc(),
    keystatic(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: isDev
    ? node({ mode: 'standalone' })
    : cloudflare(),
});
