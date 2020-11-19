import PComponent from "./Component";

const map = {
    // Path: ["instructions", "isClosed"], // FIXME: find a way to declare instructions
    Heart: ["radius"],
    Line: ["points"],
    Spline: ["points", "tension"],
    Polygon: ["points"],
    RegularPolygon: ["nbSides", "radius"],
    Star: ["radius", "nbBranches", "bevelRatio"],
    Triangle: ["radius"],
    Rectangle: ["width", "height"],
    Image: ["url"],
    Square: ["size"],
    Arc: ["width", "height", "startAngle", "endAngle"],
    Ellipse: ["width", "height"],
    Circle: ["radius"],
    Text: ["text"],
    Button: [],
    Checkbox: [],
    // Knob: [], // FIXME: draggable is not working
    // Slider: [], // FIXME: same
    ProgressBar: [],
    ProgressPie: [],
    Select: ["items"],
};

const classes = {};
Object.keys(map).forEach((className) => {
    const pName = `P${className}`;
    classes[pName] = Pencil => ({
        extends: PComponent(Pencil),
        props: map[className],
        beforeMount () {
            const props = ["position", ...map[className], "options"].map(p => this[p]);
            this.$pencil = new Pencil[className](...props);
        },
    });
});

export default classes;
