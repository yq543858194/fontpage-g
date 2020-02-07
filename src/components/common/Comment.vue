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
                <li class="comment-content-list-item" v-for="(item, index) in commentList" :key="index">
                    <!--评论者头像-->
                    <div class="comment-content-list-item-avatar">
                        <img :src="item.userAvatar" alt="头像">
                    </div>
                    <div class="comment-content-list-item-text">
                        <!--评论者昵称-->
                        <h4>{{item.userName}}</h4>
                        <!--评论内容-->
                        <div class="comment-content-list-item-text-content" v-html="item.content"/>
                        <!--点赞人数/点赞按钮-->
                        <span class="right point" @click="zan(index, item.zanCount)"><i ref="commentZanIcon" class="fa fa-thumbs-o-up"/><span ref="commentZanText">{{item.zanCount}}</span></span>
                    </div>
                    <!--分割线-->
                    <div class="comment-content-list-item-split" v-if="index !== commentList.length - 1"></div>
                </li>
            </ul>
            <!--分页组件-->
            <div class="comment-content-pagination">
                <el-pagination layout="prev, pager, next" :total="totalCount" :page-size="size" @current-change="currentChange"/>
            </div>
        </div>
        <!--评论输入组件-->
        <div class="comment-editor">
            <editor :type="type" :is-padding="isPadding"/>
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
            },
            /*评论类型*/
            type: {
                type: String
            }
        },
        data () {
            return {
                /*排序状态(0代表按点赞数量排序，1代表按时间排序)*/
                sortStatus: 0,
                /*点赞状态*/
                zanStatus: [],
                /*当前页*/
                currentPage: 0,
                /*评论信息*/
                commentList: [],
                /*总信息数*/
                totalCount: 0,
                /*每页信息数*/
                size: 5
            }
        },
        created() {
            this.updateList(this.$route.query.id);
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
            },
            /**
             * 更新评论列表
             */
            updateList (id) {
                let self = this;
                for (let i = 0; i < self.comments.length; i ++) {
                    self.zanStatus[i] = 0
                }
                this.commentList = [];
                self.$axios.get(self.$store.state.serverBaseUrl + `/api/${self.type}Comment/getAllCommentByTypeId?typeId=${id}&currentPage=${self.currentPage}&size=${self.size}`)
                    .then((res) => {
                        if (res.data.code === 200) {
                            self.totalCount = res.data.data.total;
                            res.data.data.records.forEach(item => {
                                self.commentList.push(item);
                            })
                        } else {
                            self.$store.dispatch('infoDialog', res.data.msg);
                        }
                    });
            },
            /*当前页变化*/
            currentChange (current) {
                this.currentPage = current;
                this.updateList(self.$sotre.state.contentId);
            }
        },
        components: {
            Editor
        },
        computed: {
            contentId () {
                return this.$store.state.contentId;
            }
        },
        watch: {
            contentId (val) {
                this.updateList(val);
            }
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
