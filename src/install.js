import ComponentsDefinition from "./components";

export default pencil => (Vue, { prefix } = {}) => {
    Object.keys(ComponentsDefinition).forEach((key) => {
        const component = ComponentsDefinition[key](pencil);
        let name = key;
        if (prefix) {
            name = name.replace(/^P/, prefix.endsWith("-") ? prefix : `${prefix}-`);
        }
        Vue.component(name, component);
    });
};
