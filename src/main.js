import Vue from "vue";
import App from "./App.vue";
import element from "./plugins/element-ui";
import "element-ui/lib/theme-chalk/index.css";
import axios from "axios";
import VueAxios from "vue-axios";
import VueRouter from "vue-router";
import router from "./router/index";
import mainconst from "./constants/main.constants"

Vue.config.productionTip = false;
Vue.use(element);
Vue.use(VueAxios, axios);
Vue.prototype.$axios = axios;
Vue.use(VueRouter);



router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  var suffix = to.path;
  var regex = /^\/[A-Za-z0-9]+$/;
  if (regex.test(suffix)) {
    console.log(suffix);
    axios.get(mainconst.SERVICE_URL + suffix).then((res) => {
      console.log(res);
      if (res.data.code == mainconst.SUCCESS_CODE) {
        location.href = res.data.data.origin;
      }else{
        location.href = mainconst.ROOT_URL;
      }
    });
    next();
  } else {
    next(); //必不可少
    return;
  }
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
