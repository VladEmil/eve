(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e87df"],{"8a00":function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"p-3 row justify-content-center"},[s("div",{staticClass:"col-6"},[s("div",{attrs:{id:"menu"}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-3"},[s("button",{staticClass:"btn btn-primary",on:{click:t.routeHome}},[t._v("Ores to minerals")])])])]),s("div",{staticClass:"row",attrs:{id:"body"}},[s("div",{staticClass:"col-12 my-3"},[t._v("\n        Adds all ore fields and shows total reprocessed minerals.\n        Helps setting up contracts for all kinds of ores to obtain an aprox value of minerals.\n      ")]),s("div",{staticClass:"row col-12 align-items-center mb-5"},[s("div",{staticClass:"col-3"},[t._v("Reprocess efficiency percent * (example: 71.1)")]),s("div",{staticClass:"col-2"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.reprocessPercent,expression:"reprocessPercent"}],staticClass:"form-control",attrs:{id:"2",type:"text"},domProps:{value:t.reprocessPercent},on:{input:function(e){e.target.composing||(t.reprocessPercent=e.target.value)}}})]),s("div",{staticClass:"col-1"},[t._v("\n          %\n        ")])]),s("div",{staticClass:"form col-6"},[s("div",{staticClass:"row align-items-center mb-1"},[t._m(0),s("div",{staticClass:"col-5"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.arkonor,expression:"arkonor"}],staticClass:"form-control",attrs:{id:"1",type:"text"},domProps:{value:t.arkonor},on:{input:function(e){e.target.composing||(t.arkonor=e.target.value)}}})])]),s("div",{staticClass:"row align-items-center mb-1"},[t._m(1),s("div",{staticClass:"col-5"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.gneiss,expression:"gneiss"}],staticClass:"form-control",attrs:{id:"2",type:"text"},domProps:{value:t.gneiss},on:{input:function(e){e.target.composing||(t.gneiss=e.target.value)}}})])]),s("div",{staticClass:"row align-items-center mb-1"},[t._m(2),s("div",{staticClass:"col-5"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.crokite,expression:"crokite"}],staticClass:"form-control",attrs:{id:"3",type:"text"},domProps:{value:t.crokite},on:{input:function(e){e.target.composing||(t.crokite=e.target.value)}}})])]),s("div",{staticClass:"row align-items-center mb-1"},[t._m(3),s("div",{staticClass:"col-5"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.hedbergite,expression:"hedbergite"}],staticClass:"form-control",attrs:{id:"4",type:"text"},domProps:{value:t.hedbergite},on:{input:function(e){e.target.composing||(t.hedbergite=e.target.value)}}})])]),s("div",{staticClass:"row align-items-center mb-1"},[t._m(4),s("div",{staticClass:"col-5"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.hemorphite,expression:"hemorphite"}],staticClass:"form-control",attrs:{id:"5",type:"text"},domProps:{value:t.hemorphite},on:{input:function(e){e.target.composing||(t.hemorphite=e.target.value)}}})])]),s("div",{staticClass:"row align-items-center mb-1"},[t._m(5),s("div",{staticClass:"col-5"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.veldspar,expression:"veldspar"}],staticClass:"form-control",attrs:{id:"6",type:"text"},domProps:{value:t.veldspar},on:{input:function(e){e.target.composing||(t.veldspar=e.target.value)}}})])]),s("div",{staticClass:"row align-items-center mb-1"},[t._m(6),s("div",{staticClass:"col-5"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.omber,expression:"omber"}],staticClass:"form-control",attrs:{id:"7",type:"text"},domProps:{value:t.omber},on:{input:function(e){e.target.composing||(t.omber=e.target.value)}}})])]),s("div",{staticClass:"row align-items-center mb-1"},[t._m(7),s("div",{staticClass:"col-5"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.bistot,expression:"bistot"}],staticClass:"form-control",attrs:{id:"8",type:"text"},domProps:{value:t.bistot},on:{input:function(e){e.target.composing||(t.bistot=e.target.value)}}})])]),s("div",{staticClass:"row align-items-center mb-1"},[t._m(8),s("div",{staticClass:"col-5"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.jaspet,expression:"jaspet"}],staticClass:"form-control",attrs:{id:"9",type:"text"},domProps:{value:t.jaspet},on:{input:function(e){e.target.composing||(t.jaspet=e.target.value)}}})])]),s("div",{staticClass:"row align-items-center mb-1"},[t._m(9),s("div",{staticClass:"col-5"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.pyroxeres,expression:"pyroxeres"}],staticClass:"form-control",attrs:{id:"10",type:"text"},domProps:{value:t.pyroxeres},on:{input:function(e){e.target.composing||(t.pyroxeres=e.target.value)}}})])]),s("div",{staticClass:"row align-items-center mb-1"},[t._m(10),s("div",{staticClass:"col-5"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.spodumain,expression:"spodumain"}],staticClass:"form-control",attrs:{id:"11",type:"text"},domProps:{value:t.spodumain},on:{input:function(e){e.target.composing||(t.spodumain=e.target.value)}}})])]),s("div",{staticClass:"row align-items-center mb-1"},[t._m(11),s("div",{staticClass:"col-5"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.kernite,expression:"kernite"}],staticClass:"form-control",attrs:{id:"12",type:"text"},domProps:{value:t.kernite},on:{input:function(e){e.target.composing||(t.kernite=e.target.value)}}})])]),s("div",{staticClass:"row align-items-center mb-1"},[t._m(12),s("div",{staticClass:"col-5"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.plagioclase,expression:"plagioclase"}],staticClass:"form-control",attrs:{id:"13",type:"text"},domProps:{value:t.plagioclase},on:{input:function(e){e.target.composing||(t.plagioclase=e.target.value)}}})])]),s("div",{staticClass:"row align-items-center mb-1"},[t._m(13),s("div",{staticClass:"col-5"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.ochre,expression:"ochre"}],staticClass:"form-control",attrs:{id:"14",type:"text"},domProps:{value:t.ochre},on:{input:function(e){e.target.composing||(t.ochre=e.target.value)}}})])]),s("div",{staticClass:"row align-items-center mb-1"},[t._m(14),s("div",{staticClass:"col-5"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.scordite,expression:"scordite"}],staticClass:"form-control",attrs:{id:"15",type:"text"},domProps:{value:t.scordite},on:{input:function(e){e.target.composing||(t.scordite=e.target.value)}}})])])]),s("div",{staticClass:"result col-6 mt-4"},[s("div",{staticClass:"row mb-1"},[s("div",{staticClass:"col-2"},[t._v("\n            Tritanium\n          ")]),s("div",{staticClass:"col-2"},[t._v("\n            "+t._s(t.tritanium)+"\n          ")])]),s("div",{staticClass:"row mb-1"},[s("div",{staticClass:"col-2"},[t._v("\n            Pyerite\n          ")]),s("div",{staticClass:"col-2"},[t._v("\n            "+t._s(t.pyerite)+"\n          ")])]),s("div",{staticClass:"row mb-1"},[s("div",{staticClass:"col-2"},[t._v("\n            Mexallon\n          ")]),s("div",{staticClass:"col-2"},[t._v("\n            "+t._s(t.mexallon)+"\n          ")])]),s("div",{staticClass:"row mb-1"},[s("div",{staticClass:"col-2"},[t._v("\n            Isogen\n          ")]),s("div",{staticClass:"col-2"},[t._v("\n            "+t._s(t.isogen)+"\n          ")])]),s("div",{staticClass:"row mb-1"},[s("div",{staticClass:"col-2"},[t._v("\n            Nocxium\n          ")]),s("div",{staticClass:"col-2"},[t._v("\n            "+t._s(t.nocxium)+"\n          ")])]),s("div",{staticClass:"row mb-1"},[s("div",{staticClass:"col-2"},[t._v("\n            Zydrine\n          ")]),s("div",{staticClass:"col-2"},[t._v("\n            "+t._s(t.zydrine)+"\n          ")])]),s("div",{staticClass:"row mb-1"},[s("div",{staticClass:"col-2"},[t._v("\n            Megacyte\n          ")]),s("div",{staticClass:"col-2"},[t._v("\n            "+t._s(t.megacyte)+"\n          ")])])])])])])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-5"},[s("label",{attrs:{for:"1"}},[t._v("Flawless Arkonor")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-5"},[s("label",{attrs:{for:"2"}},[t._v("Brilliant Gneiss")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-5"},[s("label",{attrs:{for:"3"}},[t._v("Pellucid Crokite")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-5"},[s("label",{attrs:{for:"4"}},[t._v("Lustrous Hedbergite")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-5"},[s("label",{attrs:{for:"5"}},[t._v("Scintillating Hemorphite")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-5"},[s("label",{attrs:{for:"6"}},[t._v("Stable Veldspar")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-5"},[s("label",{attrs:{for:"7"}},[t._v("Platinoid omber")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-5"},[s("label",{attrs:{for:"8"}},[t._v("Cubic bistot")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-5"},[s("label",{attrs:{for:"9"}},[t._v("Immaculate Jaspet")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-5"},[s("label",{attrs:{for:"10"}},[t._v("Opulent Pyroxeres")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-5"},[s("label",{attrs:{for:"11"}},[t._v("Dazzling Spodumain")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-5"},[s("label",{attrs:{for:"12"}},[t._v("Resplendant Kernite")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-5"},[s("label",{attrs:{for:"13"}},[t._v("Sparkling Plagioclase")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-5"},[s("label",{attrs:{for:"14"}},[t._v("Jet Ochre")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-5"},[s("label",{attrs:{for:"15"}},[t._v("Glossy Scordite")])])}],i={data:function(){return{reprocessPercent:null,arkonor:null,gneiss:null,crokite:null,hedbergite:null,hemorphite:null,veldspar:null,omber:null,bistot:null,jaspet:null,pyroxeres:null,spodumain:null,kernite:null,plagioclase:null,ochre:null,scordite:null}},computed:{tritanium:function(){var t=parseInt(25300*Math.floor(+this.arkonor/100)*(this.reprocessPercent/100)),e=parseInt(24150*Math.floor(+this.crokite/100)*(this.reprocessPercent/100)),s=parseInt(2530*Math.floor(+this.hemorphite/100)*(this.reprocessPercent/100)),r=parseInt(477*Math.floor(+this.veldspar/100)*(this.reprocessPercent/100)),a=parseInt(920*Math.floor(+this.omber/100)*(this.reprocessPercent/100)),i=parseInt(404*Math.floor(+this.pyroxeres/100)*(this.reprocessPercent/100)),o=parseInt(64400*Math.floor(+this.spodumain/100)*(this.reprocessPercent/100)),n=parseInt(154*Math.floor(+this.kernite/100)*(this.reprocessPercent/100)),l=parseInt(123*Math.floor(+this.plagioclase/100)*(this.reprocessPercent/100)),c=parseInt(11500*Math.floor(+this.ochre/100)*(this.reprocessPercent/100)),p=parseInt(398*Math.floor(+this.scordite/100)*(this.reprocessPercent/100)),m=t+e+s+r+a+i+o+n+l+c+p;return m},pyerite:function(){var t=parseInt(2530*Math.floor(+this.gneiss/100)*(this.reprocessPercent/100)),e=parseInt(1150*Math.floor(+this.hedbergite/100)*(this.reprocessPercent/100)),s=parseInt(115*Math.floor(+this.omber/100)*(this.reprocessPercent/100)),r=parseInt(13800*Math.floor(+this.bistot/100)*(this.reprocessPercent/100)),a=parseInt(29*Math.floor(+this.pyroxeres/100)*(this.reprocessPercent/100)),i=parseInt(13859*Math.floor(+this.spodumain/100)*(this.reprocessPercent/100)),o=parseInt(245*Math.floor(+this.plagioclase/100)*(this.reprocessPercent/100)),n=parseInt(199*Math.floor(+this.scordite/100)*(this.reprocessPercent/100)),l=t+e+s+r+a+i+o+n;return l},mexallon:function(){var t=parseInt(2875*Math.floor(+this.arkonor/100)*(this.reprocessPercent/100)),e=parseInt(2760*Math.floor(+this.gneiss/100)*(this.reprocessPercent/100)),s=parseInt(403*Math.floor(+this.jaspet/100)*(this.reprocessPercent/100)),r=parseInt(58*Math.floor(+this.pyroxeres/100)*(this.reprocessPercent/100)),a=parseInt(2415*Math.floor(+this.spodumain/100)*(this.reprocessPercent/100)),i=parseInt(307*Math.floor(+this.kernite/100)*(this.reprocessPercent/100)),o=parseInt(123*Math.floor(+this.plagioclase/100)*(this.reprocessPercent/100)),n=e+t+s+r+a+i+o;return n},isogen:function(){var t=parseInt(345*Math.floor(+this.gneiss/100)*(this.reprocessPercent/100)),e=parseInt(230*Math.floor(+this.hedbergite/100)*(this.reprocessPercent/100)),s=parseInt(115*Math.floor(+this.hemorphite/100)*(this.reprocessPercent/100)),r=parseInt(98*Math.floor(+this.omber/100)*(this.reprocessPercent/100)),a=parseInt(518*Math.floor(+this.spodumain/100)*(this.reprocessPercent/100)),i=parseInt(154*Math.floor(+this.kernite/100)*(this.reprocessPercent/100)),o=parseInt(1840*Math.floor(+this.ochre/100)*(this.reprocessPercent/100)),n=t+e+s+r+a+i+o;return n},nocxium:function(){var t=parseInt(115*Math.floor(+this.hedbergite/100)*(this.reprocessPercent/100)),e=parseInt(138*Math.floor(+this.hemorphite/100)*(this.reprocessPercent/100)),s=parseInt(86*Math.floor(+this.jaspet/100)*(this.reprocessPercent/100)),r=parseInt(6*Math.floor(+this.pyroxeres/100)*(this.reprocessPercent/100)),a=parseInt(138*Math.floor(+this.ochre/100)*(this.reprocessPercent/100)),i=t+e+s+r+a;return i},zydrine:function(){var t=parseInt(115*Math.floor(+this.hedbergite/100)*(this.reprocessPercent/100)),e=parseInt(17*Math.floor(+this.hemorphite/100)*(this.reprocessPercent/100)),s=parseInt(518*Math.floor(+this.bistot/100)*(this.reprocessPercent/100)),r=parseInt(9*Math.floor(+this.jaspet/100)*(this.reprocessPercent/100)),a=t+e+s+r;return a},megacyte:function(){var t=parseInt(368*Math.floor(+this.arkonor/100)*(this.reprocessPercent/100)),e=parseInt(115*Math.floor(+this.bistot/100)*(this.reprocessPercent/100)),s=t+e;return s}},methods:{routeHome:function(){this.$router.push("/")}}},o=i,n=s("2877"),l=Object(n["a"])(o,r,a,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d0e87df.b4c97782.js.map