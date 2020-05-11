import request from "@/utils/request";
let BASEAPI = "/v1/";

export default {
    // 获取商品列表（不需要授权的接口）
    getStores(params = {}) {
        return request({
            url: BASEAPI + "Chatcommon/groupStores",
            method: "get",
            params: params
        });
    },
    trialClassInfo(params = {}) {
        return request({
            url: BASEAPI + "chatSubscribe/trialClassInfo",
            method: "get",
            params: params
        });
    },
    createActivity(params = {}) {
        return request({
            url: BASEAPI + "chatSubscribe/createActivity",
            method: "post",
            data: params
        });
    },
    // 邀请购买体验课
    inviteTrialClass(params = {}) {
        return request({
            url: BASEAPI + "ChatSubscribe/inviteTrialClass",
            method: "post",
            data: params
        });
    }
};
