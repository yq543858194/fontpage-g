<template>
    <div class="setting">
        <el-row type="flex" justify="space-between" class="setting-row">
            <el-col :span="6">
                <el-upload action="#" class="avatar-uploader" :show-file-list="false" :on-change="avatarChange" :before-upload="avatarUpload">
                    <img v-if="avatarUrl !== ''" :src="avatarUrl">
                    <i v-else class="el-icon-plus avatar-uploader-icon"/>
                </el-upload>
            </el-col>
            <el-col :span="17">
                <el-row type="flex" justify="space-between" :gutter="20" class="setting-row">
                    <el-col :span="12" class="setting-input">
                        用户名
                        <el-input placeholder="用户名" :disabled="true" v-model="personalData.username"/>
                    </el-col>
                    <el-col :span="12" class="setting-input">
                        昵称
                        <el-input placeholder="请输入昵称" v-model="personalData.name"/>
                    </el-col>
                </el-row>
                <el-row type="flex" justify="space-between" :gutter="20" class="setting-row">
                    <el-col :span="12" class="setting-input">
                        生日
                        <el-date-picker v-model="personalData.birth" type="date" value-format="yyyy-MM-dd"/>
                    </el-col>
                    <el-col :span="12" class="setting-input">
                        电话号码
                        <el-input placeholder="请输入电话号码" v-model="personalData.phone"/>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24" class="setting-input">
                        电子邮件
                        <el-input palceholder="请输入电子邮件" v-model="personalData.email"/>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
        <el-row class="setting-row">
            <el-col :span="24" class="setting-input">
                喜欢标签
                <el-select v-model="personalData.favoriteLabel" multiple>
                    <el-option v-for="item in favoriteLabels" :value="item.value" :key="item.value" :label="item.label"/>
                </el-select>
            </el-col>
        </el-row>
        <el-row class="setting-row">
            <el-col :span="24">
                个人简介
                <el-input type="textarea" :rows="5" placeholder="请填写个人简介" v-model="personalData.description"/>
            </el-col>
        </el-row>
        <el-row class="setting-button-group">
            <el-col :offset="21" :span="3">
                <el-button type="primary">提交</el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "personalSetting",
        data () {
            return {
                /*图片显示地址*/
                avatarUrl: 'https://graduation-cartoon.oss-cn-beijing.aliyuncs.com/imgs/avatar.png',
                /*用户信息*/
                personalData: {
                    avatar: '',
                    username: 'nuxt@gmail.com',
                    name: '苍炎战神',
                    email: 'yq543858194@live.com',
                    birth: '1997-05-13',
                    phone: '15513283887',
                    favoriteLabel: ['001','003','005'],
                    description: '这个人很懒，什么都没有留下'
                },
                /*标签选择*/
                favoriteLabels: [
                    {
                        value: '001',
                        label: '异世界'
                    },
                    {
                        value: '002',
                        label: '魔王'
                    },
                    {
                        value: '003',
                        label: '猫耳'
                    },
                    {
                        value: '004',
                        label: '乡村'
                    },
                    {
                        value: '005',
                        label: '工业革命'
                    }
                ]
            }
        },
        methods: {
            avatarChange (file) {
                this.avatarUrl = URL.createObjectURL(file.raw);
            },
            avatarUpload (file) {
                console.log(file);
                return false;
            }
        }
    }
</script>

<style lang="less">
    .setting {
        width: 70%;
        margin-left: 5%;
        display: inline-block;
        .avatar-uploader .el-upload {
            width: 100%;
            border: 1px dashed #d9d9d9;
            border-radius: 6px;
            cursor: pointer;
            position: relative;
            overflow: hidden;
            img {
                width: 100%;
            }
        }
        .avatar-uploader .el-upload:hover {
            border-color: #409EFF;
        }
        .avatar-uploader-icon {
            font-size: 28px;
            color: #8c939d;
            width: 100%;
            height: 13vw;
            line-height: 13vw;
            text-align: center;
        }
        .avatar {
            width: 178px;
            height: 178px;
            display: block;
        }
        .setting-row {
            margin: 10px 0;
            :first-child {
                margin: 0;
            }
            font-weight: bold;
        }
        .setting-input {
            .el-input {
                width: 100%;
            }
            .el-select {
                width: 100%;
            }
        }
        .setting-button-group {
            .el-button {
                width: 100%;
            }
        }
    }
</style>
