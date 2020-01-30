<template>
  <div class="page-register">
    <article class="header">
      <header>
        <span class="login">
          <em class="bold">已有账号？</em>
          <router-link to="/login">
            <el-button
              type="primary"
              size="small">登录</el-button>
          </router-link>
        </span>
      </header>
    </article>
    <section>
      <el-form
        ref="ruleForm"
        :model="ruleForm"
        :rules="rules"
        label-width="100px"
        class="demo-ruleForm">
        <el-form-item
          label="用户名"
          prop="username">
          <el-input v-model="ruleForm.username" />
        </el-form-item>
        <el-form-item
          label="手机号码"
          prop="phone">
          <el-input v-model="ruleForm.phone" />
          <el-button
            size="mini"
            round
            @click="sendMsg">发送验证码</el-button>
          <span class="status">{{ statusMsg }}</span>
        </el-form-item>
        <el-form-item
          label="验证码"
          prop="code">
          <el-input
            v-model="ruleForm.code"
            maxlength="4" />
        </el-form-item>
        <el-form-item
          label="密码"
          prop="pwd">
          <el-input
            v-model="ruleForm.pwd"
            type="password" />
        </el-form-item>
        <el-form-item
          label="确认密码"
          prop="cpwd">
          <el-input
            v-model="ruleForm.cpwd"
            type="password" />
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            class="btn-register"
            @click="register">注册</el-button>
          <div class="error">{{ error }}</div>
        </el-form-item>
      </el-form>
    </section>
  </div>
</template>

<script>
import CryptoJS from 'crypto-js'
        export default {
          data() {
            return {
              statusMsg: '',
              error: '',
              ruleForm: {
                username: '',
                code: '',
                pwd: '',
                cpwd: '',
                phone: ''
              },
              rules: {
                username: [{
                  required: true,
                  type: 'string',
                  message: '请输入用户名',
                  trigger: 'blur'
                }],
                email: [{
                  required: true,
                  type: 'phone',
                  message: '请输入电话号码',
                  trigger: 'blur'
                }],
                pwd: [{
                  required: true,
                  message: '创建密码',
                  trigger: 'blur'
                }],
                cpwd: [{
                  required: true,
                  message: '确认密码',
                  trigger: 'blur'
                }, {
                  validator: (rule, value, callback) => {
                    if (value === '') {
                      callback(new Error('请再次输入密码'))
                    } else if (value !== this.ruleForm.pwd) {
                      callback(new Error('两次输入密码不一致'))
                    } else {
                      callback()
                    }
                  },
                  trigger: 'blur'
                }]
              }
            }
          },
          created() {
            this.$store.dispatch('hideFooter');
          },
          layout: 'blank',
          methods: {
            sendMsg: function () {
            },
            register: function () {
            }
          }
        }
</script>

<style lang="less">
  .page-register {
    .header {
      border-bottom: 2px solid #2bb8aa;
      min-width: 980px;
      color: #666;

      header {
        margin: 0 auto;
        padding: 10px 0;
        width: 980px;

        .site-logo {
          display: inline-block;
          width: 128px;
          width: 54px;
          height: 36px;
          text-indent: -9999px;
          background-position: -669px -748px;
          background-image: url(//s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/sp-normal.2ee5c09.png);
        }

        .login {
          float: right;
          margin-top: 15px;
        }

        .bold {
          font-style: normal;
        }
      }
    }

    >section {
      margin: 0 auto 30px;
      padding-top: 30px;
      width: 980px;
      min-height: 300px;
      padding-right: 550px;
      box-sizing: border-box;

      .status {
        font-size: 12px;
        margin-left: 20px;
        color: #e6a23c;
      }

      .error {
        color: red;
      }
    }
    .btn-register {
      width: 100%;
    }
  }
</style>
