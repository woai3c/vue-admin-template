import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Login = () => import('@/components/Login/Login')
const Index = () => import('@/components/Index/Index')

const Home = () => import('@/components/Home/Home')
const T1 = () => import('@/components/T1/T1')
const Password = () => import('@/components/Password/Password')
const Msg = () => import('@/components/Msg/Msg')
const UserInfo = () => import('@/components/UserInfo/UserInfo')


// 首页下的子组件
const children = [
    {
        path: '',
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
    }
]

export default new Router({
    routes: [
        {path: '/', redirect: '/login'},
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/index',
            component: Index,
            children,
        }
    ]
})
