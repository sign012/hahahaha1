import Vue from 'vue'
import App from './App'
import router from './router'
import './element-ui'

import axios from 'axios'
axios.defaults.baseURL = 'https://www.escook.cn'
Vue.prototype.$http = axios
Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})