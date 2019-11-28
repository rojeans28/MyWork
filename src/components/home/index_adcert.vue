<template>
    <div class="my_location" ref="closeAdcert">
        <img class="my_logo" src="../../assets/images/logo.jpg" alt="">
        <div class="txt">
            <p class="txt_1">超实在·我为自己代言</p>
        </div>
        <a class="my_lo" href="javascript:;">前往下载</a>
        <div class="close_banner">
            <img src="../../assets/images/close.png" alt="关闭" @click="close">
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            close(){
                this.$refs.closeAdcert.style.display="none";
            }
        },
        created() {
        },
    }
</script>

<style lang="less" scoped>
    // 广告栏 start
    .my_location{
        width: 100%;
        background-image: url(../../assets/images/bg_01.png);
        background-repeat: no-repeat;
        height: auto;
        overflow: hidden;
        position: relative;
        top: 0;
        z-index: 1;
        .my_logo{
            width: 42px;
            margin:6px 12px 8px 8px ;
            float: left;
            display: block;
            border-radius: 10px;
        }
        .txt{
            width: 148px;
            margin-left: 58px;
            padding-top: 2px;
            overflow: hidden;
            color: #444;
            white-space: nowrap;
            text-overflow: ellipsis;
            .txt_1{
                font-size: 14px;
                font-weight: bold;
                height: 27px;
                line-height: 27px;
                font-family: '\9ED1\4F53',  Arial, Helvetica, sans-serif;
            }
        }
        .my_lo{
            position: absolute;
            top: 13px;
            width: 84px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            color: #fff;
            border:none;
            border-radius: 20px;
            right: 22px;
            font-size: 12px;
            background-color: #FE4478;
            text-decoration: none;
        }
        .close_banner{
            overflow: hidden;
            position: absolute;
            top: 6px;
            right: 5px;
            img{
                width: 12px;
                height: 12px;
            }
        }
    }
    // 广告栏 end
</style>