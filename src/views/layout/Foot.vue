<template>
    <div class="foot">
        <!--页尾链接区-->
        <div class="foot-link">
            <a href="#" class="foot-link-item">关于我们</a>
            <a href="#" class="foot-link-item">联系我们</a>
            <a href="#" class="foot-link-item">反馈与建议</a>
            <a href="#" class="foot-link-item">加入我们</a>
        </div>
        <!--页尾声明区-->
        <p class="foot-statement">该网站只用于毕业设计，没有任何商业用途</p>
    </div>
</template>

<script>
    export default {
        name: "Foot"
    }
</script>

<style scoped lang="less">
    @import "../../assets/less/variable.less";

    .foot {
        width: 100%;
        background-color: @background-color-footer;
        &-link {
            width: 100%;
            display: flex;
            justify-content: space-around;
            padding: 10px 0;
            &-item {
                font-size: @font-size-content;
                color: @font-size-title-small;
                transition: color .5s ease-in-out;
                :hover {
                    color: @color-link-hover;
                }
            }
        }
        &-statement {
            width: 100%;
            padding: 10px 0;
            text-align: center;
            font-size: @font-size-content;
            color: @color-title-small;
        }
    }
</style>
