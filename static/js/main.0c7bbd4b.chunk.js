(this.webpackJsonpncov19files=this.webpackJsonpncov19files||[]).push([[0],{138:function(e,t,a){e.exports=a.p+"static/media/zixuLogo.e0852cb2.svg"},139:function(e,t,a){e.exports=a.p+"static/media/githubBtnIcon.92c90f33.svg"},140:function(e,t,a){e.exports=a.p+"static/media/tensorflowIcon.65eb0388.svg"},141:function(e,t,a){e.exports=a.p+"static/media/githubIcon.f9bc636a.svg"},142:function(e,t,a){e.exports=a.p+"static/media/whoIcon.64f74604.png"},171:function(e,t,a){e.exports=a(358)},176:function(e,t,a){},177:function(e,t,a){},358:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(36),l=a.n(o),c=(a(176),a(77)),i=(a(177),a(128)),s=a.n(i),m=a(12),d=a(8),g=a(138),h=a.n(g),u=a(139),E=a.n(u),p=a(140),v=a.n(p),f=a(141),y=a.n(f),b=a(142),x=a.n(b);var w=function(){var e=Object(n.useState)([]),t=Object(c.a)(e,2),a=t[0],o=t[1],l=Object(n.useState)(!1),i=Object(c.a)(l,2),g=i[0],u=i[1];return Object(n.useEffect)((function(){var e=new XMLHttpRequest;e.open("GET","https://raw.githubusercontent.com/datasets/covid-19/master/data/time-series-19-covid-combined.csv",!1),e.send(null);for(var t=s()(e.responseText,{parseNumbers:!0}),a=[],n=0;n<t.length;n++)"Malaysia"===t[n]["Country/Region"]&&a.push(t[n]);for(var r=[],l=0;l<a.length;l++){var c={day:"Day "+(l+1),date:a[l].Date,recovered:parseInt(a[l].Recovered),dead:parseInt(a[l].Deaths),cases:parseInt(a[l].Confirmed)};r.push(c)}o(r)}),[]),r.a.createElement("div",{className:"content"},r.a.createElement(d.Modal,{open:g,onClose:function(e){u(!1)}},r.a.createElement(d.Modal.Title,null,"Warning"),r.a.createElement(d.Modal.Content,null,r.a.createElement("p",null,"You'll be redirected to GitHub.")),r.a.createElement(d.Modal.Action,{passive:!0},"Cancel"),r.a.createElement(d.Modal.Action,{onClick:function(){window.location.href="https://github.com/genesis331/ncov19"}},"OK")),r.a.createElement("section",{className:"header"},r.a.createElement("div",{className:"header-grid"},r.a.createElement("div",{style:{textAlign:"left",height:"100%"}},r.a.createElement("div",{className:"header-contents"},r.a.createElement("img",{src:h.a,alt:"zixuLogo",draggable:!1,style:{height:"2.8rem",verticalAlign:"middle",marginRight:"2rem"}}),r.a.createElement("div",{style:{display:"inline-block",verticalAlign:"middle"}},r.a.createElement(d.Text,{h4:!0,style:{fontFamily:"Volte Bold",margin:"0"}},"AI Experiments"),r.a.createElement(d.Text,{h5:!0,style:{margin:"0"}},"Malaysia nCoV-19 Cases Time Series Analysis")))),r.a.createElement("div",{style:{textAlign:"right",height:"100%"}},r.a.createElement("div",{className:"header-contents"},r.a.createElement(d.Button,{auto:!0,onClick:function(){return u(!0)}},r.a.createElement("img",{src:E.a,alt:"moon",style:{height:"1rem",verticalAlign:"middle",paddingRight:"0.5rem"}}),r.a.createElement("span",{style:{verticalAlign:"middle"}}," See Page Source Code")))))),r.a.createElement("section",{className:"chart"},r.a.createElement(m.d,null,r.a.createElement(m.b,{data:a},r.a.createElement(m.c,{strokeDasharray:"3 3"}),r.a.createElement(m.f,{dataKey:"day"}),r.a.createElement(m.g,null),r.a.createElement(m.e,{type:"monotone"}),r.a.createElement(m.a,{type:"monotone",dataKey:"cases",stroke:"#8884d8",fill:"#8884d8"}),r.a.createElement(m.a,{type:"monotone",dataKey:"recovered",stroke:"#0070F3",fill:"#3291FF"}),r.a.createElement(m.a,{type:"monotone",dataKey:"dead",stroke:"#7928CA",fill:"#FF0080"})))),r.a.createElement("section",{className:"footer"},r.a.createElement("div",{className:"footer-grid"},r.a.createElement("div",{style:{textAlign:"left",height:"100%"}},r.a.createElement("div",{className:"footer-contents"},r.a.createElement(d.Text,{h6:!0},"Disclaimer: Please understand that the data above may be outdated but is provided by the World Health Organization(WHO). It is used for personal research purposes only and is not recommended to use for reference purposes."))),r.a.createElement("div",{style:{textAlign:"right",height:"100%"}},r.a.createElement("div",{className:"footer-contents"},r.a.createElement("img",{src:x.a,alt:"whoIcon",draggable:!1,style:{height:"3rem",marginRight:"1rem"}}),r.a.createElement("img",{src:y.a,alt:"githubIcon",draggable:!1}),r.a.createElement("img",{src:v.a,alt:"tensorflowIcon",draggable:!1}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d.ZEITUIProvider,{theme:{type:"dark"}},r.a.createElement(d.CSSBaseline,null),r.a.createElement(w,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[171,1,2]]]);
//# sourceMappingURL=main.0c7bbd4b.chunk.js.map