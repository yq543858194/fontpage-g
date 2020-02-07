<template>
    <div class="header">
        <img :src="this.$store.state.baseUrl + '/icons/back.png'" alt="返回" title="返回" class="header-back left point" @click="back">
        <span class="header-title">{{title}}</span>
        <img :src="this.$store.state.baseUrl + '/icons/cartoonComment.png'" alt="评论" title="评论" class="header-comment right point" @click="commentVisible = true">
        <el-dialog title="评论" :visible.sync="commentVisible" :modal-append-to-body='false'>
            <comment type="cartoon" width="100%" :show-title="false" background="#ffffff" :is-padding="true"/>
        </el-dialog>
    </div>
</template>

<script>
    import Comment from "../common/Comment";

    export default {
        name: "Header",
        props: {
            /*漫画名称*/
            title: {
                type: String,
                default: '漫画1:1'
            }
        },
        data () {
            return {
                /*评论框可见状态*/
                commentVisible: false
            }
        },
        methods: {
            /**
             * 回退到上一个页面
             */
            back () {
                this.$router.back();
            }
        },
        components: {
            Comment
        }
    }
</script>

<style lang="less">
    @import "../../assets/less/variable.less";

    .header {
        position: fixed;
        top: 0;
        z-index: 999;
        text-align: center;
        font-size: @font-size-title-big;
        color: #ffffff;
        height: 50px;
        width: 100%;
        background-color: rgba(10, 10, 10, 0.3);
        .el-dialog__body {
            padding: 0 !important;
        }
        &-back {
            margin-left: 40px;
            width: 30px;
            margin-top: 10px;
        }
        &-comment {
            margin-right: 40px;
            width: 30px;
            margin-top: 10px;
        }
        > span {
            line-height: 50px;
            font-weight: bold;
        }
    }
</style>
