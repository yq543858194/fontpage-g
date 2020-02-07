<template>
    <div class="footer">
        <img :src="this.$store.state.baseUrl + '/icons/previous.png'" alt="上一章" class="footer-previous left point">
        <span class="footer-page">{{currentPage}} / {{maxPage}}</span>
        <div class="footer-control">
            <el-slider v-model="currentPage" :min="1" :max="maxPage" :step="1" @change="pageChange"/>
        </div>
        <el-popover placement="top" width="400" trigger="click">
            <el-table :data="catalog" style="width: 100%" @row-click="changeChapter">
                <el-table-column prop="title" label="目录"/>
            </el-table>
            <img :src="this.$store.state.baseUrl + '/icons/menu.png'" alt="目录" class="footer-menu point" slot="reference">
        </el-popover>
        <img :src="this.$store.state.baseUrl + '/icons/next.png'" alt="下一章" class="footer-next right point">
    </div>
</template>

<script>
    export default {
        name: "Footer",
        props: {
            /*最大页数*/
            maxPage: {
                type: Number,
                default: 14
            },
            /*目录信息*/
            catalog: {
                type: Array,
                default () {
                    return [
                        {
                            title: '目录1',
                            url: '#1'
                        },
                        {
                            title: '目录2',
                            url: '#2'
                        }
                    ]
                }
            }
        },
        data () {
            return {
                /*当前页码*/
                currentPage: 1
            }
        },
        methods: {
            /**
             * 页面号码改变时改变vuex中的当前页码信息
             */
            pageChange () {
                this.$store.dispatch('setCurrentPage', this.currentPage);
                let urls = document.URL;
                let url = urls.split('#')[0];
                sessionStorage.setItem("currentPage", this.currentPage);
                window.location.href = url + '#c' + this.currentPage;
            },
            /**
             * 章节改变事件
             * @param row
             * @param column
             * @param event
             */
            changeChapter (row, column, event) {
                this.$parent.updateData(row.id);
            }
        },
        computed: {
            pageUrl () {
                return this.$store.state.cartoon.currentPage;
            }
        },
        watch: {
            pageUrl (val) {
                this.currentPage = val;
            }
        }
    }
</script>

<style scoped lang="less">
    @import "../../assets/less/variable.less";

    .footer {
        position: fixed;
        bottom: 0;
        text-align: center;
        font-size: @font-size-title-big;
        color: #ffffff;
        height: 50px;
        width: 100%;
        background-color: rgba(10, 10, 10, 0.3);
        &-previous {
            margin-left: 40px;
            width: 30px;
            margin-top: 10px;
        }
        &-page {
            display: inline-block;
            margin-right: 30px;
            line-height: 50px;
            transform: translateY(-23px);
        }
        &-menu {
            margin-left: 30px;
            width: 30px;
            transform: translateY(-17px);
        }
        &-next {
            margin-right: 40px;
            width: 30px;
            margin-top: 10px;
        }
        &-control {
            width: 60%;
            height: 50px;
            display: inline-block;
            padding-top: 6px;
        }
    }
</style>
