<template>
  <el-dialog title="收货地址" :visible.sync="isShow">
    add_dialog
  </el-dialog>
</template>

<script>
import { ref } from '@vue/composition-api';
export default {
  name: "addDialog",
  props: {
      isShow: {
          type: Boolean,
          default: false
      }
  },
  setup(props, {root, refs}){
      console.log(props);
      return {
        //   add_dialog
      }
  }
};
</script>

<style></style>
