import Vue from "vue";
import Router from "vue-router";
import layout from "@/views/layout/layout.vue";
// import blank from "@/views/layout/blank.vue";
Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            meta: {
                title: "首页"
            },
            component: layout,
            children: [
                {
                    path: "/",
                    name: "home",
                    meta: {
                        title: "首页"
                    },
                    component: () => import("@/views/home/index.vue")
                }
            ]
        },
        // {
        //     path: "/goods",
        //     meta: {
        //         title: "商品"
        //     },
        //     component: layout,
        //     redirect: "/goods/goodsDetail",
        //     children: [
        //         {
        //             path: "goodsDetail/:id",
        //             meta: {
        //                 title: "商品详情"
        //             },
        //             name: "goodsDetail",
        //             component: () => import("@/views/goods/goodsDetail.vue")
        //         },
        //         {
        //             path: "shoppingCart",
        //             meta: {
        //                 title: "购物车"
        //             },
        //             name: "shoppingCart",
        //             component: () => import("@/views/goods/shoppingCart.vue")
        //         }
        //     ]
        // },
        // {
        //     path: "/personal",
        //     meta: {
        //         title: "个人中心"
        //     },
        //     component: layout,
        //     redirect: "/personal/index",
        //     children: [
        //         {
        //             path: "index",
        //             meta: {
        //                 title: "个人中心"
        //             },
        //             name: "personal",
        //             component: () => import("@/views/personal/index.vue")
        //         },
        //         {
        //             path: "address",
        //             meta: {
        //                 title: "地址管理"
        //             },
        //             name: "address",
        //             component: blank,
        //             redirect: "/personal/address/list",
        //             children: [
        //                 {
        //                     path: "list",
        //                     meta: {
        //                         title: "地址列表"
        //                     },
        //                     name: "address-list",
        //                     component: () =>
        //                         import("@/views/personal/address/list.vue")
        //                 },
        //                 {
        //                     path: "edit/:id",
        //                     meta: {
        //                         title: "编辑地址"
        //                     },
        //                     name: "address-edit",
        //                     component: () =>
        //                         import("@/views/personal/address/edit.vue")
        //                 },
        //                 {
        //                     path: "add",
        //                     meta: {
        //                         title: "新增地址"
        //                     },
        //                     name: "address-add",
        //                     component: () =>
        //                         import("@/views/personal/address/add.vue")
        //                 }
        //             ]
        //         }
        //     ]
        // },
        // {
        //     path: "/find",
        //     meta: {
        //         title: "发现"
        //     },
        //     component: layout,
        //     children: [
        //         {
        //             path: "index",
        //             meta: {
        //                 title: "发现"
        //             },
        //             name: "find",
        //             component: () => import("@/views/find/index.vue")
        //         }
        //     ]
        // },
        {
            path: "/demo",
            meta: {
                title: "举个栗子"
            },
            component: layout,
            children: [
                {
                    path: "index",
                    meta: {
                        title: "栗子"
                    },
                    name: "demo-index",
                    component: () => import("@/views/demo/index.vue")
                },
                {
                    path: "index1",
                    meta: {
                        title: "栗子1"
                    },
                    name: "demo-index1",
                    component: () => import("@/views/demo/index1.vue")
                }
            ]
        },
        {
            path: "/login",
            meta: {
                title: "登录"
            },
            component: layout,
            children: [
                {
                    path: "index",
                    meta: {
                        title: "登录"
                    },
                    name: "login",
                    component: () => import("@/views/login/index.vue")
                }
            ]
        }
    ]
});
