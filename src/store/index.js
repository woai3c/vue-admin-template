import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: {
            name: '',
            img: ''
        }
    },
    mutations: {
        setUser(state, obj) {
            state.user = {...obj}
        }
    }
})