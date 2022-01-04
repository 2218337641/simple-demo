import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { resetRouter } from './router'
import 'normalize.css/normalize.css'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

// 引入图标(没有用过)
import "@/assets/iconfont/iconfont.css";

// 引入swiper相关部件
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/css/swiper.css";
Vue.use(VueAwesomeSwiper);

// 引入element-ui相关部件
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
// import locale from 'element-ui/lib/locale/lang/en';
Vue.use(ElementUI);
// Vue.use(ElementUI,{locale})

// 创建i18n实例并挂载
const i18n=new VueI18n({
  locale:localStorage.getItem('locale') || 'zh',
  messages:{
    'zh':require('./components/lang/zh'),
    'en':require('./components/lang/en')
  }
})

resetRouter();
// 引入echart相关部件
// import * as echarts from "echarts/lib/echarts";
// Vue.prototype.$echarts = echarts;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
