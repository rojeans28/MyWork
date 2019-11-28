<template>
    <div>
        <div class="banner">
            <div class="swiper-container">
                <van-swipe class="goods-swipe" :autoplay="3000">
                    <van-swipe-item v-for="thumb in goods.thumb" :key="thumb">
                        <img :src="thumb" style="width:100%">
                    </van-swipe-item>
                </van-swipe>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                goods:{},
                ajaxgoodslists:[
                    {
                        title:"DoMeCare欣兰黑里透白冻膜225g+洗颜乳+波波水",
                        price:178,
                        desc:"6g*5片",
                        delPrice:415,
                        express:"免运费",
                        thumb:[
                            'http://mp5.jmstatic.com/product/005/063/5063024_std/5063024_1000_1000.jpg?v=1574761809&imageView2/2/w/800/q/90',
                            'http://mp5.jmstatic.com/product/005/063/5063024_std/5063024_1_1000_1000.jpg?v=1574761809&imageView2/2/w/800/q/90'
                        ],
                        product:"YWLH-6 燕窝6件套礼盒"
                    },
                    {
                        title:" 素萃 额纹清抬头纹贴 淡化额头纹  补水提亮",
                        desc:"6g*5片",
                        price:59,
                        delPrice:205,
                        express:"免运费",
                        thumb:[
                            'http://mp5.jmstatic.com/product/005/016/5016460_std/5016460_1000_1000.jpg?v=1573526200&imageView2/2/w/800/q/90',
                            'http://mp5.jmstatic.com/product/005/016/5016460_std/5016460_1_1000_1000.jpg?v=1573526200&imageView2/2/w/800/q/90'
                        ],
                        product:"YWLH-6 燕窝6件套礼盒"
                    },
                    {
                        title:"伊蒂之屋Etude House 玩转101多功能高光修容组合 修容棒",
                        desc:"6g*5片",
                        price:39,
                        delPrice:98,
                        express:"免运费",
                        thumb:[
                            'http://mp5.jmstatic.com/product/005/085/5085404_std/5085404_1000_1000.jpg?v=1574404281&imageView2/2/w/800/q/90',
                            'http://mp5.jmstatic.com/product/005/085/5085404_std/5085404_1000_1000.jpg?v=1574404281&imageView2/2/w/800/q/90'
                        ],
                        product:"高光修容组合#1 1.7g*2"
                    },
                    {
                        title:"美宝莲飞箭睫毛膏10ml，浓密不结块，告别苍蝇腿",
                        desc:"6g*5片",
                        price:59,
                        delPrice:205,
                        express:"免运费",
                        thumb:[
                            'http://mp5.jmstatic.com/product/004/909/4909794_std/4909794_1000_1000.jpg?v=1559302921&imageView2/2/w/800/q/90',
                            'http://mp5.jmstatic.com/product/004/909/4909794_std/4909794_1_1000_1000.jpg?v=1559302921&imageView2/2/w/800/q/90'
                        ],
                        product:"10ml"
                    },
                    {
                        title:" 素萃 额纹清抬头纹贴 淡化额头纹  补水提亮",
                        desc:"6g*5片",
                        price:59,
                        delPrice:205,
                        express:"免运费",
                        thumb:[
                            'http://mp5.jmstatic.com/product/005/016/5016460_std/5016460_1000_1000.jpg?v=1573526200&imageView2/2/w/800/q/90',
                            'http://mp5.jmstatic.com/product/005/016/5016460_std/5016460_1_1000_1000.jpg?v=1573526200&imageView2/2/w/800/q/90'
                        ],
                        product:"YWLH-6 燕窝6件套礼盒"
                    }
                ]
            }
        },
        created() {
            this.goods = this.ajaxgoodslists[this.$route.query.id-1];
        },
        methods: {
            onClickRight(){
                this.$router.push({path:"/home/index"});
            },
            onClickLeft(){
                this.$router.go(-1);
            }
        }
    }
</script>

<style lang="less" scoped>
    .banner{
        .swiper-container {
            width: 100%;
            height:375px;
            .swiper-slide {
                background-position: center;
                background-size: cover;
            }
        }
    }
</style>