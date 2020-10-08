function _createForOfIteratorHelper(l,n){var t;if("undefined"==typeof Symbol||null==l[Symbol.iterator]){if(Array.isArray(l)||(t=_unsupportedIterableToArray(l))||n&&l&&"number"==typeof l.length){t&&(l=t);var a=0,r=function(){};return{s:r,n:function(){return a>=l.length?{done:!0}:{done:!1,value:l[a++]}},e:function(l){throw l},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var e,u=!0,o=!1;return{s:function(){t=l[Symbol.iterator]()},n:function(){var l=t.next();return u=l.done,l},e:function(l){o=!0,e=l},f:function(){try{u||null==t.return||t.return()}finally{if(o)throw e}}}}function _unsupportedIterableToArray(l,n){if(l){if("string"==typeof l)return _arrayLikeToArray(l,n);var t=Object.prototype.toString.call(l).slice(8,-1);return"Object"===t&&l.constructor&&(t=l.constructor.name),"Map"===t||"Set"===t?Array.from(l):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(l,n):void 0}}function _arrayLikeToArray(l,n){(null==n||n>l.length)&&(n=l.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=l[t];return a}function _defineProperties(l,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(l,a.key,a)}}function _createClass(l,n,t){return n&&_defineProperties(l.prototype,n),t&&_defineProperties(l,t),l}function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{JLuJ:function(l,n,t){"use strict";t.r(n);var a=t("8Y7J"),r=function l(){_classCallCheck(this,l)},e=t("pMnS"),u=t("oBZk"),o=t("ZZ/e"),i=t("RGvM"),c=t("TX0D"),s=t("HlEa"),b=t("SVse"),d=t("mrSG"),f=t("dKRk"),h=t("gZPr"),p=function(){function l(n,t){_classCallCheck(this,l),this.apiJai=n,this.loadingController=t,this.loading=null}return _createClass(l,[{key:"ngOnInit",value:function(){this.loadCharts()}},{key:"presentLoading",value:function(){return d.b(this,void 0,void 0,regeneratorRuntime.mark((function l(){return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,this.loadingController.create({message:"Carregando..."});case 2:return this.loading=l.sent,l.next=5,this.loading.present();case 5:case"end":return l.stop()}}),l,this)})))}},{key:"loadCharts",value:function(){var l=this;this.presentLoading(),this.graficos=[];var n=[];n.push(this.apiJai.getTrabalhos()),n.push(this.apiJai.getAvaliacoes()),n.push(this.apiJai.getCheck()),Promise.all(n).then((function(n){l.trabalhos=n[0],l.avaliacoes=n[1],l.checks=n[2];var t,a=_createForOfIteratorHelper(h.a.getDays());try{var r=function(){var n=t.value,a=l.checks.filter((function(l){return l.data===n})),r=l.trabalhos.filter((function(l){return l.dia===n})),e={trabalhos:{title:n,chart:l.estadoTrabalhoChart(r,a,l.avaliacoes)},avaliadores:{title:n,chart:l.checkChart(r,a,l.avaliacoes)}};console.log(e),l.graficos.push(e)};for(a.s();!(t=a.n()).done;)r()}catch(u){a.e(u)}finally{a.f()}var e={trabalhos:{title:"Geral",chart:l.estadoTrabalhoChart(l.trabalhos,l.checks,l.avaliacoes)},avaliadores:{title:"Geral",chart:l.checkChart(l.trabalhos,l.checks,l.avaliacoes)}};l.graficos.push(e),l.loading&&l.loading.dismiss()}))}},{key:"estadoTrabalhoChart",value:function(l,n,t){var a=0,r=0,e=0;return l.map((function(l){t.findIndex((function(n){return n.id===l.idTrabalho}))>-1?a+=1:n.findIndex((function(n){return n.idAvaliador===l.idAvaliador}))>-1?e+=1:r+=1})),{chartType:"PieChart",dataTable:[["Estado","Trabalhos"],["Avaliado",a],["N\xe3o Avaliado",r],["Em Andamento",e]],options:{width:380,colors:["#32CD32","#FF0000","#FFA500"]}}}},{key:"checkChart",value:function(l,n,t){var a=l.map((function(l){return l.idAvaliador})).filter((function(l,n,t){return t.indexOf(l)===n})).length,r=n.map((function(l){return l.idAvaliador})).filter((function(l,n,t){return t.indexOf(l)===n})).length,e=n.filter((function(l){return"in-sub"===l.tipo})).map((function(l){return l.idAvaliador})).filter((function(l,n,t){return t.indexOf(l)===n})).length;return{chartType:"PieChart",dataTable:[["Check-in","Avaliadores"],["Efetuado",r-e],["Efetuado - Substituto",e],["N\xe3o Efetuado",a-r]],options:{width:380,colors:["#32CD32","#033DFC","#FF0000"]}}}}]),l}(),v=a.yb({encapsulation:0,styles:[[".welcome-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:35vh;overflow:hidden}"]],data:{}});function g(l){return a.Pb(0,[(l()(),a.Ab(0,0,null,null,27,"ion-row",[],null,null,null,u.C,u.l)),a.zb(1,49152,null,0,o.gb,[a.j,a.p,a.F],null,null),(l()(),a.Ab(2,0,null,0,12,"ion-col",[],null,null,null,u.w,u.f)),a.zb(3,49152,null,0,o.q,[a.j,a.p,a.F],null,null),(l()(),a.Ab(4,0,null,0,10,"ion-card",[],null,null,null,u.v,u.b)),a.zb(5,49152,null,0,o.j,[a.j,a.p,a.F],null,null),(l()(),a.Ab(6,0,null,0,4,"ion-card-header",[],null,null,null,u.t,u.d)),a.zb(7,49152,null,0,o.l,[a.j,a.p,a.F],null,null),(l()(),a.Ab(8,0,null,0,2,"ion-card-title",[],null,null,null,u.u,u.e)),a.zb(9,49152,null,0,o.n,[a.j,a.p,a.F],null,null),(l()(),a.Ob(10,0,["Trabalhos Avaliados - ",""])),(l()(),a.Ab(11,0,null,0,3,"ion-card-content",[],null,null,null,u.s,u.c)),a.zb(12,49152,null,0,o.k,[a.j,a.p,a.F],null,null),(l()(),a.Ab(13,0,null,0,1,"google-chart",[],null,null,null,i.b,i.a)),a.zb(14,573440,null,0,c.a,[a.p,s.a],{data:[0,"data"]},null),(l()(),a.Ab(15,0,null,0,12,"ion-col",[],null,null,null,u.w,u.f)),a.zb(16,49152,null,0,o.q,[a.j,a.p,a.F],null,null),(l()(),a.Ab(17,0,null,0,10,"ion-card",[],null,null,null,u.v,u.b)),a.zb(18,49152,null,0,o.j,[a.j,a.p,a.F],null,null),(l()(),a.Ab(19,0,null,0,4,"ion-card-header",[],null,null,null,u.t,u.d)),a.zb(20,49152,null,0,o.l,[a.j,a.p,a.F],null,null),(l()(),a.Ab(21,0,null,0,2,"ion-card-title",[],null,null,null,u.u,u.e)),a.zb(22,49152,null,0,o.n,[a.j,a.p,a.F],null,null),(l()(),a.Ob(23,0,["Check-in Avaliadores - ",""])),(l()(),a.Ab(24,0,null,0,3,"ion-card-content",[],null,null,null,u.s,u.c)),a.zb(25,49152,null,0,o.k,[a.j,a.p,a.F],null,null),(l()(),a.Ab(26,0,null,0,1,"google-chart",[],null,null,null,i.b,i.a)),a.zb(27,573440,null,0,c.a,[a.p,s.a],{data:[0,"data"]},null)],(function(l,n){l(n,14,0,n.context.$implicit.trabalhos.chart),l(n,27,0,n.context.$implicit.avaliadores.chart)}),(function(l,n){l(n,10,0,n.context.$implicit.trabalhos.title),l(n,23,0,n.context.$implicit.avaliadores.title)}))}function y(l){return a.Pb(0,[(l()(),a.Ab(0,0,null,null,6,"ion-header",[],null,null,null,u.z,u.i)),a.zb(1,49152,null,0,o.y,[a.j,a.p,a.F],null,null),(l()(),a.Ab(2,0,null,0,4,"ion-toolbar",[["color","primary"]],null,null,null,u.H,u.q)),a.zb(3,49152,null,0,o.zb,[a.j,a.p,a.F],{color:[0,"color"]},null),(l()(),a.Ab(4,0,null,0,2,"ion-title",[],null,null,null,u.G,u.p)),a.zb(5,49152,null,0,o.xb,[a.j,a.p,a.F],null,null),(l()(),a.Ob(-1,0,[" Gr\xe1ficos "])),(l()(),a.Ab(7,0,null,null,5,"ion-content",[],null,null,null,u.x,u.g)),a.zb(8,49152,null,0,o.r,[a.j,a.p,a.F],null,null),(l()(),a.Ab(9,0,null,0,3,"ion-grid",[],null,null,null,u.y,u.h)),a.zb(10,49152,null,0,o.x,[a.j,a.p,a.F],null,null),(l()(),a.pb(16777216,null,0,1,null,g)),a.zb(12,278528,null,0,b.h,[a.V,a.R,a.x],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var t=n.component;l(n,3,0,"primary"),l(n,12,0,t.graficos)}),null)}var m=a.wb("app-tab1",p,(function(l){return a.Pb(0,[(l()(),a.Ab(0,0,null,null,1,"app-tab1",[],null,null,null,y,v)),a.zb(1,114688,null,0,p,[f.a,o.Db],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),A=t("s7LF"),C=t("LtGu"),k=t("iInd");t.d(n,"Tab1PageModuleNgFactory",(function(){return F}));var F=a.xb(r,[],(function(l){return a.Ib([a.Jb(512,a.m,a.ib,[[8,[e.a,m]],[3,a.m],a.D]),a.Jb(4608,b.j,b.i,[a.z,[2,b.p]]),a.Jb(4608,o.a,o.a,[a.F,a.g]),a.Jb(4608,o.Eb,o.Eb,[o.a,a.m,a.w]),a.Jb(4608,o.Hb,o.Hb,[o.a,a.m,a.w]),a.Jb(4608,A.d,A.d,[]),a.Jb(4608,s.a,s.a,[a.z,[2,"googleChartsVersion"],[2,"mapsApiKey"]]),a.Jb(1073742336,b.b,b.b,[]),a.Jb(1073742336,o.Bb,o.Bb,[]),a.Jb(1073742336,A.c,A.c,[]),a.Jb(1073742336,A.a,A.a,[]),a.Jb(1073742336,C.a,C.a,[]),a.Jb(1073742336,k.o,k.o,[[2,k.t],[2,k.m]]),a.Jb(1073742336,r,r,[]),a.Jb(1024,k.k,(function(){return[[{path:"",component:p}]]}),[])])}))}}]);