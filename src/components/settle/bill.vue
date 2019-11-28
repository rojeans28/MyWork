<template>
    <div>
        <div class="group-stat">
            <div class="freight">
                <div class="freight-title">运费</div>
                <div class="freight-info">
                    <div class="freight-item">
                        <div>
                            <div class="freight-item-title">快递：￥0</div>
                            <div class="freight-item-desc">新用户满39元包邮（新疆部分地区除外）	，已减免¥10</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="stat-nav">
                <div class="nav-center">
                    <span>现金券</span>
                    <span class="no-select-tag">暂无可用</span>
                </div>
                <div>
                    <span>使用现金券</span>
                    <span class="right-arrow-icon"></span>
                </div>
            </div>
            <div class="stat-nav">
                <div class="nav-center">
                    <span>红包</span>
                    <span class="no-select-tag">暂无可用</span>
                </div>
                <div>
                    <span>使用红包</span>
                    <span class="right-arrow-icon"></span>
                </div>
            </div>
            <div class="stat-nav">
                <div class="nav-center">小计 </div>
                <div class="tr">
                    <div class="notice-num" v-show="isCart">
                        ￥{{this.$store.state.Cart.formPrice}}
                    </div>
                    <div class="notice-num" v-show="!isCart">
                        ￥{{this.$store.state.Cart.goodslists[0].price}}
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
                isCart:true
            }
        },
        created() {
            if(this.$route.query.name == "detail"){
                this.isCart = false;
            }
            if(this.$route.query.name == "cart"){
                this.isCart = true;
            }
        },
    }
</script>

<style lang="less" scoped>
.group-stat{
    background-color: #fff;
    overflow: hidden;
    border-top: 1px solid #eee;
    .freight{
        font-size: 12px;
        .freight-title{
            position: absolute;
            margin-left: 12px;
            // margin-top: 16px;
            line-height: 17px;
        }
        .freight-info{
            text-align: right;
            margin-right: 7px;
            .freight-item{
                display: flex;
                align-items: center;
                justify-content: flex-end;
                margin:16px 0;
                .freight-item-title{
                    line-height: 17px;
                }
                .freight-item-desc{
                    line-height: 15px;
                    margin-top: 4px;
                    color: #999;
                    font-size: 12px;
                }
            }
        }
    }
    .stat-nav{
        height: 44px;
        border-top: 1px solid #eee;
        display: flex;
        padding: 12px;
        justify-content: space-between;
        align-items: center;
        font-size: 12px;
        .nav-center{
            display: flex;
            align-items: center;
            .no-select-tag{
                padding: 3px 6px 2px 6px;
                background-color: #eee;
                font-size: 12px;
                color: #999;
                border-radius: 5px;
                display: inline-block;
                margin-left: 5px;
            }
        }
        div {
            .right-arrow-icon{
                display: inline-block;
                width: 5.5px;
                height: 9px;
                margin-left: 8px;
                background: url("../../assets/images/shop-right.png") no-repeat;
                background-size: 100% 100%;
            }
        }
        .tr{
            text-align: right;
            .notice-num{
                color:#fe4070;
                font-size: 15px;
            }
        }
    }
}
</style>