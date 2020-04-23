import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import VueCurrencyFilter from 'vue-currency-filter'

import TopNav from '@/components/TopNav.vue'
import Footer from '@/components/Footer.vue'
import BackToRestaurantBanner from '@/components/BackToRestaurantBanner.vue'
import BuyModal from '@/components/BuyModal.vue'

Vue.config.productionTip = false

Vue.component('top-nav', TopNav)
Vue.component('app-footer', Footer)
Vue.component('buy-modal', BuyModal)
Vue.component('back-to-restaurant-banner', BackToRestaurantBanner)

Vue.use(VueCurrencyFilter,
  {
    symbol : '$',
    thousandsSeparator: ',',
    fractionCount: 2,
    fractionSeparator: '.',
    symbolPosition: 'front',
    symbolSpacing: true
  })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


