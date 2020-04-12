import Vue from "vue";
import Pencil from "vue-penciljs";
import App from "./App.vue";

Vue.use(Pencil);

new Vue({
    el: "#app",
    render: h => h(App),
});
