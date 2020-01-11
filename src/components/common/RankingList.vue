<template>
    <div class="ranking" :style="{width: width}">
        <!--标题-->
        <div class="ranking-title">
            <img :src="this.$store.state.baseUrl + '/icons/rank.png'" alt=""/>
            <span>排行榜</span>
        </div>
        <!--排行榜组列表-->
        <div class="ranking-list">
            <div class="ranking-list-item" ref="list" v-for="(item, index) in data" :key="index">
                <!--装饰条-->
                <div class="ranking-list-item-decoration" v-if="index === 0" style="background-color: #419ff7"/>
                <div class="ranking-list-item-decoration" v-else-if="index === 1" style="background-color: #ffb016"/>
                <div class="ranking-list-item-decoration" v-else style="background-color: #fc6262"/>
                <!--排行榜名称-->
                <div class="ranking-list-item-title">{{item.title}}</div>
                <!--排行榜信息-->
                <ul>
                    <li v-for="(listItem, listIndex) in item.list" v-bind:key="listIndex" class="ranking-list-item-item">
                        <span class="ranking-list-item-item-index left" style="color: #419ff7" v-if="listIndex === 0">{{listIndex + 1}}</span>
                        <span class="ranking-list-item-item-index left" style="color: #ffb016" v-else-if="listIndex === 1">{{listIndex + 1}}</span>
                        <span class="ranking-list-item-item-index left" style="color: #fc6262" v-else-if="listIndex === 2">{{listIndex + 1}}</span>
                        <span class="ranking-list-item-item-index left" style="color: #bfbfbf" v-else>{{listIndex + 1}}</span>
                        <a :href="listItem.url" class="ranking-list-item-item-data right">{{listItem.title}}</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "RankingList",
        props: {
            /*排行榜信息*/
            data: {
                type: Array,
                default: () => {
                    return [
                        {
                            /*排行榜名称*/
                            title: '观看最多',
                            /*排行榜列表信息*/
                            list: [
                                {
                                    /*列表项所指地址*/
                                    url: '',
                                    /*列表项所指名称*/
                                    title: '这是一个悲伤的故事'
                                },
                                {
                                    /*列表项所指地址*/
                                    url: '',
                                    /*列表项所指名称*/
                                    title: '这是一个更悲伤的故事'
                                },
                                {
                                    /*列表项所指地址*/
                                    url: '',
                                    /*列表项所指名称*/
                                    title: '这是一个快乐的故事'
                                },
                                {
                                    /*列表项所指地址*/
                                    url: '',
                                    /*列表项所指名称*/
                                    title: '这是一个普通的故事'
                                }
                            ]
                        },
                        {
                            /*排行榜名称*/
                            title: '点赞最多',
                            /*排行榜列表信息*/
                            list: [
                                {
                                    /*列表项所指地址*/
                                    url: '',
                                    /*列表项所指名称*/
                                    title: '这是一个悲伤的故事'
                                },
                                {
                                    /*列表项所指地址*/
                                    url: '',
                                    /*列表项所指名称*/
                                    title: '这是一个更悲伤的故事'
                                },
                                {
                                    /*列表项所指地址*/
                                    url: '',
                                    /*列表项所指名称*/
                                    title: '这是一个快乐的故事'
                                },
                                {
                                    /*列表项所指地址*/
                                    url: '',
                                    /*列表项所指名称*/
                                    title: '这是一个普通的故事'
                                }
                            ]
                        },
                        {
                            /*排行榜名称*/
                            title: '收藏最多',
                            /*排行榜列表信息*/
                            list: [
                                {
                                    /*列表项所指地址*/
                                    url: '',
                                    /*列表项所指名称*/
                                    title: '这是一个悲伤的故事'
                                },
                                {
                                    /*列表项所指地址*/
                                    url: '',
                                    /*列表项所指名称*/
                                    title: '这是一个更悲伤的故事'
                                },
                                {
                                    /*列表项所指地址*/
                                    url: '',
                                    /*列表项所指名称*/
                                    title: '这是一个快乐的故事'
                                },
                                {
                                    /*列表项所指地址*/
                                    url: '',
                                    /*列表项所指名称*/
                                    title: '这是一个普通的故事'
                                }
                            ]
                        }
                    ]
                }
            },
            /*组件宽度*/
            width: {
                type: String,
                default: '1610px'
            }
        }
    }
</script>

<style scoped lang="less">
    @import "../../assets/less/variable.less";
    .ranking {
        margin: 30px auto 0;
        padding-bottom: 15px;
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
        &-list {
            display: flex;
            justify-content: space-around;
            &-item {
                width: 29%;
                border-radius: 5px;
                background-color: #ffffff;
                &-decoration {
                    width: 100%;
                    height: 2px;
                    border-top-left-radius: 5px;
                    border-top-right-radius: 5px;
                }
                &-title {
                    font-size: @font-size-title-big;
                    color: @color-title-big;
                    margin: 15px 0;
                }
                &-item {
                    width: 100%;
                    height: 30px;
                    line-height: 30px;
                    &-index {
                        text-align: center;
                        width: 10%;
                    }
                    &-data {
                        width: 65%;
                        text-align: center;
                        color: @color-addition;
                    }
                }
            }
        }
    }

</style>
