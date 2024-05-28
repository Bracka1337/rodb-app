<template>
    <div class="popup" v-if="show" :class="{
            'error': type == 'error',
            'info': type == 'info'
        }">
        

        <div class="inner" >
            <div class="top">
                <button @click="close">Close</button>
            </div>
            <p>{{ message }}</p>
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
    height: 10%;
    margin: auto;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

.inner {
    padding: 10px 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}


.error {
    background-color: red;
}

.info {
    background-color: green;
}

.top {
    display: flex;
    justify-content: flex-end;
}
</style>
