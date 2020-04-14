# vue-pencil.js
Pencil.js ❤️ Vue - Build reactive 2D graphics scene in your Vue project


## Install

    npm install vue-pencil.js

> You need to install [`vue`](https://github.com/vuejs/vue) and [`pencil.js`](https://github.com/pencil-js/pencil.js) yourself alongside `vue-pencil.js`.


## Usage

You have 2 choices.
 1. Install `vue-pencil.js` globally and use it wherever you want in your `Vuejs` app.
 2. Or, import only components you need in your `Vuejs` components.

### 1. Global install

```js
import Vue from "vue";
import Pencil from "vue-pencil.js";

const options = {
    prefix: "p", // Change the component's prefix (default: "p")
};
Vue.use(Pencil, options);

new Vue({
    el: "#app",
    template: `
        <p-scene>
            <p-circle :radius="100" />
        </p-scene>
    `,
});
```

### 2. Import component

```vue
<template>
    <PScene>
        <PCircle :radius="100" />
    </PScene>
</template>

<script>
import { PScene, PCircle } from "vue-pencil.js";

    export default {
        name: "App",
        components: {
            PScene,
            PCircle,
        },
    };
</script>
```


## Example

Check out a working example in the [example directory](./example) (use [`webpack`](https://github.com/webpack/webpack)).


## License

[MIT](license)
