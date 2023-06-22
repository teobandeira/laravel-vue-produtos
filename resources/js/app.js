import './bootstrap';
import { createApp } from 'vue';

import App from './components/App.vue';
import Produtos from './components/Produtos.vue';
import Slide from './components/SlideHome.vue';

const app = createApp();

// Registrar componentes que serao utilizados 
app.component('App', App);
app.component('Produtos', Produtos);
app.component('Slide', Slide);

app.mount("#app-vue");