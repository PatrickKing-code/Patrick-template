<template>
  <div :inline="true">
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
    return {
      data
    }
  }
};
</script>
