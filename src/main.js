import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueTailwind from 'vue-tailwind'
import VueLocalStorage from 'vue-ls'

// IMPORT ESTILOS CSS
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

  //INICIAMOS LA LIBRERIA DE ESTILOS
    initFlowbite();
})

// CONFIGURACIÓN PARA EL USO DE "LOCALSTORAGE" DENTRO DE LA APP

Vue.use(VueLocalStorage)

const options = {
  namespace: 'vuejs__', // Prefijo para evitar colisiones con otros datos en el almacenamiento local
  name: 'ls', // Nombre del objeto en Vue para acceder a los métodos del paquete
  storage: 'local' // Puede ser 'local' o 'session'
}

Vue.use(VueLocalStorage, options)

// CONFIGURACIÓN PARA EL USO DE "TAILWIND" DENTRO DE LA APP
Vue.use(VueTailwind, components)


Vue.config.productionTip = false
Vue.use(VueAxios, axios)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
