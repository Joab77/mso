import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Tabernacle from '../views/Tabernacle.vue'
import Actualites from '../views/Actualites.vue'
import Galerie from '../views/Galerie.vue'
import Predications from '../views/Predications.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path:'/tabernacles',
    name:'Tabernacle',
    component:Tabernacle
  },

  {
    path:'/predications',
    name:'Predications',
    component:Predications
  },

  {
    path:'/actualites',
    name:'Actualites',
    component:Actualites
  },

  {
    path:'/galeries',
    name:'Galerie',
    component:Galerie
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
