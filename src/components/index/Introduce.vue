<template>
    <div class="introduce" :style="{width: width}">
        <!--标题栏-->
        <div class="introduce-title">
            <!--播放图标-->
            <img :src="this.$store.state.baseUrl + '/icons/introduce.png'" alt=""/>
            <!--播放视频标题-->
            <span>简介</span>
            <!--更多按钮-->
            <p class="introduce-title-more right">
                <a href="#">…</a>
            </p>
            <!--列表项观看数量-->
            <p class="introduce-title-content right">
                <i class="fa fa-eye"/>
                {{lookCount}}
            </p>
            <!--列表项作者-->
            <p class="introduce-title-content right">
                <img :src="avatar" alt="头像">
                {{introduceAuthor}}
            </p>
        </div>
        <!--简介内容-->
        <div class="introduce-content">
            <!--简介海报-->
            <div class="introduce-content-post">
                <img :src="post" alt="">
            </div>
            <div class="introduce-content-text">
                <!--动漫标题-->
                <h4>{{title}}</h4>
                <!--动漫作者-->
                <span>{{author}}</span>
                <!--动漫简介-->
                <p>{{introduceContent}}</p>
                <!--收藏按钮-->
                <div class="introduce-content-text-button">
                    <el-button :disabled="disableButton" type="primary" v-if="!favoriteStatus" @click="favorite(true)">收藏</el-button>
                    <el-button :disabled="disableButton" type="info" v-else @click="favorite(false)">取消收藏</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


    export default {
        name: "Introduce",
        props: {
            /*动漫名*/
            title: {
                type: String,
                default: '视频1'
            },
            /*组件宽度*/
            width: {
                type: String,
                default: '1610px'
            },
            /*简介作者*/
            introduceAuthor: {
                type: String,
                default: '小机器人'
            },
            /*作者头像地址*/
            avatar: {
                type: String,
                default: 'https://graduation-cartoon.oss-cn-beijing.aliyuncs.com/imgs/avatar.png'
            },
            /*浏览数*/
            lookCount: {
                type: Number,
                default: 100
            },
            /*简介海报*/
            post: {
                type: String,
                default: 'https://graduation-cartoon.oss-cn-beijing.aliyuncs.com/imgs/background2.png'
            },
            /*动漫作者*/
            author: {
                type: String,
                default: '作者1，作者2，作者3'
            },
            /*动漫简介*/
            introduceContent: {
                type: String,
                default: '这里是动漫简介，这里是动漫简介，这里是动漫简介，这里是动漫简介，这里是动漫简介，这里是动漫简介，这里是动漫简介，这里是动漫简介，这里是动漫简介，这里是动漫简介，这里是动漫简介，这里是动漫简介。'
            }
        },
        data () {
            return {
                /*收藏状态*/
                favoriteStatus: false,
                /*收藏按钮是否被禁用*/
                disableButton: false
            }
        },
        methods: {
            /**
             * 收藏/取消收藏操作
             * @param status true为收藏，false为取消收藏
             */
            favorite (status) {
                let self = this;
                self.disableButton = true;
                let url = "";
                if (status)
                    url = self.$store.state.serverBaseUrl + `/api/indexFavorite/favoriteAdd`;
                else
                    url = self.$store.state.serverBaseUrl + `/api/indexFavorite/favoriteDelete`;
                self.$axios.post(url, {
                    indexId: self.$route.query.id
                },{
                    headers: {
                        Authorization: self.$store.state.user.Authentication
                    }
                }).then(res => {
                    self.disableButton = false;
                    if (res.data.code === 200) {
                        if (res.data.data) {
                            if (status)  self.favoriteStatus = true;
                            else self.favoriteStatus = false;
                        }
                    } else {
                        self.$store.dispatch('infoDialog', res.data.msg);
                    }
                });
            },
            /**
             * 设置收藏状态
             * @param val
             */
            setFavoriteStatus (val) {
                this.favoriteStatus = val;
            }
        }
    }
</script>

<style scoped lang="less">
    @import "../../assets/less/variable.less";

    .introduce {
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
        &-content {
            position: relative;
            padding: 0 5px;
            &-post {
                display: inline-block;
                width: 32%;
                img {
                    width: 100%;
                }
            }
            &-text {
                vertical-align: top;
                display: inline-block;
                width: 60%;
                margin-left: 8%;
                text-align: left;
                h4 {
                    margin: 0;
                    font-size: @font-size-title-big;
                    color: @color-title-big;
                }
                span {
                    margin: 20px 0;
                    font-size: @font-size-content;
                    color: @color-addition;
                    display: block;
                }
                p {
                    margin: 20px 0;
                    font-size: @font-size-content;
                    color: @color-content;
                }
                &-button {
                    position: absolute;
                    bottom: 6px;
                    vertical-align: bottom;
                }
            }
        }
    }
</style>
