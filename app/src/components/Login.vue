<template>
    <div class="login-container">
        <div class="email-container">
            <p>Email</p>
            <input type="email" v-model="email">
        </div>
        <div class="password-container">
            <p>Password</p>
            <input type="password" v-model="password">
        </div>
        <button @click="submitLogin">Login</button>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

export default defineComponent({
    name: 'LoginComponent',
    setup() {
        const email = ref<string>('');
        const password = ref<string>('');
        const router = useRouter();

        const submitLogin = async () => {
            try {
                const response = await axios.post(`http://${import.meta.env.VITE_BACKEND_ADDRESS}/api/login`, {
                    email: email.value,
                    password: password.value
                });
                if (response.data.status) {
                    console.log("Success");
                    localStorage.setItem('userToken', response.data.token);
                } else {
                    console.log("Invalid Credentials");
                }
            } catch (error) {
                console.error(error);
            }
        };

        return { email, password, submitLogin };
    },
});
</script>

<style scoped>

.login-container {
    width: 400px;
    padding: 32px;
    background-color: rgb(53, 53, 53);
    margin: 0 auto;
    margin-top: 100px;
    border-radius: 4px;
    border: 2px solid rgba(102, 31, 143);
    box-shadow: 0 0 15px rgba(102, 31, 143);
}

.email-container, .password-container {
    margin-bottom: 15px;
}

.rvt-logo {
    max-width: 75px;
    max-height: 75px;
    margin: auto;
    margin-bottom: 20px;
}

input[type="email"], input[type="password"] {
    width: 100%;
    padding: 12px 20px;
    margin: 0px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
    border-radius: 4px;
    color: white;
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

p {
    color: white;
}

</style>