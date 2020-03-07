import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Home from './components/Home';
import PatientLogin from './components/PatientLogin';
import ProviderLogin from './components/ProviderLogin';
import vuetify from './plugins/vuetify';
import Questionnaire from './components/Questionnaire';

Vue.use(VueRouter);


Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/Patient-Login', component: PatientLogin },
    { path: '/Provider-Login', component: ProviderLogin },
    { path: '/Questionnaire', component: Questionnaire },
  ],
  mode: 'history'
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
