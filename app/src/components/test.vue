<template>
    <button @click="darbiba">Test</button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import axios from 'axios';

export default defineComponent({
    name: "TestComponent",
    setup() {
        

        const darbiba = async () => {
            try {
                const response = await axios.get(`http://${import.meta.env.VITE_BACKEND_ADDRESS}/api/fetchds`, {
                    params: {
                        'game_id': 1
                    }
                });
                console.log(response.data);
            } catch (e) {
                console.log(e);
            }
        }

        return { darbiba };
    },
});
</script>

<style scoped>

template {
    color: white;
}

</style>
