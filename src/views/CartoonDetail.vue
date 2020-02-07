<template>
    <div class="cartoon-detail">
        <transition name="fade-header">
            <!--标题栏-->
            <cartoon-header :id="$route.query.id" :title="cartoonData.title" v-show="this.$store.state.cartoon.showTools"/>
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
            <cartoon-footer :catalog="catalogList" :max-page="cartoonData.pageCount" v-show="this.$store.state.cartoon.showTools"/>
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
                cartoonImgList: [],
                /*动漫信息*/
                cartoonData: {title: '', pageCount: 0},
                /*漫画图片据页面顶部高度*/
                scrollHeightArray: [],
                /*当前页索引*/
                currentPage: 0,
                /*漫画列表元数据*/
                cartoonImgListOrigin: [],
                /*当前加载到的图片索引*/
                currentLoadedIndex: 0,
                /*目录列表*/
                catalogList: []
            }
        },
        created() {
            let self = this;
            self.$store.dispatch('hideLayout');
            self.currentPage = parseInt(sessionStorage.getItem("currentPage"));
        },
        mounted() {
            this.updateData(this.$route.query.id);
        },
        methods: {
            /**
             * 打开或关闭工具栏
             */
            switchToolBar () {
                this.$store.dispatch('setShowTools', !this.$store.state.cartoon.showTools);
            },

            /**
             * 更新数据
             * @Param id 动漫/轻小说id
             */
            updateData (id) {
                let that = this;
                let self = this;
                // 清空之前的数据
                self.cartoonImgListOrigin = [];
                self.cartoonData = {title: '', pageCount: 0};
                self.cartoonImgList = [];
                self.scrollHeightArray = [];
                self.catalogList = [];
                self.currentLoadedIndex = 0;
                self.currentPage = 0;
                // 获取动漫信息
                self.$axios.get(self.$store.state.serverBaseUrl + `/api/cartoon/getCartoon?id=${id}`)
                    .then(res => {
                        // 获取数据成功
                        if (res.data.code === 200) {
                            self.cartoonData = res.data.data;
                            // 请求目录信息
                            self.$axios.get(self.$store.state.serverBaseUrl + `/api/cartoon/getAllCartoonListByIndexId?indexId=${self.cartoonData.indexId}`)
                                .then((res) => {
                                    if (res.data.code === 200) {
                                        res.data.data.forEach((item) => {
                                            self.catalogList.push(item);
                                        });
                                    } else {
                                        self.$store.dispatch('infoDialog', response.data.msg);
                                    }
                                });
                            // 设置动漫评论信息，赋值id
                            self.$store.dispatch('setCartoonId', id);
                            // 将图片链接赋值给图片原数组
                            for (let i = 0; i < self.cartoonData.pageCount; i++) {
                                self.cartoonImgListOrigin.push({
                                    url: `https://graduation-cartoon.oss-cn-beijing.aliyuncs.com/cartoon/${self.cartoonData.folder}/${i + 1}.jpg`,
                                    id: `c${i + 1}`
                                });
                            }
                            // 将图片原数组赋值第一个元素赋值给图片数组，准备按顺序加载图片
                            if (self.cartoonData.pageCount !== 0) self.cartoonImgList.push(self.cartoonImgListOrigin[0]);
                        } else {
                            // 获取数据失败，显示失败信息
                            self.$store.dispatch('infoDialog', res.data.msg);
                        }
                        // 在下一次视图刷新时调用数组
                        self.$nextTick(() => {
                            let i = 0;
                            let parent;
                            // 将滚动高度设定为文档开头
                            document.documentElement.scrollTop = 0;
                            // 当第一张图片加载完成后，获取第一张的高度信息，赋值给图片高度数组，之后继续从图片原数组中取一张赋值给图片数组，直到所有图片按顺序加载完毕
                            that.$refs.cartoons.forEach((cartoon, index) => {
                                cartoon.onload = (e) => {
                                    parent = e.target.parentElement;
                                    that.scrollHeightArray[index] = parent.offsetTop;
                                    if (self.currentLoadedIndex <= self.cartoonData.pageCount) {
                                        self.currentLoadedIndex ++;
                                        self.cartoonImgList.push(self.cartoonImgListOrigin[self.currentLoadedIndex]);
                                    }
                                }
                            });
                            // 设定窗口滚动事件
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
                        })
                    });
            },
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
            },
            cartoonImgList (newVal, oldVal) {
                let self = this;
                self.$nextTick (() => {
                    self.$refs.cartoons.forEach((cartoon, index) => {
                        cartoon.onload = (e) => {
                            let parent = e.target.parentElement;
                            self.scrollHeightArray[index] = parent.offsetTop;
                            if (self.currentLoadedIndex < self.cartoonData.pageCount - 1) {
                                self.currentLoadedIndex ++;
                                self.cartoonImgList.push(self.cartoonImgListOrigin[self.currentLoadedIndex]);
                            }
                        }
                    });
                });
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
