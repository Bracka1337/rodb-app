<template>
    <div class="register-container">
        <div class="label-container">
            <button class="label-btn" @click="routeToMain">RoDB</button>
            <h2>Register</h2>
        </div>
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
        <p class="error" v-if="errorMsg !== ''">{{ errorMsg }}</p>
        <button class="register-btn" @click="submitRegister">Register</button>
        <button @click="routeToLogin">Already have an account? Login</button>
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
        const errorMsg = ref<string>('');
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
                    errorMsg.value = '';
                    console.log("Success");
                    router.push('/login');
                } else {
                    errorMsg.value = 'Invalid input';
                    console.log("Register Failer");
                }
            } catch (error) {
                errorMsg.value = 'Invalid input';
                console.error(error);
            }
        };

        const routeToMain = async () => {
            router.push('/');
        };
        const routeToLogin = async () => {
            router.push('/login');
        };

        return { username, email, password, submitRegister, routeToMain, routeToLogin, errorMsg };
    },
});
</script>

<style scoped>

.register-container {
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

.email-container, .password-container, .username-container {
    margin-bottom: 5px;
}


input[type="email"], input[type="password"], input[type="text"] {
    width: 100%;
    padding: 12px 20px;
    margin: 0px 0;
    display: inline-block;
    border: 1px solid rgba(255, 255, 255, 0.267);
    box-sizing: border-box;
    border-radius: 4px;
    color: white;
}

.register-btn {
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

.register-btn:hover {
    background-color: rgb(102, 31, 143);
    color: white;
}

.label-btn {
    font-size: 2em;
    font-weight: bold;
    text-align: center;
}

.error {
    padding: 5px;
    background-color: rgba(219, 76, 76, 0.904);
    border: 2px solid rgb(255, 52, 52);
    border-radius: 5px;
}

</style>