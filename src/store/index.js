import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  yname: "航班介绍",
};

export default new Vuex.Store({
  state,
  mutations: {
    editname(state) {
      state.yname = "jack";
    },
  },
  actions: {},
  modules: {},
});
