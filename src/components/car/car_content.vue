<template>
    <div>
        <div class="bg-empty">
            <div class="cart-no-goods" v-show="!this.isGoods">
                <div class="oops"></div>
                <div class="empty-cart">您的购物车中没有商品，请先去挑选心爱的商品吧！</div>
                <router-link class="go-stroll" to="/home/index" tag="div">去逛逛</router-link>
            </div>
            <div class="cart-has-goods" v-show="this.isGoods">
                <div class="count-down">
                    <div class="clock-icon"></div>
                    <div class="timer-text">00:00.0</div>
                    <div class="clock-msg">结算时间结束后，商品可能被抢空，请尽快结算</div>
                </div>
                <div class="groups" v-for="(goods , i) in goods" :key="goods.a">
                    <div>
                        <div class="group">
                            <div class="group-header">
                                <span :class="[goods.isCheck?'check-box-checked':'check-box-unchecked']" @click="select(i)"></span>
                                <div class="group-title">{{goods.title}}</div>
                                <span class="arrow-wrapper">
                                    <span></span>
                                </span>
                            </div>
                            <div class="group-content">
                                <div>
                                    <div class="item">
                                        <span :class="[goods.isCheck?'check-box-checked':'check-box-unchecked']" @click="select(i)"></span>
                                        <div class="item-content">
                                            <div class="img-title">
                                                <div class="img-wrap">
                                                    <img :src="goods.thumb" :alt="goods.title">
                                                </div>
                                                <div class="text-wrap" v-show="isHidden"> <!-- 消失隐藏-->
                                                    <span class="title">{{goods.title}}</span>
                                                    <div class="sub-title-1">
                                                        <span>{{goods.product}}</span>
                                                        <span>x{{goods.num}}</span>
                                                    </div>
                                                    <div class="price-edit">
                                                        <div class="price">¥{{goods.price}}</div>
                                                        <span class="edit" @click="show">编辑</span>
                                                    </div>
                                                </div>
                                                <div class="text-wrap" v-show="!isHidden"> <!-- 消失隐藏-->
                                                    <span class="title">{{goods.title}}</span>
                                                    <div class="number-editor">
                                                        <span class="decrease" @click="goods.num <=1?1:goods.num--"></span>
                                                        <span class="number">{{goods.num}}</span>
                                                        <span class="increase" @click="goods.num++"></span>
                                                    </div>
                                                    <div class="price-edit">
                                                        <span class="price editing">¥{{goods.price}}</span>
                                                        <div class="actions">
                                                            <span class="delete" @click="del(i)">删除</span>
                                                            <span class="gap-line">|</span>
                                                            <span class="action-finish" @click="show">完成</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="group-tail red">
                                <div class="icon">免</div>
                                <span>新用户满39元包邮（新疆部分地区除外)</span>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <van-checkbox-group class="card-goods" v-model="checkedGoods">
                    <van-checkbox
                        class="card-goods__item"
                        v-for="item in goods"
                        :key="item.id"
                        :name="item.id"
                    >
                        <van-card
                            :title="item.title"
                            :desc="item.desc"
                            :num="item.num"
                            :price="formatPrice(item.price)"
                            :thumb="item.thumb"
                        />
                    </van-checkbox>
                </van-checkbox-group> -->
                <!-- <div class="price">
                    <van-submit-bar
                        :price="totalPrice"
                        :disabled="!checkedGoods.length"
                        :button-text="submitBarText"
                        @submit="onSubmit"
                    />
                </div> -->
            </div>
            <div class="submit-bottom submit-bottom-padding" v-show="isGoods">
                <div class="sub-info">
                    <span :class="[isSelector?'check-box-checked':'check-box-unchecked']" @click="selectorAll(isSelector)"></span>
                    <span class="all-check-text">全选</span>
                    <div class="summary">
                        <div>
                            <span>合计</span>
                            <span class="red">¥{{totalPrice}}</span>
                        </div>
                    </div>
                </div>
                <div class="submit-btn go-to-submit" @click="onSubmit">
                    <span>{{submitBarText}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import {mapState} from 'vuex';
import { Dialog } from 'vant';
    export default {
        data() {
            return {
                isHidden:true,
                checkedGoods: this.$store.state.Cart.checkedGoods,
                isCheckAll:true,
            }
        },
        computed: {
            submitBarText(){
                let num = 0;
                this.goods.forEach(items=>{
                    if(items.isCheck){
                        num +=1;
                    }
                })
                let count = num;
                this.$store.commit("getNum",num);
                return "结算" + (count?`(${count})`: " " );
            },
            totalPrice() {
                let price = 0;
                this.goods.forEach(items=>{
                    if(items.isCheck){
                        if(this.checkedGoods.indexOf(items.id) !== -1){
                            price += items.price * items.num;
                        }
                    }
                })
                this.$store.commit("getFormPrice",price);
                return price;
            },
            ...mapState({
                goods:state => state.Cart.goodslists,
            }),
            isGoods(){
                if(this.goods == 0){
                    return false;
                }else{
                    return true;
                }
            },
            isSelector(){
                return this.goods.every(items=>items.isCheck);
            }
        },
        methods: {
            formatPrice(price) {
                return price.toFixed(2);
            },
            onSubmit() {
                if(localStorage.login == void 0){
                    this.$router.push({path:"/login"});
                }else{
                    this.$router.push({
                        path:"/settle",
                        query:{
                            name:"cart"
                        }
                    })
                }
            },
            show(){
                this.isHidden = !this.isHidden;
            },
            selectorAll(data){
                this.goods.forEach(items=>{
                    items.isCheck = !data;
                })
            },
            select(i){
                this.$store.commit("selectCarFunc",i);
            },
            del(i){
                this.$store.commit("delCarFunc",i);
                this.goods.splice(i,1);
            }
        },
    }
</script>

<style lang="less">
    
    .bg-empty{
        font-size: 16px;
        display: flex;
        flex-direction: column;
        height: 100%;
        background-color: #fff;
        .cart-no-goods{
            padding-top: 50%;
            flex: 1;
            background-color: #fff;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .oops{
                width: 86px;
                height: 82px;
                background-image: url(../../assets/images/no-card-oops.png);
                background-size: 100% 100%;
            }
            .empty-cart{
                font-size: 14px;
                line-height: 0.9375rem;
                color: #333;
                margin-top: 1rem;
                padding: 0 0.75rem;
                text-align: center;
            }
            .go-stroll{
                width: 125px;
                height: 36px;
                border-radius: 1.25rem;
                color: #fff;
                background-color: #fe4070;
                line-height: 2.25rem;
                text-align: center;
                margin-top: 24px;
                font-size: 13px;
            }
        }
        .cart-has-goods{
            .count-down{
                padding: 0.5rem;
                height: 1.875rem;
                color:#999;
                background-color: #fff;
                display: flex;
                align-items: center;
                font-size: 12px;
                .clock-msg{
                    flex: 1;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
            }
            .groups{
                margin-top: 0.5rem;
                .group{
                    margin-bottom: 0.5rem;
                    background: #fff;
                    .group-header{
                        position: relative;
                        background: #fff;
                        height: 40px;
                        display: flex;
                        align-items: center;
                        padding-left: 8px;
                        border-bottom: 1px solid #eee;
                        .check-box-checked{
                            display: block;
                            background: url("../../assets/images/quanxuan.png") no-repeat;
                            background-size: 100% 100%;
                            width: 20px;
                            height: 20px;
                        }
                        .check-box-unchecked{
                            display: block;
                            background: url("../../assets/images/no-check.png") no-repeat;
                            background-size: 100% 100%;
                            width: 20px;
                            height: 20px;
                        }
                        .group-title{
                            margin-left: 8px;
                            max-width: 47%;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            font-size: 12px;
                        }
                        .arrow-wrapper{
                            padding:20px;
                            position: absolute;
                            right: 0;
                            top: 0;
                        }
                    }
                    .group-content{
                        padding-bottom: 100px;
                        .item{
                            overflow: hidden;
                            font-size: 12px;
                            padding: 0 12px 0 8px;
                            display: flex;
                            min-height: 5.25rem;
                            .check-box-checked{
                                margin-top: 45px;
                                display: block;
                                background: url(../../assets/images/quanxuan.png) no-repeat;
                                background-size: 100% 100%;
                                width: 20px;
                                height: 20px;
                            }
                            .check-box-unchecked{
                                margin-top: 45px;
                                display: block;
                                background: url("../../assets/images/no-check.png") no-repeat;
                                background-size: 100% 100%;
                                width: 20px;
                                height: 20px;
                            }
                            .item-content{
                                flex: 1;
                                .img-title{
                                    display: flex;
                                    margin-left: 8px;
                                    padding-bottom: 10px;
                                    .img-wrap{
                                        width: 84px;
                                        height: 84px;
                                        position: relative;
                                        margin-top: 10px;
                                        img{
                                            width: 100%;
                                            height: 100%;
                                        }
                                    }
                                    .text-wrap{
                                        flex-direction: column;
                                        margin-left: 10px;
                                        margin-top: 8px;
                                        flex: 1;
                                        .title{
                                            display: -webkit-box;
                                            width: 233px;
                                            max-height: 2.5rem;
                                            text-overflow: ellipsis;
                                            overflow: hidden;
                                            color:#333;
                                            line-height: 1.25rem;
                                            text-align: left;
                                            -webkit-line-clamp:2;
                                            word-break:break-all;
                                        }
                                        .sub-title-1{
                                            margin-top: 3px;
                                            line-height: 12px;
                                            height: 12px;
                                            color: #999;
                                            display: flex;
                                            justify-content: space-between;
                                            span:first-child{
                                                display: block;
                                                max-width: 12.1875rem;
                                                overflow: hidden;
                                                text-overflow: ellipsis;
                                                white-space: nowrap;
                                            }
                                        }
                                        .price-edit{
                                            margin-top: 5px;
                                            display: flex;
                                            justify-content: space-between;
                                            align-items: center;
                                            height: 22px;
                                            .price{
                                                width: 201px;
                                                display: block;
                                                font-size: 15px;
                                                color: #fe4070;
                                                overflow: hidden;
                                                text-overflow: ellipsis;
                                                white-space: nowrap;
                                            }
                                            .actions{
                                                display: flex;
                                                align-items: center;
                                            }
                                        }
                                        .number-editor{
                                            margin-top: 8px;
                                            height: 23px;
                                            display: flex;
                                            align-items: center;
                                            .decrease{
                                                display: block;
                                                width: 22px;
                                                height: 22.5px;
                                                background-image: url("../../assets/images/jian.png");
                                                background-size: 100% 100%;    
                                            }
                                            .number{
                                                display: flex;
                                                justify-content: center;
                                                align-items: center;
                                                width: 40px;
                                                height: 22px;
                                                color: #333;
                                            }
                                            .increase{
                                                display: block;
                                                width: 22px;
                                                height: 22.5px;
                                                background-image: url("../../assets/images/jia.png");
                                                background-size: 100% 100%;
                                            }
                                        }
                                        .price-edit{
                                            margin-top: 5px;
                                            display: flex;
                                            justify-content: space-between;
                                            align-items: center;
                                            height: 22px;
                                            .price{
                                                width: 163.5px;
                                                display: block;
                                                font-size: 15px;
                                                color:#fe4070;
                                                overflow: hidden;
                                                text-overflow: ellipsis;
                                                white-space: nowrap;
                                            }
                                            .actions{
                                                display: flex;
                                                align-items: center;
                                                .gap-line{
                                                    display: inline-block;
                                                    width: 1px;
                                                    height: 12.5px;
                                                    margin: 0 6px; 
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    .group-tail{
                        height: 36px;
                        display: flex;
                        padding-left: 8px;
                        background-color: #fff;
                        align-items: center;
                        border-top: 1px solid #eee;
                        color: #fe4070;
                        .icon{
                            width: 16px;
                            height: 16px;
                            display: flex;
                            border-radius: 50%;
                            align-items: center;
                            font-size: 12px;
                            border: 1px solid #fe4070;
                        }
                        span{
                            margin-left: 8px;
                            text-align: center;
                            font-size: 12px;
                        }
                    }
                }
            }
        }
        .submit-bottom{
            position: fixed;
            left: 0;
            right: 0;
            box-shadow:0 0 0.15625rem #eee;
            height:49px;
            display: flex;
            background-color: #fff;
            align-items: center;
            justify-content: space-between;
            padding: 0 8px 0 12px;
            z-index: 1;
            bottom: 50px;
            .sub-info{
                display: flex;
                align-items: center;
                .check-box-checked{
                    display: block;
                    background: url(../../assets/images/quanxuan.png) no-repeat;
                    background-size: 100% 100%;
                    width: 20px;
                    height: 20px;
                }
                .check-box-unchecked{
                    display: block;
                    background: url("../../assets/images/no-check.png") no-repeat;
                    background-size: 100% 100%;
                    width: 20px;
                    height: 20px;
                }
                .all-check-text{
                    font-size: 14px;
                    color: #333;
                    margin-left: 12px;
                }
                .summary{
                    margin-left: 11px;
                    color: #999;
                    display: flex;
                    flex-direction: column;
                    >   div{
                        display: flex;
                        align-items: center;
                        .red{
                            font-size: 16px;
                            margin-left: 5px;
                        }
                    }
                }
            }
            .submit-btn{
                background-color: #fe4070;
                width: 125px;
                height: 36px;
                font-size: 14px;
                color: #fff;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 18px;
            }
        }
    }
</style>