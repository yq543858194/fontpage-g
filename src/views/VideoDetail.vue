<template>
    <div class="video-detail">
        <div class="video-detail-video-container">
            <video-item width="83.85%" title="hello1"/>
        </div>
        <div class="video-detail-comment-container" style="width: 83.85%">
            <video-comment width="70%"/>
            <related-video width="25%"/>
        </div>
    </div>
</template>

<script>
    import VideoItem from '../components/video/Video'
    import VideoComment from '../components/common/Comment'
    import RelatedVideo from '../components/video/RelatedVideo'

    export default {
        name: "VideoDetail",
        components: {
            VideoItem,
            VideoComment,
            RelatedVideo
        },
        created() {
            this.$store.dispatch('showLayout')
        }
    }
</script>

<style scoped lang="less">
    @import "../assets/less/variable.less";

    .video-detail {
        width: 100%;
        background-color: @background-color-main;
        &-video-container {
            width: 100%;
            padding: 20px 0;
        }
        &-comment-container {
            margin: 0 auto;
            padding: 20px 0;
            overflow: hidden;
        ;
        }
    }
</style>
