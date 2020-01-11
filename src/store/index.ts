import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    baseUrl: 'http://localhost:8080',
    showHeader: true,
    showFooter: true,
    cartoon: {
      currentPage: 0,
      showTools: false
    }
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
    setPage(state, page) {
      state.cartoon.currentPage = page;
    },
    showToolsM(state, status) {
      state.cartoon.showTools = status;
    }
  },
  actions: {
    hideLayout(context) {
      context.commit('hideLayoutM');
    },
    showLayout(context) {
      context.commit('showLayoutM');
    },
    setCurrentPage(context, page) {
      context.commit('setPage', page);
    },
    setShowTools(context, status) {
      context.commit('showToolsM', status);
    }
  },
  modules: {
  }
})
