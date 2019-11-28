<template>
    <div>
        <!-- tab切换栏 start -->
        <div class="tab-title">
            <!-- <span class="title_item tab_click" @click="flag=true">今日10点上新</span>
            <span class="title_item"  @click="flag=false" >明日10点预告</span> -->
            <van-tabs v-model="active" @click="onClick" line-height="0">
                <van-tab title="今日10点上新"></van-tab>
                <van-tab title="明日10点预告"></van-tab>
            </van-tabs>
        </div>
        <!-- tab切换栏 end -->
        <contentOne v-show="flag"></contentOne>
        <contentTwo v-show="!flag"></contentTwo>
    </div>
</template>

<script>
import contentOne from "@/components/home/index_content_1"
import contentTwo from "@/components/home/index_content_2"
export default {
    components:{
        contentOne,
        contentTwo
    },
    data() {
        return {
            flag:true,
            active:""
        }
    },
    methods: {
        onClick(title){
            if(title == 0){
                this.flag = true;
            }else{
                this.flag = false;
            }
        }
    },
}
</script>

<style lang="less">
    @mainColor:#FFFFFF;
    @navColor:#fe4070;
    @fontSize:14px;
    .tab-title{
        height: 2.34667rem;
        line-height: 2.34667rem;
        font-size: 14px;
        color: #666;
        background-color: @mainColor;
        .title_item{
            display: inline-block;
            width: 9.86667rem;
            font-size: 14px;
            text-align: center;
        }
        span.tab_click{
            color: @navColor;
        }
    }
    // tab切换栏 end

</style>