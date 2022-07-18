<template>
  <section class="pt-3 pt-lg-5 pb-0">
    <div class="iq-get-data-left d-block d-lg-none">
      <img
        :src="require('../../assets/images/solutions/sicap-solutions.png')"
        width="766"
        height="525"
      >
    </div>
    <div class="container">
      <div class="row">
        <div class="d-none d-lg-block col-lg-6">
          <div class="iq-get-data-left">
            <img
              :src="require('../../assets/images/solutions/sicap-solutions.png')"
              width="766"
              height="525"
            >
          </div>
        </div>
        <div class="d-none d-md-block d-lg-none col-md-2" />
        <div class="col-md-10 col-lg-6">
          <div class="title-box wow fadeInUp text-left">
            <span class="title-design" />
            <h2>Sistema de Análise de Informação.</h2>
            <p>
              Sistema de Análise de Informação e auditoria Pública.
            </p>
          </div>
          <div class="fancybox-visualization-service wow fadeInUp text-left">
            <div class="icon-bg">
              <i aria-hidden="true" class="fa fa-align-left" />
            </div>
            <div class="service-detail align-self-center">
              <h5 class="mb-2">
                Robôs inteligentes pra melhor resultado
              </h5>
              <p>
                O sistema faz o trabalho de web scrapping coletando dados para ideais para a análise do seu projeto
              </p>
            </div>
          </div>
          <div class="fancybox-visualization-service wow fadeInUp text-left">
            <div class="icon-bg">
              <i aria-hidden="true" class="fa fa-align-left" />
            </div>
            <div class="service-detail align-self-center">
              <h5 class="mb-2">
                Focado em diminuição de gastos
              </h5>
              <p>
                A ferramenta disponibiliza dashboards em que pode se ver o gasto gradual do seu projeto, facilitando indentificação de possiveis falhas ou furos em orçamentos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Sicap'
}
</script>
