<template>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li v-for="(slide, index) in slides" :key="index" :data-target="'#carouselExampleIndicators'" :data-slide-to="index" :class="{ active: index === activeSlideIndex }"></li>
      </ol>
      <div class="carousel-inner">
        <div v-for="(slide, index) in slides" :key="index" :class="{ 'carousel-item': true, active: index === activeSlideIndex }">
          <img class="d-block w-100" :src="slide.image" :alt="slide.alt">
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
      </a>
    </div>
</template>
  
<script>
  export default {
    data() {
      return {
        slides: [
          {
            image: 'https://madu-experience.com.br/wp-content/uploads/2023/06/MicrosoftTeams-image-10.jpg',
            alt: 'First slide'
          },
          {
            image: 'https://madu-experience.com.br/wp-content/uploads/2023/06/MicrosoftTeams-image-10.jpg',
            alt: 'Second slide'
          },
          {
            image: 'https://madu-experience.com.br/wp-content/uploads/2023/06/MicrosoftTeams-image-10.jpg',
            alt: 'Third slide'
          }
        ],
        activeSlideIndex: 0
      };
      
    }
  };
</script> 