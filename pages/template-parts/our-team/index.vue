<template>
  <div class="main-content">
    <BreadCrum />
    <Team />
    <Footer />
  </div>
</template>

<script>
import BreadCrum from '../../../components/TemplateParts/OurTeam/BreadCrum'
import Team from '../../../components/TemplateParts/OurTeam/Team'
import Footer from '../../../components/TemplateParts/OurTeam/Footer'
import { themes } from '../../../assets/app/app'
export default {
  layout: 'Pages',
  components: {
    BreadCrum,
    Team,
    Footer
  },
  mounted () {
    setTimeout(function () {
      themes.index()
    }, 1000)
  }
}
</script>
