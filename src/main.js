import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 解决移动端点击延迟问题
import fastclick from "fastclick"
// 引入全局样式
import "./assets/css/base.scss"
// 引入vue图片懒加载
import Vuelazyload from 'vue-lazyload';
fastclick.attach(document.body)

Vue.config.productionTip = false

Vue.use(Vuelazyload, {
  loading: require('./assets/image/loading.png')
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
