<template>
  <div class="main-content">
    <Home />
    <About />
    <HowWeWorks />
    <HowItWorks />
    <Services />
    <Customer />
    <Project />
    <Client />
    <Awards />
    <Blog />
    <Footer />
  </div>
</template>

<script>
import Home from '../../../components/TemplateParts/LandingPage1/Home'
import About from '../../../components/TemplateParts/LandingPage1/About'
import HowWeWorks from '../../../components/TemplateParts/LandingPage1/HowWeWorks'
import HowItWorks from '../../../components/TemplateParts/LandingPage1/HowItWorks'
import Services from '../../../components/TemplateParts/LandingPage1/Services'
import Customer from '../../../components/TemplateParts/LandingPage1/Customer'
import Project from '../../../components/TemplateParts/LandingPage1/Project'
import Client from '../../../components/TemplateParts/LandingPage1/Client'
import Awards from '../../../components/TemplateParts/LandingPage1/Awards'
import Blog from '../../../components/TemplateParts/LandingPage1/Blog'
import Footer from '../../../components/TemplateParts/LandingPage1/Footer'
import { themes } from '../../../assets/app/app'
export default {
  layout: 'LandingPage1',
  components: {
    Home,
    About,
    HowWeWorks,
    HowItWorks,
    Services,
    Customer,
    Project,
    Client,
    Awards,
    Blog,
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
