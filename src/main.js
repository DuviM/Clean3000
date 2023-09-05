import './assets/main.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import{ VueSignaturePad } from 'vue-signature-pad';
import router from './router';



const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.mount('#app');
app.component('VueSignaturePad', VueSignaturePad);
app.use(pinia);