// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const mermaid = require('mermaid')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TechWriteIt',
  tagline: 'Bring your technical writing skills to another level',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://github.com',
  baseUrl: '/TechWriteIt/',
  organizationName: 'VadymSachenko', // Usually your GitHub org/user name.
  projectName: 'TechWriteIt', // Usually your repo name.
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  deploymentBranch: 'gh-pages',
  trailingSlash: true,
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
        googleAnalytics: {
          trackingID: 'G-TZ0WLQNT0N',
          anonymizeIP: true,
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/VadymSachenko/TechWriteIt/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/VadymSachenko/TechWriteIt/edit/main/',
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
      // Replace with your project's social card
      customLayout: require.resolve('./src/theme/layout.js'),
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
          {to: '/blog', label: 'Blog', position: 'left'},
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
            title: 'Docs',
            items: [
              {
                label: 'Docs',
                to: '/docs/about-techwriteit/',
              },
            ],
          },
          {
            title: 'Get in touch',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/vadym-sachenko/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/VadymSachenko/TechWriteIt',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} TechWriteIt, Inc. Built with Docusaurus.`,
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
    }),
    markdown: {
      mermaid: true,
    },
    themes: ['@docusaurus/theme-mermaid'],
};

module.exports = config;

