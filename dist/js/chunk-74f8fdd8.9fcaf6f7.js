(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74f8fdd8"],{1799:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return 1!==t.page.total_pages?a("div",[a("nav",{attrs:{"aria-label":"Page navigation"}},[a("ul",{staticClass:"pagination justify-content-center"},[a("li",{staticClass:"page-item",class:{disabled:!t.page.has_pre}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(e){return e.preventDefault(),t.ChanePage(t.page.current_page-1)}}},[t._m(0),a("span",{staticClass:"sr-only"},[t._v("Previous")])])]),t._l(t.page.total_pages,(function(e){return a("li",{key:e,staticClass:"page-item",class:{active:e==t.page.current_page}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.ChanePage(e)}}},[t._v(t._s(e))])])})),a("li",{staticClass:"page-item",class:{disabled:!t.page.has_next}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(e){return e.preventDefault(),t.ChanePage(t.page.current_page+1)}}},[t._m(1),a("span",{staticClass:"sr-only"},[t._v("Next")])])])],2)])]):t._e()},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{attrs:{"aria-hidden":"true"}},[a("i",{staticClass:"fas fa-arrow-left"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{attrs:{"aria-hidden":"true"}},[a("i",{staticClass:"fas  fa-arrow-right"})])}],l=(a("a9e3"),{props:["page"],data:function(){return{}},methods:{ChanePage:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.$emit("ChanePageKey",Number(t))}}}),r=l,i=a("2877"),c=Object(i["a"])(r,s,n,!1,null,null,null);e["a"]=c.exports},"4b7a":function(t,e,a){"use strict";a("fb6a");e["a"]=function(t,e){if(!t)return"";if(t.length>e){var a="".concat(t.slice(0,e)," ...");return a}return t}},d598:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),a("table",{staticClass:"table table-hover text-left"},[t._m(1),a("tbody",t._l(t.orders,(function(e){return a("tr",{key:e.id},[a("td",{staticClass:"align-middle text-center",attrs:{scope:"row"}},[e.is_paid?a("span",{staticClass:"text-success"},[t._v("付款")]):a("span",{staticClass:"text-danger"},[t._v("未付款")])]),a("td",{staticClass:"d-lg-table-cell d-none align-middle",attrs:{scope:"row"}},[t._v(t._s(e.id))]),a("td",{staticClass:"align-middle",attrs:{scope:"row"}},t._l(e.products,(function(e,s){return a("ul",{key:s,staticClass:"m-0 p-0"},[a("li",{staticClass:"list-unstyled",attrs:{scope:"row"}},[t._v(t._s(e.product.title))])])})),0),a("td",{staticClass:"d-sm-table-cell d-none align-middle text-right",attrs:{scope:"row"}},[t._v(" "+t._s(t._f("currency")(e.total)))]),a("td",{staticClass:"d-lg-table-cell d-none align-middle",attrs:{scope:"row"}},[t._v(t._s(t._f("date")(e.create_at)))]),a("td",{staticClass:"d-xl-table-cell d-none align-middle",attrs:{scope:"row"}},[t._v(" "+t._s(t._f("contentLength")(e.message,6)))])])})),0)]),a("Pagination",{attrs:{page:t.page},on:{ChanePageKey:t.getOrderList}})],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex justify-content-between flex-wrap flex-md-nowrap\n    align-items-center pt-3 pb-2"},[a("h2",{staticClass:"ml-5 my-2 font-weight-bold text-primary"},[t._v("訂單列表")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{staticClass:"text-center",attrs:{scope:"col"}},[t._v("是否付款")]),a("th",{staticClass:"d-lg-table-cell d-none",attrs:{scope:"col"}},[t._v("訂單編號")]),a("th",{attrs:{scope:"col"}},[t._v("購買品項")]),a("th",{staticClass:"d-sm-table-cell d-none text-right",attrs:{scope:"col"}},[t._v("應付金額")]),a("th",{staticClass:"d-lg-table-cell d-none",attrs:{scope:"col"}},[t._v("購買時間")]),a("th",{staticClass:"d-xl-table-cell d-none",attrs:{scope:"col"}},[t._v("留言")])])])}],l=a("5530"),r=a("1799"),i=a("2f62"),c=a("4b7a"),o={filters:{contentLength:c["a"]},components:{Pagination:r["a"]},computed:Object(l["a"])(Object(l["a"])({},Object(i["c"])(["page"])),Object(i["c"])("orderModules",["orders"])),methods:{getOrderList:function(t){this.$store.dispatch("orderModules/getOrderList",t)}},created:function(){this.getOrderList()}},d=o,u=a("2877"),p=Object(u["a"])(d,s,n,!1,null,null,null);e["default"]=p.exports}}]);
//# sourceMappingURL=chunk-74f8fdd8.9fcaf6f7.js.map