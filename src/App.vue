<template>
    <div id="app">
        <router-view v-wechat-title="$route.meta.title" />
    </div>
</template>

<style lang="scss">
/* prettier-ignore */
#app {
    font-family: "微软雅黑";
    height: 100%;
    position: relative;
    border-top: 1Px solid transparent;
    top: -1Px;
    .loadingbox {
        background: rgba(0, 0, 0, 0.2);
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
    }
}
</style>

<script>
export default {
    name: "BoardPage",
    data() {
        return {};
    },
    computed: {},
    components: {},
    created() {},
    mounted() {},
    methods: {},
    watch: {}
};
</script>
