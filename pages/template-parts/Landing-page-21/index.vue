<template>
  <div>
    <Home />
    <div class="main-content">
      <Blog />
    </div>
    <Footer />
  </div>
</template>

<script>
import Home from '../../../components/TemplateParts/LandingPage21/Home'
import Blog from '../../../components/TemplateParts/LandingPage21/Blog'
import Footer from '../../../components/TemplateParts/LandingPage21/Footer'
import { themes } from '../../../assets/app/app'
export default {
  layout: 'LandingPage21',
  components: {
    Home,
    Blog,
    Footer
  },
  mounted () {
    document.cookie = 'layout=LandingPage21'
    setTimeout(function () {
      themes.index()
      themes.initRevSlider21()
    }, 1000)
  }
}
</script>
