import * as Components from "./components";

const install = (Vue, { prefix = "p" } = {}) => {
    Object.keys(Components).forEach((key) => {
        const component = Components[key];
        const name = `${prefix}${key}`;
        component.name = name;
        Vue.component(name, component);
    });
};

// Auto install on browser
if (typeof window !== "undefined" && window.Vue) {
    install(window.Vue);
}

export default {
    install,
};
export * from "./components";
