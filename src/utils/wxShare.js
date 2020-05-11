import api from "@/api/common";
import wx from "weixin-js-sdk";
import { Toast } from "vant";

export default function WxShare(shareObj) {
    return new Promise((resolve, reject) => {
        let url = encodeURIComponent(window.location.href.split("#")[0]);
        console.log(url);
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
                    jsApiList: [
                        "onMenuShareAppMessage",
                        "onMenuShareTimeline",
                        "onMenuShareQQ",
                        "onMenuShareQZone"
                    ]
                });
                let share_config = {
                    imgUrl: shareObj.imgUrl,
                    desc: shareObj.desc,
                    title: shareObj.title,
                    link: shareObj.link,
                    success: function() {
                        Toast("分享成功！");
                    },
                    cancel: function() {
                        Toast("已取消分享！");
                    }
                };
                wx.ready(function() {
                    wx.onMenuShareAppMessage(share_config); //分享给好友
                    wx.onMenuShareTimeline(share_config); //分享到朋友圈
                    wx.onMenuShareQQ(share_config); //分享给手机QQ
                    wx.onMenuShareQZone(share_config); //分享给手机QQ
                });
                resolve(res);
            })
            .catch(err => {
                console.log(err);
                reject(err);
            });
        wx.error(function(res) {
            console.log(res);
            reject(res);
            Toast(res.errMsg.toString());
        });
    });
}
