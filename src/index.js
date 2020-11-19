// This should be resolved by the user's bundler
import Pencil from "pencil.js";
import ComponentsDefinition from "./components";
import install from "./install";

const Components = {};
Object.keys(ComponentsDefinition).forEach(key => Components[key] = ComponentsDefinition[key](Pencil));

export default {
    install: install(Pencil),
};
export {
    Components,
};
