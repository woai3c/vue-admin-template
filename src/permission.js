import router from './router'
import store from './store'
import { menusToRoutes } from './utils'

// 是否有菜单数据
let hasMenus = false
router.beforeEach(async (to, from, next) => {
    if (localStorage.getItem('token')) {
        if (to.path === '/login') {
            next({path: '/'})
        } else {
            if (hasMenus) {
                next()
            } else {
                try {
                    // 这里可以用 await 配合请求后台数据来生成路由
                    const routes = menusToRoutes(store.state.menuItems)
                    // 动态添加路由
                    router.addRoutes(routes)
                    hasMenus = true
                    next({path: to.path || '/'})
                } catch (error) {
                    next(`/login?redirect=${to.path}`)
                }
            }
        }
    } else {
        hasMenus = false
        if (to.path === '/login') {
            next()
        } else {
            next(`/login?redirect=${to.path}`)
        }
    }
})