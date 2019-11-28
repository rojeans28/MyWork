<template>
    <div>
        <div class="order-groups">
            <div class="order-group">
                <div class="group-head">
                    <span class="warehouse-icon"></span>
                    <span class="store-info">国货彩妆发货</span>
                </div>
                <div class="product-items" v-for="settleGood in goods" :key="goods.z">
                    <div class="product-item">
                        <div class="item-img">
                            <img :src="settleGood.thumb" alt="">
                        </div>
                        <div class="item-info">
                            <div class="item-info-1">
                                <span class="item-title">{{settleGood.title}}</span>
                                <span class="item-price">{{settleGood.price}}</span>
                            </div>
                            <div class="item-info-2">
                                <span>{{settleGood.desc}}</span>
                            </div>
                            <div class="item-info-2">
                                <span></span>
                                <span class="num">x{{settleGood.num}}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <Bill></Bill>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex';
import Bill from './bill.vue'
    export default {
        data() {
            return {
                checkedGoods: this.$store.state.Cart.checkedGoods,
            }
        },
        components:{
            Bill
        },
        computed: {
            ...mapState({
                goods:state => state.Cart.goodslists,
            }),   
        },
        created() {
            console.log(this.settleGoods);
        },
    }
</script>

<style lang="less" scoped>
.order-groups{
    .order-group{
        background-color: #fff;
        margin-top: 8px;
        font-family: sans-serif;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        .group-head{
            position: relative;
            padding: 10.5px 12px;
            border-bottom: 1px solid #eee;
            display: flex;
            align-items: center;
            line-height: 16px;
            font-size: 12px;
            .warehouse-icon{
                width: 16px;
                height: 16px;
                background:url("../../assets/images/settle-hoem.png") no-repeat;
                background-size: 100% 100%;
                display: block;
            }
            .store-info{
                margin-left: 14px;
                color: #999;
                max-width: 47%;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
        .product-items{
            .product-item{
                border-bottom: none;
                margin: 0 12px;
                padding: 12px 0;
                display: flex;
                align-items: center;
                justify-content: space-between;
                .item-img{
                    position: relative;
                    left: 0;
                    top: 0;
                    width: 60px;
                    height: 60px;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .item-info{
                    flex: 1;
                    height: 60px;
                    font-size: 12px;                    
                    .item-info-1{
                        line-height: 14px;
                        display: flex;
                        justify-content: space-between;
                        .item-title{
                            flex: 1;
                        }
                    }
                    .item-info-2{
                        margin-top: 8px;
                        display: flex;
                        justify-content: space-between;
                        font-size: 12px;
                        color: #999;
                        line-height: 12px;
                        span{
                            max-width: 100px;
                            flex: 1;
                        }
                        span.num{
                            text-align: right;
                        }
                    }
                }
            }
        }
    }
}
</style>