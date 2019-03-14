import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Index = () => import('@/components/common')
const Login = () => import('@/components/Login.vue')
const Home = () => import('@/components/Home.vue')
const T1 = () => import('@/components/T1.vue')
const Password = () => import('@/components/Password.vue')
const Msg = () => import('@/components/Msg.vue')
const UserInfo = () => import('@/components/UserInfo.vue')
const Error404 = () => import('@/components/404.vue')

// 首页下的子组件
const children = [
    {
        path: 'home',
        name: 'Home',
        component: Home 
    },
    {
        path: 't1',
        name: 'T1',
        component: T1 
    },
    {
        path: 'password',
        name: 'Password',
        component: Password
    },
    {
        path: 'msg',
        name: 'Msg',
        component: Msg
    },
    {
        path: 'userinfo',
        name: 'UserInfo',
        component: UserInfo
    },
    {
        path: '404',
        name: '404',
        component: Error404
    }
]

export default new Router({
    routes: [
        {path: '/', redirect: '/home'},
        {path: '*', redirect: '/404'},
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/',
            component: Index,
            children,
        }
    ]   
})
