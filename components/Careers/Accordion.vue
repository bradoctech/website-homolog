<template>
  <section class="pt-5 pt-md-4 pt-lg-5">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="iq-accordion career-style">
            <div v-for="(item,index) in items" :key="index" class="iq-accordion-block">
              <div class="active-faq clearfix">
                <div class="container">
                  <div class="row align-items-center">
                    <div class="col-md-9 col-sm-12">
                      <a href="javascript:void(0)" class="accordion-title"><span>{{ item.title }}</span></a>
                    </div>
                    <div class="col-md-3 col-sm-12 text-center text-lg-right text-md-right">
                      <a class="button" :href="jobLink + item.link">Aplicar a Vaga</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="accordion-details">
                <div class="container">
                  <div class="row mt-4">
                    <div class="col-lg-6 mb-4 mb-lg-0">
                      <h4 class="mb-3">
                        Responsabilidades e Atribuições:
                      </h4>
                      <ul class="iq-list">
                        <li v-for="(list,index) in item.description" :key="index">
                          <i :class="list.class" /><span>{{ list.title }}</span>
                        </li>
                      </ul>
                    </div>
                    <div class="col-lg-6">
                      <h4 class="mb-3">
                        Requisitos e Qualificações:
                      </h4>
                      <ul class="iq-list">
                        <li v-for="(list,index) in item.qualifications" :key="index">
                          <i :class="list.class" /><span>{{ list.title }}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
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
  name: 'Accordion',
  data () {
    return {
      items: [
        {
          title: 'Vaga ou Cargo a Publicar',
          description: [
            {
              class: 'fa fa-check',
              title: 'Responsabilidades e Atribuições da vaga a Publicar:'
            },
            {
              class: 'fa fa-check',
              title: 'Responsabilidades e Atribuições da vaga a Publicar:'
            },
            {
              class: 'fa fa-check',
              title: 'Responsabilidades e Atribuições da vaga a Publicar:'
            },
            {
              class: 'fa fa-check',
              title: 'Responsabilidades e Atribuições da vaga a Publicar:'
            },
            {
              class: 'fa fa-check',
              title: 'Responsabilidades e Atribuições da vaga a Publicar:'
            },
            {
              class: 'fa fa-check',
              title: 'Responsabilidades e Atribuições da vaga a Publicar:'
            }
          ],
          qualifications: [
            {
              class: 'fa fa-check',
              title: 'Requisitos e Qualificações da vaga a Publicar:'
            },
            {
              class: 'fa fa-check',
              title: 'Requisitos e Qualificações da vaga a Publicar:'
            },
            {
              class: 'fa fa-check',
              title: 'Requisitos e Qualificações da vaga a Publicar:'
            },
            {
              class: 'fa fa-check',
              title: 'Requisitos e Qualificações da vaga a Publicar:'
            },
            {
              class: 'fa fa-check',
              title: 'Requisitos e Qualificações da vaga a Publicar:'
            },
            {
              class: 'fa fa-check',
              title: 'Requisitos e Qualificações da vaga a Publicar:'
            }
          ],
          link: '1'
        },
        {
          title: 'Vaga ou Cargo a Publicar',
          description: [
            {
              class: 'fa fa-check',
              title: 'Responsabilidades e Atribuições da vaga a Publicar:'
            },
            {
              class: 'fa fa-check',
              title: 'Responsabilidades e Atribuições da vaga a Publicar:'
            },
            {
              class: 'fa fa-check',
              title: 'Responsabilidades e Atribuições da vaga a Publicar:'
            },
            {
              class: 'fa fa-check',
              title: 'Responsabilidades e Atribuições da vaga a Publicar:'
            },
            {
              class: 'fa fa-check',
              title: 'Responsabilidades e Atribuições da vaga a Publicar:'
            },
            {
              class: 'fa fa-check',
              title: 'Responsabilidades e Atribuições da vaga a Publicar:'
            }
          ],
          qualifications: [
            {
              class: 'fa fa-check',
              title: 'Requisitos e Qualificações da vaga a Publicar:'
            },
            {
              class: 'fa fa-check',
              title: 'Requisitos e Qualificações da vaga a Publicar:'
            },
            {
              class: 'fa fa-check',
              title: 'Requisitos e Qualificações da vaga a Publicar:'
            },
            {
              class: 'fa fa-check',
              title: 'Requisitos e Qualificações da vaga a Publicar:'
            },
            {
              class: 'fa fa-check',
              title: 'Requisitos e Qualificações da vaga a Publicar:'
            },
            {
              class: 'fa fa-check',
              title: 'Requisitos e Qualificações da vaga a Publicar:'
            }
          ],
          link: '2'
        },
        {
          title: 'Vaga ou Cargo a Publicar',
          description: [
            {
              class: 'fa fa-check',
              title: 'Responsabilidades e Atribuições da vaga a Publicar:'
            },
            {
              class: 'fa fa-check',
              title: 'Responsabilidades e Atribuições da vaga a Publicar:'
            },
            {
              class: 'fa fa-check',
              title: 'Responsabilidades e Atribuições da vaga a Publicar:'
            },
            {
              class: 'fa fa-check',
              title: 'Responsabilidades e Atribuições da vaga a Publicar:'
            },
            {
              class: 'fa fa-check',
              title: 'Responsabilidades e Atribuições da vaga a Publicar:'
            },
            {
              class: 'fa fa-check',
              title: 'Responsabilidades e Atribuições da vaga a Publicar:'
            }
          ],
          qualifications: [
            {
              class: 'fa fa-check',
              title: 'Requisitos e Qualificações da vaga a Publicar:'
            },
            {
              class: 'fa fa-check',
              title: 'Requisitos e Qualificações da vaga a Publicar:'
            },
            {
              class: 'fa fa-check',
              title: 'Requisitos e Qualificações da vaga a Publicar:'
            },
            {
              class: 'fa fa-check',
              title: 'Requisitos e Qualificações da vaga a Publicar:'
            },
            {
              class: 'fa fa-check',
              title: 'Requisitos e Qualificações da vaga a Publicar:'
            },
            {
              class: 'fa fa-check',
              title: 'Requisitos e Qualificações da vaga a Publicar:'
            }
          ],
          link: '3'
        }
      ]
    }
  },
  computed: {
    jobLink: function () {
      return process.env.BASE_URL + 'aplicar-vaga?vaga='
    }
  },
  mounted () {
    const jquery = window.$
    jQuery('.iq-accordion .iq-accordion-block .accordion-details').hide()
    jQuery('.iq-accordion .iq-accordion-block:first').addClass('accordion-active').children().slideDown('slow')
    jQuery('.iq-accordion .iq-accordion-block').on('click', function () {
      if (jQuery(this).children('div.accordion-details ').is(':hidden')) {
        jQuery('.iq-accordion .iq-accordion-block').removeClass('accordion-active').children('div.accordion-details ').slideUp('slow')
        jQuery(this).toggleClass('accordion-active').children('div.accordion-details ').slideDown('slow')
      }
    })
  }
}
</script>
