<template>
    <div style="background-color:#fff">
        <van-nav-bar 
            :title=this.$route.name 
            @click-left="onClickLeft"
            @click-right="onClickRight"
        >
            <van-icon name="wap-home-o" slot="right" color="#ccc" size="24"></van-icon>
            <van-icon name="arrow-left" slot="left" color="#ccc" size="24"></van-icon> 
        </van-nav-bar>
        <div class="content">
            <div class="summary">
                <span>订单金额</span>
                <span v-show="this.$store.state.Cart.isCart">￥{{this.$store.state.Cart.formPrice}}</span>
                <span v-show="!this.$store.state.Cart.isCart">￥{{this.$store.state.Cart.goodslists[0].price}}</span>
            </div>
        </div>
        <div class="need-pay">
            <div>
                <span>选择支付方式</span>
            </div>
        </div>
        <div class="pay-list">
            <div class="pay-item-box">
                <div class="pay-item">
                    <div>
                        <img src="https://p2.jmstatic.com/static/static_cart_mobile/images/cashier/zhifubao.png" alt="支付宝">
                        <div>
                            <div>支付宝</div>
                            <div></div>
                        </div>
                    </div>
                    <div class="check-box-checked"></div>
                </div>
            </div>
            <div class="show-all">
                <span>更多支付方式</span>
            </div>
        </div>
        <div class="pay-btn go-to-pay" @click="gotoprice">去支付</div>
        <van-overlay :show="show" @click="delPrice">
        <div class="wrapper">
            <div class="block">
                <img src="../assets/images/shouqian2.png" alt="">
            </div>
            <button class="btn" @click="affirmPrice">确认支付</button>
        </div>
        </van-overlay>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show:false,
                isCart:true
            }
        },
        methods: {
            onClickLeft(){
                this.$router.go(-1);
            },
            onClickRight(){
                this.$router.push({
                    path:"/home/index"
                })
            },
            gotoprice(){
                this.show = true;
            },
            delPrice(){
                this.show = false;
                this.$router.push({
                    path:"/order/wait_pay"
                })
            },
            affirmPrice(){
                this.$store.commit("addComfirmLists",this.$store.state.Cart.goodslists);
                this.$store.commit("getNum",this.$store.state.Cart.num);
                this.$store.commit("getformPrice",this.$store.state.Cart.formPrice);
                this.$store.state.Cart.goodslists = [];
                this.$store.state.Cart.num = 0;
                this.$store.state.Cart.formPrice = 0;
                this.$router.push({
                    path:"/order/wait_confirm"
                })
            }
        },

    }
</script>

<style lang="less" scoped>
.content{
    .summary{
        background-color: #fff;
        height: 44px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 8px 0;
        span:first-child{
            font-size: 14px;
            color: #333;
            margin-left: 16px;

        }
        span:nth-child(2){
            font-size: 14px;
            color: #fe4070;
            margin-right: 16px;  
        }
        span:last-child{
            font-size: 14px;
            color: #fe4070;
            margin-right: 16px;  
        }
    }
}
.need-pay{
        height: 54px;
        border-bottom: 1px solid #eee;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        >:nth-child(1){
            font-size: 14px;
            color: #333;
            line-height: 20px;
        }
        >*{
            margin-left: 16px;
        }
    }
.pay-list{
    background-color: #fff;
    .pay-item-box:first-child{
        border:0;
        margin: 0 12px;
        .pay-item   {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 54px;
            div{
                display: flex;
                align-items: center;
                margin-left: 4px;
                img{
                    width: 36px;
                    height: 36px;
                }
                div{
                    margin-left: 9px;   
                    div:first-child{
                        font-size: 14px;
                        color: #333;
                    }
                    div:last-child{
                        font-size: 14px;
                        color: #999;
                        margin-top: 6px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                }
            }
            .check-box-checked{
                margin-right: 4px;
                background: url("../assets/images/quanxuan.png") no-repeat;
                background-size: 100% 100%;
                width: 20px;
                height: 20px;
            }
        }
    }
}
.show-all{
    line-height: 54px;
    border-top: 1px solid #eee;
    text-align: center;
    font-size: 14px;
    color: #333;
    span{
        display: inline-block;
        position: relative;
        &::after{
            position: absolute;
            top: 50%;
            right: -19px;
            margin-top: -6.5px;
            content: "";
            width: 13px;
            height: 13px;
            background: url("../assets/images/detail-left.png") center no-repeat;
            background-size: auto 100%;
            transform: rotate(-90deg);
        }
    }
}
.pay-btn{
    border-radius: 18px;
    width: 240px;
    height: 36px;
    color: #fff;
    font-size: 14px;
    line-height: 36px;
    text-align: center;
    margin: 24px auto;
    letter-spacing: 10px;
    background-color: #fe4070;
}
.wrapper{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}
.block{
    background-color: #fff;
}
.btn{
    position: absolute;
    left: 50%;
    margin-left: -50px;
    top: 68%;
    border: 0;
    color: #fff;
    background-color: #fe4070;
    border: 1px solid #eee;
    border-radius: 16px;
    font-size: 14px;
    height: 36px;
    line-height: 36px;
    width: 100px;
}
</style>