<template>
    <div>
        <!-- 返回栏start -->
        <header class="header">
            <div class="header-left" @click="goBack"></div>
            <div class="header-title">我的聚美</div>
            <div class="header-right" @click="goHome"></div>
        </header>
        <!-- 返回栏end -->
        <main class="main">
            <!-- 注册/登录start -->
            <!-- 没有登陆的 -->
            <div class="user-unlogin" style="position:relative" v-show="isShow">
                <div class="noportrait">
                </div>
                <div class="operation">
                    <router-link to="/register" tag="a">注册</router-link>
                    <div class="separator"></div>
                    <router-link to="/login" tag="a">登录</router-link>
                </div>
            </div>
            <!-- 注册/登录end -->
            <div class="user"  v-show="!isShow">
                <img :src="info.img" class="photo">
                <div class="user_bg">
                    <div class="user_info">
                        <span class="name">{{info.name}}</span>
                        <span class="grade">普通会员</span>
                    </div>
                </div>
                <div class="icons">
                    <router-link class="wishlist" to="/wishdeal/onsale" tag="div">
                        <div class="icon"></div>
                        <span>心愿单</span>
                    </router-link>
                    <router-link class="onsale" to="/wishdeal/onsale" tag="div">
                        <div class="icon"></div>
                        <span>开售提醒</span>
                    </router-link>
                    <router-link class="fav" to="/wishdeal/onsale" tag="div">
                        <div class="icon"></div>
                        <span>收藏</span>
                    </router-link>
                </div>
            </div>
            <!-- 我的订单 start -->
            <div class="order block">
                    <div class="block-title">
                        <i class="block-title-icon myorder"></i>
                        我的订单
                        <a href="javascript:;" class="block-title-nev">
                            <router-link to="/order/index" tag="span">查看我的全部订单</router-link>
                            <i class="arrow-right"></i>
                        </a>
                    </div>
                    <div class="block-content">
                        <a class="block-items" href="javascript:;">
                            <i class="unpaid"></i>
                            <router-link to="/order/wait_pay" tag="span">待付款</router-link>
                        </a>
                        <a class="block-items" href="javascript:;">
                            <i class="unconfirm"></i>
                            <router-link to="/order/wait_confirm" tag="span">待收货</router-link>
                        </a>
                        <a class="block-items" href="javascript:;">
                            <i class="uncommend"></i>
                            <router-link to="/order/wait_rate" tag="span">待评价</router-link>
                        </a>
                        <a class="block-items" href="javascript:;">
                            <i class="refund"></i>
                            <router-link to="/order/index" tag="span">退货/退款</router-link>
                        </a>
                    </div>
                </div>
            <!-- 我都订单 end -->

            <!-- 我的资产 start -->
            <div class="fund block">
                <div class="block-title">
                    <i class="block-title-icon myfund"></i>
                    我的资产
                </div>
                <div class="block-content">

                    <a href="javascript:;" class="block-items">
                        <div class="value"></div>
                        <router-link to="/promocard/new" tag="span">现金券</router-link>
                    </a>
                    <a href="javascript:;" class="block-items">
                        <div class="value"></div>
                        <router-link to="/promocard/new" tag="span">红包</router-link>
                    </a>
                    <a href="javascript:;" class="block-items">
                        <div class="value"></div>
                        <router-link to="/promocard/new">聚美余额</router-link>
                    </a>
                    <a href="javascript:;" class="block-items">
                        <div class="value"></div>
                        <router-link to="/promocard/new">礼品卡</router-link>
                    </a>
                </div>
            </div>
            <!-- 我的资产 end -->

            <!-- 售后服务 start -->
            <div class="block list">
                <router-link href="javascript:;" class="list-items" to="/feedback" tag="a">
                    <i class="list-items-icon rmaservice"></i>
                    <span>售后服务</span>
                    <i class="arrow-right"></i>
                </router-link>
                <router-link href="javascript:;" class="list-items" to="/feedback" tag="a">
                    <i class="list-items-icon feedback"></i>
                    <span>意见反馈</span>
                    <i class="arrow-right"></i>
                </router-link>
                <a href="javascript:;" class="list-items" @click="goAddress">
                    <i class="list-items-icon address"></i>
                    <span>收货地址</span>
                    <i class="arrow-right"></i>
                </a>
                <a href="javascript:;" class="list-items" @click="edit">
                    <i class="list-items-icon logout"></i>
                    <span @click="publish">退出登录</span>
                    <i class="arrow-right"></i>
                </a>
                <a href="javascript:;" class="list-items">
                    <i class="list-items-icon tel"></i>
                    <span>400-123-123123</span>
                    <i class="arrow-right"></i>
                </a>
            </div>
            <!-- 售后服务 end-->

            <!-- 客服热线 start -->
            <div class="hint">
                客服热线400-123-8888 (8:00-22:00)
                <br>
                拨打前请记录您的UID  0
            </div>
            <!-- 客服热线 end -->
        </main>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                info:{},
                flag:true,
                isShow:true
            }
        },
        created() {
            this.$axios.get("/getdata",{
                params:{
                    token:localStorage.login
                }
            }).then((req)=>{
                this.info = req.data.result;
            })
        },
        methods: {
            edit(){
            },
            goBack(){
                this.$router.go(-1);
            },
            goHome(){
                this.$router.push({
                    path:"/home/index"
                })
            },
            publish(){
                localStorage.login = "edit";
                this.isShow = true;
                console.log(this.isShow);
            },
            goAddress(){
                this.$router.push({
                    path:"/address",
                    query:{
                        name:'address'
                    }
                })
                this.$store.commit("flagFunc",true);
            }
        },
        beforeMount() {
            if(localStorage.login){
                if(localStorage.login == "edit"){
                    this.isShow = true;
                    console.log("------beforeMount",this.isShow);
                }else{
                    this.isShow = false;
                    console.log("------beforeMount",this.isShow);
                }
            }else{
                this.isShow = true;
            }
        },
    }
</script>

<style lang="less" scoped>
    // 返回栏 start
    .header{
        width: 320px;
        height: 38px;
        font-size: 14px;
        color: #333;
        line-height: 38px;
        text-align: center;
        zoom: 1.17188;
        display: block;
        z-index: 1;
        background-color: transparent;
        position: relative;
        .header-left{
            width: 92px;
            height: 38px;
            position: absolute;
            left: 0;
            top: 0;
            box-sizing: border-box;
            background-image:url(../../assets/images/back_white_bg.png);
            background-position: left center;
            background-repeat: no-repeat;
            background-size: 24px 24px;
            padding-left: 18px;
            a{
                display: block;
                text-decoration: none;
                color: #fff;
            }
        }
        .header-title{
            width: 320px;
            height: 38px;
            float: left;
            text-align: center;
            line-height: 38px;
            background-color: transparent;
            color: #fff;
        }
        .header-right{
            position: absolute;
            right: 0;
            top:0;
            width: 38px;
            height: 38px;
            background-image: url(../../assets/images/home_white_bg.png);
            background-position: center center;
            background-repeat: no-repeat;
            background-size: 24px 24px;
            a{
                display: block;
                text-decoration: none;
                color: #fff;
            }
        }
    }
    // 返回栏 end
    .main{
        zoom: 1.17188;
        display: block;
        position: absolute;
        top: 0;
        width: 320px;
        background-color: #f0f0f0;
        // 注册/登录 start
        .user-unlogin{
            height: 158px;
            padding-top: 50px;
            background-image: linear-gradient(-204deg, #fd465f 0 ,#fc5e9f 100%);
            box-sizing: border-box;
            .noportrait{
                width: 60px;
                height: 60px;
                background-size: 60px;
                margin: auto;
                background-image: url(../../assets/images/noportrait.png);
            }
            .operation{
                width: 200px;
                display: flex;
                padding: 10px;
                margin: auto;
                >a{
                    display: inline-block;
                    width: 95px;
                    text-align: center;
                    text-decoration: none;
                    font-size: 18px;
                    font-weight: 800;
                    color: #fff;
                    line-height: 25px;
                }
            }
            .separator{
                width: 1px;
                height: 15px;
                vertical-align: middle;
                display: inline-block;
                background-color: #fff;
                margin-top: 4px;
            }
        }
        // 注册/登录 end
        .user{
            position: relative;
            width: 320px;
            height: 158px;
            background-color: #fff;
            .photo{
                width: 64px;
                height: 64px;
                display: block;
                border-radius: 50%;
                position: absolute;
                left: 32px;
                top:72px;
                z-index: 10;
            }
            .user_bg{
                position: absolute;
                width: 320px;
                height:106px;
                background-image: linear-gradient(-204deg,#fd465f 0,#fc5e9f 100%);
                .user_info{
                    font-size: 12px;
                    color:#fff;
                    position: absolute;
                    left: 112px;
                    bottom: 4px;
                    .name{
                        font-family: sans-serif;
                        line-height: 20px;
                        display: block;
                        font-size: 13px;
                        letter-spacing: .65px;
                    }
                    .grade{
                        background:rgba(255,255,255,0.2);
                        border-radius: 100px;
                        line-height: 18px;
                        padding: 3px 5px;
                        letter-spacing: 0.65px;
                    }
                }
            }
            .icons{
                width: 230px;
                height: 50px;
                position: absolute;
                bottom: 2px;
                right:0;
                font-size: 12px;
                text-align: center;
                .icon{
                    width: 18px;
                    height: 18px;
                    background-size: 17px 17px;
                    margin: 7px auto;
                    background-repeat: no-repeat;
                }
                .wishlist{
                    display: block;
                    width: 76px;
                    height: 50px;
                    float: left;
                    .icon{
                        background-image: url("../../assets/images/wishlist.png");
                    }
                }
                .onsale{
                    display: block;
                    width: 76px;
                    height: 50px;
                    float: left;
                    .icon{
                        background-image: url("../../assets/images/onsale.png");
                    }
                }
                .fav{
                    display: block;
                    width: 76px;
                    height: 50px;
                    float: left;
                    .icon{
                        background-image: url("../../assets/images/fav.png");
                    }
                }
            }
        }
        // 我的订单 start
        .block{
            margin-top: 12px;
            background-color: #fff;
            .block-title{
                height: 34px;
                line-height: 34px;
                padding-left: 8px;
                border-bottom: 1px solid #eaeaea;
                font-size: 13px;
                .block-title-icon{
                    width: 20px;
                    height: 20px;
                    background-size: 20px;
                    margin-right: 10px;
                    display: inline-block;
                    vertical-align: middle;
                    font-style: italic;
                }
                i.myorder{
                    background-image: url(../../assets/images/myorder.png);
                }
                .block-title-nev{
                    float: right;
                    text-decoration: none;
                    color: #999;
                    font-size: 12px;
                    margin-right: 5px;
                    .arrow-right{
                        width: 20px;
                        height: 20px;
                        background-size: 20px;
                        background-image: url(../../assets/images/advance_bg.png);
                        display: inline-block;
                        vertical-align: middle;
                    
                    }
                }
            }
            .block-content{
                display: flex;
                .block-items{
                    width: 80px;
                    text-align: center;
                    display: inline-block;
                    margin: 0;
                    padding: 10px 0;
                    text-decoration: none;
                    font-size: 12px;
                    color: #666;
                    i{
                        display: block;
                        width: 24px;
                        height: 24px;
                        margin: 5px auto;
                        background-size: 24px;
                    }
                    i.unpaid{
                        background-image: url(../../assets/images/unpaid.png);
                    }
                    i.unconfirm{
                        background-image: url(../../assets/images/unconfirm.png);
                    }
                    i.uncommend{
                        background-image: url(../../assets/images/uncomment.png);
                    }
                    i.refund{
                        background-image: url(../../assets/images/refund.png);
                    }
                    
                }
            }
        }
        // 我的订单 end

        // 我的资产 start
        .fund{
            i.myfund{
                background-image: url(../../assets/images/myfund.png);
            }
            .value{
                font-size: 16px;
                font-weight: 700;
                margin: 5px 0 ;
                color:#000;
            }
        }
        // 我的资产 end

        // 售后服务 start
        .block{
            .list-items{
                display: block;
                height: 34px;
                line-height: 34px;
                font-size: 13px;
                text-decoration: none;
                color: #333;
                padding-left: 8px;
                border-bottom: 1px solid #eaeaea;

                .list-items-icon{
                    width: 20px;
                    height: 20px;
                    background-size: 20px;
                    display: inline-block;
                    vertical-align: middle;
                    margin-right: 10px
                }
                i.rmaservice{
                    background-image: url(../../assets/images/rmaservice.png);
                }
                i.feedback{
                    background-image: url(../../assets/images/feedback.png);
                }
                i.address{
                    background-image: url(../../assets/images/address.png);
                }
                i.logout{
                    background-image: url(../../assets/images/logout.png);
                }
                i.tel{
                    background-image: url(../../assets/images/tel.png);
                }
                .arrow-right{
                    width: 20px;
                    height: 20px;
                    background-image: url(../../assets/images/advance_bg.png);
                    background-size: 20px;
                    display: inline-block;
                    vertical-align: middle;
                    margin-top: 6px;
                    margin-right: 6px;
                    float: right;
                }
            }
        }
        // 售后服务 end

        // 客服热线 start
        .hint{
            line-height: 15px;
            margin:15px;
            font-size: 11px;
            color: #999;
            padding-bottom: 3.0625rem;
        }
        // 客服热线 end
    }
</style>