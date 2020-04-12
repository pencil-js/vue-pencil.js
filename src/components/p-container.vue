<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
    import { MouseEvent } from "pencil.js";

    export default {
        name: "PContainer",
        props: ["position", "options"],
        watch: {
            position () {
                this.$pencil.position.set(this.position);
            },
            options () {
                console.log("Set options");
                this.$pencil.setOptions(this.options);
            }
        },
        mounted () {
            if (this.$parent.$pencil) {
                this.$parent.$pencil.add(this.$pencil);
            }

            [
                ...Object.values(MouseEvent.events),
                ...Object.values(this.$pencil.constructor.events),
            ].forEach(event => {
                this.$pencil.on(event, (...args) => this.$emit(event, ...args));
            });
        },
        updated () {
            console.log("Update", this.$vnode.tag);
        },
        destroyed () {
            if (this.$parent.$pencil) {
                this.$parent.$pencil.remove(this.$pencil);
            }
        }
    };
</script>
