<template>
  <section class="pt-3 pt-md-0 pt-lg-4 pb-4">
    <div class="container">
      <div class="row align-items-center ">
        <div class="offset-sm-2 col-sm-6 col-md-8 offset-lg-0 col-lg-8">
          <h2 class="text-left mt-3 mb-4">
            Envie seus dados e<br> se cadastre para a vaga.
          </h2>
          <div class="response-output" />
          <form action="#" method="post">
            <div class="contact-form job-form">
              <div> <input type="text" name="your-name" class="form-control text " placeholder="Seu Nome"> </div>
              <div> <input type="text" name="your-email" class="form-control text " placeholder="Seu E-mail"> </div>
              <div> <input type="text" name="your-phone" class="form-control text " placeholder="Seu Telefone"> </div>
              <div>
                <select class="form-control form-select" :value="selected">
                  <option value="0" selected>Selecione a Vaga</option>
                  <option value="1">Vaga 1</option>
                  <option value="2">Vaga 2</option>
                  <option value="3">Vaga 3</option>
                </select>
              </div>
              <div>
                <div class="input-group">
                  <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" accept="image/png, image/jpeg, application/pdf">
                </div>
              </div>
              <!-- <div> <input type="text" name="your-subject" class="form-control text " placeholder="Assunto"> </div> -->
              <div> <textarea name="your-message" cols="40" rows="10" class="form-control textarea " placeholder="Sua Mensagem" /> </div>
              <div class="text-center">
                <button
                  id="submit-4"
                  @click="goTo('trabalhe-conosco')"
                  name="voltar"
                  type="button"
                  class="white-btn button bg-grey d-inline-block w-25"
                >
                  Voltar
                </button>
                <button
                  id="submit-4"
                  click="/aplicar-vaga"
                  name="submit"
                  type="submit"
                  value="Send"
                  class="button d-inline-block w-50"
                >
                  Enviar Mensagem
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'JobForm',
  data () {
    return {
      selected: 0
    }
  },
  mounted () {
    this.getJobType();
  },
  methods: {
    getJobType() {
      let param = this.$route.query.vaga;
      this.selected = param;
    },
    goTo(link) {
      let baseLink = process.env.BASE_URL + link
      this.$router.push(baseLink);
    }
  }
}
</script>
<style>
/* XXS */
@media (max-width: 359.98px) {
    .job-form button {
      width: auto !important;
      padding: 10px !important;
      font-size: 14px;
    }
}
</style>
