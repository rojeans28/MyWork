<template>
    <div style="background-color:#fff" class="login">
        <div v-show=" this.$route.name !='首页'">
            <van-nav-bar 
                :title=this.$route.name 
                right-text="注册" 
                @click-left="onClickLeft" 
                @click-right="onClickRight">
                <van-icon name="arrow-left" slot="left" color="#ccc" size="24"></van-icon> 
            </van-nav-bar>
        </div>
        <section>
            <!-- <form action autocomplete="off"> -->
            <div class="form">
                <div class="other-login-outer">
                    <div class="other-login">
                        <span class="other-title">使用手机登录</span>
                    </div>
                </div>
                <div class="jm_row icon_phone">
                    <div class="jm_col">
                        <input type="text" class="register_input" name="mobile" placeholder="请输入11为手机号" alertname="请输入手机号码" maxlength="11" id="account" v-model="username">
                    </div>
                </div>
                <div class="jm_row">
                    <div class="jm_col">
                        <input type="tel" class="register_input" placeholder="请输入短信验证码" id="mobileVerify" alertname="请输入短信验证码" name="mobileVerify" v-model="password">
                    </div>
                    <div class="jm_col jm_col_90px">
                        <a href="javascript:;" class="register_yzm">验证</a>
                    </div>  
                </div>
                <div class="jm_row register_jumei_account">
                    <a href="javascript:;" class="jm_col jm_left" id="use_jumei_account">使用聚美帐号登录</a>
                    <div class="jm_col jm_right">30天内自动登录</div>
                </div>
                <input type="button" value="登录" class="register_button" id="tele_register" @click="getLogin">
            <!-- </form> -->
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
                password:null
            }
        },
        methods: {
            onClickLeft(){
                this.$router.go(-1);
            },
            onClickRight(){
                this.$router.push({
                    path:"/register"
                })
            },
            getLogin(){
                this.$axios.get("/login",{
                    params:{
                        username:this.username,
                        password:this.password
                    }
                }).then((response)=>{
                    if(response.data.code === 200){
                        let token = response.data.result.token;
                        localStorage.login = token;
                        this.$router.push("/my");
                    }else{
                        Notify({
                        message: '登录失败',
                        duration: 1000
                        });
                    }
                }).catch((error)=>{
                    console.log(error);
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
    .login{
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
                        color:#feb2c5;
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
            .register_jumei_account{
                font-size: 12px;
                height: 32px;
                line-height: 44px;
                .jm_left{
                    color: #fe4070;
                    padding-left: 7px;
                    text-align: left;
                }
                .jm_right{
                    color:#999999;
                    padding-right: 7px;
                    text-align: right;
                }
            }
        }
    }
</style>