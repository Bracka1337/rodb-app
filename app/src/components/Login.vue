<template>
    <div class="login-container">
        <div class="label-container">
            <button class="label-btn" @click="routeToMain">RoDB</button>
            <h2>Login</h2>
        </div>
        <div class="email-container">
            <p>Email</p>
            <input type="email" v-model="email">
        </div>
        <div class="password-container">
            <p>Password</p>
            <input type="password" v-model="password">
        </div>
        <button class="login-btn" @click="submitLogin">Login</button>
        <button @click="routeToRegister">Don't have an account? Register</button>
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
                    router.push('/profile');
                } else {
                    console.log("Invalid Credentials");
                }
            } catch (error) {
                console.error(error);
            }
        };

        const routeToMain = async () => {
            router.push('/');
        };

        const routeToRegister = async () => {
            router.push('/register');
        };

        return { email, password, submitLogin, routeToMain, routeToRegister };
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
    color: white;
}

.label-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
}

.email-container, .password-container {
    margin-bottom: 5px;
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
    border: 1px solid rgba(255, 255, 255, 0.267);
    box-sizing: border-box;
    border-radius: 4px;
    color: white;
}

.login-btn {
    width: 100%;
    padding: 5px;
    margin-top: 10px;
    margin-bottom: 5px;
    border: 3px solid rgb(102, 31, 143);
    box-shadow: 0 0 12px rgb(102, 31, 143);
    border-radius: 5px;
    color: rgb(162, 0, 255);
    font-size: large;
    font-weight: 550;
    transition: all ease 0.3s;
}

.login-btn:hover {
    background-color: rgb(102, 31, 143);
    color: white;
}

.label-btn {
    font-size: 2em;
    font-weight: bold;
    text-align: center;
}


</style>