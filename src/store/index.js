import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        isShowLoading: false, // 全局 loading
        // 左侧菜单栏数据
        menuItems: [
            {
                name: 'home', // 要跳转的路由名称 不是路径
                size: 18, // icon大小
                type: 'md-home', // icon类型
                text: '主页', // 文本内容
            },
            // {
            //     name: 'other', // 要跳转的路由名称 不是路径
            //     size: 18, // icon大小
            //     type: 'ios-egg-outline', // icon类型
            //     text: '单独的路由', // 点击侧边栏跳到一个单独的路由页面，需要提前在 router.js 定义
            // },
            {
                size: 18, // icon大小
                type: 'ios-egg-outline',
                text: '美食版块', // 点击侧边栏跳到一个单独的路由页面，需要提前在 router.js 定义
                children: [
                    {
                        type: 'ios-paper',
                        name: 't1',
                        text: '长胖日记',
                        // hidden 属性 隐藏此菜单 可以通过在地址栏上输入对应的 URL 来显示页面
                        // hidden: true,
                    },
                    {
                        type: 'ios-paper',
                        name: 'home',
                        text: '瘦瘦日记',
                        // hidden 属性 隐藏此菜单 可以通过在地址栏上输入对应的 URL 来显示页面
                        // hidden: true,
                    },
                ],
            },
            {
                size: 18, // icon大小
                type: 'ios-egg-outline',
                text: '目标版块', // 点击侧边栏跳到一个单独的路由页面，需要提前在 router.js 定义
                children: [
                    {
                        type: 'ios-paper',
                        name: 't1',
                        text: '存钱进度',
                        // hidden 属性 隐藏此菜单 可以通过在地址栏上输入对应的 URL 来显示页面
                        // hidden: true,
                    },
                    {
                        type: 'ios-paper',
                        name: 'home',
                        text: '减肥进度',
                        // hidden 属性 隐藏此菜单 可以通过在地址栏上输入对应的 URL 来显示页面
                        // hidden: true,
                    },
                    {
                        type: 'ios-paper',
                        name: 'msg',
                        text: '学习进度',
                        // hidden 属性 隐藏此菜单 可以通过在地址栏上输入对应的 URL 来显示页面
                        // hidden: true,
                    },
                    {
                        type: 'ios-paper',
                        name: 'userinfo',
                        text: '读书进度',
                        // hidden 属性 隐藏此菜单 可以通过在地址栏上输入对应的 URL 来显示页面
                        // hidden: true,
                    },
                ],
            },
            {
                size: 18, // icon大小
                type: 'ios-egg-outline',
                text: '旅游版块', // 点击侧边栏跳到一个单独的路由页面，需要提前在 router.js 定义
                children: [
                    {
                        type: 'ios-paper',
                        name: 't1',
                        text: '浮光掠影',
                        // hidden 属性 隐藏此菜单 可以通过在地址栏上输入对应的 URL 来显示页面
                        // hidden: true,
                    },
                    {
                        type: 'ios-paper',
                        name: 'home',
                        text: '攻略&有感',
                        // hidden 属性 隐藏此菜单 可以通过在地址栏上输入对应的 URL 来显示页面
                        // hidden: true,
                    },
                ],
            },
            {
                size: 18, // icon大小
                type: 'ios-egg-outline',
                text: '生活版块', // 点击侧边栏跳到一个单独的路由页面，需要提前在 router.js 定义
                children: [
                    {
                        type: 'ios-paper',
                        name: 't1',
                        text: '吵架',
                        // hidden 属性 隐藏此菜单 可以通过在地址栏上输入对应的 URL 来显示页面
                        // hidden: true,
                    },
                    {
                        type: 'ios-paper',
                        name: 'home',
                        text: 'binn的奇思妙想',
                        // hidden 属性 隐藏此菜单 可以通过在地址栏上输入对应的 URL 来显示页面
                        // hidden: true,
                    },
                ],
            },
            // {
            //     text: '二级菜单',
            //     type: 'ios-paper',
            //     children: [
            //         {
            //             type: 'ios-grid',
            //             name: 't1',
            //             text: '表格',
            //             // hidden 属性 隐藏此菜单 可以通过在地址栏上输入对应的 URL 来显示页面
            //             // hidden: true,
            //         },
            //         {
            //             size: 18, // icon大小
            //             type: 'md-arrow-forward', // icon类型
            //             text: '外链',
            //             url: 'https://www.baidu.com',
            //             isExternal: true, // 外链 跳到一个外部的 URL 页面
            //         },
            //         {
            //             text: '三级菜单',
            //             type: 'ios-paper',
            //             children: [
            //                 {
            //                     type: 'ios-notifications-outline',
            //                     name: 'msg',
            //                     text: '查看消息',
            //                 },
            //                 {
            //                     type: 'md-lock',
            //                     name: 'password',
            //                     text: '修改密码',
            //                 },
            //                 {
            //                     type: 'md-person',
            //                     name: 'userinfo',
            //                     text: '基本资料',
            //                 },
            //                 {
            //                     size: 18, // icon大小
            //                     type: 'md-arrow-forward', // icon类型
            //                     text: '外链',
            //                     url: 'https://www.baidu.com',
            //                     isExternal: true, // 外链 跳到一个外部的 URL 页面
            //                 },
            //             ],
            //         },
            //     ],
            // },
        ],
    },
    mutations: {
        setMenus(state, items) {
            state.menuItems = [...items]
        },
        setLoading(state, isShowLoading) {
            state.isShowLoading = isShowLoading
        },
    },
})

export default store
