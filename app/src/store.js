import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allgames: [],
  },
  mutations: {
    SET_ALLGAMES: (state, newState) => state.allgames = newState,
  },
  actions: {

  },
  getters: {
    allgames: state => state.allgames,
  },
})
