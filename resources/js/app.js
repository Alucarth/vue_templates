window._ = require('lodash')

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios')

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

import Vue from 'vue'
import Vuetify from 'vuetify'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
// import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
// import 'vuetify/dist/vuetify.min.css'
// import Vuex from 'vuex'
import App from './views/App.vue'
// import VueRouter from 'vue-router'

// Vue.use(VueRouter)
// Vue.use(Vuex)
Vue.use(Vuetify)
// const opts = {}
console.log(process.env.MIX_SERVER_MODE)
// export default new Vuetify(opts)

const app = new Vue({
    el:'#app',
    components:{ App },
    vuetify : new Vuetify({
        icons: {
          iconfont: 'mdi',
        //   iconfont: 'md',
        },
      }),

})
