<template>
    <div>
        <ul class="tuwen-c product-props">
            <li>
                <span class="props-name">商品名称</span>
                <span class="props-content">素萃 额纹清抬头纹贴 淡化额头纹  补水提亮</span>
            </li>
            <li>
                <span class="props-name">品牌</span>
                <span class="props-content">素萃</span>
            </li>
            <li>
                <span class="props-name">注意事项</span>
                <span class="props-content">因个人肤质不同，如有不适请立即停止使用</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
.tuwen-c{
    min-height: 580px;
}
.product-props{
    padding:12px;
    padding-bottom: 22px;
    margin-bottom: 8px;
    line-height: 17px;
    box-sizing:border-box;
    background-color: #fff;
    li{
        margin-top: 10px;
        font-size: 14px;
        .props-name{
            float: left;
            color: #999;
            display: block;
            width: 92px;
        }
        .props-content{
            color: #333;
            display: inline-block;
            width: 259px;
        }
    }

}
</style>