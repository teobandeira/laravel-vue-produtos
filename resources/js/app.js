import './bootstrap';
import { createApp } from 'vue';
import App from './components/App.vue';
import Produtos from './components/Produtos.vue';
import Slide from './components/SlideHome.vue';

const app = createApp({
  components: {
    App,
    Produtos,
    Slide
  }
});

app.mount('#app-vue');