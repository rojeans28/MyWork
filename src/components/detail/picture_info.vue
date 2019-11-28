<template>
    <div>
        <van-tabs v-model="active" title-active-color="#fe4070" line-height="2px">
            <van-tab title="图文详情">
                <PMG></PMG>
            </van-tab>
            <van-tab title="商品参数">
                <Message></Message>
            </van-tab>
            <van-tab title="评价">
                <Pinglun></Pinglun>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
import PMG from './picture_message.vue';
import Message from './message.vue';
import Pinglun from './pinglun.vue';
    export default {
        data() {
            return {
                active:""
            }
        },
        components:{
            PMG,
            Message,
            Pinglun
        }
    }
</script>

<style lang="less" scoped>

</style>