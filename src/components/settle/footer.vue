<template>
    <div>
        <div class="footer">
            <div class="submit-box">
                <div class="order-stat">
                    <div class="stat-sum">合计
                        <span v-show="isCart">￥{{this.$store.state.Cart.formPrice}}</span>
                        <span v-show="!isCart">￥{{this.$store.state.Cart.getFormPrice}}</span>
                    </div>
                    <div class="stat-count">共{{this.$store.state.Cart.num}}件商品</div>
                </div>
                <button class="settle-button" @click="goMoney">提交订单</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                goods:{},
                isCart:true
            }
        },
        created() {
            if(this.$route.query.name == "detail"){
                this.isCart = false;
                this.$store.state.Cart.isCart = false;
            }
            if(this.$route.query.name == "cart"){
                this.isCart = true;
                this.$store.state.Cart.isCart = true;
            }
        },
        methods: {
            goMoney(){
                this.$router.push({
                    path:"/money"
                })
            }
        },
    }
</script>

<style lang="less" scoped>
.footer{
    display: flex;
    left: 0;
    right: 0;
    bottom: 0px;
    background-color: #fff;
    .submit-box{
        height:50px;
        display: flex;
        padding: 0 12px;
        justify-content: space-between;
        align-items: center;
        border-top: 1px solid #eee;
        width: 100%;
        .order-stat{
            font-size: 12px;
            // flex: 1;
            .stat-sum{
                line-height: 16px;
                span{
                    font-size: 16px;
                    color: #fe4070;
                }
            }
            .stat-count{
                margin-top: 5px;
                color: #999;
            }
        }
        .settle-button{
            // flex: 1;
            width: 125px;
            height: 36px;
            color: #fff;
            font-size: 15px;
            background: #fe4070;
            border: 0;
            border-radius: 18px;
        }
    }
}
</style>