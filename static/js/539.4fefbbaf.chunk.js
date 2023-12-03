"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[539],{1687:function(e,n,t){t.d(n,{Ai:function(){return u},Hx:function(){return d},Tg:function(){return o},uV:function(){return l},x$:function(){return p}});var r=t(5861),a=t(7757),c=t.n(a),s=t(5294);s.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="18c8fab0f9903ab66ecca56d0e9a5347",o=function(){var e=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/trending/movie/day?api_key=".concat(i));case 3:return n=e.sent,e.abrupt("return",n.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/search/movie?query=".concat(n,"&api_key=").concat(i,"&include_adult=false&language=en-US&page=1"));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/movie/".concat(n,"?api_key=").concat(i,"&language=en-US"));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("movie/".concat(n,"/credits?api_key=").concat(i,"&language=en-US"));case 3:return t=e.sent,e.abrupt("return",t.data.cast);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("movie/".concat(n,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}()},3539:function(e,n,t){t.r(n),t.d(n,{default:function(){return S}});var r,a,c,s,i,o,u=t(5861),p=t(9439),l=t(7757),d=t.n(l),v=t(7689),h=t(1087),f=t(2791),x=t(1687),g=t(596),m=t(8820),j=t(168),Z=t(5867),w=Z.ZP.div(r||(r=(0,j.Z)(["\n  display: flex;\n  margin: 24px;\n  gap: 24px;\n"]))),k=Z.ZP.h1(a||(a=(0,j.Z)(["\n  margin-bottom: 20px;\n  margin-top: 20px;\n"]))),b=Z.ZP.h2(c||(c=(0,j.Z)(["\n  margin-bottom: 20px;\n  margin-top: 20px;\n"]))),y=Z.ZP.ul(s||(s=(0,j.Z)(["\n  text-decoration: none;\n"]))),_=Z.ZP.li(i||(i=(0,j.Z)(["\n  color: #494d4e;\n  padding: 10px;\n"]))),U=(0,Z.ZP)(h.rU)(o||(o=(0,j.Z)(["\n  color: #494d4e;\n\n  &.active {\n    color: #0c7d45;\n  }\n"]))),P=t(184),S=function(){var e,n,t=(0,v.UO)().movieId,r=(0,f.useState)(null),a=(0,p.Z)(r,2),c=a[0],s=a[1],i=(0,f.useState)(!1),o=(0,p.Z)(i,2),l=o[0],j=o[1],Z=(0,v.TH)(),S=(0,f.useRef)(null!==(e=null===(n=Z.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/movies");if((0,f.useEffect)((function(){function e(){return(e=(0,u.Z)(d().mark((function e(){var n;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j(!0),e.next=4,(0,x.x$)(t);case 4:(n=e.sent)&&s(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:return e.prev=11,j(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),c){var A=c.title,C=c.popularity,R=c.overview,H=c.genres,I=c.poster_path,O="https://image.tmdb.org/t/p/w".concat(300);return(0,P.jsxs)("div",{children:[(0,P.jsx)("hr",{}),l&&(0,P.jsx)(g.a,{}),(0,P.jsx)(h.rU,{to:S.current,children:(0,P.jsx)("button",{children:(0,P.jsx)(m.kyg,{})})}),c&&(0,P.jsxs)(w,{children:[(0,P.jsx)("img",{width:"300px",src:I?"".concat(O).concat(I):"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg",alt:A}),(0,P.jsxs)("div",{children:[(0,P.jsx)(k,{children:A}),(0,P.jsxs)("p",{children:["User score: ",C," "]}),(0,P.jsx)(b,{children:"Overview"}),(0,P.jsx)("p",{children:R}),(0,P.jsx)(b,{children:"Genres"}),(0,P.jsx)(y,{children:H.map((function(e){return(0,P.jsx)(_,{children:e.name},e.id)}))})]})]}),(0,P.jsx)("hr",{}),(0,P.jsxs)("div",{children:[(0,P.jsx)("h3",{children:"Additional information"}),(0,P.jsxs)(y,{children:[(0,P.jsx)(_,{children:(0,P.jsx)(U,{to:"cast",children:"Cast"})}),(0,P.jsx)("li",{children:(0,P.jsx)(U,{to:"reviews",children:"Reviews"})})]}),(0,P.jsx)("hr",{}),(0,P.jsx)(v.j3,{})]})]})}}}}]);
//# sourceMappingURL=539.4fefbbaf.chunk.js.map