<template>
    <div>
        <slot/>
    </div>
</template>

<script>
    import { MouseEvent, Scene } from "pencil.js";

    const mirroredProps = ["cursorPosition", "fps", "width", "height", "center", "size", "frameCount"];
    const computed = mirroredProps.reduce((obj, prop) => {
        obj[prop] = function () {
            return this.$pencil[prop];
        };
        return obj;
    }, {});

    const mirroredFunction = ["setImageSmoothing", "getRandomPosition", "getImageData", "toImage"];
    const methods = mirroredFunction.reduce((obj, prop) => {
        obj[prop] = function (...args) {
            return this.$pencil[prop](...args);
        };
        return obj;
    }, {});

    export default {
        props: ["options"],
        watch: {
            options () {
                this.$pencil.setOptions(this.options);
            }
        },
        computed,
        methods,
        beforeMount () {
            // Temporary scene to host children
            const container = document.createElement("div");
            this.$pencil = new Scene(container, this.options);
        },
        mounted () {
            const oldScene = this.$pencil;
            const container = this.$el.parentNode;
            this.$pencil = new Scene(container, this.options);
            container.replaceChild(this.$pencil.ctx.canvas, this.$el);

            // Transfer children from old to new scene
            oldScene.children.forEach(child => this.$pencil.add(child));

            [
                ...Object.values(MouseEvent.events),
                ...Object.values(this.$pencil.constructor.events),
            ].forEach(event => {
                this.$pencil.on(event, (...args) => this.$emit(event, ...args));
            });

            this.$pencil.startLoop();
        },
    };
</script>
