![vue-pencil.js logo](media/logo.png)

# vue-pencil.js
Pencil.js ❤️ Vue - Build reactive 2D graphics scene in your Vue project


## Install

    npm install vue-pencil.js

> You need to install [`vue`](https://github.com/vuejs/vue) and [`pencil.js`](https://github.com/pencil-js/pencil.js) yourself alongside `vue-pencil.js`.


## Usage

You have 3 choices:
 1. Install `vue-pencil.js` globally and use it wherever you want in your `Vuejs` app.
 2. Import only components you need in your `Vuejs` components.
 3. Use a direct `<script>` tag to include from a CDN.

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
            <p-circle :radius="100" :position="[100, 100]" />
        </p-scene>
    `,
});
```

### 2. Import component

```vue
<template>
    <PScene>
        <PCircle :radius="100" :position="[100, 100]" />
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

### 3. Direct `<script>` tag

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Example</title>
</head>
<body>
    <div id="app"></div>
    <!-- Vue script tag-->
    <script src="https://cdn.jsdelivr.net/npm/vue"></script>
    <!-- vue-pencil.js script tag-->
    <script src="https://unpkg.com/vue-pencil.js"></script>
    <script>
        new Vue({
            el: "#app",
            template: `
                <p-scene>
                    <p-circle :radius="100" :position="[100, 100]" />
                </p-scene>
            `,
        });
    </script>
</body>
</html>
```


## Example

Check out a working example in the [example directory](./example) (use [`webpack`](https://github.com/webpack/webpack)).


## License

[MIT](license)
