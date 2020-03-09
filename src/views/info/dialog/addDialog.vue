<template>
  <el-dialog title="收货地址" :visible.sync="isShow" @close="close">
    add_dialog
  </el-dialog>
</template>

<script>
export default {
  name: "addDialog",
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
    //  isShow: false
    };
  },
  methods: {
      close() {
          this.$emit('closeDialog', false)
      }
  },
  watch: {
      isShow(newValue) {
          this.isShow = newValue
      }
  }
};
</script>

<style></style>
