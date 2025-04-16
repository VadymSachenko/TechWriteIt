// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const mermaid = require('mermaid');
const path = require('path');

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

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'aiTw',
        path: 'ai-technical-writing',
        routeBasePath: 'ai-technical-writing',
        sidebarPath: require.resolve('./sidebars/sidebar-ai-technical-writing.js'),
        editUrl: 'https://github.com/VadymSachenko/TechWriteIt/edit/main/',
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        googleTagManager: {
          containerId: 'GTM-TD8R3VXT',
        },
        docs: {
          sidebarPath: require.resolve('./sidebars/sidebar-docs.js'),
          editUrl: 'https://github.com/VadymSachenko/TechWriteIt/edit/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/VadymSachenko/TechWriteIt/edit/main/',
          onUntruncatedBlogPosts: 'ignore',
          onInlineAuthors: 'ignore',
          routeBasePath: '/',
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'All posts',
        },
        pages: {
          path: 'src/pages',
          routeBasePath: '/pages',
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
            label: 'Docusaurus',
          },
          { to: '/', label: 'Blog', position: 'left' },
          {
            // "AI & Technical Writing" section item
            type: 'docSidebar',
            docsPluginId: 'aiTw',                 // Must match the plugin "id" above
            sidebarId: 'aiTechnicalWritingSidebar', // Must match what's exported from sidebar-ai-technical-writing.js
            position: 'left',
            label: 'AI & Technical Writing',
          },
          {
            type: 'dropdown',
            label: 'About',
            position: 'right',
            items: [
              {
                to: '/pages/about-me',
                label: 'About Me',
              },
              {
                to: '/pages/contact',
                label: 'Contact',
              },
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
                label: 'Docusaurus',
                to: '/docs/category/docusaurus/',
              },
              {
                label: 'Blog',
                to: '/',
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

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            from: '/blog/2023/09/14/docs-as-code-process-and-tools',
            to: '/2023/09/14/docs-as-code-process-and-tools',
          },
          {
            from: '/blog/2023/09/20/what-are-documentation-style-guides-and-why-you-should-use-them',
            to: '/2023/09/20/what-are-documentation-style-guides-and-why-you-should-use-them',
          },
          {
            from: '/blog/2023/09/08/setting-up-a-documentation-development-process',
            to: '/2023/09/08/setting-up-a-documentation-development-process',
          },
          {
            from: '/blog/2023/09/07/docs-as-code-methodology-and-advantages',
            to: '/2023/09/07/docs-as-code-methodology-and-advantages',
          },
          {
            from: '/blog/2025/04/04/enhancing-user-guides-with-iconify',
            to: '/2025/04/04/enhancing-user-guides-with-iconify',
          }
        ],
      },
    ],
  ],
};

module.exports = config;
