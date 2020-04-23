import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LearnMore from '../views/LearnMore.vue'
import HelpOut from '../views/HelpOut.vue'
import CancelSubscription from '../views/CancelSubscription.vue'
import AllRestaurantsList from '../views/AllRestaurantsList.vue'
import Restaurant from '../views/Restaurant.vue'
import Confirmation from '../views/Confirmation.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/learn-more',
    name: 'learn_more',
    component: LearnMore
  },
  {
    path: '/help-out',
    name: 'help_out',
    component: HelpOut
  },
  {
    path: '/sample',
    name: 'sample',
    component: Restaurant
  },
  {
    path: '/restaurants',
    name: 'restaurants',
    component: AllRestaurantsList
  },
  {
    path: '/cancel',
    name: 'cancel',
    component: CancelSubscription
  },
  {
    path: '/r/:slug',
    name: 'restaurant',
    component: Restaurant
  },
  {
    path: '/r/:slug/confirmation',
    name: 'confirmation',
    component: Confirmation
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
