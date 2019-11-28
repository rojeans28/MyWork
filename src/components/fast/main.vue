<template>
    <div>
        <section class="picture-tap">
            <van-grid square icon-size="48px" :border="false">
                <van-grid-item icon="https://mp5.jmstatic.com/mobile/other/detail_page_guarantee/interantion_shipping.png?imageView2/2/w/51/q/70" text="海外直供" />
                <van-grid-item icon="https://mp5.jmstatic.com/mobile/other/detail_page_guarantee/genuine_guarantee.png?imageView2/2/w/51/q/70" text="原装正品" />
                <van-grid-item icon="https://mp5.jmstatic.com/mobile/other/detail_page_guarantee/global_delivery.png?imageView2/2/w/51/q/70" text="极速到货" />
                <van-grid-item icon="https://mp5.jmstatic.com/mobile/other/detail_page_guarantee/return_guarantee_7.png?imageView2/2/w/51/q/70" text="轻松退货" />
            </van-grid>
        </section>
        <section class="deals-content">
            <div class="deals-content-header">
                <span class="head_bg">
                    <img src="https://f0.jmstatic.com/btstatic/h5/common/icon_title.png" alt="">
                </span>
                <span>今日团购，每天10点上新</span>
            </div>
            <main class="main">
            <!-- 商品栏 start-->
                <div class="online-wrap">
                    <!-- 商品 -->
                    <a href="javascript:;" class="product-item" v-for="item in goods" :key="item.e">
                        <div class="deal-item" @click="detail(item.id)">
                            <div class="product-img">
                                <img :src="item.img" alt="">
                            </div>
                            <div class="product-detail">
                                <div class="product-title">{{item.context}} </div>
                                <div class="promotion-wrap"></div>
                                <div class="price-wrap">
                                    <div class="price-list">
                                            <span class="product-price">￥<span>{{item.price}}</span></span>
                                            <span class="del-price">￥{{item.delPrice}}</span>
                                    </div>
                                </div>
                            </div>
                        </div>   
                    </a>
                </div>
                <!-- 商品栏 end-->
            </main>
        </section>
    </div>
</template>

<script>
import tuijiantu1 from '../../assets/images/tuijian_tu01.jpg';
import tuijiantu2 from '../../assets/images/tuijian_tu02.jpg';
    export default {
        data() {
            return {
                border:"",
                goods:[
                    {
                        id:1,
                        img:tuijiantu1,
                        context:"玉兰油美白润肤霜50g",
                        price:52,
                        delPrice:165,
                    },
                    {
                        id:1,
                        img:tuijiantu2,
                        context:"玉兰油美白润肤霜50g",
                        price:52,
                        delPrice:165,
                    },
                    {
                        id:1,
                        img:tuijiantu1,
                        context:"玉兰油美白润肤霜50g",
                        price:52,
                        delPrice:165,
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
    // 商品栏 start
    .picture-tap{
        margin-bottom: 0.427rem;
        background-color: #fff;
    }
    .deals-content{
        background-color: #fff;
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
    .online-wrap{
        width: 100%;
        .product-item{
            width: 100%;
            margin-bottom: 8px;
            display: block;
            .my-item{
                height:6.93333rem;
                background-color: @mainColor;
                overflow: hidden;
                position: relative;
                img{
                    height: 100%;
                }
            }
            .deal-item{
                height: 6.93333rem;
                position: relative;
                overflow: hidden;
                background-color: @mainColor;
                .product-img{
                    position: relative;
                    height: 100%;
                    img{
                        height: 100%;
                    }
                }
                .product-detail{
                    height: 100%;
                    min-width: 10.827rem;
                    margin-right: 0.64rem;
                    margin-left: 8.533333rem;
                    position: absolute;
                    top:0;
                    left:0;
                    .product-title{
                        display: -webkit-box;
                        margin-top: 0.64rem;
                        color: #333;
                        font-size: 13px;
                        line-height: 17px;
                        max-height: 51px;
                        overflow:hidden;
                        margin-bottom: 5px;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 3;
                        
                    }
                    .promotion-wrap{
                        color: @navColor;
                        font-size: 12px;
                        line-height: 12px;
                    }
                    .price-wrap{
                        position: absolute;
                        bottom: 0.64rem;
                        .price-list{
                            .product-price{
                                color: @navColor;
                                font-size: 12px;
                                span{
                                    font-size: 20px;
                                    margin: 0 2px;
                                }
                            }
                            .del-price{
                                color: #999;
                                font-size: @fontSize - 2px;
                                text-decoration: line-through;
                            }
                        }
                        .buy-num{
                            color: #999;
                            font-size: @fontSize - 3px;
                        }
                    }
                }
            }
        }
    }
    // 商品栏 end
</style>