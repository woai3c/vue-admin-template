## 更新日志
### 2019.12.21 更新
* refactor: 将 `404` 页面独立出来，单独展示（占满屏幕）
* new: [新增 eslint，配合 vscode 可以自动格式化代码](https://github.com/woai3c/Front-end-articles/blob/master/eslint-vscode-format.md)
* new: 新增 jest 单元测试
* new: 页面标题 `document.title`，在 `src/utils/index` 下可设置默认的 `title`，在每个路由配置项上可设置对应的 `title`，具体示例请看代码

### 2019.12.13 更新
* fix: 修复在IE下关闭标签栏时，页面抖动的问题
* refactor: 同时将左右两栏的布局方式从 flex 布局更改为 fixed + margin 的方式

### 2019.10.30 更新
* new: 在对应的菜单项上添加 `hidden` 属性，即可隐藏对应的菜单项，但还是可以在地址栏上输入对应的 URL 来访问页面。
使用方法
```js
{
    type: 'ios-grid',
    name: 't1',
    text: '表格',
    hidden: true, // 隐藏此菜单 可以通过在地址栏上输入对应的 URL 来显示页面
}
```

### 2019.10.14 更新
* fix: 修复窗口宽度过小不会收缩侧边栏的问题
* new: 打开页面时，默认展开和路由对应的菜单栏

### 2019.8.19 更新
* fix: `components/Index.vue` 文件第 31 行代码的 `v-show="isShowAsideTitle"` 会造成侧边栏收缩时二级菜单隐藏，目前已修复。
### 2019.7.24 更新
* new: 增加页面进度条，跳转时显示

### 2019.6.25 更新
* fix: 修复路由表冲突问题

退出当前用户，换账号重新登陆时，上个账号和现在的账号路由表会有冲突的问题，解决办法是在退出登陆时重置路由表。

具体实现请查看 `router/index.js`、`Login.vue` 和 `Index.vue` 的退出登陆回调方法。

### 2019.6.18 更新
* new: 优化动态添加路由功能

以前的动态路由功能并不完善，首先要将所有的路由都添加到路由表里，然后根据后台返回的菜单栏数据来生成菜单。

导致的问题就是，虽然有页面在菜单栏上不显示，但由于已经添加到路由表里了，所以可以在地址栏上手动输入在菜单栏上不存在（但在路由表存在）的页面，进而可以越权访问。

现在除了必要的页面需要在一开始添加到路由表里，其他的页面都可以根据后台数据来自动生成。而且菜单栏上没有的页面，在地址栏上输入地址也是访问不了的。

另外，如果在未登陆时要访问某一指定页面，会重定向到登陆页，登陆成功后会自动跳到这个指定页面。

具体实现请看 `permission.js` 和 `util` 目录下的 `index.js` 文件

### 2019.3.14 更新

* new: 增加404页面

假如跳转到一个不存在的页面时会重定向到404页面

### 2019.3.8 更新

* new: 增加面包屑功能 用于展示当前页面的路径

* new: 增加权限控制功能，如果未登陆，访问所有页面都重定向到登陆页

### 2019.3.1 更新
* new: 增加动态菜单栏功能

菜单项中的 `icon` 使用的是 `iview` 组件的 `icon` 组件。

数据格式：
```js
// 左侧菜单栏数据
menuItems: [
    {
        name: 'Home', // 要跳转的路由名称 不是路径
        size: 18, // icon大小 非必填
        type: 'md-home', // icon类型 非必填
        text: '主页' // 文本内容
    },
    {
        text: '二级菜单',
        type: 'ios-paper',
        children: [
            {
                type: 'ios-grid',
                name: 'T1',
                text: '表格',
                hidden: true, // 可以在菜单中隐藏此菜单项，但还是可以访问此页面，只是不能在菜单栏中看见。
            },
            {
                text: '三级菜单',
                type: 'ios-paper',
                children: [
                    {
                        type: 'ios-notifications-outline',
                        name: 'Msg',
                        text: '查看消息'
                    },
                    {
                        type: 'md-lock',
                        name: 'Password',
                        text: '修改密码'
                    },
                    {
                        type: 'md-person',
                        name: 'UserInfo',
                        text: '基本资料',
                    }
                ]
            }
        ]
    }
]
```
