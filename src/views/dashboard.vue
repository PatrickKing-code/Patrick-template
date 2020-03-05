<template>
  <div class="dashboard">
    <h1>疫情实时大数据报告</h1>
    <h2>{{ AllDataMsg.times }}</h2>
    <div class="dash-header">
      <el-row :gutter="12">
        <el-col :span="4">
          <el-card shadow="always">
            现有确诊
            <h3>{{ AllDataMsg.econNum }}</h3>
            <p>昨日{{ YesterdayCompareData.addecon_new }}</p>
          </el-card>
        </el-col>
        <el-col :span="4">
          <el-card shadow="always">
            现有疑似
            <h3>{{ AllDataMsg.sustotal }}</h3>
            <p>昨日{{ YesterdayCompareData.wjw_addsus_new }}</p>
          </el-card>
        </el-col>
        <el-col :span="4">
          <el-card shadow="always">
            现有重症
            <h3>{{ AllDataMsg.heconNum }}</h3>
            <p>昨日{{ YesterdayCompareData.addhecon_new }}</p>
          </el-card>
        </el-col>
        <el-col :span="4">
          <el-card shadow="always">
            累计确诊
            <h3>{{ AllDataMsg.gntotal }}</h3>
            <p>昨日{{ YesterdayCompareData.addcon_new }}</p>
          </el-card>
        </el-col>
        <el-col :span="4">
          <el-card shadow="always">
            累计治愈
            <h3>{{ AllDataMsg.curetotal }}</h3>
            <p>昨日{{ YesterdayCompareData.addcure }}</p>
          </el-card>
        </el-col>
        <el-col :span="4">
          <el-card shadow="always">
            <label for="">累计死亡</label>
            <h3>{{ AllDataMsg.deathtotal }}</h3>
            <p>昨日{{ YesterdayCompareData.adddeath_new }}</p>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div id="dash-map" ref="dash" class="dash-map"></div>
  </div>
</template>
<script>
// import { reactive, onMounted } from "@vue/composition-api";
import echarts from "echarts";
import "echarts/map/js/china";
import jsonp from "jsonp";
export default {
  name: "dashboard",
  data() {
    return {
      myEcharts: {},
      AllDataMsg: {},
      YesterdayCompareData: {},
      option: {
        title: {
          // text: "Patrick"
        },
        series: [
          {
            name: "确诊人数",
            type: "map",
            map: "china",
            // 控制地图的放大和缩小
            zoom: 1.2,
            // 可以放大缩小拖拽
            roam: false,
            // 字体显示隐藏
            label: {
              show: true,
              color: "#8B3A62",
              fontSize: 12
            },
            // 区域样式
            itemStyle: {
              areaColor: "white",
              borderColor: "#9FB6CD"
            },
            // 鼠标滑过
            emphasis: {
              label: {
                color: "#8B3A62",
                fontSize: 12
              },
              itemStyle: {
                areaColor: "#AEEEEE",
                borderColor: "#8B4513"
              }
            },
            // 用来显示后台数据的
            data: []
          }
        ],
        visualMap: [
          {
            // 分段
            type: "piecewise",
            show: true,
            // 分成几段
            splitNumber: 5,
            pieces: [
              { min: 10000 },
              { min: 1000, max: 9999 },
              { min: 100, max: 999 },
              { min: 10, max: 99 },
              { min: 1, max: 9 }
            ],
            // 在左在右
            // align: 'right',
            // orient: 'horizontal'  分段横着显示
            inRange: {
              symbol: "rect",
              color: ["#FFF5EE", "#A52A2A"]
            }
          }
        ],
        tooltip: {
          trigger: "item"
        }
      }
    };
  },
  methods: {
    getData() {
      jsonp(
        "https://interface.sina.cn/news/wap/fymap2020_data.d.json?_=1580892522427",
        {},
        (err, data) => {
          if (!err) {
            console.log(data);
            this.AllDataMsg = data.data;
            this.YesterdayCompareData = data.data.add_daily
            console.log(this.YesterdayCompareData);
            let list = this.AllDataMsg.list.map(item => ({
              name: item.name,
              value: item.value
            }));
            this.option.series[0].data = list;
            this.myEcharts.setOption(this.option);
          }
        }
      );
    }
  },
  mounted() {
    this.getData();
    this.myEcharts = echarts.init(this.$refs.dash);
    this.myEcharts.setOption(this.option);
  }
};
</script>
<style lang="scss">
.dashboard {
  padding: 20px;
  .dash-header {
    padding: 20px;
  }
  h1 {
    padding: 20px;
    font-size: 24px;
  }
  h2 {
    padding-left: 20px;
    color: gray;
  }
  .el-card {
    text-align: center;
    font-family: 'Times New Roman', Times, serif;
    h3 {
      color: deeppink;
    }
    p {
      font-size: 8px;
      color: green;
    }
  }
  .dash-map {
    height: 600px;
    width: 800px;
    margin: auto;
  }
}
</style>
