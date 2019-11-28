<template>
    <div>
        <div class="bottom-button-wrap">
            <div class="buy-box">
                <div class="icon-block block-style">
                    <div class="store-link fs10">店铺</div>
                    <div class="shopping-cart fs10" @click="onClickCart">购物车
                        <span class="cart-num" v-show="isNum">{{num}}</span>
                    </div>
                </div>
                <div class="button-block block-style">
                    <div class="add-shopping-cart add-shopping-cart-direct add-shopping-cart-new" @click="addCar">加入购物车</div>
                    <div class="add-shopping-cart add-shopping-cart-direct" @click="addShop">立即购买</div>
                </div>
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
                ],
                num:0
            }
        },
        created() {
            this.goods = this.ajaxgoodslists[this.$route.query.id-1];
        },
        computed: {
            isNum(){
                if(this.num > 0){
                    return true;
                }else{
                    return false;
                }
            }
        },
        methods: {
            onClickCart(){
                this.$router.push({path:"/car"});
            },
            addCar(){
                this.num +=1;
                this.$store.commit("addCarFunc",{
                    id:this.$route.query.id,
                    title:this.goods.title,
                    desc:this.goods.title,
                    price:this.goods.price,
                    num:1,
                    thumb:this.goods.thumb[0],
                    product:this.product,
                    isCheck:true
                })
            },
            addShop(){
                if(localStorage.login == void 0 || localStorage.login == "edit"){
                    this.$router.push({
                        path:"/login",
                        
                    });
                }else if(this.$store.state.Cart.goodslists == void 0 && localStorage.login != "edit"){
                    this.$store.commit("addCarFunc",{
                        id:this.$route.query.id,
                        title:this.goods.title,
                        desc:this.goods.title,
                        price:this.goods.price,
                        num:1,
                        thumb:this.goods.thumb[0],
                        product:this.product,
                        isCheck:true
                    })
                    this.$router.push({
                        path:"/settle",
                        query:{
                            name:"detail"
                        }
                    });
                }else{
                    this.addCar();
                    this.$router.push({
                        path:"/car"
                    })
                }
            }
        },
    }
</script>

<style lang="less" scoped>
.bottom-button-wrap{
    .buy-box{
        position: fixed;
        bottom: -1px;
        width: 100%;
        height: 49px;
        border-top: 1px solid #eee;
        overflow: hidden;
        background-color: #fff;
        text-align: center;
        .icon-block{
            width: 119px;
            height: 100%;
            text-align: center;
            float: left;
            .store-link{
                display: inline-block;
                background: url("../../assets/images/shop-shop.png") no-repeat center 8px;
                background-size: 19.5px 18px;
                border-right: 1px solid #eee;
                width: 47px;
                color:#979797;
                height: 35px;
                padding:32px 4.5px 0 4.5px;
                line-height: 10px;
                font-size: 10px;
            }
            .shopping-cart{
                display: inline-block;
                background: url("../../assets/images/shop-cart.png") no-repeat center 8px;
                background-size: 19.5px 18px;
                width: 47px;
                color:#979797;
                height: 35px;
                padding:32px 4.5px 0 4.5px;
                line-height: 10px;
                font-size: 10px;
                position: relative;
                .cart-num{
                    background-color: #fe4070;
                    display: block;
                    position: absolute;
                    font-size: 12px;
                    line-height: 12px;
                    padding: 2px 4px;
                    left: 28px;
                    top: 4px;
                    border-radius: 20px;
                    color: #fff;
                }
            }
        }
        .button-block{
            width: 256px;
            height: 100%;
            text-align: center;
            float: left;
            .add-shopping-cart{
                background: linear-gradient(142deg,#ff5593 0%,#fe4070 100%);
                color: #fff;
                line-height: 48px;
                font-size: 14px;
            }
            .add-shopping-cart-new{
                display: inline-block;
                width: 50%;
                background: linear-gradient(210deg,#ffcfdf 0% , #fff1f6 98%);
                color: #fe4070;
                line-height: 48px;
                float: left;
                font-size: 14px;
            }
        }
    }
}
</style>