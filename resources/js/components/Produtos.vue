<script setup>
import {ref} from 'vue';
const name = ref('')
</script>

<template>
    <h2>Produtos from Vue</h2>
    {{ name }}
    <input type="text" v-model="name">
</template>