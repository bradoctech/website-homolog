<template>
  <section class="pt-0 border-top">
    <div class="container">
      <h3 class="mt-4 mb-2">
        Tecnologias utilizadas
      </h3>
      <Client />
    </div>
  </section>
</template>
<script>
import Client from '../../components/AboutUs/Client'
export default {
  name: 'Logos',
  components: {
    Client
  }
}
</script>
