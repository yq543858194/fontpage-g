<template>
    <div class="index-list" :style="{width: width}">
        <!--列表标题-->
        <div class="index-list-title">
            <img :src="icon" alt=""/>
            <span>{{title}}</span>
        </div>
        <!--列表项-->
        <div class="index-list-item-container">
            <IndexListItem width="18%" :type="type" :post="item.post" :url="item.id" :author="item.name" :title="item.title" :look-count="item.lookCount"  v-for="(item, index) in content" v-bind:key="index"/>
        </div>
    </div>
</template>

<script>
    import IndexListItem from "./IndexListItem";

    export default {
        name: "IndexList",
        props: {
            /*列表标题*/
            title: {
                type: String,
                default: '标题',
            },
            /*列表图标*/
            icon: {
                type: String,
                default: 'flame'
            },
            /*列表内容*/
            content: {
                type: Array,
                default: () => {
                    return [
                        {
                            post: 'https://graduation-cartoon.oss-cn-beijing.aliyuncs.com/imgs/background1.png',
                            url: '/indexDetail/1',
                            title: '主页1',
                            author: '机器人1',
                            lookCount: 100
                        },
                        {
                            post: 'https://graduation-cartoon.oss-cn-beijing.aliyuncs.com/imgs/background2.png',
                            url: '/videoDetail/1',
                            title: '主页2',
                            author: '机器人1',
                            lookCount: 100
                        },
                        {
                            post: 'https://graduation-cartoon.oss-cn-beijing.aliyuncs.com/imgs/background3.png',
                            url: '/cartoonDetail/1',
                            title: '主页3',
                            author: '机器人1',
                            lookCount: 100
                        },
                        {
                            post: 'https://graduation-cartoon.oss-cn-beijing.aliyuncs.com/imgs/background4.png',
                            url: '/informationDetail/1',
                            title: '主页4',
                            author: '机器人1',
                            lookCount: 100
                        },
                        {
                            post: 'https://graduation-cartoon.oss-cn-beijing.aliyuncs.com/imgs/background5.jpg',
                            url: '',
                            title: '主页5',
                            author: '机器人1',
                            lookCount: 100
                        }
                    ];
                }
            },
            /*列表宽度*/
            width: {
                type: String,
                default: '1610px'
            },
            /*列表类型*/
            type: {
                type: String
            }
        },
        components: {
            IndexListItem
        }
    }
</script>

<style scoped lang="less">
    @import "../../assets/less/variable.less";

    .index-list {
        margin: 0 auto;
        padding: 15px 0;
        &-title {
            margin: 20px 0;
            padding-left: 20px;
            text-align: left;
            img {
                height: 30px;
                vertical-align: top;
            }
            span {
                font-size: @font-size-title-big;
                color: @color-title-big;
                vertical-align: center;
                padding-left: 7px;
            }
        }
        &-item-container {
            width: 100%;
            display: flex;
            justify-content: space-around;
            margin: 0 auto;
        }
    }
</style>
