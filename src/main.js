import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import axios from 'axios'
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false
Vue.use(iView)

Vue.prototype.$ajax = axios

new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
