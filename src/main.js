import Vue from "vue";
import App from "./App.vue";
import "amfe-flexible";
import router from "./router/index";
import store from "./store/index";
import "./style/base.scss";
// ui
import Vant from "vant";
import "vant/lib/index.css";
Vue.use(Vant);

// 设置每个页面的标题
import VueWechatTitle from "vue-wechat-title";
Vue.use(VueWechatTitle);

// ui中图片懒加载
import { Lazyload } from "vant";
Vue.use(Lazyload, {
    lazyComponent: true
});

// 百度地图
import BaiduMap from "vue-baidu-map";
Vue.use(BaiduMap, {
    ak: "jjfQC0VI22hRByp0N03ANmClohLcYd6Q"
});
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
