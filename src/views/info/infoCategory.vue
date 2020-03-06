<template>
  <div>
    <el-form :inline="true" :model="InfoCategoryForm" class="demo-form-inline">
      <el-row :gutter="10">
        <el-col :span="4">
          <el-form-item label="类型:">
            <el-select v-model="type" placeholder="请选择" style="width: 140px;">
              <el-option v-for="item in options" :key="item.id" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="日期:">
            <el-date-picker v-model="dataInfo"
              type="monthrange"
              range-separator="至"
              start-placeholder="开始月份"
              end-placeholder="结束月份"
            >
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="关键字:">
            <el-select v-model="keyWord" placeholder="请选择" style="width: 140px;">
              <el-option v-for="item in serchOption" :key="item.id" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="4">
            <el-input v-model="keyWord" placeholder="请输入内容"  style="width: 180px; margin-right: 10px;"></el-input>
        </el-col>
        <el-col :span="2">
             <el-button type="danger">搜索</el-button>
        </el-col>
        <el-col :span="4">
          <el-button class="AddBtn" type="success">新增</el-button>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import { reactive, ref } from "@vue/composition-api";
export default {
  name: "InfoCategory",
  setup(props, { root, refs }) {
    const InfoCategoryForm = reactive({});
    const options = reactive([
      {
        label: '国内信息',
        value: '区域一'
      },
      {
        label: '国际信息',
        value: '区域二'
      },
      {
        label: '行内信息',
        value: '区域三'
      }
    ]);
    const serchOption = reactive([
      {
        value: 'id1',
        label: 'ID'
      },
      {
        value: 'id2',
        label: '名字'
      },
      {
        value: 'id3',
        label: '订单编号'
      },
      {
        value: 'id4',
        label: '产品'
      }
    ])
    const dataInfo = ref('')
    const type = ref('')
    const keyWord = ref('')
    return {
      InfoCategoryForm,
      options,
      dataInfo,
      type,
      serchOption,
      keyWord
    };
  }
};
</script>

<style lang="scss" scoped>

</style>
