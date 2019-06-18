<template>
    <div>
        <img :src="img">
        <p>未到找指定页面</p>
    </div>
</template>

<script>
export default {
    name: 'error',
    data() {
        return {
            img: require('../assets/imgs/404.jpg')
        }
    }
}
</script>

<style scoped>
    div {
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
</style>