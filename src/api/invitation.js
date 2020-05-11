import request from "@/utils/request";
let BASEAPI = "/v1/";

export default {
    userDetail(params = {}) {
        return request({
            url: BASEAPI + "chatgroup/share",
            method: "post",
            data: params
        });
    },
    // 邀请的人数和总计金额
    inviteList(params = {}) {
        return request({
            url: BASEAPI + "chatgroup/inviteList",
            method: "get",
            params: params
        });
    }
};
