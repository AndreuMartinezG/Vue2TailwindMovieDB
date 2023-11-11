import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueTailwind from 'vue-tailwind'
import './assets/tailwind.css'

import './index.css'

const components = {
  //...
}

// DARK MODE STUF

// FLOWBITE STUFF

import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

onMounted(() => {
    initFlowbite();
})



// VUE THINGS
Vue.use(VueTailwind, components)


Vue.config.productionTip = false
Vue.use(VueAxios, axios)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
