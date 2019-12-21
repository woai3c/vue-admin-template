import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const commonRoutes = [
    {
        path: '/login',
        name: 'login',
        meta: { title: '登录' },
        component: () => import('../components/Login.vue'),
    },
    {
        path: '/404',
        name: '404',
        meta: { title: '404' },
        component: () => import('../components/404.vue'),
    },
    { path: '/', redirect: '/home' },
]

// 本地所有的页面 需要配合后台返回的数据生成页面
export const asyncRoutes = {
    home: {
        path: 'home',
        name: 'home',
        meta: { title: '主页' },
        component: () => import('../views/Home.vue'),
    },
    t1: {
        path: 't1',
        name: 't1',
        meta: { title: '表格' },
        component: () => import('../views/T1.vue'),
    },
    password: {
        path: 'password',
        name: 'password',
        meta: { title: '修改密码' },
        component: () => import('../views/Password.vue'),
    },
    msg: {
        path: 'msg',
        name: 'msg',
        meta: { title: '通知消息' },
        component: () => import('../views/Msg.vue'),
    },
    userinfo: {
        path: 'userinfo',
        name: 'userinfo',
        meta: { title: '用户信息' },
        component: () => import('../views/UserInfo.vue'),
    },
}

const createRouter = () => new Router({
    routes: commonRoutes,
})

const router = createRouter()

export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher
}

export default router