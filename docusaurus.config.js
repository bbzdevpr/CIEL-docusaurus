// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CIEL-docusaurus',
  tagline: 'CIEL is pretty cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://bbzdevpr.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/CIEL-docusaurus/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'bbzdevpr', // Usually your GitHub org/user name.
  projectName: 'CIEL-docusaurus', // Usually your repo name.
  deploymentBranch:'gh-pages',
  trailingSlash:false,

  onBrokenLinks:'ignore' ,//'throw',
  onBrokenMarkdownLinks:'ignore', // 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },
  plugins: [
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        language: 'fr',
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://bbzdevpr.github.io/CIEL-docusaurus',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://bbzdevpr.github.io/CIEL-docusaurus',
          // Useful options to enforce blogging best practices
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
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Home',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'Cybersecuritebar',
            position: 'left',
            label: 'Cybersécurité',
          },
          {
            type: 'docSidebar',
            sidebarId: 'Informatiquebar',
            position: 'left',
            label: 'Informatique et réseau',
          },
          {
            type: 'docSidebar',
            sidebarId: 'electroniquebar',
            position: 'left',
            label: 'Electronique',
          },
          //{to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://bbzdevpr.github.io/CIEL-docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Cybersécurité',
                to: '/docs/01 Cybersécurité/Intro Cybersécurité',
              },
              {
                label: 'Informatique et réseau',
                to: '/docs/02 informatique et réseau/Intro Informatique et réseau',
              },
              {
                label: 'Electronique',
                to: '/docs/03 Electronique/Intro electronique',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'X',
                href: 'https://x.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        darkTheme: prismThemes.dracula,
        theme: prismThemes.github,
        
      },
    }),
};

export default config;
