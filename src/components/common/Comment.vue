<template>
    <div class="comment" :class="!isCenter?'left':''" :style="{width: width, background: background, marginBottom: isPadding ? '60px': '0', margin: isCenter ? '0 auto' : '0'}">
        <div class="comment-title" v-if="showTitle">
            <!--评论图标-->
            <img :src="this.$store.state.baseUrl + '/icons/comment.png'" alt=""/>
            <!--播放视频标题-->
            <span>评论</span>
        </div>
        <div class="comment-content">
            <!--排序方式按钮-->
            <div class="comment-content-sort" @click="sortSwitch">
                <img ref="sortIcon" :src="this.$store.state.baseUrl + '/icons/sort-up.png'" alt="">
                <span ref="sortText">按点赞数量排序</span>
            </div>
            <!--评论列表-->
            <ul class="comment-content-list">
                <!--评论列表项-->
                <li class="comment-content-list-item" v-for="(item, index) in comments" :key="index">
                    <!--评论者头像-->
                    <div class="comment-content-list-item-avatar">
                        <img :src="item.avatar" alt="头像">
                    </div>
                    <div class="comment-content-list-item-text">
                        <!--评论者昵称-->
                        <h4>{{item.name}}</h4>
                        <!--评论内容-->
                        <div class="comment-content-list-item-text-content" v-html="item.content"/>
                        <!--点赞人数/点赞按钮-->
                        <span class="right point" @click="zan(index, item.zanCount)"><i ref="commentZanIcon" class="fa fa-thumbs-o-up"/><span ref="commentZanText">{{item.zanCount}}</span></span>
                    </div>
                    <!--分割线-->
                    <div class="comment-content-list-item-split" v-if="index !== comments.length - 1"></div>
                </li>
            </ul>
        </div>
        <!--评论输入组件-->
        <div class="comment-editor">
            <editor :is-padding="isPadding"/>
        </div>
    </div>
</template>

<script>
    import Editor from "../Editor";

    export default {
        name: "Comment",
        props: {
            /*组件宽度*/
            width: {
                type: String,
                default: '1610px'
            },
            /*评论列表*/
            comments: {
                type: Array,
                default () {
                    return [
                        {
                            /*评论者头像*/
                            avatar: 'https://graduation-cartoon.oss-cn-beijing.aliyuncs.com/imgs/avatar.png',
                            /*评论者昵称*/
                            name: '机器人一号',
                            /*评论内容*/
                            content: '这是评论内容！太好看了！',
                            /*点赞数量*/
                            zanCount: 100
                        },
                        {
                            /*评论者头像*/
                            avatar: 'https://graduation-cartoon.oss-cn-beijing.aliyuncs.com/imgs/avatar.png',
                            /*评论者昵称*/
                            name: '机器人一号',
                            /*评论内容*/
                            content: '这是评论内容！太好看了！',
                            /*点赞数量*/
                            zanCount: 100
                        }
                    ]
                }
            },
            /*是否显示标题*/
            showTitle: {
                type: Boolean,
                default: true
            },
            /*背景颜色*/
            background: {
                type: String,
                default: 'transparent'
            },
            /*是否有Padding*/
            isPadding: {
                type: Boolean,
                default: false
            },
            /*是否居中*/
            isCenter: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                /*排序状态(0代表按点赞数量排序，1代表按时间排序)*/
                sortStatus: 0,
                /*点赞状态*/
                zanStatus: []
            }
        },
        created() {
            for (let i = 0; i < this.comments.length; i ++) {
                this.zanStatus[i] = 0
            }
        },
        methods: {
            /**
             * 排序切换事件
             */
            sortSwitch () {
                if (this.sortStatus === 0) {
                    this.$refs.sortIcon.src = `${this.$store.state.baseUrl}/icons/sort-down.png`;
                    this.$refs.sortText.innerHTML = '按时间排序';
                    this.sortStatus = 1;
                } else {
                    this.$refs.sortIcon.src = `${this.$store.state.baseUrl}/icons/sort-up.png`;
                    this.$refs.sortText.innerHTML = '按点赞数量排序';
                    this.sortStatus = 0;
                }
            },
            /**
             * 评论点赞事件
             * @param index 点赞操作的评论id
             * @param zanCount 点赞数
             */
            zan (index, zanCount) {
                if (this.zanStatus[index] === 0) {
                    this.zanStatus[index] = 1;
                    this.$refs.commentZanIcon[index].classList.remove("fa-thumbs-o-up");
                    this.$refs.commentZanIcon[index].classList.add("fa-thumbs-up");
                    this.$refs.commentZanText[index].innerHTML = zanCount + 1;
                } else {
                    this.zanStatus[index] = 0;
                    this.$refs.commentZanIcon[index].classList.remove("fa-thumbs-up");
                    this.$refs.commentZanIcon[index].classList.add("fa-thumbs-o-up");
                    this.$refs.commentZanText[index].innerHTML = zanCount;
                }
            }
        },
        components: {
            Editor
        }
    }
</script>

<style scoped lang="less">
    @import "../../assets/less/variable.less";

    .comment {
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
        &-content {
            background-color: #ffffff;
            padding: 20px;
            &-sort {
                text-align: left;
                img {
                    width: 30px;
                    height: 30px;
                    vertical-align: top;
                }
                span {
                    line-height: 30px;
                    vertical-align: center;
                    font-size: @font-size-addition;
                    color: @color-addition;
                }
            }
            &-list {
                padding: 10px 0;
                &-item {
                    &-avatar {
                        display: inline-block;
                        width: 10%;
                        margin-right: 2%;
                        vertical-align: top;
                        img {
                            width: 70%;
                            border-radius: 50%;
                        }
                    }
                    &-text {
                        display: inline-block;
                        width: 88%;
                        text-align: left;
                        h4 {
                            margin: 0;
                        }
                        &-content {
                            margin: 10px 0;
                            font-size: @font-size-content;
                            color: @color-content;
                        }
                        span {
                            color: @color-addition;
                            margin-right: 20px;
                            i {
                                margin-right: 5px;
                            }
                        }
                    }
                    &-split {
                        margin: 10px auto;
                        width: 98%;
                        height: 1px;
                        background-color: @color-addition;
                    }
                }
            }
        }
        &-editor {
            margin-top: 15px;
        }
    }
</style>
