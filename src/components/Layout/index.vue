<template>
    <div id="layout">
        <LayoutHeader />
        <LayoutMain />
        <LayoutNav />
    </div>
</template>
<script>
import { computed } from '@vue/composition-api';
import LayoutHeader from './components/Header'
import LayoutMain from './components/Main'
import LayoutNav from './components/Nav'
export default {
    name: 'layout',
    components: {LayoutHeader, LayoutMain, LayoutNav},
}
</script>
<style lang="scss" scoped>

</style>