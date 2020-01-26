<template>
    <div class="time-line">
        <ul class="time-line-func">
            <li class="time-line-func-item point" :class="contentType === '视频' ? 'active' : ''" @click="switchContentType">视频</li>
            <li class="time-line-func-item point" :class="contentType === '动漫/轻小说' ? 'active' : ''" @click="switchContentType">动漫/轻小说</li>
            <li class="time-line-func-item point" :class="contentType === '相关信息' ? 'active' : ''" @click="switchContentType">相关信息</li>
        </ul>
        <el-divider/>
        <div class="time-line-container">
            <el-timeline>
                <el-timeline-item v-for="(item, index) in timeData" :key="index" :timestamp="item.time" placement="top">
                    <el-card>
                        <div class="post">
                            <img :src="item.post" alt="预览图">
                        </div>
                        <div class="text">
                            <h4>{{item.title}}</h4>
                            <p>{{item.comment}}</p>
                        </div>
                    </el-card>
                </el-timeline-item>
            </el-timeline>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TimeLine",
        data () {
            return {
                /*浏览数据*/
                timeData: [
                    {
                        time: '2020/01/13 12:00',
                        post: 'https://graduation-cartoon.oss-cn-beijing.aliyuncs.com/imgs/background1.png',
                        title: '视频3',
                        comment: '真好看，真好看，正好看'
                    },
                    {
                        time: '2019/12/10 9:00',
                        post: 'https://graduation-cartoon.oss-cn-beijing.aliyuncs.com/imgs/background2.png',
                        title: '视频2',
                        comment: '无聊'
                    },
                    {
                        time: '2019/07/21 11:00',
                        post: 'https://graduation-cartoon.oss-cn-beijing.aliyuncs.com/imgs/background3.png',
                        title: '视频4',
                        comment: '打发时间'
                    },
                    {
                        time: '2019/04/13 21:00',
                        post: 'https://graduation-cartoon.oss-cn-beijing.aliyuncs.com/imgs/background4.png',
                        title: '视频1',
                        comment: '没啥想说的'
                    },
                    {
                        time: '2019/02/10 15:00',
                        post: 'https://graduation-cartoon.oss-cn-beijing.aliyuncs.com/imgs/background5.png',
                        title: '视频5',
                        comment: '评论评论噼里啪啦噼里啪啦噼里啪啦噼里啪啦噼里啪啦噼里啪啦噼里啪啦噼里啪啦噼里啪啦噼里啪啦噼里啪啦噼里啪啦噼里啪啦片'
                    }
                ],
                /*内容类型选择*/
                contentType: '视频'
            }
        },
        methods: {
            switchContentType (e) {
                this.contentType = e.target.innerText;
            }
        }
    }
</script>

<style scoped lang="less">
    @import "../../assets/less/variable.less";

    .time-line {
        width: 70%;
        margin-left: 5%;
        display: inline-block;
        &-func {
            min-width: 300px;
            width: 50%;
            margin: 10px auto;
            display: flex;
            justify-content: space-around;
            &-item {
                font-size: @font-size-title-small;
                color: @color-title-small;
            }
            .active {
                color: @background-active-color;
            }
        }
        &-container {
            .post {
                width: 120px;
                display: inline-block;
                margin-right: 20px;
                img {
                    width: 100%;
                }
            }
            .text {
                display: inline-block;
                vertical-align: top;
                h4 {
                    font-size: @font-size-title-small;
                    color: @color-title-small;
                    font-weight: bold;
                    margin: 10px 0;
                }
                p {
                    font-size: @font-size-content;
                    color: @color-content;
                }
            }
        }
    }
</style>
