<template>
    <div>
        <div class="tob-con tabcon-ptop">
            <div class="module-container tob-on">
                <section class="product-items">
                    <ul class="product-con">
                        <li v-for="items in goods" :key="items.d">
                            <a href="javascript:;" class="goods" @click="detail(items.id)">
                                <div class="people-number">{{items.discuss}}</div>
                                <div class="goods-topsmall">
                                    <img :src='items.img' alt="">
                                </div>
                                <div class="goods-middle">
                                    <span class="goods-num">{{items.tuan}}</span>
                                    {{items.info}}
                                </div>
                                <div class="goods-footer">
                                    <div class="price-left">
                                        <span class="ct-price">￥{{items.price}}</span>
                                        <span class="sc-price"></span>
                                        <span class="jm-price">单买价￥{{items.priceOne}}</span>
                                    </div>
                                    <div class="time-right">
                                        <span class="sy-time">仅剩下{{items.time}}</span>
                                        <span class="goods-btn">去开团</span>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                    <div class="tips">已到当前页面最底部，看看其他页面吧~</div>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
import tupian1 from '../../assets/images/souye_zhutitu_01.jpg';
import tupian2 from '../../assets/images/souye_zhutitu_02.jpg';
import pingtuan1 from '../../assets/images/tuijian_tu01.jpg';
import pingtuan2 from '../../assets/images/tuijian_tu02.jpg';
export default {
    data() {
        return {
            goods:[
                {
                    id:1,
                    url:tupian1,
                    discuss:'914条评论',
                    img:pingtuan1,
                    tuan:"[2人团]",
                    info:"【手机专享】缤肌 小红针血橙面膜20片 急救保湿",
                    price:59,
                    priceOne:129,
                    time:'00:00:00',
                },
                {
                    id:1,
                    url:tupian2,
                    discuss:'914条评论',
                    img:pingtuan1,
                    tuan:"[2人团]",
                    info:"【手机专享】缤肌 小红针血橙面膜20片 急救保湿",
                    price:59,
                    priceOne:129,
                    time:'00:00:00',
                },
                {
                    id:1,
                    url:tupian1,
                    discuss:'914条评论',
                    img:pingtuan1,
                    tuan:"[2人团]",
                    info:"【手机专享】缤肌 小红针血橙面膜20片 急救保湿",
                    price:59,
                    priceOne:129,
                    time:'00:00:00',
                },
                {
                    id:1,
                    url:tupian1,
                    discuss:'914条评论',
                    img:pingtuan2,
                    tuan:"[2人团]",
                    info:"【手机专享】缤肌 小红针血橙面膜20片 急救保湿",
                    price:59,
                    priceOne:129,
                    time:'00:00:00',
                },
                {
                    id:1,
                    url:tupian1,
                    discuss:'914条评论',
                    img:pingtuan2,
                    tuan:"[2人团]",
                    info:"【手机专享】缤肌 小红针血橙面膜20片 急救保湿",
                    price:59,
                    priceOne:129,
                    time:'00:00:00',
                },
                
            ],
        }
    },
    methods: {
        detail(id){
            this.$router.push({path:`/detail?id=${id}`});
        }
    },
    props:["newId"]
}
</script>

<style lang="less">
    @mainColor:#FFFFFF;
    @navColor:#fe4070;
    @fontSize:14px;
    .tob-con{
        .tob-on{
            display: block;
            .product-items{
                .product-con{
                    li{
                        margin-bottom: 8px;
                        background-color: #fff;
                        a{
                            display: block;
                            width: 100%;
                            overflow: hidden;
                            position: relative;
                            .people-number{
                                font-size: 11px;
                                padding: 4px 7px;
                                border:0.0625rem solid #eee;
                                border-left: 0;
                                border-top-right-radius: 1.5625rem;
                                border-bottom-right-radius: 1.5625rem;
                                color: #666;
                                background-color: rgba(251,251,251,.8);
                                position: absolute;
                                left: 0;
                                top: 5.875rem;
                                z-index: 1;
                            }
                            .goods-topsmall{
                                overflow: hidden;
                                text-align: center;
                                img{   
                                    margin: 0 auto;
                                    height: 8rem;
                                }
                            }
                            .goods-middle{
                                font-size: 14px;
                                max-height: 34px;
                                line-height: 18px;
                                padding: 0 12px;
                                margin-top: 10px;
                                color: #424242;
                                overflow: hidden;
                                display: -webkit-box;
                                -webkit-line-clamp: 2;
                                -webkit-box-orient: vertical;
                                white-space: inherit;
                                span.goods-num{
                                    margin-left: 2px;
                                    color: @navColor;
                                    display: inline-block;
                                }
                            }
                            .goods-footer{
                                padding: 12px;
                                overflow: hidden;
                                .price-left{
                                    float: left;
                                    font-family: Arial;
                                    .ct-price{
                                        font-size: 18px;
                                        color: @navColor;
                                    }
                                    .sc-price{
                                        font-size: 12px;
                                        padding-left: 4px;
                                        color: #999;
                                        text-decoration: line-through;
                                    }
                                    .jm-price{
                                        font-size: 11px;
                                        color: #999;
                                        display: block;
                                    }
                                }
                                .time-right{
                                    border-radius: 25px;
                                    float: right;
                                    border:0.0625rem solid @navColor;
                                    margin-top: .25rem;
                                    background-color: @navColor;
                                    .sy-time{
                                        padding-top: 7px;
                                        padding-bottom: 6px;
                                        min-width: 90px;
                                        float:left;
                                        font-size: 13px;
                                        padding-left: .375rem;
                                        padding-right: .375rem;
                                        color: #f85386;
                                        background-color: #fff;
                                        border-top-left-radius: 1.5625rem;
                                        border-bottom-left-radius: 1.5625rem;
                                    }
                                    .goods-btn{
                                        width: 4.6875rem;
                                        height: 26px;
                                        border-radius: 25px;
                                        line-height: 26px;
                                        font-size:14px;
                                        background-color: @navColor;
                                        float: right;
                                        color: #fff;
                                        text-align: center;
                                        border-right: 0.0625rem solid @navColor;
                                    }
                                }
                            }
                        }
                    }
                }
                .tips{
                    font-size: 14px;
                    margin-bottom: 8px;
                    line-height: 20px;
                    width: 100%;
                    color: #999;
                    text-align: center;
                }
            }
        }
        .load-next{
            width: 100%;
            color: #999;
            text-align: center;
            transform-origin: 0px 0px ;
            opacity: 1;
            display: none;
            font-size: 14px;
            padding-top: 8px;
            margin-bottom: 8px;
            line-height: 20px;
            span{
                margin-right: 2px;
                height: 16px;
                background-size: 16px auto;
                display: inline-block;
                width: 1rem;
                vertical-align: middle;
                background-image: url(../../assets/images/loading.png);
            }
        }
    }
</style>