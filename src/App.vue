<template>
  <div id="app">
    <transition name="fade-header" mode="out-in">
      <head-layout v-if="this.$store.state.showHeader"/>
    </transition>
    <transition name="fade-router" mode="out-in">
      <router-view/>
    </transition>
    <transition name="fade-router" mode="out-in">
      <Menu v-if="this.$store.state.showPersonalCenter"/>
    </transition>
    <el-dialog
            title="提示"
            :visible.sync="$store.state.info.visible"
            width="30%"
            :show-close="false"
            :close-on-press-escape="false"
            :close-on-click-modal="false">
      <span>{{$store.state.info.content}}</span>
      <span slot="footer" class="dialog-footer">
    <el-button type="info" @click="$store.dispatch('hideInfoDialog')">确 定</el-button>
  </span>
    </el-dialog>
    <transition name="fade-header" mode="out-in">
      <foot-layout v-if="this.$store.state.showFooter"/>
    </transition>
  </div>
</template>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.fade-router-enter-active,.fade-router-leave-active {
  transition: opacity .5s;
}
.fade-router-enter,.fade-router-leave-to {
  opacity: 0;
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
<script>
  import HeadLayout from "@/views/layout/Head";
  import Menu from "@/components/personalCenter/Menu";
  import FootLayout from "@/views/layout/Foot";
  export default {
    components: {FootLayout, HeadLayout, Menu},
    created() {
      if (localStorage.getItem("Authentication") != null) {
        this.$store.dispatch('setToken', localStorage.getItem("Authentication"));
      }
    }
  }
</script>
