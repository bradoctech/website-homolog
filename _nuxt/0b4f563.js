(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{3:function(e,t,o){"use strict";o.d(t,"a",(function(){return h}));o(141),o(47),o(79),o(80),o(53);var l,n,r,d=o(172);if("undefined"!=typeof window){var c=o(172);window.$=c,window.jQuery=c,r=c.noConflict(),l=o(989),n=o(377),o(990),o(991),o(992),o(378),o(832);o.e(82).then(o.t.bind(null,1025,7)),o.e(83).then(o.t.bind(null,1027,7)),o.e(84).then(o.t.bind(null,1029,7)),o.e(80).then(o.t.bind(null,1030,7)),o.e(81).then(o.t.bind(null,1031,7))}var h={index:function(){this.loaderInit(),this.onScroll(),this.toggleDropdown(),this.skrollr(),this.jarallax(),this.wowInit(),this.owlCarousel(),this.progressBar(),this.isotope(),this.chartJs(),this.accordion()},loaderInit:function(){d("#load").fadeOut(),d("#loading").delay(1e3).fadeOut("slow")},progressBar:function(){this.checkElement("class","iq-progress-bar")&&d(".iq-progress-bar > span").each((function(){var e=d(this),t=e.data("percent");e.css({transition:"width 2s"}),setTimeout((function(){e.appear((function(){e.css("width",t+"%")}))}),500)}))},onScroll:function(){this.checkElement("id","top")&&(d(window).on("scroll",(function(){d(this).scrollTop()>100?d("header").addClass("menu-sticky"):d("header").removeClass("menu-sticky")})),d("#back-to-top").fadeOut(),d(window).on("scroll",(function(){d(this).scrollTop()>250?d("#back-to-top").fadeIn(1400):d("#back-to-top").fadeOut(400)})),d(".nav-link").click((function(e){e.preventDefault()})),d('[data-spy="scroll"]').each((function(){d(this).scrollspy("refresh")})))},wowInit:function(){this.checkElement("class","wow")&&new l.WOW({boxClass:"wow",animateClass:"animated",offset:0,live:!1}).init()},toggleDropdown:function(){d("#main-header .menu-item .toggledrop").off("click"),d(window).width()<992&&d("#main-header .menu-item .toggledrop").on("click",(function(e){e.preventDefault(),d(this).closest("li").find(".sub-menu").toggle("d-block")})),d(window).on("resize",(function(){d(".widget .fa.fa-angle-down, #main .fa.fa-angle-down").on("click",(function(){d(this).closest("li").find(".sub-menu").toggle("d-block")})),d("#main-header .menu-item .toggledrop").off("click"),d(window).width()<992&&d("#main-header .menu-item .toggledrop").on("click",(function(e){e.preventDefault(),d(this).closest("li").find(".sub-menu").toggle("d-block")}))}))},skrollr:function(){n.init().destroy(),n.init({forceHeight:!1,easings:{easeOutBack:function(p,s){return(p-=1)*p*(((s=1.70158)+1)*p+s)+1}},mobileCheck:function(){return!1}})},checkElement:function(e,element){var t,o=!1;switch(e){case"class":null!=(t=document.getElementsByClassName(element))&&t.length>0&&(o=!0);break;case"id":null!=(t=document.getElementById(element))&&(o=!0)}return o},jarallax:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){jarallax(document.querySelectorAll('[data-parallax="true"]'),{speed:.6})})),magnific:function(){d(".popup-gallery").magnificPopup({delegate:"a.popup-img",tLoading:"Loading image #%curr%...",type:"image",mainClass:"mfp-img-mobile",gallery:{navigateByImgClick:!0,enabled:!0,preload:[0,1]},image:{tError:'<a href="%url%">The image #%curr%</a> could not be loaded.'}}),d(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({type:"iframe",disableOn:700,mainClass:"mfp-fade",preloader:!1,removalDelay:160,fixedContentPos:!1})},owlCarousel:function(){this.checkElement("class","owl-carousel")&&d(".owl-carousel").each((function(){var e=d(this);e.owlCarousel({items:e.data("items"),loop:e.data("loop"),margin:e.data("margin"),nav:e.data("nav"),dots:e.data("dots"),autoplay:e.data("autoplay"),autoplayTimeout:e.data("autoplay-timeout"),navText:['<i class="fas fa-angle-left fa-2x"></i>','<i class="fas fa-angle-right fa-2x"></i>'],responsiveClass:!0,responsive:{0:{items:e.data("items-mobile-sm")},480:{items:e.data("items-mobile")},786:{items:e.data("items-tab")},1023:{items:e.data("items-laptop")},1199:{items:e.data("items")}}})}))},revslider_showDoubleJqueryError:function(e){d(e).show().html("<div class='rs_error_message_box'><div class='rs_error_message_oops'>Oops...</div><div class='rs_error_message_content'>You have some jquery.js library include that comes after the Slider Revolution files js inclusion.<br>To fix this, you can:<br>&nbsp;&nbsp;&nbsp; 1. Set 'Module General Options' ->  'jQuery & OutPut Filters' -> 'Put JS to Body' to on<br>&nbsp;&nbsp;&nbsp; 2. Find the double jQuery.js inclusion and remove it</div></div>")},initRevSlider1:function(){var e=this;void 0===r("#rev_slider_1_1").revolution?setTimeout((function(){e.initRevSlider1()}),100):r("#rev_slider_1_1").show().revolution({jsFileLocation:"../static/assets/revslider/js/",sliderType:"standard",sliderLayout:"fullwidth",visibilityLevels:[1240,1024,778,480],gridwidth:[1400,1024,767,479],gridheight:[600,600,800,600],minHeight:"",autoHeight:!0,lazyType:"smart",spinner:"spinner0",editorheight:[600,600,800,600],responsiveLevels:[1240,1024,778,480],disableProgressBar:"on",navigation:{mouseScrollNavigation:!1,touch:{touchenabled:!0}},parallax:{levels:[1,2,3,4,5,30,35,40,45,46,47,48,49,50,51,55],type:"mouse"},fallbacks:{allowHTML5AutoPlayOnAndroid:!0}})},initRevSlider2:function(){var e=this;void 0===r("#rev_slider_2_1").revolution?setTimeout((function(){e.initRevSlider2()}),100):r("#rev_slider_2_1").show().revolution({jsFileLocation:"../static/assets/revslider/js/",sliderLayout:"fullwidth",visibilityLevels:"1240,1240,1240,480",gridwidth:"1400,1400,1400,479",gridheight:"700,700,700,600",minHeight:"",autoHeight:!0,lazyType:"smart",spinner:"spinner0",editorheight:"700,768,400,600",responsiveLevels:"1240,1240,1240,480",disableProgressBar:"on",navigation:{mouseScrollNavigation:!1,touch:{touchenabled:!0}},parallax:{levels:[1,2,3,4,5,30,35,40,45,46,47,48,49,50,51,55],type:"mouse"},fallbacks:{allowHTML5AutoPlayOnAndroid:!0}})},initRevSlider3:function(){var e=this;void 0===r("#rev_slider_3_1").revolution?setTimeout((function(){e.initRevSlider3()}),100):r("#rev_slider_3_1").show().revolution({jsFileLocation:"../static/assets/revslider/js/",sliderLayout:"fullwidth",visibilityLevels:"1240,1024,778,480",gridwidth:"1400,1024,767,479",gridheight:"700,600,800,600",minHeight:"",autoHeight:!0,lazyType:"smart",spinner:"spinner0",editorheight:"700,600,800,600",responsiveLevels:"1240,1024,778,480",disableProgressBar:"on",navigation:{mouseScrollNavigation:!1,touch:{touchenabled:!0}},parallax:{levels:[1,2,3,4,5,30,35,40,45,46,47,48,49,50,51,55],type:"mouse"},fallbacks:{allowHTML5AutoPlayOnAndroid:!0}})},initRevSlider4:function(){var e=this;void 0===r("#rev_slider_4_1").revolution?setTimeout((function(){e.initRevSlider4()}),100):r("#rev_slider_4_1").show().revolution({jsFileLocation:"js/",sliderLayout:"fullwidth",visibilityLevels:"1240,1024,778,480",gridwidth:"1400,1024,778,479",gridheight:"800,768,600,600",minHeight:"",autoHeight:!0,lazyType:"smart",spinner:"spinner0",editorheight:"800,768,600,600",responsiveLevels:"1240,1024,778,480",disableProgressBar:"on",navigation:{mouseScrollNavigation:!1,touch:{touchenabled:!0}},parallax:{levels:[1,2,3,4,5,30,35,40,45,46,47,48,49,50,51,55],type:"mouse"},fallbacks:{allowHTML5AutoPlayOnAndroid:!0}})},initRevSlider5:function(){var e=this;void 0===r("#rev_slider_5_1").revolution?setTimeout((function(){e.initRevSlider5()}),100):r("#rev_slider_5_1").show().revolution({jsFileLocation:"js/",sliderLayout:"fullwidth",visibilityLevels:"1240,1024,778,480",gridwidth:"1400,1024,778,479",gridheight:"900,900,600,600",minHeight:"",autoHeight:!0,lazyType:"smart",spinner:"spinner0",editorheight:"900,900,600,600",responsiveLevels:"1240,1024,778,480",disableProgressBar:"on",navigation:{mouseScrollNavigation:!1,touch:{touchenabled:!0}},parallax:{levels:[1,2,3,4,5,30,35,40,45,46,47,48,49,50,51,55],type:"mouse"},fallbacks:{allowHTML5AutoPlayOnAndroid:!0}})},initRevSlider6:function(){var e=this;void 0===r("#rev_slider_6_1").revolution?setTimeout((function(){e.initRevSlider6()}),100):r("#rev_slider_6_1").show().revolution({jsFileLocation:"js/",sliderLayout:"fullwidth",visibilityLevels:"1240,1024,778,480",gridwidth:"1400,1024,767,479",gridheight:"900,700,500,400",minHeight:"",autoHeight:!0,lazyType:"smart",spinner:"spinner0",editorheight:"900,700,500,400",responsiveLevels:"1240,1024,778,480",disableProgressBar:"on",navigation:{mouseScrollNavigation:!1,touch:{touchenabled:!0}},parallax:{levels:[1,2,3,4,5,30,35,40,45,46,47,48,49,50,51,55],type:"mouse"},fallbacks:{allowHTML5AutoPlayOnAndroid:!0}})},initRevSlider7:function(){var e=this;void 0===r("#rev_slider_7_1").revolution?setTimeout((function(){e.initRevSlider7()}),100):r("#rev_slider_7_1").show().revolution({jsFileLocation:"js/",sliderLayout:"fullwidth",visibilityLevels:"1240,1024,778,480",gridwidth:"1400,1024,778,480",gridheight:"800,650,650,500",minHeight:"",autoHeight:!0,spinner:"spinner0",editorheight:"800,650,650,500",responsiveLevels:"1240,1024,778,480",disableProgressBar:"on",navigation:{onHoverStop:!1},fallbacks:{allowHTML5AutoPlayOnAndroid:!0}})},initRevSlider8:function(){var e=this;void 0===r("#rev_slider_8_1").revolution?setTimeout((function(){e.initRevSlider8()}),100):r("#rev_slider_8_1").show().revolution({sliderType:"hero",jsFileLocation:"js/",sliderLayout:"fullwidth",visibilityLevels:"1240,1024,778,480",gridwidth:1600,gridheight:900,minHeight:"",spinner:"spinner0",editorheight:"900,768,960,720",responsiveLevels:"1240,1024,778,480",disableProgressBar:"on",navigation:{onHoverStop:!1},fallbacks:{allowHTML5AutoPlayOnAndroid:!0}})},initRevSlider9:function(){var e=this;void 0===r("#rev_slider_9_1").revolution?setTimeout((function(){e.initRevSlider9()}),100):r("#rev_slider_9_1").show().revolution({sliderType:"hero",jsFileLocation:"js/",sliderLayout:"fullwidth",visibilityLevels:"1240,1024,778,480",gridwidth:1600,gridheight:750,minHeight:"",spinner:"spinner0",editorheight:"750,768,960,720",responsiveLevels:"1240,1024,778,480",disableProgressBar:"on",navigation:{onHoverStop:!1},fallbacks:{allowHTML5AutoPlayOnAndroid:!0}})},initRevSlider10:function(){var e=this;void 0===r("#rev_slider_10_1").revolution?setTimeout((function(){e.initRevSlider10()}),100):r("#rev_slider_10_1").show().revolution({sliderType:"hero",jsFileLocation:"js/",sliderLayout:"fullwidth",visibilityLevels:"1240,1024,778,480",gridwidth:1600,gridheight:900,minHeight:"",spinner:"spinner0",editorheight:"900,768,960,720",responsiveLevels:"1240,1024,778,480",disableProgressBar:"on",navigation:{onHoverStop:!1},fallbacks:{allowHTML5AutoPlayOnAndroid:!0}})},initRevSlider11:function(){var e=this;void 0===r("#rev_slider_11_1").revolution?setTimeout((function(){e.initRevSlider11()}),100):r("#rev_slider_11_1").show().revolution({sliderType:"hero",jsFileLocation:"js/",sliderLayout:"fullwidth",visibilityLevels:"1240,1024,778,480",gridwidth:1600,gridheight:800,minHeight:"",spinner:"spinner0",editorheight:"800,768,960,720",responsiveLevels:"1240,1024,778,480",disableProgressBar:"on",navigation:{onHoverStop:!1},fallbacks:{allowHTML5AutoPlayOnAndroid:!0}})},initRevSlider12:function(){var e=this;void 0===r("#rev_slider_7_1").revolution?setTimeout((function(){e.initRevSlider12()}),100):r("#rev_slider_7_1").show().revolution({sliderType:"hero",jsFileLocation:"js/",sliderLayout:"fullwidth",visibilityLevels:"1240,1024,778,480",gridwidth:1600,gridheight:750,minHeight:"",spinner:"spinner0",editorheight:"750,768,960,720",responsiveLevels:"1240,1024,778,480",disableProgressBar:"on",navigation:{onHoverStop:!1},fallbacks:{allowHTML5AutoPlayOnAndroid:!0}})},initRevSlider13:function(){var e=this;void 0===r("#rev_slider_9_1").revolution?setTimeout((function(){e.initRevSlider13()}),100):r("#rev_slider_9_1").show().revolution({sliderType:"hero",jsFileLocation:"js/",sliderLayout:"fullwidth",visibilityLevels:"1240,1024,778,480",gridwidth:1600,gridheight:800,minHeight:"",spinner:"spinner0",editorheight:"800,768,960,720",responsiveLevels:"1240,1024,778,480",disableProgressBar:"on",navigation:{onHoverStop:!1},fallbacks:{allowHTML5AutoPlayOnAndroid:!0}})},initRevSlider14:function(){var e=this;void 0===r("#rev_slider_11_1").revolution?setTimeout((function(){e.initRevSlider14()}),100):r("#rev_slider_11_1").show().revolution({sliderType:"hero",jsFileLocation:"js/",sliderLayout:"fullwidth",visibilityLevels:"1240,1024,778,480",gridwidth:1600,gridheight:850,minHeight:"",spinner:"spinner0",editorheight:"850,768,960,720",responsiveLevels:"1240,1024,778,480",disableProgressBar:"on",navigation:{onHoverStop:!1},parallax:{levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,30],type:"mouse"},fallbacks:{allowHTML5AutoPlayOnAndroid:!0}})},initRevSlider15:function(){var e=this;void 0===r("#rev_slider_3_1").revolution?setTimeout((function(){e.initRevSlider15()}),100):r("#rev_slider_3_1").show().revolution({jsFileLocation:"js/",sliderLayout:"fullwidth",visibilityLevels:"1240,1240,778,480",gridwidth:"1400,1400,767,479",gridheight:"850,850,800,600",minHeight:"",autoHeight:!0,lazyType:"smart",spinner:"spinner0",editorheight:"850,600,800,600",responsiveLevels:"1240,1240,778,480",disableProgressBar:"on",navigation:{mouseScrollNavigation:!1,touch:{touchenabled:!0}},parallax:{levels:[1,2,3,4,5,30,35,40,45,46,47,48,49,50,51,55],type:"mouse"},fallbacks:{allowHTML5AutoPlayOnAndroid:!0}})},initRevSlider16:function(){var e=this;void 0===r("#rev_slider_4_1").revolution?setTimeout((function(){e.initRevSlider16()}),100):r("#rev_slider_4_1").show().revolution({sliderType:"hero",jsFileLocation:"js/",sliderLayout:"fullwidth",visibilityLevels:"1240,1240,778,480",gridwidth:"1600,1600,778,480",gridheight:"850,850,460,520",minHeight:"",spinner:"spinner0",editorheight:"850,543,460,520",responsiveLevels:"1240,1240,778,480",disableProgressBar:"on",navigation:{onHoverStop:!1},parallax:{levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,30],type:"mouse"},fallbacks:{allowHTML5AutoPlayOnAndroid:!0}})},initRevSlider17:function(){var e=this;void 0===r("#rev_slider_7_1").revolution?setTimeout((function(){e.initRevSlider17()}),100):r("#rev_slider_7_1").show().revolution({jsFileLocation:"js/",sliderLayout:"fullwidth",visibilityLevels:"1240,1024,778,480",gridwidth:"1600,1024,767,479",gridheight:"900,600,800,450",minHeight:"",autoHeight:!0,lazyType:"smart",spinner:"spinner0",editorheight:"900,600,800,450",responsiveLevels:"1240,1024,778,480",disableProgressBar:"on",navigation:{mouseScrollNavigation:!1,touch:{touchenabled:!0}},parallax:{levels:[1,2,3,4,5,30,35,40,45,46,47,48,49,50,51,55],type:"mouse"},fallbacks:{allowHTML5AutoPlayOnAndroid:!0}})},initRevSlider18:function(){var e=this;void 0===r("#rev_slider_3_1").revolution?setTimeout((function(){e.initRevSlider18()}),100):r("#rev_slider_3_1").show().revolution({jsFileLocation:"js/",sliderLayout:"fullwidth",visibilityLevels:"1240,1024,778,480",gridwidth:"1600,1024,767,479",gridheight:"900,600,700,450",minHeight:"",autoHeight:!0,lazyType:"smart",spinner:"spinner0",editorheight:"900,600,700,450",responsiveLevels:"1240,1024,778,480",disableProgressBar:"on",navigation:{mouseScrollNavigation:!1,touch:{touchenabled:!0}},parallax:{levels:[1,2,3,4,5,30,35,40,45,46,47,48,49,50,51,55],type:"mouse"},scrolleffect:{set:!0,blur:!0,grayscale:!0,direction:"bottom",multiplicator:1.3,multiplicator_layers:1.3},sbtimeline:{set:!0},fallbacks:{allowHTML5AutoPlayOnAndroid:!0}})},initRevSlider19:function(){var e=this;void 0===r("#rev_slider_12_1").revolution?setTimeout((function(){e.initRevSlider19()}),100):r("#rev_slider_12_1").show().revolution({jsFileLocation:"js/",sliderLayout:"fullwidth",visibilityLevels:"1240,1024,778,480",gridwidth:1600,gridheight:800,minHeight:"",spinner:"spinner0",editorheight:"800,768,960,720",responsiveLevels:"1240,1024,778,480",disableProgressBar:"on",navigation:{mouseScrollNavigation:"on",onHoverStop:!1},parallax:{levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,30],type:"mouse",origo:"slidercenter",speed:0},sbtimeline:{set:!0},fallbacks:{allowHTML5AutoPlayOnAndroid:!0}})},initRevSlider20:function(){var e=this;void 0===r("#rev_slider_13_1").revolution?setTimeout((function(){e.initRevSlider20()}),100):r("#rev_slider_13_1").show().revolution({sliderType:"hero",jsFileLocation:"js/",sliderLayout:"fullwidth",visibilityLevels:"1240,1240,778,480",gridwidth:"1600,1600,778,480",gridheight:"850,850,460,520",minHeight:"",spinner:"spinner0",editorheight:"850,543,460,520",responsiveLevels:"1240,1240,778,480",disableProgressBar:"on",navigation:{onHoverStop:!1},parallax:{levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,30],type:"mouse"},fallbacks:{allowHTML5AutoPlayOnAndroid:!0}})},initRevSlider21:function(){var e=this;void 0===r("#welcome").revolution?setTimeout((function(){e.initRevSlider21()}),100):r("#welcome").show().revolution({jsFileLocation:"js/",sliderLayout:"fullscreen",visibilityLevels:"1240,1024,778,480",gridwidth:"1240,1024,778,480",gridheight:"950,700,700,700",minHeight:"",lazyType:"single",spinner:"spinner3",editorheight:"950,700,700,700",responsiveLevels:"1240,1024,778,480",disableProgressBar:"on",navigation:{mouseScrollNavigation:!1,onHoverStop:!1,touch:{touchenabled:!0}},viewPort:{enable:!0,visible_area:"20%",presize:!0},fallbacks:{allowHTML5AutoPlayOnAndroid:!0}})},initRevSlider22:function(){var e=this;void 0===r("#rev_slider_10_1").revolution?setTimeout((function(){e.initRevSlider22()}),100):r("#rev_slider_10_1").show().revolution({jsFileLocation:"js/",sliderLayout:"fullwidth",visibilityLevels:"1240,1024,778,480",gridwidth:1600,gridheight:800,minHeight:"",spinner:"spinner0",editorheight:"800,768,960,720",responsiveLevels:"1240,1024,778,480",disableProgressBar:"on",navigation:{onHoverStop:!1},fallbacks:{allowHTML5AutoPlayOnAndroid:!0}})},getCookie:function(e){for(var t=e+"=",o=document.cookie.split(";"),i=0;i<o.length;i++){for(var l=o[i];" "===l.charAt(0);)l=l.substring(1);if(0===l.indexOf(t))return l.substring(t.length,l.length)}return""},isotope:function(){if(this.checkElement("class","isotope")&&(d(".isotope").isotope({itemSelector:".iq-grid-item"}),d(".isotope-filters").on("click","button",(function(){var e=d(this).attr("data-filter");d(".isotope").isotope({resizable:!0,filter:e,layoutMode:"cellsByRow"}),d(".isotope-filters button").removeClass("active"),d(this).addClass("active")}))),this.checkElement("class","iq-masonry-block")){var e=d(".iq-masonry-block .iq-masonry");if(e){var t=d(".iq-masonry-block .isotope-filters");e.isotope({percentPosition:!0,resizable:!0,itemSelector:".iq-masonry-block .iq-masonry-item",masonry:{gutterWidth:0}}),t.on("click","button",(function(){var t=d(this).attr("data-filter");e.isotope({filter:t})})),t.each((function(i,e){var t=d(e);t.on("click","button",(function(){t.find(".active").removeClass("active"),d(this).addClass("active")}))}))}}},chartJs:function(){if(this.checkElement("id","canvas")){if(this.checkElement("class","data-analytics-chart")){var e=d("#canvas"),t=new Chart(e,{type:"pie",data:{datasets:[{data:[60,40,40],backgroundColor:["#f7be68","#fe6c61","#5471d2"]}],labels:["One","Two","Three"]},options:{maintainAspectRatio:!1,legend:{display:!1}}});document.getElementById("js-legend").innerHTML=t.generateLegend()}if(this.checkElement("class","managed-analytics-chart")){var o=d("#canvas"),l=new Chart(o,{type:"line",data:{labels:["JAN"," FEB"," MAR"," APR"," MAY"," JUN"," JUL"," AUG"],datasets:[{label:"One",fillColor:"rgba(84, 114, 210, 0.1)",strokeColor:"#5472d2",pointColor:"#5472d2",pointStrokeColor:"#5472d2",highlightFill:"#3c5ecc",highlightStroke:"#3c5ecc",pointHighlightFill:"#3c5ecc",pointHighlightStroke:"#3c5ecc",data:[10,15,20,25,27,25,23,25],borderColor:"#5471d2",backgroundColor:"rgba(84,113,210,0.2)",pointBackgroundColor:"rgba(84,113,210,1)",pointRadius:5},{label:"Two",fill:!0,fillColor:"rgba(254,108,97,0.1)",strokeColor:"#fe6c61",pointColor:"#fe6c61",pointStrokeColor:"#fe6c61",highlightFill:"#fe5043",highlightStroke:"#fe5043",pointHighlightFill:"#fe5043",pointHighlightStroke:"#fe5043",data:[25,18,16,17,20,25,30,35],borderColor:"#fe6c61",backgroundColor:"rgba(254,108,97,0.2)",pointBackgroundColor:"rgba(254,108,97,1)",pointRadius:5}]},options:{legend:{display:!1}}});document.getElementById("js-legend").innerHTML=l.generateLegend()}if(this.checkElement("class","artificial-intelligence-chart")){var n=jQuery("#canvas");new Chart(n,{type:"line",data:{labels:["JAN"," FEB"," MAR"," APR"," MAY"," JUN"," JUL"," AUG"],datasets:[{label:"One",backgroundColor:"rgba(254,108,97,0.2)",borderColor:"#fe6c61",pointColor:"#fe6c61",pointStrokeColor:"#fe6c61",highlightFill:"#fe5043",highlightStroke:"#fe5043",pointHighlightFill:"#fe5043",pointHighlightStroke:"#fe5043",data:["25"," 18"," 16"," 17"," 20"," 25"," 30"," 35"]},{label:"Two",backgroundColor:"rgba(84,114,210,0.2)",borderColor:"#5472d2",pointColor:"#5472d2",pointStrokeColor:"#5472d2",highlightFill:"#3c5ecc",highlightStroke:"#3c5ecc",pointHighlightFill:"#3c5ecc",pointHighlightStroke:"#3c5ecc",data:["10"," 15"," 20"," 25"," 27"," 25"," 23"," 25"]}]}})}if(this.checkElement("class","big-data-services-chart")){var r=d("#canvas"),c=new Chart(r,{type:"pie",data:{datasets:[{data:[60,40],backgroundColor:["#fe6c61","#5471d2"]}],labels:["One","Two"]},options:{maintainAspectRatio:!1,legend:{display:!1}}});document.getElementById("js-legend").innerHTML=c.generateLegend()}if(this.checkElement("class","data-science-consulting-chart")){var h=d("#canvas"),v=new Chart(h,{type:"doughnut",data:{datasets:[{data:[60,40,40],backgroundColor:["#f7be68","#fe6c61","#5471d2"]}],labels:["One","Two","Three"]},options:{maintainAspectRatio:!1,legend:{display:!1}}});document.getElementById("js-legend").innerHTML=v.generateLegend()}if(this.checkElement("class","data-visualization-chart")){var f=d("#canvas"),m=new Chart(f,{type:"bar",data:{labels:["JAN"," FEB"," MAR"," APR"," MAY"," JUN"," JUL"," AUG"],datasets:[{label:"One",data:[20,28,20,25,27,25,23,25],fillColor:"#5472d2",strokeColor:"#5472d2",pointColor:"#5472d2",pointStrokeColor:"#5472d2",highlightFill:"#3c5ecc",highlightStroke:"#3c5ecc",pointHighlightFill:"#3c5ecc",pointHighlightStroke:"#3c5ecc",backgroundColor:"#5471d2"},{label:"Two",data:[25,18,16,17,20,25,30,38],fillColor:"#fe6c61",strokeColor:"#fe6c61",pointColor:"#fe6c61",pointStrokeColor:"#fe6c61",highlightFill:"#fe5043",highlightStroke:"#fe5043",pointHighlightFill:"#fe5043",pointHighlightStroke:"#fe5043",backgroundColor:"#fe6c61"}]},options:{scaleBeginAtZero:!0,legend:{display:!1}}});document.getElementById("js-legend").innerHTML=m.generateLegend()}}},accordion:function(){this.checkElement("class","iq-faq")&&(jQuery(".iq-faq .iq-block .iq-details").hide(),jQuery(".iq-faq .iq-block:first").addClass("iq-active").children().slideDown("slow"),jQuery(".iq-faq .iq-block").on("click",(function(){jQuery(this).children("div").is(":hidden")&&(jQuery(".iq-faq .iq-block").removeClass("iq-active").children("div").slideUp("slow"),jQuery(this).toggleClass("iq-active").children("div").slideDown("slow"))})))}}},999:function(e,t,o){var map={"./af":849,"./af.js":849,"./ar":850,"./ar-dz":851,"./ar-dz.js":851,"./ar-kw":852,"./ar-kw.js":852,"./ar-ly":853,"./ar-ly.js":853,"./ar-ma":854,"./ar-ma.js":854,"./ar-sa":855,"./ar-sa.js":855,"./ar-tn":856,"./ar-tn.js":856,"./ar.js":850,"./az":857,"./az.js":857,"./be":858,"./be.js":858,"./bg":859,"./bg.js":859,"./bm":860,"./bm.js":860,"./bn":861,"./bn-bd":862,"./bn-bd.js":862,"./bn.js":861,"./bo":863,"./bo.js":863,"./br":864,"./br.js":864,"./bs":865,"./bs.js":865,"./ca":866,"./ca.js":866,"./cs":867,"./cs.js":867,"./cv":868,"./cv.js":868,"./cy":869,"./cy.js":869,"./da":870,"./da.js":870,"./de":871,"./de-at":872,"./de-at.js":872,"./de-ch":873,"./de-ch.js":873,"./de.js":871,"./dv":874,"./dv.js":874,"./el":875,"./el.js":875,"./en-au":876,"./en-au.js":876,"./en-ca":877,"./en-ca.js":877,"./en-gb":878,"./en-gb.js":878,"./en-ie":879,"./en-ie.js":879,"./en-il":880,"./en-il.js":880,"./en-in":881,"./en-in.js":881,"./en-nz":882,"./en-nz.js":882,"./en-sg":883,"./en-sg.js":883,"./eo":884,"./eo.js":884,"./es":885,"./es-do":886,"./es-do.js":886,"./es-mx":887,"./es-mx.js":887,"./es-us":888,"./es-us.js":888,"./es.js":885,"./et":889,"./et.js":889,"./eu":890,"./eu.js":890,"./fa":891,"./fa.js":891,"./fi":892,"./fi.js":892,"./fil":893,"./fil.js":893,"./fo":894,"./fo.js":894,"./fr":895,"./fr-ca":896,"./fr-ca.js":896,"./fr-ch":897,"./fr-ch.js":897,"./fr.js":895,"./fy":898,"./fy.js":898,"./ga":899,"./ga.js":899,"./gd":900,"./gd.js":900,"./gl":901,"./gl.js":901,"./gom-deva":902,"./gom-deva.js":902,"./gom-latn":903,"./gom-latn.js":903,"./gu":904,"./gu.js":904,"./he":905,"./he.js":905,"./hi":906,"./hi.js":906,"./hr":907,"./hr.js":907,"./hu":908,"./hu.js":908,"./hy-am":909,"./hy-am.js":909,"./id":910,"./id.js":910,"./is":911,"./is.js":911,"./it":912,"./it-ch":913,"./it-ch.js":913,"./it.js":912,"./ja":914,"./ja.js":914,"./jv":915,"./jv.js":915,"./ka":916,"./ka.js":916,"./kk":917,"./kk.js":917,"./km":918,"./km.js":918,"./kn":919,"./kn.js":919,"./ko":920,"./ko.js":920,"./ku":921,"./ku.js":921,"./ky":922,"./ky.js":922,"./lb":923,"./lb.js":923,"./lo":924,"./lo.js":924,"./lt":925,"./lt.js":925,"./lv":926,"./lv.js":926,"./me":927,"./me.js":927,"./mi":928,"./mi.js":928,"./mk":929,"./mk.js":929,"./ml":930,"./ml.js":930,"./mn":931,"./mn.js":931,"./mr":932,"./mr.js":932,"./ms":933,"./ms-my":934,"./ms-my.js":934,"./ms.js":933,"./mt":935,"./mt.js":935,"./my":936,"./my.js":936,"./nb":937,"./nb.js":937,"./ne":938,"./ne.js":938,"./nl":939,"./nl-be":940,"./nl-be.js":940,"./nl.js":939,"./nn":941,"./nn.js":941,"./oc-lnc":942,"./oc-lnc.js":942,"./pa-in":943,"./pa-in.js":943,"./pl":944,"./pl.js":944,"./pt":945,"./pt-br":946,"./pt-br.js":946,"./pt.js":945,"./ro":947,"./ro.js":947,"./ru":948,"./ru.js":948,"./sd":949,"./sd.js":949,"./se":950,"./se.js":950,"./si":951,"./si.js":951,"./sk":952,"./sk.js":952,"./sl":953,"./sl.js":953,"./sq":954,"./sq.js":954,"./sr":955,"./sr-cyrl":956,"./sr-cyrl.js":956,"./sr.js":955,"./ss":957,"./ss.js":957,"./sv":958,"./sv.js":958,"./sw":959,"./sw.js":959,"./ta":960,"./ta.js":960,"./te":961,"./te.js":961,"./tet":962,"./tet.js":962,"./tg":963,"./tg.js":963,"./th":964,"./th.js":964,"./tk":965,"./tk.js":965,"./tl-ph":966,"./tl-ph.js":966,"./tlh":967,"./tlh.js":967,"./tr":968,"./tr.js":968,"./tzl":969,"./tzl.js":969,"./tzm":970,"./tzm-latn":971,"./tzm-latn.js":971,"./tzm.js":970,"./ug-cn":972,"./ug-cn.js":972,"./uk":973,"./uk.js":973,"./ur":974,"./ur.js":974,"./uz":975,"./uz-latn":976,"./uz-latn.js":976,"./uz.js":975,"./vi":977,"./vi.js":977,"./x-pseudo":978,"./x-pseudo.js":978,"./yo":979,"./yo.js":979,"./zh-cn":980,"./zh-cn.js":980,"./zh-hk":981,"./zh-hk.js":981,"./zh-mo":982,"./zh-mo.js":982,"./zh-tw":983,"./zh-tw.js":983};function l(e){var t=n(e);return o(t)}function n(e){if(!o.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}l.keys=function(){return Object.keys(map)},l.resolve=n,e.exports=l,l.id=999}}]);