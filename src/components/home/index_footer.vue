<template>
    <div>
        <footer class="souye-footer-container">
            <div class="footer-image">
                <a href="javascript:;">
                    <img src="../../assets/images/souye_dibutu_01.jpg" alt="">
                </a>
            </div>
            <ul class="tab clearfix">
                <li class="checked">
                    <a href="">触屏版</a>
                </li>
                <li>
                    <a href="">电脑版</a>
                </li>
            </ul>
            <div class="bottom">
                <p>
                    ©2017 聚美优品 Jumei.com
                </p>
            </div>
        </footer>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
    @mainColor:#FFFFFF;
    @navColor:#fe4070;
    @fontSize:14px;
    .souye-footer-container{
        padding-left: .625rem;
        padding-right: .625rem;
        padding-bottom: 3.125rem;
        background: #fff;
        overflow: hidden;
        .footer-image{
            padding-top: 13px;
            a{
                text-decoration: none;
                color: #333;
                img{
                    width: 100%;
                    border:0;
                }
            }
        }
        .tab{
            text-align: center;
            width: 18.75rem;
            margin: 10px auto 0;
            li{
                display: inline-block;
                width: 4.48rem;
                height: 31px;
                line-height: 31px;
                border:  1px solid #e3e3e3;
                color: #666;
                margin-right: 2.293rem;
                font-size: 14px;
                border-radius: 1.25rem;
                a{
                    color: #333;
                    text-decoration: none;
                }
            }
            li:last-child{
                margin-right: 0;
            }
            li.checked{
                a{
                    color: @navColor;
                }
            }
        }
        .bottom{
            width: 100%;
            font-size: 16px;
            text-align: center;    
            color: #999;
            margin: 1.25rem auto 0.625rem;
            position: relative;
            p{
                font-size: 14px;
            }
        }
    }

</style>