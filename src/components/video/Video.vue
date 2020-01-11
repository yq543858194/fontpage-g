<template>
    <div class="video" :style="{width: width}">
        <!--标题栏-->
        <div class="video-title">
            <!--播放图标-->
            <img :src="this.$store.state.baseUrl + '/icons/flame.png'" alt=""/>
            <!--播放视频标题-->
            <span>正在播放: {{title}}</span>
            <!--更多按钮-->
            <p class="video-title-more right">
                <a href="#">…</a>
            </p>
            <!--列表项观看数量-->
            <p class="video-title-content right">
                <i class="fa fa-eye"/>
                {{lookCount}}
            </p>
            <!--列表项作者-->
            <p class="video-title-content right">
                <img :src="avatar" alt="头像">
                {{author}}
            </p>
        </div>
        <!--播放组件-->
        <div class="video-component">
            <video :src="url"
                   id="myVideo"
                   class="video-js vjs-big-play-centered vjs-fluid"
                   controls
                   preload="auto"
                   width="100%"
                   height="100%"
                   :poster="post"/>
        </div>
        <!--视频操作-->
        <div class="video-operation">
            <!--点赞-->
            <a href="javascript:void(0)">
                <img :src="this.$store.state.baseUrl + '/icons/non-zan.png'" ref="zanIcon" @click="zan"/>
            </a>
            <!--收藏-->
            <a href="javascript:void(0)">
                <img :src="this.$store.state.baseUrl + '/icons/non-heart.png'" ref="favoriteIcon" @click="favorite"/>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "video",
        props: {
            /*播放视频名*/
            title: {
                type: String,
                default: '视频1'
            },
            /*组件宽度*/
            width: {
                type: String,
                default: '1610px'
            },
            /*视频作者*/
            author: {
                type: String,
                default: '小机器人'
            },
            /*作者头像地址*/
            avatar: {
                type: String,
                default: 'http://localhost:8080/imgs/avatar.png'
            },
            /*观看数*/
            lookCount: {
                type: Number,
                default: 100
            },
            /*视频地址*/
            url: {
                type: String,
                default: 'http://localhost:8080/imgs/video.mp4'
            },
            /*视频海报*/
            post: {
                type: String,
                default: 'http://localhost:8080/imgs/background1.png'
            },
            /*赞状态*/
            isZan: {
                type: Boolean,
                default: false
            },
            /*收藏状态*/
            isFavorite: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                /*赞状态*/
                zanStatus: false,
                /*收藏状态*/
                favoriteStatus: false
            }
        },
        mounted () {
            this.zanStatus = this.isZan;
            this.favoriteStatus = this.isFavorite;
            if (this.zanStatus) {
                this.$refs.zanIcon.src = `${this.$store.state.baseUrl}/icons/zan.png`;
            }
            if (this.favoriteStatus) {
                this.$refs.favoriteIcon.src = `${this.$store.state.baseUrl}/icons/heart.png`
            }
        },
        methods: {
            /**
             * 点赞操作
             */
            zan () {
                if (this.zanStatus) {
                    this.$refs.zanIcon.src = `${this.$store.state.baseUrl}/icons/non-zan.png`;
                } else {
                    this.$refs.zanIcon.src = `${this.$store.state.baseUrl}/icons/zan.png`;
                }
                this.zanStatus =! this.zanStatus;
            },
            /**
             * 收藏操作
             */
            favorite () {
                if (this.favoriteStatus) {
                    this.$refs.favoriteIcon.src = `${this.$store.state.baseUrl}/icons/non-heart.png`;
                } else {
                    this.$refs.favoriteIcon.src = `${this.$store.state.baseUrl}/icons/heart.png`;
                }
                this.favoriteStatus =! this.favoriteStatus;
            }
        }
    }
</script>

<style scoped lang="less">
    @import "../../assets/less/variable.less";

    .video {
        margin: 20px auto;
        &-title {
            margin: 20px 0;
            padding-left: 20px;
            text-align: left;
            img {
                height: 40px;
                vertical-align: top;
            }
            span {
                font-size: @font-size-title-big;
                color: @color-title-big;
                line-height: 40px;
                vertical-align: center;
                padding-left: 7px;
            }
            &-content {
                color: @color-addition;
                font-size: @font-size-content;
                text-align: left;
                line-height: 40px;
                margin: 5px 10px 5px 30px;
                img {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                }
            }
            &-more {
                color: @color-title-small;
                font-size: @font-size-content;
                text-align: left;
                line-height: 30px;
                font-weight: bolder;
                margin: 5px 10px 5px 30px;
            }
        }
        &-component {
            width: 100%;
            video {
                height: 35vw;
            }
        }
        &-operation {
            width: 100%;
            height: 30px;
            a {
                float: left;
                width: 30px;
                margin: 20px 25px;
                img {
                    width: 100%;
                }
                :after {
                    clear: both;
                }
            }
        }
    }
</style>
