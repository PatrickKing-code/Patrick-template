<template>
  <div :inline="true">
    <TableVue :config="data.tableConfig">
      <template v-slot:status="slotData">
        <el-switch
          active-color="#13ce66"
          inactive-color="#ff4949"
        >
        </el-switch>
      </template>
      <template v-slot:operation="slotData">
        <el-button type="success" size="mini">编辑</el-button>
        <el-button type="danger" size="mini" @click="deleteItem(slotData.data)"
          >删除</el-button
        >
      </template>
    </TableVue>
  </div>
</template>

<script>
import TableVue from "../../components/Table";
import { reactive } from "@vue/composition-api";
export default {
  components: { TableVue },
  setup(props, { root }) {
    const data = reactive({
      tableConfig: {
        // 多选
        selection: true,
        // 多选点击后下一页返回上一页还显示  翻页记录
        recoredCheckbox: true,
        // 表头
        tHead: [
          {
            label: "邮箱/用户名",
            field: "email"
          },
          {
            label: "真实姓名",
            field: "name"
          },
          {
            label: "手机号",
            field: "phone"
          },
          {
            label: "地区",
            field: "address"
          },
          {
            label: "角色",
            field: "role"
          },
          {
            label: "禁用状态",
            field: "status",
            columnType: "slot",
            slotName: "status"
          },
          {
            label: "操作",
            slotName: "operation",
            columnType: "slot"
          }
        ]
      }
    });
    const deleteItem = data => {
      console.log(data);
    };
    return {
      data,
      deleteItem
    };
  }
};
</script>
