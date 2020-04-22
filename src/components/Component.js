import PContainer from "./Container";

export default () => ({
    name: "PComponent",
    extends: PContainer,
    props: ["draggable"],
    mounted () {
        if (!this.$pencil) {
            throw new Error("Component should not be instantiated by itself.");
        }

        if (this.draggable !== undefined) {
            this.$pencil.draggable();
        }
    },
});
