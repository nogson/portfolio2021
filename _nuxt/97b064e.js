(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{474:function(t,e,n){var content=n(687);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(32).default)("adc8d714",content,!0,{sourceMap:!1})},686:function(t,e,n){"use strict";n(474)},687:function(t,e,n){var r=n(31)(!1);r.push([t.i,".content{line-height:1.8}.content-head{margin-bottom:40px}.top-image{margin-bottom:24px}.create-at{font-size:12px}",""]),t.exports=r},712:function(t,e,n){"use strict";n.r(e);n(80);var r=n(13),o=n(33),c=n(34),l=n(43),f=n(44),d=n(22),h=n(11),y=(n(69),n(30),n(12),n(54),n(23)),v=n(100),m=n.n(v);function O(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var j=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},x=function(t){Object(l.a)(n,t);var e=O(n);function n(){var t;return Object(o.a)(this,n),(t=e.apply(this,arguments)).blog=null,t.blogs=[],t.category=[],t}return Object(c.a)(n,[{key:"head",value:function(){return{title:this.blog.title,titleTemplate:"%s | Satofaction.net"}}},{key:"created",value:function(){var t=this.category.map((function(t){return t.category})),e=this.blogs;this.$nuxt.$emit("updateContent",{blogs:e,category:t})}},{key:"formatDateToString",value:function(t){return m()(t).format("YYYY/MM/DD")}}]),n}(y.Vue),R=x=j([Object(y.Component)({layout:"content",components:{},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,o=r.slug,e.next=4,n("blog/"+o).fetch();case 4:return e.t0=e.sent,e.next=7,n("blog").sortBy("create_at","desc").limit(10).fetch();case 7:return e.t1=e.sent,e.next=10,n("blog").only(["category"]).fetch();case 10:return e.t2=e.sent,e.abrupt("return",{blog:e.t0,blogs:e.t1,category:e.t2});case 12:case"end":return e.stop()}}),e)})))()}})],x),_=(n(686),n(25)),component=Object(_.a)(R,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"content"},[n("div",{staticClass:"content-head"},[n("h1",{staticClass:"title-main"},[t._v(t._s(t.blog.title))]),t._v(" "),n("p",{staticClass:"create-at"},[t._v(t._s(t.formatDateToString(t.blog.createdAt)))])]),t._v(" "),n("nuxt-content",{attrs:{document:t.blog}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);