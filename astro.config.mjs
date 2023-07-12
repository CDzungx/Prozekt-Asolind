import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import solidJs from '@astrojs/solid-js';
import prefetch from '@astrojs/prefetch';
import markdoc from '@astrojs/markdoc';
import tailwind from '@astrojs/tailwind';
import image from '@astrojs/image';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/serverless';
import robotsTxt from 'astro-robots-txt';
import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
   site: 'https://prozekt-asolind.vercel.app/',
   integrations: [
      prefetch(),
      markdoc(),
      tailwind(),
      image({
         cacheDir: './.cache/image',
         serviceEntryPoint: '@astrojs/image/sharp',
      }),
      icon({
         include: {
            mdi: ['github'],
            ic: ['outline-discord'],
            ph: ['code-fill'],
         },
      }),
      sitemap(),
      robotsTxt(),
      compress(),
      react(),
      solidJs(),
   ],
   build: {
      inlineStylesheets: 'auto',
   },
   compressHTML: true,
   ssr: {
      noExternal: ['animate.css'],
   },
   output: 'hybrid',
   adapter: vercel({
      analytics: true,
      split: true,
   }),
});
