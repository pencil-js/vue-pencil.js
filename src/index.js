// This should be resolved by the user's bundler
import Pencil from "pencil.js";
import * as ComponentsDefinition from "./components";
import install from "./install";

const Components = Object.keys(ComponentsDefinition).map(key => ComponentsDefinition[key](Pencil));

export default {
    install: install(Pencil),
};
export {
    Components,
};
