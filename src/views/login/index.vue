<template>
    <div class="login">
        <router-link to="/">
            <van-tag mark color="#ff9600" size="large" class="goHome"
                >去首页</van-tag
            >
        </router-link>
        <div
            class="t-c mb60
        "
        >
            <img
                class="w220 h220"
                v-lazy="
                    'https://raw.githubusercontent.com/lixueq/chestnutGarden/dev/public/images/home/logo.png'
                "
                alt=""
            />
        </div>
        <van-field
            class="inpt"
            v-model="form.cellphone"
            type="tel"
            center
            placeholder="请输入手机号"
            :error="err.cellphone"
            @input="verificationPhone"
        >
        </van-field>
        <van-field
            v-if="isCodeLogin"
            class="inpt"
            v-model="form.code"
            type="number"
            center
            placeholder="请输入短信验证码"
            :error="err.code"
        >
            <van-button
                round
                slot="button"
                :disabled="sendCodeBtn"
                type="default"
                class="codeButton"
                @click="handleGetcode"
                >{{ btnCode }}</van-button
            >
        </van-field>
        <van-field
            v-if="!isCodeLogin"
            class="inpt"
            v-model="form.pwd"
            center
            placeholder="请输入密码"
            :error="err.code"
        >
        </van-field>
        <van-button class="submit" round size="large">{{
            isCodeLogin ? "快速登录" : "登录"
        }}</van-button>
        <van-button
            v-if="!isCodeLogin"
            class="codeSubmit"
            plain
            round
            size="large"
            @click="codeLigin"
            >短信验证码登录</van-button
        >
        <p class="tips t-c" v-if="isCodeLogin" @click="codeLigin">
            用户名密码登录 >
        </p>
        <p class="tips t-r" v-if="!isCodeLogin">忘记密码 ></p>
        <div class="mt100 mb100">
            <van-divider
                :style="{
                    color: '#865f3e',
                    borderColor: '#865f3e',
                    padding: '0 16px'
                }"
                >您可以用以下方式登录</van-divider
            >
        </div>
        <van-row>
            <van-col class="mb20" align="center" span="24"
                ><div @click="handleWexin">
                    <img
                        class="w80 h60"
                        v-lazy="
                            'https://raw.githubusercontent.com/lixueq/chestnutGarden/dev/public/images/home/weixin.png'
                        "
                        alt=""
                    />
                    <p class="f22 t-c">
                        微信登录
                    </p>
                </div></van-col
            >
        </van-row>
    </div>
</template>

<script>
// import api from "@/api/login";
export default {
    data() {
        return {
            TIME_COUNT: 60,
            form: {
                cellphone: "",
                code: "",
                pwd: ""
            },
            err: {
                cellphone: false,
                code: false
            },
            sendCodeBtn: true,
            goToUrl: "/activity", // 登录后跳转地址
            btnCode: "发送验证码",
            timer: null,
            isCodeLogin: false
        };
    },
    created() {},
    methods: {
        verificationPhone() {
            let phReg = /^1[3456789]\d{9}$/;
            if (this.form.cellphone.length > 10) {
                if (!phReg.test(this.form.cellphone)) {
                    this.err.cellphone = true;
                    this.$notify("手机号码输入有误");
                    return false;
                } else {
                    this.err.cellphone = false;
                    this.sendCodeBtn = false;
                    return true;
                }
            } else {
                this.sendCodeBtn = true;
                return false;
            }
        },
        verificationCode() {
            if (this.form.code.length < 1) {
                this.err.code = true;
                this.$notify("验证码输入错误");
                return false;
            } else {
                this.err.code = false;
                return true;
            }
        },
        handleGetcode() {
            if (this.verificationPhone() && !this.sendCodeBtn) {
                this.sendCodeBtn = true;
                // api.getCode({
                //     cellphone: this.form.cellphone,
                //     type: "LOGIN_REGISTER"
                // })
                //     .then(() => {
                let timeCount = this.TIME_COUNT;
                if (!this.timer) {
                    this.btnCode = timeCount + "S";
                    this.timer = setInterval(() => {
                        if (timeCount > 1 && timeCount <= this.TIME_COUNT) {
                            timeCount--;
                            this.btnCode = timeCount + "S";
                            this.sendCodeBtn = true;
                        } else {
                            this.btnCode = "发送验证码";
                            this.sendCodeBtn = false;
                            clearInterval(this.timer);
                            this.timer = null;
                        }
                    }, 1000);
                }
                // })
                // .catch(() => {
                //     this.sendCodeBtn = false;
                // });
            }
        },
        codeLigin() {
            this.isCodeLogin = !this.isCodeLogin;
        },
        handleWexin() {
            window.location.href =
                "https://www.yotall.com/index.php/wap/login/oauthlogin?type=WCHAT";
        }
    }
};
</script>

<style lang="scss" scoped>
.login {
    box-sizing: border-box;
    padding: 1rem 0.52rem 0 0.56rem;
    width: 100%;
    height: 100%;
    background: #fefefe;
    box-sizing: border-box;
    .goHome {
        position: absolute;
        left: 0;
    }
    .inpt {
        width: 669px;
        height: 92px;
        line-height: 92px;
        background: #fefefe;
        border-bottom: 1px solid #eee;
        margin-bottom: 30px;
        font-size: 24px !important;
        display: flex;
        align-items: center;
        .codeButton {
            width: 167px;
            height: 56px;
            line-height: 56px;
            background: rgba(255, 255, 255, 1);
            border-radius: 36px;
            font-size: 24px;
            color: rgba(54, 54, 54, 1);
            padding: 0 5px;
        }
    }
    .submit {
        background: #ff9600;
        color: #fff;
        margin-top: 40px;
        width: 669px;
        height: 92px;
        line-height: 92px;
        font-size: 34px;
        border-radius: 46px;
    }
    .codeSubmit {
        margin-top: 20px;
        width: 669px;
        height: 92px;
        line-height: 92px;
        font-size: 34px;
        border-radius: 46px;
    }
    .tips {
        color: #865f3e;
        height: 19px;
        margin-top: 32px;
        font-size: 22px;
    }
}
</style>
