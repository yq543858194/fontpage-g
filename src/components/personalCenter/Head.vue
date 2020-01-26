<template>
    <div class="head">
        <div class="head-avatar">
            <img :src="avatar" alt="头像">
        </div>
        <div class="head-text">
            <span>{{name}}</span>
            <p>{{description}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Head.vue",
        props: {
            /*用户昵称*/
            name: {
                type: String,
                default: '苍炎战神'
            },
            /*用户描述*/
            description: {
                type: String,
                default: '这个人很懒，什么都没有留下'
            },
            /*用户头像地址*/
            avatar: {
                type: String,
                default: 'https://graduation-cartoon.oss-cn-beijing.aliyuncs.com/imgs/avatar.png'
            }
        }
    }
</script>

<style scoped lang="less">
    @import "../../assets/less/variable.less";

    .head {
        width: 83.85%;
        margin: 0 auto;
        text-align: left;
        transform: translate(0, -50px);
        &-avatar {
            display: inline-block;
            width: 100px;
            height: 100px;
            img {
                width: 100%;
                height: 100%;
                border-radius: 50%;
            }
        }
        &-text {
            display: inline-block;
            vertical-align: top;
            margin-top: 15px;
            margin-left: 15px;
            span {
                color: @color-title-small;
                font-size: @font-size-title-big;
                font-weight: bold;
            }
            p {

                display: inline;
                margin-left: 30px;
                color: @color-addition-dark;
                font-size: @font-size-addition;
                font-weight: bold;
            }
        }
    }
</style>
