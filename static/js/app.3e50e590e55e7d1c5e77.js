webpackJsonp([2],{100:function(e,t){e.exports={appName:"Git",headerNavigation:[{name:"ReasonDB",path:"/reasondb"}],landingPage:"/reasondb",topics:["news"],pages:[{route:"/reasondb",name:"ReasonDB",description:"<p>ReasonDB is a multi-model datastorage API that can sit on-top of almost any key/value store. It supports <a href='#/reasondb/tutorials/indexedKeyValue'>indexed key/value storage</a> (similar to localStorage), <a href='/#/reasondb/tutorials/graph'>graph storage</a> (similar to GunDB), and its own <a href='/#/reasondb/tutorials/SQLlike'>SQL like statements</a>.</p><p>Available across all these approaches is a <a href='/#/reasondb/tutorials/joqular'>pattern matching language</a> similar to but more extensive than that provided by MongoDB, <a href='/#/reasondb/tutorials/types'>extended type storage</a> (Infinity, NaN, ...), <a href='/#/reasondb/tutorials/fulltext'>full text indexing</a>, and multi-source <a href='/#/reasondb/tutorials/conflictresolution'>conflict resolution</a>.</p>",icon:"address-book",children:[{route:"/introduction",name:"Introduction",description:"detailed introduction",icon:"info-circle",topics:["introduction"],markdown:"/static/markdown/introduction.md"},{route:"/whatsNew",name:"Whats new ?",description:"recent announcements, news, latest and greatest",icon:"bullhorn",topics:["news"],markdown:"/static/markdown/whatsnew/current.md"},{route:"/tutorials",name:"Guides & Tutorials",description:"<p>The first three guides marked with an exclamation should be read before trying to use ReasonDB.</p>",icon:"lightbulb",topics:["guides","tutorials"],children:[{route:"/browservsnode",name:"Browser vs NodeJS Use",description:"How to use in a browser or with NodeJS",icon:"exclamation-triangle",topics:["browser","nodejs"],markdown:"/static/markdown/tutorials/browservsnode.md"},{route:"/joqular",name:"JOQULAR Pattern Matching",description:"MongoDB like JavaScript Query Language Representation",icon:"exclamation-triangle",topics:["key/value","localStorage"],markdown:"/static/markdown/tutorials/joqular.md"},{route:"/types",name:"Extended Type Storage & Indexing",description:"Types of data that can be stored and indexed",icon:"exclamation-triangle",topics:["types","indexing"],markdown:"/static/markdown/tutorials/types.md"},{route:"/cursors",name:"Cursors",description:"How query cursors work",icon:"database",topics:["cursors"],markdown:"/static/markdown/tutorials/cursors.md"},{route:"/startup",name:"Database start-up and storage engines",description:"How to start-up a database and use any key value storage engine",icon:"database",topics:[],markdown:"/static/markdown/tutorials/startup.md"},{route:"/indexedKeyValue",name:"Indexed Key/Value Storage",description:"How to use indexed key/value storage",icon:"code",topics:["key/value","localStorage"],markdown:"/static/markdown/tutorials/keyvalue.md"},{route:"/graph",name:"Graph Storage",description:"How to use graph storage",icon:"project-diagram",topics:["graph","GunDB","gun"],markdown:"/static/markdown/tutorials/graph.md"},{route:"/SQLlike",name:"SQL Like Statements",description:"How to use SQL like statements",icon:"database",topics:["SQL"],markdown:"/static/markdown/tutorials/sqllike.md"},{route:"/fulltext",name:"Full text indexing",description:"Using stem and trigram based full text indexing",icon:"file-word",topics:["fulltext","full-text"],markdown:"/static/markdown/tutorials/fulltext.md"},{route:"/conflictresolution",name:"Conflict Resolution",description:"How conflict resolution works",icon:"hands-helping",topics:["conflict","resolution"],markdown:"/static/markdown/tutorials/conflict.md"}]},{route:"/api",name:"API Documentation",description:"APIs",icon:"code",topics:["api"],children:[{route:"/introduction",name:"API Introduction",description:"how to read the API documentation",icon:"code",topics:["api","fulltext"],markdown:"/static/markdown/api/introduction.md"}]},{route:"/links",name:"Helpful Links",description:"Additional reading, links to other database APIs",topics:[],icon:"link",markdown:"/static/markdown/links.md"},{route:"/faq",name:"FAQs",description:"Frequently asked questions are covered here",topics:[],icon:"question-circle",markdown:"/static/markdown/FAQ.md"},{route:"/roadmap",name:"Our Roadmap",description:"Aligning our development plans with our stakeholders",topics:[],icon:"map-marked-alt",markdown:"/static/markdown/Roadmap.md"}]}]}},119:function(e,t,a){"use strict";var n=a(51),s=a(120),r=a(26),o=r(n.a,s.a,!1,null,null,null);t.a=o.exports},120:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",{staticClass:"header"},[a("div",{staticClass:"header__brand"},[a("svg",{ref:"nav__open",staticClass:"header__hamburger",attrs:{tabindex:"0",viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg"},on:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.openNavigation(t):null},click:e.openNavigation}},[a("path",{attrs:{d:"M424 394H89a8 8 0 0 1 0-16h335a8 8 0 0 1 0 16zM424 265H89a8 8 0 0 1 0-16h335a8 8 0 0 1 0 16zM424 135H89a8 8 0 0 1 0-16h335a8 8 0 0 1 0 16z"}})]),e._v(" "),e.isVisible||e.isDesktop?a("nav",{staticClass:"nav"},[a("svg",{ref:"nav__close",staticClass:"nav__icon nav__icon--close",attrs:{tabindex:"0",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg"},on:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.closeNavigation(t):null},click:e.closeNavigation}},[a("path",{attrs:{d:"M77.6 21.1l-28 28.1-28.1-28.1-1.9 1.9 28 28.1-28 28.1 1.9 1.9L49.6 53l28 28.1 2-1.9-28.1-28.1L79.6 23z"}})]),e._v(" "),a("ul",{staticClass:"nav__list"},e._l(e.list,function(t){return a("router-link",{key:t.path,staticClass:"nav__item",attrs:{to:t.path}},[e._v(" "+e._s(t.name)+"\n\t          ")])}))]):e._e()])])},s=[],r={render:n,staticRenderFns:s};t.a=r},121:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("Header",{on:{toggleMenu:e.toggleMenu}}),e._v(" "),a("main",[a("nav",{staticClass:"main__nav",class:{active:e.isNavOpen}},[a("div",{staticClass:"nav__search"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.searchKeywords,expression:"searchKeywords"}],staticClass:"nav__search-input",attrs:{placeholder:"Type to search"},domProps:{value:e.searchKeywords},on:{keyup:e.search,input:function(t){t.target.composing||(e.searchKeywords=t.target.value)}}}),e._v(" "),e.searchResultsVisible?a("svg",{staticClass:"nav__search-icon",attrs:{tabindex:"0",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 52 52"},on:{click:e.reset,keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.reset(t):null}}},[a("path",{attrs:{d:"M26 0C11.664 0 0 11.663 0 26s11.664 26 26 26 26-11.663 26-26S40.336 0 26 0zm0 50C12.767 50 2 39.233 2 26S12.767 2 26 2s24 10.767 24 24-10.767 24-24 24z"}}),a("path",{attrs:{d:"M35.707 16.293a.999.999 0 0 0-1.414 0L26 24.586l-8.293-8.293a.999.999 0 1 0-1.414 1.414L24.586 26l-8.293 8.293a.999.999 0 1 0 1.414 1.414L26 27.414l8.293 8.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L27.414 26l8.293-8.293a.999.999 0 0 0 0-1.414z"}})]):e._e()]),e._v(" "),a("vue-tree-navigation",{attrs:{items:e.tocItems,defaultOpenLevel:1}})],1),e._v(" "),e.searchResultsVisible?a("div",{staticClass:"container"},[e.searchResults.length?a("h1",{staticClass:"results__heading"},[e._v(e._s(e.searchResults.length)+' results matching "'+e._s(e.searchKeywords)+'"')]):a("h1",{staticClass:"results__heading"},[e._v('No results matching "'+e._s(e.searchKeywords)+'"')]),e._v(" "),a("ul",{staticClass:"results__search"},e._l(e.searchResults,function(t,n){return a("li",{key:n,staticClass:"result"},[a("header",{staticClass:"result__header"},[a("router-link",{attrs:{to:t.path}},[a("h2",{staticClass:"result__title"},[e._v(e._s(t.name))])]),e._v(" "),e._l(t.topics,function(t,n){return a("span",{key:n,staticClass:"tag",attrs:{tabindex:"0"},on:{keyup:function(a){if(!("button"in a)&&e._k(a.keyCode,"enter",13,a.key,"Enter"))return null;e.searchTopic(t)},click:function(a){e.searchTopic(t)}}},[e._v(e._s(t))])})],2),e._v(" "),a("p",[e._v(e._s(e._f("truncate")(t.text,300,"...")))])])}))]):a("router-view")],1)],1)},s=[],r={render:n,staticRenderFns:s};t.a=r},122:function(e,t,a){"use strict";var n=a(29),s=a(123),r=a(16);n.a.use(s.a),t.a=new s.a({routes:r.a.getRoutingConfig()})},16:function(e,t,a){"use strict";function n(e,t){e.path=e.route,e.breadCrumb=t?JSON.parse(c()(t.breadCrumb)):[];var a=null!=t?t.path+e.route:"/";e.breadCrumb.push({name:e.name,path:a}),e.component=p,null!=t&&(e.path=t.path+e.route);var s=[];if(e.children)for(var r in e.children){var o=e.children[r];s.push({name:o.name,description:o.description,path:e.path+o.route,icon:o.icon,bgColor:o.bgColor,owner:o.owner,topics:o.topics}),n(o,e)}e.meta={tiles:s.length>0?s:null,name:e.name,description:e.description,markdown:e.markdown,icon:e.icon,bgColor:e.bgColor,owner:e.owner,topics:e.topics,breadCrumb:e.breadCrumb},m[e.path]=e.meta}function s(e){var t=JSON.parse(c()(e.pages));for(var a in t){n(t[a],null)}return t.push({path:"/",redirect:e.landingPage}),t}var r=a(74),o=a.n(r),i=a(98),c=a.n(i),u=a(100),l=a.n(u),d=a(57),h=a.n(d),p=function(){return a.e(0).then(a.bind(null,129))},m={};t.a={getMetaById:function(e){return m[e]},getRoutingConfig:function(){return s(this.getBaseConfig())},getBaseConfig:function(){return l.a},getPages:function(){return this.getBaseConfig().pages},getStatus:function(){return new o.a(function(e,t){var a=window.location.pathname,n=a.substring(0,a.length-1)+"/static/content.json";h.a.get(n).then(function(t){e(t.data)}).catch(function(e){return t(e)})})}}},31:function(e,t,a){"use strict";var n=a(53),s=a.n(n),r=a(16),o=a(119);t.a={name:"app",data:function(){return{baseUrl:"https://pages.github.ibm.com/merlin/playbook/#",isNavOpen:!1,tocItems:r.a.getPages(),content:[],searchResultsVisible:!1,searchResults:null,searchKeywords:null}},components:{Header:o.a},created:function(){var e=this;r.a.getStatus().then(function(t){void 0!==t&&(e.content=t)}).catch(function(e){console.log("error",e)})},methods:{toggleMenu:function(){this.isNavOpen=!this.isNavOpen},search:function(e){var t=this;if(this.searchKeywords){var a=s()({},this.$route.query,{search:this.searchKeywords});this.$router.push({query:a}),this.searchResultsVisible=!0;this.searchKeywords.indexOf("topic:")>-1?this.searchResults=this.content.filter(function(e){for(var a=(e.topics||[]).map(function(e){return e.toLowerCase()}),n=!1,s=0;s<a.length;s++)a[s].indexOf(t.searchKeywords.toLowerCase().replace("topic:",""))>-1&&(n=!0);return n}):this.searchResults=this.content.filter(function(e){return(e.text||"").toLowerCase().indexOf(t.searchKeywords.toLowerCase())>-1||(e.name||"").toLowerCase().indexOf(t.searchKeywords.toLowerCase())>-1})}else{var n=this.$route.query;delete n.search,this.$router.push({query:n}),this.reset()}},searchTopic:function(e){var t="topic:"+e,a=s()({},this.$route.query,{search:t});this.searchKeywords=t,this.search(),this.$router.push({query:a})},reset:function(){this.searchResultsVisible=!1,this.searchKeywords="",this.searchResults=[]}},watch:{$route:{immediate:!0,handler:function(e,t){var a=window.location.href;if(a.indexOf("?")>-1){var n=a.substring(a.indexOf("?")+1),s=JSON.parse('{"'+decodeURIComponent(n.replace(/&/g,'","').replace(/=/g,'": "'))+'"}');s&&s.search&&(this.searchKeywords=s.search,this.search())}else this.searchKeywords="",this.searchResultsVisible=!1}}}}},51:function(e,t,a){"use strict";var n=a(16);t.a={name:"header-component",data:function(){return{isVisible:!1,isDesktop:!1,name:n.a.getBaseConfig().appName,list:n.a.getBaseConfig().headerNavigation}},created:function(){window.innerWidth>=780&&(this.isDesktop=!0),window.addEventListener("resize",this.handleResize)},beforeDestroy:function(){window.removeEventListener("resize",this.handleResize)},methods:{handleResize:function(e){e.currentTarget.innerWidth>=780?this.isDesktop=!0:this.isDesktop=!1},openNavigation:function(){this.$emit("toggleMenu")},closeNavigation:function(e){this.$emit("toggleMenu")}}}},58:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(29),s=a(61),r=a(122),o=a(124),i=a.n(o),c=a(52),u=a(125),l=(a.n(u),a(126));n.a.use(i.a),c.library.add(l.s,l.z,l.l,l._25,l._10,l.T,l.Y,l._9,l._30,l.M,l.H,l.I,l._14,l.W,l._16,l._29,l.D,l.C,l._24,l._21,l.P,l.B,l._13,l._0,l.w,l.V,l._6,l.j,l._27,l._3,l.c,l.q,l.Q,l._28,l.S,l.F,l.t,l._17,l.f,l.G,l._20,l.x,l.a,l.e,l.A,l.n,l.z,l._11,l.R,l._32,l.u,l._2,l.E,l.U,l._23,l._22,l._4,l.X,l.g,l._12,l._19,l.y,l._5,l._15,l.p,l.J,l._8,l.Z,l.h,l._26,l.d,l.k,l.v,l.m,l.O,l.i,l.K,l.b,l.N,l._7,l._18,l._1,l._31,l.r,l.o,l.L);var d=function(e,t,a){a=a||"...";var n=document.createElement("div");n.innerHTML=e;var s=n.textContent;return s.length>t?s.slice(0,t)+a:s};n.a.filter("truncate",d),n.a.component("font-awesome-icon",u.FontAwesomeIcon),n.a.config.productionTip=!1,new n.a({el:"#app",router:r.a,render:function(e){return e(s.a)}})},61:function(e,t,a){"use strict";function n(e){a(62)}var s=a(31),r=a(121),o=a(26),i=n,c=o(s.a,r.a,!1,i,null,null);t.a=c.exports},62:function(e,t){}},[58]);
//# sourceMappingURL=app.3e50e590e55e7d1c5e77.js.map