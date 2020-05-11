<template>
    <div class="layout">
        <router-view />
    </div>
</template>
<script>
export default {
    data() {
        return {
            searchValue: ""
        };
    },
    created() {},
    methods: {
        onClickLeft() {
            this.$router.back(-1);
        },
        onClickRight() {
            this.$router.push("/goods/shoppingCart");
        },
        onSearch() {
            this.$toast("搜索");
        }
    }
};
</script>
<style lang="scss">
.layout {
    height: 100%;
    .navBarBox {
        position: fixed;
        background: #fff;
        z-index: 9;
        width: 100%;
    }
    .searchBox {
        position: fixed;
        background: #fff;
        z-index: 9;
        width: 100%;
    }
}
</style>
