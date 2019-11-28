<template>
    <div>
        <!-- <h1>这是购物车页面</h1> -->
        <carHeader />
        <carContent></carContent>
    </div>
</template>

<script>
import carHeader from "@/components/car/car_header.vue";
import carContent from "@/components/car/car_content.vue";
    export default {
        components:{
            carHeader,
            carContent
        }
    }
</script>

<style lang="less" scoped>
    
</style>