<template>
    <div class="index-vue">
        <!-- 侧边栏 -->
        <aside :class="asideClassName">
            <!-- logo -->
            <div class="logo-c">
                <img src="../assets/imgs/logo.png" alt="logo" class="logo">
                <span v-show="isShowAsideTitle">后台管理系统</span>
            </div>
            <!-- 菜单栏 -->
            <Menu class="menu" ref="asideMenu" theme="dark" width="100%" @on-select="selectMenuCallback"
            accordion :open-names="openMenus" :active-name="currentPage" @on-open-change="menuChange">
                <!-- 动态菜单 -->
                <div v-for="(item, index) in menuItems" :key="index">
                    <Submenu :class="isShowAsideTitle? '' : 'shrink'" v-if="item.children" :name="index">
                        <template slot="title">
                            <Icon :size="item.size" :type="item.type"/>
                            <span v-show="isShowAsideTitle">{{item.text}}</span>
                        </template>
                        <div v-for="(subItem, i) in item.children" :key="index + i">
                            <Submenu :class="isShowAsideTitle? '' : 'shrink'" v-if="subItem.children" :name="index + '-' + i">
                                <template slot="title">
                                    <Icon :size="subItem.size" :type="subItem.type"/>
                                    <span v-show="isShowAsideTitle">{{subItem.text}}</span>
                                </template>
                                <MenuItem :class="isShowAsideTitle? '' : 'shrink'" class="menu-level-3"
                                v-for="(threeItem, k) in subItem.children" :name="threeItem.name" :key="index + i + k">
                                    <template v-if="!threeItem.hidden">
                                        <Icon :size="threeItem.size" :type="threeItem.type"/>
                                        <span v-show="isShowAsideTitle">{{threeItem.text}}</span>
                                    </template>
                                </MenuItem>
                            </Submenu>
                            <MenuItem :class="isShowAsideTitle? '' : 'shrink'" v-else-if="!subItem.hidden" :name="subItem.name">
                                <Icon :size="subItem.size" :type="subItem.type"/>
                                <span v-show="isShowAsideTitle">{{subItem.text}}</span>
                            </MenuItem>
                        </div>
                    </Submenu>
                    <MenuItem :class="isShowAsideTitle? '' : 'shrink'" v-else-if="!item.hidden" :name="item.name">
                        <Icon :size="item.size" :type="item.type" />
                        <span v-show="isShowAsideTitle">{{item.text}}</span>
                    </MenuItem>
                </div>
            </Menu>
        </aside>

        <!-- 右侧部分 -->
        <section class="sec-right">
            <!-- 头部 -->
            <div class="top-c">
                <header>
                    <div class="h-left">
                        <div class="pointer" @click="isShrinkAside" title="收缩/展开">
                            <Icon type="ios-apps" />
                        </div>
                        <!-- 面包屑功能 -->
                        <p class="crumbs">{{crumbs}}</p>
                    </div>
                    <div class="h-right">
                        <!-- 消息 -->
                        <div class="notice-c" @click="info" title="查看新消息">
                            <div :class="{newMsg: hasNewMsg}"></div>
                            <Icon type="ios-notifications-outline" />
                        </div>
                        <!-- 用户头像 -->
                        <div class="user-img-c">
                            <img :src="userImg">
                        </div>
                        <!-- 下拉菜单 -->
                        <Dropdown trigger="click" @on-click="userOperate" @on-visible-change="showArrow">
                            <div class="pointer">
                                <span>{{userName}}</span>
                                <Icon v-show="arrowDown" type="md-arrow-dropdown"/>
                                <Icon v-show="arrowUp" type="md-arrow-dropup"/>
                            </div>
                            <DropdownMenu slot="list">
                                <!-- name标识符 -->
                                <DropdownItem name="1">修改密码</DropdownItem>
                                <DropdownItem name="2">基本资料</DropdownItem>
                                <DropdownItem divided  name="3">退出登陆</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                </header>

                <!-- 标签栏 -->
                <div class="div-tags">
                    <ul class="ul-c">
                        <li v-for="(item, index) in tagsArry" :key="index" :class="{active: isActive(item.name)}" @click="activeTag(index)">
                            <a class="li-a">
                                {{item.text}}
                            </a>
                            <Icon size="16" @click="closeTag(index)" type="md-close" />
                        </li>
                    </ul>
                    <!-- 标签栏相关功能 -->
                    <div class="div-icons">
                        <div class="refresh-c" @click="reloadPage" title="刷新当前标签页">
                            <Icon type="md-refresh" />
                        </div>
                        <div class="tag-options" title="关闭标签">
                            <Dropdown trigger="click" @on-click="closeTags">
                                <Icon type="ios-options" />
                                <DropdownMenu slot="list">
                                    <DropdownItem name="1">关闭其他标签</DropdownItem>
                                    <DropdownItem name="2">关闭所有标签</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 页面主体 -->
            <div class="main-content">
                <div class="view-c">
                    <keep-alive :include="keepAliveData">
                        <!-- 子页面 -->
                        <router-view v-if="isShowRouter"/>
                    </keep-alive>
                    <div class="loading-c" v-show="showLoading">
                        <Spin size="large"></Spin>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { resetTokenAndClearUser } from '../utils'

export default {
    name: 'index',
    data() {
        return {
            // 用于储存页面路径
            paths: {},
            // 当前显示页面
            currentPage: '',
            openMenus: [], // 要打开的菜单名字 name属性
            menuCache: [], // 缓存已经打开的菜单
            showLoading: false, // 是否显示loading
            hasNewMsg: true, // 是否有新消息
            isShowRouter: true,
            msgNum: '10', // 新消息条数
            // 标签栏         标签标题     路由名称
            // 数据格式 {text: '首页', name: 'home'}
            // 用于缓存打开的路由 在标签栏上展示
            tagsArry: [],
            arrowUp: false, // 用户详情向上箭头
            arrowDown: true, // 用户详情向下箭头
            isShowAsideTitle: true, // 是否展示侧边栏内容
            main: null, // 页面主要内容区域
            asideClassName: 'aside-big', // 控制侧边栏宽度变化
            asideArrowIcons: [], // 缓存侧边栏箭头图标 收缩时用
            // 面包屑
            crumbs: '主页',
            userName: '',
            userImg: '',
            // 主页路由名称
            home: 'home',
        }
    },
    created() {
        // 已经为ajax请求设置了loading 请求前自动调用 请求完成自动结束
        // 添加请求拦截器
        this.$axios.interceptors.request.use(config => {
            this.showLoading = true
            // 在发送请求之前做些什么
            return config
        }, error => {
            this.showLoading = false
            // 对请求错误做些什么
            return Promise.reject(error)
        })
        // 添加响应拦截器
        this.$axios.interceptors.response.use(response => {
            // 可以在这里对返回的数据进行错误处理 如果返回的 code 不对 直接报错或退出登陆
            // 就可以省去在业务代码里重复判断
            // 例子
            // if (res.code != 0) {
            //     this.$Message.error(res.msg)
            //     return Promise.reject()
            // }
            this.showLoading = false
            const res = response.data
            return res
        }, error => {
            this.showLoading = false
            // 对响应错误做点什么
            return Promise.reject(error)
        })
    },
    mounted() {
        // 第一个标签
        const name = this.$route.name
        this.currentPage = name
        this.tagsArry.push({
            text: this.nameToTitle[name],
            name,
        })

        // 根据路由打开对应的菜单栏
        this.openMenus = this.getMenus(name)
        this.$nextTick(() => {
            this.$refs.asideMenu.updateOpened()
        })

        // 设置用户信息
        this.userName = localStorage.getItem('userName')
        this.userImg = localStorage.getItem('userImg')

        this.main = document.querySelector('.sec-right')
        this.asideArrowIcons = document.querySelectorAll('aside .ivu-icon-ios-arrow-down')

        // 监听窗口大小 自动收缩侧边栏
        this.monitorWindowSize()
    },
    watch: {
        $route(to) {
            const name = to.name
            this.currentPage = name
            if (name == 'error') {
                this.crumbs = '404'
                return
            }

            if (!this.keepAliveData.includes(name)) {
                // 如果标签超过8个 则将第一个标签删除
                if (this.tagsArry.length == 8) {
                    this.tagsArry.shift()
                }
                this.tagsArry.push({ name, text: this.nameToTitle[name] })
            }

            setTimeout(() => {
                this.crumbs = this.paths[name]
            }, 0)
        },
    },
    computed: {
        // 菜单栏
        menuItems() {
            return this.$store.state.menuItems
        },
        // 需要缓存的路由
        keepAliveData() {
            return this.tagsArry.map(item => item.name)
        },
        // 由于iView的导航菜单比较坑 只能设定一个name参数
        // 所以需要在这定义组件名称和标签栏标题的映射表 有多少个页面就有多少个映射条数
        nameToTitle() {
            const obj = {}
            this.menuItems.forEach(e => {
                this.processNameToTitle(obj, e)
            })

            return obj
        },
    },
    methods: {
        getMenus(name) {
            let menus
            const tagTitle = this.nameToTitle[name]
            for (let i = 0, l = this.menuItems.length; i < l; i++) {
                const item = this.menuItems[i]
                menus = []
                menus[0] = i
                if (item.text == tagTitle) {
                    return menus
                }

                if (item.children) {
                    for (let j = 0, ll = item.children.length; j < ll; j++) {
                        const child = item.children[j]
                        menus[1] = i + '-' + j
                        menus.length = 2
                        if (child.text == tagTitle) {
                            return menus
                        }

                        if (child.children) {
                            for (let k = 0, lll = child.children.length; k < lll; k++) {
                                const grandson = child.children[k]
                                menus[2] = i + '-' + j + '-' + k
                                if (grandson.text == tagTitle) {
                                    return menus
                                }
                            }
                        }
                    }
                }
            }
        },

        monitorWindowSize() {
            let w = document.documentElement.clientWidth || document.body.clientWidth
            if (w < 1300) {
                this.shrinkAside()
            }

            window.onresize = () => {
                // 可视窗口宽度太小 自动收缩侧边栏
                if (w < 1300 && this.isShowAsideTitle
                    && w > (document.documentElement.clientWidth || document.body.clientWidth)) {
                    this.shrinkAside()
                }

                w = document.documentElement.clientWidth || document.body.clientWidth
            }
        },

        // 判断当前标签页是否激活状态
        isActive(name) {
            return this.$route.name === name
        },
        // 跳转页面 路由名称和参数
        gotoPage(name, params) {
            this.currentPage = name
            this.crumbs = this.paths[name]
            this.$router.replace({ name, params })

            if (!this.keepAliveData.includes(name)) {
                // 如果标签超过8个 则将第一个标签删除
                if (this.tagsArry.length == 8) {
                    this.tagsArry.shift()
                }
                this.tagsArry.push({ name, text: this.nameToTitle[name] })
            }
        },
        // 选择菜单回调函数
        selectMenuCallback(name) {
            this.gotoPage(name)
            this.expandAside()
            setTimeout(() => {
                this.isShowAsideTitle = true
            }, 200)
        },
        // 用户操作
        userOperate(name) {
            switch (name) {
                case '1':
                    // 修改密码
                    this.gotoPage('password')
                    break
                case '2':
                    // 基本资料
                    this.gotoPage('userinfo')
                    break
                case '3':
                    resetTokenAndClearUser()
                    this.$router.replace({ name: 'login' })
                    break
            }
        },
        // 控制用户三角箭头显示状态
        showArrow(flag) {
            this.arrowUp = flag
            this.arrowDown = !flag
        },
        // 判断
        isShrinkAside() {
            if (this.isShowAsideTitle) {
                this.shrinkAside()
            } else {
                this.expandAside()
            }
        },
        // 收缩
        shrinkAside() {
            for (let i = 0, len = this.asideArrowIcons.length; i < len; i++) {
                this.asideArrowIcons[i].style.display = 'none'
            }

            this.isShowAsideTitle = false
            this.openMenus = []
            this.$nextTick(() => {
                this.$refs.asideMenu.updateOpened()
            })

            setTimeout(() => {
                this.asideClassName = ''
                this.main.style.marginLeft = '90px'
            }, 0)
        },
        // 展开
        expandAside() {
            setTimeout(() => {
                this.isShowAsideTitle = true
                for (let i = 0, len = this.asideArrowIcons.length; i < len; i++) {
                    this.asideArrowIcons[i].style.display = 'block'
                }

                this.openMenus = this.menuCache
                this.$nextTick(() => {
                    this.$refs.asideMenu.updateOpened()
                })
            }, 200)
            this.asideClassName = 'aside-big'
            this.main.style.marginLeft = '220px'
        },
        // 刷新当前标签页
        reloadPage() {
            let name = this.$route.name
            let index = this.keepAliveData.indexOf(name)
            this.$nextTick(() => {
                if (this.tagsArry.length) {
                    this.isShowRouter = false
                    this.tagsArry.splice(index, 1)
                    this.$nextTick(() => {
                        this.tagsArry.splice(index, 0, { name, text: this.nameToTitle[name] })
                        this.gotoPage(name)
                        this.isShowRouter = true
                    })
                } else {
                    this.isShowRouter = false
                    this.$nextTick(() => {
                        this.tagsArry.push({ name, text: this.nameToTitle[name] })
                        this.gotoPage(name)
                        this.isShowRouter = true
                    })
                }
            })
        },
        // 关闭单个标签
        closeTag(i) {
            let name = this.tagsArry[i].name
            this.tagsArry.splice(i, 1)
            window.event.stopPropagation()
            // 如果关闭的是当前标签 则激活前一个标签
            // 如果关闭的是第一个标签 则激活后一个标签
            if (this.tagsArry.length) {
                if (this.isActive(name)) {
                    if (i != 0) {
                        this.gotoPage(this.tagsArry[i - 1].name)
                    } else {
                        this.gotoPage(this.tagsArry[i].name)
                    }
                }
            } else if (name != this.home) {
                // 如果没有标签则跳往首页
                this.gotoPage(this.home)
            } else {
                this.reloadPage()
            }
        },
        // 根据路由名称关闭页面
        closeName(name) {
            for (let i = 0, len = this.tagsArry.length; i < len; i++) {
                if (this.tagsArry[i].name == name) {
                    this.closeTag(i)
                    break
                }
            }
        },
        // 批量关闭标签
        closeTags(flag) {
            if (flag == 1) {
                // 关闭其他标签
                this.tagsArry = []
                this.gotoPage(this.$route.name)
            } else {
                // 关闭所有标签
                this.tagsArry = []
                this.gotoPage(this.home)
                this.reloadPage()
            }
        },
        // 激活标签
        activeTag(i) {
            this.gotoPage(this.tagsArry[i].name)
        },
        // 消息通知
        info() {
            const self = this
            this.$Notice.info({
                title: `您有${this.msgNum}条消息`,
                render(h) {
                    return h('Button', {
                        attrs: {
                            type: 'info',
                            size: 'small',
                        },
                        on: {
                            click() {
                                // 点击查看跳转到消息页
                                self.gotoPage('msg')
                                self.hasNewMsg = false
                                self.msgNum = 0
                            },
                        },
                    }, [
                        '点击查看',
                    ])
                },
            })
        },
        // 菜单栏改变事件
        menuChange(data) {
            this.menuCache = data
        },
        processNameToTitle(obj, data, text) {
            if (data.name) {
                obj[data.name] = data.text
                this.paths[data.name] = text ? `${text} / ${data.text}` : data.text
            }
            if (data.children) {
                data.children.forEach(e => {
                    this.processNameToTitle(obj, e, text ? `${text} / ${data.text}` : data.text)
                })
            }
        },
    },
}
</script>

<style scoped>
.index-vue {
    height: 100%;
    color: #666;
}
/* 侧边栏 */
aside {
    position: fixed;
    top: 0;
    left: 0;
    width: 90px;
    background: #20222A;
    height: 100%;
    transition: width .3s;
    overflow: auto;
}
.logo-c {
    display: flex;
    align-items: center;
    color: rgba(255,255,255,.8);
    font-size: 16px;
    margin: 20px 0;
    justify-content: center;
}
.logo {
    width: 40px;
    margin-right: 10px;
}
.aside-big {
    width: 220px;
}
/* 主体页面 */
.sec-right {
    height: 100%;
    margin-left: 220px;
    transition: margin-left .3s;
    overflow: hidden;;
    background: #f3f7fd;
}
/* 主体页面头部 */
header {
    height: 50px;
    border-bottom: none;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 40px;
    padding-left: 10px;
    font-size: 14px;
}
header .ivu-icon {
    font-size: 24px;
}
.refresh-c {
    margin: 0 30px;
    cursor: pointer;
}
.h-right {
    display: flex;
    align-items: center;
}
.h-left {
    display: flex;
    align-items: center;
}
.user-img-c img {
    width: 100%;
}
.notice-c {
    cursor: pointer;
    position: relative;
}
.newMsg {
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #FF5722;
    right: 0;
    top: 0;
}
.user-img-c {
    width: 34px;
    height: 34px;
    background: #ddd;
    border-radius: 50%;
    margin: 0 40px;
    overflow: hidden;
}
.tag-options {
    cursor: pointer;
    position: relative;
}
.div-tags {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 4px 0;
}
.div-icons {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: #fff;
    height: 34px;
    width: 160px;
    font-size: 18px;
}
/* 标签栏 */
.ul-c {
    height: 34px;
    background: #fff;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 10px;
    overflow: hidden;
    width: calc(100% - 160px);
}
.ul-c li {
    border-radius: 3px;
    cursor: pointer;
    font-size: 12px;
    height: 24px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 3px 5px 2px 3px;
    border: 1px solid #e6e6e6;
}
a {
    color: #666;
    transition: none;
}
.li-a {
    max-width: 80px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.ul-c .ivu-icon {
    margin-left: 6px;
}
.active {
    background: #409eff;
    border: 1px solid #409eff;
}
.active a {
    color: #fff;
}
.active .ivu-icon {
    color: #fff;
}
/* 主要内容区域 */
.main-content {
    height: calc(100% - 88px);
    overflow: hidden;
}
.view-c {
    position: relative;
    height: 100%;
    overflow: hidden;
}
.pointer {
    cursor: pointer;
}
/* loading */
.loading-c {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgba(255,255,255,.5);
    display: flex;
    align-items: center;
    justify-content: center;
}
.crumbs {
    margin-left: 10px;
    color: #97a8be;
    cursor: default;
}
.menu-level-3 .ivu-icon {
    font-size: 18px;
}
.shrink {
    text-align: center;
}
</style>