<template>
  <div>
    <div class="main-content">
      <Home />
      <AboutUs />
      <Solutions />
    </div>
    <Footer footer-class="footer-one iq-bg-dark iq-over-dark-90" />
  </div>
</template>

<script>
import Home from '../../components/Home/Home'
import AboutUs from '../../components/Home/AboutUs'
import Solutions from '../../components/Home/Solutions'
import Footer from '../../components/Footer/Footer'
import { themes } from '../../assets/app/app'
export default {
  layout: 'Principal',
  components: {
    Home,
    AboutUs,
    Solutions,
    Footer
  },
  mounted () {
    setTimeout(function () {
      themes.index()
      themes.initRevSlider1()
    }, 500)
  }
}
</script>
