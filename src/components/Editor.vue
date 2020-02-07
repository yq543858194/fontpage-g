<template>
    <div :style="{padding: isPadding ? '0 20px' : 0}">
        <!--评论框: wangEditor文本输入插件-->
        <div ref="editor" style="text-align:left"></div>
        <!--提交按钮-->
        <div class="submit-button">
            <el-button type="primary" v-on:click="submit">发表</el-button>
        </div>
    </div>
</template>

<script>
    import E from 'wangeditor'

    export default {
        name: 'editor',
        data() {
            return {
                /*评论内容*/
                editorContent: ''
            }
        },
        props: {
            /*是否有Padding*/
            isPadding: {
                type: Boolean,
                default: false
            },
            /*评论类型*/
            type: {
                type: String
            }
        },
        methods: {
            /*提交评论操作*/
            submit() {
                let self = this;
                if (self.editorContent === '') {
                    self.$store.dispatch('infoDialog', '评论内容不能为空');
                } else {
                    let data = {};
                    data["content"] = self.editorContent;
                    data[`${self.type}Id`] = self.$route.query.id;
                    self.$axios.post(self.$store.state.serverBaseUrl + `/api/${self.type}Comment/addComment`,data,{
                        headers: {
                            Authorization: self.$store.state.user.Authentication
                        }
                    }).then(res => {
                        if (res.data.code === 200) {
                            self.$store.dispatch('infoDialog', '评论成功');
                            self.$parent.updateList(self.$store.state.contentId);
                        } else if (res.data.code === 311) {
                            self.$store.dispatch('infoDialog', '请重新登录');
                        }else {
                            self.$store.dispatch('infoDialog', res.data.msg);
                        }
                    })
                }
            },
        },
        mounted() {
            /*初始化插件*/
            let editor = new E(this.$refs.editor);
            editor.customConfig.onchange = (html) => {
                this.editorContent = html
            };
            editor.customConfig.menus = [
                'bold',  // 粗体
                'fontSize',  // 字号
                'fontName',  // 字体
                'italic',  // 斜体
                'underline',  // 下划线
                'strikeThrough',  // 删除线
                'foreColor',  // 文字颜色
                'backColor',  // 背景颜色
                'link',  // 插入链接
                'list',  // 列表
                'justify',  // 对齐方式
                'quote',  // 引用
                'emoticon',  // 表情
                'image',  // 插入图片
                'undo',  // 撤销
                'redo'  // 重复
            ];
            editor.customConfig.zIndex = 1000;
            editor.create()
        }
    }
</script>

<style scoped>
    .submit-button {
        padding: 5px 0 10px 0;
        text-align: right;
    }
</style>
