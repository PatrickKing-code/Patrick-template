<template>
  <div :inline="true">
    <el-button @click="getParams">getParams</el-button>
    <!-- 封装el-select -->
    <SelectCom :config="data.configOption" />
  </div>
</template>

<script>
import SelectCom from "../../components/Select";
import { reactive } from '@vue/composition-api'
export default {
  components: { SelectCom },
  setup(props, { root }) {
    const data = reactive({
      configOption: ['username', 'id']
    })
    const getParams = () => {};
    return {
      getParams,
      data
    }
  }
};
</script>
