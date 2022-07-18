<template>
  <div>
    <section class="pt-5 pb-0 pb-md-3">
      <div class="container">
        <div class="row iq-how-it-works">
          <div class="iq-mb-30 fadeInUp col-sm-12 col-lg-6 col-md-6 wow align-items-center">
            <div class="title-box wow fadeInUp text-left mb-0">
              <span class="title-design mb-2">Quem Somos</span>
              <!-- <h2>Soluções inteligentes pro seu negócio</h2> -->
              <p>A AI Solutions é uma empresa especializada em desenvolvimento de sistemas e prestação de serviços que envolve a estruturação de textos e dados, com uso de Inteligência Artificial, Machine Learning, Projetos e Soluções.</p>
            </div>
            <div class="text-left">
              <h5 class="mt-3 mb-2">No nosso time temos</h5>
              <ul class="iq-list">
                <!-- <li> <i class="fa fa-check-square-o" /> <span>Empresa com Espírito Jovem</span> </li>
                <li> <i class="fa fa-check-square-o" /> <span>Inovação</span> </li>
                <li> <i class="fa fa-check-square-o" /> <span>Qualidade</span> </li>
                <li> <i class="fa fa-check-square-o" /> <span>Referencia em validação de dados</span> </li> -->
                <li> <i class="fa fa-check-square-o" /> <span>Especialistas em Convalidação de Dados;</span> </li>
                <li> <i class="fa fa-check-square-o" /> <span>Analistas Especializados em Folha de Pagamento;</span> </li>
                <li> <i class="fa fa-check-square-o" /> <span>Especialistas em Gestão Documental e Mapeamento de Processo relacionados a Vida Funcional e Histórico Funcional;</span> </li>
                <li> <i class="fa fa-check-square-o" /> <span>Especialistas em Análise de Sistema;</span> </li>
                <li> <i class="fa fa-check-square-o" /> <span>Especialistas em Desenvolvimento de Sistema e Inteligência Artificial;</span> </li>
                <li> <i class="fa fa-check-square-o" /> <span>Especialistas em Legislação Pública Funcional e Previdenciária.</span> </li>
              </ul>
            </div>
          </div>
          <div class="fadeInUp col-sm-12 col-lg-6 col-md-6 wow">
            <img alt="aboutus" class="single_image-img attachment-full" height="954" :src="require('../../assets/images/about-us/quem-somos-2.png')" width="1260">
          </div>
        </div>
      </div>
    </section>

    <!-- <section class="pt-0 py-0 pb-lg-4">
      <div class="container">
        <div class="row">
          <div v-for="(item, index) in list" :key="index" class="col-lg-4 col-sm-12">
            <div class="xamin-services  mb-0 wow fadeInUp text-left">
              <div class="services-detail">
                <h4 class="mb-1">
                  {{ item.title }}
                </h4>
                <p class="mb-0">
                  {{ item.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->
  </div>
</template>
<script>
export default {
  name: 'AboutUs',
  data () {
    return {
      list: [
        {
          title: 'Missão',
          description: 'Texto da missao da AiSolutions'
        },
        {
          title: 'Visão',
          description: 'Texto sobre a visao da AiSolutions'
        },
        {
          title: 'Valores',
          description: 'Texto sobre os valores da AiSolutions'
        }
      ]
    }
  }
}
</script>
