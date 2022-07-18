<template>
  <section class="pt-0 pt-lg-3">
    <div class="container">
      <div class="row">
        <div class="d-block d-lg-none col-12 wow fadeInUp xamin-right-img xamin-right-img-home">
          <img :src="require('../../assets/images/solutions/sicap-solutions.png')" alt="about">
        </div>
        <div class="col-12 col-lg-6 wow fadeInUp align-items-center">
          <div class="title-box wow fadeInUp text-left">
            <h2>Sicap-Sistema de Análise de Informação.</h2>
            <p>Sistema de Análise de Informação e auditoria Pública</p>
          </div>
          <div class="text-left column-2 mb-5 ">
            <ul class="iq-list">
              <li><i class="ion ion-checkmark-round" /><span>Validação de documentos</span></li>
              <li><i class="ion ion-checkmark-round" /><span>Web scraping</span></li>
              <li><i class="ion ion-checkmark-round" /><span>Comparativo de contas</span></li>
              <li><i class="ion ion-checkmark-round" /><span>Autenticação via certificado digital</span></li>
              <li><i class="ion ion-checkmark-round" /><span>Relatório via Power BI</span></li>
              <li><i class="ion ion-checkmark-round" /><span>Auditor inteligente</span></li>
            </ul>
          </div>
          <div class="text-center text-md-left mt-5 ">
            <a class="button button-icon" :href="baseLink + 'solucoes'"> <span class="btn-effect">Veja Mais</span> </a>
          </div>
        </div>
        <div class="d-none d-lg-block col-lg-6 wow fadeInUp xamin-right-img xamin-right-img-home">
          <img :src="require('../../assets/images/solutions/sicap-home.png')" alt="about">
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6 wow fadeInUp xamin-left-img xamin-left-img-home">
          <img :src="require('../../assets/images/solutions/gdprev-home.png')" alt="about-2">
          <div class="scroll-effect top blue ">
            <div class="main-video">
              <div class="video-img" />
            </div>
          </div>
        </div>
        <div class="col-lg-6 wow fadeInUp align-items-center">
          <div class="title-box wow fadeInUp text-left">
            <h2>GDprev</h2>
            <p>Sistema de Gestão Moderno com Inteligence Artificial.</p>
            <br>
            <p>
              O Sistema de Gestão de Dados Previdenciários – GDPREV – é uma ferramenta desenvolvida para que o usuário consiga elaborar a Vida Funcional dos servidores públicos com mais facilidade e eficiência. Além disso, mantem um acervo de documentos referentes a pasta funcional de cada servidor do órgão, tanto ativos quanto inativos.
            </p>
          </div>
          <!-- <div class="text-left column-2 mb-5 ">
            <ul class="iq-list">
              <li><i class="ion ion-checkmark-round" /><span>Convalidação Documental</span></li>
              <li><i class="ion ion-checkmark-round" /><span>Digitalização de dados</span></li>
              <li><i class="ion ion-checkmark-round" /><span>Administração previdencial</span></li>
              <li><i class="ion ion-checkmark-round" /><span>Mapeamento de tipo documental</span></li>
              <li><i class="ion ion-checkmark-round" /><span>Mapeamento arquivistico</span></li>
              <li><i class="ion ion-checkmark-round" /><span>Gerenciamento de eventos funcionais</span></li>
            </ul>
          </div> -->
          <div class="text-center text-md-left mt-5 ">
            <a class="button button-icon" :href="baseLink + 'solucoes'"> <span class="btn-effect">Veja Mais</span> </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'GetTipsTricks',
  computed: {
    baseLink () {
      return process.env.BASE_URL
    }
  }
}
</script>
<style scoped>
  @media (max-width: 991.98px) {
    .xamin-right-img-home {
      text-align: center;
    }
    .xamin-right-img-home img {
      width: 90%;
      margin: -20px 0 35px;
    }
    .xamin-left-img-home {
      text-align: center;
    }
    .xamin-left-img-home img {
      width: 90%;
      margin: -20px 0 -140px;
    }
  }
  @media (max-width: 767.98px) {
    .xamin-right-img-home img {
      width: 100%;
    }
    .xamin-left-img-home img {
      width: 100%;
      margin: -20px 0 -60px;
    }
  }
  @media (max-width: 359.98px) {
    .xamin-right-img-home img {
      width: 100%;
      margin: -10px 0 25px;
    }
    .xamin-left-img-home img {
      width: 90%;
      margin: -10px 0 -40px;
    }
  }
</style>
