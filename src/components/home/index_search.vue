<template>
    <div>
        <div class="search">
            <header class="header">
                <a href="javascript:;" class="index-search">
                    <img class="icon" src="../../assets/images/search_btn.png"><span class="txt_2">搜索商品 分类 功效</span>
                </a>
                <span class="search_action">
                    <img src="../../assets/images/search_list2.png" class="search_menu">
                </span>
            </header>
        </div>
        <!-- <van-tabs>
            <van-tab v-for="index in lists" :title="index.name">
                内容
            </van-tab>
        </van-tabs> -->
    </div>
</template>

<script>
import contentTab from "@/components/home/index_content_1_tab.vue";
    export default {
        data() {
            return {
                value:"",
                // lists:[
                //     {
                //         name:"首页"
                //     },{
                //         name:"极速免税店"
                //     },{
                //         name:"母婴"
                //     },{
                //         name:"轻奢"
                //     },{
                //         name:"名品特卖"
                //     }
                // ]
            }
        },
    }
</script>

<style lang="less" scoped>
    @mainColor:#FFFFFF;
    @navColor:#fe4070;
    @fontSize:14px;
    .search{
        width: 100%;
        .header{
            width: 100%;
            display: block;
            background-color: @mainColor;
            overflow: hidden;
            position: relative;
            .index-search{
                display: block;
                margin:.4375rem 2.88rem .347rem 1.07rem;
                color: #999;
                background-color: #F5F5F5;
                border-radius: 1.25rem;
                height: 1.653rem;
                line-height: 1.653rem;
                box-shadow: 0 0.0625rem 0.125rem rgba(0, 0, 0, .05) inset;
                font-size: 14px;
                text-align: center;
                text-decoration: none;
                position: relative;
                img.icon{
                    width: .875rem;
                    display: inline-block;
                    position: relative;
                    top: .1875rem;
                    left: -.1875rem;
                }
            }
            .search_action{
                width: 1.28rem;
                height: 0.987rem;
                position: absolute;
                bottom: 0.68rem;
                right: 0.64rem;
                z-index: 12;
                .search_menu{
                    width: 100%;
                }
            }
        }
    }
</style>