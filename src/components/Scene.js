import PContainer from "./Container";

const mirroredProps = ["cursorPosition", "fps", "width", "height", "center", "size"];
const computed = mirroredProps.reduce((obj, prop) => {
    obj[prop] = function () {
        return this.$pencil[prop];
    };
    return obj;
}, {});

const mirroredFunctions = ["setImageSmoothing", "getRandomPosition", "getImageData", "toImage"];
const methods = mirroredFunctions.reduce((obj, prop) => {
    obj[prop] = function (...args) {
        return this.$pencil[prop](...args);
    };
    return obj;
}, {});

export default Pencil => ({
    extends: PContainer(Pencil),
    template: "<div><slot/></div>",
    watch: {
        options () {
            this.$pencil.setOptions(this.options);
        },
    },
    computed,
    methods,
    beforeMount () {
        // Temporary scene to host children
        const container = document.createElement("div");
        this.$pencil = new Pencil.Scene(container, this.options);
    },
    mounted () {
        const oldScene = this.$pencil;
        const container = this.$el.parentNode;
        this.$pencil = new Pencil.Scene(container, this.options);
        container.replaceChild(this.$pencil.ctx.canvas, this.$el);

        // Transfer children from old to new scene
        oldScene.children.forEach(child => this.$pencil.add(child));

        this.$listenForEvents();

        this.$pencil.startLoop();
    },
});
