<template>
    <div>
        <section class="deals-content">
            <div class="deals-content-header">
                <span class="head_bg">
                    <img src="https://f0.jmstatic.com/btstatic/h5/common/icon_title.png" alt="">
                </span>
                <span>全球热销品牌</span>
            </div>
            <main class="main">
                <van-grid square  icon-size="93.75px" center :border="false">
                    <van-grid-item v-for="items in lists" :key="items.i" :icon="items.url"/>
                </van-grid>
            <!-- 商品栏 start-->
            <!-- 商品栏 end-->
            </main>
        </section>
        <section class="deals-content">
            <van-grid :border="false" :column-num="2">
                <van-grid-item>
                    <van-image src="http://mp5.jmstatic.com/mobile/card_material/item_5518_1024_512-ipad2048_1574066266.jpeg?imageView2/2/w/320/q/90" />
                </van-grid-item>
                <van-grid-item>
                    <van-image src="http://mp6.jmstatic.com/mobile/card_material/item_5518_1024_512-ipad2048_1574049133.jpeg?imageView2/2/w/320/q/90" />
                </van-grid-item>
            </van-grid>
        </section>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                lists:[
                    {url:"http://mp6.jmstatic.com/mobile/card_material/item_2386_512_512-ipad2048_1502086238.jpeg?imageView2/2/w/160/q/90"},
                    {url:"http://mp5.jmstatic.com/mobile/card_material/item_2386_512_512-ipad2048_1560910791.jpeg?imageView2/2/w/160/q/90"},
                    {url:"http://mp5.jmstatic.com/mobile/card_material/item_2386_512_512-ipad2048_1498543566.jpeg?imageView2/2/w/160/q/90"},
                    {url:"http://mp5.jmstatic.com/mobile/card_material/item_2386_512_512-ipad2048_1551235310.jpeg?imageView2/2/w/160/q/90"},
                    {url:"http://mp5.jmstatic.com/mobile/card_material/item_2386_512_512-ipad2048_1548056454.jpeg?imageView2/2/w/160/q/90"},
                    {url:"http://mp6.jmstatic.com/mobile/card_material/item_2386_512_512-ipad2048_1563960647.jpeg?imageView2/2/w/160/q/90"},
                    {url:"http://mp6.jmstatic.com/mobile/card_material/item_2386_512_512-ipad2048_1548055217.png?imageView2/2/w/160/q/90"},
                    {url:"http://mp5.jmstatic.com/mobile/card_material/item_2386_512_512-ipad2048_1548055580.jpeg?imageView2/2/w/160/q/90"},
                ]
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
    }
</style>