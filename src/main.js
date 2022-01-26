import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import VueSmoothScroll from 'vue2-smooth-scroll'
import Parallax from 'vue-parallaxy'
import VueScrollReveal from 'vue-scroll-reveal';
// import { CursorFx } from '@luxdamore/vue-cursor-fx';
// import '@luxdamore/vue-cursor-fx/dist/CursorFx.css';
Vue.config.productionTip = false
Vue.use(VueSmoothScroll,Parallax)

Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal', // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
  duration: 2000,
  scale: 1,
  origin:top,
  distance: '30px',
  mobile: true,
  interval:200,
  reset:true,
});
new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
