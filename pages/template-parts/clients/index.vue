<template>
  <div class="main-content">
    <BreadCrum />
    <Client />
    <Footer />
  </div>
</template>

<script>
import BreadCrum from '../../../components/TemplateParts/Clients/BreadCrum'
import Client from '../../../components/TemplateParts/Clients/Client'
import Footer from '../../../components/TemplateParts/Clients/Footer'
import { themes } from '../../../assets/app/app'
export default {
  layout: 'Pages',
  components: {
    BreadCrum,
    Client,
    Footer
  },
  mounted () {
    setTimeout(function () {
      themes.index()
    }, 1000)
  }
}
</script>
