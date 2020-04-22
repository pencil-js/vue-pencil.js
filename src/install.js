import * as ComponentsDefinition from "./components";

export default pencil => (Vue, { prefix = "p" } = {}) => {
    Object.keys(ComponentsDefinition).forEach((key) => {
        const component = ComponentsDefinition[key];
        const name = `${prefix}${key}`;
        component.name = name;
        Vue.component(name, component(pencil));
    });
};
