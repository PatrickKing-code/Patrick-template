<template>
  <div>
    <el-select v-model="selectValue" filterable placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
    <el-input v-model="inputValue"></el-input>
    <el-button @click="getParams">getParams</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: "username",
          label: "用户名"
        },
        {
          value: "email",
          label: "邮箱"
        }
      ],
      inputValue: "",
      selectValue: ""
    };
  },
  methods: {
    getParams() {
      console.log({ [this.selectValue]: this.inputValue });
    }
  }
};
</script>
