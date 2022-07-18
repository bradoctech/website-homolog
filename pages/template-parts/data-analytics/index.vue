<template>
  <div class="main-content">
    <BreadCrum />
    <Analytics />
    <Footer />
  </div>
</template>

<script>
import BreadCrum from "../../../components/TemplateParts/DataAnalytics/BreadCrum";
import Analytics from "../../../components/TemplateParts/DataAnalytics/Analytics";
import Footer from "../../../components/TemplateParts/DataAnalytics/Footer";
import { themes } from "../../../assets/app/app";
export default {
  layout: "Principal",
  components: {
    BreadCrum,
    Analytics,
    Footer,
  },
  mounted() {
    setTimeout(function () {
      themes.index();
    }, 1000);
  },
};
</script>
