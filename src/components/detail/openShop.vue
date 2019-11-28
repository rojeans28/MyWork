<template>
    <div style="background-color:#fff;margin-bottom:8px">
        <div class="shop-wrap">
            <div class="shopcontent">
                <div class="shop-left">
                    <img src="http://mp6.jmstatic.com/pop_store/000/007/7374_std/5be65d910eecd_320_320.jpg?1571370279&imageView2/2/w/320/q/90" alt="">
                </div>
                <div class="shop-right">
                    <div class="shop-info">
                        <p class="shopname">素萃官方品牌店</p>
                        <span class="jmicon">官方授权</span>
                    </div>
                    <div class="shop-label">用心呵护时刻拥有完美肌肤</div>
                </div>
            </div>
            <div class="btn-wrap">
                <p class="shop-btn"> 进入店铺 </p>
                <div id="demo16"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
    .shop-wrap{
        width: 351.562px;
        padding: 12.118px 11.719px;
        box-sizing: border-box;
        margin: 10px auto;
        background: #fff;
        display: block;
        .shopcontent{
            overflow: hidden;
            .shop-left{
                float: left;
                width: 42px;
                height: 42px;
                border: 1px solid #eee;
                img{
                    display: block;
                    width: 100%;
                }
            }
            .shop-right{
                float: left;
                margin-left: 10px;
                padding-top: 4px;
                .shop-info{
                    line-height: 16px;
                    font-size: 14px;
                    color: #333;
                    width: 100%;
                    overflow: hidden;
                    .shopname{
                        display: inline-block;
                        max-width: 100px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        float: left;
                        height: 16px;
                        line-height: 16px;
                    }
                    .jmicon{
                        font-size: 10px;
                        float: left;
                        padding: 1px 4px;
                        background:#fe4070;
                        color: #fff;
                        border-radius: 4px;
                        margin-left: 4px;
                        line-height: 14px;
                        box-sizing: border-box;
                    }
                }
                .shop-label{
                    font-size: 11px;
                    color:#999;
                    margin-top: 6px;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                    width: 262.5px;
                }
            }
        }
        .btn-wrap{
            color:#666;
            font-size: 14px;
            position: relative;
            margin: 0 auto;
            .shop-btn{
                width: 148px;
                height: 38px;
                line-height: 38px;
                border-radius: 24px;
                margin: 0 auto;
                display: block;
                text-align: center;
                margin-top: 12px;
                background-size: 6px 12px;
                color: #666;
                position: relative;
                border:1px solid #ddd;
                #demo16::before{
                    border-left-color: #999;
                    right: 26px;
                }
                #demo16::after,#demo16::before{
                    border: 6px solid transparent;
                    border-left: 6px solid #fff;
                    width: 0;
                    height: 0;
                    position: absolute;
                    top: 12px;
                    right: 27px;
                    content: "";
                }
            }
        }
    }
</style>