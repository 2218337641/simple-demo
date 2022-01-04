import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  yname: "航班介绍",

  // locale:"zh",

  list: [
    {
      name: "歪",
      color: "skyblue",
      backImage: {
        backgroundImage:
          "url(" +
          require("@/assets/img/Snipaste_2021-12-08_13-59-12.png") +
          ")"
      }
    },
    {
      name: "比",
      color: "white",
      backImage: {
        backgroundImage:
        "url(" +
          require("@/assets/img/Snipaste_2021-12-08_14-00-46.png") +
          ")"
      }
    },
    {
      name: "巴",
      color: "white",
      backImage: {
        backgroundImage:
          "url(" +
          require("@/assets/img/Snipaste_2021-12-08_14-01-15.png") +
          ")"
      }
    },
    {
      name: "卜",
      color: "white",
      backImage: {
        backgroundImage:
          "url(" +
          require("@/assets/img/Snipaste_2021-12-08_14-01-48.png") +
          ")"
      }
    }
  ],
  area: [
    {
      tt: "布拉格广场",
      backImage: {
        backgroundImage:
          "url(" +
          require("@/assets/img/Snipaste_2021-12-08_13-59-12.png") +
          ")"
      }
    },
    {
      tt: "下蛋公鸡",
      backImage: {
        backgroundImage:
          "url(" +
          require("@/assets/img/Snipaste_2021-12-08_14-00-46.png") +
          ")"
      }
    },
    {
      tt: "套马杆的汉子",
      backImage: {
        backgroundImage:
          "url(" +
          require("@/assets/img/Snipaste_2021-12-08_14-01-15.png") +
          ")"
      }
    },
    {
      tt: "走过咖啡屋",
      backImage: {
        backgroundImage:
          "url(" +
          require("@/assets/img/Snipaste_2021-12-08_14-01-48.png") +
          ")"
      }
    }
  ],
};

export default new Vuex.Store({
  state,
  mutations: {
    // getLanguage(state,n){
    //   state.locale='en'
    //   console.log(state.locale)
    // }
  },
  
  actions: {},
  modules: {},
});
