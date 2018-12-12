import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Login = () => import('@/components/Login/Login')
const Index = () => import('@/components/Index/Index')
const Default = () => import('@/components/Index/Default')

const Home = () => import('@/components/Home/Home')
const Query1 = () => import('@/components/Query1/Query1')
const Query2 = () => import('@/components/Query2/Query2')
const Query3 = () => import('@/components/Query3/Query3')
const Query4 = () => import('@/components/Query4/Query4')


// 首页下的子组件
const children = [
    {
        path: 'default',
        name: 'Default',
        component: Default
    },
    {
        path: '',
        name: 'Home',
        component: Home 
    },
    {
        path: 'query1',
        name: 'Query1',
        component: Query1 
    },
    {
        path: 'query2',
        name: 'Query2',
        component: Query2 
    },
    {
        path: 'query3',
        name: 'Query3',
        component: Query3 
    },
    {
        path: 'query4',
        name: 'Query4',
        component: Query4
    }
]

export default new Router({
    routes: [
        { path: '/', redirect: '/index'},
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/index',
            component: Index,
            children,
        },
        {
            path: '/Home',
            name: 'Home',
            component: Home
        },
    ]
})
