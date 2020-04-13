import Vue from "vue";
import Pencil from "vue-pencil.js";
import App from "./App.vue";

Vue.use(Pencil);

new Vue({
    el: "#app",
    render: h => h(App),
});
