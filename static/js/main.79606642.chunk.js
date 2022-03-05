(this["webpackJsonpvolcano-tracker"]=this["webpackJsonpvolcano-tracker"]||[]).push([[0],{14:function(e,t,c){e.exports={details:"EventDetails_details__2G7TU",links:"EventDetails_links__3fPri"}},19:function(e,t,c){e.exports={loader:"Loader_loader__1tU_p"}},20:function(e,t,c){},26:function(e,t,c){},3:function(e,t,c){e.exports={container:"Map_container__3jri6",filter:"Map_filter__3UA95",toggle:"Map_toggle__1Ypf-",icon:"Map_icon__1CDEr",map:"Map_map__2831q"}},31:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),s=c(4),r=c.n(s),i=(c(26),c(16)),o=c.n(i),l=c(17),j=c(6),u=c(21),b=c(5),d=c(10),O=c.n(d),x=c(11),f=c.n(x),m=c(12),v=c.n(m),h=c(13),p=c.n(h),_=c(1),g=function(e){var t=e.type,c=e.onClick,n=e.fire,a=e.volcano,s=e.ice,r=e.storm;return Object(_.jsxs)("div",{className:"location-marker",onClick:c,children:[12===t&&a&&Object(_.jsx)("div",{children:Object(_.jsx)(b.a,{icon:O.a,className:"icon"})}),8===t&&n&&Object(_.jsx)("div",{children:Object(_.jsx)(b.a,{icon:f.a,className:"icon"})}),10===t&&r&&Object(_.jsx)("div",{children:Object(_.jsx)(b.a,{icon:p.a,className:"icon"})}),15===t&&s&&Object(_.jsx)("div",{children:Object(_.jsx)(b.a,{icon:v.a,className:"icon"})})]})},N=c(14),k=c.n(N),S=function(e){var t=e.info;return Object(_.jsxs)("div",{className:k.a.details,children:[Object(_.jsx)("h2",{children:t.title}),Object(_.jsx)("p",{children:"More Information:"}),Object(_.jsxs)("div",{children:[Object(_.jsx)("a",{href:t.url,target:"blank",className:k.a.links,children:t.url}),void 0!==t.urls&&t.urls!==t.url&&Object(_.jsx)("a",{href:t.urls,target:"blank",className:k.a.links,children:t.urls})]})]})},E=c(3),C=c.n(E),T=function(e){var t=e.eventData,c=e.center,a=e.zoom,s=Object(n.useState)(null),r=Object(j.a)(s,2),i=r[0],o=r[1],l=Object(n.useState)(!0),d=Object(j.a)(l,2),x=d[0],m=d[1],h=Object(n.useState)(!0),N=Object(j.a)(h,2),k=N[0],E=N[1],T=Object(n.useState)(!0),y=Object(j.a)(T,2),D=y[0],P=y[1],A=Object(n.useState)(!0),M=Object(j.a)(A,2),R=M[0],U=M[1],w=t.map((function(e){return Object(_.jsx)(g,{type:e.categories[0].id,lat:e.geometries[0].coordinates[1],lng:e.geometries[0].coordinates[0],fire:x,ice:R,storm:D,volcano:k,onClick:function(){return o({title:e.title,url:e.sources[0].url})}},e.id)}));return Object(_.jsxs)("div",{className:C.a.container,children:[Object(_.jsxs)("div",{className:C.a.filter,children:[Object(_.jsxs)("button",{type:"button",className:C.a.toggle,onClick:function(){return m(!x)},children:[Object(_.jsx)(b.a,{className:C.a.icon,icon:f.a})," Wildfires"]}),Object(_.jsxs)("button",{type:"button",className:C.a.toggle,onClick:function(){return E(!k)},children:[" ",Object(_.jsx)(b.a,{className:C.a.icon,icon:O.a}),"Volcanos"]}),Object(_.jsxs)("button",{type:"button",className:C.a.toggle,onClick:function(){return U(!R)},children:[" ",Object(_.jsx)(b.a,{className:C.a.icon,icon:v.a}),"Icebergs"]}),Object(_.jsxs)("button",{type:"button",className:C.a.toggle,onClick:function(){return P(!D)},children:[" ",Object(_.jsx)(b.a,{className:C.a.icon,icon:p.a}),"Tropical Storms"]})]}),Object(_.jsxs)("div",{className:C.a.map,children:[i&&Object(_.jsx)(S,{info:i}),Object(_.jsx)(u.a,{bootstrapURLKeys:{key:Object({NODE_ENV:"production",PUBLIC_URL:"/nasa-natural-event-tracker",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_MAP_API_KEY},defaultCenter:c,defaultZoom:a,children:w})]})]})};T.defaultProps={center:{lat:19.8968,lng:-155.5828},zoom:2};var y=T,D=c.p+"static/media/loading.8760a8a1.gif",P=c(19),A=c.n(P),M=function(){return Object(_.jsxs)("div",{className:A.a.loader,children:[Object(_.jsx)("img",{src:D,alt:"Loading"}),Object(_.jsx)("h1",{children:"Fetching Data..."})]})},R=c(20),U=c.n(R),w=function(){return Object(_.jsx)(n.Fragment,{children:Object(_.jsx)("header",{className:U.a.Header,children:"NASA Powered Natural Event Tracker"})})};var F=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(!1),r=Object(j.a)(s,2),i=r[0],u=r[1];return Object(n.useEffect)((function(){var e=function(){var e=Object(l.a)(o.a.mark((function e(){var t,c,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,fetch("https://eonet.sci.gsfc.nasa.gov/api/v2.1/events");case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,n=c.events,a(n),u(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(_.jsxs)(n.Fragment,{children:[Object(_.jsx)(w,{}),Object(_.jsx)("div",{children:i?Object(_.jsx)(M,{}):Object(_.jsx)(y,{eventData:c})}),";"]})};r.a.render(Object(_.jsx)(a.a.StrictMode,{children:Object(_.jsx)(F,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.79606642.chunk.js.map