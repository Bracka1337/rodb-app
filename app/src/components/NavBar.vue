<template>
    <div class="header">
        <h1>RoDB</h1>
        <div class="btn-container">
            <button>Login</button>
        </div>
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

.header {
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 15px;
 max-height: 10%;
 background-color: rgb(53, 53, 53);
 border-bottom: 5px solid rgb(102, 31, 143);
 box-shadow: 0 0 30px rgb(102, 31, 143);
 
}

h1 {
    color: white;
    text-align: center;
}

btn-container {
    margin-left: auto;
}

button {
    width: 100px;
    padding: 5px;
    background-color: rgb(102, 31, 143);
    border: 1px solid black;
    border-radius: 5px;
    color: white;
    font-size: large;
    font-weight: 550;
}

</style>