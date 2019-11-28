<template>
    <div style="background-color:#fff" class="resgister">
        <div v-show=" this.$route.name !='首页'">
            <van-nav-bar 
                :title=this.$route.name 
                right-text="登录"
                @click-left="onClickLeft" 
                @click-right="onClickRight"
            >
                <van-icon name="arrow-left" slot="left" color="#ccc" size="24"></van-icon> 
            </van-nav-bar>
        </div>
        <section>
            <div class="form">
            <!-- <form action autocomplete="off"> -->
                <div class="other-login-outer">
                    <div class="other-login">
                        <span class="other-title">使用手机注册</span>
                    </div>
                </div>
                <div class="jm_row icon_phone">
                    <div class="jm_col">
                        <input type="text" class="register_input" name="mobile" placeholder="请输入11为手机号" alertname="请输入手机号码" maxlength="11" id="account" v-model="username">
                    </div>
                </div>
                <div class="jm_row">
                    <div class="jm_col">
                        <input type="tel" class="register_input" placeholder="请输入短信验证码" id="mobileVerify" alertname="请输入短信验证码" name="mobileVerify" v-model="sms">
                    </div>
                    <div class="jm_col jm_col_90px">
                        <a href="javascript:;" class="register_yzm">验证</a>
                    </div>  
                </div>
                <div class="jm_row">
                    <div class="jm_col">
                        <input type="text" style="display:none">
                        <input type="password" class="register_input" placeholder="6-16位登录密码" alertname="请设置密码" maxlength="16" autocomplete="new-password" v-model="password">
                    </div>  
                </div>
                <input type="submit" value="注册" class="register_button" id="tele_register" @click="getData">
            <!-- </form> -->
            </div>
            <div class="register_agreement jm_center">
                点击注册，表示同意 
                <a href="javascript:;">《聚美优品用户协议》</a>
            </div>
        </section>
    </div>
</template>

<script>
import { Notify } from 'vant';
    export default {
        data() {
            return {
                username:null,
                password:null,
                iphone:null,
                sms:null
            }
        },
        methods: {
            onClickLeft(){
                this.$router.go(-1);
            },
            onClickRight(){
                this.$router.push({
                    path:"/login"
                })
            },
            getData(){
                this.$axios.get("/register",{
                    params:{
                        username:this.username,
                        password:this.password,
                        iphone:this.iphone
                    }
                }).then((data)=>{
                    console.log(data);
                    if(data.data.code == 200){
                        Notify({
                            message:"注册成功",
                            type:"success",
                            duration:2000,
                            onOpened:()=>{
                                this.$router.push("/login");
                            }
                        })
                    }
                })
            }
        },
    }
</script>

<style lang="less" scoped>
    input{
        padding: 0;
        margin: 0;
        border: 0;
    }
    .resgister{
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 1;
        background-color: #fff;
        padding-bottom: 80px;
        .van-nav-bar__title{
            font-size: 17px;
        }
        .van-nav-bar__text{
            color: #666;
            font-size: 15px;
        }
        .form{
            margin:0 12%;
            .other-login-outer{
                padding:0 10%;
                .other-login{
                    position: relative;
                    height: 58px;
                    line-height: 58px;
                    text-align: center;
                    &::before{
                        content: "";
                        font-size: 0px;
                        border-bottom:1px solid #f5f5f5;
                        position: absolute;
                        top: 29px;
                        left: 0px;
                        width: 100%;
                        z-index: -1;
                    }
                    .other-title{
                        padding: 0 5px;
                        background-color: #fff;
                        color:#999;
                        font-size: 14px;
                    }
                }
            }
            .jm_row.icon_phone{
                display: flex;
                width: 100%;
                .jm_col{
                    flex: 1;
                    display: block;
                    width: 100%;
                    .register_input{
                        margin-top: 0;
                    }
                }
            }
            .jm_row {
                display: flex;
                width: 100%;
                .jm_col{
                    flex: 1;
                    display: block;
                    width: 100%;
                    .register_input{
                        background-color: #f5f5f5;
                        border-radius: 20px;
                        width: 100%;
                        height: 36px;
                        font-size: 14px;
                        color: #999;
                        text-align: left;
                        text-indent: 21px;
                        margin-top: 18px;
                    }
                }
                .jm_col_90px{
                    flex: 0 0 90px;
                    max-width: 90px;
                    margin:18px 0 0 10px;
                    .register_yzm{
                        background-color: #fff;
                        border: 1px solid #feb2c5;
                        border-radius: 20px;
                        width: 97%;
                        height: 35px;
                        font-size: 14px;
                        line-height: 35px;
                        text-align: center;
                        display: block;
                    }
                }
            }
            .register_button{
                width: 100%;
                height: 36px;
                text-align: center;
                line-height: 14px;
                font-size: 14px;
                background-color: #feb2c5 !important;
                border-radius: 20px;
                margin:  18px auto 0 auto;
                display: block;
                color:#fff;
            }
        }
        .register_agreement{
            font-size: 12px;
            color: #999999;
            height: 36px;
            line-height: 36px;
            text-align: center;
            a{
                color: #808080;
                text-decoration: none;
                padding: 0;
                margin: 0;
            }
        }
    }
</style>