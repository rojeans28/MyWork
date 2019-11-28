<template>
    <div>
        <img src="../assets/h5_down.png" alt="">
    </div>
</template>

<script>
    export default {
        data() {
            return {
                num:2,
                timer:null
            }
        },
        created() {
            this.timer = setInterval(()=>{
                if(this.num == 0 ){
                    this.$router.push({
                        path:"/home/index"
                    })
                }else{
                    this.num -- ;
                }
            },1000)
        },
        beforeDestroy() {
            clearInterval(this.timer);
        },
    }
</script>

<style lang="less" scoped>
    img{
        width: 100%;
    }
</style>