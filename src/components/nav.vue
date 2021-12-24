<template>
  <nav>
    <el-aside style="overflow-x: hidden" :width="isCollapse ? '64px' : '200px'">
      <el-menu
        default-active="1-1"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        :collapse-transition="false"
        popper-append-to-body="true"
      >
        <el-menu-item index="0" @click="todoli2">
          <i class="el-icon-s-home"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">航班</span>
          </template>

          <el-menu-item-group>
            <span slot="title">国内航班</span>
            <!-- el-submenu是创建一个可展开的菜单 -->
            <el-submenu index="1-1">
              <span slot="title">一线城市</span>
              <el-menu-item index="1-1-1" @click="todolist">北京</el-menu-item>
              <el-menu-item index="1-1-2" @click="todolist">上海</el-menu-item>
              <el-menu-item index="1-1-3" @click="todolist">其他</el-menu-item>
            </el-submenu>
            <el-submenu index="1-2">
              <span slot="title">二线城市</span>
              <el-menu-item index="1-2-1" @click="todolist">杭州</el-menu-item>
              <el-menu-item index="1-2-2" @click="todolist">重庆</el-menu-item>
              <el-menu-item index="1-2-3" @click="todolist">其他</el-menu-item>
            </el-submenu>
            <el-menu-item index="1-3" @click="todolist">其他</el-menu-item>
          </el-menu-item-group>

          <el-menu-item-group>
            <span slot="title">国际航班</span>
            <el-submenu index="1-4">
              <span slot="title">美国</span>
              <el-menu-item index="1-4-1" @click="todolist"
                >华盛顿</el-menu-item
              >
              <el-menu-item index="1-4-1" @click="todolist">纽约</el-menu-item>
              <el-menu-item index="1-4-1" @click="todolist">其他</el-menu-item>
            </el-submenu>
            <el-submenu index="1-5">
              <span slot="title">加拿大</span>
              <el-menu-item index="1-5-1" @click="todolist"
                >多伦多</el-menu-item
              >
              <el-menu-item index="1-5-1" @click="todolist"
                >蒙特利尔</el-menu-item
              >
              <el-menu-item index="1-5-1" @click="todolist">其他</el-menu-item>
            </el-submenu>
            <el-menu-item index="1-6" @click="todolist">其他</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">菜单</span>
        </el-menu-item>
        <el-menu-item index="3" @click="todoli1">
          <i class="el-icon-document"></i>
          <span slot="title">数据统计</span>
        </el-menu-item>
        <el-menu-item index="4" @click="todoli">
          <i class="el-icon-setting"></i>
          <span slot="title">设置</span>
        </el-menu-item>
        <el-menu-item id="spp" @click="toggleCollapse">
          <i class="el-icon-arrow-right" v-if="this.isCollapse"></i>
          <i class="el-icon-arrow-left" v-else>
            <span>收起</span>
          </i>
        </el-menu-item>
      </el-menu>
    </el-aside>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: true,
    };
  },
  methods: {
    toggleCollapse() {
      this.isCollapse = !this.isCollapse;
    },
    todolist(item) {
      this.$router.push({
        path: "/postion",
      });
    },
    todoli() {
      this.$router.push({
        path: "/setting",
      });
        console.log('setting')

    },
    todoli1() {
      this.$router.push({
        path: "/echar",
      });
      console.log('echar')
    },
    todoli2() {
      this.$router.push({
        path: "/home",
      });
    },
  },
};
</script>

<style lang="less" scoped>
.el-aside {
  position: absolute;
  z-index: 1000;
  height: 100%;
  min-width: 80px;
  .el-submenu {
    display: inline;
  }
}
#spp {
  vertical-align: middle;
  span {
    display: inline;
    position: absolute;
    top: 22px;
    left: 50px;
    font-size: 14px;
    text-align: center;
  }
}
.el-aside {
  z-index: 100;
  position: absolute;
  top: 180px;
}
nav {
  min-width: 200px;
}
</style>
