import Vue from 'vue'
import './plugins/vuetify'
//import css files for b-table
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { TablePlugin } from 'bootstrap-vue'
Vue.use(TablePlugin)
// ends the b-table css import.

// Vue alerts
import VueSimpleAlert from "vue-simple-alert";
Vue.use(VueSimpleAlert);
// Vue alerts ends

// Vue modal
import VueModal from '@kouts/vue-modal';
import '@kouts/vue-modal/dist/vue-modal.css';
Vue.use(VueModal);
// Vue modals ends

// Vue step wizard starts
import VueFormWizard from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
Vue.use(VueFormWizard)
// Vue step wizard ends

import router from './router.js';
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

//https://medium.com/swlh/vuejs-datatables-the-easy-options-a204600ea53d
// npm install vue bootstrap-vue bootstrap
