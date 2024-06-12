import { defineConfig } from 'vitepress'
import sidebar from './sidebar.mjs'
import nav from './nav.mjs'



// https://vitepress.dev/reference/site-config
export default defineConfig({
  base:'/blog/',
  title: "My Awesome Project",
  description: "A VitePress Site",
  lastUpdated: '上次更新', // string | boolean
  // 代码块启用行号
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: nav,
    sidebar: sidebar,
    // outlineTitle: "页面导航", // 右侧边栏配置
    // 右侧边栏层级及标题配置
    outline: {
      level: [2, 6],
      label: '页面导航'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: '在GitHub上编辑'
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    }
  }
})
