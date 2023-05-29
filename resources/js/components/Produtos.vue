<script setup>
    import { ref, onMounted } from 'vue';
    import axios from 'axios';
    const products = ref([]);

    onMounted(() => {
    axios.get('https://madu-experience.com.br/wp-json/wc/v3/products', {
        headers: {
        Authorization: 'Basic ' + btoa('ck_550481d42a7c5d769b297f919d228b4e2bf76085:cs_d8d4c662b76531911a34b3918d2fcc759c71c234')
        }
    })
    .then(response => {
        products.value = response.data;
    })
    .catch(error => {
        console.error(error);
    });
});
</script>

<template>
    <div v-for="item in products" :key="item.id" class="col-md-4">
        <img v-if="item.featured_image" :src="item.featured_image.src" :alt="item.name">
        <a :href="'http://127.0.0.1:8000/produto/' + item.slug" class="text-decoration-none">{{ item.name }}</a>
    </div>
</template>