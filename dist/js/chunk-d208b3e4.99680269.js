(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d208b3e4"],{"7bdd":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("v-layout",[s("v-card",{attrs:{"contextual-style":"dark"}},[s("span",{attrs:{slot:"header"},slot:"header"},[t._v("\n      My Account\n    ")]),s("div",{attrs:{slot:"body"},slot:"body"},[s("table",{staticClass:"table table-striped"},[s("thead",[s("tr",[s("th",[t._v("\n              First Name\n            ")]),s("th",[t._v("\n              Last Name\n            ")]),s("th",[t._v("\n              Email\n            ")])])]),s("tbody",[s("tr",[s("td",[t._v("\n              "+t._s(t.$store.state.account.firstName)+"\n            ")]),s("td",[t._v("\n              "+t._s(t.$store.state.account.lastName)+"\n            ")]),s("td",[t._v("\n              "+t._s(t.$store.state.account.email)+"\n            ")])])])])]),s("div",{attrs:{slot:"footer"},slot:"footer"},[t._v("\n      Made with love by Vivid Web\n    ")])])],1)},n=[],l=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark"},[s("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"home.index"}}},[t._v("\n      Vue 2 Boilerplate\n    ")]),s("button",{staticClass:"navbar-toggler",attrs:{type:"button"},on:{click:t.toggleMenu}},[s("span",{staticClass:"navbar-toggler-icon"})]),s("div",{staticClass:"collapse navbar-collapse",class:{show:t.menuCollapsed}},[s("ul",{staticClass:"navbar-nav mr-auto"},[s("router-link",{staticClass:"nav-item",attrs:{to:{name:"home.index"},"active-class":"active",tag:"li"}},[s("a",{staticClass:"nav-link"},[t._v("\n            Home\n          ")])]),s("router-link",{staticClass:"nav-item",attrs:{to:{name:"account.index"},"active-class":"active",tag:"li"}},[s("a",{staticClass:"nav-link"},[t._v("\n            Account\n          ")])])],1),s("span",{staticClass:"navbar-text"},[s("a",{staticClass:"btn btn-secondary",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.logout(a)}}},[s("i",{staticClass:"fa fa-sign-out"})])])])],1),s("div",{staticClass:"container pt-4"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col col-12"},[t._t("default")],2)])])])},o=[],r={name:"DefaultLayout",data:function(){return{menuCollapsed:!1}},methods:{logout:function(){this.$store.dispatch("auth/logout")},toggleMenu:function(){this.menuCollapsed=!this.menuCollapsed}}},c=r,i=s("2877"),u=Object(i["a"])(c,l,o,!1,null,null,null),d=u.exports,v=s("ae8d"),h={name:"AccountIndex",components:{VLayout:d,VCard:v["a"]}},b=h,m=Object(i["a"])(b,e,n,!1,null,null,null);a["default"]=m.exports},ae8d:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"card"},[t.hasSlot("header")?s("h4",{class:t.classNamesHeader},[t._t("header")],2):t._e(),t.hasSlot("body")?s("div",{staticClass:"card-body"},[t._t("body")],2):t._e(),t.hasSlot("footer")?s("div",{staticClass:"card-footer"},[t._t("footer")],2):t._e()])},n=[],l={methods:{hasSlot:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default";return!!this.$slots[t]}}},o={name:"Card",mixins:[l],props:{contextualStyle:{default:"primary",type:String,required:!1}},computed:{classNamesHeader:function(){var t=["card-header"];return this.contextualStyle?(t.push("bg-".concat(this.contextualStyle)),t.push("text-white")):t.push("bg-default"),t}}},r=o,c=s("2877"),i=Object(c["a"])(r,e,n,!1,null,null,null);a["a"]=i.exports}}]);
//# sourceMappingURL=chunk-d208b3e4.99680269.js.map