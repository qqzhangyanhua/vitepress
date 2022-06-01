module.exports = {
    "/guide/": getGuideSidebar(),
    "/components/": getComponentsSidebar(),
}

function getComponentsSidebar() {
    return [{
        text: 'Basic 基础组件',
        children: [{
            text: 'Button 按钮',
            link: '/components/basic/button'
        }]
    }]
}

function getGuideSidebar() {
    return [{
        text: '基础',
        children: [{
            text: '安装',
            link: '/guide/install'
        }]
    }]
}