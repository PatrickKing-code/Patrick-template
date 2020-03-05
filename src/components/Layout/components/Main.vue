<template>
  <div id="main-wrap">
    <div class="main-content">
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
import { ref, reactive } from "@vue/composition-api";
export default {
  name: "layoutMain",
  setup(props, { root }) {}
};
</script>
<style lang="scss" scoped>
@import "../../../style/scss/config.scss";
#main-wrap {
  height: 100vh;
}
.main-content {
  width: 100%;
  height: 100vh;
  padding-left: $navMenu + 30;
  padding-top: $layoutHeader + 30;
  padding-right: 30px;
  padding-bottom: 0px;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  -ms-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}

.content {
  width: 100%;
  height: 100vh;
  background-color: #fff;
}
.open {
  .main-content {
    padding-left: $navMenu + 30;
  }
}
.close {
  .main-content {
    padding-left: $navMenuMin + 30;
  }
}
</style>
