<template>
    <div>
        <section class="deals-content">
            <div class="deals-content-header">
                <span class="head_bg">
                    <img src="https://f0.jmstatic.com/btstatic/h5/common/icon_title.png" alt="">
                </span>
                <span>精选活动推荐</span>
            </div>
            <main class="main">
                <div class="metra-lists">
                    <van-grid square :column-num="2" center :border="false" icon-size="187.5px">
                        <van-grid-item
                            v-for="items in lists"
                            :key="items.a"
                            :icon="items.url"
                        />
                    </van-grid>
                </div>
            </main>
        </section>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                lists:[
                    {url:"http://mp6.jmstatic.com/mobile/card_material/item_5640_1024_1024-ipad2048_1574062896.jpeg?imageView2/2/w/320/q/90"},
                    {url:"http://mp5.jmstatic.com/mobile/card_material/item_5640_1024_1024-ipad2048_1573713139.jpeg?imageView2/2/w/320/q/90"},
                    {url:"http://mp6.jmstatic.com/mobile/card_material/item_5640_1024_1024-ipad2048_1573790098.jpeg?imageView2/2/w/320/q/90"},
                    {url:"http://mp6.jmstatic.com/mobile/card_material/item_5640_1024_1024-ipad2048_1574063080.jpeg?imageView2/2/w/320/q/90"},
                    {url:"http://mp5.jmstatic.com/mobile/card_material/item_5640_1024_1024-ipad2048_1574056677.jpeg?imageView2/2/w/320/q/90"},
                    {url:"http://mp6.jmstatic.com/mobile/card_material/item_5640_1024_1024-ipad2048_1574055854.jpeg?imageView2/2/w/320/q/90"},
                    {url:"http://mp5.jmstatic.com/mobile/card_material/item_5640_1024_1024-ipad2048_1574065688.jpeg?imageView2/2/w/320/q/90"},
                    {url:"http://mp6.jmstatic.com/mobile/card_material/item_5640_1024_1024-ipad2048_1573625165.jpeg?imageView2/2/w/320/q/90"},
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
        .main{
            .metra-lists{
                .metra-list{
                    img{
                        width: 100%;
                    }
                }
            }
        }
    }
</style>