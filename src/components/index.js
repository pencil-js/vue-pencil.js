import Pencil from "pencil.js";

import PComponent from "./p-component.vue";
import PContainer from "./p-container.vue";
import PScene from "./p-scene.vue";

const factory = (pencilClass, props) => ({
    name: `P${pencilClass}`,
    extends: PComponent,
    props,
    beforeMount () {
        this.$pencil = new Pencil[pencilClass](this.position, ...props.map(prop => this[prop]), this.options);
    },
});

const classes = {
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
const result = {};

Object.keys(classes).forEach((pencilClass) => {
    const component = factory(pencilClass, classes[pencilClass]);
    result[component.name] = component;
});

export default {
    PComponent,
    PContainer,
    PScene,
    ...result,
};
