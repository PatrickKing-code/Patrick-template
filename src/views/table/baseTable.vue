<template>
  <div>
    <template>
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </template>
  </div>
</template>

<script>
import { reactive, ref } from "@vue/composition-api";
export default {
  name: "dashboard",
  setup(props, { root, refs }) {
    const value = ref('')
    const options = reactive([
      {
        value: "选项1",
        label: "黄金糕"
      },
      {
        value: "选项2",
        label: "双皮奶"
      },
      {
        value: "选项3",
        label: "蚵仔煎"
      },
      {
        value: "选项4",
        label: "龙须面"
      },
      {
        value: "选项5",
        label: "北京烤鸭"
      }
    ]);
    return {
      options,
      value
    }
  }
};
</script>

<style lang="scss" scoped></style>
