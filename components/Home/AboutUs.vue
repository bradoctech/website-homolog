<template>
  <section class="pb-2">
    <div class="container">
      <FancyCard1
        card-title="SERVIÇOS"
        card-subtitle="Tecnologias em que somos especialistas."
        card-class="row"
        :card-content="list"
      />
    </div>
  </section>
</template>
<script>
export default {
  name: 'AboutUs',
  data () {
    return {
      list: [
        {
          title: 'Business Intelligence BI',
          subtitle: 'O business intelligence é responsável por utilizar estrategicamente dados nas organizações a partir da coleta, tratamento e análise de todo e qualquer tipo de informação relevante, possibilitando as melhores decisões para os negócios.',
          src: require('../../assets/images/services/business-intelligence-110x110.png'),
          link: 'servicos/business-intelligence'
        },
        {
          title: 'Data Science',
          subtitle: 'Somos especialistas em investigação de dados, que resolve problemas reais de negócios, com o uso de método científico e técnicas avançadas de análise de dados.',
          src: require('../../assets/images/services/data-science-110x110.png'),
          link: 'servicos/data-science'
        },
        {
          title: 'Digitalização de Dados',
          subtitle: 'Serviço de passagem dos dados físicos para o meio digital. Ou seja, de forma prática, por exemplo, consiste em eliminar a pilha de papéis, e passar os dados contidos nesses documentos para o formato digital.',
          src: require('../../assets/images/services/digitalizacao-dados-110x110.png'),
          link: 'servicos/digitalizacao-dados'
        },
        {
          title: 'Machine Learning',
          subtitle: 'Utilizamos algorítimos avançados no desenvolvimento de robôs visando extrair quantidade significativa de dados para resolver rapidamente problemas de negócios complexos e ricos em dados',
          src: require('../../assets/images/services/machine-learning-110x110.png'),
          link: 'servicos/machine-learning'
        },
        {
          title: 'Processamento de Linguagem Natural',
          subtitle: 'Extração, processamento e segmentação de uma grande quantidade de dados a fim de ter dados refinados resultando em dados estruturados e convalidados.',
          src: require('../../assets/images/services/pln-110x110.png'),
          link: 'servicos/pln'
        },
        {
          title: '6º serviço a ser adicionado',
          subtitle: 'aqui ficará o preview do 6º serviço que iremos adicionar ',
          src: require('../../assets/images/services/digitalizacao-dados-110x110.png'),
          link: 'servicos/6servico'
        }
      ]
    }
  }
}
</script>
