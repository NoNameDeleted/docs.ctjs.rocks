import { defineUserConfig } from '@vuepress/cli';
import { viteBundler } from '@vuepress/bundler-vite';

import theme from './theme.js';

export default defineUserConfig({
  title: 'ct.js Documentation',
  description: 'Docs, tutorials, guides',
  base: '/',
  head: [
    [
      'script',
      {
        src: '/themeSwitcher.js',
      },
    ],
    ['link', { rel: 'icon', href: '/assets/img/logo.png' }],
  ],

  locales: {
    '/': {
      lang: 'en-US', // this will be set as the lang attribute on <html>
      title: 'ct.js Documentation',
      description: 'Docs, tutorials, guides',
    },
    '/ru/': {
      lang: 'ru-Ru',
      title: 'Документация к игровому движку ct.js',
      description: 'Референсы, туториалы, гайды',
    },
    '/pt_BR/': {
      lang: 'pt-BR',
      title: 'Documentação ct.js',
      description: 'Docs, tutoriais, guias',
    },
    '/it/': {
      lang: 'it',
      title: 'Documentazione ct.js',
      description: 'Docs, tutorial, guide',
    },
  },

  markdown: {
    toc: {
      level: [2, 3, 4],
    },
  },

  bundler: viteBundler(),

  theme,

  shouldPrefetch: false,
});
