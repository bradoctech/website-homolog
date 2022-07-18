components/TemplateParts/FooterStyle<template>
  <div>
    <BreadCrumb crumb-title="About Us 2" :crumb-media="image" :crumb-links="links" />
    <div class="main-content" >
      <Video />
      <About />
      <Services />
      <Testimonials />
      <Client />
    </div>
    <Footer />
  </div>
</template>


<script>

import Video from '../../../components/TemplateParts/AboutUs-2/Video'
import About from '../../../components/TemplateParts/AboutUs-2/About'
import Services from '../../../components/TemplateParts/AboutUs-2/Services'
import Testimonials from '../../../components/TemplateParts/AboutUs-2/Testimonials'
import Client from '../../../components/TemplateParts/AboutUs-2/Client'
import Footer from '../../../components/TemplateParts/FooterStyle1/Footer'
import { themes } from '../../../assets/app/app'

export default {
  layout: 'AboutUs',
  components: {
    Video,
    About,
    Services,
    Testimonials,
    Client,
    Footer
  },
  data(){
    return{
      image: require('../../../assets/images/about-us/04.png'),
      links: [{
        title : 'Home' ,
        href : 'landing-page-1'
      }]
    }
  },
  mounted () {
    setTimeout(function () {
      themes.index()
    }, 1000)
  }
}
</script>
