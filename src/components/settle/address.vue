<template>
    <div>
        <div class="address-box">
            <div class="address" @click="goAddress">
                <span class="location-icon"></span>
                <div class="addr-text">
                    <div class="per-info">
                        <span class="default">默认</span>
                        <span>收货人：{{this.$store.state.Address.lists.name}}</span>
                        <span class="per-tel">{{this.$store.state.Address.lists.tel}}</span>
                    </div>
                    <div class="address-detail">{{this.$store.state.Address.lists.address}}</div>
                </div>
                <span class="right-arrow"></span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            goAddress(){
                this.$router.push({
                    path:"/address",
                    query:{
                        name:"settle"
                    }
                });
                this.$store.commit("flagFunc",false);
            }
        },
    }
</script>

<style lang="less" scoped>
    .address-box{
        padding-bottom: 2.5px;
        background-color: #fff;
        .address{
            padding: 12px 12px 9.5px 12px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .location-icon{
                margin-right: 6px;
                width: 12px;
                height: 16px;
                background: url("../../assets/images/addressicon.png") no-repeat center center;
                background-size: 100% 100%;
                display: block;
            }
            .addr-text{
                flex: 1;
                .per-info{
                    line-height: 15px;
                    .default{
                        margin-right: 6px;
                        padding: 1px 4px;
                        font-size: 12px;
                        color: #fff;
                        border-radius: 2px;
                        background: #fe4070;
                    }
                    .per-tel{
                        margin-left: 10px;
                    }
                }
                span{
                    font-size: 12px;
                    font-family: sans-serif;
                }
                .address-detail{
                    margin-top: 10px;
                    font-size: 13px;
                    line-height: 18px;
                    font-family: sans-serif;
                }
            }
            .right-arrow{
                visibility: visible;
                width: 5.5px;
                height: 9px;
                background-image: url("../../assets/images/shop-right.png") ;
                background-size: 100% 100%;
                display: block;
            }
        }
    }
</style>