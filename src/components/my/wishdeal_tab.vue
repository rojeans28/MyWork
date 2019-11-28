<template>
    <div>
        <van-tabs v-model="active">
            <van-tab title="在售"><moban></moban></van-tab>
            <van-tab title="即将开始"><moban></moban></van-tab>
            <van-tab title="已结束"><moban></moban></van-tab>
        </van-tabs>
    </div>
</template>

<script>
import moban from './wishdeal_moban.vue';
    export default {
        data() {
            return {
                active:""
            }
        },
        components:{
            moban
        } 
    }
</script>

<style lang="scss" scoped>

</style>