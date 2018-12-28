# vue-admin-template
vue轻量级后台管理系统基础模板<br>
[在线预览](https://woai3c.github.io)
## 相关依赖
* [vue-router](https://router.vuejs.org/zh/)
* [iview](https://www.iviewui.com/docs/guide/install)
* [axios](https://www.kancloud.cn/yunye/axios/234845)

## 功能

#### 登录页
* 一周七天自动切换不同的壁纸（建议自己配置）

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

市面上有大量的vue后台管理系统模板 但是功能都太丰富了 而且有很多组件用不上 所以写了这么一个最基础的 只有必要功能的模板
UI库使用的是iView 有大量的组件可用 

### 子组件跳转到子组件
```
// xxx为你想跳转的子组件name
this.$parent.gotoPage('xxx')
```
### 路由传参
```
this.gotoPage('UserInfo', {
    id: id,
})
// 在UserInfo组件里取参
this.$route.params.id
```

## 使用
#### 下载
```
git clone git@github.com:woai3c/vue-admin-template.git

cd vue-admin-template

npm i
```

#### 开发
```
npm run dev
```

#### 打包
````
npm run build
````


### 如果对你有帮助，请给个Star
