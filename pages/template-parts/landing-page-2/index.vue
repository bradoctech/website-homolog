<template>
  <div>
    <Home />
    <div class="main-content">
      <Services />
      <About1 />
      <About2 />
      <Counter />
      <Video />
      <Customer />
      <Client />
      <Blog />
      <Partner />
      <Footer />
    </div>
  </div>
</template>

<script>
import Home from '../../../components/TemplateParts/LandingPage2/Home'
import Services from '../../../components/TemplateParts/LandingPage2/Services'
import About1 from '../../../components/TemplateParts/LandingPage2/About1'
import About2 from '../../../components/TemplateParts/LandingPage2/About2'
import Counter from '../../../components/TemplateParts/LandingPage2/Counter'
import Video from '../../../components/TemplateParts/LandingPage2/Video'
import Customer from '../../../components/TemplateParts/LandingPage2/Customer'
import Client from '../../../components/TemplateParts/LandingPage2/Client'
import Blog from '../../../components/TemplateParts/LandingPage2/Blog'
import Partner from '../../../components/TemplateParts/LandingPage2/Partner'
import Footer from '../../../components/TemplateParts/LandingPage2/Footer'
import { themes } from '../../../assets/app/app'
export default {
  layout: 'LandingPage2',
  components: {
    Home,
    Services,
    About1,
    About2,
    Counter,
    Video,
    Customer,
    Client,
    Blog,
    Partner,
    Footer
  },
  mounted () {
    document.cookie = 'layout=LandingPage2'
    setTimeout(function () {
      themes.index()
      themes.initRevSlider2()
    }, 1000)
  }
}
</script>
