<template>

    <div class="profile-container">
        <h1>Hello, {{ username }}!</h1>
    </div>

</template>


<script lang="ts">
import { defineComponent, h, ref } from 'vue';
import Popup from "./Popup.vue";

export default defineComponent({
    name: "ProfileComponent",
    setup() {
        let username = 'Bracka1337';

        return { username };
    },
});

</script>

<style scoped>

.profile-container {
    margin: 30px;
    color: white;
}



</style>