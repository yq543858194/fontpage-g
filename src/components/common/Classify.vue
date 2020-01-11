<template>
    <!--分类列表-->
    <div class="classify-list" :style="{width: width}">
        <div class="classify-list-item point" v-for="(item, index) in catalog" v-bind:key="index">
            <a :href="item.url">{{item.name}}</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "classify",
        props: {
            /*分类列表数据*/
            catalog: {
                type: Array,
                default: () => {
                    return [
                        {
                            /*分类名*/
                            name: '热血',
                            /*分类指向url*/
                            url: ''
                        },
                        {
                            name: '治愈',
                            url: ''
                        },
                        {
                            name: '玄幻',
                            url: ''
                        },
                        {
                            name: '科幻',
                            url: ''
                        },
                        {
                            name: '动作',
                            url: ''
                        },
                        {
                            name: '推理',
                            url: ''
                        },
                        {
                            name: '历史',
                            url: ''
                        },
                        {
                            name: '搞笑',
                            url: ''
                        },
                        {
                            name: '穿越',
                            url: ''
                        },
                        {
                            name: '...',
                            url: ''
                        }
                    ];
                }
            },
            width: {
                type: String,
                default: '1610px'
            }
        }
    }
</script>

<style scoped lang="less">
    @import "../../assets/less/variable.less";

    .classify-list {
        display: flex;
        justify-content: space-around;
        line-height: 40px;
        margin: 0 auto;
        &-item {
            a {
                font-size: @font-size-classify;
                text-decoration: none;
                color: @color-link-dark;
                transition: color .5s ease-in-out;
            }
            :hover {
                color: @color-link-hover;
            }
        }
    }
</style>
