(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{360:function(t,e,o){t.exports=o.p+"img/01.b1aebda.png"},362:function(t,e,o){t.exports=o.p+"img/1.4cb1318.jpg"},363:function(t,e,o){t.exports=o.p+"img/2.4cb1318.jpg"},364:function(t,e,o){t.exports=o.p+"img/3.4cb1318.jpg"},371:function(t,e,o){t.exports=o.p+"img/03.f372f24.png"},375:function(t,e,o){t.exports=o.p+"img/01.f372f24.png"},376:function(t,e,o){t.exports=o.p+"img/02.f372f24.png"},377:function(t,e,o){"use strict";var l=o(114),n=o(117),r=o(115),c=o(116),d=o(10),m=o.n(d),v={name:"Footer",components:{FooterLogo:n.default,FooterLinks:c.default,FooterAddress:r.default,FooterMain:l.default},props:["footerClass"],data:function(){return{navLogo:m.a,footerText:[{icon:!0,iconClass:"fab fa-whatsapp",text:"(65) 99942-2548",link:"https://wa.me/5565999422548"},{icon:!0,iconClass:"fas fa-envelope",text:"contato@aisolutions.tec.br",link:"mailto:contato@aisolutions.tec.br"},{icon:!0,iconClass:"fas fa-home",text:"Centro Empresarial Parque Brasília - SIG, Quadra 1, Lote 985 Sala 120 - 70610-410 - Brasília-DF"}],footerHome:[{href:"/quem-somos",title:"Sobre Nós"},{href:"/trabalhe-conosco",title:"Trabalhe Conosco"},{href:"javascript:void(0)",title:"Clientes"},{href:"javascript:void(0)",title:"Tecnologia"}]}}},f=o(8),component=Object(f.a)(v,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("FooterMain",{class:t.footerClass},[o("div",{staticClass:"footer-top",attrs:{slot:"footerContent"},slot:"footerContent"},[o("div",{staticClass:"row algin-self-center footer_top_block"},[o("div",{staticClass:"col-md-6"},[o("h4",{staticClass:"footer-title"},[t._v("Assine nossa newsletter")])]),t._v(" "),o("div",{staticClass:"col-md-6"},[o("div",{staticClass:"mc4wp-form-fields"},[o("input",{attrs:{type:"email",name:"EMAIL",placeholder:"Seu e-mail",required:""}}),t._v(" "),o("input",{attrs:{type:"submit",value:"Assinar"}})])])]),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-5 col-md-5 col-sm-12"},[o("FooterLogo",{attrs:{"section-image":t.navLogo,"section-text":"It is a long established fact that a reader will be distracted by the readable content."}})],1),t._v(" "),o("div",{staticClass:"col-lg-3 col-md-2 col-sm-12 mt-4 mt-lg-0 mt-md-3"},[o("FooterLinks",{attrs:{content:t.footerHome,title:"Links"}})],1),t._v(" "),o("div",{staticClass:"col-lg-4 col-md-5 col-sm-12 mt-lg-0 mt-4 mt-md-3"},[o("FooterAddress",{staticClass:"iq-contact",attrs:{"address-content":t.footerText,"address-title":"Contato"}})],1)])])])}),[],!1,null,"2a8b1a14",null);e.a=component.exports},385:function(t,e,o){t.exports=o.p+"img/07.b1aebda.png"},420:function(t,e,o){"use strict";var l={name:"BreadCrum"},n=o(8),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"text-left iq-breadcrumb-one iq-bg-over black"},[l("div",{staticClass:"container"},[l("div",{staticClass:"row align-items-center"},[t._m(0),t._v(" "),l("div",{staticClass:"col-lg-4 col-md-4 col-sm-12 text-right wow fadeInRight"},[l("img",{staticClass:"img-fluid float-right",attrs:{alt:"banner",src:o(385)}})])])])])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"col-lg-8 col-md-8 text-left align-self-center"},[o("nav",{staticClass:"text-left",attrs:{"aria-label":"breadcrumb"}},[o("h2",{staticClass:"title"},[t._v("Serviços")]),t._v(" "),o("ol",{staticClass:"breadcrumb main-bg"},[o("li",{staticClass:"breadcrumb-item"},[o("a",{attrs:{href:"/inicio"}},[t._v("Início")])]),t._v(" "),o("li",{staticClass:"breadcrumb-item active"},[t._v("Serviços")])])])])}],!1,null,null,null);e.a=component.exports},421:function(t,e,o){"use strict";var l={name:"Services",components:{CardStyle1:o(120).default},data:function(){return{items:[{title:"Business Intelligence BI",description:"All your big data through robust solutions that empower data collection, storage, processing and analysis",src:o(375),link:"/business-intelligence"},{title:"Data Science",description:"All your big data through robust solutions that empower data collection, storage, processing and analysis",src:o(376),link:"/data-science"},{title:"Processamento de Linguagem Natural (PLN)",description:"All your big data through robust solutions that empower data collection, storage, processing and analysis",src:o(371),link:"/pln"},{title:"Digitalização De Dados",description:"All your big data through robust solutions that empower data collection, storage, processing and analysis",src:o(375),link:"/digitalizacao-dados"},{title:"Machine Learning",description:"All your big data through robust solutions that empower data collection, storage, processing and analysis",src:o(371),link:"/machine-learning"}]}}},n=o(8),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",[o("div",{staticClass:"container"},[o("div",{staticClass:"row"},t._l(t.items,(function(e,l){return o("div",{key:l,staticClass:"col-lg-4 col-md-6"},[o("CardStyle1",[o("div",{attrs:{slot:"cardMedia"},slot:"cardMedia"},[o("img",{attrs:{src:e.src,alt:"fancy-list"}})]),t._v(" "),o("div",{attrs:{slot:"cardTitle"},slot:"cardTitle"},[o("a",{attrs:{href:"/contate-nos"}},[o("h4",{staticClass:"mb-2"},[t._v(t._s(e.title))])])]),t._v(" "),o("div",{attrs:{slot:"cardBody"},slot:"cardBody"},[o("p",[t._v(t._s(e.description))])]),t._v(" "),o("div",{staticClass:"text-center",attrs:{slot:"cardList"},slot:"cardList"},[o("ul",{staticClass:"iq-list"},[o("li",[o("i",{staticClass:"fas fa-check-square"}),o("span",[t._v("Advance Advisory Team")])]),t._v(" "),o("li",[o("i",{staticClass:"fas fa-check-square"}),o("span",[t._v("Professional Consulting Services")])]),t._v(" "),o("li",[o("i",{staticClass:"fas fa-check-square"}),o("span",[t._v("Advance Advisory Team")])])]),t._v(" "),o("div",{staticClass:"blue-btn button mt-2"},[o("a",{attrs:{href:e.link}},[t._v("Saiba mais")])])])])],1)})),0)])])}),[],!1,null,null,null);e.a=component.exports},871:function(t,e,o){"use strict";o.r(e);var l=o(420),n=o(421),r={},c=o(8),d=Object(c.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",{staticClass:"pt-0"},[l("div",{staticClass:"container"},[t._m(0),t._v(" "),l("div",{staticClass:"row"},[l("div",{staticClass:"col-sm-12 col-md-6"},[l("div",{staticClass:"single_image align_left"},[l("div",{staticClass:"box_border_grey"},[l("img",{staticClass:"single_image-img",attrs:{src:o(360),alt:"",width:"550",height:"360"}})])])]),t._v(" "),l("div",{staticClass:"col-sm-12 col-md-6"},[l("div",{staticClass:"service-box p-4 my-4 wow fadeInUp  text-center text-md-left "},[l("img",{attrs:{src:o(375),alt:"fancybox"}}),t._v(" "),t._m(1)]),t._v(" "),l("div",{staticClass:"service-box p-4 my-4 wow fadeInUp  text-center text-md-left "},[l("img",{attrs:{src:o(376),alt:"fancybox"}}),t._v(" "),t._m(2)])])])])])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"row"},[o("div",{staticClass:"col-sm-12  text-center"},[o("div",{staticClass:"title-box wow fadeInUp text-center"},[o("span",{staticClass:"title-design"},[t._v("About Xamin")]),t._v(" "),o("h2",[t._v("Why Choose People Xamin")])])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"service-detail align-self-center"},[o("h5",{staticClass:"mb-2"},[t._v("Perfect Event")]),t._v(" "),o("p",[t._v("The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letter.")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"service-detail align-self-center"},[o("h5",{staticClass:"mb-2"},[t._v("Organization")]),t._v(" "),o("p",[t._v("The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letter.")])])}],!1,null,null,null).exports,m={name:"Client",data:function(){return{items:[{name:"Jack White",title:"CEO",description:"Richard McClintock, a Latin professor at Hampden-Sydney consectetur adip isicing elit, sed dolore magna aliqua hampden. Latin professor at Hampden-Sydney consectetur.",src:o(362)},{name:"Walhan Bobe",title:"Business Advisor",description:'"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium incididunt ut labore et dolore Sed ut perspiciatis error. Perspiciatis unde omnis iste."',src:o(363)},{name:"Mark McManus",title:"COO",description:"“Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.” ",src:o(364)}]}}},v=Object(c.a)(m,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"iq-service"},[o("div",{staticClass:"container"},[t._m(0),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-12 wow fadeInUp"},[o("div",{staticClass:"owl-carousel testimonial-style owl-loaded owl-drag",attrs:{"data-dots":"false","data-nav":"true","data-autoplay":"false","data-loop":"true","data-items":"1","data-items-laptop":"1","data-items-tab":"1","data-items-mobile":"1","data-items-mobile-sm":"1","data-margin":"30"}},t._l(t.items,(function(e,l){return o("div",{key:l,staticClass:"item text-center"},[o("div",{staticClass:"iq-testimonial"},[o("div",{staticClass:"testimonial-info"},[o("img",{staticClass:"img-fluid rounded-circle",attrs:{alt:"#",src:e.src}}),t._v(" "),o("div",{staticClass:"testimonial-name"},[o("h5",[t._v(t._s(e.name))]),t._v(" "),o("span",{staticClass:"sub-title"},[t._v(t._s(e.title))])])]),t._v(" "),o("p",[t._v(t._s(e.description))])])])})),0)])])])])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"row"},[o("div",{staticClass:"col-sm-12 wow fadeInUp"},[o("div",{staticClass:"title-box wow fadeInUp text-center"},[o("span",{staticClass:"title-design"},[t._v("Testimonials")]),t._v(" "),o("h2",[t._v("100+ Companies are Using Xamin")])])])])}],!1,null,null,null).exports,f=o(377),C=o(361),_={layout:"Principal",components:{BreadCrum:l.a,Services:n.a,About:d,Client:v,Footer:f.a},mounted:function(){setTimeout((function(){C.a.index()}),1e3)}},h=Object(c.a)(_,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"main-content"},[o("BreadCrum"),t._v(" "),o("Services"),t._v(" "),o("About"),t._v(" "),o("Client"),t._v(" "),o("Footer")],1)}),[],!1,null,null,null);e.default=h.exports}}]);