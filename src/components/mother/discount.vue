<template>
    <div>
        <section class="deals-content">
            <div class="deals-content-header">
                <span class="head_bg">
                    <img src="https://f0.jmstatic.com/btstatic/h5/common/icon_title.png" alt="">
                </span>
                <span>今日特惠</span>
            </div>
            <main class="main">
            <!-- 商品栏 start-->
                <div class="metra-lists">
                    <a href="javascript:;" v-for="imgs in goods" :key="imgs.a">
                        <img :src="imgs.url" alt="" @click="detail(imgs.id)">
                    </a>
                </div>
            <!-- 商品栏 end-->
            </main>
        </section>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                goods:[
                    {
                        id:1,
                        url:"http://mp5.jmstatic.com/mobile/card_material/item_7710_2048_1024-ipad2048_1573710958.jpeg?imageView2/2/w/640/q/90"
                    },{
                        id:1,
                        url:"http://mp5.jmstatic.com/mobile/card_material/item_7710_2048_1024-ipad2048_1573710882.jpeg?imageView2/2/w/640/q/90"
                    }
                ]
            }
        },
        methods: {
            detail(id){
                this.$router.push({path:`/detail?id=${id}`});
            }
        },
    }
</script>

<style lang="less" scoped>
    @mainColor:#FFFFFF;
    @navColor:#fe4070;
    @fontSize:14px;
    .deals-content{
        background-color: #fff;
        margin-bottom: 0.427rem;
        .deals-content-header{
            text-align: center;
            .head_bg{
                width: 0.827rem;
                height: 2.133rem;
                line-height: 2.133rem;
                position: relative;
                top: 0.1875rem;
                img{
                    width: 100%;
                }
            }
            span{
                color: #333;
                font-size: 14px;
                display: inline-block;
            }
        }
        .main{
            .metra-lists{
                height: 375.5px;
                img{
                    width: 100%;
                }
            }
        }
    }
</style>