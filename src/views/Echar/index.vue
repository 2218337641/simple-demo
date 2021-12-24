<template>
  <div class="ech">
    <el-row :gutter="20">
      <el-col :span="20" :offset="2">
        <el-container id="el-1">
          <el-header>
            <el-descriptions title="公司营收">
              <el-descriptions-item label="公司名称">南方航空</el-descriptions-item>
              <el-descriptions-item label="营运编号">18100000000</el-descriptions-item>
              <el-descriptions-item label="注册地">厦门市</el-descriptions-item>
              <el-descriptions-item label="注册类型">
                <el-tag size="small">公众营运类</el-tag>
              </el-descriptions-item>
              <el-descriptions-item label="联系地址">厦门市开冲区成化大道8848号</el-descriptions-item>
            </el-descriptions>
          </el-header>
          <el-container>
            <el-aside style="width:400px">
              <div class="chart" ref="chart" style="width:400px;height:300px"></div>
            </el-aside>
            <el-main>
              <div>XXXXXXXXXXXXXXXX</div>
              <div ref="chart1" class="chart1" style="width:400px;height:300px"></div>
            </el-main>
          </el-container>
          <el-divider></el-divider>
          <el-container>
            <el-aside style="width:400px">
              <div class="char" ref="char" style="width:500px;height:400px"></div>
            </el-aside>
            <el-main></el-main>
          </el-container>
          <el-divider></el-divider>
        </el-container>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import * as echarts from "echarts";

export default {
  name: "echar",
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      var myChart = echarts.init(this.$refs.chart);
      var myChart1 = echarts.init(this.$refs.chart1);
      var myChart2 = echarts.init(this.$refs.char);
      var option = {
        // 图表标题
        title: {
          text: "2021上半年航班数统计图"
        },
        // 配置提示信息
        tooltip: {},
        // 配置要在X轴显示的项
        xAxis: {
          data: ["1月份", "2月份", "3月份", "4月份", "5月份", "6月份"]
        },
        // 同理在y轴
        yAxis: {},
        // 每个系列通过type来决定自己的图标类型
        series: [
          {
            name: "经飞航班数", //系列名称
            type: "bar", //系列图表类型
            data: [542, 2064, 3687, 1654, 356, 4565] //数据内容
          }
        ]
      };
      var option1 = {
        title: {
          text: "2021上半年度用户数量折线图"
        },
        tooltip: {},
        xAxis: {
          data: ["1月份", "2月份", "3月份", "4月份", "5月份", "6月份"]
        },
        yAxis: {},
        series: [
          {
            name: "服务客户数",
            type: "line",
            data: [45343, 43253, 87654, 65432, 24356, 98653]
          }
        ]
      };
      var option2 = {
        title: {
          text: "2019-2021年上半年度分公司营收图"
        },
        legend: {},
        tooltip: {},
        dataset: {
          // 指定维度名的顺序，从而可以使用默认的维度到坐标轴的映射
          dimensions: ["revenue", "2019", "2020", "2021"],
          source: [
            { revenue: "厦门航空", "2019": 4852, "2020": 1868, "2021": 2584 },
            { revenue: "珠海航空", "2019": 2893, "2020": 1662, "2021": 1366 },
            { revenue: "重庆航空", "2019": 3595, "2020": 2559, "2021": 2865 },
            { revenue: "贵州航空", "2019": 1868, "2020": 985, "2021": 1486 }
          ]
        },
        xAxis: { type: "category" },
        yAxis: {},
        series: [{ type: "bar" }, { type: "bar" }, { type: "bar" }]
      };
      myChart.setOption(option);
      myChart1.setOption(option1);
      myChart2.setOption(option2);
    }
  }
};
</script>

<style lang="less" scoped>
.ech {
  background-color: rgb(243, 243, 243);
  height: 880px;
  overflow: hidden;
}
.mains {
  width: 400px;
  height: 300px;
}
.el-header {
  padding: 0;
  color: #333;
  text-align: center;
  height: 180px !important;
  line-height: 60px;
}
.el-aside {
  color: #333;
  text-align: center;
  line-height: 200px;
}
.el-main {
  color: #333;
  padding: 0;
  div {
    font-size: 50px;
    display: inline;
  }
}
.el-divider {
  background-color: #4c8f98;
  margin: -5px 0px 30px;
}
.chart1 {
  float: right;
}
</style>
