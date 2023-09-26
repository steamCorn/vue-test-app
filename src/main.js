import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import { createPinia } from 'pinia';
import { homeRouters } from './router/homeRouters.js'

const router = createRouter({
    history: createWebHistory,
    routes: homeRouters,
})

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')
