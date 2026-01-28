// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Docs Are Us',
  tagline: 'Enterprise Web3 Infrastructure Built for Scale',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://docsareus.io',
  baseUrl: '/',

  organizationName: 'docsareus',
  projectName: 'docsareus',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/social-card.jpg',
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'Docs Are Us',
        logo: {
          alt: 'Docs Are Us Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/docsareus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Services',
            items: [
              { label: 'UX & Wallets', to: '/docs/intro' },
              { label: 'APIs & Indexing', to: '/docs/intro' },
              { label: 'Smart Contracts', to: '/docs/intro' },
              { label: 'Security', to: '/docs/intro' },
            ],
          },
          {
            title: 'Developers',
            items: [
              { label: 'Documentation', to: '/docs/intro' },
              { label: 'API Reference', to: '/docs/intro' },
              { label: 'SDKs', to: '/docs/intro' },
            ],
          },
          {
            title: 'Company',
            items: [
              { label: 'Blog', to: '/blog' },
              { label: 'GitHub', href: 'https://github.com/docsareus' },
              { label: 'Twitter', href: 'https://twitter.com/docsareus' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Docs Are Us. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
