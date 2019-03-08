import router from './router'
import store from './store'

router.beforeEach((to, from, next) => {
    if (to.name == 'Login') {
        next()
    } else {
        // 如果有用户信息 则跳转 否则跳转到登陆页
        if (store.state.user.name) {
            next()
        } else {
            next({path: '/login'})
        }
    }
})