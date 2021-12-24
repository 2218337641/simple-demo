<template>
  <div class="maintime">
    <div class="times1">{{ time }}</div>
    <div class="timeps"></div>
    <div class="times2">{{weeks}}</div>
    <div class="times3">{{date}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      time: "",
      date: "",
      week: [
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六"
      ],
      weeks: ""
    };
  },
  mouted() {},
  methods: {
    updateTime() {
      let cd = new Date();
      this.time =
        this.zeroPadding(cd.getHours(), 2) +
        ":" +
        this.zeroPadding(cd.getMinutes(), 2) +
        ":" +
        this.zeroPadding(cd.getSeconds(), 2);
    },
    updateTimes() {
      let cd = new Date();
      this.date =
        this.zeroPadding(cd.getFullYear(), 4) +
        "/" +
        this.zeroPadding(cd.getMonth() + 1, 2) +
        "/" +
        this.zeroPadding(cd.getDate(), 2);
      this.weeks = this.week[cd.getDay()];
    },

    zeroPadding(num, digit) {
      var zero = "";
      for (var i = 0; i < digit; i++) {
        zero += "0";
      }
      return (zero + num).slice(-digit);
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    }
  },
  created() {
    setInterval(() => {
      this.updateTime();
    }, 100);
    this.updateTimes();
  }
};
</script>
<style lang="less" scoped>
.maintime {
  width: 20%;
  position: absolute;
  left: 33%;
  top: 10%;
  z-index: 200;

  .times1 {
    position: absolute;
    color: #2575a3;
    font-size: 50px;
    top: 60px;
    left: 10px;
    // font-weight: 600;
  }

  .timeps {
    background-color: #2575a3;
    width: 3px;
    height: 65px;
    position: absolute;
    left: 15%;
    top: 120px;
  }
  .times2 {
    width: 45%;
    color: #2575a3;
    font-size: 30px;
    position: absolute;
    left: -15%;
    top: 130px;
  }
  .times3 {
    color: #2575a3;
    font-size: 30px;
    position: absolute;
    left: 20%;
    top: 130px;
  }
}
</style>
