<template>
    <div>

        <contentTabOne></contentTabOne>
        <indexFooter></indexFooter>
    </div>
</template>

<script>
import indexFooter from "@/components/home/index_footer.vue";
import contentTabOne from "@/components/home/index_content_1_tab.vue";
    export default {
        components:{
            indexFooter,
            contentTabOne
        }
    }
</script>

<style lang="scss" scoped>

</style>