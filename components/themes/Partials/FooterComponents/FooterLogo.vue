<template>
  <div>
    <p class="footer-logo">
      <img :src="sectionImage" width="160" alt="Logo Ai Solutions">
    </p>
    <p class="footer-logo">
      {{ sectionText }}
    </p>
    <ul class="info-share d-inline list-inline">
      <li class="list-inline-item" />
    </ul>
  </div>
</template>
<script>
export default {
  name: 'FooterLogo',
  // eslint-disable-next-line vue/require-prop-types
  props: ['sectionImage', 'sectionText']
}
</script>
<style scoped>
  /* Small devices (landscape phones, less than 768px) */
  @media (max-width: 767.98px) {
    .footer-logo {
      text-align: center;
    }
  }
</style>
