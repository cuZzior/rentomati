(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{12:function(e,t,n){e.exports={wrapper:"styles_wrapper__2-jsp",logo:"styles_logo__3QR2w",logoBg:"styles_logoBg__1GusQ",logoBg2:"styles_logoBg2__gEMSm",menu:"styles_menu__2EFKb",link:"styles_link__2-6Hr"}},13:function(e,t,n){e.exports={wrapper:"styles_wrapper__Q-bVg",data:"styles_data__2FedQ",picture:"styles_picture__oiIoW",actions:"styles_actions__2X8PI"}},14:function(e,t,n){e.exports={tag:"styles_tag__3z7U5",owned:"styles_owned__3foTe styles_tag__3z7U5",available:"styles_available__2Tp2T styles_tag__3z7U5",unavailable:"styles_unavailable__OoUC8 styles_tag__3z7U5"}},20:function(e,t,n){e.exports={wrapper:"styles_wrapper__14IG6",content:"styles_content__8i8OO"}},23:function(e,t,n){e.exports={wrapper:"styles_wrapper__FVQMb",isPrimary:"styles_isPrimary__2ZGYi"}},29:function(e,t,n){e.exports={wrapper:"styles_wrapper__dnxY3"}},31:function(e,t,n){e.exports={wrapper:"styles_wrapper__2-agE"}},51:function(e,t){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var s=n(1),i=n.n(s),r=n(27),c=n.n(r),a=n(10),o=n(2),l=n.p+"static/media/shop.505fce64.svg",d=n(12),u=n.n(d),j=n(0),b=function(){return Object(j.jsx)("div",{className:u.a.wrapper,children:Object(j.jsxs)("div",{className:u.a.logo,children:[Object(j.jsx)("div",{className:u.a.logoBg}),Object(j.jsx)("div",{className:u.a.logoBg2}),Object(j.jsx)("img",{src:l,width:30}),"Rent-o-mati!"]})})},_=n(9),v=n(28).agent();function m(e,t,n){var s=((null===n||void 0===n?void 0:n.method)||(t?"POST":"GET")).toLowerCase();return(t?v[s](e).send(t):v[s](e)).then((function(e){return null===e||void 0===e?void 0:e.body})).catch((function(e){throw new Error(e)}))}function p(e){return m("reservations/userId/".concat(e))}v.use((function(e){e.url="http://34.89.235.4/api/".concat(e.url)}));var O,h=n(29),f=n.n(h),x=function(e){var t=e.itemId,n=e.size,s=void 0===n?100:n;return Object(j.jsx)("div",{className:f.a.wrapper,style:{width:s,height:s},children:Object(j.jsx)("img",{src:"".concat("","/item-").concat(t,".jpg")})})};!function(e){e.AVAILABLE="AVAILABLE",e.UNAVAILABLE="UNAVAILABLE"}(O||(O={}));var y=n(14),w=n.n(y),g=function(e){var t=e.status;return 1===e.userId?Object(j.jsx)("div",{className:w.a.owned,children:"Currently owned"}):t===O.AVAILABLE?Object(j.jsx)("div",{className:w.a.available,children:"Available"}):Object(j.jsx)("div",{className:w.a.unavailable,children:"Unavailable"})},I=function(e){var t=e.dateString;if(!t)return null;var n=new Date(t);return Object(j.jsx)("span",{children:n.toLocaleDateString(void 0)})},N=n(8),B=n.n(N),A=function(e){var t,n,s=e.item,i=e.showStatus,r=void 0===i||i,c=e.currentReservation;return Object(j.jsxs)("div",{className:B.a.wrapper,children:[Object(j.jsx)("div",{className:B.a.title,children:s.name}),r&&Object(j.jsx)("div",{className:B.a.row,children:Object(j.jsx)(g,{status:s.status,userId:null===(t=s.rentedBy)||void 0===t?void 0:t.id})}),s.rentedBy&&1!==s.rentedBy.id&&Object(j.jsxs)("div",{className:B.a.row,children:[Object(j.jsx)("div",{className:B.a.label,children:"rented by:"}),null===(n=s.rentedBy)||void 0===n?void 0:n.name]}),c&&Object(j.jsxs)("div",{className:B.a.row,children:[Object(j.jsx)(I,{dateString:c.startDate})," \xa0-\xa0 ",Object(j.jsx)(I,{dateString:c.endDate})]})]})},S=n(20),L=n.n(S),E=function(e){var t=e.item,n=e.showStatus;return Object(j.jsxs)(a.b,{to:"/items/".concat(t.id),className:L.a.wrapper,children:[Object(j.jsx)(x,{itemId:t.id}),Object(j.jsx)("div",{className:L.a.content,children:Object(j.jsx)(A,{item:t,showStatus:n})})]})},k=n(31),P=n.n(k),C=function(){var e=Object(s.useState)([]),t=Object(_.a)(e,2),n=t[0],i=t[1],r=Object(s.useState)([]),c=Object(_.a)(r,2),a=c[0],o=c[1];Object(s.useEffect)((function(){m("items").then((function(e){i(e)})),p(1).then((function(e){o(e)}))}),[]);var l=n.filter((function(e){return a.some((function(t){return t.itemId===e.id}))})),d=n.filter((function(e){return!a.some((function(t){return t.itemId===e.id}))}));return Object(j.jsxs)("div",{className:P.a.wrapper,children:[l.length&&Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"my items:"}),l.map((function(e){return Object(j.jsx)(E,{item:e},e.id)}))]}),d.length&&Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"other items:"}),d.map((function(e){return Object(j.jsx)(E,{item:e},e.id)}))]})]})},U=n(32),V=n(33),T=n(23),z=n.n(T),D=function(e){var t=e.onClick,n=void 0===t?function(){}:t,s=e.isPrimary,i=e.children;return Object(j.jsx)("div",{className:Object(V.a)(z.a.wrapper,Object(U.a)({},z.a.isPrimary,s)),onClick:function(){return n()},children:i})},G=n(13),Q=n.n(G),F=function(){var e,t=Object(s.useState)(),n=Object(_.a)(t,2),i=n[0],r=n[1],c=Object(s.useState)([]),a=Object(_.a)(c,2),l=a[0],d=a[1],u=Object(o.h)(),b=Object(o.g)(),v=1===(null===i||void 0===i||null===(e=i.rentedBy)||void 0===e?void 0:e.id),h=l.find((function(e){return e.itemId===(null===i||void 0===i?void 0:i.id)}));function f(){var e;(e=u.itemId,m("item/".concat(e))).then((function(e){r(e)})),p(1).then((function(e){d(e)}))}function y(){var e,t;(null===i||void 0===i?void 0:i.id)&&(e=1,t=null===i||void 0===i?void 0:i.id,m("reservations/reserve",{userId:e,itemId:t},{method:"POST"})).then((function(){f()}))}function w(){var e;(null===i||void 0===i?void 0:i.id)&&(e=null===i||void 0===i?void 0:i.id,m("reservations/cancel",{itemId:e},{method:"POST"})).then((function(){f()}))}return Object(s.useEffect)((function(){f()}),[]),i?Object(j.jsxs)("div",{className:Q.a.wrapper,children:[Object(j.jsxs)("div",{className:Q.a.data,children:[Object(j.jsx)("div",{className:Q.a.picture,children:Object(j.jsx)(x,{itemId:i.id,size:150})}),Object(j.jsx)(A,{item:i,currentReservation:h})]}),Object(j.jsxs)("div",{className:Q.a.actions,children:[Object(j.jsx)(D,{onClick:function(){return b.goBack()},children:"Go back"}),i.status===O.AVAILABLE&&Object(j.jsx)(D,{isPrimary:!0,onClick:function(){return y()},children:"Book"}),v&&Object(j.jsx)(D,{isPrimary:!0,onClick:function(){return w()},children:"Mark as returned"})]})]}):null};n(64),n(65);c.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsxs)(a.a,{children:[Object(j.jsx)(b,{}),Object(j.jsxs)(o.d,{children:[Object(j.jsx)(o.b,{exact:!0,path:"/",children:Object(j.jsx)(o.a,{to:"/items"})}),Object(j.jsx)(o.b,{path:"/items/:itemId",children:Object(j.jsx)(F,{})}),Object(j.jsx)(o.b,{path:"/items",children:Object(j.jsx)(C,{})})]})]})}),document.getElementById("root"))},8:function(e,t,n){e.exports={wrapper:"styles_wrapper__3WD1L",title:"styles_title__1WPec",row:"styles_row__2h6hH",label:"styles_label__3FaYm"}}},[[66,1,2]]]);
//# sourceMappingURL=main.7c0d2b3e.chunk.js.map