import { createApp } from 'vue';
import App from './App.vue'
import router from './router' // Assuming you have a router.js file

const app = createApp(App);
app.use(router);
app.mount('#app');
