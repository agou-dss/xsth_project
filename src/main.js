import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import 'normalize.css/normalize.css'
import './assets/css/zc-normalize.less'
import zcb_ui from './components'
Vue.use(zcb_ui);

import axios from 'axios';
Vue.prototype.$http = axios;
Vue.config.productionTip = false;

import message from "./components/component/index"
Vue.use(message);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
