import './bootstrap';
import { createApp } from 'vue';

import App from './components/App.vue';
import Produtos from './components/Produtos.vue';

const app = createApp();

// Registrar componentes que serao utilizados 
app.component('app', App);
app.component('produtos', Produtos);

app.mount("#app-vue");