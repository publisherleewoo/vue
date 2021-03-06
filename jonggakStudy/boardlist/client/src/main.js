import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import store from './store'
import router from './router'
import SuiVue from 'semantic-ui-vue';
import 'semantic-ui-css/semantic.min.css';


Vue.use(SuiVue);
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
