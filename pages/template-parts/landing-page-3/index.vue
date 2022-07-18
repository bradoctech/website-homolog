<template>
  <div>
    <Home />
    <div class="main-content">
      <WhyChooseUs />
      <AboutUs />
      <Services />
      <Counter />
      <GetStarted />
      <Process />
      <Testimonials />
      <Blog />
      <Client />
      <Footer footer-class="footer-one iq-bg-dark iq-bg-over" />
    </div>
  </div>
</template>

<script>
import Home from '../../../components/TemplateParts/LandingPage3/Home'
import WhyChooseUs from '../../../components/TemplateParts/LandingPage3/WhyChooseUs'
import AboutUs from '../../../components/TemplateParts/LandingPage3/AboutUs'
import Services from '../../../components/TemplateParts/LandingPage3/Services'
import Counter from '../../../components/TemplateParts/LandingPage3/Counter'
import GetStarted from '../../../components/TemplateParts/LandingPage3/GetStarted'
import Process from '../../../components/TemplateParts/LandingPage3/Process'
import Testimonials from '../../../components/TemplateParts/LandingPage3/Testimonials'
import Blog from '../../../components/TemplateParts/LandingPage3/Blog'
import Client from '../../../components/TemplateParts/LandingPage3/Client'
import Footer from '../../../components/TemplateParts/FooterStyle2/Footer'
import { themes } from '../../../assets/app/app'
export default {
 layout: 'LandingPage3',
  components: {
    Home,
    WhyChooseUs,
    AboutUs,
    Services,
    Counter,
    GetStarted,
    Process,
    Testimonials,
    Blog,
    Client,
    Footer
  },
  mounted () {
    document.cookie = 'layout=LandingPage3'
    setTimeout(function () {
      themes.index()
      themes.initRevSlider3()
    }, 1000)
  }
}
</script>
