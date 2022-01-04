<template>
  <!-- 导航栏 -->
  <div>
    <div class="lins">
      <span>首页</span>
    </div>
    <!-- 轮播图 -->
    <div class="home">
      <swiper ref="mySwiper" :options="swiperOption">
        <swiper-slide v-for="(item, index) in allist" :key="index">
          <div class="backimage" :style="item.backImage">
            <!-- <img :src="item.backImage" alt="寄" /> -->
            <div class="title" :style="{ color: item.color }">{{ item.name }}</div>
          </div>
        </swiper-slide>
        <!-- 分页器 -->
        <div class="swiper-pagination" slot="pagination"></div>
        <!-- 导航按钮 -->
        <!-- <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>-->
      </swiper>
      <swiper :options="swiperOption1" id="fir">
        <swiper-slide v-for="(item, i) in alarea" :key="i">
          <div class="backimage1" :style="item.backImage">
            <div class="titles">{{ item.tt }}</div>
          </div>
        </swiper-slide>
        <!-- 滚动条 -->
        <div class="swiper-scrollbar" slot="scrollbar"></div>
      </swiper>

      <!-- <button id="test" @click="todolist">装死</button> -->
      <!-- <button id="test2" @click="todolist">摆烂</button> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  
  data() {
    return {
      allist:[],
      alarea:[],
      hok:null,

      // 图片资源如果不用loader处理，似乎会被打包到加载不出来，(webpack导致的)
      
      // swiper5的写法
      swiperOption: {
        autoplay: {
          delay: 3000,
          disableOnInteraction: false //在用户操作后禁止自动切换
        },
        //设置环路
        loop: true,
        // 设置滑动方向
        direction: "vertical",
        preventClicks: true, //防止滑动时跳转
        observe: true, //修改swiper自己或子元素时自动初始化swiper
        observeParents: true, //修改swiper父元素时自动初始化swiper
        effect: "coverflow",
        coverflowEffect: {
          rotate: 0, //旋转角度
          stretch: 10, //拉伸
          depth: 60, //深度
          modifiter: 2, //修正度
          slideShadow: true //页面阴影
        },
        // 分页器
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true, //动态分页器以及主显示的数量
          dynamicMainBullets: 2,
          clickable: true //点击分页器前往对应slide
        }
        // 虚拟slide功能,一用就寄
        // virtual: true,
        // 前进后退
        // navigation: {
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev"
        // }
      },
      swiperOption1: {
        autoplay: {
          delay: 3000,
          disableOnInteraction: false //在用户操作后禁止自动切换
        },
        loop: true,
        preventClicks: true, //防止滑动时跳转
        observe: true, //修改swiper自己或子元素时自动初始化swiper
        observeParents: true, //修改swiper父元素时自动初始化swiper
        // 滚动条
        scrollbar: {
          el: ".swiper-scrollbar",
          draggable: true,
          dragSize: 40
        }
      },
      isCollapse: true,
      flag: 0
    };
  },
  mounted() {
    // 应该是swiper3的写法
    // this.$nextTick(() => {
    //   this.initSwiper();
    // });
    this.hokk();

  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  created(){
    // this.allist=this.$store.state.list;
    // this.alarea=this.$store.state.area;
  },
  methods: {
    hokk(){
      this.allist=this.$store.state.list,
      this.alarea=this.$store.state.area
    }
  }
};
</script>

<style lang="less" scoped>
body {
  height: 100px;
  overflow: hidden;
}
.home {
  position: relative;
  background: url("../../assets/山谷简约设计.jpg") no-repeat;
  width: 100%;
  height: 880px;
}
.swiper-container {
  position: absolute;
  color: aliceblue;
  bottom: 0;
  width: 100%;
  height: 300px;
  background: no-repeat center top;
  background-size: contain;
  font-size: 50px;
  .swiper-slide {
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: 500px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    .backimage {
      width: 100%;
      height: 500px;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }
    .title {
      width: 100px;
      height: 100px;
      font-size: 60px;
      font-weight: 600;
      // font-style: oblique;
      position: absolute;
      left: 0;
      top: -5px;
      text-align: center;
    }
  }
}
#fir {
  width: 100px;
  height: 350px;
  position: absolute;
  top: 200px;
  right: 0;
  .backimage1 {
    width: 100px;
    height: 350px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    .titles {
      width: 40px;
      height: 500px;
      font-size: 25px;
      line-height: 50px;
      color: black;
    }
  }
}

.home {
  .el-menu--popup-right-start {
    width: 100px;
  }
}
.lins {
  padding-left: 20px;
  height: 40px;
  line-height: 40px;
}
</style>
