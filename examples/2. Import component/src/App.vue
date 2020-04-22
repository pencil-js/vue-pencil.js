<template>
    <PScene :options="sceneOptions" ref="scene">
        <PStar
            v-for="(position, index) in stars" :key="index"
            :position="position"
            :radius="100"
            :options="{
                ...starOptions,
                rotation: Math.random(),
            }"
            draggable
        />
    </PScene>
</template>

<script>
    import { Components } from "vue-pencil.js";
    const { PScene, PStar } = Components;

    export default {
        name: "App",
        components: {
            PScene,
            PStar,
        },
        data: () => ({
            sceneOptions: {
                fill: "#73e0fa",
            },
            starOptions: {
                fill: "#fa134f",
                shadow: {
                    position: [5, 5],
                    blur: 10,
                    color: "#000",
                },
            },
            stars: [],
        }),
        mounted () {
            for (let i = 0; i < 30; ++i) {
                this.stars.push(this.$refs.scene.getRandomPosition());
            }
        },
    };
</script>
