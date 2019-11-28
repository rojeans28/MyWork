<template>
    <div :class='[isFlag?"main-wrap":"main-wrap2"]'>
        <div class="order-empty" v-show="!isShow">
            <img class="order-empty-img" src="../../assets/images/order-empty.2736d44.png" alt="">
        </div>
        <div class="order-list" v-show="isCart">
            <div v-for="WaitPay in $store.state.Cart.goodslists" :key="WaitPay.i">
                <div class="row">
                    <div class="col order-id ellipsis">
                        <div class="row row-align">
                            <div class="ellipsis">
                                <span>交易单号 c283948041118</span>
                            </div>
                        </div>
                    </div>
                    <div class="col col-180 order-txt">待付款</div>
                </div>
                <div class="product-wrap">
                    <div>
                        <div class="item">
                            <div class="item-row row">
                                <div class="col col-140">
                                    <img :src="WaitPay.thumb" alt="" class="item-img">
                                </div>
                                <div class="col col-458">
                                    <div class="item-text item-ellipsis">
                                        {{WaitPay.title}}
                                    </div>
                                    <div class="item-price item-ellipsis">型号{{WaitPay.desc}}</div>
                                </div>
                                <div class="col text-right price-box">
                                    <div class="item-text text-right">¥{{WaitPay.price}}</div>
                                    <div class="item-price text-right">x<span>{{WaitPay.num}}</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="status-wrap">
                <div class="row">
                    <div class="col text-right status-span">
                        <span class="status-span-child"></span>
                        <span class="status-span-child">合计{{this.$store.state.Cart.num}}件</span>
                        <span class="status-span-child last">¥{{this.$store.state.Cart.formPrice}}</span>
                    </div>
                </div>
                <div class="status-navigator">
                    <div>
                        <div class="box box-rl">
                            <div>
                                <div class="status-btn-red" @click="goMoney">立即支付</div>
                            </div>
                            <div>
                                <div class="status-btn-default" @click="del">取消订单</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="order-list" v-show="isWaitConfirm">
            <div v-for="(WaitConfirm,i) in $store.state.WaitConfirm.lists" :key="WaitConfirm.i">
                <div class="row">
                    <div class="col order-id ellipsis">
                        <div class="row row-align">
                            <div class="ellipsis">
                                <span>交易单号 c283948041118</span>
                            </div>
                        </div>
                    </div>
                    <div class="col col-180 order-txt">待收货</div>
                </div>
                <div class="product-wrap">
                    <div>
                        <div class="item">
                            <div class="item-row row">
                                <div class="col col-140">
                                    <img :src="WaitConfirm.thumb" alt="" class="item-img">
                                </div>
                                <div class="col col-458">
                                    <div class="item-text item-ellipsis">
                                        {{WaitConfirm.title}}
                                    </div>
                                    <div class="item-price item-ellipsis">型号{{WaitConfirm.desc}}</div>
                                </div>
                                <div class="col text-right price-box">
                                    <div class="item-text text-right">¥{{WaitConfirm.price}}</div>
                                    <div class="item-price text-right">x<span>{{WaitConfirm.num}}</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="status-wrap">
                    <div class="row">
                        <div class="col text-right status-span">
                            <span class="status-span-child"></span>
                            <span class="status-span-child">合计{{num}}件</span>
                            <span class="status-span-child last">¥{{formPrice}}</span>
                        </div>
                    </div>
                    <div class="status-navigator">
                        <div>
                            <div class="box box-rl">
                                <div>
                                    <div class="status-btn-red" @click="goConfrim(i)">确认收货</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex';
    export default {
        computed: {
            ...mapState({
                goods:state => state.Cart.goodslists,
            }),
            ...mapState({
                WaitConfirmGoods:state => state.WaitConfirm.lists,
            }),
            ...mapState({
                num :state => state.WaitConfirm.num
            }),
            ...mapState({
                formPrice:state =>state.WaitConfirm.formPrice
            }),
            isShow(){
                if(this.goods.length == 0 && this.WaitConfirmGoods.length == 0 ){
                    return false;
                }else{
                    return true;
                }
            },
            isCart(){
                if(this.goods.length == 0){
                    return false;
                }else{
                    return true;
                }
            },
            isWaitConfirm(){
                if(this.WaitConfirmGoods.length == void 0){
                    return false;
                }else{
                    return true;
                }
            },
            isFlag(){
                if(!this.isShow){
                    return true;
                }else{
                    return false;
                }
            }
        },
        methods: {
            goMoney(){
                this.$router.push({
                    path:"/money"
                })
            },
            del(){
                this.$store.commit("delOrderFunc");
            },
            goConfrim(i){
                this.$store.commit("goConfrimFunc",i);
            }
        },
    }
</script>

<style lang="less">
.main-wrap{
    overflow: hidden;
    background-color: #fff;
    .order-empty{
        .order-empty-img{
            display: block;
            // position: absolute;
            // top: 50%;
            margin: 88px auto;
            width: 134px;
            height: 126.5px;
        }
    }
}
.main-wrap2{
    background-color: #fff;
    .order-empty{
        .order-empty-img{
            display: block;
            // position: absolute;
            // top: 50%;
            margin: 88px auto;
            width: 134px;
            height: 126.5px;
        }
    }
}
.order-list{
    border-bottom: 1px solid #eee;
    color: #333;
    background-color: #fff;
    border-top: 0;
    .row{
        width: 100%;
        display: flex;
        white-space: nowrap;
        .order-id{
            font-size: 12px;
            line-height: 36px;
            height: 36px;
            color: #999;
            padding-left: 12px;
            flex: 1;
            display: block;
            width: 100%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            .row-align{
                align-items: center;
                width: 100%;
                display: flex;
                white-space: nowrap;
                .ellipsis{
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;

                }
            }
        }
        .order-txt{
            color: rgb(254,64,112);
            padding-right: 12px;
            text-align: right;
            font-size:12px;
            line-height: 36px;
            height: 36px;
            flex:0 0 90px;
            max-width: 90px;
            display: block;
            width: 100%;
        }
    }
    .product-wrap{
        border-top: 1px solid #eee;
        .item{
            background-color: #fff;
            padding:0 12px;
            display: block;
            .item-row{
                padding: 12px 0 11px 0;
                width: 100%;
                display: flex;
                white-space: nowrap;
                .col{
                    display: block;
                    width: 100%;
                    img{
                        width: 100%;
                        max-height: 70px;
                    }
                    .item-text{
                        font-size: 14px;
                        color: #333;
                        padding-top: 2px;
                        vertical-align: bottom;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        padding-left: 10px;
                    }
                    .item-price{
                        font-size: 12px;
                        color: #999;
                        margin-top: 1px;
                        vertical-align: bottom;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        padding-left: 10px;
                    }
                }
                .col-140{
                    flex:0 0 70px;
                    max-width: 70px;
                }
                .col-458{
                    flex: 0 0 229px;
                    max-width: 229px;
                }
                .price-box{
                    overflow: hidden;
                    text-align: right;
                    flex: 1;
                    display: block;
                    .item-text{
                        font-size: 14px;
                        color: #333;
                        padding-top: 2px;
                        vertical-align: bottom;
                        text-align: right;
                    }
                    .item-price{
                        font-size: 12px;
                        color: #999;
                        margin-top: 1px;
                        vertical-align: bottom;
                    }
                }
            }
        }
    }
    .status-wrap{
        border-top: 1px solid #eee;
        box-sizing: border-box;
        .row{
            width: 100%;
            display: flex;
            white-space: nowrap;
            .status-span{
                height: 37px;
                line-height: 37px;
                padding-right: 12px;
                text-align: right;
                flex: 1;
                display: block;
                width: 100%;
                .status-span-child{
                    color: rgb(153,153,153);
                    font-size: 12px;
                    margin-left: 8px;
                    vertical-align: middle;
                }
                .last{
                    color: rgb(51, 51, 51);
                }
            }
        }
        .status-navigator{
            padding:0 12px;
            height: 39px;
            .box{
                -webkit-box-direction: reverse;
                flex-direction: row-reverse;
                -webkit-box-orient: horizontal;
                display: flex;
                .status-btn-red{
                    border:1px solid #fe4070;
                    border-radius: 16px;
                    width: 72px;
                    height: 26px;
                    line-height: 26px;
                    font-size: 12px;
                    color: #fe4070;
                    text-align: center;
                    box-sizing: border-box;
                    margin-left: 12px;
                    display: block;
                }
                .status-btn-default{
                    text-align: center;
                    margin-left: 12px;
                    display: block;
                    box-sizing: border-box;
                    border:1px solid #e3e3e3;
                    width: 79px;
                    height: 26px;
                    line-height: 26px;
                    font-size: 13px;
                    border-radius: 16px;
                    color: #333;
                }
            }
        }
    }
}
</style>