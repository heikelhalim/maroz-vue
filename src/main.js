import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import DashboardPlugin from "./material-dashboard";
import Chartist from "chartist";

Vue.config.productionTip = false
Vue.prototype.$Chartist = Chartist;

Vue.use(DashboardPlugin);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
