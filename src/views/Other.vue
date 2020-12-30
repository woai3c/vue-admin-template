<template>
    <el-container :style="note">
        <el-main>
            <el-row>
                <el-col :span="6">
                    <div class="grid-content bg-purple"
                     @mousedown="holdDown()" @mouseup="holdUp()">
                        <ul class="ul1">
                            <li class="li_title title">
                                <span class="dianzan_title">菜品</span>
                                <span class="dianzan1_title">点赞排行</span>
                            </li>
                            <el-scrollbar style='height:100%'>
                                <template v-for="(item,index) in dianzanlist">
                                    <li v-if="index<8" :key="index" class="li1">
                                        <span class="dianzan" >{{item.names}}</span>
                                        <span class="dianzan1">{{item.num}}</span>
                                    </li>
                                </template>
                            </el-scrollbar>
                        </ul>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple"
                     @mousedown="holdDown()" @mouseup="holdUp()">
                        <ul class="ul1">
                            <li class="li_title title">
                                <span class="dianzan_title">菜品</span>
                                <span class="dianzan1_title">点赞排行</span>
                            </li>
                            <el-scrollbar style='height:100%'>
                                <template v-for="(item,index) in dianzanlist">
                                    <li v-if="index<16 && index>=8" :key="index" class="li1">
                                        <span class="dianzan" >{{item.names}}</span>
                                        <span class="dianzan1">{{item.num}}</span>
                                    </li>
                                </template>
                            </el-scrollbar>
                        </ul>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple"
                     @mousedown="holdDown()" @mouseup="holdUp()">
                        <ul class="ul1">
                            <li class="li_title title">
                                <span class="dianzan_title">菜品</span>
                                <span class="dianzan1_title">点赞排行</span>
                            </li>
                            <el-scrollbar style='height:100%'>
                                <template v-for="(item,index) in dianzanlist">
                                    <li v-if="index<24 && index>=16" :key="index" class="li1">
                                        <span class="dianzan" >{{item.names}}</span>
                                        <span class="dianzan1">{{item.num}}</span>
                                    </li>
                                </template>
                            </el-scrollbar>
                        </ul>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple"
                     @mousedown="holdDown()" @mouseup="holdUp()">
                        <ul class="ul1">
                            <li class="li_title title">
                                <span class="dianzan_title">菜品</span>
                                <span class="dianzan1_title">点赞排行</span>
                            </li>
                            <el-scrollbar style='height:100%'>
                                <template v-for="(item,index) in dianzanlist">
                                    <li v-if="index>=24" :key="index" class="li1">
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
                <el-col :span="6">
                    <div class="grid-content bg-purple"
                     @mousedown="holdDown()" @mouseup="holdUp()">
                        <ul class="ul2">
                            <li class="li_title title">
                                <span class="caiping1_title">菜品</span>
                                <span class="caiping2_title">点赞</span>
                            </li>
                            <el-scrollbar style='height:100%'>
                                <template v-for="(item,index) in caipinglist">
                                    <li v-if="index<8" :key="index" class="li2">
                                        <span class="caiping1" >{{item.names}}</span>
                                        <div class="caiping2" @click="dianzan(item.mid)">
                                            <img class="img_dianzan" :src="dianzanimg"/>
                                        </div>
                                    </li>
                                </template>
                            </el-scrollbar>
                        </ul>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple"
                     @mousedown="holdDown()" @mouseup="holdUp()">
                        <ul class="ul2">
                            <li class="li_title title">
                                <span class="caiping1_title">菜品</span>
                                <span class="caiping2_title">点赞</span>
                            </li>
                            <el-scrollbar style='height:100%'>
                                <template v-for="(item,index) in caipinglist">
                                    <li v-if="index<16 && index>=8" :key="index" class="li2">
                                        <span class="caiping1" >{{item.names}}</span>
                                        <div class="caiping2" @click="dianzan(item.mid)">
                                            <img class="img_dianzan" :src="dianzanimg"/>
                                        </div>
                                    </li>
                                </template>
                            </el-scrollbar>
                        </ul>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple"
                     @mousedown="holdDown()" @mouseup="holdUp()">
                        <ul class="ul2">
                            <li class="li_title title">
                                <span class="caiping1_title">菜品</span>
                                <span class="caiping2_title">点赞</span>
                            </li>
                            <el-scrollbar style='height:100%'>
                                <template v-for="(item,index) in caipinglist">
                                    <li v-if="index<24 && index>=16" :key="index" class="li2">
                                        <span class="caiping1" >{{item.names}}</span>
                                        <div class="caiping2" @click="dianzan(item.mid)">
                                            <img class="img_dianzan" :src="dianzanimg"/>
                                        </div>
                                    </li>
                                </template>
                            </el-scrollbar>
                        </ul>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple"
                     @mousedown="holdDown()" @mouseup="holdUp()">
                        <ul class="ul2">
                            <li class="li_title title">
                                <span class="caiping1_title">菜品</span>
                                <span class="caiping2_title">点赞</span>
                            </li>
                            <el-scrollbar style='height:100%'>
                                <template v-for="(item,index) in caipinglist">
                                    <li v-if="index>=24" :key="index" class="li2">
                                        <span class="caiping1" >{{item.names}}</span>
                                        <div class="caiping2" @click="dianzan(item.mid)">
                                            <img class="img_dianzan" :src="dianzanimg"/>
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

require('../utils/style.css')

let XLSX = require('xlsx')

export default {
    name: 'other',
    data() {
        return {
            dianzanimg: require('../assets/imgs/hongxin.png'),
            dianzanitem: { mid: 0, names: '', num: 0 },
            caipingitem: { mid: 0, names: '' },
            dianzanlist: [],
            caipinglist: [],
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
        compare(attr) {
            return function t(a, b) {
                const val1 = a[attr]
                const val2 = b[attr]
                return val2 - val1
            }
        },
        holdUp() {
            console.log(123)
            if (!this.isSave) {
                clearInterval(this.time)
            }
        },
        holdDown() {
            console.log(456)
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
            const val = ['name', 'num']
            const data = this.dianzanlist.map(v => val.map(k => v[k]))
            const [fileName, fileType, sheetName] = ['data', 'xlsx', '点赞']
            toExcel({ th, data, fileName, fileType, sheetName })
        },
        dianzan(id) {
            this.dianzanlist.forEach(e => {
                if (e.mid === id) {
                    console.log(e.mid)
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
                }
                this.caipinglist.push(this.caipingitem)
            })
            this.dianzanlist.sort(this.compare('num'))
            this.isShow = false
        },
    },
}
</script>

<style>
.img_dianzan {
    height: 50px;
    width:50px;
}
.title {
    background-color: rgba(255, 218, 185, 0.8);
    font-family: "微软雅黑";
    font-weight: 600;
}
.ul1 {
    height: 100%;
}
.li1 {
    height: 50px;
    width: 100%;
    line-height: 30px;
    text-align: center;
    position: relative;
}
.ul2 {
    height: 100%;
}
.li_title {
    height: 50px;
    width: 100%;
    line-height: 50px;
    text-align: center;
    position: relative;
}
.caiping1_title {
    font-size: 22px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -25px;
    margin-left: -95px;
}
.caiping2_title {
    font-size: 22px;
    position: absolute;
    top: 50%;
    left: 75%;
    margin-top: -25px;
    margin-left: -40px;
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
    left: 50%;
    margin-top: -20px;
    margin-left: -95px;
}
.caiping2 {
    font-size: 30px;
    position: absolute;
    top: 50%;
    left: 75%;
    margin-top: -20px;
    margin-left: -40px;
}
.dianzan_title {
    font-size: 22px;
    position: absolute;
    top: 50%;
    left: 25%;
    margin: -25px 20px;
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
    margin: -15px 20px;
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
</style>
