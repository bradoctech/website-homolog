<template>
  <div>
    <BreadCrumb crumb-title="Quem Somos" :crumb-media="image" :crumb-links="links" />
    <div class="main-content">
      <AboutUs />
      <Logos />
      <Footer footer-class="footer-one iq-bg-dark iq-over-dark-90" />
    </div>
  </div>
</template>

<script>
import AboutUs from '../../components/AboutUs/AboutUs'
import Logos from '../../components/AboutUs/Logos'
import Footer from '../../components/Footer/Footer'
import { themes } from '../../assets/app/app'

export default {
  layout: 'Principal',
  components: {
    AboutUs,
    Logos,
    Footer
  },
  data () {
    return {
      image: require('../../assets/images/about-us/quem-somos-1.png'),
      links: [{
        title: 'Home',
        href: 'inicio'
      }]
    }
  },
  mounted () {
    // const layout = themes.getCookie('layout')
    // this.$nuxt.setLayout(layout)
    setTimeout(function () {
      themes.index()
    }, 1000)
  }
}
</script>
