import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import VueSmoothScroll from 'vue2-smooth-scroll'
import Parallax from 'vue-parallaxy'

Vue.config.productionTip = false
Vue.use(VueSmoothScroll,Parallax)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
