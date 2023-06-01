<script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';

  const products = ref([]);

  onMounted(async () => {
    try {
      const response = await axios.get('https://madu-experience.com.br/wp-json/wc/v3/products', {
        headers: {
          Authorization: 'Basic ' + btoa('ck_550481d42a7c5d769b297f919d228b4e2bf76085:cs_d8d4c662b76531911a34b3918d2fcc759c71c234')
        }
      });

      products.value = response.data;

      // Atualiza as URLs das imagens destacadas
      for (const product of products.value) {
        if (product.images && product.images.length > 0) {
          const imageId = product.images[0].id;
          product.imageSrc = await buscarImagemDestacada(imageId);
        }
      }
    } catch (error) {
      console.error(error);
    }
  });

  async function buscarImagemDestacada(idMedia) {
    try {
      const response = await axios.get(`https://madu-experience.com.br/wp-json/wp/v2/media/${idMedia}`);

      if (response.status === 200) {
        const media = response.data['media_details']['sizes']['thumbnail']['source_url'];
        return media;
      } else {
        throw new Error('Falha ao carregar imagem destacada');
      }
    } catch (error) {
      console.error(error);
    }
  }
</script>

<template>
    <div v-for="item in products" :key="item.id" class="col-md-3 mb-3">
        <div class="border border-danger p-3 h-100">
            <div class="col-md-12">
                <img v-if="item.imageSrc" :src="item.imageSrc" :alt="item.name" class="w-100 p-5" />
            </div>
            <div class="col-md-12">
                <a :href="'http://madu-experience.com.br/produto/' + item.slug" class="text-decoration-none">{{ item.name }}</a>
            </div>
            <div class="col-md-12">SKU - {{ item.sku }}</div>
            <div class="col-md-12">Preço - {{ item.price }}</div>
        </div>
    </div>
</template>