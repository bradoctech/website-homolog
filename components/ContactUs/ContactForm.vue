<template>
  <section class="pt-2 pt-md-2 pt-lg-4 pb-0 pb-md-4 pb-lg-5">
    <div class="container">
      <div class="row align-items-center ">
        <div class="col-sm-6">
          <h2 class="text-left mt-3 mb-4">
            Vamos falar sobre o seu<br> negócio.
          </h2>
          <div class="response-output" />
          <form action="#" method="post">
            <div class="contact-form">
              <div> <input type="text" name="your-name" class="form-control text " placeholder="Seu Nome"> </div>
              <div> <input type="text" name="your-email" class="form-control text " placeholder="Seu E-mail"> </div>
              <div> <input type="text" name="your-subject" class="form-control text " placeholder="Assunto"> </div>
              <div> <textarea name="your-message" cols="40" rows="10" class="form-control textarea " placeholder="Sua Mensagem" /> </div>
              <div>
                <button
                  id="submit-4"
                  click="/contate-nos"
                  name="submit"
                  type="submit"
                  value="Send"
                  class="button d-block w-100"
                >
                  Enviar Mensagem
                </button>
              </div>
            </div>
          </form>
        </div>
        <div class="mt-5 col-sm-6 offset-lg-1 col-lg-5 offset-md-1 col-md-5">
          <div class="wrapper">
            <div class="contact-box d-flex">
              <i aria-hidden="true" class="ion ion-social-whatsapp" />
              <div class="service-detail">
                <h4 class="mb-2">
                  Telefone
                </h4>
                <ul class="list-inline mb-0">
                  <a href="https://wa.me/5565999422548">
                    <li>
                      (65) 99942-2548
                    </li>
                  </a>
                </ul>
              </div>
            </div>
            <div class="contact-box d-flex">
              <i aria-hidden="true" class="fas fa-envelope" />
              <div class="service-detail">
                <h4 class="mb-2">
                  E-mail
                </h4>
                <ul class="list-inline mb-0">
                  <li><a href="mailto:contato@aisolutions.tec.br" target="_blank"> contato@aisolutions.tec.br</a></li>
                </ul>
              </div>
            </div>
            <div class="contact-box d-flex">
              <i aria-hidden="true" class="ion ion-android-share-alt" />
              <div class="service-detail">
                <h4 class="mb-2">
                  Redes sociais
                </h4>
                <ul />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'ContactForm'
}
</script>
