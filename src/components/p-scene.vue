<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
    import { MouseEvent, Scene } from "pencil.js";

    export default {
        name: "PScene",
        props: ["options"],
        watch: {
            options () {
                this.$pencil.setOptions(this.options);
            }
        },
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
        computed: {
            center () {
                return this.$pencil.center;
            }
        },
        methods: {
            getRandomPosition () {
                return this.$pencil.getRandomPosition();
            }
        }
    };
</script>
