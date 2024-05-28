<template>
    <div class="popup" v-if="show" :class="{
            'error': type == 'error',
            'info': type == 'info'
        }">
        

        <div class="inner" >
            <p>{{ message }}</p>
            <button @click="close">X</button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: "Popup",
    props: {
        message: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required:true,
        }
    },
    setup() {
        // Initialize show as a ref instead of a let variable to ensure reactivity
        const show = ref(true);

        const close = () => {
            show.value = false; // Use.value to mutate the ref
            console.log("Closing popup", show.value);
        };

        return {
            show,
            close,
        };
    },
});
</script>

<style scoped>
.popup {
    position: absolute;
    width: 30%;
    height: auto;
    margin: auto;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

.inner {
    padding: 10px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
}

button {
    color: white;
    font-size: 12px;
}

p {
    color: white;
}

.error {
    background-color: rgba(219, 76, 76, 0.904);
    border: 2px solid rgb(255, 52, 52);
    border-radius: 10px;
}

.info {
    background-color: rgba(90, 185, 90, 0.89);
    border: 2px solid rgb(117, 255, 117);
    border-radius: 10px;
}

.top {
    display: flex;
    justify-content: flex-end;
}
</style>
