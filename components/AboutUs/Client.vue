<template>
  <div class="row mt-0">
    <div class="col-md-12 wow fadeInUp">
      <div
        class="owl-carousel mt-4 client-logo owl-loaded owl-drag"
        data-dots="false"
        data-nav="false"
        data-items="5"
        data-items-laptop="4"
        data-items-tab="3"
        data-items-mobile="2"
        data-items-mobile-sm="1"
        data-autoplay="true"
        data-loop="true"
        data-margin="30"
      >
        <div v-for="(item, index) in list" :key="index" class="item">
          <div class="clients-box hover-effct">
            <img
              class="img-fluid client-img"
              :src="item.image"
              alt="client-image"
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Client',
  data () {
    return {
      list: [
        {
          image: require('../../assets/images/logos/laravel.png')
        },
        {
          image: require('../../assets/images/logos/php.png')
        },
        {
          image: require('../../assets/images/logos/python.png')
        },
        {
          image: require('../../assets/images/logos/postgres.png')
        },
        {
          image: require('../../assets/images/logos/vue.png')
        },
        {
          image: require('../../assets/images/logos/elastic.png')
        },
        {
          image: require('../../assets/images/logos/docker.png')
        },
        {
          image: require('../../assets/images/logos/nodejs.png')
        },
        {
          image: require('../../assets/images/logos/power-bi.png')
        }
      ]
    }
  }
}
</script>
