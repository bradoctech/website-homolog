(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{361:function(e,t,o){"use strict";o.d(t,"a",(function(){return h}));o(58),o(14),o(34),o(35),o(18);var l,n,r,d=o(90);if("undefined"!=typeof window){var c=o(90);window.$=c,window.jQuery=c,r=c.noConflict(),l=o(618),n=o(263),o(619),o(620),o(621),o(264),o(359);o.e(82).then(o.t.bind(null,829,7)),o.e(83).then(o.t.bind(null,831,7)),o.e(84).then(o.t.bind(null,833,7)),o.e(80).then(o.t.bind(null,834,7)),o.e(81).then(o.t.bind(null,835,7))}var h={index:function(){this.loaderInit(),this.onScroll(),this.toggleDropdown(),this.skrollr(),this.jarallax(),this.wowInit(),this.owlCarousel(),this.progressBar(),this.isotope(),this.chartJs(),this.accordion()},loaderInit:function(){d("#load").fadeOut(),d("#loading").delay(1e3).fadeOut("slow")},progressBar:function(){this.checkElement("class","iq-progress-bar")&&d(".iq-progress-bar > span").each((function(){var e=d(this),t=e.data("percent");e.css({transition:"width 2s"}),setTimeout((function(){e.appear((function(){e.css("width",t+"%")}))}),500)}))},onScroll:function(){this.checkElement("id","top")&&(d(window).on("scroll",(function(){d(this).scrollTop()>100?d("header").addClass("menu-sticky"):d("header").removeClass("menu-sticky")})),d("#back-to-top").fadeOut(),d(window).on("scroll",(function(){d(this).scrollTop()>250?d("#back-to-top").fadeIn(1400):d("#back-to-top").fadeOut(400)})),d(".nav-link").click((function(e){e.preventDefault()})),d('[data-spy="scroll"]').each((function(){d(this).scrollspy("refresh")})))},wowInit:function(){this.checkElement("class","wow")&&new l.WOW({boxClass:"wow",animateClass:"animated",offset:0,live:!1}).init()},toggleDropdown:function(){d("#main-header .menu-item .toggledrop").off("click"),d(window).width()<992&&d("#main-header .menu-item .toggledrop").on("click",(function(e){e.preventDefault(),d(this).closest("li").find(".sub-menu").toggle("d-block")})),d(window).on("resize",(function(){d(".widget .fa.fa-angle-down, #main .fa.fa-angle-down").on("click",(function(){d(this).closest("li").find(".sub-menu").toggle("d-block")})),d("#main-header .menu-item .toggledrop").off("click"),d(window).width()<992&&d("#main-header .menu-item .toggledrop").on("click",(function(e){e.preventDefault(),d(this).closest("li").find(".sub-menu").toggle("d-block")}))}))},skrollr:function(){n.init().destroy(),n.init({forceHeight:!1,easings:{easeOutBack:function(p,s){return(p-=1)*p*(((s=1.70158)+1)*p+s)+1}},mobileCheck:function(){return!1}})},checkElement:function(e,element){var t,o=!1;switch(e){case"class":null!=(t=document.getElementsByClassName(element))&&t.length>0&&(o=!0);break;case"id":null!=(t=document.getElementById(element))&&(o=!0)}return o},jarallax:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){jarallax(document.querySelectorAll('[data-parallax="true"]'),{speed:.6})})),magnific:function(){d(".popup-gallery").magnificPopup({delegate:"a.popup-img",tLoading:"Loading image #%curr%...",type:"image",mainClass:"mfp-img-mobile",gallery:{navigateByImgClick:!0,enabled:!0,preload:[0,1]},image:{tError:'<a href="%url%">The image #%curr%</a> could not be loaded.'}}),d(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({type:"iframe",disableOn:700,mainClass:"mfp-fade",preloader:!1,removalDelay:160,fixedContentPos:!1})},owlCarousel:function(){this.checkElement("class","owl-carousel")&&d(".owl-carousel").each((function(){var e=d(this);e.owlCarousel({items:e.data("items"),loop:e.data("loop"),margin:e.data("margin"),nav:e.data("nav"),dots:e.data("dots"),autoplay:e.data("autoplay"),autoplayTimeout:e.data("autoplay-timeout"),navText:['<i class="fas fa-angle-left fa-2x"></i>','<i class="fas fa-angle-right fa-2x"></i>'],responsiveClass:!0,responsive:{0:{items:e.data("items-mobile-sm")},480:{items:e.data("items-mobile")},786:{items:e.data("items-tab")},1023:{items:e.data("items-laptop")},1199:{items:e.data("items")}}})}))},revslider_showDoubleJqueryError:function(e){d(e).show().html("<div class='rs_error_message_box'><div class='rs_error_message_oops'>Oops...</div><div class='rs_error_message_content'>You have some jquery.js library include that comes after the Slider Revolution files js inclusion.<br>To fix this, you can:<br>&nbsp;&nbsp;&nbsp; 1. Set 'Module General Options' ->  'jQuery & OutPut Filters' -> 'Put JS to Body' to on<br>&nbsp;&nbsp;&nbsp; 2. Find the double jQuery.js inclusion and remove it</div></div>")},initRevSlider1:function(){var e=this;void 0===r("#rev_slider_1_1").revolution?setTimeout((function(){e.initRevSlider1()}),100):r("#rev_slider_1_1").show().revolution({jsFileLocation:"../static/assets/revslider/js/",sliderType:"standard",sliderLayout:"fullwidth",visibilityLevels:[1240,1024,778,480],gridwidth:[1400,1024,767,479],gridheight:[600,600,800,600],minHeight:"",autoHeight:!0,lazyType:"smart",spinner:"spinner0",editorheight:[600,600,800,600],responsiveLevels:[1240,1024,778,480],disableProgressBar:"on",navigation:{mouseScrollNavigation:!1,touch:{touchenabled:!0}},parallax:{levels:[1,2,3,4,5,30,35,40,45,46,47,48,49,50,51,55],type:"mouse"},fallbacks:{allowHTML5AutoPlayOnAndroid:!0}})},initRevSlider2:function(){var e=this;void 0===r("#rev_slider_2_1").revolution?setTimeout((function(){e.initRevSlider2()}),100):r("#rev_slider_2_1").show().revolution({jsFileLocation:"../static/assets/revslider/js/",sliderLayout:"fullwidth",visibilityLevels:"1240,1240,1240,480",gridwidth:"1400,1400,1400,479",gridheight:"700,700,700,600",minHeight:"",autoHeight:!0,lazyType:"smart",spinner:"spinner0",editorheight:"700,768,400,600",responsiveLevels:"1240,1240,1240,480",disableProgressBar:"on",navigation:{mouseScrollNavigation:!1,touch:{touchenabled:!0}},parallax:{levels:[1,2,3,4,5,30,35,40,45,46,47,48,49,50,51,55],type:"mouse"},fallbacks:{allowHTML5AutoPlayOnAndroid:!0}})},initRevSlider3:function(){var e=this;void 0===r("#rev_slider_3_1").revolution?setTimeout((function(){e.initRevSlider3()}),100):r("#rev_slider_3_1").show().revolution({jsFileLocation:"../static/assets/revslider/js/",sliderLayout:"fullwidth",visibilityLevels:"1240,1024,778,480",gridwidth:"1400,1024,767,479",gridheight:"700,600,800,600",minHeight:"",autoHeight:!0,lazyType:"smart",spinner:"spinner0",editorheight:"700,600,800,600",responsiveLevels:"1240,1024,778,480",disableProgressBar:"on",navigation:{mouseScrollNavigation:!1,touch:{touchenabled:!0}},parallax:{levels:[1,2,3,4,5,30,35,40,45,46,47,48,49,50,51,55],type:"mouse"},fallbacks:{allowHTML5AutoPlayOnAndroid:!0}})},initRevSlider4:function(){var e=this;void 0===r("#rev_slider_4_1").revolution?setTimeout((function(){e.initRevSlider4()}),100):r("#rev_slider_4_1").show().revolution({jsFileLocation:"js/",sliderLayout:"fullwidth",visibilityLevels:"1240,1024,778,480",gridwidth:"1400,1024,778,479",gridheight:"800,768,600,600",minHeight:"",autoHeight:!0,lazyType:"smart",spinner:"spinner0",editorheight:"800,768,600,600",responsiveLevels:"1240,1024,778,480",disableProgressBar:"on",navigation:{mouseScrollNavigation:!1,touch:{touchenabled:!0}},parallax:{levels:[1,2,3,4,5,30,35,40,45,46,47,48,49,50,51,55],type:"mouse"},fallbacks:{allowHTML5AutoPlayOnAndroid:!0}})},initRevSlider5:function(){var e=this;void 0===r("#rev_slider_5_1").revolution?setTimeout((function(){e.initRevSlider5()}),100):r("#rev_slider_5_1").show().revolution({jsFileLocation:"js/",sliderLayout:"fullwidth",visibilityLevels:"1240,1024,778,480",gridwidth:"1400,1024,778,479",gridheight:"900,900,600,600",minHeight:"",autoHeight:!0,lazyType:"smart",spinner:"spinner0",editorheight:"900,900,600,600",responsiveLevels:"1240,1024,778,480",disableProgressBar:"on",navigation:{mouseScrollNavigation:!1,touch:{touchenabled:!0}},parallax:{levels:[1,2,3,4,5,30,35,40,45,46,47,48,49,50,51,55],type:"mouse"},fallbacks:{allowHTML5AutoPlayOnAndroid:!0}})},initRevSlider6:function(){var e=this;void 0===r("#rev_slider_6_1").revolution?setTimeout((function(){e.initRevSlider6()}),100):r("#rev_slider_6_1").show().revolution({jsFileLocation:"js/",sliderLayout:"fullwidth",visibilityLevels:"1240,1024,778,480",gridwidth:"1400,1024,767,479",gridheight:"900,700,500,400",minHeight:"",autoHeight:!0,lazyType:"smart",spinner:"spinner0",editorheight:"900,700,500,400",responsiveLevels:"1240,1024,778,480",disableProgressBar:"on",navigation:{mouseScrollNavigation:!1,touch:{touchenabled:!0}},parallax:{levels:[1,2,3,4,5,30,35,40,45,46,47,48,49,50,51,55],type:"mouse"},fallbacks:{allowHTML5AutoPlayOnAndroid:!0}})},initRevSlider7:function(){var e=this;void 0===r("#rev_slider_7_1").revolution?setTimeout((function(){e.initRevSlider7()}),100):r("#rev_slider_7_1").show().revolution({jsFileLocation:"js/",sliderLayout:"fullwidth",visibilityLevels:"1240,1024,778,480",gridwidth:"1400,1024,778,480",gridheight:"800,650,650,500",minHeight:"",autoHeight:!0,spinner:"spinner0",editorheight:"800,650,650,500",responsiveLevels:"1240,1024,778,480",disableProgressBar:"on",navigation:{onHoverStop:!1},fallbacks:{allowHTML5AutoPlayOnAndroid:!0}})},initRevSlider8:function(){var e=this;void 0===r("#rev_slider_8_1").revolution?setTimeout((function(){e.initRevSlider8()}),100):r("#rev_slider_8_1").show().revolution({sliderType:"hero",jsFileLocation:"js/",sliderLayout:"fullwidth",visibilityLevels:"1240,1024,778,480",gridwidth:1600,gridheight:900,minHeight:"",spinner:"spinner0",editorheight:"900,768,960,720",responsiveLevels:"1240,1024,778,480",disableProgressBar:"on",navigation:{onHoverStop:!1},fallbacks:{allowHTML5AutoPlayOnAndroid:!0}})},initRevSlider9:function(){var e=this;void 0===r("#rev_slider_9_1").revolution?setTimeout((function(){e.initRevSlider9()}),100):r("#rev_slider_9_1").show().revolution({sliderType:"hero",jsFileLocation:"js/",sliderLayout:"fullwidth",visibilityLevels:"1240,1024,778,480",gridwidth:1600,gridheight:750,minHeight:"",spinner:"spinner0",editorheight:"750,768,960,720",responsiveLevels:"1240,1024,778,480",disableProgressBar:"on",navigation:{onHoverStop:!1},fallbacks:{allowHTML5AutoPlayOnAndroid:!0}})},initRevSlider10:function(){var e=this;void 0===r("#rev_slider_10_1").revolution?setTimeout((function(){e.initRevSlider10()}),100):r("#rev_slider_10_1").show().revolution({sliderType:"hero",jsFileLocation:"js/",sliderLayout:"fullwidth",visibilityLevels:"1240,1024,778,480",gridwidth:1600,gridheight:900,minHeight:"",spinner:"spinner0",editorheight:"900,768,960,720",responsiveLevels:"1240,1024,778,480",disableProgressBar:"on",navigation:{onHoverStop:!1},fallbacks:{allowHTML5AutoPlayOnAndroid:!0}})},initRevSlider11:function(){var e=this;void 0===r("#rev_slider_11_1").revolution?setTimeout((function(){e.initRevSlider11()}),100):r("#rev_slider_11_1").show().revolution({sliderType:"hero",jsFileLocation:"js/",sliderLayout:"fullwidth",visibilityLevels:"1240,1024,778,480",gridwidth:1600,gridheight:800,minHeight:"",spinner:"spinner0",editorheight:"800,768,960,720",responsiveLevels:"1240,1024,778,480",disableProgressBar:"on",navigation:{onHoverStop:!1},fallbacks:{allowHTML5AutoPlayOnAndroid:!0}})},initRevSlider12:function(){var e=this;void 0===r("#rev_slider_7_1").revolution?setTimeout((function(){e.initRevSlider12()}),100):r("#rev_slider_7_1").show().revolution({sliderType:"hero",jsFileLocation:"js/",sliderLayout:"fullwidth",visibilityLevels:"1240,1024,778,480",gridwidth:1600,gridheight:750,minHeight:"",spinner:"spinner0",editorheight:"750,768,960,720",responsiveLevels:"1240,1024,778,480",disableProgressBar:"on",navigation:{onHoverStop:!1},fallbacks:{allowHTML5AutoPlayOnAndroid:!0}})},initRevSlider13:function(){var e=this;void 0===r("#rev_slider_9_1").revolution?setTimeout((function(){e.initRevSlider13()}),100):r("#rev_slider_9_1").show().revolution({sliderType:"hero",jsFileLocation:"js/",sliderLayout:"fullwidth",visibilityLevels:"1240,1024,778,480",gridwidth:1600,gridheight:800,minHeight:"",spinner:"spinner0",editorheight:"800,768,960,720",responsiveLevels:"1240,1024,778,480",disableProgressBar:"on",navigation:{onHoverStop:!1},fallbacks:{allowHTML5AutoPlayOnAndroid:!0}})},initRevSlider14:function(){var e=this;void 0===r("#rev_slider_11_1").revolution?setTimeout((function(){e.initRevSlider14()}),100):r("#rev_slider_11_1").show().revolution({sliderType:"hero",jsFileLocation:"js/",sliderLayout:"fullwidth",visibilityLevels:"1240,1024,778,480",gridwidth:1600,gridheight:850,minHeight:"",spinner:"spinner0",editorheight:"850,768,960,720",responsiveLevels:"1240,1024,778,480",disableProgressBar:"on",navigation:{onHoverStop:!1},parallax:{levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,30],type:"mouse"},fallbacks:{allowHTML5AutoPlayOnAndroid:!0}})},initRevSlider15:function(){var e=this;void 0===r("#rev_slider_3_1").revolution?setTimeout((function(){e.initRevSlider15()}),100):r("#rev_slider_3_1").show().revolution({jsFileLocation:"js/",sliderLayout:"fullwidth",visibilityLevels:"1240,1240,778,480",gridwidth:"1400,1400,767,479",gridheight:"850,850,800,600",minHeight:"",autoHeight:!0,lazyType:"smart",spinner:"spinner0",editorheight:"850,600,800,600",responsiveLevels:"1240,1240,778,480",disableProgressBar:"on",navigation:{mouseScrollNavigation:!1,touch:{touchenabled:!0}},parallax:{levels:[1,2,3,4,5,30,35,40,45,46,47,48,49,50,51,55],type:"mouse"},fallbacks:{allowHTML5AutoPlayOnAndroid:!0}})},initRevSlider16:function(){var e=this;void 0===r("#rev_slider_4_1").revolution?setTimeout((function(){e.initRevSlider16()}),100):r("#rev_slider_4_1").show().revolution({sliderType:"hero",jsFileLocation:"js/",sliderLayout:"fullwidth",visibilityLevels:"1240,1240,778,480",gridwidth:"1600,1600,778,480",gridheight:"850,850,460,520",minHeight:"",spinner:"spinner0",editorheight:"850,543,460,520",responsiveLevels:"1240,1240,778,480",disableProgressBar:"on",navigation:{onHoverStop:!1},parallax:{levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,30],type:"mouse"},fallbacks:{allowHTML5AutoPlayOnAndroid:!0}})},initRevSlider17:function(){var e=this;void 0===r("#rev_slider_7_1").revolution?setTimeout((function(){e.initRevSlider17()}),100):r("#rev_slider_7_1").show().revolution({jsFileLocation:"js/",sliderLayout:"fullwidth",visibilityLevels:"1240,1024,778,480",gridwidth:"1600,1024,767,479",gridheight:"900,600,800,450",minHeight:"",autoHeight:!0,lazyType:"smart",spinner:"spinner0",editorheight:"900,600,800,450",responsiveLevels:"1240,1024,778,480",disableProgressBar:"on",navigation:{mouseScrollNavigation:!1,touch:{touchenabled:!0}},parallax:{levels:[1,2,3,4,5,30,35,40,45,46,47,48,49,50,51,55],type:"mouse"},fallbacks:{allowHTML5AutoPlayOnAndroid:!0}})},initRevSlider18:function(){var e=this;void 0===r("#rev_slider_3_1").revolution?setTimeout((function(){e.initRevSlider18()}),100):r("#rev_slider_3_1").show().revolution({jsFileLocation:"js/",sliderLayout:"fullwidth",visibilityLevels:"1240,1024,778,480",gridwidth:"1600,1024,767,479",gridheight:"900,600,700,450",minHeight:"",autoHeight:!0,lazyType:"smart",spinner:"spinner0",editorheight:"900,600,700,450",responsiveLevels:"1240,1024,778,480",disableProgressBar:"on",navigation:{mouseScrollNavigation:!1,touch:{touchenabled:!0}},parallax:{levels:[1,2,3,4,5,30,35,40,45,46,47,48,49,50,51,55],type:"mouse"},scrolleffect:{set:!0,blur:!0,grayscale:!0,direction:"bottom",multiplicator:1.3,multiplicator_layers:1.3},sbtimeline:{set:!0},fallbacks:{allowHTML5AutoPlayOnAndroid:!0}})},initRevSlider19:function(){var e=this;void 0===r("#rev_slider_12_1").revolution?setTimeout((function(){e.initRevSlider19()}),100):r("#rev_slider_12_1").show().revolution({jsFileLocation:"js/",sliderLayout:"fullwidth",visibilityLevels:"1240,1024,778,480",gridwidth:1600,gridheight:800,minHeight:"",spinner:"spinner0",editorheight:"800,768,960,720",responsiveLevels:"1240,1024,778,480",disableProgressBar:"on",navigation:{mouseScrollNavigation:"on",onHoverStop:!1},parallax:{levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,30],type:"mouse",origo:"slidercenter",speed:0},sbtimeline:{set:!0},fallbacks:{allowHTML5AutoPlayOnAndroid:!0}})},initRevSlider20:function(){var e=this;void 0===r("#rev_slider_13_1").revolution?setTimeout((function(){e.initRevSlider20()}),100):r("#rev_slider_13_1").show().revolution({sliderType:"hero",jsFileLocation:"js/",sliderLayout:"fullwidth",visibilityLevels:"1240,1240,778,480",gridwidth:"1600,1600,778,480",gridheight:"850,850,460,520",minHeight:"",spinner:"spinner0",editorheight:"850,543,460,520",responsiveLevels:"1240,1240,778,480",disableProgressBar:"on",navigation:{onHoverStop:!1},parallax:{levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,30],type:"mouse"},fallbacks:{allowHTML5AutoPlayOnAndroid:!0}})},initRevSlider21:function(){var e=this;void 0===r("#welcome").revolution?setTimeout((function(){e.initRevSlider21()}),100):r("#welcome").show().revolution({jsFileLocation:"js/",sliderLayout:"fullscreen",visibilityLevels:"1240,1024,778,480",gridwidth:"1240,1024,778,480",gridheight:"950,700,700,700",minHeight:"",lazyType:"single",spinner:"spinner3",editorheight:"950,700,700,700",responsiveLevels:"1240,1024,778,480",disableProgressBar:"on",navigation:{mouseScrollNavigation:!1,onHoverStop:!1,touch:{touchenabled:!0}},viewPort:{enable:!0,visible_area:"20%",presize:!0},fallbacks:{allowHTML5AutoPlayOnAndroid:!0}})},initRevSlider22:function(){var e=this;void 0===r("#rev_slider_10_1").revolution?setTimeout((function(){e.initRevSlider22()}),100):r("#rev_slider_10_1").show().revolution({jsFileLocation:"js/",sliderLayout:"fullwidth",visibilityLevels:"1240,1024,778,480",gridwidth:1600,gridheight:800,minHeight:"",spinner:"spinner0",editorheight:"800,768,960,720",responsiveLevels:"1240,1024,778,480",disableProgressBar:"on",navigation:{onHoverStop:!1},fallbacks:{allowHTML5AutoPlayOnAndroid:!0}})},getCookie:function(e){for(var t=e+"=",o=document.cookie.split(";"),i=0;i<o.length;i++){for(var l=o[i];" "===l.charAt(0);)l=l.substring(1);if(0===l.indexOf(t))return l.substring(t.length,l.length)}return""},isotope:function(){if(this.checkElement("class","isotope")&&(d(".isotope").isotope({itemSelector:".iq-grid-item"}),d(".isotope-filters").on("click","button",(function(){var e=d(this).attr("data-filter");d(".isotope").isotope({resizable:!0,filter:e,layoutMode:"cellsByRow"}),d(".isotope-filters button").removeClass("active"),d(this).addClass("active")}))),this.checkElement("class","iq-masonry-block")){var e=d(".iq-masonry-block .iq-masonry");if(e){var t=d(".iq-masonry-block .isotope-filters");e.isotope({percentPosition:!0,resizable:!0,itemSelector:".iq-masonry-block .iq-masonry-item",masonry:{gutterWidth:0}}),t.on("click","button",(function(){var t=d(this).attr("data-filter");e.isotope({filter:t})})),t.each((function(i,e){var t=d(e);t.on("click","button",(function(){t.find(".active").removeClass("active"),d(this).addClass("active")}))}))}}},chartJs:function(){if(this.checkElement("id","canvas")){if(this.checkElement("class","data-analytics-chart")){var e=d("#canvas"),t=new Chart(e,{type:"pie",data:{datasets:[{data:[60,40,40],backgroundColor:["#f7be68","#fe6c61","#5471d2"]}],labels:["One","Two","Three"]},options:{maintainAspectRatio:!1,legend:{display:!1}}});document.getElementById("js-legend").innerHTML=t.generateLegend()}if(this.checkElement("class","managed-analytics-chart")){var o=d("#canvas"),l=new Chart(o,{type:"line",data:{labels:["JAN"," FEB"," MAR"," APR"," MAY"," JUN"," JUL"," AUG"],datasets:[{label:"One",fillColor:"rgba(84, 114, 210, 0.1)",strokeColor:"#5472d2",pointColor:"#5472d2",pointStrokeColor:"#5472d2",highlightFill:"#3c5ecc",highlightStroke:"#3c5ecc",pointHighlightFill:"#3c5ecc",pointHighlightStroke:"#3c5ecc",data:[10,15,20,25,27,25,23,25],borderColor:"#5471d2",backgroundColor:"rgba(84,113,210,0.2)",pointBackgroundColor:"rgba(84,113,210,1)",pointRadius:5},{label:"Two",fill:!0,fillColor:"rgba(254,108,97,0.1)",strokeColor:"#fe6c61",pointColor:"#fe6c61",pointStrokeColor:"#fe6c61",highlightFill:"#fe5043",highlightStroke:"#fe5043",pointHighlightFill:"#fe5043",pointHighlightStroke:"#fe5043",data:[25,18,16,17,20,25,30,35],borderColor:"#fe6c61",backgroundColor:"rgba(254,108,97,0.2)",pointBackgroundColor:"rgba(254,108,97,1)",pointRadius:5}]},options:{legend:{display:!1}}});document.getElementById("js-legend").innerHTML=l.generateLegend()}if(this.checkElement("class","artificial-intelligence-chart")){var n=jQuery("#canvas");new Chart(n,{type:"line",data:{labels:["JAN"," FEB"," MAR"," APR"," MAY"," JUN"," JUL"," AUG"],datasets:[{label:"One",backgroundColor:"rgba(254,108,97,0.2)",borderColor:"#fe6c61",pointColor:"#fe6c61",pointStrokeColor:"#fe6c61",highlightFill:"#fe5043",highlightStroke:"#fe5043",pointHighlightFill:"#fe5043",pointHighlightStroke:"#fe5043",data:["25"," 18"," 16"," 17"," 20"," 25"," 30"," 35"]},{label:"Two",backgroundColor:"rgba(84,114,210,0.2)",borderColor:"#5472d2",pointColor:"#5472d2",pointStrokeColor:"#5472d2",highlightFill:"#3c5ecc",highlightStroke:"#3c5ecc",pointHighlightFill:"#3c5ecc",pointHighlightStroke:"#3c5ecc",data:["10"," 15"," 20"," 25"," 27"," 25"," 23"," 25"]}]}})}if(this.checkElement("class","big-data-services-chart")){var r=d("#canvas"),c=new Chart(r,{type:"pie",data:{datasets:[{data:[60,40],backgroundColor:["#fe6c61","#5471d2"]}],labels:["One","Two"]},options:{maintainAspectRatio:!1,legend:{display:!1}}});document.getElementById("js-legend").innerHTML=c.generateLegend()}if(this.checkElement("class","data-science-consulting-chart")){var h=d("#canvas"),v=new Chart(h,{type:"doughnut",data:{datasets:[{data:[60,40,40],backgroundColor:["#f7be68","#fe6c61","#5471d2"]}],labels:["One","Two","Three"]},options:{maintainAspectRatio:!1,legend:{display:!1}}});document.getElementById("js-legend").innerHTML=v.generateLegend()}if(this.checkElement("class","data-visualization-chart")){var f=d("#canvas"),m=new Chart(f,{type:"bar",data:{labels:["JAN"," FEB"," MAR"," APR"," MAY"," JUN"," JUL"," AUG"],datasets:[{label:"One",data:[20,28,20,25,27,25,23,25],fillColor:"#5472d2",strokeColor:"#5472d2",pointColor:"#5472d2",pointStrokeColor:"#5472d2",highlightFill:"#3c5ecc",highlightStroke:"#3c5ecc",pointHighlightFill:"#3c5ecc",pointHighlightStroke:"#3c5ecc",backgroundColor:"#5471d2"},{label:"Two",data:[25,18,16,17,20,25,30,38],fillColor:"#fe6c61",strokeColor:"#fe6c61",pointColor:"#fe6c61",pointStrokeColor:"#fe6c61",highlightFill:"#fe5043",highlightStroke:"#fe5043",pointHighlightFill:"#fe5043",pointHighlightStroke:"#fe5043",backgroundColor:"#fe6c61"}]},options:{scaleBeginAtZero:!0,legend:{display:!1}}});document.getElementById("js-legend").innerHTML=m.generateLegend()}}},accordion:function(){this.checkElement("class","iq-faq")&&(jQuery(".iq-faq .iq-block .iq-details").hide(),jQuery(".iq-faq .iq-block:first").addClass("iq-active").children().slideDown("slow"),jQuery(".iq-faq .iq-block").on("click",(function(){jQuery(this).children("div").is(":hidden")&&(jQuery(".iq-faq .iq-block").removeClass("iq-active").children("div").slideUp("slow"),jQuery(this).toggleClass("iq-active").children("div").slideDown("slow"))})))}}},628:function(e,t,o){var map={"./af":456,"./af.js":456,"./ar":457,"./ar-dz":458,"./ar-dz.js":458,"./ar-kw":459,"./ar-kw.js":459,"./ar-ly":460,"./ar-ly.js":460,"./ar-ma":461,"./ar-ma.js":461,"./ar-sa":462,"./ar-sa.js":462,"./ar-tn":463,"./ar-tn.js":463,"./ar.js":457,"./az":464,"./az.js":464,"./be":465,"./be.js":465,"./bg":466,"./bg.js":466,"./bm":467,"./bm.js":467,"./bn":468,"./bn-bd":469,"./bn-bd.js":469,"./bn.js":468,"./bo":470,"./bo.js":470,"./br":471,"./br.js":471,"./bs":472,"./bs.js":472,"./ca":473,"./ca.js":473,"./cs":474,"./cs.js":474,"./cv":475,"./cv.js":475,"./cy":476,"./cy.js":476,"./da":477,"./da.js":477,"./de":478,"./de-at":479,"./de-at.js":479,"./de-ch":480,"./de-ch.js":480,"./de.js":478,"./dv":481,"./dv.js":481,"./el":482,"./el.js":482,"./en-au":483,"./en-au.js":483,"./en-ca":484,"./en-ca.js":484,"./en-gb":485,"./en-gb.js":485,"./en-ie":486,"./en-ie.js":486,"./en-il":487,"./en-il.js":487,"./en-in":488,"./en-in.js":488,"./en-nz":489,"./en-nz.js":489,"./en-sg":490,"./en-sg.js":490,"./eo":491,"./eo.js":491,"./es":492,"./es-do":493,"./es-do.js":493,"./es-mx":494,"./es-mx.js":494,"./es-us":495,"./es-us.js":495,"./es.js":492,"./et":496,"./et.js":496,"./eu":497,"./eu.js":497,"./fa":498,"./fa.js":498,"./fi":499,"./fi.js":499,"./fil":500,"./fil.js":500,"./fo":501,"./fo.js":501,"./fr":502,"./fr-ca":503,"./fr-ca.js":503,"./fr-ch":504,"./fr-ch.js":504,"./fr.js":502,"./fy":505,"./fy.js":505,"./ga":506,"./ga.js":506,"./gd":507,"./gd.js":507,"./gl":508,"./gl.js":508,"./gom-deva":509,"./gom-deva.js":509,"./gom-latn":510,"./gom-latn.js":510,"./gu":511,"./gu.js":511,"./he":512,"./he.js":512,"./hi":513,"./hi.js":513,"./hr":514,"./hr.js":514,"./hu":515,"./hu.js":515,"./hy-am":516,"./hy-am.js":516,"./id":517,"./id.js":517,"./is":518,"./is.js":518,"./it":519,"./it-ch":520,"./it-ch.js":520,"./it.js":519,"./ja":521,"./ja.js":521,"./jv":522,"./jv.js":522,"./ka":523,"./ka.js":523,"./kk":524,"./kk.js":524,"./km":525,"./km.js":525,"./kn":526,"./kn.js":526,"./ko":527,"./ko.js":527,"./ku":528,"./ku.js":528,"./ky":529,"./ky.js":529,"./lb":530,"./lb.js":530,"./lo":531,"./lo.js":531,"./lt":532,"./lt.js":532,"./lv":533,"./lv.js":533,"./me":534,"./me.js":534,"./mi":535,"./mi.js":535,"./mk":536,"./mk.js":536,"./ml":537,"./ml.js":537,"./mn":538,"./mn.js":538,"./mr":539,"./mr.js":539,"./ms":540,"./ms-my":541,"./ms-my.js":541,"./ms.js":540,"./mt":542,"./mt.js":542,"./my":543,"./my.js":543,"./nb":544,"./nb.js":544,"./ne":545,"./ne.js":545,"./nl":546,"./nl-be":547,"./nl-be.js":547,"./nl.js":546,"./nn":548,"./nn.js":548,"./oc-lnc":549,"./oc-lnc.js":549,"./pa-in":550,"./pa-in.js":550,"./pl":551,"./pl.js":551,"./pt":552,"./pt-br":553,"./pt-br.js":553,"./pt.js":552,"./ro":554,"./ro.js":554,"./ru":555,"./ru.js":555,"./sd":556,"./sd.js":556,"./se":557,"./se.js":557,"./si":558,"./si.js":558,"./sk":559,"./sk.js":559,"./sl":560,"./sl.js":560,"./sq":561,"./sq.js":561,"./sr":562,"./sr-cyrl":563,"./sr-cyrl.js":563,"./sr.js":562,"./ss":564,"./ss.js":564,"./sv":565,"./sv.js":565,"./sw":566,"./sw.js":566,"./ta":567,"./ta.js":567,"./te":568,"./te.js":568,"./tet":569,"./tet.js":569,"./tg":570,"./tg.js":570,"./th":571,"./th.js":571,"./tk":572,"./tk.js":572,"./tl-ph":573,"./tl-ph.js":573,"./tlh":574,"./tlh.js":574,"./tr":575,"./tr.js":575,"./tzl":576,"./tzl.js":576,"./tzm":577,"./tzm-latn":578,"./tzm-latn.js":578,"./tzm.js":577,"./ug-cn":579,"./ug-cn.js":579,"./uk":580,"./uk.js":580,"./ur":581,"./ur.js":581,"./uz":582,"./uz-latn":583,"./uz-latn.js":583,"./uz.js":582,"./vi":584,"./vi.js":584,"./x-pseudo":585,"./x-pseudo.js":585,"./yo":586,"./yo.js":586,"./zh-cn":587,"./zh-cn.js":587,"./zh-hk":588,"./zh-hk.js":588,"./zh-mo":589,"./zh-mo.js":589,"./zh-tw":590,"./zh-tw.js":590};function l(e){var t=n(e);return o(t)}function n(e){if(!o.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}l.keys=function(){return Object.keys(map)},l.resolve=n,e.exports=l,l.id=628}}]);