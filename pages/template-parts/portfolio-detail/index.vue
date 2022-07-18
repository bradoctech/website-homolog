<template>
  <div>
    <BreadCrumb crumb-title="Portfolio Details" :crumb-media="image" :crumb-links="links" />
    <div class="main-content">
      <Client />
      <Slider />
      <Projects />
    </div>
    <Footer />
  </div>
</template>
<script>
import Client from '../../../components/TemplateParts/PortfolioDetail/Client'
import Slider from '../../../components/TemplateParts/PortfolioDetail/Slider'
import Projects from '../../../components/TemplateParts/PortfolioDetail/Projects'
import Footer from '../../../components/TemplateParts/FooterStyle1/Footer'
import { themes } from '../../../assets/app/app'
export default {
  layout: 'OurCases',
  components: {
    Client,
    Slider,
    Projects,
    Footer
  },
  data () {
    return {
      links: [
        {
          title: 'Home',
          href: 'landing-page-1'
        },
        {
          title: 'Portfolio',
          href: 'portfolio-detail'
        }
      ],
      image: require('../../../assets/images/about-us/04.png')
    }
  },
  mounted () {
    setTimeout(function () {
      themes.index()
    }, 1000)
  }

}
</script>
