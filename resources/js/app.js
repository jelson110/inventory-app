/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */


// Components
import App from './App.vue';



// Composables
import { createApp } from 'vue';

// Plugins
import vuetify from '@/plugin/vuetify.js';
import router from './router/index';
const app = createApp(App)

app.use(vuetify)
app.use(router)

app.mount('#app')
