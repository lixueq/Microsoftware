<template>
    <div class="tab pt120">
        <van-tabbar route :z-index="2" class="tabBox" v-model="active">
            <van-tabbar-item to="/" replace>
                <span>首页</span>
                <van-icon
                    slot="icon"
                    :size="30"
                    :name="this.$route.name == 'home' ? 'wap-home' : 'home-o'"
                />
            </van-tabbar-item>
            <van-tabbar-item replace
                ><span>发现</span
                ><van-icon
                    slot="icon"
                    :size="30"
                    :name="this.$route.name == 'find' ? 'bell' : 'bulb-o'"
            /></van-tabbar-item>
            <van-tabbar-item replace>
                <span>个人中心</span>
                <van-icon
                    slot="icon"
                    :size="30"
                    :name="
                        this.$route.name == 'personal' ? 'friends' : 'friends-o'
                    "
                />
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
    name: "tab",
    data() {
        return {
            active: 0
        };
    },
    created() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.tab {
    .tabBox {
        height: 120px !important;
    }
}
</style>
