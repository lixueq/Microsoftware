import Vue from "vue";
Vue.prototype.$validator = {
    validatorAll(_self, obj) {
        let errs = [];
        Object.keys(obj).forEach(key => {
            errs.push(_self[key]());
        });
        console.log(errs);
        return !errs.includes(false);
    }
};
