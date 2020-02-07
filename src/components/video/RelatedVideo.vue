<template>
    <div class="related-video right" :style="{width: width}">
        <!--标题栏-->
        <div class="related-video-title">
            <!--图标-->
            <img :src="this.$store.state.baseUrl + '/icons/video.png'" alt=""/>
            <!--标题-->
            <span>相关视频</span>
        </div>
        <!--相关视频列表-->
        <ul class="related-video-list">
            <li class="related-video-list-item" v-for="(item, index) in relatedList" :key="index">
                <index-list-item width="80%" type="video" :post="item.post" :url="item.id" :author="item.editorName" :title="item.title" :look-count="item.lookCount" v-bind:key="index"/>
            </li>
        </ul>
        <!--分页组件-->
        <div class="comment-content-pagination">
            <el-pagination layout="prev, pager, next" :total="totalCount" :page-size="size" @current-change="currentChange"/>
        </div>
    </div>
</template>

<script>
    import IndexListItem from "../common/IndexListItem";

    export default {
        name: "relatedVideo",
        props: {
            /*组件宽度*/
            width: {
                type: String,
                default: '1610px'
            },
            /*当前集数*/
            currentOrder : {
                type: Number,
                default: 0
            },
            /*主页详情id*/
            indexId: {
                type: String
            }
        },
        data () {
            return {
                /*相关视频列表*/
                relatedList: [],
                /*当前页*/
                currentPage: 0,
                /*总信息数*/
                totalCount: 0,
                /*每页信息数*/
                size: 3
            }
        },
        methods: {
            /**
             * 更新信息
             */
            updateList () {
                let self = this;
                self.relatedList = [];
                self.$axios.get(self.$store.state.serverBaseUrl + `/api/video/getAllVideoByIndexId?indexId=${self.indexId}&currentPage=${self.currentPage}&size=${self.size}&currentOrder=${self.currentOrder}`)
                    .then((res) => {
                        if (res.data.code === 200) {
                            self.totalCount = res.data.data.total;
                            res.data.data.records.forEach((item) => {
                                self.relatedList.push(item);
                            });
                        } else {
                            self.$store.dispatch('infoDialog', response.data.msg);
                        }
                    });
            },
            /**
             * 改变当前页面
             * @param current
             */
            currentChange (current) {
                this.currentPage = current;
                this.updateList();
            }
        },
        created() {
            this.updateList();
        },
        components: {
            IndexListItem
        }
    }
</script>

<style scoped lang="less">
    @import "../../assets/less/variable.less";

    .related-video {
        &-title {
            width: 100%;
            margin: 20px 0;
            text-align: left;
            img {
                height: 25px;
                vertical-align: top;
            }
            span {
                font-size: @font-size-title-small;
                color: @color-title-big;
                line-height: 25px;
                vertical-align: center;
                padding-left: 7px;
            }
        }
        &-list {
            &-item {
                margin: 10px auto;
            }
        };
    }
</style>
