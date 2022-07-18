<template>
  <div>
    <HeaderStyle1 :logo-img="logo" :nav-item-list="navItems" class-name="style-one" :styled-logo="styleLogo" />
    <nuxt />
    <ScrollTop />
  </div>
</template>

<script>
import { menu, services, pages, landing1About, ourCases, blog } from '../config/constant.js'
import logoImg from '../assets/images/logo.png'

export default {
  name: 'Principal',
  data () {
    return {
      styleLogo: false,
      logo: logoImg,
      navItems: [
        {
          href: '/inicio',
          title: 'Início',
          active: true,
          children: false,
          child: menu,
          classname: 'menu'
        },
        {
          href: '/quem-somos',
          title: 'Quem Somos',
          children: false,
          child: landing1About,
          classname: ' '
        },
        {
          href: '/servicos',
          title: 'Serviços',
          children: true,
          child: services,
          classname: ' '
        },
        {
          href: '/solucoes',
          title: 'Soluções',
          children: false,
          child: [],
          classname: ' '
        },
        // {
        //   href: '/trabalhe-conosco',
        //   title: 'Trabalhe Conosco',
        //   children: false,
        //   child: [],
        //   classname: ' '
        // },
        {
          href: '/contate-nos',
          title: 'Contato',
          children: false,
          child: [],
          classname: ' '
        }
        // { href: '/services', title: 'Serviços', children: true , child: services, classname: ' ' },
        // { href: '/masonry-2', title: 'Soluções', children: true , child: ourCases, classname: ' ' },
        // { href: '/blog', title: 'Blog', children: true , child: blog, classname: ' ' },
        // { href: '/our-team', title: 'Pages', children: true ,child: pages, classname: ' ' }
      ]
    }
  },
  mounted () {
  }
}
</script>
<style>
  @import url('../assets/css/style.css');
  @import url('../assets/css/responsive.css');
  @import url('../assets/css/all.min.css');

  /* Import Below Theme Style*/
  @import url('../assets/css/color/style.css');
  .wow {
    visibility: hidden;
  }
  @keyframes fadeInUp {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(0, 30%, 0);
      -ms-transform: translate3d(0, 30%, 0);
      transform: translate3d(0, 30%, 0);
    }
    100% {
      opacity: 1;
      -webkit-transform: none;
      -ms-transform: none;
      transform: none;
    }
  }

  .fadeInUp {
    animation-name: fadeInUp;
    animation-timing-function: ease-out;
  }
</style>
