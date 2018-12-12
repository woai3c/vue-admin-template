<template>
    <div>
        <div class="query-c">
            查询：
            <Input @on-search="search" search placeholder="请输入查询内容" style="width: auto" />
        </div>
        <Table border stripe :columns="columns1" :data="data1"></Table>
    </div>
</template>

<script>
export default {
    name: 'Query2',
    data() {
        return {
            columns1: [
                {
                    title: 'Name',
                    key: 'name'
                },
                {
                    title: 'Age',
                    key: 'age'
                },
                {
                    title: 'Address',
                    key: 'address'
                }
            ],
            data1: [
                {
                    name: 'John Brown',
                    age: 18,
                    address: 'New York No. 1 Lake Park',
                    date: '2016-10-03'
                },
                {
                    name: 'Jim Green',
                    age: 24,
                    address: 'London No. 1 Lake Park',
                    date: '2016-10-01'
                },
                {
                    name: 'Joe Black',
                    age: 30,
                    address: 'Sydney No. 1 Lake Park',
                    date: '2016-10-02'
                },
                {
                    name: 'Jon Snow',
                    age: 26,
                    address: 'Ottawa No. 2 Lake Park',
                    date: '2016-10-04'
                }
            ]
        }
    },
    methods: {
        search(val) {
            console.log(val.length)
        }
    }
}
</script>

<style scoped>
.query-c {
    margin-bottom: 20px;
}
</style>
