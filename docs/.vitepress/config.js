// base是我们的发布路径，默认为/，可以在环境变量中自行配置
const base = process.env.BASE || '/'
// nav导航我们抽离在configs下面nav.js文件，方便管理
const nav = require('./configs/nav')
const sidebar = require('./configs/sidebar')
module.exports = {
    title: "组件文档",
    description: 'Life is short, Keep it simple.',
    head: [
        ['link', {
            rel: 'icon',
            type: 'image/svg+xml',
            href: '/logo.svg'
        }]
    ],
    base: base,
    themeConfig: {
        // 展示搜索框
        algolia: {
            appKey: '',
            indexName: '',
            searchParameters: {
                faeFilters: ['tags:guide,api']
            }
        },
        nav,
        sidebar,
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
    },
    markdown: {
        anchor: {
            permalink: false
        },
        toc: {
            includeLevel: [1, 2]
        },
        config: (md) => {
            const {
                demoBlockPlugin
            } = require('vitepress-theme-demoblock')
            md.use(demoBlockPlugin);
        }
    }
};