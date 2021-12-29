import Vue from "vue";
import App from "./App.vue";
import Vuex from 'vuex'
import router from "./router";
import store from "./store";
import { resetRouter } from './router'

// 引入图标(没有用过)
import "@/assets/iconfont/iconfont.css";

Vue.use(Vuex)

// 引入swiper相关部件
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/css/swiper.css";
Vue.use(VueAwesomeSwiper);

// 引入element-ui相关部件
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);


resetRouter();
// 引入echart相关部件
// import * as echarts from "echarts/lib/echarts";
// Vue.prototype.$echarts = echarts;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
