<template>
    <div class="mid-center">
        <div class="stack-wrapper">
            <stack ref="stack" :pages="someList" :stackinit="stackinit"></stack>
        </div>
        <div class="controls">
            <button @click="prev" class="button">
                <i class="prev"></i>
                <span class="text-hidden">prev</span>
            </button>
            <div class="button_center"></div>
            <button @click="next" class="button">
                <i class="next"></i>
                <span class="text-hidden">next</span>
            </button>
        </div>
    </div>
</template>
<script>
import stack from "@/components/stack";
export default {
    el: "#stack",
    data() {
        return {
            someList: [],
            stackinit: {
                visible: 3
            }
        };
    },
    mounted() {
        let that = this;
        setTimeout(function() {
            that.someList = [
                {
                    html:
                        '<img src="http://lzyuan.net/publicImg/shanhuo/zhenzi/zhenzi4.jpg" alt="01">'
                },
                {
                    html:
                        '<img src="http://lzyuan.net/publicImg/shanhuo/mogu/mogu1.jpg" alt="02">'
                },
                {
                    html:
                        '<img src="http://lzyuan.net/publicImg/shanhuo/muer/muer2.jpg" alt="03">'
                },
                {
                    html:
                        '<img src="http://lzyuan.net/publicImg/shanhuo/naizhupin/naizhupin1.jpg" alt="04">'
                },
                {
                    html:
                        '<img src="http://lzyuan.net/publicImg/shanhuo/shaguo/shaguo1.jpg" alt="05">'
                },
                {
                    html:
                        '<img src="http://lzyuan.net/publicImg/shanhuo/shaguogan/shaguogan3.jpg" alt="06">'
                },
                {
                    html:
                        '<img src="http://lzyuan.net/publicImg/shanhuo/niurougan/niurougan1.jpg" alt="07">'
                },
                {
                    html:
                        '<img src="http://lzyuan.net/publicImg/shanhuo/zhenzi/zhenzi4.jpg" alt="07">'
                }
            ];
        }, 2000);
    },
    components: {
        stack
    },
    methods: {
        prev() {
            this.$refs.stack.$emit("prev");
        },
        next() {
            this.$refs.stack.$emit("next");
        }
    }
};
</script>
<style>
.mid-center {
    background: url("/images/1.jpg") no-repeat;
    background-size: contain;
    height: 100%;
}
.stack-wrapper {
    margin: 0 auto;
    position: relative;
    z-index: 1000;
    width: 90%;
    height: 950px;
    padding: 40px 0;
    list-style: none;
    pointer-events: none;
}
.controls {
    position: relative;
    width: 200px;
    text-align: center;
    display: flex; /*Flex布局*/
    display: -webkit-flex; /* Safari */
    justify-content: space-around;
    margin: 0 auto;
    margin-top: 50px;
    padding-top: 38px;
}
.controls .button {
    border: none;
    background: none;
    position: relative;
    display: inline-block;
    cursor: pointer;
    font-size: 16px;
    width: 150px;
    height: 100px;
    z-index: 100;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    border-radius: 50%;
    background: #fff;
}
.button .next {
    display: inline-block;
    width: 10px;
    height: 5px;
    background: rgb(129, 212, 125);
    line-height: 0;
    font-size: 0;
    vertical-align: middle;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    left: -5px;
    top: 2px;
    position: relative;
}
.button .next:after {
    content: "/";
    display: block;
    width: 20px;
    height: 5px;
    background: rgb(129, 212, 125);
    transform: rotate(-90deg) translateY(-50%) translateX(50%);
    -webkit-transform: rotate(-90deg) translateY(-50%) translateX(50%);
}
.button .prev {
    display: inline-block;
    width: 20px;
    height: 5px;
    background: rgb(230, 104, 104);
    line-height: 0;
    font-size: 0;
    vertical-align: middle;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
}
.button .prev:after {
    content: "/";
    display: block;
    width: 20px;
    height: 5px;
    background: rgb(230, 104, 104);
    transform: rotate(-90deg);
    -webkit-transform: rotate(-90deg);
}
.button .button_center {
    width: 10px;
}
.controls .text-hidden {
    position: absolute;
    overflow: hidden;
    width: 0;
    height: 0;
    color: transparent;
    display: block;
}
</style>
