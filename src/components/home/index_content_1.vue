<template>
    <div>
        <main class="main">
            <!-- 商品栏 start-->
            <div class="online-wrap">
                <!-- 图片 -->
                <!-- 商品 -->
                <lazy-component>
                    <a href="javascript:;" class="product-item" v-for="items in lists" :key="items.lists">
                        <div class="my-item item-each" @click="detail(items.id)">
                            <img v-lazy="items.url"  alt="">
                        </div>
                    </a>
                    <a href="javascript:;" class="product-item" v-for="item in goods" :key="item.goods">
                        <div class="deal-item">
                            <div class="product-img">
                                <img v-lazy="item.img" alt="">
                            </div>
                            <div class="product-detail">
                                <div class="product-title">{{item.context}} </div>
                                <div class="promotion-wrap"></div>
                                <div class="price-wrap">
                                    <div class="price-list">
                                            <span class="product-price">￥<span>{{item.price}}</span></span>
                                            <span class="del-price">￥{{item.delPrice}}</span>
                                    </div>
                                    <div class="buy-num">{{item.discuss}}</div>
                                </div>
                            </div>
                        </div>   
                    </a>
                </lazy-component>
            </div>
            <!-- 商品栏 end-->
        </main>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                lists:[
                    {
                        id:1,
                        url:"http://mp6.jmstatic.com//jmstore/image/000/008/8807_std/5ddb306325412_2048_710.jpg?1574649513&imageView2/2/w/800/q/90"
                    },{
                        id:2,
                        url:"http://mp5.jmstatic.com//jmstore/image/000/009/9147_std/5ddb338fb3e54_2048_710.jpg?1574675639&imageView2/2/w/800/q/90"
                    },{
                        id:3,
                        url:"http://mp6.jmstatic.com//jmstore/image/000/008/8331_std/5dcca1af6824d_2048_710.jpg?1573721083&imageView2/2/w/800/q/90"
                    },{
                        id:4,
                        url:"http://mp6.jmstatic.com//jmstore/image/000/008/8331_std/5dcca1af6824d_2048_710.jpg?1573721083&imageView2/2/w/800/q/90"
                    },{
                        id:5,
                        url:"http://mp5.jmstatic.com//jmstore/image/000/008/8983_std/5dba752a653b4_2048_710.jpg?1574152249&imageView2/2/w/800/q/90"
                    },{
                        id:1,
                        url:"http://mp6.jmstatic.com//jmstore/image/000/008/8331_std/5dcca1af6824d_2048_710.jpg?1573721083&imageView2/2/w/800/q/90"
                    },{
                        id:2,
                        url:"http://mp6.jmstatic.com//jmstore/image/000/008/8331_std/5dcca1af6824d_2048_710.jpg?1573721083&imageView2/2/w/800/q/90"
                    },{
                        id:3,
                        url:"http://mp6.jmstatic.com//jmstore/image/000/008/8578_std/5dc7aa61acae4_2048_710.jpg?1574673039&imageView2/2/w/800/q/90"
                    },{
                        id:4,
                        url:"http://mp6.jmstatic.com//jmstore/image/000/008/8711_std/5dce5a7ac888f_2048_710.jpg?1574407308&imageView2/2/w/800/q/90"
                    },{
                        id:5,
                        url:"http://mp5.jmstatic.com//jmstore/image/000/007/7988_std/5dd50bee05aa1_2048_710.jpg?1574764793&imageView2/2/w/800/q/90"
                    }
                ],
                goods:[
                    {
                        img:"http://mp6.jmstatic.com/product/004/901/4901494_std/4901494_dx_1154_400.jpg?_t=1573366642&imageView2/2/w/800/q/90",
                        context:"玉兰油美白润肤霜50g",
                        price:52,
                        delPrice:165,
                        discuss:'暂无评论'
                    },
                    {
                        img:"http://mp5.jmstatic.com/product/004/985/4985438_std/4985438_dx_1154_400.jpg?_t=1568626824&imageView2/2/w/800/q/90",
                        context:"【李佳琦力荐】澳洲CEMOY 21天极光晚安精华原液 2ml*21包",
                        price:52,
                        delPrice:165,
                        discuss:'25条评论'
                    },
                    {
                        img:"http://mp6.jmstatic.com/product/005/017/5017840_std/5017840_dx_1154_400.jpg?_t=1572933683&imageView2/2/w/800/q/90",
                        context:"AHC 韩国 高玻尿酸B5洗面奶180ml",
                        price:52,
                        delPrice:165,
                        discuss:'100条评论'
                    },
                    {
                        img:"http://mp6.jmstatic.com/product/005/017/5017840_std/5017840_dx_1154_400.jpg?_t=1572933683&imageView2/2/w/800/q/90",
                        context:"AHC 韩国 高玻尿酸B5洗面奶180ml",
                        price:52,
                        delPrice:165,
                        discuss:'100条评论'
                    },
                    {
                        img:"http://mp6.jmstatic.com/product/005/017/5017840_std/5017840_dx_1154_400.jpg?_t=1572933683&imageView2/2/w/800/q/90",
                        context:"AHC 韩国 高玻尿酸B5洗面奶180ml",
                        price:52,
                        delPrice:165,
                        discuss:'100条评论'
                    },
                    {
                        img:"http://mp6.jmstatic.com/product/005/017/5017840_std/5017840_dx_1154_400.jpg?_t=1572933683&imageView2/2/w/800/q/90",
                        context:"AHC 韩国 高玻尿酸B5洗面奶180ml",
                        price:52,
                        delPrice:165,
                        discuss:'100条评论'
                    },
                    {
                        img:"http://mp6.jmstatic.com/product/005/017/5017840_std/5017840_dx_1154_400.jpg?_t=1572933683&imageView2/2/w/800/q/90",
                        context:"AHC 韩国 高玻尿酸B5洗面奶180ml",
                        price:52,
                        delPrice:165,
                        discuss:'100条评论'
                    },
                    {
                        img:"http://mp6.jmstatic.com/product/005/017/5017840_std/5017840_dx_1154_400.jpg?_t=1572933683&imageView2/2/w/800/q/90",
                        context:"AHC 韩国 高玻尿酸B5洗面奶180ml",
                        price:52,
                        delPrice:165,
                        discuss:'100条评论'
                    },
                    {
                        img:"http://mp6.jmstatic.com/product/005/017/5017840_std/5017840_dx_1154_400.jpg?_t=1572933683&imageView2/2/w/800/q/90",
                        context:"AHC 韩国 高玻尿酸B5洗面奶180ml",
                        price:52,
                        delPrice:165,
                        discuss:'100条评论'
                    },
                    {
                        img:"http://mp6.jmstatic.com/product/005/017/5017840_std/5017840_dx_1154_400.jpg?_t=1572933683&imageView2/2/w/800/q/90",
                        context:"AHC 韩国 高玻尿酸B5洗面奶180ml",
                        price:52,
                        delPrice:165,
                        discuss:'100条评论'
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
    .main{
        width: 100%;
        display: block;
        // tab切换栏 start
        .tab-title{
            height: 2.34667rem;
            line-height: 2.34667rem;
            font-size: 14px;
            color: #666;
            background-color: @mainColor;
            .title_item{
                display: inline-block;
                width: 9.86667rem;
                font-size: 14px;
                text-align: center;
            }
            span.tab_click{
                color: @navColor;
            }
        }
        // tab切换栏 end

        // 商品栏 start
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
    }
    // 商品的主体内容 end
</style>