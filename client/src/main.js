import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Home from './components/Home';
import PatientLogin from './components/PatientLogin';
import ProviderLogin from './components/ProviderLogin';
// import Dashboard from './components/Dashboard';
import Questionnaire from './components/Questionnaire'
import vuetify from './plugins/vuetify';
// import Vuetify from 'vuetify/lib';
import { BootstrapVue } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';


Vue.use(VueRouter);
Vue.use(BootstrapVue);
// Vue.use(Vuetify);

Vue.config.productionTip = false


  const router = new VueRouter({
    routes: [
      { path: '/', name: 'Home', component: Home },
      { path: '/PatientLogin', name: 'PatientLogin', component: PatientLogin },
      { path: '/ProviderLogin', name: 'ProviderLogin', component: ProviderLogin },
      // { path: '/Dashboard', name:'Dashboard', component: Dashboard },
      { path: '/Questionnaire', name:'Questionnaire', component: Questionnaire },
    ],
    mode: 'history'
  })

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

export default router;