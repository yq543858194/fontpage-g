<template>
    <div class="list-item" :style="{width: width}">
        <router-link :to="`/${type}Detail?id=${url}`">
            <!--列表项缩略图-->
            <div class="list-item-img">
                <img :src="post" :alt="title">
            </div>
            <!--列表项名称-->
            <p class="list-item-title">{{title}}</p>
            <div class="list-item-content">
                <!--列表项作者-->
                <p class="left">
                    <i class="fa fa-user"/>
                    {{author}}
                </p>
                <!--列表项观看数量-->
                <p class="right">
                    <i class="fa fa-eye"/>
                    {{lookCount}}
                </p>
            </div>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "IndexListItem",
        props: {
            /*列表项链接地址*/
            url: {
                type: String,
                default: ''
            },
            /*列表项标题*/
            title: {
                type: String,
                default: ''
            },
            /*列表项缩略图地址*/
            post: {
                type: String,
                default: ''
            },
            /*列表项作者*/
            author: {
                type: String,
                default: ''
            },
            /*列表项观看数量*/
            lookCount: {
                type: Number,
                default: 0
            },
            /*列表项宽度*/
            width: {
                type: String,
                default: '380px'
            },
            /*列表*/
            type: {
                type: String
            }
        }
    }
</script>

<style scoped lang="less">
    @import "../../assets/less/variable.less";

    a {
        display: block;
        width: 100%;
    }
    .list-item {
        margin: 0 auto;
        &-img {
            width: 100%;
            height: @height-list-img;
            img {
                width: 100%;
                height: 100%;
                border-radius: 5px;
            }
            :hover {
                box-shadow: 2px 2px 2px rgba(0,0,0,0.3);
            }
        }
        &-title {
            color: @color-title-small;
            margin: 5px 10px 5px 0;
            text-align: left;
            font-size: @font-size-title-small;
            transition: color .5s ease-in-out;
            :hover {
                color: @color-title-small-hover;
            }
        }
        &-content {
            color: @color-addition;
            font-size: @font-size-addition;
            text-align: left;
            margin: 5px 10px 5px 0;
            height: 20px;
        }
    }
</style>
