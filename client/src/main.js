import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import HelloWorld from './components/HelloWorld';
import Patient from './components/Patient';
import Provider from './components/Provider';

Vue.use(VueRouter);


Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    { path: '/', component: HelloWorld },
    { path: '/Patient', component: Patient },
    { path: '/Provider', component: Provider }
  ],
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
