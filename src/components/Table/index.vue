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
    onBeforeMount(() => {});
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
    onBeforeMount(() => {
      initTableConfig();
      loadingData();
    });
    const initTableConfig = () => {
      let configData = props.config;
      let keys = Object.keys(data.tableConfig);
      for (let key in configData) {
        if (keys.includes(key)) {
          data.tableConfig[key] = configData[key];
        }
      }
    };
    const loadingData = () => {
      let requestData = {
        url: data.tableConfig.requestData.url,
        method: data.tableConfig.requestData.method
      };
      loadingTableData(requestData)
        .then(resonse => {
          console.log(response.data.data.data); 
        })
        .catch(error => {});
    };
    return {
      data
    };
  }
};
</script>

<style></style>
