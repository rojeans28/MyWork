<template>
    <div class="settle">
        <div class="header">
            <van-nav-bar 
                :title=this.$route.name 
                @click-left="onClickLeft"
                @click-right="onClickRight"
            >
                <van-icon name="wap-home-o" slot="right" color="#ccc" size="24"></van-icon>
                <van-icon name="arrow-left" slot="left" color="#ccc" size="24"></van-icon> 
            </van-nav-bar>
        </div>
        <Address></Address>
        <WorkDate></WorkDate>
        <ShopInfo></ShopInfo>   
        <Fare></Fare>
        <Footer></Footer>
    </div>
</template>

<script>
import Address from '@/components/settle/address.vue';
import WorkDate from '@/components/settle/work_date.vue';
import ShopInfo from '@/components/settle/shop_info.vue';
import Bill from '@/components/settle/bill.vue';
import Fare from '@/components/settle/fare.vue';
import Footer from '@/components/settle/footer.vue';
    export default {
        methods: {
            onClickRight(){
                this.$router.push({path:"/home/index"});
            },
            onClickLeft(){
                this.$router.go(-1);
            }
        },
        components:{
            Address,
            WorkDate,
            ShopInfo,
            Bill,
            Fare,
            Footer
        }
    }
</script>

<style lang="less" scoped>
</style>