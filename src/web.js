import install from "./install";

// eslint-disable-next-line no-restricted-globals
const global = self;

const errors = [];
if (!global.Vue) {
    errors.push(`Vue.js should be installed before vue-pencil.js using a <script> tag like:
<script src="https://cdn.jsdelivr.net/npm/vue"></script>`);
}
if (!global.Pencil) {
    errors.push(`Pencil.js should be installed before vue-pencil.js using a <script> tag like:
<script src="https://unpkg.com/pencil.js"></script>`);
}

if (errors.length) {
    errors.forEach(message => console.error(message));
}
else {
    install(global.Pencil)(global.Vue);
}
