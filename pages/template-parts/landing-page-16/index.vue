<template>
  <div>
    <Home />
    <div class="main-content">
      <Video />
      <Specialize />
      <Spcontent />
      <About />
      <Category />
      <Team />
      <Client />
      <Testimonials />
      <Blog />
    </div>
    <Footer />
  </div>
</template>

<script>
import Home from '../../../components/TemplateParts/LandingPage16/Home'
import Video from '../../../components/TemplateParts/LandingPage16/Video'
import Specialize from '../../../components/TemplateParts/LandingPage16/Specialize'
import Spcontent from '../../../components/TemplateParts/LandingPage16/Spcontent'
import About from '../../../components/TemplateParts/LandingPage16/About'
import Category from '../../../components/TemplateParts/LandingPage16/Category'
import Team from '../../../components/TemplateParts/LandingPage16/Team'
import Client from '../../../components/TemplateParts/LandingPage16/Client'
import Testimonials from '../../../components/TemplateParts/LandingPage16/Testimonials'
import Blog from '../../../components/TemplateParts/LandingPage16/Blog'
import Footer from '../../../components/TemplateParts/LandingPage16/Footer'
import { themes } from '../../../assets/app/app'
export default {
  layout: 'LandingPage16',
  components: {
    Home,
    Video,
    Specialize,
    Spcontent,
    About,
    Category,
    Team,
    Client,
    Testimonials,
    Blog,
    Footer
  },
  mounted () {
    document.cookie = 'layout=LandingPage16'
    setTimeout(function () {
      themes.index()
      themes.initRevSlider16()
    }, 1000)
  }
}
</script>
