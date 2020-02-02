import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    /*资源基础路径*/
    baseUrl: 'https://graduation-cartoon.oss-cn-beijing.aliyuncs.com',
    /*服务器基础路径*/
    serverBaseUrl: 'http://localhost:2333',
    /*提示信息对话框信息*/
    info: {
      /*提示信息对话框可见性*/
      visible: false,
      /*提示信息对话框内容*/
      content: ''
    },
    /*Header可见性*/
    showHeader: true,
    /*Footer可见性*/
    showFooter: true,
    /*个人中心菜单可见性*/
    showPersonalCenter: false,
    /*动漫/轻小说观看页相关*/
    cartoon: {
      /*当前页*/
      currentPage: 0,
      /*工具栏可见性*/
      showTools: false
    },
    /*个人中心当前页面*/
    currentFunction: '历史记录',
    /*当前用户信息*/
    user: {
      /*Token*/
      Authentication: '',
      /*用户信息*/
      userData: null
    }
  },
  mutations: {
    /**
     * 隐藏Header
     * @param state
     */
    hideLayoutHeader(state) {
      state.showHeader = false;
    },

    /**
     * 隐藏Footer
     * @param state
     */
    hideLayoutFooter(state) {
      state.showFooter = false;
    },

    /**
     * 显示Header
     * @param state
     */
    showLayoutHeader(state) {
      state.showHeader = true;
    },

    /**
     * 显示Footer
     * @param state
     */
    showLayoutFooter(state) {
      state.showFooter = true;
    },

    /**
     * 显示/隐藏个人中心菜单
     * @param state
     */
    showPersonalCenterM (state, status) {
      state.showPersonalCenter = status;
    },

    /**
     * 设置动漫轻小说观看页当前页
     * @param state
     * @param page
     */
    setPage(state, page) {
      state.cartoon.currentPage = page;
    },

    /**
     * 设置动漫/轻小说工具栏显示/隐藏
     * @param state
     * @param status
     */
    showToolsM(state, status) {
      state.cartoon.showTools = status;
    },

    /**
     * 设置当前个人中心的页面
     * @param state
     * @param func
     * @constructor
     */
    CurrentFunction (state, func) {
      state.currentFunction = func;
    },

    /**
     * 设置提示信息对话框显示内容
     * @param state
     * @param content
     */
    setInfoDialog (state, content) {
      state.info.visible = true;
      state.info.content = content;
    },

    /**
     * 隐藏提示信息对话框
     * @param state
     */
    hideInfoDialog (state) {
      state.info.visible = false;
    },

    /**
     * 设置用户token
     * @param state
     * @param token
     */
    setToken (state, token) {
      state.user.Authentication = token;
    },

    /**
     * 设置用户信息
     * @param state
     * @param userData
     */
    setUserData (state, userData) {
      state.user.userData = userData;
    }
  },
  actions: {
    /**
     * 隐藏Header与Footer动作
     * @param context
     */
    hideLayout(context) {
      context.commit('hideLayoutHeader');
      context.commit('hideLayoutFooter');
    },

    /**
     * 显示Header与Footer动作
     * @param context
     */
    showLayout(context) {
      context.commit('showLayoutHeader');
      context.commit('showLayoutFooter');
    },

    /**
     * 隐藏Footer动作
     * @param context
     */
    hideFooter(context) {
      context.commit('hideLayoutFooter');
    },

    /**
     * 显示/隐藏个人中心菜单动作
     * @param context
     */
    showPersonalCenter(context, status) {
      context.commit('showPersonalCenterM', status);
    },

    /**
     * 设置动漫轻小说观看页当前页动作
     * @param context
     * @param page
     */
    setCurrentPage(context, page) {
      context.commit('setPage', page);
    },

    /**
     * 设置动漫/轻小说工具栏显示/隐藏动作
     * @param context
     * @param status
     */
    setShowTools(context, status) {
      context.commit('showToolsM', status);
    },

    /**
     * 设置当前个人中心的页面
     * @param context
     * @param func
     */
    switchCurrentFunction(context, func) {
      context.commit('CurrentFunction', func);
    },

    /**
     * 设置提示信息对话框显示内容
     * @param context
     * @param content
     * @constructor
     */
    infoDialog (context, content) {
      context.commit('setInfoDialog', content);
    },

    /**
     * 隐藏提示信息对话框
     * @param context
     */
    hideInfoDialog (context) {
      context.commit('hideInfoDialog');
    },

    /**
     * 设置用户token
     * @param context
     * @param token
     */
    setToken (context, token) {
      context.commit('setToken', token);
    },

    /**
     * 设置用户信息
     * @param context
     * @param userData
     */
    setUserData (context, userData) {
      context.commit('setUserData', userData);
    }
  },
  modules: {
  }
})
