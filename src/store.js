import Vue from 'vue';
import Vuex from 'vuex';

import config from './modules/config';
// import online from './modules/online';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    content: '',
    selfInfo: {},
    newBee: false,
    play: true,
    weiboShareContent: '',
    weiboShareContentEx: '',
    ids: []
  },
  mutations: {
    SET_CONTENT(state, data) {
      state.content = data;
    },
    SET_IDS(state, data) {
      state.ids = data;
    },
    SET_IF(state, data) {
      state.selfInfo = data;
    },
    SET_PLAY(state, data) {
      state.play = data;
    },
    SET_WSC(state, data) {
      state.weiboShareContent = data;
    },
    SET_WSCE(state, data) {
      state.weiboShareContentEx = data;
    },
    SET_NB(state, data) {
      state.newBee = data;
    }
  },
  actions: {
    setContent: ({ commit }, data) => commit('SET_CONTENT', data),
    setIds: ({ commit }, data) => commit('SET_IDS', data),
    setNewBee: ({ commit }, data) => commit('SET_NB', data),
    setPlay: ({ commit }, data) => commit('SET_PLAY', data),
    setWsc: ({ commit }, data) => commit('SET_WSC', data),
    setWscE: ({ commit }, data) => commit('SET_WSCE', data),
    setIF: ({ commit }, data) => commit('SET_IF', data)
  },
  modules: {
    config
  }
});
