<template>
  <div class="main-content">
    <BreadCrum />
    <ContactForm />
    <Footer footer-class="footer-one iq-bg-dark iq-over-dark-90" />
  </div>
</template>

<script>
import BreadCrum from '../../components/ContactUs/BreadCrum'
import ContactForm from '../../components/ContactUs/ContactForm'
import Footer from '../../components/Footer/Footer'
import { themes } from '../../assets/app/app'
export default {
  layout: 'Principal',
  components: {
    BreadCrum,
    ContactForm,
    Footer
  },
  mounted () {
    setTimeout(function () {
      themes.index()
    }, 1000)
  }
}
</script>
