<template>
    <div>
        <img :src="img">
        <p>未到找指定页面</p>
        <Button class="back" @click="back">返回页面</Button>
    </div>
</template>

<script>
export default {
    name: 'error',
    data() {
        return {
            img: require('../assets/imgs/404.jpg'),
        }
    },
    methods: {
        back() {
            this.$router.back()
        },
    },
}
</script>

<style scoped>
div {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #f8f5ec;
}
img {
    display: block;
    margin: auto;
}
p {
    font-size: 40px;
    text-align: center;
    margin-bottom: 100px;
}
.back {
    position: absolute;
    top: 40px;
    left: 50%;
    transform: translateX(-50%);
}
</style>