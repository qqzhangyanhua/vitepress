// vitepress-theme-demoblock是vitepress的一个主题插件，可以去github查看
// 组件注册就和我们平时开发vue项目一样
import theme from 'vitepress/dist/client/theme-default'
import 'vitepress-theme-demoblock/theme/styles/index.css'
// Demo组件和DemoBlock是两个vue组件，等会我们要在md文件中使用他来展示组件
import Demo from "vitepress-theme-demoblock/components/Demo.vue";
import DemoBlock from "vitepress-theme-demoblock/components/DemoBlock.vue";

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import BButton from '../components/button.vue'
// enhanceApp方法传很多方法进来，感兴趣的可以去官网查看，比如app、router等，这里我们需要使用app实例来注册我们的组件
export default {
    ...theme,
    enhanceApp({
        app
    }) {
        app.use(Antd)
        app.component("Demo", Demo);
        app.component("DemoBlock", DemoBlock);
        app.component("BButton", BButton)
    }
}