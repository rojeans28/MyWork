<template>
    <div>
        <div v-show=" this.$route.name !='首页'">
            <van-nav-bar 
                :title="this.$route.name"
                @click-left="onClickLeft"
                @click-right="onClickRight"
            >
                <van-icon name="wap-home-o" slot="right" color="#ccc" size="24"></van-icon>
                <van-icon name="arrow-left" slot="left" color="#ccc" size="24"></van-icon> 
            </van-nav-bar>
        </div>
        <div class="msg">
            <div class="form">
                <div class="field_header">反馈内容(必填)：</div>
                <textarea name="detail" placeholder="乐意聆听您对聚美触屏版的意见或建议!"></textarea>
                <div class="field_header">联系方式(选填)：</div>
                <input type="text" name="contact" placeholder="手机号或邮箱(选填)">
                <input type="button" value="提交" class="btn-block btn-submit">
            </div>
        </div>  
    </div>
</template>

<script>
    export default {
        methods: {
            onClickLeft(){
                this.$router.go(-1);
            },
            onClickRight(){
                this.$router.push({
                    path:"/home/index"
                })
            }
        },
    }
</script>

<style lang="less" scoped>
    .form{
        display: block;
        margin-top: 0;
        .field_header{
            background-color: #fff;
            border: 1px solid #e0e0e0;
            border-left: none;
            border-right: none;
            color: #222;
            padding: 12px;
            font-size: 16px;
            line-height: 19px;
        }
        input[type=text],textarea{
            margin: 0;
            border-radius: 0;
            border:none;
            font-size: 14px;
            outline: 0;
            text-transform: none;
            display: block;
            width: 100%;
            padding: 12px 10px 12px 12px;
            box-sizing: border-box;
            color: #222;
        }
        .field_header{
            background-color: #fff;
            border:1px solid #e0e0e0;
            border-left: none;
            border-right: none;
            color: #222;
            padding: 12px;
            font-size: 14px;
            line-height: 19px;
        }
        input[type=text]{
            border-bottom: 1px solid #e0e0e0;
            line-height: 16px;
        }
        .btn-block {
            border-radius: 0;
            width:100%;
            background-color: #fff;
            border:1px solid #e0e0e0;
            color: #ed145b;
            display: block;
            padding: 12px 0;
            font-size: 20px;
            outline: none;
            text-transform: none;
        }
        .btn-submit{
            position: fixed;
            bottom: 0;
            text-decoration: none;
            z-index: 1000;
        }
    }
</style>