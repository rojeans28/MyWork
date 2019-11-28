<template>
    <div style="height:100%">
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
        <div class="address">
            <van-address-list
                v-model="chosenAddressId"
                v-show="this.$store.state.Address.flag"
                :list="this.$store.state.Address.list"
                @add="onAdd"
                @edit="onEdit"
            />
            <van-address-list
                v-model="chosenAddressId"
                v-show="!this.$store.state.Address.flag"
                :list="this.$store.state.Address.list"
                @add="goSettle"
                @edit="onEdit"
                add-button-text="确认选择"
                
            />
        </div>
    </div>
</template>

<script>
import { AddressList } from 'vant';
    export default {
        data() {
            return {
                chosenAddressId: '1',
            }
        },
        created() {},
        methods: {
            onAdd() {
                this.$router.push({
                    path:"/createaddress"
                })
            },
            onEdit() {
                this.$store.state.Address.chosenAddressId = this.chosenAddressId;
                this.$store.state.Address.list.filter(items=>{
                    if(this.chosenAddressId == items.id){
                        this.$store.commit("addFunc",{
                            id:items.id,
                            name:items.name,
                            tel:items.tel,
                            address:items.address,
                            area:items.area,
                            specific:items.specific
                        })
                    }
                })
                this.$router.push({
                    path:"/changeaddress"
                })
            },
            onClickLeft(){
                this.$router.go(-1);
            },
            onClickRight(){
                this.$router.push({
                    path:"/home/index"
                })
            },
            goSettle(){
                if(this.$route.query.name == "settle"){
                    this.$store.state.Address.list.filter(items=>{
                        if(this.chosenAddressId == items.id){
                            this.$store.commit("addFunc",{
                                id:items.id,
                                name:items.name,
                                tel:items.tel,
                                address:items.address
                            })
                        }
                    })
                }
                this.$router.push({
                    path:"/settle"
                })
            },
            fetchData(){
                
            }
        },
        created() {
        },
        watch: {
            $route:"fetchData"
        },
    }
</script>

<style lang="less" scoped>
    .address{
        .van-address-list{
            padding-bottom: 0;
            height: 100%;
        }
    }
</style>