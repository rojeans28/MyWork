<template>
    <div>
        <section class="deals-content">
            <div class="deals-content-header">
                <span class="head_bg">
                    <img src="https://f0.jmstatic.com/btstatic/h5/common/icon_title.png" alt="">
                </span>
                <span>疯抢专场 早10点上新</span>
            </div>
            <main class="main">
                <ul class="tuan-list">
                    <li v-for="items in lists" :key="items.c">
                        <a href="javascript" class="clearfix">
                            <div class="list-img">
                                <img :src="items.urlOne" alt="">
                                <div class="list-flag ">
                                    {{items.context}}
                                </div>
                            </div>
                            <div class="list-info fl">
                                <h1 class="list-tit">{{items.title}}</h1>
                                <div class="list-countdown">
                                    <span>仅剩</span>
                                    <span>00天</span>
                                    <span>00时</span>
                                    <span>00分</span>
                                </div>
                            </div>
                            <div class="list-logo fr">
                                <img :src="items.urlLogo" alt="">
                            </div>
                        </a>
                    </li>
                </ul>
            </main>
        </section>
    </div>  
</template>

<script>
    export default {
        data() {
            return {
                lists:[
                    {
                        urlOne:"http://mp6.jmstatic.com//jmstore/image/000/007/7313_std/5dc8b7f3c1190_1024_512.jpg?1573808033&imageView2/2/w/640/q/90",
                        context:"全场最高3件7折",
                        title:"舒贝怡品牌专场",
                        urlLogo:"http://p0.jmstatic.com/brand/logo_180/16216.jpg"
                    },
                    {
                        urlOne:"http://mp6.jmstatic.com//jmstore/image/000/008/8508_std/5dba80559f8fb_1024_512.jpg?1574140438&imageView2/2/w/640/q/90",
                        context:"99元任选3件",
                        title:"辣妈护肤季，颜值巅峰肌秘",
                        urlLogo:"http://p0.jmstatic.com/brand/logo_180/24208.jpg"
                    },
                    {
                        urlOne:"http://mp5.jmstatic.com//jmstore/image/000/009/9136_std/5dd214cba09a6_1024_512.jpg?1574130097&imageView2/2/w/640/q/90",
                        context:"全场最高3件7折",
                        title:"耶丽娅品牌专场",
                        urlLogo:"http://p0.jmstatic.com/brand/logo_180/26510.jpg"
                    },
                    {
                        urlOne:"http://mp6.jmstatic.com//jmstore/image/000/007/7313_std/5dc8b7f3c1190_1024_512.jpg?1573808033&imageView2/2/w/640/q/90",
                        context:"全场最高3件7折",
                        title:"舒贝怡品牌专场",
                        urlLogo:"http://p0.jmstatic.com/brand/logo_180/16216.jpg"
                    },
                    {
                        urlOne:"http://mp6.jmstatic.com//jmstore/image/000/007/7313_std/5dc8b7f3c1190_1024_512.jpg?1573808033&imageView2/2/w/640/q/90",
                        context:"全场最高3件7折",
                        title:"舒贝怡品牌专场",
                        urlLogo:"http://p0.jmstatic.com/brand/logo_180/16216.jpg"
                    }
                ]
            }
        },
    }
</script>

<style lang="less" scoped>
    @mainColor:#FFFFFF;
    @navColor:#fe4070;
    @fontSize:14px;
    .deals-content{
        background-color: #fff;
        margin-bottom: 0.427rem;
        .deals-content-header{
            text-align: center;
            .head_bg{
                width: 0.827rem;
                height: 2.133rem;
                line-height: 2.133rem;
                position: relative;
                top: 0.1875rem;
                img{
                    width: 100%;
                }
            }
            span{
                color: #333;
                font-size: 14px;
                display: inline-block;
            }
        }
        .main{
            .tuan-list{
                a{
                    display: block;
                    color:#000;
                    .list-img{
                        position: relative;
                        height: 9.813rem;
                        overflow: hidden;
                        img{
                            width: 100%;
                        }    
                        .list-flag{
                            position: absolute;
                            color: #fff;
                            font-size: 11px;
                            text-align: center;
                            padding: 0 0.125rem;
                            bottom: 0.747rem;
                            background-color: #000;
                            height: 0.96rem;
                            line-height: 0.96rem;
                        }                                        
                    }
                    .list-info{
                        padding: 0.8rem;
                        max-width: 13.333rem;
                        .list-tit{
                            color:#333;
                            font-size: 14px;
                            font-weight: 400;
                            margin-bottom: .267rem;
                        }
                        .list-countdown{
                            color:#999;
                            height: 0.64rem;
                            line-height: 0.64rem;
                            vertical-align: middle;
                            font-size: 12px;
                        }
                    }
                    .fl{
                        float: left;
                    }
                    .list-logo{
                        padding-top: 0.613rem;
                        padding-right: 0.96rem;
                        width: 3.893rem;
                        height: 1.92rem;
                        overflow: hidden;
                        img{
                            width: 100%;
                        }
                    }
                    .fr{
                        float: right;
                    }
                }
            }
        }
    }
</style>