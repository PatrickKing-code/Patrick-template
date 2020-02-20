<template>
    <div id="header-wrap">
        header
        <div class="pull-left header-icon"></div>
        <div class="pull-right">
            <div class="user-info pull-left">
            </div>
            <div class="header-icon pull-left">
            </div>
        </div>
    </div>
</template>
<script>
import { computed } from '@vue/composition-api'
export default {
    name: 'layoutHeader',
}
</script>
<style lang="scss" scoped>
@import '../../../assets/scss/config.scss';
#header-wrap {
    position: fixed;
    top: 0;
    left: $navMenu;
    background-color: #fff;
    -webkit-box-shadow: 0 3px 16px 0 rgba(0,0,0,.1)
}
</style>