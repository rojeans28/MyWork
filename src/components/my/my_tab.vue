<template>
    <div class="tab">
        <van-tabs v-model="active" animated sticky>
            <van-tab v-for="list in lists" :title="list.name" :to="list.url" :key="list.lists">
                <router-view></router-view>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                active:0,
                lists:[
                    {
                        name:"全部",
                        url:"/order/index"
                    },
                    {
                        name:"待付款",
                        url:"/order/wait_pay"
                    },
                    {
                        name:"待发货",
                        url:"/order/wait_send"
                    },
                    {
                        name:"待收货",
                        url:"/order/wait_confirm"
                    },
                    {
                        name:"待评价",
                        url:"/order/wait_rate"
                    }
                ]
            }
        },
        props:["Factive"],
        created() {
            this.active = this.Factive;
        },
    }
</script>

<style lang="less">
    .tab{
        width: 100%;
    }
</style>