<template>
  <div>
    <Home />
    <div class="main-content">
      <Counter />
      <Analytic />
      <Services />
      <Visual />
      <GetTipsTricks />
      <DataDazzle />
      <Brands />
      <Blog />
      <RequestDemo />
    </div>
    <Footer footer-class="footer-one iq-bg-dark iq-over-dark-90" />
  </div>
</template>
<script>
import Home from '../../../components/TemplateParts/LandingPage10/Home'
import Counter from '../../../components/TemplateParts/LandingPage10/Counter'
import Analytic from '../../../components/TemplateParts/LandingPage10/Analytic'
import Services from '../../../components/TemplateParts/LandingPage10/Services'
import Visual from '../../../components/TemplateParts/LandingPage10/Visual'
import GetTipsTricks from '../../../components/TemplateParts/LandingPage10/GetTipsTricks'
import DataDazzle from '../../../components/TemplateParts/LandingPage10/DataDazzle'
import Brands from '../../../components/TemplateParts/LandingPage10/Brands'
import Blog from '../../../components/TemplateParts/LandingPage10/Blog'
import RequestDemo from '../../../components/TemplateParts/LandingPage10/RequestDemo'
import Footer from '../../../components/TemplateParts/FooterStyle2/Footer'
import { themes } from '../../../assets/app/app'
export default {
  layout: 'LandingPage10',
  components: {
    Home,
    Counter,
    Analytic,
    Services,
    Visual,
    GetTipsTricks,
    DataDazzle,
    Brands,
    Blog,
    RequestDemo,
    Footer
  },
  mounted () {
    document.cookie = 'layout=LandingPage10'
    setTimeout(function () {
      themes.index()
      themes.initRevSlider10()
    }, 1000)
  }
}
</script>
