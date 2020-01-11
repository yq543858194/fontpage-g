<template>
    <div class="cartoon-detail">
        <transition name="fade-header">
            <!--标题栏-->
            <cartoon-header v-show="this.$store.state.cartoon.showTools"/>
        </transition>
        <ul class="cartoon-detail-list">
            <li class="cartoon-detail-list-item" v-for="(item, index) in cartoonImgList" :key="index">
                <img :src="item.url" :id="item.id" alt="图片" ref="cartoons">
            </li>
        </ul>
        <!--任务栏显示/隐藏按钮-->
        <div class="cartoon-detail-button">
            <el-button :icon="!this.$store.state.cartoon.showTools ? 'el-icon-plus' : 'el-icon-close'" ref="toolsBtn" circle @click="switchToolBar"/>
        </div>
        <transition name="fade-footer">
            <!--工具栏-->
            <cartoon-footer v-show="this.$store.state.cartoon.showTools"/>
        </transition>
    </div>
</template>

<script>
    import CartoonHeader from "../components/cartoon/Header.vue";
    import CartoonFooter from "../components/cartoon/Footer.vue"
    import router from "../router";

    export default {
        name: "CartoonDetail",
        data () {
            return {
                /*漫画列表*/
                cartoonImgList: [
                    {
                        url: 'http://localhost:8080/cartoon/01.jpg',
                        id: 'c1'
                    },
                    {
                        url: 'http://localhost:8080/cartoon/02.jpg',
                        id: 'c2'
                    },
                    {
                        url: 'http://localhost:8080/cartoon/03.jpg',
                        id: 'c3'
                    },
                    {
                        url: 'http://localhost:8080/cartoon/04.jpg',
                        id: 'c4'
                    },
                    {
                        url: 'http://localhost:8080/cartoon/05.jpg',
                        id: 'c5'
                    },
                    {
                        url: 'http://localhost:8080/cartoon/06.jpg',
                        id: 'c6'
                    },
                    {
                        url: 'http://localhost:8080/cartoon/07.jpg',
                        id: 'c7'
                    },
                    {
                        url: 'http://localhost:8080/cartoon/08.jpg',
                        id: 'c8'
                    },
                    {
                        url: 'http://localhost:8080/cartoon/09.jpg',
                        id: 'c9'
                    },
                    {
                        url: 'http://localhost:8080/cartoon/10.jpg',
                        id: 'c10'
                    },
                    {
                        url: 'http://localhost:8080/cartoon/11.jpg',
                        id: 'c11'
                    },
                    {
                        url: 'http://localhost:8080/cartoon/12.jpg',
                        id: 'c12'
                    },
                    {
                        url: 'http://localhost:8080/cartoon/13.jpg',
                        id: 'c13'
                    },
                    {
                        url: 'http://localhost:8080/cartoon/14.jpg',
                        id: 'c14'
                    }
                ],
                /*漫画图片据页面顶部高度*/
                scrollHeightArray: [],
                /*当前页索引*/
                currentPage: 0
            }
        },
        created() {
            this.$store.dispatch('hideLayout');
            this.currentPage = parseInt(sessionStorage.getItem("currentPage"));
        },
        mounted() {
            let that = this;
            let i = 0;
            let parent;
            document.documentElement.scrollTop = 0;
            this.$refs.cartoons.forEach((cartoon, index) => {
                cartoon.onload = (e) => {
                    parent = e.target.parentElement;
                    that.scrollHeightArray[index] = parent.offsetTop;
                }
            });
            window.onscroll = (e) => {
                let that = this;
                if (that.scrollHeightArray.length !== 0) {
                    if (that.currentPage < that.scrollHeightArray.length - 1 && that.scrollHeightArray[that.currentPage + 1] < document.documentElement.scrollTop) {
                        this.$store.dispatch('setCurrentPage', that.currentPage + 2);
                        that.currentPage ++;
                    } else if (that.scrollHeightArray[that.currentPage] > document.documentElement.scrollTop) {
                        this.$store.dispatch('setCurrentPage', that.currentPage);
                        that.currentPage --;
                    }
                }
            };

        },
        methods: {
            /**
             * 打开或关闭工具栏
             */
            switchToolBar () {
                this.$store.dispatch('setShowTools', !this.$store.state.cartoon.showTools);
            }
        },
        components: {
            CartoonHeader,
            CartoonFooter
        },
        computed: {
            pageUrl () {
                return this.$store.state.cartoon.currentPage;
            }
        },
        watch: {
            pageUrl (val) {
                this.currentPage = val - 1;
            }
        }
    }
</script>

<style lang="less" scoped>
    .cartoon-detail {
        &-button {
            position: fixed;
            bottom: 70px;
            right: 30px;
        }
        &-list {
            position: absolute;
            top: 0;
            width: 100%;
            text-align: center;
            &-item {
                width: 100%;
                img {
                    width: 60%;
                }
            }
        }
    }
    .fade-header-enter-active, .fade-header-leave-active, .fade-footer-enter-active, .fade-footer-leave-active {
        transition: transform .5s;
    }
    .fade-header-enter, .fade-header-leave-to {
        transform: translateY(-100%);
    }
    .fade-footer-enter, .fade-footer-leave-to {
        transform: translateY(100%);
    }
</style>
