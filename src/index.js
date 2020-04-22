/* globals WEB */

import * as ComponentsDefinition from "./components";

const install = pencil => (Vue, { prefix = "p" } = {}) => {
    Object.keys(ComponentsDefinition).forEach((key) => {
        const component = ComponentsDefinition[key];
        const name = `${prefix}${key}`;
        component.name = name;
        Vue.component(name, component(pencil));
    });
};

let Pencil;
// Auto install on browser
if (WEB) {
    const errors = [];
    if (!window.Vue) {
        errors.push(`Vue.js should be installed before vue-pencil.js using a <script> tag like:
<script src="https://cdn.jsdelivr.net/npm/vue"></script>`);
    }
    if (!window.Pencil) {
        errors.push(`Pencil.js should be installed before vue-pencil.js using a <script> tag like:
<script src="https://unpkg.com/vue-pencil.js"></script>`);
    }

    if (errors.length) {
        errors.forEach(message => console.error(message));
    }
    else {
        install(window.Pencil)(window.Vue, undefined);
    }
}
else {
    // This should be resolved by the user's bundler
    Pencil = require("pencil.js");
}

const Components = Object.keys(ComponentsDefinition).map(key => ComponentsDefinition[key](Pencil));

export default {
    install: install(Pencil),
};
export {
    Components,
};
