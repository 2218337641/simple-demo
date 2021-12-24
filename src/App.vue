<template>
  <div id="app">
    <times v-show="!(path === '/echar' || path === '/setting'||path==='/register')"></times>
    <nal v-show="!(path === '/home')"></nal>
    <reg></reg>
    <navs></navs>
    <router-view></router-view>
  </div>
</template>

<script>
import times from "@/components/time.vue";
import nal from "@/components/nal.vue";
import navs from "@/components/nav.vue";
import reg from "@/components/register.vue";
export default {
  data() {
    return {
      path: ""
    };
  },
  name: "App",
  components: {
    times,
    reg,
    nal,
    navs
  },
  mounted() {
    this.path = this.$route.path;
  },
  watch: {
    $route(to, from) {
      this.path = to.path;
    }
  }
};
</script>

<style lang="less" scoped>
#app {
  font-family: SelfFont;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 700px;
  margin: 0 auto;
  position: relative;
  -moz-user-select: -moz-none;
  -moz-user-select: none;
  -o-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  .icon,
  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }
}
</style>
