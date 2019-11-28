<template>
    <div>
        <div v-show=" this.$route.name !='首页'">
            <van-nav-bar 
                title="我的订单"
                @click-left="onClickLeft"
                @click-right="onClickRight"
            >
                <van-icon name="wap-home-o" slot="right" color="#ccc" size="24"></van-icon>
                <van-icon name="arrow-left" slot="left" color="#ccc" size="24"></van-icon> 
            </van-nav-bar>
        </div>
        <Toptab :Factive="active"></Toptab>
    </div>
</template>
<script>
import Toptab from '@/components/my/my_tab.vue';
export default {
    data() {
        return {
            active:0
        }
    },
    components:{
        Toptab
    },
    methods: {
        onClickLeft(){
            this.$router.go(-1);
        },
        onClickRight(){
            this.$router.push({
                path:"/home/index"
            })
        },
    },
    computed: {
        isOrder(){
            if(this.$route.fullPath == "/order/index"){
                this.active = 0;
            }else if(this.$route.fullPath == "/order/wait_pay"){
                this.active = 1;
            }else if(this.$route.fullPath == "/order/wait_send"){
                this.active = 2;
            }else if(this.$route.fullPath == "/order/wait_confirm"){
                this.active = 3;
            }else if(this.$route.fullPath == "/order/wait_rate"){
                this.active = 4;
            }
        }
    },
    created() {
        if(this.$route.fullPath == "/order/index"){
            this.active = 0;
        }else if(this.$route.fullPath == "/order/wait_pay"){
            this.active = 1;
        }else if(this.$route.fullPath == "/order/wait_send"){
            this.active = 2;
        }else if(this.$route.fullPath == "/order/wait_confirm"){
            this.active = 3;
        }else if(this.$route.fullPath == "/order/wait_rate"){
            this.active = 4;
        }
    },
    watch: {
        "$route.path":function(newValue){
            this.isOrder();
        }
    },

}
</script>