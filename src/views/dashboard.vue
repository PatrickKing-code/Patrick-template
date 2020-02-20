<template>
  <div>
    <svg-icon iconClass="six"></svg-icon>
  </div>
</template>

<script>
export default {
  name: "dashboard"
};
</script>

<style lang="scss" scoped>
.iconClass {
  width: 1em;
  height: 1em;
  // 修改图标颜色的话需要添加fill这个属性
  fill: currentColor;
  color: aqua;
}
</style>
