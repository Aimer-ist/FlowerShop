(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5c3661cf"],{"45fc":function(t,e,a){"use strict";var s=a("23e7"),i=a("b727").some,r=a("a640"),o=a("ae40"),c=r("some"),n=o("some");s({target:"Array",proto:!0,forced:!c||!n},{some:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},"4b7a":function(t,e,a){"use strict";a("fb6a");e["a"]=function(t,e){if(!t)return"";if(t.length>e){var a="".concat(t.slice(0,e)," ...");return a}return t}},5950:function(t,e,a){},8099:function(t,e,a){"use strict";var s=a("5950"),i=a.n(s);i.a},ed84:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"container-fluid container-lg grid-setting"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-3 col-xl-2",attrs:{"data-aos":"fade-down"}},[a("ul",{staticClass:"list-group mb-3 text-center"},[a("li",{staticClass:"list-group-item border border-light disabled px-0"},[t._v("CATEGORY")]),a("li",{staticClass:"list-group-item",class:{active:"all"===t.nowCategoryStatus},on:{click:function(e){return t.switchCategoryStatus("all")}}},[t._v(" ALL")]),t._l(t.categories,(function(e){return a("li",{key:e,staticClass:"list-group-item",class:{active:t.nowCategoryStatus===""+e},on:{click:function(a){return t.switchCategoryStatus(e)}}},[t._v(" "+t._s(e))])}))],2)]),a("div",{staticClass:"col-sm-9 col-xl-10"},[a("ul",{staticClass:"row list-unstyled row-cols-1 row-cols-md-2 row-cols-xl-3",attrs:{"data-aos":"fade-up"}},t._l(t.filterProducts,(function(e){return a("li",{key:e.id,staticClass:"col mb-6"},[a("div",{staticClass:"card hover--shadow"},[a("router-link",{staticClass:"text-decoration-none position-relative",attrs:{to:{name:"ProductDetail",params:{productId:""+e.id}}}},[a("div",{staticClass:"favorite position-absolute shadow-black-30 hover--enlarge"},[t.isFavorite(e.id)?t._e():a("a",{staticClass:"text-white",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.addFavorite(e.id,e.title,e.price,e.imageUrl)}}},[a("i",{staticClass:"far fa-heart fa-lg"})]),t.isFavorite(e.id)?a("a",{staticClass:"text-danger-300",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.removeFavorite(e.id)}}},[a("i",{staticClass:"fas fa-heart fa-lg"})]):t._e()]),a("div",{staticClass:"bg-cover rounded-top",style:"background-image: url("+e.imageUrl+"); padding-top: 70%;"}),a("div",{staticClass:"card-body d-flex flex-column"},[a("div",{staticClass:"d-flex justify-content-between"},[a("h2",{staticClass:"h4 card-title"},[t._v(t._s(e.title))]),a("h3",{staticClass:"h6 font-weight-normal"},[a("i",{staticClass:"fas fa-tag mr-2"}),t._v(t._s(e.category))])]),a("p",{staticClass:"m-3 text-muted"},[t._v(t._s(t._f("contentLength")(e.content,20)))]),a("div",{staticClass:"d-flex justify-content-between mt-auto"},[a("p",{staticClass:"text-gray mb-0"},[t._v("原價 "),a("del",[t._v(t._s(t._f("currency")(e.origin_price)))])]),a("h4",{staticClass:"h5 text-danger-500 font-family-roboto"},[t._v(" NT "+t._s(t._f("currency")(e.price)))])])]),a("div",{staticClass:"card-footer"},[a("a",{staticClass:"d-block text-decoration-none text-brown",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.addCart(e.id)}}},[t.status.itemLodingId===e.id?a("i",{staticClass:"fas fa-spinner fa-spin mx-1"}):t._e(),t._v(" 加入購物車")])])])],1)])})),0)])])])},i=[],r=(a("4de4"),a("d81d"),a("45fc"),a("ac1f"),a("5319"),a("5530")),o=a("4b7a"),c=a("2f62"),n={filters:{contentLength:o["a"]},data:function(){return{nowCategoryStatus:"all"}},computed:Object(r["a"])(Object(r["a"])(Object(r["a"])({},Object(c["c"])(["status"])),Object(c["c"])("productModules",["categories"])),{},{filterProducts:function(){var t=this,e=t.$store.state.productModules.filterProducts;return"all"!==t.nowCategoryStatus?e.filter((function(e){return e.category===t.nowCategoryStatus})):e}}),methods:{getRouteQuery:function(){this.$route.query.category&&(this.nowCategoryStatus=this.$route.query.category)},switchCategoryStatus:function(t){this.nowCategoryStatus=t,this.$router.replace({query:{category:t}})},addCart:function(t){this.$store.dispatch("cartModules/addCart",{id:t})},addFavorite:function(t,e,a,s){var i={id:t,title:e,price:a,imageUrl:s};this.$store.dispatch("favoriteModules/addFavorite",i)},isFavorite:function(t){return this.$store.state.favoriteModules.favorites.map((function(t){return t.id})).some((function(e){return e===t}))},removeFavorite:function(t){this.$store.dispatch("favoriteModules/removeFavorite",{id:t})}},created:function(){this.getRouteQuery()}},l=n,u=(a("8099"),a("2877")),d=Object(u["a"])(l,s,i,!1,null,"1ffbf986",null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-5c3661cf.92ed5c07.js.map