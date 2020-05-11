<template>
    <div>
        <bm-view style="width: 100%; height:150px; flex: 1"></bm-view>
        <baidu-map class="map" center="">
            <!-- 在右上角加入缩放控件 -->
            <bm-navigation anchor="BMAP_ANCHOR_BOTTOM_LEFT"></bm-navigation>
            <!-- 城市列表 -->
            <bm-city-list anchor="BMAP_ANCHOR_TOP_LEFT"></bm-city-list>
            <!-- 全景 -->
            <bm-panorama></bm-panorama>
            <!-- 本地检索 -->
            <bm-view class="map"></bm-view>
            <bm-control :offset="{ width: '10px', height: '10px' }">
                <bm-auto-complete v-model="keyword" :sugStyle="{ zIndex: 1 }">
                    <van-field
                        left-icon="search"
                        v-model="keyword"
                        placeholder="请输入地名关键字"
                    />
                    <!-- 这里指代一个自定义搜索框组件 -->
                </bm-auto-complete>
            </bm-control>
            <bm-local-search
                :keyword="keyword"
                :auto-viewport="true"
            ></bm-local-search>
            <!-- 定位 -->
            <bm-geolocation
                anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
                :showAddressBar="true"
                :autoLocation="true"
            ></bm-geolocation>
            <!--缩放-->
            <!-- <bm-navigation anchor="BMAP_ANCHOR_TOP_LEFT"></bm-navigation> -->
            <!--定位-->
            <!-- <bm-geolocation
                anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
                :showAddressBar="true"
                :autoLocation="true"
            ></bm-geolocation> -->
            <!--点-->
            <!-- <bm-marker
                :position="map.center"
                :dragging="map.dragging"
                animation="BMAP_ANIMATION_DROP"
            > -->
            <!--提示信息-->
            <!-- <bm-info-window :show="map.show">Hello~</bm-info-window>
            </bm-marker> -->
        </baidu-map>
    </div>
</template>

<script>
export default {
    name: "demo",
    data() {
        return {
            keyword: ""
        };
    },
    methods: {}
};
</script>

<style scoped>
.map {
    width: 100%;
    height: 400px;
}
</style>
