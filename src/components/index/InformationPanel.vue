<template>
    <div class="information" :style="{width: width}">
        <!--详细信息对话框-->
        <el-dialog :title="dialogStatus.dialogTitle" :visible.sync="dialogStatus.showDialog" width="50%">
            <div class="dialog-content">
                <img :src="dialogStatus.dialogImage" alt=""/>
                <span>{{dialogStatus.dialogContent}}</span>
            </div>
        </el-dialog>
        <!--左信息面板-->
        <div class="information-panel left">
            <div class="information-panel-item">
                <span>类型</span>
                <p>{{information.type}}</p>
            </div>
            <div class="information-panel-item">
                <span>地区</span>
                <p>{{information.area}}</p>
            </div>
            <div class="information-panel-item">
                <span>主要角色</span>
                <p>
                    <a href="javascript:void(0)" @click="showDialog(item.name, item.description, item.url)" v-for="(item, index) in information.role" :key="index">{{item.name}}</a>
                </p>
            </div>
            <div class="information-panel-item">
                <span>剧情</span>
                <p>
                    <a href="javascript:void(0)" @click="showDialog(item.title, item.description, false)" v-for="(item, index) in information.polt" :key="index">{{item.title}}</a>
                </p>
            </div>
        </div>
        <!--右信息面板-->
        <div class="information-panel right">
            <div class="information-panel-item">
                <span>标签</span>
                <p>{{information.label}}</p>
            </div>
            <div class="information-panel-item">
                <span>年代</span>
                <p>{{information.time}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "InformationPanel",
        props: {
            /*动漫基本信息*/
            information: {
                type: Object,
                default () {
                    return {
                        /*动漫类型*/
                        type: '热血',
                        /*动漫地区*/
                        area: '中国',
                        /*动漫年代*/
                        time: 2015,
                        /*动漫标签*/
                        label: '异世界，兽耳，精灵',
                        /*动漫角色*/
                        role: [
                            {
                                /*角色名*/
                                name: '角色1',
                                /*角色描述信息*/
                                description: '描述1',
                                /*角色图片地址*/
                                url: '#'
                            },
                        ],
                        /*剧情信息*/
                        polt: [
                            {
                                /*剧情标题*/
                                title: '剧情1',
                                /*剧情描述*/
                                description: '描述1'
                            }
                        ]
                    }
                }
            },
            /*组件宽度*/
            width: {
                type: String,
                default: '1610px'
            }
        },
        data () {
            return {
                /*对话框信息*/
                dialogStatus: {
                    /*对话框显示状态*/
                    showDialog: false,
                    /*对话框标题*/
                    dialogTitle: '标题',
                    /*对话框内容*/
                    dialogContent: '内容',
                    /*对话框图片地址*/
                    dialogImage: ''
                }
            }
        },
        methods: {
            /**
             * 显示详细信息对话框
             * @param title 对话框标题
             * @param content 对话框内容
             * @param image 对话框图片地址
             */
            showDialog (title, content, image) {
                this.dialogStatus.dialogTitle = title;
                this.dialogStatus.dialogContent = content;
                if (image !== false) this.dialogStatus.dialogImage = image;
                else this.dialogStatus.dialogImage = '#';
                this.dialogStatus.showDialog = true;
            }
        }
    }
</script>

<style scoped lang="less">
    @import "../../assets/less/variable.less";

    .information {
        margin: 0 auto;
        overflow: hidden;
        &-panel {
            width: 50%;
            box-sizing: border-box;
            padding: 10px;
            padding-left: 30px;
            &-item {
                padding: 10px 5px 10px 0;
                text-align: left;
                span {
                    display: inline-block;
                    width: 75px;
                    padding: 0;
                    font-size: @font-size-content;
                    color: @color-content;
                    font-weight: bold;
                }
                p {
                    display: inline;
                    padding: 0 0 0 15%;
                    font-size: @font-size-content;
                    color: @color-addition;
                }
                a {
                    display: inline;
                    font-size: @font-size-content;
                    color: @color-addition;
                }
            }
        }
    }
</style>
