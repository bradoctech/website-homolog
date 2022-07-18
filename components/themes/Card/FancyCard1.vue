<template>
  <div :class="cardClass">
    <div class="col-md-12">
      <div class="title-box wow fadeInUp text-center align-items-center">
        <span class="title-design">{{ cardTitle }}</span>
        <h2>{{ cardSubtitle }}</h2>
      </div>
    </div>
    <div class="row w-100 mx-auto">
      <div v-for="(item,index) in cardContent" :key="index" class="col-12 col-md-6 col-lg-4 wow fadeInUp d-flex align-items-stretch mb-3">
        <div class="fancy_service wow fadeInUp text-center">
          <div class="hover-effect" />
          <div class="fancy-info">
            <img :src="item.src" alt="fancybox">
            <h4 class="mt-4 mb-3 title">
              {{ item.title }}
            </h4>
            <p class="">
              {{ item.subtitle }}
            </p>
            <a v-if="item.link" class="link-btn" :href="baseLink + item.link"><span class="btn-effect"> Leia Mais<i class="ion-ios-arrow-right" /></span></a>
            <a v-else class="link-btn" href="javascript:void(0)"><span class="btn-effect"> Leia Mais<i class="ion-ios-arrow-right" /></span></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FancyCard1',
  props: [ 'cardTitle', 'cardSubtitle', 'cardClass', 'cardContent'],
  computed: {
    baseLink: function () {
      return process.env.BASE_URL;
    }
  }
}
</script>
