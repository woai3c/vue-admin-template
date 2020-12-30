import Vue from 'vue'
import axios from 'axios'
import ViewUI from 'view-design'
import Element from 'element-ui'
import App from './App'
import store from './store'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import 'view-design/dist/styles/iview.css'

Vue.config.productionTip = false
Vue.use(ViewUI)
Vue.use(Element, { size: 'small', zIndex: 3000 })
Vue.prototype.$axios = axios

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
})
