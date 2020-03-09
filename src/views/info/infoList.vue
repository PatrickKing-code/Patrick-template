<template>
  <div>
    <el-row :gutter="14" class="infoList-header">
      <el-col :span="4">
        <div class="label-wrap category">
          <label for="">分类：</label>
          <div class="warp-content">
            <el-select
              v-model="category_value"
              placeholder="请选择"
              style="width: 100%;"
            >
              <el-option
                v-for="item in options.category"
                :key="item.id"
                :label="item.category_name"
                :value="item.id"
              >
              </el-option>
            </el-select>
          </div>
        </div>
      </el-col>
      <el-col :span="7">
        <div class="label-wrap date">
          <label for="">日期：&nbsp;&nbsp;</label>
          <div class="warp-content">
            <el-date-picker
              style="width: 100%;"
              v-model="date_value"
              type="datetimerange"
              format="yyyy 年 MM 月 dd 日"
              value-format="yyyy-MM-dd HH:mm:ss"
              align="right"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :default-time="['12:00:00', '08:00:00']"
            >
            </el-date-picker>
          </div>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="label-wrap key-work">
          <label for="">关键字：&nbsp;&nbsp;</label>
          <div class="warp-content">
            <!-- <SelectVue :config="data.configOption" /> -->
            <el-select v-model="category_value" style="width: 100%;">
              <el-option
                v-for="item in options.category"
                :key="item.id"
                :label="item.category_name"
                :value="item.id"
              >
              </el-option>
            </el-select>
          </div>
        </div>
      </el-col>
      <el-col :span="3">
        <el-input
          v-model="search_keyWork"
          placeholder="请输入内容"
          style="width: 100%;"
        ></el-input>
      </el-col>
      <el-col :span="2">
        <el-button
          type="danger"
          style="width: 100%;"
          @click="getList"
          size="small"
          >搜索</el-button
        >
      </el-col>
      <el-col :span="2" class="pull-right">
        <el-button
          type="danger"
          size="small"
          style="width: 100%;"
          @click="add_dialog = true"
          >新增</el-button
        >
      </el-col>
    </el-row>
    <div class="zwd"></div>
    <!-- 表格数据 -->
    <el-table
      ref="multipleTable"
      border
      :data="table_data"
      tooltip-effect="dark"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection"></el-table-column>
      <el-table-column label="标题">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column prop="name" label="类型"> </el-table-column>
      <el-table-column prop="address" label="日期" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="address" label="管理员" show-overflow-tooltip>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <div class="zwd"></div>
    <el-row>
      <el-col :span="12">
        <el-button size="mini">批量删除</el-button>
      </el-col>
      <el-col :span="12">
        <el-pagination
          class="pull-right"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, prev, pager, next, jumper"
          :total="totalNumber"
        >
        </el-pagination>
        <!-- dialog -->
        <AddDialog :isShow="add_dialog" @closeDialog="closeDialog" @sendIsShow="receptIsShow"/>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import AddDialog from './dialog/addDialog'
import { reactive, ref } from "@vue/composition-api";
export default {
  name: "infoList",
  components: {
    AddDialog
  },
  setup(props, { root, refs }) {
    const category_value = ref("");
    let add_dialog = ref(false);
    const totalNumber = ref(100);
    const currentPage = ref(1);
    const date_value = ref("");
    const search_keyWork = ref("");
    const options = reactive([
      {
        value: "1",
        label: "国际信息"
      },
      {
        value: "2",
        label: "国内信息"
      },
      {
        value: "3",
        label: "行内信息"
      }
    ]);
    const table_data = reactive([
      {
        date: "2016-05-03",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1518 弄"
      },
      {
        date: "2016-05-02",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1518 弄"
      },
      {
        date: "2016-05-04",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1518 弄"
      },
      {
        date: "2016-05-01",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1518 弄"
      },
      {
        date: "2016-05-08",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1518 弄"
      },
      {
        date: "2016-05-06",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1518 弄"
      },
      {
        date: "2016-05-07",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1518 弄"
      }
    ]);
    const getList = () => {};
    const handleEdit = () => {};
    const handleDelete = () => {};
    const handleSelectionChange = () => {};
    const handleSizeChange = val => {
      console.log(`每页 ${val} 条`);
    };
    const handleCurrentChange = val => {
      console.log(`当前页: ${val}`);
    };
    const receptIsShow = (newVal) => {
      add_dialog = newVal
    }
    const closeDialog = () => {
      console.log('123');
    }
    return {
      category_value,
      options,
      date_value,
      search_keyWork,
      getList,
      table_data,
      handleEdit,
      handleDelete,
      handleSelectionChange,
      currentPage,
      handleSizeChange,
      handleCurrentChange,
      totalNumber,
      add_dialog,
      receptIsShow
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../style/scss/config.scss"; // 文字的对齐 宽度 行高
.label-wrap {
  &.category {
    @include labelDom(left, 60, 40);
  }
  &.date {
    @include labelDom(right, 93, 40);
  }
  &.key-work {
    @include labelDom(right, 99, 40);
  }
}
.infoList-header {
  display: flex;
  align-items: center;
}
.infoList-header .el-button {
  height: 40px;
}
.el-input__inner {
  font-size: small;
}
.zwd {
  height: 20px;
}
</style>
