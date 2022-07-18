<template>
  <div class="text-left iq-breadcrumb-one iq-bg-over black">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-8 col-md-8 text-left align-self-center">
          <nav aria-label="breadcrumb" class="text-left">
            <h2 class="title">Machine Learning</h2>
            <ol class="breadcrumb main-bg">
              <li class="breadcrumb-item"><nuxt-link to="/inicio">Início</nuxt-link></li>
              <li class="breadcrumb-item"><nuxt-link to="/servicos">Serviços</nuxt-link></li>
              <li class="breadcrumb-item active">Machine Learning</li>
            </ol>
          </nav>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-12 text-right wow fadeInRight">
          <img
            alt="banner"
            class="img-fluid float-right"
            :src="require('../../../assets/images/services/machine-learning.png')"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "BreadCrum",
};
</script>
