<template>
  <div>
    <Home />
    <div class="main-content">
      <Client />
      <AboutUs />
      <Services />
      <Video />
      <GetStarted />
      <Testimonial />
      <Awards />
      <Blog />
    </div>
      <Footer footer-class="footer-one iq-bg-dark iq-over-image-bg" />
  </div>
</template>

<script>
import Home from '../../../components/TemplateParts/LandingPage4/Home'
import Client from '../../../components/TemplateParts/LandingPage4/Client'
import AboutUs from '../../../components/TemplateParts/LandingPage4/AboutUs'
import Services from '../../../components/TemplateParts/LandingPage4/Services'
import Video from '../../../components/TemplateParts/LandingPage4/Video'
import GetStarted from '../../../components/TemplateParts/LandingPage4/GetStarted'
import Testimonial from '../../../components/TemplateParts/LandingPage4/Testimonial'
import Awards from '../../../components/TemplateParts/LandingPage4/Awards'
import Blog from '../../../components/TemplateParts/LandingPage4/Blog'
import Footer from '../../../components/TemplateParts/FooterStyle2/Footer'
import { themes } from '../../../assets/app/app'
export default {
 layout: 'LandingPage4',
  components: {
    Home,
    Client,
    AboutUs,
    Services,
    Video,
    GetStarted,
    Testimonial,
    Awards,
    Blog,
    Footer
  },
  mounted () {
    document.cookie = 'layout=LandingPage4'
    setTimeout(function () {
      themes.index()
      themes.initRevSlider4()
    }, 1000)
  }
}
</script>
