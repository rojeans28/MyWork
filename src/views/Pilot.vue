<template>
    <div class="pilot">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="../assets/timg (2).jpg" alt="图片" class="animated jello" v-show="flag">
                </div>
                <div class="swiper-slide">
                    <img src="../assets/timg (1).jpg" alt="图片" class="animated jello">
                </div>
                <div class="swiper-slide">
                    <img src="../assets/timg.jpg" alt="图片" class="animated jello">
                    <van-button type="default" class="button animated swing" color="linear-gradient(to right, #4bb0ff, #6149f6)" @click="go" v-show="flag">立即体验</van-button>
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
import Swiper from "swiper";
    export default {
        data() {
            return {
                flag:true
            }
        },
        methods: {
            go(){
                this.$router.push({
                    path:"/home/index"
                })
            }
        },
        created() {
            // if(localStorage.one){
            //     this.$router.push({
            //         path:"/home"
            //     })
            // }else{
            //     localStorage.one = true;
            // }
            if(localStorage.one){
                this.$router.push({
                    path:"/advert"
                })
            }else{
                localStorage.one = true;
            }
        },
        mounted() {
            let _this = this;
            new Swiper('.swiper-container', {
                pagination: {
                    el: '.swiper-pagination',
                    dynamicBullets: true,
                },
                on: {
                    slideChangeTransitionStart: function(){
                        _this.flag = false;
                    },
                    slideChangeTransitionEnd: function(){
                        _this.flag = true;
                    },
                },
            });
        },
    }
</script>

<style >
    .pilot .swiper-container {
      width: 100%;
      height: 100%;
      position: fixed;
      left: 0;
      top: 0;
    }
    .swiper-slide {
      display: block;
      text-align: center;
    }
    .swiper-slide img{
        width: 100%;
    }
    .button{
        width: 200px;
        height: 45px;
        line-height: 45px;
        /* background-color: #fff; */
        position: absolute;
        left: 0;
        right: 0;
        bottom: 30px;
        margin:  0 auto;
        border-radius: 10px;
        opacity: 0.8;
    }
</style>