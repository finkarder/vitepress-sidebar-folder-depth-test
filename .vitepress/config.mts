import { defineConfig } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar';


const vitePressSidebarOptions = {
  // VitePress Sidebar's options here...
  documentRootPath: '/docs',
  collapsed: false,
  capitalizeFirst: true,
  excludeByFolderDepth: 3
};

const vitePressOptions = {
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/docs/' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
};

export default defineConfig(
  withSidebar(vitePressOptions, vitePressSidebarOptions)
);