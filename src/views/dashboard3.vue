<template>
  <div class="dashboard">
    <h1>{{AllData.times}}</h1>
    <div class="dash-header">
      <el-row :gutter="12">
        <el-col :span="4">
          <el-card shadow="always">
            现有确诊
          </el-card>
        </el-col>
        <el-col :span="4">
          <el-card shadow="always">
            现有疑似
          </el-card>
        </el-col>
        <el-col :span="4">
          <el-card shadow="always">
            现有重症
          </el-card>
        </el-col>
        <el-col :span="4">
          <el-card shadow="always">
            累计确诊
          </el-card>
        </el-col>
        <el-col :span="4">
          <el-card shadow="always">
            累计治愈
          </el-card>
        </el-col>
        <el-col :span="4">
          <el-card shadow="always">
            累计死亡
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div id="dash-map" ref="dash" class="dash-map"></div>
  </div>
</template>
<script>
import { reactive, onMounted } from "@vue/composition-api";
import echarts from "echarts";
import "echarts/map/js/china";
import jsonp from 'jsonp'
export default {
  name: "dashboard",
  setup(props, { refs, root }) {
    let myEcharts = reactive({})
    let AllData = reactive({})
    // let times = ref('')
    const option = reactive({
      title: {
        // text: "Patrick"
      },
      series: [
        {
          name: '确诊人数',
          type: "map",
          map: "china",
          // 控制地图的放大和缩小
          zoom: 1.2,
          // 可以放大缩小拖拽
          roam: false,
          // 字体显示隐藏
          label: {
            show: true,
            color: '#8B3A62',
            fontSize: 12
          },
          // 区域样式
          itemStyle: {
            areaColor: 'white',
            borderColor: '#9FB6CD'
          },
          // 鼠标滑过
          emphasis: {
            label: {
              color: '#8B3A62',
              fontSize: 12
            },
            itemStyle: {
              areaColor: '#AEEEEE',
              borderColor: '#8B4513'
            }
          },
          // 用来显示后台数据的
          data: []
        }
      ],
      visualMap: [
        {
          // 分段
          type: 'piecewise',
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
            symbol: 'rect',
            color: ['#FFF5EE', '#A52A2A']
          }
        }
      ],
      tooltip: {
        trigger: 'item'
      }
    });
    const getData =() => {
      jsonp('https://interface.sina.cn/news/wap/fymap2020_data.d.json?_=1580892522427', {}, (err, Alldata) => {
        if(!err) {
          // console.log(Alldata.data);
          AllData = Alldata.data
          console.log(AllData.times);
          // times = Alldata.times
          let list = Alldata.data.list.map( item => ({name: item.name, value: item.value}))
          option.series[0].data = list
          myEcharts.setOption(option);
        }
      })
    }
    onMounted(() => {
      getData()
      myEcharts = echarts.init(refs.dash);
      myEcharts.setOption(option);
    });
    return {
      AllData
      // times
    }
  }
};
</script>
<style lang="scss">
.dashboard {
  .dash-header {
    padding: 20px;
  }
  .dash-map {
    height: 600px;
    width: 800px;
    margin: auto;
  }
}
</style>
