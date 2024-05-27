<template>
    <div class="game-container">
        <button class="game-btn">A Game</button>
        <button class="add-game-btn">+</button>
    </div>
</template>


<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: "NavBar",
    setup() {

    }
});
</script>

<style scoped>

.game-container {
    margin: 20px;
}

button {
    width: 200px;
    height: 200px;
    margin: 10px;
    font-size: 52px;
    transition: all 0.3s ease;
}

button:hover {
  transform: scale(1.05);
  filter: brightness(150%);
}

.game-btn {
    color: rgb(207, 207, 207);
    border: 2px solid rgb(207, 207, 207);
    border-radius: 10px;
}

.add-game-btn {
    color: rgb(207, 207, 207);
    border: 4px solid rgb(207, 207, 207);
    border-radius: 10px;
    font-weight: 400;
}


</style>