<template>
    <div>
        <section class="deals-content">
            <div class="deals-content-header">
                <span class="head_bg">
                    <img src="https://f0.jmstatic.com/btstatic/h5/common/icon_title.png" alt="">
                </span>
                <span>活动推荐</span>
            </div>
            <main class="main">
                <img src="http://mp5.jmstatic.com/mobile/card_material/item_2835_2048_1024-ipad2048_1574068148.jpeg?imageView2/2/w/640/q/90" alt="">
            </main>
        </section>
    </div>
</template>

<script>
    export default {
        
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
            img{
                width: 100%;
            }
        }
    }
</style>