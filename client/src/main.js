import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import Vuetify from 'vuetify/lib';
// import { BootstrapVue } from 'bootstrap-vue';
// import 'bootstrap-vue/dist/bootstrap-vue.css';
// import 'bootstrap/dist/css/bootstrap.css';

import router from './router'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')

export default router;