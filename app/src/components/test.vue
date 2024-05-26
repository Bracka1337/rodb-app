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
                const response = await axios.get('https://apis.roblox.com/api/datastores/v1/universes/5697506348/standard-datastores', {
                    headers: {
                        'x-api-key': 'RGZwK37KMEeGWQ/xn5gSZVHx6yrp8r3IBp38EMqHSNXhixUT'
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


