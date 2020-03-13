<template>
  <el-table :data="data.tableData" border style="width: 100%">
    <!-- 多选框 -->
    <el-table-column
      v-if="data.tableConfig.selection"
      type="selection"
      width="55"
    ></el-table-column>
    <!-- 文本数据 -->
    <template v-for="item in data.tableConfig.tHead">
      <!-- v-solot -->
      <el-table-column
        v-if="item.columnType === 'slot'"
        :key="item.field"
        :prop="item.field"
        :label="item.label"
      >
        <template slot-scope="scope">
          <slot :name="item.slotName" :data="scope.row"></slot>
        </template>
      </el-table-column>
      <el-table-column
        v-else
        :key="item.id"
        :prop="item.field"
        :label="item.label"
      >
      </el-table-column>
    </template>
  </el-table>
</template>

<script>
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  reactive
} from "@vue/composition-api";
import { requestUrl } from '../../api/requestUrl'
import { loadingTableData } from "../../api/login";
export default {
  name: "tableVue",
  props: {
    config: {
      type: Object,
      default: () => {}
    }
  },
  setup(props, { root }) {
    onBeforeMount(() => {
      initTableConfig();
      loadingData();
    });
    onMounted(() => {});
    onBeforeUpdate(() => {});
    const data = reactive({
      tableConfig: {
        tHead: [],
        selection: true,
        recoredCheckbox: true,
        requestData: {}
      },
      tableData: [
        {
          email: "2016-05-02",
          name: "王小虎",
          phone: "13587845457",
          address: "上海市普陀区金沙江路 1518 弄",
          role: "超管"
        },
        {
          email: "2016-05-02",
          name: "李四",
          phone: "13587845457",
          address: "上海市普陀区金沙江路 1519 弄",
          role: "管理员"
        }
      ]
    });
    const initTableConfig = () => {
      // console.log(props.config);
      let propsData = props.config;
      let keys = Object.keys(data.tableConfig);
      for (let key in propsData) {
        if (keys.includes(key)) {
          data.tableConfig[key] = propsData[key];
        }
      }
    };
    const loadingData = () => {
      let requestJson = props.config.requestData
      let requestApiData = {
        url: requestUrl[requestJson.url],
        method: requestJson.method,
        data: requestJson.data
      }
      loadingTableData(requestApiData).then( responese => {
        console.log(responese.data);
      }).catch( error => {
        console.log(error);
      })
    };
    return {
      data
    };
  }
};
</script>

<style></style>
