<template>
  <el-select v-model="data.selectValue" filterable placeholder="请选择">
    <el-option
      v-for="item in data.initOption"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    >
    </el-option>
  </el-select>
</template>

<script>
import { reactive, onMounted } from "@vue/composition-api";
export default {
  name: "selectComponent",
  props: {
    config: {
      type: Array,
      default: () => []
    }
  },
  setup(props, { root }) {
    const data = reactive({
      selectValue: "",
      initOption: [],
      options: [
        {
          value: "username",
          label: "用户名"
        },
        {
          value: "email",
          label: "邮箱"
        },
        {
          value: "phone",
          label: "手机"
        },
        {
          value: "id",
          label: "ID"
        }
      ]
    });
    // 初始化下拉选项
    let initOptionFn = () => {
      let optionsArr = [];
      props.config.forEach(item => {
        if (data.options.filter( dataOption => dataOption.value == item)) {
          let arr = data.options.filter( dataOption => dataOption.value == item)
          arr[0] && optionsArr.push(arr[0])
        }
      });
      data.initOption = optionsArr;
    };
    onMounted(() => {
      initOptionFn();
    });
    return {
      data
    };
  }
};
</script>

<style></style>
