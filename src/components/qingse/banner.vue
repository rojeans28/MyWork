<template>
    <div class="banner">
        <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(image,index) in images" :key="index">
                <img v-lazy="image" />
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                images:[
                    'http://mp5.jmstatic.com/mobile/card_material/item_562_2048_838-ipad2048_1574156664.jpeg?imageView2/2/w/640/q/90',
                    'http://mp5.jmstatic.com/mobile/card_material/item_562_2048_838-ipad2048_1574156731.jpeg?imageView2/2/w/640/q/90'
                ]
            }
        },
    }
</script>

<style lang="less" scoped>
    .banner{
        img{
            width: 100%;
        }
    }
</style>