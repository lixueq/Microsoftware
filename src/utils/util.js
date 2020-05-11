import baseURL from "./baseURL";
import wx from "weixin-js-sdk";
import api from "@/api/common";
import store from "@/store/index";
// 跳转登录
export const getAuthorization = url => {
    let apiUrl = "/v1/Chatcommon/getRedirectCode";
    window.location.href = baseURL + apiUrl + "?url=" + url;
};

//  创建页面的config
export const createdConfig = list => {
    return new Promise((resolve, reject) => {
        let url = window.location.href.split("#")[0];
        api.getWxConfig({
            url: url
        })
            .then(res => {
                wx.config({
                    debug: false,
                    appId: res.appId,
                    timestamp: res.timestamp,
                    nonceStr: res.nonceStr,
                    signature: res.signature,
                    jsApiList: list
                });
                resolve(res);
            })
            .catch(err => {
                reject(err);
            });
        wx.error(function(res) {
            reject(res);
            this.$toast(res.errMsg.toString());
        });
    });
};

// 创建订单
export const createOrder = data => {
    return new Promise((resolve, reject) => {
        api.createdOrder(data)
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err);
            });
    });
};

// 根据订单获取预支付id，并发起支付
export const payByOrderId = res => {
    return new Promise((resolve, reject) => {
        api.payOrder({
            user_order_id: res.user_order_id,
            pay_channel: 1010,
            openid: store.getters.openid
        })
            .then(res => {
                wx.ready(function() {
                    wx.chooseWXPay({
                        timestamp: res.timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
                        nonceStr: res.nonceStr, // 支付签名随机串，不长于 32 位
                        package: res.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
                        signType: res.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
                        paySign: res.paySign, // 支付签名
                        success: function(res) {
                            resolve(res);
                        }
                    });
                });
            })
            .catch(err => {
                reject(err);
            });
    });
};

// 创建订单并支付
export const payOrder = data => {
    return new Promise((resolve, reject) => {
        createOrder(data)
            .then(orderRes => {
                payByOrderId(orderRes)
                    .then(res => {
                        resolve(res);
                    })
                    .catch(err => {
                        reject(err);
                    });
            })
            .catch(err => {
                reject(err);
            });
    });
};

// 是否为ios

export const isIOSWeChat = () => {
    let userAgent = global.navigator.userAgent;
    return /iPhone|iPad|iPod/i.test(userAgent);
};
