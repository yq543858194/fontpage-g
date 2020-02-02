<template>
    <div class="index-detail">
        <!--动漫简介-->
        <div class="index-detail-introduce-container" v-if="indexDetail !== null">
            <introduce :title="indexDetail.title"
                       :introduce-author="indexDetail.editorName"
                       :avatar="indexDetail.editorAvatar"
                       :look-count="indexDetail.lookCount"
                       :post="indexDetail.url"
                       :author="indexDetail.author"
                       :introduce-content="indexDetail.description"
                       :is-favorite="false"
                       width="83.85%"/>
        </div>
        <!--动漫信息-->
        <div class="index-detail-information-container" v-if="indexDetail !== null">
            <information-panel
                    :information="{
                        type: indexDetail.typeName,
                        area: indexDetail.area,
                        time: indexDetail.time,
                        /*@TODO: label*/
                        label: indexDetail.type,
                        role: null,
                        polt: null
                    }"
                    width="83.85%"/>
        </div>
        <!--动漫视频列表-->
        <div class="index-detail-content-container">
            <index-list type="video" width="83.85%" title="视频" :content="indexVideo" :icon="this.$store.state.baseUrl + '/icons/video.png'" v-if="indexVideo.length !== 0"/>
            <index-list type="cartoon" width="83.85%" title="漫画" :content="indexCartoon" :icon="this.$store.state.baseUrl + '/icons/comic.png'" v-if="indexCartoon.length !== 0"/>
            <index-list type="relatedInformation" width="83.85%" title="相关信息" :content="indexRelatedInformation" :icon="this.$store.state.baseUrl + '/icons/information.png'" v-if="indexRelatedInformation.length !== 0"/>
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
        data () {
            return {
                indexDetail: null,
                indexVideo: [],
                indexCartoon: [],
                indexRelatedInformation: []
            }
        },
        async created() {
            let self = this;
            console.log(self.$route.params.id);
            self.$store.dispatch('showLayout');
            self.$axios.get(self.$store.state.serverBaseUrl + `/api/index/getIndexItem?id=${self.$route.query.id}`)
                .then((res) => {
                    if (res.data.code === 200) {
                        self.indexDetail = res.data.data;
                    } else {
                        self.$store.dispatch('infoDialog', response.data.msg);
                    }
                });
            self.$axios.get(self.$store.state.serverBaseUrl + `/api/video/getAllVideoByIndexId?indexId=${self.$route.query.id}&currentPage=1&size=5`)
                .then((res) => {
                    if (res.data.code === 200) {
                        res.data.data.records.forEach((item) => {
                            self.indexVideo.push(item);
                        });
                    } else {
                        self.$store.dispatch('infoDialog', response.data.msg);
                    }
                });
            self.$axios.get(self.$store.state.serverBaseUrl + `/api/cartoon/getAllCartoonByIndexId?indexId=${self.$route.query.id}&currentPage=1&size=5`)
                .then((res) => {
                    if (res.data.code === 200) {
                        res.data.data.records.forEach((item) => {
                            self.indexCartoon.push(item);
                        });
                    } else {
                        self.$store.dispatch('infoDialog', response.data.msg);
                    }
                });
            self.$axios.get(self.$store.state.serverBaseUrl + `/api/relatedInformation/getAllRelatedInformationByIndexId?indexId=${self.$route.query.id}&currentPage=1&size=5`)
                .then((res) => {
                    if (res.data.code === 200) {
                        res.data.data.records.forEach((item) => {
                            self.indexRelatedInformation.push(item);
                        });
                    } else {
                        self.$store.dispatch('infoDialog', response.data.msg);
                    }
                });
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
