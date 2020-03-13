import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
<<<<<<< HEAD
    path: '/SurveyResults',
    name: 'SurveyResults',
    component: () => import('../views/SurveyResults.vue')
=======
    path: '/Data',
    name: 'Data',
    component: () => import('../views/Data.vue')
>>>>>>> 89c54d0756f12ceca79fb1ce01ae984ace0efdcc
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/Survey',
    name: 'Survey',
    component: () => import('../views/Survey.vue')
  },
  {
<<<<<<< HEAD
    path: '/Component',
    name: 'Component',
    component: () => import('../views/Component.vue')
=======
    path: '/Provider',
    name: 'Provider',
    component: () => import('../views/Provider.vue')
  },
  {
    path: '/pDash',
    name: 'providerDash',
    component: () => import('../views/ProviderDash.vue')
  },
  {
    path: '/providerProfile',
    name: 'providerProfile',
    component: () => import('../views/providerProfile.vue')
  },
  {
    path: '/providerData',
    name: 'providerData',
    component: () => import('../views/providerData.vue')
>>>>>>> 89c54d0756f12ceca79fb1ce01ae984ace0efdcc
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
