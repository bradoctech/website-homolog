<template>
  <div class="main-content">
    <BreadCrum />
    <Accordion />
    <Footer />
  </div>
</template>

<script>
import BreadCrum from '../../../components/TemplateParts/CareersTemplate/BreadCrum'
import Accordion from '../../../components/TemplateParts/CareersTemplate/Accordion'
import Footer from '../../../components/TemplateParts/CareersTemplate/Footer'
import { themes } from '../../../assets/app/app'
export default {
  layout: 'Pages',
  components: {
    BreadCrum,
    Accordion,
    Footer
  },
  mounted () {
    setTimeout(function () {
      themes.index()
    }, 1000)
  }
}
</script>
