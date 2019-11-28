<template>
    <div style="background-color:#fff">
        <div class="prod_detail bgc-f">
            <div class="normalShow">
                <div class="price_info">
                    <div class="cur_price">￥{{goods.price}}</div>
                    <del class="cost_price">￥{{goods.delPrice}}</del>
                    <strong>今日上新</strong>
                </div>
                <div class="downWrap">
                    <div class="count_down">
                        <span>还剩{{goods.time}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="desc_wrap desc_wrap bgc-f fs14 color3">
            <div class="normal_desc">
                {{goods.title}}
            </div>
        </div>
        <div class="additional-info bgc-f">
            <a href="javascript:;" class="postage-link additional-list">
                <div class="postage-wrap">
                    <div class="postage-type">运费:</div>
                    <div class="postage-content">
                        <span class="tip-word">{{goods.express}}</span>
                        <span class="arrow-icon-right"></span>
                    </div>
                </div>
            </a>
            <div class="introduction-wrap additional-list">
                <div class="introductions-content introduction-fold">
                    <div class="introduction-type">说明</div>
                    <div class="introduction-item">
                        <p class="introduction-list-title">
                            <span class="instruction-title-icon"></span>
                            <span class="instruction-title-text">7天无条件退货（拆封后不支持）</span>
                        </p>
                        <p class="introduction-list-title">
                            <span class="instruction-title-icon"></span>
                            <span class="instruction-title-text">非自营(营业执照)</span>
                        </p>
                        <p class="introduction-list-title">
                            <span class="instruction-title-icon"></span>
                            <span class="instruction-title-text">不支持换货</span>
                        </p>
                        <p class="introduction-list-title">
                            <span class="instruction-title-icon"></span>
                            <span class="instruction-title-text">支持分期</span>
                        </p>
                    </div>
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
                ]
            }
        },
        created() {
            this.goods = this.ajaxgoodslists[this.$route.query.id-1];
        },
        methods: {
            onClickCart(){
                this.$router.push({path:"/car"});
            },
            formatPrice() {
                return '¥' + (this.goods.price / 100).toFixed(2);
            },
            onClickRight(){
                this.$router.push({path:"/home/index"});
            },
            onClickLeft(){
                this.$router.go(-1);
            },
            addCar(){
                this.$store.commit("addCarFunc",{
                    id:this.$route.query.id,
                    title:this.goods.title,
                    desc:this.goods.desc,
                    price:this.goods.price,
                    num:1,
                    thumb:this.goods.thumb[0],
                    product:this.product,
                    isCheck:true
                })
            },
            addShop(){
                if(localStorage.login == void 0){
                    this.$router.push({path:"/login"});
                }else{
                    alert("结算页面");
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .prod_detail{
        width: 351px;
        box-sizing: border-box;
        padding-left: 12px;
        padding-right: 12px;
        padding-top: 15px;
        position: relative;
        .normalShow{
            .price_info{
                overflow: hidden;
                width: 100%;
                color:#F33873;
                height: 27.984px;
                .cur_price{
                    float: left;
                    font-size: 28px;
                    line-height: 27px;
                }
                .cost_price{
                    float: left;
                    margin-left: 4px;
                    color: #666;
                    font-size: 13px;
                    line-height: 14px;
                    margin-top: 10px;
                    text-decoration: line-through;
                }
                strong{
                    float: right;
                    text-align: right;
                    font-weight: 400;
                    color: #666;
                    font-size: 13px;
                    margin-top: 7.031px;
                }
            }
            .downWrap{
                overflow: hidden;
                .count_down{
                    margin-top: 12.5px;
                    overflow: hidden;
                    color: #666;
                    font-size: 13px;
                    span{
                        float: left;
                        width: 50%;
                        text-align: left;
                    }
                }
            }
        }
    }
    .bgc-f{
        background-color: #fff;
    }
    .desc_wrap{
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 12px;
        padding-right: 12px;
        line-height: 22.969px;
        width: 351px;
        box-sizing: border-box;
        .normal_desc{
            line-height: 23px;
        }
    }
    .color3{
        color: #333;
    }
    .fs14{
        font-size: 14px;
    }
    .additional-info{
        margin-bottom: 8px;
        .additional-list{
            margin-left: 12px;
            margin-right: 12px;
            border-bottom: 1px solid #eee;
            .postage-wrap{
                overflow: hidden;
                line-height: 0;
                margin-left: 12px;
                .postage-type{
                    padding: 12px 0;
                    width: 77.219px;
                    color:#999;
                    display: inline-block;
                    font-size: 13px;
                    line-height: 13px;
                    vertical-align: top;
                    float: left;
                }
                .postage-content{
                    color: #333;
                    font-size: 13px;
                    line-height: 13px;
                    display: inline-block;
                    width: 273.766px;
                    overflow: hidden;
                    position: relative;
                    padding-top: 12px;
                    padding-bottom: 9.5px;
                    .tip-word{
                        overflow: hidden;
                        width: 262.813px;
                        display: inline-block;
                        color: #333;
                        font-size: 13px;
                        line-height: 13px;
                    }
                    .arrow-icon-right{
                        display: inline-block;
                        width: 6px;
                        height: 12px;
                        background:url("../../assets/images/shop-right.png") no-repeat;
                        background-size: contain;
                        position: absolute;
                        top: 13px;
                        right: 8px;
                        color:#333;
                        font-size: 13px;
                        line-height: 13px;
                    }
                }
            }
        }
        .additional-list{
            margin: 0 12px;
            .introductions-content{
                overflow: hidden;
                .introduction-type{
                    padding:12px 0;
                    width: 77.219px;
                    line-height: 13px;
                    color: #999;
                    display: inline-block;
                    font-size: 13px;
                    vertical-align: top;
                    float: left;
                }
                .introduction-item{
                    padding-top: 0;
                    padding-bottom: 15.5px;
                    padding-right: 12px;
                    background: url("../../assets/images/shop-down.png") no-repeat;
                    background-size: 12px 6px;
                    background-position: right 15px;
                    margin-right: 6px;
                    overflow: hidden;
                    line-height: 0;
                    .introduction-list-title{
                        padding-right: 10px;
                        padding-top: 12px;
                        display: inline-block;
                        color: #333;
                        font-size: 13px;
                        line-height: 13px;
                        .instruction-title-icon{
                            display: inline-block;
                            width: 12px;
                            height: 12px;
                            background: url("../../assets/images/shop-gouzi.png") no-repeat;
                            background-size: contain;
                            vertical-align: top;
                            position: relative;
                            top: 1px;
                            color: #333;
                            font-size: 13px;
                            line-height: 13px;
                        }
                        .instruction-title-text{
                            display: inline-block;
                            color: #333;
                            font-size: 13px;
                            line-height: 13px;
                        }
                    }
                }
            }
        }
    }
</style>