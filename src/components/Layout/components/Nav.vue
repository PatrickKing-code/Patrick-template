<template>
  <div id="nav-wrap">
    <div class="logo">
      Patrick
    </div>
    <el-menu
      default-active=""
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      background-color="transparent"
      text-color="rgb(191, 203, 217)"
      active-text-color="#fff"
      router
    >
      <template v-for="(item, index) in routes">
        <el-submenu :key="item.id" v-if="!item.hidden" :index="index + ''">
          <!-- 一级菜单 -->
          <template slot="title">
            <svg-icon :iconClass="item.meta.icon" className="font20"></svg-icon>
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
    <!-- <svg-icon iconClass="nine" className=""></svg-icon> -->
  </div>
</template>
<script>
import { reactive, computed, ref, onMounted } from "@vue/composition-api";
export default {
  // compiler
  name: "navMenu",
  setup(props, { refs, root }) {
    const routes = reactive(root.$router.options.routes);
    const isCollapse = computed(() => {
      return root.$store.state.app.isCollapse;
    });
    return {
      isCollapse,
      routes
    };
  }
};
</script>
<style lang="scss" scoped>
@import "../../../style/scss/config.scss";
#nav-wrap {
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  background-color: rgb(0, 21, 41);
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  -ms-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  .logo {
    width: 250px;
    height: 50px;
    color: aliceblue;
    font-size: 36px;
    margin-top: 20px;
    margin-bottom: 20px;
    line-height: 50px;
    text-align: center;
  }
}
.open {
  #nav-wrap {
    width: $navMenu;
  }
}
.close {
  #nav-wrap {
    width: $navMenuMin;
    .logo {
      font-size: 10px;
      width: 50px;
    }
  }
}
</style>
