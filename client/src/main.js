import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import HelloWorld from './components/HelloWorld';
import Patient from './components/Patient'

Vue.use(VueRouter);
Vue.use(Vuetify);

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    { path: '/', component: HelloWorld },
    { path: '/Patient', component: Patient }
  ],
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
