<template>
    <div>
        <div class="time-select-box">
            <span class="calendar-icon"></span>
            <span class="time-text">工作日/双休/节假日均可收货</span>
            <span class="right-arrow" style="visibility: visible;"></span>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
.time-select-box{
    background-color: #fff;
    margin-top: 8px;
    padding: 14px 12px;
    line-height: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .calendar-icon{
        width: 16px;
        height: 16px;
        background: url("../../assets/images/rili.png") no-repeat center center;
        background-size: 100% 100%;
        display: block;
    }
    .time-text{
        flex: 1;
        height: 15px;
        display: block;
        font-size: 12px;
        margin-left: 12px;
    }
    .right-arrow{
        width: 5.5px;
        height: 9px;
        background: url("../../assets/images/shop-right.png");
        background-size: 100% 100%;
        display:  block;
    }
}    
</style>