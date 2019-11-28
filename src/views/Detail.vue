<template>
    <div style="width:100%">
        <!-- 头部导航 -->
        <DetailHeader></DetailHeader>
        <!-- 轮播图 -->
        <Banner></Banner>
        <!-- 商品信息 -->
        <Info></Info>
        <!-- 评论 -->
        <Pinglun></Pinglun>
        <!-- 打开店铺 -->
        <OpenShop></OpenShop>
        <!-- 图片详情 -->
        <PictureInfo></PictureInfo>
        <!-- 底部 -->
        <Bottom></Bottom>
    </div>
</template>

<script>
import DetailHeader from '@/components/detail/header.vue';
import Banner from '@/components/detail/banner.vue';
import Info from '@/components/detail/info.vue';
import Pinglun from '@/components/detail/pinglun.vue';
import OpenShop from '@/components/detail/openShop.vue';
import PictureInfo from '@/components/detail/picture_info.vue';
import Bottom from '@/components/detail/bottom_btn.vue';
    export default {

        components:{
            DetailHeader,
            Info,
            Banner,
            Pinglun,
            OpenShop,
            PictureInfo,
            Bottom
        } 
    }
</script>

<style lang="less" scoped>

</style>