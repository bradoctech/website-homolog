<template>
  <div>
    <div class="main-content">
      <BreadCrum />
      <Accordion />
    </div>
    <Footer footer-class="footer-one iq-bg-dark iq-over-dark-90" />
  </div>
</template>

<script>
import BreadCrum from '../../components/Careers/BreadCrum'
import Accordion from '../../components/Careers/Accordion'
import Footer from '../../components/Footer/Footer'
import { themes } from '../../assets/app/app'
export default {
  layout: 'Principal',
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
