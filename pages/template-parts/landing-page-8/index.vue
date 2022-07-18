<template>
  <div>
    <Home />
    <div class="main-content">
      <Client />
      <Usage />
      <Features />
      <Services />
      <HowWeWork />
      <Priceing />
      <Customer />
      <Blog />
    </div>
    <Footer />
  </div>
</template>

<script>
import Home from '../../../components/TemplateParts/LandingPage8/Home'
import Client from '../../../components/TemplateParts/LandingPage8/Client'
import Usage from '../../../components/TemplateParts/LandingPage8/Usage'
import Features from '../../../components/TemplateParts/LandingPage8/Features'
import Services from '../../../components/TemplateParts/LandingPage8/Services'
import HowWeWork from '../../../components/TemplateParts/LandingPage8/HowWeWork'
import Priceing from '../../../components/TemplateParts/LandingPage8/Priceing'
import Customer from '../../../components/TemplateParts/LandingPage8/Customer'
import Blog from '../../../components/TemplateParts/LandingPage8/Blog'
import Footer from '../../../components/TemplateParts/FooterStyle1/Footer'
import { themes } from '../../../assets/app/app'
export default {
  layout: 'LandingPage8',
  components: {
    Home,
    Usage,
    Features,
    Services,
    HowWeWork,
    Priceing,
    Customer,
    Blog,
    Client,
    Footer
  },
  mounted () {
    document.cookie = 'layout=LandingPage8'
    setTimeout(function () {
      themes.index()
      themes.initRevSlider8()
    }, 1000)
  }
}
</script>
