import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 首页下的子组件
const children = [
    {
        path: 'home',
        name: 'home',
        component: () => import('../views/Home.vue')
    },
    {
        path: 't1',
        name: 't1',
        component: () => import('../views/T1.vue')
    },
    {
        path: 'password',
        name: 'password',
        component: () => import('../views/Password.vue')
    },
    {
        path: 'msg',
        name: 'msg',
        component: () => import('../views/Msg.vue')
    },
    {
        path: 'userinfo',
        name: 'userinfo',
        component: () => import('../views/UserInfo.vue')
    },
    {
        path: '404',
        name: '404',
        component: () => import('../components/404.vue')
    }
]

export default new Router({
    routes: [
        {path: '/', redirect: '/home'},
        {path: '*', redirect: '/404'},
        {
            path: '/login',
            name: 'login',
            component: () => import('../components/Login.vue')
        },
        {
            path: '/',
            component: () => import('../components/Index.vue'),
            children,
        }
    ]   
})