import request from "@/utils/request";
let BASEAPI = "/v1/";

export default {
    // 获取商品列表（不需要授权的接口）
    getGroupStores(params = {}) {
        return request({
            url: BASEAPI + "Chatcommon/groupStores",
            method: "get",
            params: params
        });
    },
    // 获取当前用户进行中拼团
    getGroupStoreDetail(params = {}) {
        return request({
            url: BASEAPI + "Chatgroup/groupStoreDetail",
            method: "get",
            params: params
        });
    },
    // 假团列表（无需要授权）
    getGroupIngList(params = {}) {
        return request({
            url: BASEAPI + "Group/groupIngList",
            method: "get",
            params: params
        });
    },
    // 获取当前用户进行中拼团
    getUserGrouping(params = {}) {
        return request({
            url: BASEAPI + "Chatgroup/userGroupIng",
            method: "get",
            params: params
        });
    },
    // 参团
    joinGroup(params = {}) {
        return request({
            url: BASEAPI + "Chatgroup/joinGroup",
            method: "post",
            data: params
        });
    },
    // 创建团
    createGroup(params = {}) {
        return request({
            url: BASEAPI + "Chatgroup/createGroup",
            method: "post",
            data: params
        });
    },
    // 创建拼团订单，和普通的创建订单不一样
    createGroupOrder(params = {}) {
        return request({
            url: BASEAPI + "Chatgroup/createGroupOrder",
            method: "post",
            data: params
        });
    },
    // 获取团详细，不需要token的
    getGroupDetail(params = {}) {
        return request({
            url: BASEAPI + "Group/groupDetail",
            method: "get",
            params: params
        });
    },
    // 获取团详细
    getGroupDetailByToken(params = {}) {
        return request({
            url: BASEAPI + "Chatgroup/groupDetail",
            method: "get",
            params: params
        });
    }
};
