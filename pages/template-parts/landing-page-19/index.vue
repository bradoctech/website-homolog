<template>
  <div>
    <Home />
    <div class="main-content">
      <Select />
      <Client />
      <Feature />
      <Type />
      <Counter />
      <Testimonial />
      <Bluebg />
    </div>
    <Footer />
  </div>
</template>

<script>
import Home from '../../../components/TemplateParts/LandingPage19/Home'
import Select from '../../../components/TemplateParts/LandingPage19/Select'
import Client from '../../../components/TemplateParts/LandingPage19/Client'
import Feature from '../../../components/TemplateParts/LandingPage19/Feature'
import Type from '../../../components/TemplateParts/LandingPage19/Type'
import Counter from '../../../components/TemplateParts/LandingPage19/Counter'
import Testimonial from '../../../components/TemplateParts/LandingPage19/Testimonial'
import Bluebg from '../../../components/TemplateParts/LandingPage19/Bluebg'
import Footer from '../../../components/TemplateParts/LandingPage19/Footer'
import { themes } from '../../../assets/app/app'
export default {
  layout: 'LandingPage19',
  components: {
    Home,
    Select,
    Client,
    Feature,
    Type,
    Counter,
    Testimonial,
    Bluebg,
    Footer
  },
  mounted () {
    document.cookie = 'layout=LandingPage19'
    setTimeout(function () {
      themes.index()
      themes.initRevSlider19()
    }, 1000)
  }
}
</script>
