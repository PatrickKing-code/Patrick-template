<template>
  <div id="nav-wrap">
    <!-- <h1>Patrick</h1> -->
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    <el-menu
      default-active=""
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      background-color="transparent"
      text-color="rgb(191, 203, 217)"
      active-text-color="#fff" router
    >
      <template v-for="(item, index) in routes">
        <el-submenu :key="item.id" v-if="!item.hidden" :index="index+ ''">
          <!-- 一级菜单 -->
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">{{ item.meta.name }}</span>
          </template>
          <!-- 子菜单 -->
          <el-menu-item
            v-for="subItem in item.children"
            :key="subItem.id"
            :index="subItem.path + ''"
            >{{ subItem.meta.name }}</el-menu-item
          >
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>
<script>
import { reactive, computed, ref } from "@vue/composition-api";
export default {
  // compiler
  name: "navMenu",
  setup(props, { refs, root }) {
    const isCollapse = ref(false);
    const routes = reactive(root.$router.options.routes);
    const handleOpen = (key, keyPath) => {
      console.log(key, keyPath);
    };
    const handleClose = (key, keyPath) => {
      console.log(key, keyPath);
    };
    return {
      isCollapse,
      handleOpen,
      handleClose,
      routes
    };
  }
};
</script>
<style lang="scss" scoped>
@import "../../../assets/scss/config.scss";
#nav-wrap {
  position: absolute;
  left: 0;
  top: 0;
  width: $navMenu;
  height: 100vh;
  background-color: rgb(0, 21, 41);
}
</style>
