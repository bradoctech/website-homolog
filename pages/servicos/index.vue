<template>
  <div class="main-content">
    <BreadCrum />
    <Services />
    <Footer footer-class="footer-one iq-bg-dark iq-over-dark-90" />
  </div>
</template>

<script>
import BreadCrum from '../../components/Services/BreadCrum'
import Services from '../../components/Services/Services'
import Footer from '../../components/Footer/Footer'
import { themes } from '../../assets/app/app'
export default {
  layout: 'Principal',
  components: {
    BreadCrum,
    Services,
    Footer
  },
  mounted () {
    setTimeout(function () {
      themes.index()
    }, 1000)
  }
}
</script>
