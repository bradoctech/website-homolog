<template>
  <div class="main-content">
    <BreadCrum />
    <Services />
    <Footer />
  </div>
</template>

<script>
import BreadCrum from "../../../components/TemplateParts/ServicesTemplate/BreadCrum";
import Services from "../../../components/TemplateParts/ServicesTemplate/Services";
import Footer from "../../../components/TemplateParts/ServicesTemplate/Footer";
import { themes } from "../../../assets/app/app";
export default {
  layout: "Services",
  components: {
    BreadCrum,
    Services,
    Footer,
  },
  mounted() {
    setTimeout(function () {
      themes.index();
    }, 1000);
  },
};
</script>
