// import api from "@/api/login";
const user = {
    state: {
        code: "",
        token: "",
        openid: "",
        userInfo: {}
    },
    mutations: {
        SET_CODE: (state, code) => {
            state.code = code;
            window.localStorage.setItem("code", code);
        },
        SET_TOKEN: (state, token) => {
            state.token = token;
            window.localStorage.setItem("token", token);
        },
        SET_OPENID: (state, openid) => {
            state.openid = openid;
            window.localStorage.setItem("openid", openid);
        },
        SET_USERINFO: (state, userInfo) => {
            state.userInfo = userInfo;
            window.localStorage.setItem("userInfo", JSON.stringify(userInfo));
        }
    },
    actions: {
        setCode({ commit }, code) {
            commit("SET_CODE", code);
        },
        setToken({ commit }, token) {
            commit("SET_TOKEN", token);
        },
        setOpenid({ commit }, openid) {
            commit("SET_OPENID", openid);
        },
        setUserInfo({ commit }, userInfo) {
            commit("SET_USERINFO", userInfo);
        }
        // loginByCode({ dispatch, commit }, loginData) {
        //     return new Promise((resolve, reject) => {
        //         api.loginByCode(loginData)
        //             .then(response => {
        //                 console.log(response);
        //                 commit("SET_TOKEN", response.access_token);
        //                 commit("SET_OPENID", response.openid);
        //                 dispatch("GetUserInfo")
        //                     .then(res => {
        //                         resolve(res);
        //                     })
        //                     .catch(err => {
        //                         reject(err);
        //                     });
        //             })
        //             .catch(error => {
        //                 console.log(error);
        //                 reject(error);
        //             });
        //     });
        // },
        // GetUserInfo({ commit }) {
        //     return new Promise((resolve, reject) => {
        //         api.getUserInfo()
        //             .then(response => {
        //                 console.log(response);
        //                 commit("SET_USERINFO", response);
        //                 resolve(response);
        //             })
        //             .catch(error => {
        //                 reject(error);
        //             });
        //     });
        // }
    }
};
export default user;
