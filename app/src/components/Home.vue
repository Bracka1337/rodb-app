<template>
    <div class="container">
        <h1 class="header">Innovative solution to managing roblox datastores</h1>
        <div class="about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, molestias nam unde consequatur veritatis adipisci architecto ad perferendis? Quo, illum. Omnis, numquam qui ipsum maxime saepe eum? Debitis, dolor magni.</div>
    </div>

</template>


<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: "HomeComponent",
    setup() {

    }
});
</script>

<style scoped>

.container {
    color: white;
}

.header {
    width: 50%;
    margin: 50px;
    font-size: 56px;
}

.about {
    margin: 30px;
    width: 60%;
}

</style>