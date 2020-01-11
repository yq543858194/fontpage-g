<template>
    <div class="index-carousel" :style="{width: width}">
        <!--element-ui幻灯片组件-->
        <el-carousel :interval="3000" type="card" height="22vw">
            <el-carousel-item v-for="(item, index) in data" :key="index">
                <a :href="item.url">
                    <img class="index-carousel-img" :src="item.post" alt="">
                </a>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
    export default {
        name: "IndexCarousel",
        props: {
            /*组件宽度*/
            width: {
                type: String,
                default: '1610px'
            },
            /*幻灯片数据*/
            data: {
                type: Array,
                default: () => {
                    return [
                        {
                            /*幻灯片指向url*/
                            url: '#',
                            /*幻灯片图片链接*/
                            post: 'http://localhost:8080/imgs/carousel1.png'
                        },
                        {
                            url: '#',
                            post: 'http://localhost:8080/imgs/carousel2.png'
                        },
                        {
                            url: '#',
                            post: 'http://localhost:8080/imgs/carousel3.png'
                        },
                        {
                            url: '#',
                            post: 'http://localhost:8080/imgs/carousel4.png'
                        }
                    ]
                }
            }
        }
    }
</script>

<style scoped lang="less">
    .index-carousel {
        margin: 20px auto;
        &-img {
            width: 100%;
            height: 100%;
        }
    }
</style>
