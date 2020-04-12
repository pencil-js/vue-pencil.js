# vue-penciljs
Pencil.js ❤️ Vue - Build reactive 2D graphics scene in your Vue project


## Install

    npm install vue-penciljs

> You need to install [`vue`](https://github.com/vuejs/vue) and [`pencil.js`](https://github.com/pencil-js/pencil.js) yourself alongside `vue-penciljs`.


## Usage

You have 2 choices. Install `vue-penciljs` globally and use it wherever you want in your `Vuejs` app.
Or, import only components you need in your `Vuejs` components.

### Global install

```js
import Vue from "vue";
import Pencil from "vue-penciljs";

Vue.use(Pencil);

new Vue({
    el: "#app",
    template: `<p-scene>
        <p-circle :radius="100" />
    </p-scene>`,
});
```

### Import component

```vue
<template>
    <PScene>
        <PCircle :radius="100" />
    </PScene>
</template>

<script>
import { PScene, PCircle } from "vue-penciljs";

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

Check out a working example in the [example directory](./example) (use `webpack`).


## License

[MIT](license)
