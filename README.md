# vue-admin-template
vue轻量级后台管理系统基础模板

## 相关依赖
* [vue-router](https://router.vuejs.org/zh/)
* [iview](https://www.iviewui.com/docs/guide/install)
* [axios](https://www.kancloud.cn/yunye/axios/234845)

## 功能

#### 标签栏
* 点击标签切换页面
* 刷新当前标签页
* 关闭其他标签/关闭所有标签

#### 侧边栏
* 伸展/收缩
* 页面宽度过小自动收缩
* 多级菜单（利用iView组件）

#### 用户相关
* 消息通知
* 用户头像
* 基本资料

#### 其它
利用axios拦截器 实现了ajax请求前展示loading 请求结束关闭loading

## 注意
源码可见 并且添加了必要的注释 可以自行更改

为了实现标签栏切换页面 有一个要求必须是要遵守的：<br>
Index.vue的data数据里有一个nameToTitle属性
```
nameToTitle: {
    Table: '表格',
    Password: '修改密码',
    UserInfo: '基本资料',
    Msg: '查看消息',
    Home: '首页'
}
```
其中key是组件的名称 值是要展示在标签栏上的标题 其中组件的名称和路由的名称必须要一一对应<br>
假如你有一个组件是Home.vue name为Home 在路由的index.js它的name也必须是Home
```
const Home = () => import('@/components/Home/Home')
export default new Router({
    routes: [
        {
            path: '/home',
            name: 'Home',
            component: Home,
        }
    ]
})
```
