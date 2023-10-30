const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Pictode',
  tagline: '🎨 Pictode最方便集成的绘图工具',
  favicon: 'img/favicon.ico',
  url: 'https://pictode.com',
  baseUrl: '/',
  organizationName: 'JessYan0913',
  projectName: 'pictode',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
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
          sidebarPath: require.resolve('./sidebars.js'),
          // editUrl:
          //   'https://github.com/JessYan0913/pictode-site',
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
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Pictode',
        logo: {
          alt: 'Pictode Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            label: '教程',
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
          },
          {
            href: 'https://pictode.com',
            label: '画板',
            position: 'right',
          },
          {
            href: 'https://github.com/JessYan0913/pictode',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '教程',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: '社区',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/pictode',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: '博客',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/JessYan0913/pictode',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Pictode, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
