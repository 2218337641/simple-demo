<template>
  <div id="app" @click="isClick && waitOperate(15)">
    <times v-show="!(path === '/echar' || path === '/setting'||path==='/register')"></times>
    <nal v-show="!(path === '/home')"></nal>
    <reg></reg>
    <navs></navs>
    <router-view></router-view>
    <div class="hv" v-if="homeShow" @click="closePin">
    </div>
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
      path: "",
      isEdit:false,
      count:0,
      homeShow:false,
      timer:null,
      isClick:true
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
    this.waitOperate(15);
  },
  beforeDestroy(){
    clearInterval(this.timer)
  },
  methods:{
    // 当用户出发到点击事件时，重新出发该函数
    waitOperate(t){
      let _this = this;
      if(this.timer){
        this.count = 0
        console.log(678)
        clearInterval(this.timer)
      }
      this.timer = setInterval(function(){
        _this.count++;
        if(_this.count >= t){
          _this.count = 0;
          clearInterval(_this.timer);
          _this.homeShow = true
        }
        console.log(_this.count)
        console.log(_this.homeShow)
      },1000)
    },
    closePin(){
      this.homeShow = false
    }
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
  height: 1080px;
  overflow: hidden;
  margin: 0 auto;
  position: relative;
  -moz-user-select: -moz-none;
  -moz-user-select: none;
  -o-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  .hv{
    position: absolute;
    top: 40px;
    right: 0;
    background-image: url(assets/heiyashiwoma.jpg);
    background-attachment:fixed;
    z-index: 99999;
    height: 1040px;
    width: 100%;
  }
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
