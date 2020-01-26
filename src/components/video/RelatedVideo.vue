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
            <li class="related-video-list-item" v-for="(item, index) in data" :key="index">
                <index-list-item width="80%" :author="item.author" :title="item.title" :url="item.url" :post="item.post" :look-count="item.lookCount"/>
            </li>
        </ul>
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
            /*相关视频数据*/
            data: {
                type: Array,
                default: () => {
                    return [
                        {
                            post: 'https://graduation-cartoon.oss-cn-beijing.aliyuncs.com/imgs/background1.png',
                            url: '',
                            title: 'hello2',
                            author: '机器人1',
                            lookCount: 100
                        },
                        {
                            post: 'https://graduation-cartoon.oss-cn-beijing.aliyuncs.com/imgs/background2.png',
                            url: '',
                            title: 'hello3',
                            author: '机器人1',
                            lookCount: 100
                        },
                        {
                            post: 'https://graduation-cartoon.oss-cn-beijing.aliyuncs.com/imgs/background3.png',
                            url: '',
                            title: 'hello4',
                            author: '机器人1',
                            lookCount: 100
                        },
                        {
                            post: 'https://graduation-cartoon.oss-cn-beijing.aliyuncs.com/imgs/background4.png',
                            url: '',
                            title: 'hello5',
                            author: '机器人1',
                            lookCount: 100
                        }
                    ];
                }
            }
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
