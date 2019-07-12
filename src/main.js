import Vue from 'vue'
import App from './App.vue'
import router from './router'
//main.js
//1:引入mint-ui库中所有组件:完整引入
import MintUI from 'mint-ui'
//2:单独引入mint-ui样式文件
import'mint-ui/lib/style.css'
//3:将mint-ui组件库中组件注册vue实例中
Vue.use(MintUI);

import './font/iconfont.css'


Vue.config.productionTip = false

 import './lib/mui/css/mui.css'
// 导入 MUI 的样式表，扩展图标样式，购物车图标
// 还需要加载图标字体文件
import './lib/mui/css/icons-extra.css'

import axios from './axios.js'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
