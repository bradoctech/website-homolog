(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{373:function(t,e,o){t.exports=o.p+"img/03.f372f24.png"},375:function(t,e,o){t.exports=o.p+"img/01.f372f24.png"},376:function(t,e,o){t.exports=o.p+"img/02.f372f24.png"},377:function(t,e,o){"use strict";var l=o(114),r=o(117),n=o(115),c=o(116),d=o(10),m=o.n(d),v={name:"Footer",components:{FooterLogo:r.default,FooterLinks:c.default,FooterAddress:n.default,FooterMain:l.default},props:["footerClass"],data:function(){return{navLogo:m.a,footerText:[{icon:!0,iconClass:"fab fa-whatsapp",text:"(65) 99942-2548",link:"https://wa.me/5565999422548"},{icon:!0,iconClass:"fas fa-envelope",text:"contato@aisolutions.tec.br",link:"mailto:contato@aisolutions.tec.br"},{icon:!0,iconClass:"fas fa-home",text:"Centro Empresarial Parque Brasília - SIG, Quadra 1, Lote 985 Sala 120 - 70610-410 - Brasília-DF"}],footerHome:[{href:"/quem-somos",title:"Sobre Nós"},{href:"/trabalhe-conosco",title:"Trabalhe Conosco"},{href:"javascript:void(0)",title:"Clientes"},{href:"javascript:void(0)",title:"Tecnologia"}]}}},f=o(8),component=Object(f.a)(v,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("FooterMain",{class:t.footerClass},[o("div",{staticClass:"footer-top",attrs:{slot:"footerContent"},slot:"footerContent"},[o("div",{staticClass:"row algin-self-center footer_top_block"},[o("div",{staticClass:"col-md-6"},[o("h4",{staticClass:"footer-title"},[t._v("Assine nossa newsletter")])]),t._v(" "),o("div",{staticClass:"col-md-6"},[o("div",{staticClass:"mc4wp-form-fields"},[o("input",{attrs:{type:"email",name:"EMAIL",placeholder:"Seu e-mail",required:""}}),t._v(" "),o("input",{attrs:{type:"submit",value:"Assinar"}})])])]),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-5 col-md-5 col-sm-12"},[o("FooterLogo",{attrs:{"section-image":t.navLogo,"section-text":"It is a long established fact that a reader will be distracted by the readable content."}})],1),t._v(" "),o("div",{staticClass:"col-lg-3 col-md-2 col-sm-12 mt-4 mt-lg-0 mt-md-3"},[o("FooterLinks",{attrs:{content:t.footerHome,title:"Links"}})],1),t._v(" "),o("div",{staticClass:"col-lg-4 col-md-5 col-sm-12 mt-lg-0 mt-4 mt-md-3"},[o("FooterAddress",{staticClass:"iq-contact",attrs:{"address-content":t.footerText,"address-title":"Contato"}})],1)])])])}),[],!1,null,"2a8b1a14",null);e.a=component.exports},385:function(t,e,o){t.exports=o.p+"img/07.b1aebda.png"},453:function(t,e,o){"use strict";var l={name:"BreadCrum"},r=o(8),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"text-left iq-breadcrumb-one iq-bg-over black"},[l("div",{staticClass:"container"},[l("div",{staticClass:"row align-items-center"},[t._m(0),t._v(" "),l("div",{staticClass:"col-lg-4 col-md-4 col-sm-12 text-right wow fadeInRight"},[l("img",{staticClass:"img-fluid float-right",attrs:{alt:"banner",src:o(385)}})])])])])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"col-lg-8 col-md-8 text-left align-self-center"},[o("nav",{staticClass:"text-left",attrs:{"aria-label":"breadcrumb"}},[o("h2",{staticClass:"title"},[t._v("Serviços")]),t._v(" "),o("ol",{staticClass:"breadcrumb main-bg"},[o("li",{staticClass:"breadcrumb-item"},[o("a",{attrs:{href:"/inicio"}},[t._v("Início")])]),t._v(" "),o("li",{staticClass:"breadcrumb-item active"},[t._v("Serviços")])])])])}],!1,null,null,null);e.a=component.exports},454:function(t,e,o){"use strict";var l={name:"Services",components:{CardStyle1:o(122).default},data:function(){return{items:[{title:"Business Intelligence BI",description:"All your big data through robust solutions that empower data collection, storage, processing and analysis",src:o(375),link:"/business-intelligence"},{title:"Data Science",description:"All your big data through robust solutions that empower data collection, storage, processing and analysis",src:o(376),link:"/data-science"},{title:"Processamento de Linguagem Natural (PLN)",description:"All your big data through robust solutions that empower data collection, storage, processing and analysis",src:o(373),link:"/pln"},{title:"Digitalização De Dados",description:"All your big data through robust solutions that empower data collection, storage, processing and analysis",src:o(375),link:"/digitalizacao-dados"},{title:"Machine Learning",description:"All your big data through robust solutions that empower data collection, storage, processing and analysis",src:o(373),link:"/machine-learning"}]}}},r=o(8),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",[o("div",{staticClass:"container"},[o("div",{staticClass:"row"},t._l(t.items,(function(e,l){return o("div",{key:l,staticClass:"col-lg-4 col-md-6"},[o("CardStyle1",[o("div",{attrs:{slot:"cardMedia"},slot:"cardMedia"},[o("img",{attrs:{src:e.src,alt:"fancy-list"}})]),t._v(" "),o("div",{attrs:{slot:"cardTitle"},slot:"cardTitle"},[o("a",{attrs:{href:"/contate-nos"}},[o("h4",{staticClass:"mb-2"},[t._v(t._s(e.title))])])]),t._v(" "),o("div",{attrs:{slot:"cardBody"},slot:"cardBody"},[o("p",[t._v(t._s(e.description))])]),t._v(" "),o("div",{staticClass:"text-center",attrs:{slot:"cardList"},slot:"cardList"},[o("ul",{staticClass:"iq-list"},[o("li",[o("i",{staticClass:"fas fa-check-square"}),o("span",[t._v("Advance Advisory Team")])]),t._v(" "),o("li",[o("i",{staticClass:"fas fa-check-square"}),o("span",[t._v("Professional Consulting Services")])]),t._v(" "),o("li",[o("i",{staticClass:"fas fa-check-square"}),o("span",[t._v("Advance Advisory Team")])])]),t._v(" "),o("div",{staticClass:"blue-btn button mt-2"},[o("a",{attrs:{href:e.link}},[t._v("Saiba mais")])])])])],1)})),0)])])}),[],!1,null,null,null);e.a=component.exports},899:function(t,e,o){"use strict";o.r(e);var l=o(453),r=o(454),n=o(377),c=o(361),d={layout:"Principal",components:{BreadCrum:l.a,Services:r.a,Footer:n.a},mounted:function(){setTimeout((function(){c.a.index()}),1e3)}},m=o(8),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"main-content"},[o("BreadCrum"),t._v(" "),o("Services"),t._v(" "),o("Footer")],1)}),[],!1,null,null,null);e.default=component.exports}}]);