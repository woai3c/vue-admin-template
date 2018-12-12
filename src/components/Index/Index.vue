<template>
    <div class="index-vue">
        <!-- 侧边栏 -->
        <aside :class="asideClassName">
            <div class="logo-c">
                <img src="../../assets/logo.png" alt="logo" class="logo">
                <span v-show="isShowAsideTitle">后台管理系统</span>
            </div>
            <Menu theme="dark" width="100%" @on-select="gotoPage">
                <MenuItem v-show="isShowAsideTitle" name="Home"><Icon size="18" type="md-home" />主页</MenuItem>
                <Submenu name="2">
                    <template slot="title">
                        <Icon type="ios-paper"/>
                        <span v-show="isShowAsideTitle">表格</span>
                    </template>
                    <!-- name:路由名称 -->
                    <MenuItem v-show="isShowAsideTitle" name="Query1">表格1</MenuItem>
                    <MenuItem v-show="isShowAsideTitle" name="Query2">表格2</MenuItem>
                    <MenuItem v-show="isShowAsideTitle" name="Query3">表格3</MenuItem>
                    <MenuItem v-show="isShowAsideTitle" name="Query4">表格4</MenuItem>
                    <Submenu name="3">
                        <template slot="title">Submenu</template>
                        <MenuItem name="Query1">Option 7</MenuItem>
                        <MenuItem name="Query1">Option 8</MenuItem>
                    </Submenu>
                </Submenu>
            </Menu>
        </aside>

        <!-- 右侧部分 -->
        <section class="sec-right">
            <!-- 头部 -->
            <div class="top-c">
                <header>
                    <div class="h-left">
                        <div class="shrinkAside-c" @click="isShrinkAside" title="收缩/展开">
                            <Icon type="ios-apps" />
                        </div>
                        <div class="refresh-c" @click="reloadPage" title="刷新当前标签页">
                            <Icon type="md-refresh" />
                        </div>
                    </div>
                    <div class="h-right">
                        <div class="notice-c">
                            <div class="newMsg"></div>
                            <Icon type="ios-notifications-outline" />
                        </div>
                        <div class="user-img-c">
                            <img :src="userImg">
                        </div>
                        <Dropdown trigger="click" @on-click="userOperate" @on-visible-change="showArrow">
                            <div class="pointer">
                                <span>{{user}}</span>
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
                <ul class="ul-c">
                    <li v-for="(item, index) in tagsArry" :class="{active: isActive(item.name)}" @click="activeTag(index)">
                        <a class="li-a">
                            {{item.text}}
                        </a>
                        <Icon @click="closeTag(index)" type="md-close" />
                    </li>
                </ul>
            </div>
            <!-- 页面主体 -->
            <div class="main-content">
                <div class="view-c">
                    <keep-alive :include="keepAliveData">
                        <router-view/>
                    </keep-alive>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'Index',
    data () {
        return {
            user: '小明', // 用户名
            userImg: require('../../assets/user.jpg'), // 用户图片
            // 标签栏         标签标题     路由名称
            // 数据格式 {text: '首页', name: 'Foo'}
            tagsArry: [{text: '首页', name: 'Home'}], 
            arrowUp: false, // 用户详情向上箭头
            arrowDown: true, // 用户详情向下箭头
            isShowAsideTitle: true, // 是否展示侧边栏内容
            main: null, // 页面主要内容区域
            asideClassName: 'aside-big', // 控制侧边栏宽度变化
            // 由于iView的导航菜单比较坑 只能设定一个name参数
            // 所以需要在这定义路由名称和标签栏标题的映射表 有多少个页面就有多少个映射条数
            nameToTitle: {
                Query1: '表格1',
                Query2: '表格2',
                Query3: '表格3',
                Query4: '表格4',
                Home: '首页'
            }
        }
    },
    mounted() {
        this.main = document.querySelector('.sec-right')
        
        window.onresize = () => {
            this.main.style.width = this.isShowAsideTitle? 'calc(100% - 220px)' : 'calc(100% - 40px)'
            let w = document.documentElement.clientWidth || document.body.clientWidth
            // 可视窗口宽度太小 自动收缩侧边栏
            if (w < 1300) {
                this.shrinkAside()
            }
        }
    },
    computed: {
        keepAliveData() {
            return this.tagsArry.map(item => item.name)
        }
    },
    methods: {
        isActive(name) {
            return this.$route.name === name
        },
        gotoPage(name) {
            this.$router.push({name})
            
            if (!this.keepAliveData.includes(name)) {
                this.tagsArry.push({name, text: this.nameToTitle[name]})
            }
        },
        userOperate(name) {
            switch(name) {
                case '1':
                    // 修改密码
                    break
                case '2':
                    // 基本资料
                    break
                case '3':
                    this.$router.push({name: 'Login'})
                    // 退出登陆
                    break
            }
        },
        showArrow(flag) {
            this.arrowUp = flag
            this.arrowDown = !flag
        },
        // 展开 收缩 侧边栏
        isShrinkAside() {
            this.isShowAsideTitle? this.shrinkAside() : this.expandAside()
        },
        shrinkAside() {
            this.asideClassName =''
            this.isShowAsideTitle = false
            this.main.style.width = 'calc(100% - 40px)'
        },
        expandAside() {
            setTimeout(() => {
                this.isShowAsideTitle = true
            }, 200)
            this.asideClassName = 'aside-big'
            this.main.style.width = 'calc(100% - 220px)'
        },
        reloadPage() {
            let name = this.$route.name
            let index = this.keepAliveData.indexOf(name)
            this.closeTag(index, true)
           
            this.$nextTick(() => {
                if (this.tagsArry.length) {
                    this.tagsArry.splice(index, 0, {name, text: this.nameToTitle[name]})
                    this.gotoPage(name)
                } else {
                    this.$router.push({name: 'Default'})
                    this.$nextTick(() => {
                        this.tagsArry.push({name, text: this.nameToTitle[name]})
                        this.gotoPage(name)
                    })               
                }
            })
        },
        closeTag(i, flag) {
            let name = this.tagsArry[i].name
            this.tagsArry.splice(i, 1)

            event.stopPropagation()
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
            } else {
                // 如果是重新刷新页面则不执行
                if (!flag) {
                    this.gotoPage('Home')
                }
            }
            
        },
        activeTag(i) {
            this.gotoPage(this.tagsArry[i].name)
        },
    }
}
</script>

<style scoped>
.index-vue {
    height: 100%;
    display: flex;
    justify-content: space-between;
    color: #666;
}


/* 侧边栏 */
aside {
    min-width: 40px;
    background: #20222A;
    height: 100%;
    transition: all .5s;
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
    min-width: 220px;
}


/* 主体页面 */
.sec-right {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    transition: width .5s;
}


/* 主体页面头部 */
.top-c {
    background: rgba(230,230,230,.5);
    width: 100%;
}
header {
    height: 50px;
    border-bottom: none;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px;
    font-size: 14px;
}
header .ivu-icon {
    font-size: 24px;
}
.refresh-c {
    margin-left: 30px;
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
.shrinkAside-c {
    cursor: pointer;
}
.user-img-c {
    width: 34px;
    height: 34px;
    background: #ddd;
    border-radius: 50%;
    margin: 0 40px;
    overflow: hidden;
}


/* 标签栏 */
.ul-c {
    height: 34px;
    margin-top: 2px;
    background: #fff;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 10px;
    overflow: hidden;
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
    overflow: auto;
    height: 100%;
    width: 100%;
    background: rgba(230,230,230,.5);
    padding: 15px;
}
.view-c {
    background: #fff;
    padding: 15px;
}
.pointer {
    cursor: pointer;
}
</style>