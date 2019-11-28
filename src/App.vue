<template>
  <div id="app">
        <router-view :key="$route.fullPath"></router-view>
        <van-tabbar v-model="active" v-show="showactive">
            <van-tabbar-item
                replace
                to="/home/index"
                icon="wap-home-o"
            >首页</van-tabbar-item>
            <van-tabbar-item 
                replace
                icon="friends-o"
                to="/shop"
            >拼团</van-tabbar-item>
            <van-tabbar-item
                replace 
                icon="shopping-cart-o"
                to="/car"
                :info="isNum"
            >购物车</van-tabbar-item>
            <van-tabbar-item 
                replace
                icon="user-o"
                to="/my"
            >我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
export default {
    data() {
      return {
          active:0,
          showactive:false
      }
    },
    computed: {
        isNum(){
            if(this.$store.state.Cart.num == 0){
                return "";
            }else{
                return this.$store.state.Cart.num;
            }
        },
    },
    created() {
        // if(localStorage.one){
        //     this.$router.push({
        //         path:"/advert"
        //     })
        // }else{
        //     localStorage.one = true;
        // }
        console.log(this.$route);
        if(this.$route.path == "/advert" || this.$route.path == "/pilot" || this.$route.path == "/detail" || this.$route.path == "/settle" || this.$route.path == "/ChangeAddress" || this.$route.path == "/createaddress"){
            this.showactive = false;
        }else{
            this.showactive = true;
        }
    },
    methods: {
        isSelect(){
            if(this.$route.fullPath == "/home/index"){
                this.active = 0;
            }else if(this.$route.fullPath == "/shop"){
                this.active = 1;
            }else if(this.$route.fullPath == "/car"){
                this.active = 2;
            }else if(this.$route.fullPath == "/my"){
                this.active = 3;
            }
        }
    },
    watch: {
      "$route.path":function(newValue){
          this.isSelect();
          if(newValue == "/pilot" || 
             newValue == "/advert" || 
             newValue == "/detail"||
             newValue == "/settle" || 
             newValue == "/settle" || 
             newValue == "/ChangeAddress" || 
             newValue == "/createaddress"||
             newValue == "/order/wait_pay"||
             newValue == "/order/index"||
             newValue == "/order/wait_send"||
             newValue == "/order/wait_confirm"||
             newValue == "/order/wait_rate"||
             newValue == "/register"||
             newValue == "/login"||
             newValue == "/money"){
              this.showactive = false;
          }else{
              this.showactive = true;
          }
      }
    },
}
</script>

<style lang="less">
    @mainColor:#FFFFFF;
    @navColor:#fe4070;
    @fontSize:14px;
    #app{
        width: 100%;
        // overflow-x: hidden;
        // overflow-y: auto;
        background-color:#f0f0f0; 
        .van-tabbar--fixed{
            margin-top: 52px;
        }
    }
</style>
