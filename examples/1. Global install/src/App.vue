<template>
    <p-scene :options="sceneOptions" ref="scene">
        <p-star
            v-for="(position, index) in stars" :key="index"
            :position="position"
            :radius="100"
            :options="{
                ...starOptions,
                rotation: Math.random(),
            }"
            draggable
        />
    </p-scene>
</template>

<script>
    export default {
        name: "App",
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
