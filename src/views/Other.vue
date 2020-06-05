<template>
    <div>
        单独的路由
        <div>
            <Button @click="reback" type="primary" style="margin-left: 100px">返回</Button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'other',
    methods: {
        reback() {
            this.$router.back()
        },
    },
}
</script>

<style>

</style>