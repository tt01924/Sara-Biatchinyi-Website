import { defineConfig } from 'astro/config';

import sanity from "@sanity/astro";

// https://astro.build/config
export default defineConfig({
  // uncomment for gh pages
  // site: "https://tt01924.github.io",
  // base: "Sara-Biatchinyi-Website"

  site: "https://sarabiatchinyi.com"
  ,
  integrations: [sanity({
    projectId: 'k6u6ik8n',
    dataset: 'production',
    // Set useCdn to false if you're building statically.
    useCdn: false,
  })]
});