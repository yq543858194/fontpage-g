<template>
    <div class="index-detail">
        <!--动漫简介-->
        <div class="index-detail-introduce-container">
            <introduce width="83.85%"/>
        </div>
        <!--动漫信息-->
        <div class="index-detail-information-container">
            <information-panel width="83.85%"/>
        </div>
        <!--动漫视频列表-->
        <div class="index-detail-content-container">
            <index-list width="83.85%" title="视频" :icon="this.$store.state.baseUrl + '/icons/video.png'"/>
            <index-list width="83.85%" title="漫画" :icon="this.$store.state.baseUrl + '/icons/comic.png'"/>
            <index-list width="83.85%" title="相关信息" :icon="this.$store.state.baseUrl + '/icons/information.png'"/>
        </div>
    </div>
</template>

<script>
    import Introduce from "../components/index/Introduce";
    import InformationPanel from "../components/index/InformationPanel";
    import IndexList from "../components/common/IndexList";

    export default {
        name: "IndexDetail",
        components: {
            Introduce,
            IndexList,
            InformationPanel
        },
        created() {
            this.$store.dispatch('showLayout')
        }
    }
</script>

<style scoped lang="less">
    @import "../assets/less/variable.less";

    .index-detail {
        width: 100%;
        background-color: @background-color-main;
        &-introduce-container {
            width: 100%;
            padding: 20px 0 0 0;
        }
        &-information-container {
            width: 100%;
            padding: 0;
        }
        &-content-container {
            width: 100%;
        }
    }
</style>
