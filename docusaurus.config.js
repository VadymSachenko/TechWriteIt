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
        googleTagManager: {
          containerId: 'GTM-TD8R3VXT',
        },
        docs: {
          // Main Docs configuration
          sidebarPath: require.resolve('./sidebars/sidebar-docs.js'),
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

  // Add a new docs plugin instance for the "AI & Technical Writing" section.
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'tw-ai', // Unique id for this docs instance
        path: 'tw-ai', // Folder containing your "AI & Technical Writing" content
        routeBasePath: 'tw-ai', // URL path, e.g., https://techwriteit.com/tw-ai
        sidebarPath: require.resolve('./sidebars/sidebar-ai-technical-writing.js'),
        editUrl: 'https://github.com/VadymSachenko/TechWriteIt/edit/main/',
      },
    ],
  ],

  scripts: [
    {
      // Optional: if you want to include additional scripts (e.g., GTM)
      content: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-TD8R3VXT');`,
      async: true,
    },
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
          // Main docs section
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Docs',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          // New "AI & Technical Writing" section
          {
            type: 'docSidebar',
            docsPluginId: 'ai-tw', // Reference the new instance
            sidebarId: 'aiTechnicalWritingSidebar', // Should match the key in your sidebar file
            position: 'left',
            label: 'AI & Technical Writing',
          },
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
                to: '/docs/category/docusaurus/',
              },
              {
                label: 'Blog',
                to: '/blog',
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
