<template>
    <div>
<main class="main">
            <!-- 商品栏 start-->
            <div class="pre-wrap">
                <!-- 商品 -->
                <a href="javascript:;" class="product-item" v-for="items in goods" :key="items.goods">
                    <div class="deal-item item-each" @click="detail(items.id)">
                        <div class="product-img">
                            <img :src="items.img" alt="">
                        </div>
                        <div class="product-detail">
                            <div class="product-title">
                                <span class="title-tag">[预热]</span>
                                {{items.context}}
                            </div>
                            <div class="promotion-wrap"></div>
                            <div class="price-wrap">
                                <div class="price-list">
                                        <span class="product-price">￥<span>{{items.price}}</span></span>
                                        <span class="del-price">￥{{items.delPrice}}</span>
                                </div>
                                <div class="buy-num">{{items.discuss}}</div>
                            </div>
                        </div>
                    </div>   
                </a>
            </div>
        </main>
    </div>
</template>

<script>
import yure1 from '../../assets/images/yure1.jpg';
import yure2 from '../../assets/images/yure2.jpg';
    export default {
        data() {
            return {
                goods:[
                    {
                        id:1,
                        img:yure1,
                        context:"【效期至2020年7月】Sesderma祛痘精华15ml",
                        price:52,
                        delPrice:60,
                        discuss:"25条评论"
                    },
                    {
                        id:1,
                        img:yure2,
                        context:"【效期至2020年7月】Sesderma祛痘精华15ml",
                        price:52,
                        delPrice:60,
                        discuss:"25条评论"
                    },
                    {
                        id:1,
                        img:yure1,
                        context:"【效期至2020年7月】Sesderma祛痘精华15ml",
                        price:52,
                        delPrice:60,
                        discuss:"25条评论"
                    },
                    {
                        id:1,
                        img:yure2,
                        context:"【效期至2020年7月】Sesderma祛痘精华15ml",
                        price:52,
                        delPrice:60,
                        discuss:"25条评论"
                    },
                    {
                        id:1,
                        img:yure1,
                        context:"【效期至2020年7月】Sesderma祛痘精华15ml",
                        price:52,
                        delPrice:60,
                        discuss:"25条评论"
                    },
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

<style lang="less">
    .pre-wrap{
        .product-item{
            margin-bottom:8px;
            display: block;
            color: #333;
            text-decoration: none;
            .deal-item{
                height: 6.93333rem;
                position: relative;
                overflow: hidden;
                background-color: #fff;
                .product-img{
                    position: relative;
                    height: 100%;
                    img{
                        height: 100%;
                    }
                }
                .product-detail{
                    position: absolute;
                    top: 0;
                    left: 0;
                    margin-left: 8.53333rem;
                    margin-right: 0.64rem;
                    height: 100%;
                    min-width: 10.827rem;
                    .product-title{
                        margin-top: 0.64rem;
                        color: #333;
                        font-size: 13px;
                        line-height: 17px;
                        max-height: 51px;
                        overflow: hidden;
                        display: -webkit-box;
                        -webkit-box-orie:vertical;
                        -webkit-line-clamp:3;
                        margin-bottom:5;
                        .title-tag{
                            color: #fe4070;
                            margin-right: 4px;
                        }
                    }
                    .promotion-wrap{
                        color: #fe4070;
                        font-size: 12px;
                        line-height: 12px;
                    }
                    .price-wrap{
                        position: absolute;
                        bottom: 0.64rem;
                        .price-list{
                            .jumei-price{
                                color:#fe4070;
                                font-size: 12px;
                                span{
                                    font-size: 20px;
                                    margin: 0 2px;
                                }
                            }
                            .del-price{
                                color: #999;
                                font-size: 12px;
                                text-decoration: line-through;
                            }
                        }
                        .buy-num{
                            color: #999;
                            font-size: 11px;
                        }
                    }
                }
            }
        }
    }
</style>