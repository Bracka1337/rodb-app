<template>
    <div class="header">
        <button class="label" @click="routeToMain">RoDB</button>
        <button class="btn" v-if="$route.path !== '/'" @click="routeToProfile">Profile</button>
        <div class="btn-container">
            <button class="login-btn" v-if="$route.path === '/'" @click="routeToLogin">Login</button>
            <button class="login-btn" v-if="$route.path !== '/'" @click="logout">Logout</button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

export default defineComponent({
    name: "NavBarComponent",
    setup() {

        const token = localStorage.getItem('userToken');
        
        const router = useRouter();

        const routeToMain = async () => {
            router.push('/');
        };

        const routeToLogin = async () => {
            router.push('/login');
        };

        const routeToProfile = async () => {
            router.push('/profile');
        };

        const logout = async () => {
            try {
                const response = await axios.get(`http://${import.meta.env.VITE_BACKEND_ADDRESS}/api/logout`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    }
                });
                if (response.status) {
                    console.log(response.status);
                    localStorage.removeItem('userToken');
                    router.push('/');
                }
            } catch(e) {
                console.error(e);
            }
        };

        return { routeToMain, routeToLogin, routeToProfile, logout };
    }
});
</script>

<style scoped>

.header {
 padding: 15px;
 max-height: 10%;
 background-color: rgb(53, 53, 53);
 border-bottom: 5px solid rgb(102, 31, 143);
 box-shadow: 0 0 30px rgb(102, 31, 143);
 color: white;
 display:grid;
 grid-auto-columns: minmax(0, 1fr);
 grid-auto-flow: column;

}

.label {
    font-size: 2em;
    font-weight: bold;
    text-align: center;
    text-align: left
}

.btn-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-left: auto;
}

.login-btn {
    width: 100px;
    padding: 5px;
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


</style>