<template>
    <el-container style="height: 900px">
        <el-main>
            <el-row>
                <el-col :span="12">
                    <div class="grid-content bg-purple">
                        <ul class="ul1">
                            <li class="li_title title">
                                <span class="dianzan_title">菜品</span>
                                <span class="dianzan1_title">点赞排行</span>
                            </li>
                            <el-scrollbar style='height:100%'>
                                <template v-for="(item,index) in dianzanlist">
                                    <li v-if="index<10" :key="index" class="li1">
                                        <span class="dianzan" >{{item.name}}</span>
                                        <span class="dianzan1">{{item.num}}</span>
                                    </li>
                                </template>
                            </el-scrollbar>
                        </ul>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="grid-content bg-purple">
                        <ul class="ul1">
                            <li class="li_title title">
                                <span class="dianzan_title">菜品</span>
                                <span class="dianzan1_title">点赞排行</span>
                            </li>
                            <el-scrollbar style='height:100%'>
                                <template v-for="(item,index) in dianzanlist">
                                    <li v-if="index>=10" :key="index" class="li1">
                                        <span class="dianzan" >{{item.name}}</span>
                                        <span class="dianzan1">{{item.num}}</span>
                                    </li>
                                </template>
                            </el-scrollbar>
                        </ul>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <div class="grid-content bg-purple">
                        <ul class="ul2">
                            <li class="li_title title">
                                <span class="caiping_title">秀色可餐</span>
                                <span class="caiping1_title">菜品</span>
                                <span class="caiping2_title">点赞</span>
                            </li>
                            <el-scrollbar style='height:100%'>
                                <template v-for="(item,index) in caipinglist">
                                    <li v-if="index<10" :key="index" class="li2">
                                        <template>
                                            <div class="block caiping">
                                                <el-avatar
                                                    fit="fill"
                                                    shape="square"
                                                    :size="100"
                                                    :src="item.imgpath">
                                                </el-avatar>
                                            </div>
                                        </template>
                                        <span class="caiping1" >{{item.name}}</span>
                                        <div class="caiping2">
                                            <template>
                                                <div class="block" @click="dianzan(item.id)">
                                                    <el-avatar
                                                        fit="fill"
                                                        shape="square"
                                                        :size="50" :src="dianzanimg"
                                                    >
                                                    </el-avatar>
                                                </div>
                                            </template>
                                        </div>
                                    </li>
                                </template>
                            </el-scrollbar>
                        </ul>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="grid-content bg-purple">
                        <ul class="ul2">
                            <li class="li_title title">
                                <span class="caiping_title">秀色可餐</span>
                                <span class="caiping1_title">菜品</span>
                                <span class="caiping2_title">点赞</span>
                            </li>
                            <el-scrollbar style='height:100%'>
                                <template v-for="(item,index) in caipinglist">
                                    <li v-if="index>=10" :key="index" class="li2">
                                        <template>
                                            <div class=" caiping">
                                                <el-avatar fit="fill" shape="square" :size="100" src=""></el-avatar>
                                            </div>
                                        </template>
                                        <span class="caiping1" >{{item.name}}</span>
                                        <div class="caiping2">
                                            <template>
                                                <div class="block" @click="dianzan(item.id)">
                                                    <el-avatar
                                                        fit="fill"
                                                        shape="square"
                                                        :size="50" :src="dianzanimg"
                                                    >
                                                    </el-avatar>
                                                </div>
                                            </template>
                                        </div>
                                    </li>
                                </template>
                            </el-scrollbar>
                        </ul>
                    </div>
                </el-col>
                <!-- <el-col :span="12">
                    <div class="grid-content bg-purple">
                        <el-table
                            height=600px
                            :data="caipinglist"
                            style="width: 100%">
                            <el-table-column
                                label="图片"
                                width="180">
                                <template>
                                    <div class="block">
                                        <el-avatar fit="fill" shape="square" :size="100" :src="imgurl"></el-avatar>
                                    </div>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="name"
                                label="菜品"
                                width="180">
                            </el-table-column>
                            <el-table-column
                                label="点赞"
                                width="180">
                                <template slot-scope="scope">
                                    <el-button v-if="scope.row.flag" @click="dianzan(scope.$index)" type="text" icon="el-icon-star-off">
                                        点赞
                                    </el-button>
                                    <el-button v-if="!scope.row.flag" @click="dianzan(scope.$index)" type="text" icon="el-icon-star-on">
                                        点赞
                                    </el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </div>
                </el-col> -->
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
import toExcel from './json2excel'

let XLSX = require('xlsx')

export default {
    name: 'other',
    data() {
        return {
            dianzanimg: require('./dianzan.jpg'),
            dianzanlist: [],
            caipinglist: [],
            isShow: true,
        }
    },
    watch: {
    },
    mounted() {
    },
    methods: {
        saveToExcel() {
            const th = ['菜单', '点赞数量']
            const val = ['name', 'num']
            const data = this.dianzanlist.map(v => val.map(k => v[k]))
            const [fileName, fileType, sheetName] = ['test', 'xlsx', 'caidan']
            toExcel({ th, data, fileName, fileType, sheetName })
        },
        dianzan(id) {
            this.dianzanlist[id].num += 1
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
            data.forEach((val, index) => {
                const newdianzan = {
                    id: index,
                    name: val['菜单'],
                    num: val['点赞数量'],
                }
                this.dianzanlist.push(newdianzan)
            })
            let workSheet1 = workBook.Sheets[workBook.SheetNames[1]]
            const data1 = XLSX.utils.sheet_to_json(workSheet1)
            data1.forEach((val, index) => {
                const newcaiping = {
                    id: index,
                    pic: val['图片地址'],
                    name: val['菜名'],
                    price: val['价格'],
                    picpath: import('../assets/imgs/' + val['图片地址']),
                }
                console.log(newcaiping.picpath)
                this.caipinglist.push(newcaiping)
            })
            this.isShow = false
            // this.saveToExcel()
        },
    },
}
</script>

<style>
.title {
    background-color: rgb(214, 232, 248);
    font-family: "微软雅黑";
    font-weight: 600;
}
.ul1 {
    height: 200px;
}
.li1 {
    height: 30px;
    width: 100%;
    line-height: 30px;
    text-align: center;
    position: relative;
}
.ul2 {
    height: 700px;
}
.li_title {
    height: 50px;
    width: 100%;
    line-height: 50px;
    text-align: center;
    position: relative;
}
.caiping_title {
    font-size: 22px;
    position: absolute;
    top: 50%;
    left: 25%;
    margin-top: -25px;
    margin-left: -50px;
}
.caiping1_title {
    font-size: 22px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -25px;
}
.caiping2_title {
    font-size: 22px;
    position: absolute;
    top: 50%;
    left: 75%;
    margin-top: -25px;
    margin-right: -50px;
}
.li2 {
    height: 120px;
    width: 100%;
    line-height: 120px;
    text-align: center;
    position: relative;
}
.caiping {
    font-size: 20px;
    position: absolute;
    top: 50%;
    left: 25%;
    margin-top: -50px;
    margin-left: -50px;
}
.caiping1 {
    font-size: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -60px;
}
.caiping2 {
    font-size: 20px;
    position: absolute;
    top: 50%;
    left: 75%;
    margin-top: -40px;
    margin-right: -50px;
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
    font-size: 20px;
    position: absolute;
    top: 50%;
    left: 25%;
    margin: -15px 20px;
}
.dianzan1 {
    font-size: 20px;
    position: absolute;
    top: 50%;
    left: 75%;
    margin: -15px -20px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple {
  background: #fff5f5;
}
.grid-content {
  border-radius: 4px;
  min-height: 100%;
}
</style>
