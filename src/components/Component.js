import PContainer from "./Container";

export default (Pencil) => ({
    name: "PComponent",
    extends: PContainer(Pencil),
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
