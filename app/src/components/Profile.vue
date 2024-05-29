<template>

    <div class="profile-container">
        <h1>Hello, {{ username }}!</h1>
    </div>

</template>


<script lang="ts">
import { defineComponent, h, onMounted, ref } from 'vue';
import axios from 'axios';
import Popup from "./Popup.vue";

export default defineComponent({
    name: "ProfileComponent",
    setup() {
        const username = ref('');
        const token = localStorage.getItem('userToken');

        const fetchData = async () => {
            try {
                const response = await axios.get(`http://${import.meta.env.VITE_BACKEND_ADDRESS}/api/profile`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    }
                });
                if (response.data.status) {
                    username.value = response.data.data.name;
                    console.log("Success");
                } else {
                    console.log("Idk bro some fialed");
                }
            } catch (error) {
                console.error(error);
            }
        }

        onMounted(fetchData);

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