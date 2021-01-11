<template>
    <el-container class="ct" :style="note">
        <el-main>
            <el-row>
                <el-col :offset="8" :span="8">
                    <el-input
                        placeholder="请输入内容"
                        v-model="title"
                        @blur="blurInput($event)"
                        :disabled="false">
                    </el-input>
                    <p class="title_p">
                        {{title}}
                    </p>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="8">
                    <div class="grid-content bg-purple"
                     @mousedown="holdDown()"
                     @mouseup="holdUp()"
                     @touchstart="saveData_start"
                     @touchend="saveData_end">
                        <ul class="ul1">
                            <li class="li_title title">
                                <span class="dianzan_title">菜品</span>
                                <span class="dianzan1_title">点赞排行</span>
                            </li>
                            <el-scrollbar style='height:90%'>
                                <template v-for="(item,index) in dianzanlist">
                                    <li v-if="index<dianzancount" :key="index" class="li1">
                                        <span class="dianzan" >{{item.names}}</span>
                                        <span class="dianzan1">{{item.num}}</span>
                                    </li>
                                </template>
                            </el-scrollbar>
                        </ul>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content bg-purple"
                     @mousedown="holdDown()"
                     @mouseup="holdUp()"
                     @touchstart="saveData_start"
                     @touchend="saveData_end">
                        <ul class="ul1">
                            <li class="li_title title">
                                <span class="dianzan_title">菜品</span>
                                <span class="dianzan1_title">点赞排行</span>
                            </li>
                            <el-scrollbar style='height:90%'>
                                <template v-for="(item,index) in dianzanlist">
                                    <li v-if="index<dianzancount*2 && index>=dianzancount"
                                        :key="index"
                                        class="li1">
                                        <span class="dianzan" >{{item.names}}</span>
                                        <span class="dianzan1">{{item.num}}</span>
                                    </li>
                                </template>
                            </el-scrollbar>
                        </ul>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content bg-purple"
                     @mousedown="holdDown()"
                     @mouseup="holdUp()"
                     @touchstart="saveData_start"
                     @touchend="saveData_end">
                        <ul class="ul1">
                            <li class="li_title title">
                                <span class="dianzan_title">菜品</span>
                                <span class="dianzan1_title">点赞排行</span>
                            </li>
                            <el-scrollbar style='height:90%'>
                                <template v-for="(item,index) in dianzanlist">
                                    <li v-if="index<dianzancount*3 && index>=dianzancount*2"
                                        :key="index"
                                        class="li1">
                                        <span class="dianzan" >{{item.names}}</span>
                                        <span class="dianzan1">{{item.num}}</span>
                                    </li>
                                </template>
                            </el-scrollbar>
                        </ul>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="8">
                    <div class="grid-content bg-purple"
                     @mousedown="holdDown()" @mouseup="holdUp()">
                        <ul class="ul2">
                            <li class="li_title title">
                                <span class="caiping1_title">菜品</span>
                                <span class="caiping2_title">点赞</span>
                            </li>
                            <el-scrollbar style='height:70%'>
                                <template v-for="(item,index) in caipinglist">
                                    <li v-if="index<(datacount/3)*1" :key="index" class="li2">
                                        <span class="caiping1" >{{item.names}}</span>
                                        <div class="caiping2 ClickLike-box"
                                            @click="dianzan(item.mid)">
                                            <img
                                            class="img_dianzan"
                                            :src="dianzanimg"/>
                                            <div class="animate"
                                            v-show="item.ClickLike_Status"></div>
                                        </div>
                                    </li>
                                </template>
                            </el-scrollbar>
                        </ul>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content bg-purple"
                     @mousedown="holdDown()" @mouseup="holdUp()">
                        <ul class="ul2">
                            <li class="li_title title">
                                <span class="caiping1_title">菜品</span>
                                <span class="caiping2_title">点赞</span>
                            </li>
                            <el-scrollbar style='height:70%'>
                                <template v-for="(item,index) in caipinglist">
                                    <li v-if="index<(datacount/3)*2 && index>=(datacount/3)*1"
                                        :key="index" class="li2">
                                        <span class="caiping1" >{{item.names}}</span>
                                        <div class="caiping2 ClickLike-box"
                                            @click="dianzan(item.mid)">
                                            <img
                                            class="img_dianzan"
                                            :src="dianzanimg"/>
                                            <div class="animate"
                                            v-show="item.ClickLike_Status"></div>
                                        </div>
                                    </li>
                                </template>
                            </el-scrollbar>
                        </ul>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content bg-purple"
                     @mousedown="holdDown()" @mouseup="holdUp()">
                        <ul class="ul2">
                            <li class="li_title title">
                                <span class="caiping1_title">菜品</span>
                                <span class="caiping2_title">点赞</span>
                            </li>
                            <el-scrollbar style='height:70%'>
                                <template v-for="(item,index) in caipinglist">
                                    <li v-if="index>=(datacount/3)*2" :key="index" class="li2">
                                        <span class="caiping1" >{{item.names}}</span>
                                        <div class="caiping2 ClickLike-box"
                                            @click="dianzan(item.mid)">
                                            <img
                                            class="img_dianzan"
                                            :src="dianzanimg"/>
                                            <div class="animate"
                                            v-show="item.ClickLike_Status"></div>
                                        </div>
                                    </li>
                                </template>
                            </el-scrollbar>
                        </ul>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <div class="grid-content bg-purple-dark">
                        <el-upload
                            action=""
                            :auto-upload="false"
                            :on-change="onChange"
                            :limit="1"
                            v-show="isShow"
                        >
                            <el-button size="mini" type="success">
                                上传文件
                            </el-button>
                        </el-upload>
                    </div>
                </el-col>
            </el-row>
        </el-main>
    </el-container>
</template>
<script>
import toExcel from '../utils/json2excel'

let XLSX = require('xlsx')

export default {
    name: 'other',
    data() {
        return {
            datacount: 0,
            dianzancount: 7,
            dianzanimg: require('../assets/imgs/dianzan.png'),
            dianzanitem: { mid: 0, names: '', num: 0 },
            caipingitem: { mid: 0, names: '', ClickLike_Status: false },
            dianzanlist: [],
            caipinglist: [],
            title: '',
            X_dir: 0,
            time: setInterval(() => {}),
            isSave: true,
            isShow: true,
            note: {
                backgroundImage: 'url(' + require('../assets/imgs/1.jpg') + ')',
            },
        }
    },
    watch: {
    },
    mounted() {
    },
    methods: {
        blurInput($even) {
            $even.target.hidden = true
            const input = document.getElementsByClassName('el-input')[0]
            const pIn = input.parentNode
            pIn.removeChild(input)
        },
        saveData_end(e) {
            const xEnd = e.changedTouches[0].clientX
            if (xEnd - this.X_dir > 400) {
                this.saveToExcel()
            }
        },
        saveData_start(e) {
            const xStart = e.targetTouches[0].clientX
            this.X_dir = xStart
        },
        compare(attr) {
            return function t(a, b) {
                const val1 = a[attr]
                const val2 = b[attr]
                return val2 - val1
            }
        },
        holdUp() {
            if (!this.isSave) {
                clearInterval(this.time)
            }
        },
        holdDown() {
            this.isSave = false
            const timeStart = new Date().getTime()
            this.time = setInterval(() => {
                const timeEnd = new Date().getTime()
                if (timeEnd - timeStart > 3000) {
                    this.isSave = true
                    clearInterval(this.time)
                    this.saveToExcel()
                }
            }, 100)
        },
        saveToExcel() {
            const th = ['菜单', '点赞数量']
            const val = ['names', 'num']
            const data = this.dianzanlist.map(v => val.map(k => v[k]))
            const [fileName, fileType, sheetName] = ['data', 'xlsx', '点赞']
            toExcel({ th, data, fileName, fileType, sheetName })
        },
        dianzan(id) {
            this.caipinglist.forEach(e => {
                if (e.mid === id) {
                    e.ClickLike_Status = true
                    setTimeout(() => {
                        e.ClickLike_Status = false
                    }, 900)
                }
            })
            this.dianzanlist.forEach(e => {
                if (e.mid === id) {
                    e.num += 1
                }
            })
            this.dianzanlist.sort(this.compare('num'))
        },
        async onChange(file) {
            const readFile = (file) => new Promise((resolve) => {
                let reader = new FileReader()
                reader.readAsBinaryString(file)
                reader.onload = (ev) => {
                    resolve(ev.target.result)
                }
            })
            let dataBinary = await readFile(file.raw)
            let workBook = XLSX.read(dataBinary, { type: 'binary', cellDates: true })
            let workSheet = workBook.Sheets[workBook.SheetNames[0]]
            const data = XLSX.utils.sheet_to_json(workSheet)
            data.forEach((val) => {
                this.dianzanitem = {
                    mid: val['编号'],
                    names: val['菜单'],
                    num: val['点赞数量'],
                }
                this.dianzanlist.push(this.dianzanitem)
                this.caipingitem = {
                    mid: val['编号'],
                    names: val['菜单'],
                    ClickLike_Status: false,
                }
                this.caipinglist.push(this.caipingitem)
                this.datacount += 1
            })
            this.dianzanlist.sort(this.compare('num'))
            this.isShow = false
        },
    },
}
</script>

<style lang="less">
.ct {
    height: 100%
}
.title_p {
    font-family: '微软雅黑';
    font-size: 30px;
    font-weight: 600;
    text-align: center;
}
.ClickLike-box {
    position: relative;
    img {
        width: 40px;
        height: 40px;
    }
    .animate {
        position: absolute;
        width: 35px;
        height: 35px;
        z-index: 100;
        animation: ClickLikeAni 1s ease;
        background-image: url("../assets/imgs/dianzan.png");
        background-size: cover;
    }
}
@keyframes ClickLikeAni {
    0% {
        top:0px;
        opacity: 1;
    }
    10% {
        top:-3px;
    }
    20% {
        top:-6px;
    }
    30% {
        top:-9px;
    }
    40% {
        top:-12px;
        transform: rotate(6deg);
        opacity: 0.6;
    }
    50% {
        top:-15px;
        transform: rotate(12deg);
        opacity: 0.5;
    }
    60% {
        top:-18px;
        transform: rotate(6deg);
        opacity: 0.4;
    }
    70% {
        top:-21px;
        transform: rotate(0deg);
        opacity: 0.3;
    }
    80% {
        top:-24px;
        transform: rotate(-6deg);
        opacity: 0.2;
    }
    90% {
        top:-27px;
        transform: rotate(-12deg);
        opacity: 0.1;
    }
    100% {
        top:-30px;
        transform: rotate(-6deg);
        opacity: 0;
    }
}
.img_dianzan {
    height: 40px;
    width:40px;
}
.title {
    background-color: rgba(255, 218, 185, 0.8);
    font-family: "微软雅黑";
    font-weight: 600;
}
.ul1 {
    height: 400px;
}
.li1 {
    height: 50px;
    width: 100%;
    line-height: 30px;
    text-align: center;
    position: relative;
}
.ul2 {
    height: 200px;
}
.li_title {
    height: 50px;
    width: 100%;
    line-height: 50px;
    text-align: center;
    position: relative;
    margin-top: 10px;
}
.caiping1_title {
    font-size: 22px;
    position: absolute;
    top: 50%;
    left: 25%;
    margin: -25px -20px;
}
.caiping2_title {
    font-size: 22px;
    position: absolute;
    top: 50%;
    left: 75%;
    margin: -25px -20px;
}
.li2 {
    height: 50px;
    width: 100%;
    line-height: 50px;
    text-align: center;
    position: relative;
}
.caiping1 {
    font-size: 30px;
    position: absolute;
    top: 50%;
    left: 25%;
    margin: -25px -30px;
}
.caiping2 {
    font-size: 30px;
    position: absolute;
    top: 50%;
    left: 75%;
    margin: -25px -15px;
}
.dianzan_title {
    font-size: 22px;
    position: absolute;
    top: 50%;
    left: 25%;
    margin: -25px -20px;
}
.dianzan1_title {
    font-size: 22px;
    position: absolute;
    top: 50%;
    left: 75%;
    margin: -25px -50px;
}
.dianzan {
    font-size: 30px;
    position: absolute;
    top: 50%;
    left: 25%;
    margin: -15px -30px;
}
.dianzan1 {
    font-size: 30px;
    position: absolute;
    top: 50%;
    left: 75%;
    margin: -15px -20px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple {
  background-color: rgba(255, 250, 240, 0.6);
}
.grid-content {
  border-radius: 4px;
  min-height: 100%;
}
.el-scrollbar__wrap {
  overflow-x: hidden;
}
</style>
