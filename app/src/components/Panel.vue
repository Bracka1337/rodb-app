<template>
    <Popup :message="'error.. deleting system32'" :type="'info'"/>
    <div class="container">
        <div class="header">
            <h1 class="game-name">Game Name</h1>
            <button>Refresh</button>
        </div>
        <div class="apikey-container">
            <input>
        </div>
        <div class="datastore-container">
            <button class="datastore-btn">Datastore Name</button>
            <button class="datastore-btn">Datastore Name</button>
            <button class="datastore-btn">Datastore Name</button>
            <button class="datastore-btn">Datastore Name</button>
        </div>
        <div class="panel-container">
            <div class="datastore">
                <div class="entry" v-for="n in 50" :key="n">
                    <div class="entry-value-container">
                        <p class="id">{{n}}</p>
                        <p class="key">123456789</p>
                        <p class="value">{
    "Perks": [],
    "plrStats": {
        "Kills": 0,
        "Deaths": 0,
        "Level": 1,
        "XP": 0
    },
    "Weapons": {
        "Owned": [],
        "Equipped": []
    },
    "Wallet": {
        "Cash": 1337,
        "Coins": 1000
    }
}</p>
                    </div>
                    <div class="btn-container">
                        <button class="btn-green">Edit</button>
                        <button class="btn-red">Delete</button>
                    </div>
                </div>
            </div>
            <div class="btn-container">
                <button class="btn-green">Refresh Datastore</button>
                <button class="btn-green">Save Datastore</button>
            </div>
        </div>
    </div>

</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Popup from "./Popup.vue";

export default defineComponent({
    name: "PanelComponent",
    components: {
        Popup
    }
   
});

</script>

<style scoped>

.container {
    color:white;
}

.header {
    padding: 20px;
    display: flex;
    justify-content: space-between;
}

.datastore-container {
    padding-left: 20px;
    height: 50px;
    display: flex;
}

.datastore-btn {
    padding: 10px;
    border: 1px solid rgba(255, 255, 255, 0.267);
    transition: filter 0.3s ease;
}

.datastore-btn:hover {
    border-bottom: 2px solid white;
}

.panel-container {
    margin: 20px;
    padding: 20px;
    border: 3px solid rgba(255, 255, 255, 0.267);
    border-radius: 20px;
}

.datastore {
    margin: 5px;
    padding: 5px;
    border: 2px solid rgba(255, 255, 255, 0.267);
    border-radius: 10px;
    max-height: 60vh;
    overflow-y: scroll;
    scrollbar-width: thin;
}

.entry {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    margin: 5px;
    border: 1px solid rgba(255, 255, 255, 0.267);
    border-radius: 5px;
    max-height: 75px;
}

.btn-container {
    padding: 5px;
    display: flex;
    align-items: center;
}

.btn-green, .btn-red {
    border-radius: 4px;
    margin: 5px;
    padding: 2px;
    padding-left: 10px;
    padding-right: 10px;
    transition: all ease 0.3s;
}

.btn-green {
    border: 1px solid rgb(60, 172, 60);
}

.btn-red {
    border: 1px solid rgb(253, 60, 60);
}

.btn-green:hover {
    background-color: rgb(60, 172, 60);
}

.btn-red:hover {
    background-color: rgb(253, 60, 60);
}

.entry-value-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
}

p {
    border-right: 1px solid rgb(92, 92, 92);
    padding: 10px;
}

.id, .key, .value {
    display: flex;
    align-items: center;
    height: 100%;
}

.id {
  width: 30px;
  display: flex;
  align-items: center;
  height: 100%;
  padding: 5px;
}

.key {
  flex-grow: 1;
  min-width: 100px; /* Ensures the key column doesn't shrink below 100px */
}

.value {
  flex-grow: 1;
  overflow: hidden;
}

input {
    color: white;
}

</style>