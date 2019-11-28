<template>
    <div class="index-tap">
        <div class="tab">
            <van-tabs v-model="active" animated sticky>
                <van-tab v-for="items in lists" :title="items.name" :to="items.url" >
                    <router-view :key="$route.fullPath"></router-view>
                </van-tab>
            </van-tabs>
        </div>
        
    </div>
</template>

<script>
    export default {
        data() {
            return {
                active:0,
                lists:[
                    {
                        name:"首页",
                        url:"/home/index"
                    },
                    {
                        name:"极速免税店",
                        url:"/home/fast"
                    },
                    {
                        name:"母婴",
                        url:"/home/mother"
                    },
                    {
                        name:"轻奢",
                        url:"/home/price"
                    },
                    {
                        name:'名品特卖',
                        url:"/home/brand"
                    }
                ]
            }
        },
        created() {
            this.active = this.TabSelect;
        },
        props:["TabSelect"],
        methods: {
            // isTabSelect(){
            //     if(this.$route.fullPath == "/home/index"){
            //         this.active = 0;
            //     }else if(this.$route.fullPath == "/home/fast"){
            //         this.active = 1;
            //     }else if(this.$route.fullPath == "/home/mother"){
            //         this.active = 2;
            //     }else if(this.$route.fullPath == "/home/price"){
            //         this.active = 3;
            //     }else if(this.$route.fullPath == "/home/brand"){
            //         this.active = 4;
            //     }
            // }
        },
        watch: {
            // "$route.path":function(){
            //     this.isTabSelect();
            // }
        },
    }
</script>

<style lang="less">
.index-tap{
    .tab{
        font-family: Arial, Helvetica, sans-serif;
        .van-tab{
            color: #666666;
            
        }
        .van-tab--active{
            color: #fe4070;
        }
    }
}
</style>