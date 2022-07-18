<template>
  <div>
    <Home />
    <div class="main-content">
      <Awards />
      <About />
      <Info />
      <Services />
      <Counter />
      <Partner />
      <Blog />
    </div>
    <Footer />
  </div>
</template>

<script>
import Home from '../../../components/TemplateParts/LandingPage14/Home'
import Awards from '../../../components/TemplateParts/LandingPage14/Awards'
import About from '../../../components/TemplateParts/LandingPage14/About'
import Info from '../../../components/TemplateParts/LandingPage14/Info'
import Services from '../../../components/TemplateParts/LandingPage14/Services'
import Counter from '../../../components/TemplateParts/LandingPage14/Counter'
import Partner from '../../../components/TemplateParts/LandingPage14/Partner'
import Blog from '../../../components/TemplateParts/LandingPage14/Blog'
import Footer from '../../../components/TemplateParts/LandingPage14/Footer'
import { themes } from '../../../assets/app/app'
export default {
  layout: 'LandingPage14',
  components: {
    Home,
    Awards,
    About,
    Info,
    Services,
    Counter,
    Partner,
    Blog,
    Footer
  },
  mounted () {
    document.cookie = 'layout=LandingPage14'
    setTimeout(function () {
      themes.index()
      themes.initRevSlider14()
    }, 1000)
  }
}
</script>
