<template>
  <div>
    <Home />
    <div class="main-content">
      <Awardscroll />
      <Stories />
      <About />
      <Services />
      <Awards />
      <Testimonials />
    </div>
    <Footer />
  </div>
</template>

<script>
import Home from '../../../components/TemplateParts/LandingPage17/Home'
import Awardscroll from '../../../components/TemplateParts/LandingPage17/Awardscroll'
import Stories from '../../../components/TemplateParts/LandingPage17/Stories'
import About from '../../../components/TemplateParts/LandingPage17/About'
import Services from '../../../components/TemplateParts/LandingPage17/Services'
import Awards from '../../../components/TemplateParts/LandingPage17/Awards'
import Testimonials from '../../../components/TemplateParts/LandingPage17/Testimonials'
import Footer from '../../../components/TemplateParts/LandingPage17/Footer'
import { themes } from '../../../assets/app/app'
export default {
  layout: 'LandingPage17',
  components: {
    Home,
    Awardscroll,
    Stories,
    About,
    Services,
    Awards,
    Testimonials,
    Footer
  },
  mounted () {
    document.cookie = 'layout=LandingPage17'
    setTimeout(function () {
      themes.index()
      themes.initRevSlider17()
    }, 1000)
  }
}
</script>
