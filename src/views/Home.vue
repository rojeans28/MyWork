<template>
    <div class="home">
        <indexAdcert></indexAdcert>
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
        <indexSearch></indexSearch>
        <indexTap :TabSelect="active"></indexTap>
        <BackTop v-show="isFlag"></BackTop>
        <!-- <h1>这是首页</h1> -->
    </div>
</template>

<script>
import indexAdcert from "@/components/home/index_adcert.vue";
import indexSearch from "@/components/home/index_search.vue";
import indexTap from "@/components/home/index_tap.vue";
import BackTop from '@/components/fast/back-top.vue';
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
        components:{
            indexAdcert,
            indexSearch,
            indexTap,
            BackTop
        },
        created() {
            if(this.$route.fullPath == "/home/index"){
                this.active = 0;
            }else if(this.$route.fullPath == "/home/fast"){
                this.active = 1;
            }else if(this.$route.fullPath == "/home/mother"){
                this.active = 2;
            }else if(this.$route.fullPath == "/home/price"){
                this.active = 3;
            }else if(this.$route.fullPath == "/home/brand"){
                this.active = 4;
            }
        },
        data(){
            return{
                lists:[
                    {
                        name:"123",
                        list:[
                            {
                                name:"321"
                            }
                        ]
                    }
                ],
                flag:false,
                active:0
            }
        },
        computed:{
            isFlag(){
                if(this.$route.name == "极速免税店" || this.$route.name == "名品特卖"){
                    return true;
                }else{
                    return false;
                }
            },
            isSelect(){
                if(this.$route.fullPath == "/home/index"){
                    this.active = 0;
                }else if(this.$route.fullPath == "/home/fast"){
                    this.active = 1;
                }else if(this.$route.fullPath == "/home/mother"){
                    this.active = 2;
                }else if(this.$route.fullPath == "/home/price"){
                    this.active = 3;
                }else if(this.$route.fullPath == "/home/brand"){
                    this.active = 4;
                }
            }
        },
        watch: {
            "$route.path":function(newValue){
                this.isSelect();
            }
        },
    }
</script>

<style lang="less" scoped>
    .home{
        width: 100%;
    }
</style>