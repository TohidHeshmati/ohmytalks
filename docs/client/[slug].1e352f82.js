import{S as e,i as t,s as l,E as n,a as s,b as i,d as a,f as r,h as c,l as o,A as d,B as p,C as u,c as h,e as $,j as f,k as m,t as g,m as v,u as w,n as y,o as b,p as x,F as L,q as E,r as k,G as z,H as D,I as T,v as C,w as H,x as M,y as A,z as I,J as F,g as B,D as N}from"./client.87cf1481.js";import{S,c as Y,M as P,A as W}from"./courses.8b213d85.js";const j={color:"currentColor",class:"",opacity:.1,centered:!1,spreadingDuration:".4s",spreadingDelay:"0s",spreadingTimingFunction:"linear",clearingDuration:"1s",clearingDelay:"0s",clearingTimingFunction:"ease-in-out"};function R(e,t={}){e.stopImmediatePropagation();const l={...j,...t},n=!!e.touches&&!!e.touches[0],s=n?e.touches[0].currentTarget:e.currentTarget,i=document.createElement("div"),a=i.style;i.className=`material-ripple ${l.class}`,a.position="absolute",a.color="inherit",a.borderRadius="50%",a.pointerEvents="none",a.width="100px",a.height="100px",a.marginTop="-50px",a.marginLeft="-50px",s.appendChild(i),a.opacity=l.opacity,a.transition=`transform ${l.spreadingDuration} ${l.spreadingTimingFunction} ${l.spreadingDelay},opacity ${l.clearingDuration} ${l.clearingTimingFunction} ${l.clearingDelay}`,a.transform="scale(0) translate(0,0)",a.background=l.color;const r=s.getBoundingClientRect();if(l.centered)a.top=r.height/2+"px",a.left=r.width/2+"px";else{const t=n?e.touches[0].clientY:e.clientY,l=n?e.touches[0].clientX:e.clientX;a.top=t-r.top+"px",a.left=l-r.left+"px"}return a.transform=`scale(${.02*Math.max(r.width,r.height)}) translate(0,0)`,i}var V=(e,t={})=>{let l,n=t,s=!1,i=!1;const a=e=>{l=R(e,n)},r=()=>function(e){e&&(e.addEventListener("transitionend",(t=>{"opacity"===t.propertyName&&e.remove()})),e.style.opacity=0)}(l),c=e=>{i||13!==e.keyCode&&32!==e.keyCode||(l=R(e,{...n,centered:!0}),i=!0)},o=()=>{i=!1,r()};function d(){e.classList.add("s-ripple-container"),e.addEventListener("pointerdown",a),e.addEventListener("pointerup",r),e.addEventListener("pointerleave",r),e.addEventListener("keydown",c),e.addEventListener("keyup",o),s=!1}function p(){e.classList.remove("s-ripple-container"),e.removeEventListener("pointerdown",a),e.removeEventListener("pointerup",r),e.removeEventListener("pointerleave",r),e.removeEventListener("keydown",c),e.removeEventListener("keyup",o),s=!0}return n&&d(),{update(e){n=e,n&&s?d():n||s||p()},destroy:p}};function K(e){let t,l,d,p=e[10]&&O(e);return{c(){t=n("svg"),l=n("path"),p&&p.c(),this.h()},l(e){t=s(e,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0},1);var n=i(t);l=s(n,"path",{d:!0},1);var r=i(l);p&&p.l(r),r.forEach(a),n.forEach(a),this.h()},h(){r(l,"d",e[9]),r(t,"xmlns","http://www.w3.org/2000/svg"),r(t,"width",e[0]),r(t,"height",e[1]),r(t,"viewBox",d="0 0 "+e[4]+" "+e[5])},m(e,n){c(e,t,n),o(t,l),p&&p.m(l,null)},p(e,n){e[10]?p?p.p(e,n):(p=O(e),p.c(),p.m(l,null)):p&&(p.d(1),p=null),512&n&&r(l,"d",e[9]),1&n&&r(t,"width",e[0]),2&n&&r(t,"height",e[1]),48&n&&d!==(d="0 0 "+e[4]+" "+e[5])&&r(t,"viewBox",d)},d(e){e&&a(t),p&&p.d()}}}function O(e){let t,l;return{c(){t=n("title"),l=d(e[10])},l(n){t=s(n,"title",{},1);var r=i(t);l=p(r,e[10]),r.forEach(a)},m(e,n){c(e,t,n),o(t,l)},p(e,t){1024&t&&u(l,e[10])},d(e){e&&a(t)}}}function X(e){let t,l,n,d,p,u,L,E=e[9]&&K(e);const k=e[13].default,z=h(k,e,e[12],null);return{c(){t=$("i"),E&&E.c(),l=f(),z&&z.c(),this.h()},l(e){t=s(e,"I",{"aria-hidden":!0,class:!0,"aria-label":!0,"aria-disabled":!0,style:!0});var n=i(t);E&&E.l(n),l=m(n),z&&z.l(n),n.forEach(a),this.h()},h(){r(t,"aria-hidden","true"),r(t,"class",n="s-icon "+e[2]),r(t,"aria-label",e[10]),r(t,"aria-disabled",e[8]),r(t,"style",e[11]),g(t,"spin",e[7]),g(t,"disabled",e[8])},m(n,s){c(n,t,s),E&&E.m(t,null),o(t,l),z&&z.m(t,null),p=!0,u||(L=v(d=S.call(null,t,{"icon-size":e[3],"icon-rotate":`${e[6]}deg`})),u=!0)},p(e,[s]){e[9]?E?E.p(e,s):(E=K(e),E.c(),E.m(t,l)):E&&(E.d(1),E=null),z&&z.p&&4096&s&&w(z,k,e,e[12],s,null,null),(!p||4&s&&n!==(n="s-icon "+e[2]))&&r(t,"class",n),(!p||1024&s)&&r(t,"aria-label",e[10]),(!p||256&s)&&r(t,"aria-disabled",e[8]),(!p||2048&s)&&r(t,"style",e[11]),d&&y(d.update)&&72&s&&d.update.call(null,{"icon-size":e[3],"icon-rotate":`${e[6]}deg`}),132&s&&g(t,"spin",e[7]),260&s&&g(t,"disabled",e[8])},i(e){p||(b(z,e),p=!0)},o(e){x(z,e),p=!1},d(e){e&&a(t),E&&E.d(),z&&z.d(e),u=!1,L()}}}function _(e,t,l){let{$$slots:n={},$$scope:s}=t,{class:i=""}=t,{size:a="24px"}=t,{width:r=a}=t,{height:c=a}=t,{viewWidth:o="24"}=t,{viewHeight:d="24"}=t,{rotate:p=0}=t,{spin:u=!1}=t,{disabled:h=!1}=t,{path:$=null}=t,{label:f=null}=t,{style:m=null}=t;return e.$$set=e=>{"class"in e&&l(2,i=e.class),"size"in e&&l(3,a=e.size),"width"in e&&l(0,r=e.width),"height"in e&&l(1,c=e.height),"viewWidth"in e&&l(4,o=e.viewWidth),"viewHeight"in e&&l(5,d=e.viewHeight),"rotate"in e&&l(6,p=e.rotate),"spin"in e&&l(7,u=e.spin),"disabled"in e&&l(8,h=e.disabled),"path"in e&&l(9,$=e.path),"label"in e&&l(10,f=e.label),"style"in e&&l(11,m=e.style),"$$scope"in e&&l(12,s=e.$$scope)},e.$$.update=()=>{8&e.$$.dirty&&(l(0,r=a),l(1,c=a))},[r,c,i,a,o,d,p,u,h,$,f,m,s,n]}class q extends e{constructor(e){super(),t(this,e,_,X,l,{class:2,size:3,width:0,height:1,viewWidth:4,viewHeight:5,rotate:6,spin:7,disabled:8,path:9,label:10,style:11})}}var G="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z";const J=e=>({}),Z=e=>({});function Q(e){let t,l,n,d,p,u,D;const T=e[11].default,C=h(T,e,e[10],null);let H=e[8]&&U(e);return{c(){t=$("span"),C&&C.c(),l=f(),H&&H.c(),this.h()},l(e){t=s(e,"SPAN",{class:!0});var n=i(t);C&&C.l(n),l=m(n),H&&H.l(n),n.forEach(a),this.h()},h(){r(t,"class",n="s-chip "+e[1]+" size-"+e[3]),g(t,"outlined",e[4]),g(t,"pill",e[5]),g(t,"link",e[6]),g(t,"label",e[7]),g(t,"selected",e[2])},m(n,s){c(n,t,s),C&&C.m(t,null),o(t,l),H&&H.m(t,null),p=!0,u||(D=[v(d=V.call(null,t,e[6])),L(t,"click",e[12])],u=!0)},p(e,l){C&&C.p&&1024&l&&w(C,T,e,e[10],l,null,null),e[8]?H?(H.p(e,l),256&l&&b(H,1)):(H=U(e),H.c(),b(H,1),H.m(t,null)):H&&(E(),x(H,1,1,(()=>{H=null})),k()),(!p||10&l&&n!==(n="s-chip "+e[1]+" size-"+e[3]))&&r(t,"class",n),d&&y(d.update)&&64&l&&d.update.call(null,e[6]),26&l&&g(t,"outlined",e[4]),42&l&&g(t,"pill",e[5]),74&l&&g(t,"link",e[6]),138&l&&g(t,"label",e[7]),14&l&&g(t,"selected",e[2])},i(e){p||(b(C,e),b(H),p=!0)},o(e){x(C,e),x(H),p=!1},d(e){e&&a(t),C&&C.d(e),H&&H.d(),u=!1,z(D)}}}function U(e){let t,l,n,o;const d=e[11]["close-icon"],p=h(d,e,e[10],Z),u=p||function(e){let t,l;return t=new q({props:{path:G}}),{c(){C(t.$$.fragment)},l(e){H(t.$$.fragment,e)},m(e,n){M(t,e,n),l=!0},p:A,i(e){l||(b(t.$$.fragment,e),l=!0)},o(e){x(t.$$.fragment,e),l=!1},d(e){I(t,e)}}}();return{c(){t=$("div"),u&&u.c(),this.h()},l(e){t=s(e,"DIV",{class:!0});var l=i(t);u&&u.l(l),l.forEach(a),this.h()},h(){r(t,"class","s-chip__close")},m(s,i){c(s,t,i),u&&u.m(t,null),l=!0,n||(o=L(t,"click",e[9]),n=!0)},p(e,t){p&&p.p&&1024&t&&w(p,d,e,e[10],t,J,Z)},i(e){l||(b(u,e),l=!0)},o(e){x(u,e),l=!1},d(e){e&&a(t),u&&u.d(e),n=!1,o()}}}function ee(e){let t,l,n=e[0]&&Q(e);return{c(){n&&n.c(),t=D()},l(e){n&&n.l(e),t=D()},m(e,s){n&&n.m(e,s),c(e,t,s),l=!0},p(e,[l]){e[0]?n?(n.p(e,l),1&l&&b(n,1)):(n=Q(e),n.c(),b(n,1),n.m(t.parentNode,t)):n&&(E(),x(n,1,1,(()=>{n=null})),k())},i(e){l||(b(n),l=!0)},o(e){x(n),l=!1},d(e){n&&n.d(e),e&&a(t)}}}function te(e,t,l){let{$$slots:n={},$$scope:s}=t,{class:i=""}=t,{active:a=!0}=t,{selected:r=!1}=t,{size:c="default"}=t,{outlined:o=!1}=t,{pill:d=!1}=t,{link:p=!1}=t,{label:u=!1}=t,{close:h=!1}=t;const $=T();return e.$$set=e=>{"class"in e&&l(1,i=e.class),"active"in e&&l(0,a=e.active),"selected"in e&&l(2,r=e.selected),"size"in e&&l(3,c=e.size),"outlined"in e&&l(4,o=e.outlined),"pill"in e&&l(5,d=e.pill),"link"in e&&l(6,p=e.link),"label"in e&&l(7,u=e.label),"close"in e&&l(8,h=e.close),"$$scope"in e&&l(10,s=e.$$scope)},[a,i,r,c,o,d,p,u,h,function(e){l(0,a=!1),$("close",e)},s,n,function(t){F(e,t)}]}class le extends e{constructor(e){super(),t(this,e,te,ee,l,{class:1,active:0,selected:2,size:3,outlined:4,pill:5,link:6,label:7,close:8})}}function ne(e,t,l){const n=e.slice();return n[0]=t[l],n}function se(e){let t,l;return{c(){t=$("span"),l=d("OH MY TALKS"),this.h()},l(e){t=s(e,"SPAN",{slot:!0});var n=i(t);l=p(n,"OH MY TALKS"),n.forEach(a),this.h()},h(){r(t,"slot","title")},m(e,n){c(e,t,n),o(t,l)},d(e){e&&a(t)}}}function ie(e){let t,l=e[0]+"";return{c(){t=d(l)},l(e){t=p(e,l)},m(e,l){c(e,t,l)},p:A,d(e){e&&a(t)}}}function ae(e){let t,l;return t=new le({props:{class:"ma-2 green white-text",$$slots:{default:[ie]},$$scope:{ctx:e}}}),{c(){C(t.$$.fragment)},l(e){H(t.$$.fragment,e)},m(e,n){M(t,e,n),l=!0},p(e,l){const n={};8&l&&(n.$$scope={dirty:l,ctx:e}),t.$set(n)},i(e){l||(b(t.$$.fragment,e),l=!0)},o(e){x(t.$$.fragment,e),l=!1},d(e){I(t,e)}}}function re(e){let t,l,n,u,h,g,v,w,y,L,z,D,T,A=oe.title+"",F=oe.description+"";t=new W({props:{$$slots:{title:[se]},$$scope:{ctx:e}}});let S=oe.keywords,Y=[];for(let t=0;t<S.length;t+=1)Y[t]=ae(ne(e,S,t));const P=e=>x(Y[e],1,1,(()=>{Y[e]=null}));return{c(){C(t.$$.fragment),l=f(),n=$("div"),u=$("iframe"),g=f(),v=$("h1"),w=d(A),y=f(),L=$("p"),z=f(),D=$("div");for(let e=0;e<Y.length;e+=1)Y[e].c();this.h()},l(e){H(t.$$.fragment,e),l=m(e),n=s(e,"DIV",{class:!0});var r=i(n);u=s(r,"IFRAME",{style:!0,width:!0,height:!0,src:!0,title:!0,frameborder:!0,allow:!0,allowfullscreen:!0}),i(u).forEach(a),g=m(r),v=s(r,"H1",{class:!0});var c=i(v);w=p(c,A),c.forEach(a),y=m(r),L=s(r,"P",{}),i(L).forEach(a),z=m(r),D=s(r,"DIV",{style:!0});var o=i(D);for(let e=0;e<Y.length;e+=1)Y[e].l(o);o.forEach(a),r.forEach(a),this.h()},h(){B(u,"margin-top","50px"),r(u,"width","560"),r(u,"height","315"),u.src!==(h=oe.link)&&r(u,"src",h),r(u,"title","YouTube video player"),r(u,"frameborder","0"),r(u,"allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"),u.allowFullscreen=!0,r(v,"class","svelte-13ysp3c"),B(D,"flex-grow","1"),r(n,"class","content svelte-13ysp3c")},m(e,s){M(t,e,s),c(e,l,s),c(e,n,s),o(n,u),o(n,g),o(n,v),o(v,w),o(n,y),o(n,L),L.innerHTML=F,o(n,z),o(n,D);for(let e=0;e<Y.length;e+=1)Y[e].m(D,null);T=!0},p(e,l){const n={};if(8&l&&(n.$$scope={dirty:l,ctx:e}),t.$set(n),0&l){let t;for(S=oe.keywords,t=0;t<S.length;t+=1){const n=ne(e,S,t);Y[t]?(Y[t].p(n,l),b(Y[t],1)):(Y[t]=ae(n),Y[t].c(),b(Y[t],1),Y[t].m(D,null))}for(E(),t=S.length;t<Y.length;t+=1)P(t);k()}},i(e){if(!T){b(t.$$.fragment,e);for(let e=0;e<S.length;e+=1)b(Y[e]);T=!0}},o(e){x(t.$$.fragment,e),Y=Y.filter(Boolean);for(let e=0;e<Y.length;e+=1)x(Y[e]);T=!1},d(e){I(t,e),e&&a(l),e&&a(n),N(Y,e)}}}function ce(e){let t,l,n;return l=new P({props:{theme:de,$$slots:{default:[re]},$$scope:{ctx:e}}}),{c(){t=$("main"),C(l.$$.fragment),this.h()},l(e){t=s(e,"MAIN",{class:!0});var n=i(t);H(l.$$.fragment,n),n.forEach(a),this.h()},h(){r(t,"class","svelte-13ysp3c")},m(e,s){c(e,t,s),M(l,t,null),n=!0},p(e,[t]){const n={};8&t&&(n.$$scope={dirty:t,ctx:e}),l.$set(n)},i(e){n||(b(l.$$.fragment,e),n=!0)},o(e){x(l.$$.fragment,e),n=!1},d(e){e&&a(t),I(l)}}}let oe,de="dark";async function pe({params:e}){const t=Y.filter((t=>t.slug==e.slug));oe=t?t[0]:{},console.log(oe)}export default class extends e{constructor(e){super(),t(this,e,null,ce,l,{})}}export{pe as preload};
