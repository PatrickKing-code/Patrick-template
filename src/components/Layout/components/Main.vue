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
import { ref, reactive } from '@vue/composition-api';
export default {
    name: 'layoutMain',
    setup(props, { root }){}
}
</script>
<style lang="scss" scoped>
@import '../../../assets/scss/config.scss';
#main-wrap {
    position: fixed;
    left: $navMenu;
    top: $layoutHeader;
    right: 0;
    bottom: 0;
    border: 30px solid #fff;
    border-bottom: none;
    -webkit-box-sizing: border;
    // background-color: cadetblue;
}
</style>