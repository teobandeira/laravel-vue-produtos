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
    <div>
        <ul>
            <li v-for="item in products" :key="item.id">{{ item.name }}</li>
        </ul>
    </div>
</template>
