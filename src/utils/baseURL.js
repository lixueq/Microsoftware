import Vue from "vue";
let baseUrl = "";
switch (process.env.NODE_ENV) {
    case "development":
        baseUrl = "https://en-game-api-test3.greencheng.com/";
        break;
    case "test":
        baseUrl = "https://en-game-api-test3.greencheng.com/";
        break;
    case "production":
        baseUrl = "https://en-game-api-test3.greencheng.com/";
        break;
}
Vue.prototype.$baseUrl = baseUrl;

export default baseUrl;
