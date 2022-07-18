<template>
  <FooterMain :class="footerClass">
    <div slot="footerContent" class="footer-top">
      <div class="row">
        <div class="col-lg-5 col-md-5 col-sm-12">
          <FooterLogo
            :section-image="navLogo"
            section-text="Inteligência artificial & soluções inteligentes."
          />
        </div>
        <div class="col-lg-3 col-md-2 col-sm-12 mt-4 mt-lg-0 mt-md-3">
          <FooterLinks :path="basePath" :content="footerHome" title="Links" />
        </div>
        <div class="col-lg-4 col-md-5 col-sm-12 mt-lg-0 mt-4 mt-md-3">
          <FooterAddress
            :address-content="footerText"
            address-title="Contato"
            class="iq-contact"
          />
        </div>
      </div>
    </div>
  </FooterMain>
</template>

<script>
import FooterMain from '../themes/Partials/Footer/FooterMain'
import FooterLogo from '../themes/Partials/FooterComponents/FooterLogo'
import FooterAddress from '../themes/Partials/FooterComponents/FooterAddress'
import FooterLinks from '../themes/Partials/FooterComponents/FooterLinks'
import logoImg from '../../assets/images/logo.png'

export default {
  name: 'Footer',
  components: { FooterLogo, FooterLinks, FooterAddress, FooterMain },
  props: ['footerClass'],
  data () {
    return {
      navLogo: logoImg,
      basePath: process.env.BASE_URL,
      footerText: [
        {
          icon: true,
          iconClass: 'ion ion-social-whatsapp',
          text: '(65) 99942-2548',
          link: 'https://wa.me/5565999422548'
        },
        {
          icon: true,
          iconClass: 'fas fa-envelope',
          text: 'contato@aisolutions.tec.br',
          link: 'mailto:contato@aisolutions.tec.br'
        },
        {
          icon: true,
          iconClass: 'fas fa-home',
          text: 'Centro Empresarial Parque Brasília \nSIG , Quadra 1, Lote 985 Sala 120 \n70610-410 - Brasília-DF'
        }
      ],
      footerHome: [
        {
          href: 'quem-somos',
          title: 'Sobre Nós'
        },
        // {
        //   href: 'trabalhe-conosco',
        //   title: 'Trabalhe Conosco'
        // },
        {
          href: 'solucoes',
          title: 'Soluções'
        },
        {
          href: 'servicos',
          title: 'Serviços'
        }
      ]
    }
  }
}
</script>

<style>
  .iq-contact span {
    white-space: pre;
  }
  @media (max-width: 991.98px) {
    footer .footer-top {
      padding: 35px 0;
      padding-top: 35px;
    }
  }
  @media (max-width: 359.98px) {
    .iq-contact span {
      white-space: pre-wrap;
    }
  }
</style>
