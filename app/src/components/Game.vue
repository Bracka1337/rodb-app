<template>
    <div class="form-container" v-if="showForm">
        <form>
            <div class="form-header-container">
                <label class="form-header">Add Game</label>
                <button class="close-btn" @click="toggleForm">X</button>
            </div>
            <div>
                <div class="field">
                    <label>Name:</label>
                    <input type="text" id="Name" name="Name" required>
                </div>
                <div class="field">
                    <label>Universe ID:</label>
                    <input type="text" id="universeId" name="universeId" required>
                </div>
                <div class="field">
                    <label>Roblox API key:</label>
                    <input type="text" id="apikey" name="apikey" required>
                </div>
            </div>

            <button type="submit">Submit</button>
        </form>
    </div>
    <div class="container">
        <p class="header">My Games</p>
        <div class="game-container">
            <button class="game-btn" @click="routeToDatastore">A Game</button>
            <button class="add-game-btn" @click="toggleForm">+</button>
        </div>
    </div>
</template>


<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';


export default defineComponent({
    name: "GameComponent",
    setup() {
        const showForm = ref(false);
        const router = useRouter();

        const toggleForm = async () => {
            showForm.value = !showForm.value;
        }


        const routeToDatastore = async () => {
            router.push('/games/1');
        };

        return { routeToDatastore, showForm, toggleForm }
    }
});
</script>

<style scoped>

.game-container {
    border-top: 2px solid rgba(255, 255, 255, 0.267);
}

.game-btn, .add-game-btn {
    width: 200px;
    height: 200px;
    margin: 10px;
    font-size: 52px;
    transition: all 0.3s ease;
}

.game-btn:hover, .add-game-btn:hover {
  transform: scale(1.05);
  filter: brightness(150%);
}

form {
    margin: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.field {
    display: flex;
    justify-content: space-between;
}

.form-container {
    background-color: rgba(155, 154, 154, 0.267);
    border: 2px solid rgba(255, 255, 255, 0.267);
    border-radius: 10px;
    color: white;
    position: absolute;
    width: auto;
    height: auto;
    margin: auto;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
button[type="submit"] {
    width: 120px;
    height: 50px;
    border-radius: 4px;
    margin: 5px;
    padding: 2px;
    padding-left: 10px;
    padding-right: 10px;
    border: 1px solid rgb(60, 172, 60);
    transition: all ease 0.3s;
    font-size: 100%;
}

button[type="submit"]:hover {
    background-color: rgb(60, 172, 60);
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

.container {
    margin: 20px;
}

.header {
    color: white;
    font-size: 40px;
    padding-left: 15px;
}

.form-header {
    font-size: 20px;
    margin-bottom: 20px;
}

.form-header-container {
    display: flex;
    flex-direction: row;
}

.close-btn {
    position: absolute;
    left: 90%;
}

input {
    border: 1px solid grey;
    margin: 2px;
    color: white;
    width: auto;
}

</style>