<template>
    <div>
        <div v-show=" this.$route.name !='首页'">
            <van-nav-bar 
                :title=this.$route.name 
                @click-left="onClickLeft"
                @click-right="onClickRight"
            >
                <van-icon name="wap-home-o" slot="right" color="#ccc" size="24"></van-icon>
                <van-icon name="arrow-left" slot="left" color="#ccc" size="24"></van-icon> 
            </van-nav-bar>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            onClickLeft(){
                this.$router.go(-1);
            },
            onClickRight(){
                this.$router.push({
                    path:"/home/index"
                })
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>