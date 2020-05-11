import request from "@/utils/request";
let BASEAPI = "/v1/";

export default {
    getWxConfig(params = {}) {
        return request({
            url: BASEAPI + "Chatcommon/jsapiTicket",
            method: "get",
            params: params
        });
    },
    createdOrder(params = {}) {
        return request({
            url: BASEAPI + "ChatSubscribe/createOrder",
            method: "post",
            data: params
        });
    },
    payOrder(params = {}) {
        return request({
            url: BASEAPI + "ChatSubscribe/payOrder",
            method: "post",
            data: params
        });
    }
};
