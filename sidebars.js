/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docsSidebar: [
    'core-concepts',
    'installation',
    {
      type: 'category',
      label: '工具',
      link: {
        type: "generated-index",
        title: '工具',
        description: '了解Pictode的图形绘制工具！',
      },
      items: [
        'tools/rectangle-tool', 
        'tools/ellipse-tool', 
        'tools/polygon-tool', 
        'tools/line-tool', 
        'tools/brush-tool', 
        'tools/text-tool', 
        'tools/image-tool', 
        'tools/selector-tool'
      ]
    },
    {
      type: 'category',
      label: '插件',
      link: {
        type: 'generated-index',
        title: '插件',
        description: '了解Pictode的功能插件！',
      },
      items: [
        'plugins/selector-plugin',
        'plugins/history-plugin',
        'plugins/alignment-plugin'
      ]
    },
    {
      type: 'category',
      label: '扩展',
      link: {
        type: 'generated-index',
        title: '扩展',
        description: '了解Pictode的自定义功能',
      },
      items: [
        'extensions/custom-tool',
        'extensions/custom-plugin'
      ],
    }
  ],
  apisSidebar: [
    {
      type: 'category',
      label: 'core',
      link: {
        type: "generated-index",
        title: 'core',
        description: '@pictode/core包重要API说明！',
      },
      items: [
        'apis/core/app',
        'apis/core/utils',
      ],
    },
    {
      type: 'category',
      label: 'tools',
      link: {
        type: "generated-index",
        title: 'tools',
        description: '@pictode/tools包重要API说明！',
      },
      items: [
        'apis/tools/rectangle-tool', 
        'apis/tools/ellipse-tool', 
        'apis/tools/polygon-tool', 
        'apis/tools/line-tool', 
        'apis/tools/brush-tool', 
        'apis/tools/text-tool', 
        'apis/tools/image-tool', 
        'apis/tools/selector-tool'
      ],
    },
    {
      type: 'doc',
      label: '@pictode/plugin-selector',
      id: 'apis/plugin-selector'
    },
    'apis/plugin-history',
    'apis/plugin-alignment',
  ]
};

module.exports = sidebars;
