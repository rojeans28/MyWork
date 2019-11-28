<template>
    <div>
        <div class="invoice-box">
            <div class="invo-head">发票</div>
            <div class="invo-nav">
                <div class="nav-center">
                    索要发票 
                    <span class="detail-text"></span>
                    <span class="ques-icon"></span>
                </div>
                <div class="select-icon"  @click="change">
                    <div :class="[flag?'checked':'unchecked']"></div>
                </div>
            </div>
            <div v-show="flag">
                <div class="invo-nav">
                <div>发票类型</div>
                <div class="nav-center">
                    <span>纸质发票</span>
                    <span class="right-arrow-icon"></span>
                </div>
                </div>
                <div class="invo-nav">
                    <div>发票抬头</div>
                    <div class="nav-center">
                        <span>个人</span>
                        <span class="right-arrow-icon"></span>
                    </div>
                </div>
                <div class="invo-remark">
                    <p>备注：第三方商家将由商家开具发票并寄出，发票内容由商家决定。</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                flag:false
            }
        },
        methods: {
            change(){
                this.flag = !this.flag;
            }
        },
    }
</script>

<style lang="less" scoped>
.invoice-box{
    font-size: 12px;
    margin-top: 8px;
    background-color: #fff;
    padding-bottom: 50px;
    .invo-head{
        padding: 10.5px 12px;
        line-height: 15px;
        display: flex;
        align-items: center;
        color: #999;
    }
    .invo-nav{
        height: 44px;
        border-top:1px solid #eee;
        display: flex;
        padding: 0 12px ;
        justify-content: space-between;
        align-items: center;
        .nav-center{
            display: flex;
            align-items: center;
            .detail-text{
                margin-left: 8px;
                color:#999;
                font-size: 12px;
            }
            .ques-icon{
                width: 12px;
                height: 12px;
                margin-left: 5px;
                background: url("../../assets/images/lanfaxiaonvhai.png") no-repeat;
                background-size: 100% 100%;
                display: inline-block;
            }
            .right-arrow-icon{
                width: 5.5px;
                height: 9px;
                margin-left: 17px;
                background-image: url("../../assets/images/shop-right.png");
                background-size: 100% 100%;
                display: inline-block;
            }
        }
        .select-icon{
            .unchecked{
                width: 20px;
                height: 20px;
                background-image: url("../../assets/images/no-check.png");
                background-repeat: no-repeat;
                background-size: 100% 100%;
            }
            .checked{
                width: 20px;
                height: 20px;
                background-image: url("../../assets/images/quanxuan.png");
                background-size: 100% 100%;
            }

        }
    }
    .invo-remark{
        min-height: 44px;
        padding:0 12px;
        display: flex;
        align-items: center;
        color: #999;
        font-size: 12px;
        line-height: 12px;
        border-top: 1px solid #eee;
    }
}
</style>