<template>
    <div class="information" :style="{width: width}">
        <!--标题栏-->
        <div class="information-title">
            <!--相关信息标题-->
            <span>{{title}}</span>
            <!--更多按钮-->
            <p class="information-title-more right">
                <a href="#">…</a>
            </p>
            <!--相关信息观看数量-->
            <p class="information-title-content right">
                <i class="fa fa-eye"/>
                {{lookCount}}
            </p>
            <!--相关信息作者-->
            <p class="information-title-content right">
                <img :src="avatar" alt="头像">
                {{author}}
            </p>
        </div>
        <!--分割线-->
        <el-divider/>
        <!--相关信息正文-->
        <div v-html="content" class="information-content"/>
    </div>
</template>

<script>
    export default {
        name: "Information",
        props: {
            /*组件宽度*/
            width: {
                type: String,
                default: '1610px'
            },
            /*相关信息标题*/
            title: {
                type: String,
                default: 'PIXIV美图：兽耳篇（1）'
            },
            /*相关信息作者*/
            author: {
                type: String,
                default: '小熊猫'
            },
            /*观看数量*/
            lookCount: {
                type: Number,
                default: 123
            },
            /*相关信息作者头像*/
            avatar: {
                type: String,
                default: 'http://localhost:8080/imgs/avatar.png'
            },
            /*相关信息内容*/
            content: {
                type: String,
                default: '<p>一些有关兽耳的动漫图片，来自PIXIV。</p>' +
                    '<img src="http://localhost:8080/relatedInformation/1.jpeg" alt="兽耳1">' +
                    '<span class="text-center">兽耳1</span>' +
                    '<img src="http://localhost:8080/relatedInformation/2.jpeg" alt="兽耳1">' +
                    '<span class="text-center">兽耳2</span>' +
                    '<img src="http://localhost:8080/relatedInformation/3.jpeg" alt="兽耳1">' +
                    '<span class="text-center">兽耳3</span>' +
                    '<img src="http://localhost:8080/relatedInformation/4.jpeg" alt="兽耳1">' +
                    '<span class="text-center">兽耳4</span>' +
                    '<img src="http://localhost:8080/relatedInformation/5.png" alt="兽耳1">' +
                    '<span class="text-center">兽耳5</span>' +
                    '<img src="http://localhost:8080/relatedInformation/6.png" alt="兽耳1">' +
                    '<span class="text-center">兽耳6</span>' +
                    '<img src="http://localhost:8080/relatedInformation/7.png" alt="兽耳1">' +
                    '<span class="text-center">兽耳7</span>' +
                    '<p>希望大家喜欢，谢谢</p>'
            }
        }
    }
</script>

<style lang="less">
    @import "../../assets/less/variable.less";

    .information {
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
            padding: 20px;
            font-size: @font-size-content;
            color: @color-content;
            text-align: center;
            img {
                width: 40%;
                display: inline-block;
            }
            p {
                text-align: left;
                text-indent: 10px;
            }
            span {
                display: block;
            }
        }
    }
</style>
