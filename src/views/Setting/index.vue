<template>
  <div class="his">
    <el-row>
      <el-col :gutter="20" :span="20" :offset="2">
        <!-- 行数等于3 -->
        <el-descriptions class="margin-top" title="用户信息表" :column="3" border>
          <template slot="extra">
            <el-button type="primary" size="small">编辑</el-button>
          </template>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-user"></i>
              用户名
            </template>
            kooriookami
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-mobile-phone"></i>
              手机号
            </template>
            18100000000
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-location-outline"></i>
              居住地
            </template>
            苏州市
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-tickets"></i>
              备注
            </template>
            <el-tag size="small">学校</el-tag>
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-office-building"></i>
              联系地址
            </template>
            江苏省苏州市吴中区吴中大道 1188 号
          </el-descriptions-item>
        </el-descriptions>
      </el-col>
    </el-row>

    <el-row :gutter="20" id="con" style="margin-top:60px">
      <el-col :span="3" :offset="2">
        <div class="grid-content">
          <div class="block">
            <el-timeline :reverse="reverse">
              <el-timeline-item
                v-for="(activity, index) in activities"
                :key="index"
                :timestamp="activity.timestamp"
              >{{activity.content}}</el-timeline-item>
            </el-timeline>
          </div>
        </div>
      </el-col>
      <el-col :span="17">
        <div class="grid-content">
          <el-container>
            <el-header style="text-align:right; font-size:16px; height:30px">
              <span>行程信息</span>
            </el-header>
            <el-main style="padding-top:10px">
              <el-table ref="filterTable" :data="tableData" style="width: 100%">
                <el-table-column
                  prop="date"
                  label="日期"
                  sortable
                  width="180"
                  column-key="date"
                  :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
                  :filter-method="filterHandler"
                ></el-table-column>
                <el-table-column prop="name" label="购票人" width="180"></el-table-column>
                <el-table-column prop="address" label="目的地" :formatter="formatter"></el-table-column>
                <el-table-column
                  prop="address"
                  label="航班状态"
                  width="250px"
                  :filters="[{text:'正点',value:'正点'},{text:'延误',value:'延误'},{text:'取消',value:'取消'}]"
                  :filter-method="filterTags"
                  filter-placement="bottom-end"
                >
                  <template slot-scope="scope">
                    <el-tag
                      effect="dark"
                      :type="scope.row.tags === '正点' ? 'success' : scope.row.tags === '延误' ? 'warning' : 'danger'"
                      disable-transitions
                    >{{scope.row.tags}}</el-tag>
                  </template>
                </el-table-column>

                <el-table-column
                  prop="tag"
                  label="标签"
                  width="100"
                  :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
                  :filter-method="filterTag"
                  filter-placement="bottom-end"
                >
                  <template slot-scope="scope">
                    <el-tag
                      :type="scope.row.tag === '家' ? 'primary' : 'success'"
                      disable-transitions
                    >{{scope.row.tag}}</el-tag>
                  </template>
                </el-table-column>
              </el-table>
            </el-main>
          </el-container>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Setting",
  data() {
    return {
      reverse: true,
      activities: [
        {
          content: "最近一次乘机",
          timestamp: "2021-12-06"
        },
        {
          content: "第一次乘机",
          timestamp: "2020-06-30"
        },
        {
          content: "第一次购票",
          timestamp: "2020-06-15"
        },
        {
          content: "身份认证",
          timestamp: "2019-09-02"
        }
      ],
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "江苏省南京市凤锦路26号",
          tag: "公司",
          tags: "正点"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
          tag: "家",
          tags: "取消"
        },
        {
          date: "2014-02-26",
          name: "王小虎",
          address: "安徽省芜湖市金塔路126号",
          tag: "家",
          tags: "正点"
        },
        {
          date: "2018-09-03",
          name: "王小虎",
          address: "安徽省淮南市三和乡安徽理工大学",
          tag: "公司",
          tags: "正点"
        },
        {
          date: "2018-12-16",
          name: "王小虎",
          address: "上海市闵行区老沪闵路85号",
          tag: "公司",
          tags: "延误"
        }
      ]
    };
  },
  mounted() {},
  methods: {
    resetDateFilter() {
      this.$refs.filterTable.clearFilter("date");
    },
    clearFilter() {
      this.$refs.filterTable.clearFilter();
    },
    filterTags(value, row) {
      return row.tags === value;
    },
    formatter(row, column) {
      return row.address;
    },
    filterTag(value, row) {
      return row.tag === value;
    },
    filterHandler(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    }
  }
};
</script>

<style lang="less" scoped>
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}
html {
  overflow-y: scroll;
  overflow-x: scroll;
}
.his {
  height: 1040px;
  overflow: hidden;
  background-color: rgb(243, 243, 243);
  // background-color: #e5e9f2;
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
#con {
  .grid-content {
    min-height: 500px;
  }
}
.block {
  margin-top: 80px;
}
.margin-top {
  margin-top: 50px;
}
</style>
