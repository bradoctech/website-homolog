<template>
  <div>
    <BreadCrum />
    <div class="main-content">
      <Sicap />
      <Gdprev />
      <Recad />
      <Diarios />
      <EPublic />
      <!-- <Prodigy /> -->
    </div>
    <Footer footer-class="footer-one iq-bg-dark iq-over-dark-90" />
  </div>
</template>
<script>
import BreadCrum from '../../components/Solutions/BreadCrum'
import Sicap from '../../components/Solutions/Sicap'
import Gdprev from '../../components/Solutions/Gdprev'
import Recad from '../../components/Solutions/Recad'
import Diarios from '../../components/Solutions/Diarios'
import EPublic from '../../components/Solutions/EPublic'
// import Prodigy from '../../components/Solutions/Prodigy'
import Footer from '../../components/Footer/Footer'
import { themes } from '../../assets/app/app'
export default {
  layout: 'Principal',
  components: {
    BreadCrum,
    Sicap,
    Gdprev,
    Recad,
    Diarios,
    EPublic,
    // Prodigy,
    Footer
  },
  mounted () {
    setTimeout(function () {
      themes.index()
    }, 1000)
  }
}
</script>
