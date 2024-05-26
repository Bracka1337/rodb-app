<template>
    <div class="register-container">
        <div class="username-container">
            <p>Username</p>
            <input type="text" v-model="username">
        </div>
        <div class="email-container">
            <p>Email</p>
            <input type="email" v-model="email">
        </div>
        <div class="password-container">
            <p>Password</p>
            <input type="password" v-model="password">
        </div>
        <button @click="submitRegister">Register</button>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

export default defineComponent({
    name: 'RegisterComponent',
    setup() {
        const username = ref<string>('');
        const email = ref<string>('');
        const password = ref<string>('');
        const router = useRouter();

        const submitRegister = async () => {
            try {
                const response = await axios.post(`http://${import.meta.env.VITE_BACKEND_ADDRESS}/api/register`, {
                    name: username.value,
                    email: email.value,
                    password: password.value,
                    password_confirmation: password.value
                });
                if (response.data.status) {
                    console.log("Success");
                } else {
                    console.log("Register Failer");
                }
            } catch (error) {
                console.error(error);
            }
        };

        return { username, email, password, submitRegister };
    },
});
</script>

<style scoped>

.register-container {
    width: 400px;
    padding: 32px;
    background-color: #f1f1f1;
    margin: 0 auto;
    margin-top: 100px;
    border-radius: 4px;
    border: 2px solid rgb(117, 0, 128);;
    box-shadow: 0 0 15px rgba(117, 0, 128, 0.493);
}

.email-container, .password-container, username-container {
    margin-bottom: 15px;
}


input[type="email"], input[type="password"], input[type="text"] {
    width: 100%;
    padding: 12px 20px;
    margin: 0px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
    border-radius: 4px;
}

button {
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
    border-radius: 4px;
}

button:hover {
    opacity: 0.8;
}

</style>