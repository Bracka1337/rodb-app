<template>
    <div class="header">
        <button class="label" @click="routeToMain">RoDB</button>
        <button class="btn" v-if="$route.path !== '/'" @click="routeToGames">Games</button>
        <div class="btn-container">
            <button class="login-btn" v-if="$route.path === '/'" @click="routeToLogin">Login</button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
    name: "NavBarComponent",
    setup() {
        
        const router = useRouter();

        const routeToMain = async () => {
            router.push('/');
        };

        const routeToLogin = async () => {
            router.push('/login');
        };

        const routeToGames = async () => {
            router.push('/games');
        };

        return { routeToMain, routeToLogin, routeToGames };
    }
});
</script>

<style scoped>

.header {
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 15px;
 max-height: 10%;
 background-color: rgb(53, 53, 53);
 border-bottom: 5px solid rgb(102, 31, 143);
 box-shadow: 0 0 30px rgb(102, 31, 143);
 color: white;
}

.label {
    font-size: 2em;
    font-weight: bold;
    text-align: center;
}

btn-container {
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

.btn {
    display: absolute;
    align-self: center;
    justify-self: center;
}

</style>