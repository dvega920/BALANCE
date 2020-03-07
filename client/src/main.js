import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
// import Home from './components/Home';
import PatientLogin from './components/PatientLogin';
import ProviderLogin from './components/ProviderLogin';
import Dashboard from './components/Dashboard';
import vuetify from './plugins/vuetify';

Vue.use(VueRouter);


Vue.config.productionTip = false


  const router = new VueRouter({
    routes: [
      // { path: '/', name: 'Home', component: Home },
      { path: '/', name: 'PatientLogin', component: PatientLogin },
      { path: '/Provider-Login', name: 'ProviderLogin', component: ProviderLogin },
      { path: '/Dashboard', name:'Dashboard', component: Dashboard },
    ],
    mode: 'history'
  })

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

export default router;