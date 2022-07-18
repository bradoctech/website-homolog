<template>
  <div>
    <Home />
    <div class="main-content">
      <Chart />
      <Whatwedo />
      <Whatcontent />
      <About />
      <Services />
      <Overview />
      <Bgimg />
      <Blog />
    </div>
    <Footer />
  </div>
</template>

<script>
import Home from '../../../components/TemplateParts/LandingPage18/Home'
import Chart from '../../../components/TemplateParts/LandingPage18/Chart'
import Whatwedo from '../../../components/TemplateParts/LandingPage18/Whatwedo'
import Whatcontent from '../../../components/TemplateParts/LandingPage18/Whatcontent'
import About from '../../../components/TemplateParts/LandingPage18/About'
import Services from '../../../components/TemplateParts/LandingPage18/Services'
import Overview from '../../../components/TemplateParts/LandingPage18/Overview'
import Bgimg from '../../../components/TemplateParts/LandingPage18/Bgimg'
import Blog from '../../../components/TemplateParts/LandingPage18/Blog'
import Footer from '../../../components/TemplateParts/LandingPage18/Footer'
import { themes } from '../../../assets/app/app'
export default {
  layout: 'LandingPage18',
  components: {
    Home,
    Chart,
    Whatwedo,
    Whatcontent,
    About,
    Services,
    Overview,
    Bgimg,
    Blog,
    Footer
  },
  mounted () {
    document.cookie = 'layout=LandingPage18'
    setTimeout(function () {
      themes.index()
      themes.initRevSlider18()
    }, 1000)
  }
}
</script>
