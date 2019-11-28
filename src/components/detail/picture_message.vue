<template>
    <div>
        <div class="tuwen-c bgc-f5" style="min-height:574.188px">
            <div class="detail_msg_img pr bgc-f">
                <div>
                    <p v-for="imgs in lists" :key="imgs.i">
                        <img v-lazy="imgs.url">
                    </p>
                </div>
                <p title="关于划现价的说明">
                    <img src="//p0.jmstatic.com/mobile/other/other/marketprice_h5.png" alt="">
                    <div class="company-info fs14">商家信息</div>
                </p>
            </div>
            <div class="recommend bgc-f5">
                <div class="recommend-title color3 fs14">您也许还喜欢</div>
                <ul class="recommend-list">
                    <li>
                        <div>
                            <img src="http://p1.jmstatic.com/product/005/046/5046946_std/5046946_350_350.jpg" alt="">
                            <span class="fs14">雅诗兰黛特润修护精华眼霜</span>
                            <span class="color-jm fs18">¥108</span>
                            <del class="color9 fs13">¥163</del>
                            <p class="fs11 color9 hide">10.2万已售丨剩15天</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src="http://p1.jmstatic.com/product/005/046/5046946_std/5046946_350_350.jpg" alt="">
                            <span class="fs14">雅诗兰黛特润修护精华眼霜</span>
                            <span class="color-jm fs18">¥108</span>
                            <del class="color9 fs13">¥163</del>
                            <p class="fs11 color9 hide">10.2万已售丨剩15天</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src="http://p1.jmstatic.com/product/005/046/5046946_std/5046946_350_350.jpg" alt="">
                            <span class="fs14">雅诗兰黛特润修护精华眼霜</span>
                            <span class="color-jm fs18">¥108</span>
                            <del class="color9 fs13">¥163</del>
                            <p class="fs11 color9 hide">10.2万已售丨剩15天</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src="http://p1.jmstatic.com/product/005/046/5046946_std/5046946_350_350.jpg" alt="">
                            <span class="fs14">雅诗兰黛特润修护精华眼霜</span>
                            <span class="color-jm fs18">¥108</span>
                            <del class="color9 fs13">¥163</del>
                            <p class="fs11 color9 hide">10.2万已售丨剩15天</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                lists:[
                    {url:"http://p0.jmstatic.com//jpartner/ueditor/partner/593476966fd0819fff712a6df467620b.jpg"},
                    {url:"http://p0.jmstatic.com//jpartner/ueditor/partner/d5dd164f1e8ee8d84b60a48a5197b3d5.jpg"},
                    {url:"http://p0.jmstatic.com//jpartner/ueditor/partner/906045fc6fce554607a89a41744f53fa.jpg"},
                    {url:"http://p0.jmstatic.com//jpartner/ueditor/partner/17af9db820a273ce80de833a1ed8a08a.jpg"},
                    {url:"http://p0.jmstatic.com//jpartner/ueditor/partner/da0ec3ed052af6d3b2a82f6e5234f3ed.jpg"},
                    {url:"http://p0.jmstatic.com//jpartner/ueditor/partner/bfa27f4ddc53cb025a317ab2a55559e5.jpg"},
                ],
                imageList: [
                    'https://img.yzcdn.cn/vant/apple-1.jpg',
                    'https://img.yzcdn.cn/vant/apple-2.jpg'
                ]
            }
        },
    }
</script>

<style lang="less" scoped>
    .tuwen-c{
        min-height: 571.188px;
        background-color: #f5f5f5;
        .detail_msg_img{
            overflow: hidden;
            background-color: #fff;
            position: relative;
            img{
                display: block;
                width: 100%;
            }
            .company-info{
                height: 43.539px;
                box-sizing: border-box;
                background: url("../../assets/images/shop-right.png") right center no-repeat;
                background-size: 7.5px;
                color:#666;
                line-height: 44.53px;
                border-bottom: 1.172px solid #f5f5f5;
                width: 352.5px;
                display: block;
                margin:0 11.25px;
                font-size: 14px;
            }
        }
        .recommend{
            background-color: #f5f5f5;
            padding-bottom: 50px;
            .recommend-title{
                line-height: 44px;
                text-align: center;
                background:url("../../assets/images/shop-xian.png") no-repeat center;
                background-size: 303px 1px;
                color:#333;
                font-size: 14px;
            }
            .recommend-list{
                padding-left: 5px;
                overflow: hidden;
                li{
                    width: 162px;
                    background-color: #fff;
                    margin-right: 5px;
                    margin-bottom: 5px;
                    float: left;
                    padding: 9px;
                    border-radius: 4px;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
                    img{
                        width: 162px;
                        height: 162px;
                        border: 0;
                        display: block;
                        margin-bottom: 8px;

                    }
                    .fs14{
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp:2;
                        -webkit-box-orient:vertical;
                        height: 32px;
                        line-height: 16px;
                        margin-bottom: 10px;
                        font-size: 14px;
                    }
                    .color-jm{
                        color:#ed145b;
                        font-size: 18px;
                    }
                    del{
                        text-decoration: line-through;
                        color: #999;
                        font-size: 13px;
                    }
                    .hide{
                        display: none;
                    }
                }
            }
        }
    }
</style>