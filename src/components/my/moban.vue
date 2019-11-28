<template>
    <div class="moban">
        <div class="header">
            <div class="row header-title">
                <div class="col header-title0">
                    <span :class="[isChange?'header-current':'header-default']" @click="isChange=!isChange">现金券</span></div>
                <div class="col header-title1">
                    <span :class="[!isChange?'header-current':'header-default']" @click="isChange=!isChange">红包</span></div>
            </div>
        </div>
        <div class="card-list">
            <div class="redEnvelop-list clearfix">
                <div class="no-coupon"></div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                isChange:true      
            }
        },
        methods: {
            changeClass(){

            }  
        },   
    }
</script>

<style lang="less" scoped>
.moban{
    position: relative;
    width: 80%;
    margin: 0 auto;
    .header{
        position: absolute;
        width:100%;
        top:-90px;
        left: 0;
        z-index: 1000000;
        height: 46px;
        line-height: 46px;
        font-size: 14px;
        .header-title{
            margin: 0 auto;
            width: 127px;
            display: flex;
            .header-title0{
                flex:0 0 55px;
                max-width: 55px;
                .header-current{
                color: #fe4070;
                }
                .header-default {
                    color:#333;
                }
            }
            .header-title1{
                flex:0 0 55px;
                max-width: 55px;
                margin-left: 34px;
                .header-current{
                color: #fe4070;
                }
                .header-default {
                    color:#333;
                }
            }
        }
    }
}
.card-list{
    width: 100%;
    height: 100%;
    .redEnvelop-list{
        margin-top: 141px;
        position: absolute;
        bottom: 0;
        left: 5.5px;
        right: 5.5px;
        top: 47px;
        z-index: 98;
        .no-coupon{
            width: 84px;
            height: 128.5px;
            background-image: url("../../assets/images/no_coupon.262ce45.png");
            margin: 56px auto 0;
            background-repeat: no-repeat;
            background-position: 50% 50%;
            background-size: 100%;
        }
    }
}
</style>