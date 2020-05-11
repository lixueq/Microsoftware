import request from "@/utils/request";
let BASEAPI = "/v1/";

export default {
    // 个人中心的信息
    userDetail(params = {}) {
        return request({
            url: BASEAPI + "Chathome/detail",
            method: "get",
            params: params
        });
    },
    // 获取订单的列表
    getOrderInfo(params = {}) {
        return request({
            url: BASEAPI + "Chathome/getOrderInfo",
            method: "get",
            params: params
        });
    },
    // 获取物流的列表
    getExpressTotal(params = {}) {
        return request({
            url: BASEAPI + "Chathome/getExpressInfo",
            method: "get",
            params: params
        });
    },
    // 我的收入信息
    getTotalIncome(params = {}) {
        return request({
            url: BASEAPI + "Chatincome/getTotal",
            method: "get",
            params: params
        });
    },
    // 收入详情
    getIncomeList(params = {}) {
        return request({
            url: BASEAPI + "Chatincome/getList",
            method: "get",
            params: params
        });
    },
    // 提现
    withdrawCash(params = {}) {
        return request({
            url: BASEAPI + "Chatincome/withdrawCash",
            method: "get",
            params: params
        });
    }
};
