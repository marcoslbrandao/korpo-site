import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://korpo.church',
  trailingSlash: 'always',
  build: { format: 'directory' },
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en', 'es', 'fr'],
    routing: { prefixDefaultLocale: false },
  },
});
