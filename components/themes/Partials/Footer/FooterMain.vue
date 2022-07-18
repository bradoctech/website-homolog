<template>
  <footer id="contact" :class="footerClass">
    <div class="container">
      <slot name="footerContent"></slot>
      <div class="copyright-footer">
        <div class="pt-3 pb-3">
          <div class="row flex-row-reverse justify-content-between">
            <div class="col-lg-12 col-md-12 text-lg-center text-md-center text-center"> <span class="copyright">{{ getYear }} - <a href="/inicio">Ai Solutions</a> &reg; - Todos os Direitos Reservados.</span> </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'FooterMain',
  props: ['footerClass'],
  data: () => ({}),
  computed: {
    getYear: function () {
      return new Date().getFullYear();
    }
  }
}
</script>
