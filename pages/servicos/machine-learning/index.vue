<template>
  <div class="main-content">
    <BreadCrum />
    <Analytics />
    <Footer footer-class="footer-one iq-bg-dark iq-over-dark-90" />
  </div>
</template>

<script>
import BreadCrum from '../../../components/Services/MachineLearning/BreadCrum'
import Analytics from '../../../components/Services/MachineLearning/Analytics'
import Footer from '../../../components/Footer/Footer'
import { themes } from '../../../assets/app/app'
export default {
  layout: 'Principal',
  components: {
    BreadCrum,
    Analytics,
    Footer
  },
  mounted () {
    setTimeout(function () {
      themes.index()
    }, 1000)
  }
}
</script>
