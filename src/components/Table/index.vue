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
        <template>
          <slot :name="item.slotName"></slot>
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
        recoredCheckbox: true
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
          name: "王小虎",
          phone: "13587845457",
          address: "上海市普陀区金沙江路 1519 弄",
          role: "管理员"
        }
      ]
    });
    onBeforeMount(() => {
      initTableConfig();
    });
    const initTableConfig = () => {
      let configData = props.config;
      for (let key in configData) {
        data.tableConfig[key] = configData[key];
      }
    };
    return {
      data
    };
  }
};
</script>

<style></style>
