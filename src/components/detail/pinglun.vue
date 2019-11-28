<template>
    <div>
        <div class="conments bgc-f">
            <div class="conment-title color3 fs14">买过的人这样说</div>
            <ul class="bd-top">
                <li class="conment-item bd-top pr">
                    <div class="conment-msg f14">
                        <a href="javascript:;" class="block">
                            <div class="mbottom12 clear">
                                <div class="top-img fl">
                                    <img src="http://images2.jumei.com/user_avatar/370/682/370682531-64-1573483006.jpg?1573483007" alt="" class="customer-img fl">
                                </div>
                                <div class="top-info fl">
                                    <div class="info-name clear">
                                        <span class="fl">张***k</span>
                                        <span class="fl">
                                            <img src="http://p0.jmstatic.com/product_report/main_image/1492149275.jpg" alt="" class="c-vip">
                                        </span>
                                    </div>
                                    <span class="fs10 color9 block fr">加入聚美695天</span>
                                </div>
                            </div>
                            <p class="mbottom color6 fs13 comment-text">非常好！！！！！！！！！！！！！！！！！！！</p>
                            <div class="time-box-hidden mbottom">
                                <span class="fs10 color9">2019-10-02</span>
                                <span class="fs11 color9">型号: 6g*5片</span>
                            </div>
                        </a>
                        <p class="conment-img-list pr"></p>
                        <p class="conment-praise fs12 color9">
                            <span class="praise-num block fr">1</span>
                            <a href="javascript:;" class="conment-num block fr">评论</a>
                        </p>
                    </div>
                </li>
                <li class="conment-item bd-top pr">
                    <div class="conment-msg f14">
                        <a href="javascript:;" class="block">
                            <div class="mbottom12 clearfix">
                                <div class="top-img fl">
                                    <img src="http://images2.jumei.com/user_avatar/370/682/370682531-64-1573483006.jpg?1573483007" alt="" class="customer-img fl">
                                </div>
                                <div class="top-info fl">
                                    <div class="info-name clearfix">
                                        <span class="fl">张***k</span>
                                        <span class="fl">
                                            <img src="http://p0.jmstatic.com/product_report/main_image/1492149275.jpg" alt="" class="c-vip">
                                        </span>
                                    </div>
                                    <span class="fs10 color9 block fr">加入聚美695天</span>
                                </div>
                            </div>
                            <p class="mbottom color6 fs13 comment-text">非常好！！！！！！！！！！！！！！！！！！！</p>
                            <div class="time-box-hidden mbottom">
                                <span class="fs10 color9">2019-10-02</span>
                                <span class="fs11 color9">型号: 6g*5片</span>
                            </div>
                        </a>
                        <p class="conment-img-list pr"></p>
                        <p class="conment-praise fs12 color9">
                            <span class="praise-num block fr">1</span>
                            <a href="javascript:;" class="conment-num block fr">评论</a>
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
    .conments{
        margin-top: 8px;
        .conment-title{
            line-height: 44px;
            padding-left: 12px;
        }
        .color3{
            color: #333;
        }
        .fs14{
            font-size: 14px;
        }
        .bd-top{
            border-top: 1px solid #eee;
            .conment-item{
                border: 0;
                margin-left: 18px;
                margin-right: 18px;
                padding-top: 20px;
                padding-bottom: 12px;
                overflow: hidden;
                .conment-msg{
                    line-height: 14px;
                    position: relative; 
                    .block{
                        display: block;
                        .mbottom12{
                            margin-bottom: 12px;
                            .fl{
                                float: left;
                                .customer-img{
                                    width: 31px;
                                    height: 31px;
                                    border-radius: 50%;
                                }
                            }
                            .top-info{
                                margin-left: 10px;
                                float: left;
                                .info-name{
                                    margin-bottom: 4px;
                                    .fl{
                                        float: left;
                                        .c-vip{
                                            width: 11px;
                                            height: 11px;
                                            margin-left: 8px;
                                        }
                                    }
                                }
                                .fs10{
                                    font-size: 10px;
                                }
                                .color9{
                                    color: #999;
                                }
                                .block{
                                    display: block;
                                }
                                .fr{
                                    float: right;
                                }
                            }
                        }
                        .comment-text{
                            line-height: 20px;
                            display: -webkit-box;
                            -webkit-line-clamp:5;
                            -webkit-box-orient: vertical;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            margin-bottom: 6px;
                            color: #666;
                            font-size: 13px;
                        }
                        .time-box-hidden{
                            margin-bottom: 6px;
                            overflow: hidden;
                            .fs10{
                                padding-right: 4px;
                                color: #999;
                                font-size: 10px;
                            }
                            .fs11{
                                color: #999;
                                font-size:11px;
                            }
                        }
                    }
                    .conment-praise{
                        margin-top: 4px;
                        line-height: 20px;
                        height: 20px;
                        color: #999;
                        font-size: 12px;
                        .praise-num{
                            padding-left: 20px;
                            margin-left: 15px;
                            background: url("../../assets/images/shop-heart.png") no-repeat 0px 4px;
                            background-size: 12px 11px;
                            float: right;
                            display: block;
                        }
                        .conment-num{
                            padding-left: 20px;
                            background: url("../../assets/images/shop-title.png") no-repeat 0px 4px;
                            background-size: 12px 11px;
                            color: #999;
                            float: right;
                            display: block;
                        }
                    }
                }
                .f14{
                    font-size: 14px;
                }
            }
            .pr{
                position: relative;
            }
        }
    }
    .bgc-f{
        background-color: #fff;
    }
</style>