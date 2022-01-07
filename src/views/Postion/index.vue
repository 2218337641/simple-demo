<template>
  <div class="jill">
    <swiper :options="swiperOptions" id="firs">
      <swiper-slide v-for="(item, i) in area" :key="i">
        <div class="backimage" :style="item.backImage">
          <div class="titles">{{ item.tt }}</div>
        </div>
      </swiper-slide>

      <!-- 滚动条 -->
      <!-- <div class="swiper-scrollbar" slot="scrollbar"></div> -->
    </swiper>

    <el-collapse v-model="activeName" accordion id="el-c">
      <el-collapse-item title="一致性 Consistency" name="1">
        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
      </el-collapse-item>
      <el-collapse-item title="反馈 Feedback" name="2">
        <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
        <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
      </el-collapse-item>
      <el-collapse-item title="效率 Efficiency" name="3">
        <div>简化流程：设计简洁直观的操作流程；</div>
        <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
        <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
      </el-collapse-item>
      <el-collapse-item title="可控 Controllability" name="4">
        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
        <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOptions: {
        autoplay: {
          delay: 3000,
          disableOnInteraction: false //在用户操作后禁止自动切换
        },
        effect: "coverflow",
        coverflowEffect: {
          rotate: 0, //旋转角度
          stretch: 10, //拉伸
          depth: 60, //深度
          modifiter: 2, //修正度
          slideShadow: true //页面阴影
        },
        //设置环路
        loop: true
        // 如果需要滚动条
        // scrollbar: {
        //   el: ".swiper-scrollbar"
        // }
      },
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
          tt: "朱丽叶的秋天",
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
      activeName: "1"
    };
  },
  methods: {
    goBack() {
      this.$router.back();
    }
  }
};
</script>

<style lang="less" scoped>
.jill {
  position: relative;
  width: 100%;
  height: 1040px;
}
#firs {
  width: 100%;
  height: 876.02px;
  position: absolute;
  right: 0;
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
    z-index: -1;
    .backimage {
      width: 100%;
      height: 100%;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }
    .titles {
      width: 40px;
      height: 500px;
      font-size: 25px;
      line-height: 50px;
      color: black;
    }
  }
}
.jill {
  .el-collapse {
    position: absolute;
    bottom: 0;
    width: 100%;
    right: 0;
    z-index: 100;
  }
  .el-page-header {
    background-color: rgb(103, 200, 224);
  }
}
</style>
