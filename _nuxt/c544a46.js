(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{357:function(t,e,o){t.exports=o.p+"img/04.b1aebda.png"},377:function(t,e,o){"use strict";var n=o(114),l=o(117),r=o(115),c=o(116),m=o(10),d=o.n(m),v={name:"Footer",components:{FooterLogo:l.default,FooterLinks:c.default,FooterAddress:r.default,FooterMain:n.default},props:["footerClass"],data:function(){return{navLogo:d.a,footerText:[{icon:!0,iconClass:"fab fa-whatsapp",text:"(65) 99942-2548",link:"https://wa.me/5565999422548"},{icon:!0,iconClass:"fas fa-envelope",text:"contato@aisolutions.tec.br",link:"mailto:contato@aisolutions.tec.br"},{icon:!0,iconClass:"fas fa-home",text:"Centro Empresarial Parque Brasília - SIG, Quadra 1, Lote 985 Sala 120 - 70610-410 - Brasília-DF"}],footerHome:[{href:"/quem-somos",title:"Sobre Nós"},{href:"/trabalhe-conosco",title:"Trabalhe Conosco"},{href:"javascript:void(0)",title:"Clientes"},{href:"javascript:void(0)",title:"Tecnologia"}]}}},f=o(8),component=Object(f.a)(v,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("FooterMain",{class:t.footerClass},[o("div",{staticClass:"footer-top",attrs:{slot:"footerContent"},slot:"footerContent"},[o("div",{staticClass:"row algin-self-center footer_top_block"},[o("div",{staticClass:"col-md-6"},[o("h4",{staticClass:"footer-title"},[t._v("Assine nossa newsletter")])]),t._v(" "),o("div",{staticClass:"col-md-6"},[o("div",{staticClass:"mc4wp-form-fields"},[o("input",{attrs:{type:"email",name:"EMAIL",placeholder:"Seu e-mail",required:""}}),t._v(" "),o("input",{attrs:{type:"submit",value:"Assinar"}})])])]),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-5 col-md-5 col-sm-12"},[o("FooterLogo",{attrs:{"section-image":t.navLogo,"section-text":"It is a long established fact that a reader will be distracted by the readable content."}})],1),t._v(" "),o("div",{staticClass:"col-lg-3 col-md-2 col-sm-12 mt-4 mt-lg-0 mt-md-3"},[o("FooterLinks",{attrs:{content:t.footerHome,title:"Links"}})],1),t._v(" "),o("div",{staticClass:"col-lg-4 col-md-5 col-sm-12 mt-lg-0 mt-4 mt-md-3"},[o("FooterAddress",{staticClass:"iq-contact",attrs:{"address-content":t.footerText,"address-title":"Contato"}})],1)])])])}),[],!1,null,"2a8b1a14",null);e.a=component.exports},872:function(t,e,o){"use strict";o.r(e);var n={name:"BreadCrum"},l=o(8),r=Object(l.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-left iq-breadcrumb-one iq-bg-over black "},[n("div",{staticClass:"container"},[n("div",{staticClass:"row align-items-center"},[t._m(0),t._v(" "),n("div",{staticClass:"col-lg-4 col-md-4 col-sm-12 text-right wow fadeInRight"},[n("img",{staticClass:"img-fluid float-right",attrs:{alt:"banner",src:o(357)}})])])])])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"col-lg-8 col-md-8 text-left align-self-center"},[o("nav",{staticClass:"text-left",attrs:{"aria-label":"breadcrumb"}},[o("h2",{staticClass:"title"},[t._v("Aplicar Vaga")]),t._v(" "),o("ol",{staticClass:"breadcrumb main-bg"},[o("li",{staticClass:"breadcrumb-item"},[o("a",{attrs:{href:"/inicio"}},[t._v("Início")])]),t._v(" "),o("li",{staticClass:"breadcrumb-item"},[o("a",{attrs:{href:"/trabalhe-conosco"}},[t._v("Trabalhe Conosco")])]),t._v(" "),o("li",{staticClass:"breadcrumb-item active"},[t._v("Aplicar Vaga")])])])])}],!1,null,null,null).exports,c={name:"JobForm",data:function(){return{selected:0}},mounted:function(){this.getJobType()},methods:{getJobType:function(){var param=this.$route.query.vaga;this.selected=param},goTo:function(link){this.$router.push(link)}}},m=Object(l.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"pt-0"},[o("div",{staticClass:"container"},[o("div",{staticClass:"row align-items-center "},[o("div",{staticClass:"col-sm-6"},[t._m(0),t._v(" "),o("div",{staticClass:"response-output"}),t._v(" "),o("form",{attrs:{action:"#",method:"post"}},[o("div",{staticClass:"contact-form"},[t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),o("div",[o("select",{staticClass:"form-control form-select",domProps:{value:t.selected}},[o("option",{attrs:{value:"0",selected:""}},[t._v("Selecione a Vaga")]),t._v(" "),o("option",{attrs:{value:"1"}},[t._v("Vaga 1")]),t._v(" "),o("option",{attrs:{value:"2"}},[t._v("Vaga 2")]),t._v(" "),o("option",{attrs:{value:"3"}},[t._v("Vaga 3")])])]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),o("div",{staticClass:"text-center"},[o("button",{staticClass:"white-btn button bg-grey d-inline-block w-25",attrs:{id:"submit-4",name:"voltar",type:"button"},on:{click:function(e){return t.goTo("/trabalhe-conosco")}}},[t._v("\n                Voltar\n              ")]),t._v(" "),o("button",{staticClass:"button d-inline-block w-50",attrs:{id:"submit-4",click:"/aplicar-vaga",name:"submit",type:"submit",value:"Send"}},[t._v("\n                Enviar Mensagem\n              ")])])])])])])])])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("h2",{staticClass:"text-left mt-3 mb-4"},[t._v("\n          Envie seus dados e"),o("br"),t._v(" se cadastre para a vaga.\n        ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("input",{staticClass:"form-control text ",attrs:{type:"text",name:"your-name",placeholder:"Seu Nome"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("input",{staticClass:"form-control text ",attrs:{type:"text",name:"your-email",placeholder:"Seu E-mail"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("input",{staticClass:"form-control text ",attrs:{type:"text",name:"your-phone",placeholder:"Seu Telefone"}})])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"input-group"},[o("input",{staticClass:"form-control",attrs:{type:"file",id:"inputGroupFile04","aria-describedby":"inputGroupFileAddon04","aria-label":"Upload",accept:"image/png, image/jpeg, application/pdf"}}),t._v(" "),o("button",{staticClass:"btn btn-outline-secondary btn-file",attrs:{type:"button",id:"inputGroupFileAddon04"}},[t._v("Button")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("textarea",{staticClass:"form-control textarea ",attrs:{name:"your-message",cols:"40",rows:"10",placeholder:"Sua Mensagem"}})])}],!1,null,null,null).exports,d=o(377),v=o(361),f={layout:"Principal",components:{BreadCrum:r,ContactForm:m,Footer:d.a},mounted:function(){setTimeout((function(){v.a.index()}),1e3)}},_=Object(l.a)(f,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"main-content"},[o("BreadCrum"),t._v(" "),o("ContactForm"),t._v(" "),o("Footer")],1)}),[],!1,null,null,null);e.default=_.exports}}]);