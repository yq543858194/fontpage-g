<template>
    <div class="video-detail">
        <div class="video-detail-video-container">
            <video-item v-if="videoData !== null"
                        :title="videoData.title"
                        :author="videoData.editorName"
                        :avatar="videoData.editorAvatar"
                        :look-count="videoData.lookCount"
                        :url="videoData.url"
                        :post="videoData.post"
                        width="83.85%"/>
        </div>
        <div class="video-detail-comment-container" style="width: 83.85%">
            <video-comment type="video" width="70%"/>
            <related-video width="25%" :current-order="videoData.orderNum" :index-id="videoData.indexId"/>
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
        data () {
            return {
                videoData: null
            }
        },
        created() {
            let self = this;
            self.$store.dispatch('showLayout');
            self.$store.dispatch('setContentId', self.$route.query.id);
            self.$axios.get(self.$store.state.serverBaseUrl + `/api/video/getVideoById?id=${self.$route.query.id}`)
                .then((res) => {
                    if (res.data.code === 200) {
                        self.videoData = res.data.data;
                    } else {
                        self.$store.dispatch('infoDialog', res.data.msg);
                    }
                });
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
