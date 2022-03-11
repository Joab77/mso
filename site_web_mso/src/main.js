import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// **********************************************************
import VueElementLoading from "vue-element-loading";
Vue.component("VueElementLoading", VueElementLoading);
// ************************************************************
import JQuery from 'jquery'
window.$ = JQuery
// *******************************************************************
import  'bootstrap';
// ***********************************************************************
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

// ****************************************************************************
import VueSweetalert2 from 'vue-sweetalert2';

const options = {
  confirmButtonColor: '#41b882',
  cancelButtonColor: '#ff7674',
};

Vue.use(VueSweetalert2, options);
// ***********************************************************************
import VueCarousel from 'vue-carousel';
 
Vue.use(VueCarousel);

// *************************************************************************
import { createPopper } from '@popperjs/core';

const button = document.querySelector('#button');
const tooltip = document.querySelector('#tooltip');

// Pass the button, the tooltip, and some options, and Popper will do the
// magic positioning for you:
createPopper(button, tooltip, {
  placement: 'right',
});
// ******************************************************************************

// Import Vue and vue2-collapse
import VueCollapse from 'vue2-collapse'
// Loading the plugin into the Vue.
Vue.use(VueCollapse)
// ******************************************************************************



Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
