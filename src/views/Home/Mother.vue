<template>
    <div>
        <Discount></Discount>
        <Rexiao></Rexiao>
        <Jingxuan></Jingxuan>
        <Fengqiang></Fengqiang>
        <Footer></Footer>
    </div>
</template>

<script>
import Discount from '@/components/mother/discount.vue';
import Rexiao from '@/components/mother/rexiao.vue';
import Jingxuan from '@/components/mother/jingxuantuijian.vue';
import Fengqiang from '@/components/mother/fengqiangzhuanchang.vue';
import Footer from '@/components/home/index_footer.vue';
    export default {
        components:{
            Discount,
            Rexiao,
            Jingxuan,
            Fengqiang,
            Footer
        }
    }
</script>

<style lang="less" scoped>
    @mainColor:#FFFFFF;
    @navColor:#fe4070;
    @fontSize:14px;
    .main{
        width: 100%;
        display: block;
        // tab切换栏 start
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

        // 商品栏 start
        .online-wrap{
            width: 100%;
            .product-item{
                width: 100%;
                margin-bottom: 8px;
                display: block;
                .my-item{
                    height:6.93333rem;
                    background-color: @mainColor;
                    overflow: hidden;
                    position: relative;
                    img{
                        height: 100%;
                    }
                }
            }
        }
        // 商品栏 end
    }
</style>