import request from "@/utils/request";
let BASEAPI = "/v1/";

export default {
    loginByCode(params = {}) {
        return request({
            url: BASEAPI + "Chatcommon/login",
            method: "post",
            data: params
        });
    },
    getCode(params = {}) {
        return request({
            url: BASEAPI + "common/inviteCode",
            method: "post",
            data: params
        });
    },
    getUserInfo(params = {}) {
        return request({
            url: BASEAPI + "Chathome/userinfo",
            method: "get",
            params: params
        });
    }
};
