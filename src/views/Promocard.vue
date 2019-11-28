<template>
    <div>
        <van-nav-bar 
            left-arrow 
            @click-left="onClickLeft"
        />
        <Tabber></Tabber>
    </div>
</template>

<script>
import Tabber from '@/components/my/promocard_tab.vue'
    export default {
        data() {
            return {
            }
        },
        components:{
            Tabber
        },
        methods: {
            onClickLeft(){
                console.log("!23");
                this.$router.go(-1);
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>