<template>
  <div class="page-login">
    <div class="login-panel">
      <div class="banner">
        <img
          src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg"
          width="480"
          height="370"
          alt="美团网">
      </div>
      <div class="form">
        <h4
          v-if="error"
          class="tips"><i/>{{ error }}</h4>
        <p><span>账号登录</span></p>
        <el-input
          v-model="phone"
          prefix-icon="el-icon-phone"/>
        <el-input
          v-model="password"
          prefix-icon="el-icon-lock"
          type="password"/>
        <div class="foot">
          <el-checkbox v-model="checked">7天内自动登录</el-checkbox>
          <b>忘记密码？</b>
        </div>
        <el-button
          class="btn-login"
          type="success"
          size="mini"
          @click="login">登录</el-button>
        <div class="foot">
          <router-link to="/register">
            <b>没有账号？点我注册</b>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CryptoJS from 'crypto-js'
export default {
  data: () => {
    return {
      checked: '',
      phone: '',
      password: '',
      error: ''
    }
  },
  created() {
    this.$store.dispatch('hideFooter');
  },
  layout: 'blank',
  methods: {
    login: function () {
      let self = this;
      self.$axios.post (self.$store.state.serverBaseUrl + "/api/user/login", {
        phone: self.phone,
        password: self.password
      }).then((response) => {
        if (response.data.code === 200) {
          localStorage.setItem("Authentication", response.data.data);
          self.$store.dispatch("setToken", response.data.data);
          self.$router.push('/');
        } else {
          self.$store.dispatch('infoDialog', response.data.msg);
        }
      }).catch((error) => {
        self.$store.dispatch('infoDialog', error);
      })
    }
  }
}
</script>

<style lang="less">
  .page-login{
    margin-top: 30px;
    .login-header {
      position: relative;
      width: 980px;
      height: auto;
      margin: 40px auto 30px;
      .logo {
        background-image: url(//s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/sp-retina.b95a7dd.png);
        background-position: 0 !important;
        background-size: contain !important;
        width: 82px;
        height: 54px;
        display: block;
      }
    }
    .login-panel {
      margin: 0 auto 70px;
      width: 980px;
      display: flex;
      .banner {
        margin-right: 115px;
      }
      .form {
        display: flex;
        flex-direction: column;
        width: 270px;
        .tips {
          margin-bottom: 10px;
          padding: 10px;
          border: 1px solid #f5d8a7;
          border-radius: 2px;
          background: #fff6db;
          font-size: 12px;
          padding-left: 26px;
          >i {
            position: relative;
            &:after {
              position: absolute;
              display: inline-block;
              width: 17px;
              height: 17px;
              font-family: iconfont;
              font-style: normal;
              content: "\e64d";
              font-size: 28px;
              top: -9px;
              left: -24px;
            }
          }
        }
        em {
          font-style: normal;
          float: right;
        }
      }

      .el-input {
        margin-top: 10px;
      }

      .foot {
        margin-top: 10px;
        position: relative;
        b {
          float: right;
          color: #2c3e50;
        }
        .el-checkbox {
          position: absolute;
          left: 0;
          line-height: 25px;
        }
      }

      .el-input__icon {
        &.profile {
          &:after {
            font-family: iconfont;
            content: "\e627";
            font-style: normal;
            top: -1px;
            left: 5px;
            position: absolute;
          }
        }

        &.password {
          &:after {
            font-family: iconfont;
            content: "\E600";
            font-style: normal;
            top: -1px;
            left: 3px;
            position: absolute;
            font-size: 18px;
          }
        }
      }

      .btn-login {
        margin-top: 10px;
        color: #fff;
        background-color: #2db3a6;
        border: none;
        padding: 12px 15px;
      }
    }
  }
</style>
