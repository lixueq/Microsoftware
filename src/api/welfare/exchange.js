import request from "@/utils/request";
let BASEAPI = "/v1/";

export default {
    // 兑换码类型
    getTypeByCode(params = {}) {
        return request({
            url: BASEAPI + "Chatexchange/getTypeByCode",
            method: "get",
            params: params
        });
    },
    // 兑换页面
    getPresentByCode(params = {}) {
        return request({
            url: BASEAPI + "Chatexchange/getPresentByCode",
            method: "get",
            params: params
        });
    },
    // 提交地址 创建订单
    createActivity(params = {}) {
        return request({
            url: BASEAPI + "Chatexchange/createOrder",
            method: "post",
            data: params
        });
    }
};
