import { createApp } from 'vue';
import { createPinia } from 'pinia';
// import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

import './style.css';

import App from './App.vue';
import router from '@/router/router.js';

const app = createApp(App);
const pinia = createPinia();

/** piniaPluginPersistedstate will sync store contents with localStorage;
 * persist store contents after page refreshes. Remove if undesired.*/ 
// pinia.use(piniaPluginPersistedstate);

app.use(pinia);
app.use(router);

app.mount('#app');
