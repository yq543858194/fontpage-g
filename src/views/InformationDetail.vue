<template>
    <div class="information-detail">
        <div class="information-detail-information-container">
            <information :title="relatedInformation.title"
                         :author="relatedInformation.editorName"
                         :avatar="relatedInformation.editorAvatar"
                         :look-count="relatedInformation.lookCount"
                         :content="relatedInformation.content"
                         width="83.85%"/>
        </div>
        <div class="information-detail-comment-container">
            <comment type="relatedInformation" width="83.85%" :is-center="true"/>
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
        },
        data () {
            return {
                relatedInformation: {
                    title: '',
                    editorName: '',
                    editorAvatar: '',
                    lookCount: 0,
                    content: ''
                }
            }
        },
        mounted() {
            let self = this;
            self.$store.dispatch("setContentId", self.$route.query.id);
            self.$axios.get(self.$store.state.serverBaseUrl + `/api/relatedInformation/getAllRelatedInformationById?id=${self.$route.query.id}`)
                .then(res => {
                    if (res.data.code === 200) {
                        self.relatedInformation = res.data.data;
                    } else {
                        self.$store.dispatch('infoDialog', response.data.msg);
                    }
                });
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
