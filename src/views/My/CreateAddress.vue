<template>
    <div style="background-color:#fff">
        <van-nav-bar 
            :title="this.$route.name"
            @click-left="onClickLeft" 
            @click-right="onClickRight">
            <van-icon name="wap-home-o" slot="right" color="#ccc" size="24"></van-icon>
            <van-icon name="arrow-left" slot="left" color="#ccc" size="24"></van-icon> 
        </van-nav-bar>
        <div class="scroll-list">
            <div>
                <div class="form">
                    <div class="form-group row">
                        <label class="col ">收货人</label>
                        <input class="col" placeholder="请输入收货人的姓名" v-model="name">
                    </div>
                    <div class="form-group row">
                        <label class="col">手机号码</label>
                        <input class="col" placeholder="请输入收货人的手机号码" maxlength="11" type="tel" v-model="tel">
                    </div>
                    <div class="form-group row">
                        <label class="col ">省市区</label>
                        <input class="col" placeholder="请选择" v-model="area">
                        <span class="location">定位</span>
                    </div>
                    <div class="form-group row">
                        <label class="col">详细地址</label>
                        <textarea class="col" placeholder="请输入收货人的详细地址" v-model="specific"></textarea>
                    </div>
                </div>
                <div class="operate-btns box box-tb box-align-center">
                    <div class="save" @click="save">保存地址</div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        created() {},
        data() {
            return {
                name:"",
                tel:"",
                area:"",
                specific:""
            }
        },
        methods:{
            onClickLeft(){
                this.$router.go(-1);
            },
            onClickRight(){
                this.$router.push({
                    path:"/home/index"
                })
            },
            save(){
                let address = this.area + this.specific
                let id = this.$store.state.Address.list.length+1;
                this.$store.commit("addlistFunc",{
                    id:id,
                    name:this.name,
                    tel:this.tel,
                    area:this.area,
                    specific:this.specific,
                    address:address
                })
                this.$router.push({
                    path:"/address"
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    .scroll-list{
        .form{
            padding: 0 12px;
            background-color: #fff;
            .form-group{
                font-size: 14px;
                border-bottom: 1px solid #eee;
                min-height: 43px;
                width: 100%;
                display: flex;
                label.col{
                    font-size: 14px;
                    color: #999;
                    width: 77px;
                    height: 20px;
                    margin-top: 12px;
                    line-height: 20px;
                    flex: 0 0 76.5px;
                    max-width: 76.5px;
                    display: block;
                }
                input.col{
                    box-sizing: border-box;
                    border: 0;
                    outline: 0;
                    margin-top: .75rem;
                    height: 20px;
                    line-height: 20px;
                    flex: 1;
                    display: block;
                    // width: 100%;
                    -webkit-appearance: none;
                }
                .location{
                    display: inline-block;
                    width: 33px;
                    height: 20px;
                    text-align: center;
                    background-repeat: no-repeat;
                    background-image: url("../../assets/images/address-icon.png");
                    background-size: 15px 20px;
                    font-size: 14px;
                    color:#fe4070;
                    padding-left: 17px;
                    margin-top: 12px;
                    flex: 0 0 50px;
                    max-width: 33px;
                    line-height: 20px;
                }
                textarea.col{
                    height: 38px;
                    min-height: 20px;
                    box-sizing: border-box;
                    border:0;
                    outline: 0;
                    margin-top: 12px;
                    -webkit-box-flex: 1;
                    flex: 1;
                    display: block;
                }
            }
        }
        .operate-btns{
            margin-top: 34px;
            margin-bottom: 15px;
            -webkit-box-align: center;
            align-items: center;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            flex-direction: column;
            display: flex;
            .save{
                margin-bottom: 18px;
                background-color: #fe4070;
                color: #fff;
                border-radius: 18px;
                height:33px;
                width: 228px;
                font-size: 14px;
                border:none;
                cursor: pointer;
                padding: 1px 6px;
                text-align: center;
                line-height: 33px;
            }
        }
    }
</style>