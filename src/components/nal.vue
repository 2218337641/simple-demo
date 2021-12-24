<template>
  <div class="nal">
    <!-- 表头 -->
    <el-page-header @back="goBack" :content="this.$route.name"></el-page-header>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    goBack() {
      this.$router.back();
    }
  }
};
</script>

<style lang="less" scoped>
.nal {
  position: relative;
  height: 40px;
  line-height: 40px;
  width: 100%;
}

.firn {
  float: right;
}
</style>