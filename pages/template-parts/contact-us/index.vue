<template>
  <div class="main-content">
    <BreadCrum />
    <Address />
    <ContactForm />
    <Footer />
  </div>
</template>

<script>
import BreadCrum from '../../../components/TemplateParts/ContactUsOriginal/BreadCrum'
import Address from '../../../components/TemplateParts/ContactUsOriginal/Address'
import ContactForm from '../../../components/TemplateParts/ContactUsOriginal/ContactForm'
import Footer from '../../../components/TemplateParts/ContactUsOriginal/Footer'
import { themes } from '../../../assets/app/app'
export default {
  layout: 'Pages',
  components: {
    BreadCrum,
    Address,
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
