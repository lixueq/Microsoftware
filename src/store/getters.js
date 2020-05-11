/**
 * 在刷新的过程中，token和userinfo可能会被刷新掉，所以必须让其和本地缓存保持统一，目的解决刷新后的一些bug。
 */
import store from "@/store";
const getters = {
    loading: state => state.app.loading,
    code: state => {
        let stroageCode = window.localStorage.getItem("code");
        if ((!state.user.code || state.user.code === "") && stroageCode) {
            store.dispatch("setCode", stroageCode);
        }
        return state.user.code;
    },
    token: state => {
        let stroageToken = window.localStorage.getItem("token");
        if ((!state.user.token || state.user.token === "") && stroageToken) {
            store.dispatch("setToken", stroageToken);
        }
        return state.user.token;
    },
    openid: state => {
        let stroageOpenid = window.localStorage.getItem("openid");
        if ((!state.user.openid || state.user.openid === "") && stroageOpenid) {
            store.dispatch("setOpenid", stroageOpenid);
        }
        return state.user.openid;
    },
    userInfo: state => {
        let stroageUserInfo = JSON.parse(
            window.localStorage.getItem("userInfo")
        );
        if (
            (!state.user.userInfo ||
                JSON.stringify(state.user.userInfo) === "{}") &&
            stroageUserInfo
        ) {
            store.dispatch("setUserInfo", stroageUserInfo);
        }
        return state.user.userInfo;
    }
};
export default getters;
