import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    baseUrl: 'https://graduation-cartoon.oss-cn-beijing.aliyuncs.com',
    showHeader: true,
    showFooter: true,
    showPersonalCenter: false,
    cartoon: {
      currentPage: 0,
      showTools: false
    },
    currentFunction: '历史记录'
  },
  mutations: {
    hideLayoutM(state) {
      state.showHeader = false;
      state.showFooter = false;
    },
    showLayoutM(state) {
      state.showHeader = true;
      state.showFooter = true;
    },
    showPersonalCenterM (state) {
      state.showPersonalCenter =! state.showPersonalCenter;
    },
    setPage(state, page) {
      state.cartoon.currentPage = page;
    },
    showToolsM(state, status) {
      state.cartoon.showTools = status;
    },
    CurrentFunction (state, func) {
      state.currentFunction = func;
    }
  },
  actions: {
    hideLayout(context) {
      context.commit('hideLayoutM');
    },
    showLayout(context) {
      context.commit('showLayoutM');
    },
    showPersonalCenter(context) {
      context.commit('showPersonalCenterM');
    },
    setCurrentPage(context, page) {
      context.commit('setPage', page);
    },
    setShowTools(context, status) {
      context.commit('showToolsM', status);
    },
    switchCurrentFunction(context, func) {
      context.commit('CurrentFunction', func);
    }
  },
  modules: {
  }
})
