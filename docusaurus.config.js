// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const mermaid = require('mermaid');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TechWriteIt',
  tagline: 'Bring your technical writing skills to another level',
  favicon: 'img/favicon.ico',

  url: 'https://techwriteit.com',
  baseUrl: '/',
  organizationName: 'VadymSachenko',
  projectName: 'TechWriteIt',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  deploymentBranch: 'gh-pages',
  trailingSlash: true,

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        gtag: {
          trackingID: 'GTM-KD7NKN84',
          anonymizeIP: true,
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/VadymSachenko/TechWriteIt/edit/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/VadymSachenko/TechWriteIt/edit/main/',
          onUntruncatedBlogPosts: 'ignore',
          onInlineAuthors: 'ignore',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['TechWriteIt/node_modules', 'TechWriteIt/vale'],
          filename: 'sitemap.xml',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Removed customLayout so that Docusaurus default layout is used
      navbar: {
        title: 'TechWriteIt',
        logo: {
          alt: 'TechWriteIt',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Docs',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            type: 'dropdown',
            label: 'About',
            position: 'right',
            items: [
              { label: 'Contact', to: '/contact' },
              { label: 'About me', to: '/about-me' },
            ],
          },
          {
            href: 'https://github.com/VadymSachenko/TechWriteIt',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Links',
            items: [
              {
                label: 'Docs',
                to: '/TechWriteIt/docs/category/docusaurus/',
              },
              {
                label: 'Blog',
                to: '/TechWriteIt/blog/',
              },
            ],
          },
          {
            title: 'Contact',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/vadym-sachenko/',
              },
              {
                label: 'Contact page',
                href: '/contact',
              },
            ],
          },
          {
            title: 'GitHub',
            items: [
              {
                label: 'GitHub repo',
                to: 'https://github.com/VadymSachenko/TechWriteIt',
              },
              {
                label: 'Log issue',
                to: 'https://github.com/VadymSachenko/TechWriteIt/issues/new',
              },
              {
                label: 'Closed issues',
                to: 'https://github.com/VadymSachenko/TechWriteIt/issues?q=is%3Aissue%20state%3Aclosed',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Vadym Sachenko`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },
      algolia: {
        appId: 'WMT2IBRD3G',
        apiKey: '11a171a5242628a66044ecff9a1dd12f',
        indexName: 'vadymsachenkoio',
        contextualSearch: true,
        searchParameters: {},
        searchPagePath: 'search',
      },
    }),

  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'],
};

module.exports = config;
