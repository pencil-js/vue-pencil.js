import install from "./install";

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
    install(window.Pencil)(window.Vue);
}
