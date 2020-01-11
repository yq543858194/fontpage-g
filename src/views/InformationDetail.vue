<template>
    <div class="information-detail">
        <div class="information-detail-information-container">
            <information width="83.85%"/>
        </div>
        <div class="information-detail-comment-container">
            <comment width="83.85%" :is-center="true"/>
        </div>
    </div>
</template>

<script>
    import Information from "../components/information/Information";
    import Comment from "../components/common/Comment";

    export default {
        name: "InformationDetail",
        components: {
            Comment,
            Information
        }
    }
</script>

<style scoped lang="less">
    @import "../assets/less/variable.less";

    .information-detail {
        width: 100%;
        background-color: @background-color-main;
        &-information-container {
            width: 100%;
            padding: 20px 0;
        }
        &-comment-container {
            width: 100%;
        }
    }
</style>
