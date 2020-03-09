<template>
  <div id="iconFont">
    <svg-icon iconClass="one" className="font50"></svg-icon>
    <svg-icon iconClass="two" className="font50"></svg-icon>
    <svg-icon iconClass="three" className="font50"></svg-icon>
    <svg-icon iconClass="four" className="font50"></svg-icon>
    <svg-icon iconClass="five" className="font50"></svg-icon>
    <svg-icon iconClass="six" className="font50"></svg-icon>
    <svg-icon iconClass="seven" className="font50"></svg-icon>
    <svg-icon iconClass="eight" className="font50"></svg-icon>
    <svg-icon iconClass="nine" className="font50"></svg-icon>
    <svg-icon iconClass="ten" className="font50"></svg-icon>
    <el-button @click="deleteItem" type="danger">删除的全局提示方法</el-button>
    <el-button @click="deleteItem2" type="danger">删除的全局提示方法2</el-button>
  </div>
</template>

<script>
import {} from '@vue/composition-api'
export default {
  name: "dashboard",
  setup(props, {root, refs}){
    const deleteItem = () =>{
      root.confirm({
        content: '确认删除当前信息吗？删除后无法恢复！！！',
        tip: '警告'
      })
    }
   const deleteItem2 = () =>{
      root.confirm({
        content: '确认删除当前信息吗？删除后无法恢复！！！'
      })
    }
    return {
      deleteItem,
      deleteItem2
    }
  }
};
</script>

<style lang="scss" scoped>

.svg-icon.font50 {
  margin-right: 50px;
}

</style>
