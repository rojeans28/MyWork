<template>
    <div>
        <van-tabs v-model="active">
            <van-tab title="未使用"><moban></moban></van-tab>
            <van-tab title="已使用"><moban></moban></van-tab>
            <van-tab title="已过去"><moban></moban></van-tab>
        </van-tabs>
    </div>
</template>

<script>
import moban from './moban.vue';
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