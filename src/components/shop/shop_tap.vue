<template>
    <div class="nav-con">
        <div class="tab">
            <van-tabs v-model="active" animated sticky>
                <van-tab v-for="tab in tabs" :title="tab.name">
                    <!-- <Tj :newId="tab.id"></Tj> -->
                    <ShopContent></ShopContent>
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>

<script>
import ShopContent from './shop_content.vue'
    export default {
        data() {
            return {
                active:"",
                tabs:[
                    {
                        name:"推荐",
                        id:1
                    },
                    {
                        name:"美妆",
                        id:2
                    },
                    {
                        name:"母婴健康"
                    },
                    {
                        name:"女装"
                    },
                    {
                        name:"内衣"
                    },
                    {
                        name:"礼品箱包"
                    },
                    {
                        name:"饰品配饰"
                    },
                    {
                        name:"鞋类"
                    },
                    {
                        name:"家居"
                    },
                    {
                        name:"数码家电"
                    },
                    {
                        name:"下期预告"
                    },
                ]
            }
        },
        components:{
            ShopContent
        }
    }
</script>

<style lang="less">
    .nav-con{
        .tab{
            font-family: Arial, Helvetica, sans-serif;
            .van-tab{
                color: #666666;
            }
            .van-tab--active{
                color: #fe4070;
            }
        }
    }
</style>