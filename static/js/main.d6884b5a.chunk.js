(this.webpackJsonpbox=this.webpackJsonpbox||[]).push([[0],{40:function(e,t,n){},41:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n(2),c=n.n(a),i=n(29),r=n.n(i),l=n(10),o=n.n(l),u=n(9),j=n(14),d=n(5),b=n(7),x=Object(a.createContext)([{},function(){}]),m=function(e){var t=e.children,n=Object(a.useState)(0),c=Object(d.a)(n,2),i=c[0],r=c[1];return Object(a.useEffect)((function(){return window.addEventListener("scroll",(function(){r(window.scrollY)})),function(){window.removeEventListener("scroll",(function(){r(0)}))}}),[]),Object(s.jsx)(x.Provider,{value:[i,r],children:t})},f=n(30),O=Object(f.a)({apiKey:"AIzaSyB2OTwpyBQvzsK3JxUnvzXC2n1lDJAkWA0",authDomain:"box-app-94434.firebaseapp.com",databaseURL:"https://box-app-94434-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"box-app-94434",storageBucket:"box-app-94434.appspot.com",messagingSenderId:"777486260295",appId:"1:777486260295:web:02e4f06a9ddb2c98227962"}),h={logo:"Box",nav:[{name:"Home",url:"/"},{name:"Services",url:"/services"},{name:"About",url:"/about"}],button:{name:"Sign In",icon:"account_circle"}},p=function(e){var t=e.title,n=e.icon,c=e.className,i=e.bg,r=e.type,l=e.disabled,o=e.onClick,u=Object(a.useState)(!1),j=Object(d.a)(u,2),b=j[0],x=j[1],m=i||"bg-red-100",f=b?"py-1 px-3":"py-2 px-4";return Object(s.jsxs)("button",{onClick:o,type:r,disabled:l,onPointerEnter:function(){return x(!0)},onPointerLeave:function(){return x(!1)},className:"flex items-center transition-all duration-500  ease-in-out font-quicksand font-medium focus:outline-none  text-light-200 space-x-2 rounded-full text-sm ".concat(f," ").concat(c," ").concat(m),children:[t&&Object(s.jsxs)("span",{children:[" ",t," "]}),n&&Object(s.jsx)("i",{className:"material-icons",children:n})]})},v=n.p+"static/media/logo.df5d3dac.svg",g=n(22),w=Object(a.createContext)([{},"",function(){},function(){}]),C=function(e){var t=e.children,n=Object(a.useState)({}),c=Object(d.a)(n,2),i=c[0],r=c[1],l=Object(a.useState)(""),o=Object(d.a)(l,2),u=o[0],j=o[1];return Object(s.jsx)(w.Provider,{value:[i,u,r,j],children:t})},y=function(e){return e.toUpperCase()},N=function(){var e=Object(a.useState)(!1),t=Object(d.a)(e,2),n=t[0],c=t[1];return Object(s.jsxs)(g.b,{to:"/",className:"flex space-x-1 justify-start items-center relative",onPointerEnter:function(){return c(!0)},onPointerLeave:function(){return c(!1)},children:[Object(s.jsx)("img",{src:v,alt:"Logo",className:"\n          transform transition-transform duration-700 ease-in-out origin-center\n          ".concat(n?"rotate-180":"","\n        ")}),Object(s.jsx)("span",{className:["font-raleway font-bold text-2xl"],children:y("box")})]})},k=function(e){var t=e.item,n=Object(a.useState)(!1),c=Object(d.a)(n,2),i=c[0],r=c[1];return Object(s.jsxs)(g.b,{to:t.url,className:"flex space-x-1 items-center transition-all duration-100 ease-in-out ".concat(i?"text-red-100":"text-light-200"),onPointerEnter:function(){return r(!0)},onPointerLeave:function(){return r(!1)},children:[Object(s.jsxs)("span",{children:[" ",y(t.name)," "]}),Object(s.jsx)("i",{className:"material-icons text-sm transform transition-transform duration-500 ease-in-out ".concat(i?"translate-x-0 opacity-1":"-translate-x-1 opacity-0"),children:"arrow_forward"})]})},S=function(e){var t=e.login,n=e.signin,c=e.edit,i=Object(a.useContext)(w),r=Object(d.a)(i,4),l=r[0],o=r[1],u=r[2],j=r[3],b=Object(a.useState)(!1),x=Object(d.a)(b,2),m=x[0],f=x[1];return Object(s.jsxs)("nav",{className:"text-light-200 container mx-auto relative grid grid-cols-4 gap-0 h-32",children:[Object(s.jsx)("section",{className:"my-auto",children:Object(s.jsx)(N,{})}),Object(s.jsx)("section",{className:"col-span-2 my-auto",children:Object(s.jsx)("ul",{className:"flex space-x-6 justify-center font-quicksand font-semibold text-sm",children:h.nav.map((function(e,t){return Object(s.jsx)(k,{item:e},t)}))})}),Object(s.jsxs)("section",{className:0!==o.length?"hidden":"ml-auto my-auto flex space-x-3 items-center",children:[Object(s.jsx)("button",{onClick:t,type:"button",className:" focus:outline-none text-xs font-raleway hover:text-opacity-50 text-light-100 transition ease-in-out duration-500",children:"Already member?"}),Object(s.jsx)(p,{type:"button",onClick:n,title:y(h.button.name),icon:h.button.icon})]}),Object(s.jsxs)("section",{className:0===o.length?"hidden":"ml-auto relative my-auto flex space-x-3 items-center",children:[Object(s.jsx)("div",{className:"text-sm font-raleway font-semibold",children:l.username}),Object(s.jsx)("span",{className:"material-icons",children:"face"}),Object(s.jsx)("button",{onClick:function(){f((function(e){return!e}))},className:"material-icons focus:outline-none",children:"expand_more"}),m&&Object(s.jsxs)("div",{className:"absolute bg-light-200 py-2 text-dark right-0 rounded w-max px-4 divide-y divide-dark divide-opacity-30 text-right",style:{top:"34px"},children:[Object(s.jsxs)("button",{onClick:c,type:"button",className:"flex focus:outline-none font-quicksand text-right py-2 items-center uppercase font-semibold text-base space-x-2",children:[Object(s.jsx)("span",{className:"material-icons text-lg",children:"edit"}),Object(s.jsx)("span",{className:"",children:"Edit"})]}),Object(s.jsxs)("button",{onClick:function(){j(""),u({}),f(!1)},type:"button",className:"flex font-quicksand py-2 items-center uppercase font-semibold text-base space-x-2",children:[Object(s.jsx)("span",{className:"material-icons text-lg",children:"logout"}),Object(s.jsx)("span",{className:"",children:"Logout"})]})]})]})]})},E=function(e){var t=e.className;return Object(s.jsxs)("div",{className:"flex space-x-2 text-dark "+t,children:[Object(s.jsx)("a",{href:"http://www.facebook.com",children:Object(s.jsx)("svg",{width:"25",height:"25",viewBox:"0 0 25 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(s.jsx)("path",{d:"M25 12.5C25 5.5957 19.4043 0 12.5 0C5.5957 0 0 5.5957 0 12.5C0 19.4043 5.5957 25 12.5 25C12.5732 25 12.6465 25 12.7197 24.9951V15.2686H10.0342V12.1387H12.7197V9.83398C12.7197 7.16309 14.3506 5.70801 16.7334 5.70801C17.876 5.70801 18.8574 5.79102 19.1406 5.83008V8.62305H17.5C16.2061 8.62305 15.9521 9.23828 15.9521 10.1416V12.1338H19.0527L18.6475 15.2637H15.9521V24.5166C21.1768 23.0176 25 18.208 25 12.5V12.5Z",fill:"#362A2A"})})}),Object(s.jsx)("a",{href:"http://www.instagram.com",children:Object(s.jsxs)("svg",{width:"25",height:"25",viewBox:"0 0 25 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(s.jsx)("path",{d:"M14.8926 12.5C14.8926 13.8214 13.8214 14.8926 12.5 14.8926C11.1786 14.8926 10.1074 13.8214 10.1074 12.5C10.1074 11.1786 11.1786 10.1074 12.5 10.1074C13.8214 10.1074 14.8926 11.1786 14.8926 12.5Z",fill:"#362A2A"}),Object(s.jsx)("path",{d:"M18.0954 8.26691C17.9804 7.95525 17.7969 7.67316 17.5585 7.4416C17.327 7.20319 17.0451 7.0197 16.7332 6.90469C16.4803 6.80646 16.1003 6.68954 15.4005 6.65768C14.6435 6.62316 14.4165 6.61572 12.5 6.61572C10.5833 6.61572 10.3564 6.62297 9.59953 6.65749C8.89972 6.68954 8.51958 6.80646 8.26686 6.90469C7.95501 7.0197 7.67291 7.20319 7.44155 7.4416C7.20313 7.67316 7.01965 7.95506 6.90444 8.26691C6.80621 8.51983 6.68929 8.89996 6.65744 9.59977C6.62292 10.3566 6.61548 10.5836 6.61548 12.5003C6.61548 14.4168 6.62292 14.6438 6.65744 15.4008C6.68929 16.1006 6.80621 16.4805 6.90444 16.7334C7.01965 17.0453 7.20294 17.3272 7.44136 17.5588C7.67291 17.7972 7.95482 17.9807 8.26667 18.0957C8.51958 18.1941 8.89972 18.311 9.59953 18.3429C10.3564 18.3774 10.5831 18.3846 12.4998 18.3846C14.4167 18.3846 14.6437 18.3774 15.4003 18.3429C16.1002 18.311 16.4803 18.1941 16.7332 18.0957C17.3592 17.8542 17.854 17.3594 18.0954 16.7334C18.1937 16.4805 18.3106 16.1006 18.3426 15.4008C18.3771 14.6438 18.3844 14.4168 18.3844 12.5003C18.3844 10.5836 18.3771 10.3566 18.3426 9.59977C18.3108 8.89996 18.1938 8.51983 18.0954 8.26691V8.26691ZM12.5 16.1858C10.4643 16.1858 8.81408 14.5358 8.81408 12.5001C8.81408 10.4644 10.4643 8.81432 12.5 8.81432C14.5356 8.81432 16.1858 10.4644 16.1858 12.5001C16.1858 14.5358 14.5356 16.1858 12.5 16.1858ZM16.3315 9.52996C15.8558 9.52996 15.4702 9.14429 15.4702 8.6686C15.4702 8.19291 15.8558 7.80724 16.3315 7.80724C16.8072 7.80724 17.1929 8.19291 17.1929 8.6686C17.1927 9.14429 16.8072 9.52996 16.3315 9.52996Z",fill:"#362A2A"}),Object(s.jsx)("path",{d:"M12.5 0C5.5975 0 0 5.5975 0 12.5C0 19.4025 5.5975 25 12.5 25C19.4025 25 25 19.4025 25 12.5C25 5.5975 19.4025 0 12.5 0ZM19.6344 15.4593C19.5997 16.2233 19.4782 16.745 19.3008 17.2016C18.928 18.1658 18.1658 18.928 17.2016 19.3008C16.7452 19.4782 16.2233 19.5995 15.4594 19.6344C14.694 19.6693 14.4495 19.6777 12.5002 19.6777C10.5507 19.6777 10.3064 19.6693 9.54075 19.6344C8.77686 19.5995 8.255 19.4782 7.79858 19.3008C7.31945 19.1206 6.88572 18.8381 6.52714 18.4729C6.16207 18.1145 5.87959 17.6805 5.69935 17.2016C5.52197 16.7452 5.40047 16.2233 5.36575 15.4594C5.33047 14.6938 5.32227 14.4493 5.32227 12.5C5.32227 10.5507 5.33047 10.3062 5.36556 9.54075C5.40028 8.77666 5.52158 8.255 5.69897 7.79839C5.87921 7.31945 6.16188 6.88553 6.52714 6.52714C6.88553 6.16188 7.31945 5.8794 7.79839 5.69916C8.255 5.52177 8.77666 5.40047 9.54075 5.36556C10.3062 5.33066 10.5507 5.32227 12.5 5.32227C14.4493 5.32227 14.6938 5.33066 15.4593 5.36575C16.2233 5.40047 16.745 5.52177 17.2016 5.69897C17.6805 5.87921 18.1145 6.16188 18.4731 6.52714C18.8381 6.88572 19.1208 7.31945 19.3008 7.79839C19.4784 8.255 19.5997 8.77666 19.6346 9.54075C19.6695 10.3062 19.6777 10.5507 19.6777 12.5C19.6777 14.4493 19.6695 14.6938 19.6344 15.4593V15.4593Z",fill:"#362A2A"})]})}),Object(s.jsx)("a",{href:"http://www.twitter.com",children:Object(s.jsx)("svg",{width:"25",height:"25",viewBox:"0 0 25 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(s.jsx)("path",{d:"M12.5 0C5.5975 0 0 5.5975 0 12.5C0 19.4025 5.5975 25 12.5 25C19.4025 25 25 19.4025 25 12.5C25 5.5975 19.4025 0 12.5 0ZM18.2074 9.74617C18.2129 9.86919 18.2156 9.99279 18.2156 10.117C18.2156 13.9082 15.3297 18.28 10.0523 18.2802H10.0525H10.0523C8.43201 18.2802 6.92425 17.8053 5.65453 16.9914C5.87902 17.0179 6.10752 17.0311 6.33888 17.0311C7.68318 17.0311 8.92029 16.5726 9.90238 15.803C8.64639 15.7797 7.58743 14.9502 7.22198 13.8102C7.39689 13.8437 7.57675 13.862 7.76119 13.862C8.02307 13.862 8.27675 13.8268 8.51784 13.7609C7.20501 13.4981 6.21605 12.3379 6.21605 10.9486C6.21605 10.9356 6.21605 10.924 6.21643 10.9119C6.60305 11.1269 7.04517 11.2562 7.51591 11.2707C6.74553 10.7567 6.23913 9.87797 6.23913 8.88252C6.23913 8.35686 6.38123 7.86438 6.62766 7.44038C8.04253 9.17645 10.157 10.3182 12.5416 10.4382C12.4924 10.228 12.467 10.009 12.467 9.78394C12.467 8.20007 13.752 6.91509 15.3364 6.91509C16.1617 6.91509 16.9071 7.26395 17.4307 7.82166C18.0843 7.69272 18.6981 7.45392 19.2526 7.12528C19.038 7.79495 18.5833 8.35686 17.9909 8.7122C18.5713 8.64277 19.1244 8.48885 19.6384 8.26035C19.2545 8.83579 18.7675 9.34124 18.2074 9.74617V9.74617Z",fill:"#362A2A"})})})]})},Y=function(){return Object(s.jsx)("footer",{className:"mt-24 container relative bottom-0 z-40 mx-auto mb-10",children:Object(s.jsxs)("div",{className:"grid grid-cols-3 bg-light-100 rounded-full p-2",children:[Object(s.jsx)(E,{className:"my-auto ml-4"}),Object(s.jsx)("div",{className:"mx-auto my-auto",children:Object(s.jsx)(N,{})}),Object(s.jsx)(p,{title:"BACK TO TOP",icon:"keyboard_capslock",className:"w-max ml-auto ",bg:"bg-dark"})]})})},X=c.a.createContext([[],"",{},function(){}]),q=function(e){var t=e.children,n=e.services,c=e.current,i=e.setCurrent,r=Object(a.useState)({}),l=Object(d.a)(r,2),o=l[0],j=l[1];return Object(a.useEffect)((function(){j((function(e){var t=n.filter((function(e){return e.id===c}))[0];return Object(u.a)(Object(u.a)({},e),t)}))}),[c]),Object(s.jsx)(X.Provider,{value:[n,c,o,i],children:t})},F=[{id:1,title:"compatible with almost",right:!0,left:!1,position:-4},{id:2,title:"every provider",right:!0,left:!0,position:-32.5},{id:3,title:"on indonesia and 12 country",right:!1,left:!0,position:-24}],A=c.a.createContext([{},function(){}]),L=function(e){var t=e.children,n=Object(a.useState)(F),c=Object(d.a)(n,2),i=c[0],r=c[1];return Object(s.jsx)(A.Provider,{value:[i,r],children:t})},P=n(8),R=function(){return Object(s.jsxs)("section",{className:"flex justify-center h-64 my-9 relative",children:[Object(s.jsx)("div",{id:"lyone",className:"absolute z-0 mx-auto",children:Object(s.jsx)("svg",{width:"241",height:"241",viewBox:"0 0 241 241",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(s.jsx)("rect",{x:"0.984619",y:"91.8954",width:"174.429",height:"174.429",rx:"15",transform:"rotate(-31.4631 0.984619 91.8954)",fill:"#FF3F3F"})})}),Object(s.jsx)("div",{id:"lytwo",className:"absolute z-10 mx-auto ",children:Object(s.jsx)("svg",{width:"247",height:"248",viewBox:"0 0 247 248",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(s.jsx)("rect",{y:"123.989",width:"174.429",height:"174.429",rx:"15",transform:"rotate(-45 0 123.989)",fill:"#FF6161"})})})]})},T=function(e){var t=e.left,n=e.middle,c=e.right;return Object(a.useEffect)((function(){document.querySelectorAll("#text").forEach((function(e){Object.values(e.children).forEach((function(e){return e.className+="text-light-200 font-black"}))}))})),Object(s.jsxs)("section",{className:"relative flex items-center",children:[Object(s.jsxs)("div",{className:"absolute z-0 flex font-raleway text-3xl w-full justify-center space-x-16",children:[Object(s.jsx)("div",{className:"text-left text-red-100",children:Object(s.jsx)("span",{id:"text",children:t})}),Object(s.jsx)("div",{className:"text-center text-red-100",children:Object(s.jsx)("span",{id:"text",children:n})}),Object(s.jsx)("div",{className:"text-right text-red-100",children:Object(s.jsx)("span",{id:"text",children:c})})]}),Object(s.jsxs)("div",{className:"relative z-10 grid grid-cols-5 w-full h-36",children:[Object(s.jsx)("span",{className:"w-full col-span-2 trans bg-gradient-to-r from-dark"}),Object(s.jsx)("span",{}),Object(s.jsx)("span",{className:"w-full col-span-2 bg-gradient-to-l from-dark"})]})]})},D=function(e){var t=Object(a.useContext)(X),n=Object(d.a)(t,4),c=(n[0],n[1]),i=(n[2],n[3]);var r,l=e.active===e.id?"ring-4 ring-light-100 ring-opacity-70 ":"";return Object(s.jsxs)("div",{id:"card",onClick:function(){e.id!==c&&i(e.id)},className:"px-8 py-9 relative flex flex-col justify-between rounded-2xl transition-all  ease-in-out duration-200 cursor-pointer select-none ".concat(l," ").concat(e.bg," ").concat(e.color),style:{height:e.height},children:[Object(s.jsxs)("div",{className:" flex flex-col",children:[Object(s.jsx)("span",{className:"text-5xl text font-bold",children:e.title.toUpperCase()}),e.desc&&Object(s.jsx)("span",{className:"font-quicksand font-medium text-lg mt-2",children:e.desc.toUpperCase()})]}),Object(s.jsxs)("span",{className:"font-quicksand text-3xl font-medium ",children:["Rp. ",(r=e.price,new Intl.NumberFormat("en-GB",{notation:"compact",compactDisplay:"short"}).format(r))]})]})},B=function(e){var t=e.className,n=e.length,c=Object(a.useContext)(X),i=Object(d.a)(c,2),r=i[0],l=i[1],o=r.slice(0,n);return Object(s.jsx)("div",{className:t,children:o.map((function(e){return Object(s.jsx)(D,{id:e.id,title:e.name,desc:e.desc,price:e.price,height:"21rem",color:"text-light-200",bg:"bg-red-100",click:!0,active:l},e.id)}))})},I=function(e){var t=e.id,n=e.children,c=e.animateClass,i=Object(a.useState)(c),r=Object(d.a)(i,1)[0];return Object(a.useEffect)((function(){var e=document.getElementById(t);e.classList.add(r),setTimeout((function(){e.classList.remove(r)}),300)}),[n]),Object(s.jsx)("div",{id:t,children:n})},U=function(){var e=Object(a.useContext)(X),t=Object(d.a)(e,3),n=(t[0],t[1],t[2]);return Object(s.jsxs)("div",{className:"bg-light-100 text-dark rounded-2xl p-9 flex flex-col justify-between select-none",style:{height:"21rem"},children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("span",{id:"test",className:"text-dark uppercase text-4xl font-extrabold block ",children:Object(s.jsx)(I,{id:"test",animateClass:"animate-fade",children:n.name})}),Object(s.jsx)("div",{className:"block space-y-2 w-auto font-quicksand font-medium text-2xl mt-6",children:void 0!==n.feature?n.feature.map((function(e,t){return Object(s.jsxs)("div",{className:"flex items-center font-medium ",children:[Object(s.jsx)("span",{className:"material-icons mr-2 opacity-90 ",children:"verified"}),e]},t)})):""})]}),Object(s.jsxs)("div",{className:"flex justify-between items-end",children:[Object(s.jsx)("a",{href:"#",className:"font-medium hover:text-opacity-50 transition-opacity",children:"ask question".toUpperCase()}),Object(s.jsx)(p,{title:"ORDER HERE",icon:"arrow_right_alt"})]})]})},z=function(e){var t=e.text,n=e.right,c=e.left,i=e.position,r=[0,1,2,3],l=Object(a.useContext)(x),o=Object(d.a)(l,1)[0],u=c?i-o/100:i+o/100;return Object(s.jsxs)("div",{className:"flex  text-light-200 items-center space-x-7 min-w-max overflow-hidden relative transition-transform duration-700 ease-out transform origin-left",style:{transform:"translateX(".concat(u,"rem)")},children:[c&&Object(s.jsx)("span",{className:"flex items-center space-x-6 left-0",children:r.map((function(e){return Object(s.jsx)("span",{className:"border-4 rounded-xl border-red-200 border-opacity-80 h-0 w-56 w"},e)}))}),Object(s.jsx)("div",{className:"font-raleway font-bold  text-5xl w-full ",children:t.toUpperCase()}),n&&Object(s.jsx)("span",{className:"flex items-center space-x-6 left-0",children:r.map((function(e){return Object(s.jsx)("span",{className:"border-4 rounded-xl border-red-200 border-opacity-80 h-0 w-56 w"},e)}))})]})},M=function(){var e=Object(a.useContext)(A),t=Object(d.a)(e,1)[0];return Object(a.useEffect)((function(){})),Object(s.jsx)("section",{className:"mt-20 mb-28 space-y-7",children:t.map((function(e){return Object(s.jsx)(z,{text:e.title,right:e.right,left:e.left,position:e.position},e.id)}))})},V=function(e){var t=e.title,n=e.price,c=e.feature,i=e.left,r=Object(a.useState)(!1),l=Object(d.a)(r,2),o=l[0],u=l[1],j=Object(a.useState)(!1),b=Object(d.a)(j,2),x=b[0],m=b[1],f=x?"border-red-100 border-4":"",O=x?"210%":"100%",h=i?" right-0":"",v=o?"flex-initial":"flex-1";return Object(s.jsx)("div",{className:"relative select-none cursor-pointer h-64",children:Object(s.jsxs)("div",{id:"parent",onClick:function(){x||o?(u(!o),setTimeout((function(){return m(!x)}),200)):(m(!x),setTimeout((function(){return u(!o)}),200))},className:"flex ".concat(h," ").concat(f," absolute bg-light-100 transform h-full rounded-3xl overflow-hidden ease-in-out duration-200 transition-all"),style:{width:O},children:[Object(s.jsxs)("div",{className:" text-dark pl-10 py-10 flex flex-col justify-between ".concat(v," "),children:[Object(s.jsx)("span",{className:"text-5xl font-bold",children:t.toUpperCase()}),Object(s.jsxs)("span",{className:"font-quicksand text-3xl font-medium",children:["Rp. ",function(e){return new Intl.NumberFormat("en-GB",{notation:"compact",compactDisplay:"short"}).format(e)}(n)]})]}),o&&Object(s.jsxs)("div",{className:"py-10 pr-10 flex flex-initial flex-col justify-between",children:[Object(s.jsx)("div",{className:"flex flex-col space-y-1",children:c.map((function(e){return Object(s.jsxs)("div",{className:"inline-flex font-medium ",children:[Object(s.jsx)("span",{className:"material-icons mr-2 opacity-90 text-lg",children:"verified"}),e]})}))}),Object(s.jsx)(p,{title:"ORDER HERE",icon:"arrow_right_alt",className:"w-max"})]})]})})},H=function(){var e=Object(a.useContext)(X),t=Object(d.a)(e,1)[0],n=t.slice(0,2),c=t.slice(2,4),i=Object(a.useContext)(x),r=Object(d.a)(i,1)[0],l=4-r/300,o=r/300-4;return Object(s.jsxs)("div",{className:"grid grid-cols-4 gap-7 mt-20 mb-28",children:[Object(s.jsx)("div",{className:"grid grid-rows-2 col-start-2 gap-7 relative transform transition-transform ease-out duration-700",style:{transform:"translateY(".concat(l,"rem)")},children:n.map((function(e){return Object(s.jsx)(V,{title:e.name,price:e.price,feature:e.feature,left:!0},e.id)}))}),Object(s.jsx)("div",{className:" grid grid-rows-2 col-start-3 gap-7 relative transform transition-transform ease-out duration-700",style:{transform:"translateY(".concat(o,"rem)")},children:c.map((function(e){return Object(s.jsx)(V,{title:e.name,price:e.price,feature:e.feature},e.id)}))})]})},_=function(e){var t=e.position,n=e.translateX,c=e.translateY,i=e.typeX,r=e.typeY,l=e.divideY,o=e.divideX,u=Object(a.useContext)(x),j=Object(d.a)(u,1)[0],b=Object(a.useState)({x:i,y:r}),m=Object(d.a)(b,1)[0],f=Object(a.useState)({x:n,y:c}),O=Object(d.a)(f,1)[0],h=O.x+j/o,p=O.y+j/l,v=m.x?m.x:"rem",g=m.y?m.y:"rem";return Object(s.jsx)("section",{className:"absolute transform ".concat(t," transition-transform duration-500 ease-in-out"),style:{transform:"translate(".concat(h+v,", ").concat(p+g,")")},children:Object(s.jsx)("svg",{width:"278",height:"278",viewBox:"0 0 278 278",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(s.jsx)("circle",{cx:"139",cy:"139",r:"138.5",stroke:"#FF6161"})})})},Z=function(){return Object(s.jsxs)(s.Fragment,{children:["TAKE YOUR ",Object(s.jsx)("br",{})," ",Object(s.jsx)("strong",{children:"FREEDOM"})," AND ",Object(s.jsx)("strong",{children:"ENJOY"})]})},W=function(){return Object(s.jsxs)(s.Fragment,{children:["BE ",Object(s.jsx)("strong",{children:"CONSIESE"})," AND TAKE ",Object(s.jsx)("br",{}),Object(s.jsx)("strong",{children:"CONTROL"})," OF IT"]})},J=function(){return Object(s.jsxs)(s.Fragment,{children:["YOUR ",Object(s.jsx)("strong",{children:"FIRST"})," ",Object(s.jsx)("br",{}),Object(s.jsx)("strong",{children:"INTERNET"})," PROVIDER"]})},K=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(""),r=Object(d.a)(i,2),l=r[0],u=r[1],b=Object(a.useContext)(w),x=Object(d.a)(b,2),m=(x[0],x[1]);function f(){return(f=Object(j.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=Object(P.c)(O),n=Object(P.h)(t,"services"),Object(P.d)(n,(function(e){var t=e.val();c(t),u(t[0].id)}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){return function(){f.apply(this,arguments)}(),function(){c([]),u("")}}),[]),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(_,{position:"z-20 left-0",translateX:-12,translateY:20,divideX:700,divideY:500}),Object(s.jsx)(_,{position:"right-0 z-20",translateX:9,translateY:10,divideX:600,divideY:400}),Object(s.jsx)(_,{position:"left-0 ",translateX:10,translateY:90,divideX:700,divideY:700}),Object(s.jsx)(_,{position:"right-0",translateX:-12,translateY:120,divideX:1400,divideY:-1100}),Object(s.jsxs)("header",{className:"container mx-auto relative ",children:[Object(s.jsx)(R,{}),Object(s.jsx)(T,{left:Object(s.jsx)(Z,{}),middle:Object(s.jsx)(W,{}),right:Object(s.jsx)(J,{})}),0===m.length&&Object(s.jsx)(p,{title:"BECOME MEMBER",className:"mx-auto font-bold"})]}),Object(s.jsxs)("main",{className:"container mx-auto relative my-20 w-full px-11 ",children:[Object(s.jsxs)(q,{services:n,current:l,setCurrent:u,children:[Object(s.jsx)(_,{position:" w-full",translateX:33,translateY:2,typeX:"%",divideX:1e3,divideY:400}),Object(s.jsxs)("section",{id:"cards",className:"grid grid-cols-2 gap-9 relative z-10",children:[Object(s.jsx)(B,{className:"grid grid-cols-2 gap-9",length:2}),Object(s.jsx)(U,{})]})]}),Object(s.jsx)(L,{children:Object(s.jsx)(M,{})}),Object(s.jsxs)("section",{className:"w-full",children:[Object(s.jsxs)("div",{className:"text-center text-light-200",children:[Object(s.jsx)("h1",{className:"font-bold text-4xl mb-2",children:"FAVORITE PLAN"}),Object(s.jsx)("span",{className:"text-2xl",children:"Choose Your Style"}),Object(s.jsx)("div",{className:" w-1/2 mx-auto mt-6",children:Object(s.jsx)("p",{className:"font-quicksand text-xl font-medium",children:"Decide what plan you want to your life and enjoy it. Full support from our team. We always ready to give you the best interconnection experience with our services."})})]}),Object(s.jsx)(q,{services:n,children:Object(s.jsx)(H,{})}),Object(s.jsxs)("div",{className:"flex text-light-200 space-x-5 mx-auto w-2/5",children:[Object(s.jsxs)("div",{className:"text-right flex flex-col justify-between",children:[Object(s.jsx)("span",{className:"font-bold text-4xl font-raleway ",children:"FULL SUPPORT"}),Object(s.jsx)(p,{title:"CONTACT US",icon:"arrow_right_alt",className:"font-bold w-max"})]}),Object(s.jsx)("p",{className:"text-lg font-quicksand font-medium",children:"Decide what plan you want to your life and enjoy it. Full support from our team. We always ready to give you the best interconnection experience with our services."})]})]})]})]})},G=function(){return Object(s.jsxs)("div",{className:" h-full",children:[Object(s.jsx)(_,{position:"z-20 left-0",translateX:-12,translateY:20,divideX:700,divideY:500}),Object(s.jsx)(_,{position:"right-0",translateX:9,translateY:10,divideX:600,divideY:400}),Object(s.jsx)("header",{className:"container mx-auto relative",children:Object(s.jsxs)("div",{className:"text-center font font-raleway font-light uppercase text-red-100 text-4xl",children:["Who",Object(s.jsx)("span",{className:" text-light-200 mx-3 font-bold ",children:"We"}),"Are?"]})}),Object(s.jsxs)("main",{className:"container mx-auto relative w-full",children:[Object(s.jsx)("div",{className:" w-2/3 text-light-100 mx-auto text-center my-10 font-quicksand ",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis pretium libero, vel aliquam nibh ullamcorper quis. Maecenas quis nisl sed arcu ultricies tincidunt a sit amet velit. Mauris massa magna, faucibus non rhoncus eu, commodo ultrices diam. Cras tellus quam, accumsan sit amet varius non, varius in sem. Nullam suscipit justo vitae ex ullamcorper, vel blandit orci tempus. Sed semper, nulla ac mattis ullamcorper, est lectus hendrerit sem, at porttitor lectus tellus non nisi. Pellentesque vitae rhoncus nisl, at condimentum elit. Curabitur a lacus ac eros hendrerit luctus. In hac habitasse platea dictumst. Proin at mauris ac dui consequat lobortis in sed lectus. Nam commodo mauris eu placerat molestie. Maecenas accumsan eleifend sem, id condimentum sem efficitur at. Sed aliquet leo elementum erat sagittis, sed tempor nisl imperdiet. Morbi ac nunc tincidunt, feugiat mauris eget, lacinia justo. Duis vehicula pellentesque tristique."}),Object(s.jsx)("div",{className:"w-2/3 text-light-100 mx-auto text-center my-10 font-quicksand ",children:"Pellentesque quis accumsan felis. Aenean sem libero, fermentum non quam interdum, tristique hendrerit mi. Nam quis finibus nibh, sit amet semper erat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus sagittis augue a dolor luctus pretium. Cras et scelerisque dolor, vitae dignissim orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras in accumsan risus, sed vulputate enim. Etiam sollicitudin lorem nunc, in tempor est egestas at."}),Object(s.jsxs)("div",{className:"flex text-light-200 space-x-5 mx-auto w-2/5",children:[Object(s.jsxs)("div",{className:"text-right flex flex-col justify-between",children:[Object(s.jsx)("span",{className:"font-bold text-4xl font-raleway ",children:"FULL SUPPORT"}),Object(s.jsx)(p,{title:"CONTACT US",icon:"arrow_right_alt",className:"font-bold w-max"})]}),Object(s.jsx)("p",{className:"text-lg font-quicksand font-medium",children:"Decide what plan you want to your life and enjoy it. Full support from our team. We always ready to give you the best interconnection experience with our services."})]})]})]})},Q=function(e){var t=e.icon,n=e.placeholder,a=e.type,c=e.value,i=e.onChange;return Object(s.jsxs)("div",{className:" bg-light-100 z-10 text-dark p-3 rounded-full flex space-x-2 items-center",children:[Object(s.jsx)("span",{className:"material-icons",children:t}),Object(s.jsx)("input",{className:"bg-light-100 w-full font-semibold font-quicksand focus:outline-none text-lg",type:a,placeholder:n,value:c,onChange:i})]})},$=function(){return Object(s.jsxs)(s.Fragment,{children:["OUR ",Object(s.jsx)("strong",{children:"SERVICE"})," ARE ",Object(s.jsx)("br",{}),Object(s.jsx)("strong",{children:"THE BEST"})," ON IT'S ",Object(s.jsx)("strong",{children:"CLASS"})]})},ee=function(){var e=Object(a.useState)(""),t=Object(d.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)([]),r=Object(d.a)(i,2),l=r[0],u=r[1];function b(){return(b=Object(j.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=Object(P.c)(O),n=Object(P.h)(t,"services"),Object(P.d)(n,(function(e){var t=e.val();u(t)}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){return function(){b.apply(this,arguments)}(),function(){u([])}}),[]),Object(s.jsxs)("div",{style:{minHeight:"41rem"},children:[Object(s.jsx)(_,{position:"z-20 left-0",translateX:8,translateY:14,divideX:700,divideY:500}),Object(s.jsx)(_,{position:"right-0 z-20",translateX:-12,translateY:3,divideX:600,divideY:400}),Object(s.jsxs)("header",{className:"container mx-auto relative",children:[Object(s.jsx)(T,{middle:Object(s.jsx)($,{})}),Object(s.jsx)("div",{className:"mx-auto w-80",children:Object(s.jsx)(Q,{type:"text",placeholder:"Search...",icon:"search",value:n,onChange:function(e){return c(e.target.value)}})})]}),Object(s.jsx)("main",{className:"container mx-auto relative mt-10 z-30",children:Object(s.jsx)(q,{services:function(e){return e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))}(l),current:"",children:Object(s.jsx)("div",{className:"mx-auto w-11/12",children:Object(s.jsx)(B,{className:"grid grid-cols-4 gap-9"})})})})]})},te=function(e){var t=e.onClose,n=Object(a.useContext)(w),c=Object(d.a)(n,4),i=(c[0],c[1],c[2]),r=c[3],l=Object(a.useState)({email:"",password:""}),b=Object(d.a)(l,2),x=b[0],m=b[1],f=Object(a.useState)(""),h=Object(d.a)(f,2),v=h[0],g=h[1];function C(){return(C=Object(j.a)(o.a.mark((function e(n){var s,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),s=Object(P.c)(O),a=Object(P.g)(Object(P.h)(s,"users"),Object(P.e)("email"),Object(P.b)(x.email)),Object(P.d)(a,(function(e){var n=e.val(),s=Object.keys(n)[0];x.password===n[s].password&&(i(n[s]),r(s),t()),g("Wrong Password!")}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(s.jsxs)("div",{className:"  w-1/4 relative transition-all ease-in-out duration-500 rounded-xl overflow-hidden",children:[Object(s.jsx)(_,{position:" left-0",translateX:-8,translateY:19,divideX:700,divideY:500}),Object(s.jsx)(_,{position:"right-0",translateX:9,translateY:-2,divideX:700,divideY:500}),Object(s.jsxs)("div",{className:"flex relative bg-red-100 items-center justify-between p-6 ",children:[Object(s.jsx)("span",{className:" uppercase tracking-wider font-raleway font-black text-light-200 text-3xl",children:"login"}),Object(s.jsx)(p,{onClick:t,icon:"close"})]}),Object(s.jsxs)("form",{onSubmit:function(e){return C.apply(this,arguments)},className:"bg-light-200 p-9 flex flex-col space-y-5",children:[Object(s.jsx)(Q,{placeholder:"Email",icon:"email",value:x.email,onChange:function(e){m((function(t){return Object(u.a)(Object(u.a)({},t),{},{email:e.target.value})}))},type:"email"}),Object(s.jsx)(Q,{placeholder:"Password",icon:"lock",value:x.password,onChange:function(e){m((function(t){return Object(u.a)(Object(u.a)({},t),{},{password:e.target.value})}))},type:"password"}),0!==v.length&&Object(s.jsx)("span",{className:"text-center uppercase font-semibold font-quicksand",children:v}),Object(s.jsxs)("div",{className:"flex justify-end space-x-4 pt-6",children:[Object(s.jsx)(p,{title:"Reset",type:"button"}),Object(s.jsx)(p,{disabled:!x.password,title:"Login",icon:"login",type:"submit"})]})]})]})},ne=function(e){var t=e.onClose,n=Object(a.useContext)(w),c=Object(d.a)(n,4),i=c[0],r=c[1],l=c[2],b=c[3],x=Object(a.useState)({fullname:"",username:"",email:"",password:""}),m=Object(d.a)(x,2),f=m[0],h=m[1];function v(){return(v=Object(j.a)(o.a.mark((function e(n){var s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),s=Object(P.c)(O),e.next=4,Object(P.i)(Object(P.h)(s,"users/"+r),null);case 4:l({}),b(""),h({fullname:"",username:"",email:"",password:""}),t();case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(){return(g=Object(j.a)(o.a.mark((function e(n){var s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),s=Object(P.c)(O),e.next=4,Object(P.i)(Object(P.h)(s,"users/"+r),Object(u.a)({},f));case 4:l(f),t();case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){return h(i),function(){h({fullname:"",username:"",email:"",password:""})}}),[]),Object(s.jsxs)("div",{className:"  w-1/4 relative transition-all ease-in-out duration-500 rounded-xl overflow-hidden",children:[Object(s.jsx)(_,{position:" left-0",translateX:-11,translateY:25,divideX:700,divideY:500}),Object(s.jsx)(_,{position:"right-0",translateX:1,translateY:-2,divideX:700,divideY:500}),Object(s.jsxs)("div",{className:"flex relative bg-red-100 items-center justify-between p-6 ",children:[Object(s.jsx)("span",{className:" uppercase tracking-wider font-raleway font-black text-light-200 text-3xl",children:"edit"}),Object(s.jsx)(p,{onClick:t,icon:"close"})]}),Object(s.jsxs)("form",{onSubmit:function(e){return g.apply(this,arguments)},className:"bg-light-200 p-9 flex flex-col space-y-5",children:[Object(s.jsx)(Q,{placeholder:"Fullname",icon:"person",value:f.fullname,onChange:function(e){h((function(t){return Object(u.a)(Object(u.a)({},t),{},{fullname:e.target.value})}))},type:"text"}),Object(s.jsx)(Q,{placeholder:"Username",icon:"face",value:f.username,onChange:function(e){h((function(t){return Object(u.a)(Object(u.a)({},t),{},{username:e.target.value})}))},type:"text"}),Object(s.jsx)(Q,{placeholder:"Email",icon:"email",value:f.email,onChange:function(e){h((function(t){return Object(u.a)(Object(u.a)({},t),{},{email:e.target.value})}))},type:"email"}),Object(s.jsx)(Q,{placeholder:"Password",icon:"lock",value:f.password,onChange:function(e){h((function(t){return Object(u.a)(Object(u.a)({},t),{},{password:e.target.value})}))},type:"password"}),Object(s.jsxs)("div",{className:"flex justify-end space-x-4 pt-6",children:[Object(s.jsx)(p,{onClick:function(e){return v.apply(this,arguments)},title:"Delete",type:"button"}),Object(s.jsx)(p,{disabled:!f.password,title:"Edit",icon:"login",type:"submit"})]})]})]})},se=function(e){var t=e.onClose,n=Object(a.useContext)(w),c=Object(d.a)(n,4),i=(c[0],c[1],c[2]),r=c[3],l=Object(a.useState)({fullname:"",username:"",email:"",password:""}),b=Object(d.a)(l,2),x=b[0],m=b[1];function f(){return(f=Object(j.a)(o.a.mark((function e(n){var s,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),s=Object(P.c)(O),a=Object(P.f)(Object(P.a)(Object(P.h)(s),"users")).key,e.next=5,Object(P.i)(Object(P.h)(s,"users/"+a),Object(u.a)({},x));case 5:r(a),i(x),t();case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){return function(){m({fullname:"",username:"",email:"",password:""})}}),[]),Object(s.jsxs)("div",{className:"  w-1/4 relative transition-all ease-in-out duration-500 rounded-xl overflow-hidden",children:[Object(s.jsx)(_,{position:" left-0",translateX:-11,translateY:25,divideX:700,divideY:500}),Object(s.jsx)(_,{position:"right-0",translateX:1,translateY:-2,divideX:700,divideY:500}),Object(s.jsxs)("div",{className:"flex relative bg-red-100 items-center justify-between p-6 ",children:[Object(s.jsx)("span",{className:" uppercase tracking-wider font-raleway font-black text-light-200 text-3xl",children:"sign up"}),Object(s.jsx)(p,{onClick:t,icon:"close"})]}),Object(s.jsxs)("form",{onSubmit:function(e){return f.apply(this,arguments)},className:"bg-light-200 p-9 flex flex-col space-y-5",children:[Object(s.jsx)(Q,{placeholder:"Fullname",icon:"person",value:x.fullname,onChange:function(e){m((function(t){return Object(u.a)(Object(u.a)({},t),{},{fullname:e.target.value})}))},type:"text"}),Object(s.jsx)(Q,{placeholder:"Username",icon:"face",value:x.username,onChange:function(e){m((function(t){return Object(u.a)(Object(u.a)({},t),{},{username:e.target.value})}))},type:"text"}),Object(s.jsx)(Q,{placeholder:"Email",icon:"email",value:x.email,onChange:function(e){m((function(t){return Object(u.a)(Object(u.a)({},t),{},{email:e.target.value})}))},type:"email"}),Object(s.jsx)(Q,{placeholder:"Password",icon:"lock",value:x.password,onChange:function(e){m((function(t){return Object(u.a)(Object(u.a)({},t),{},{password:e.target.value})}))},type:"password"}),Object(s.jsxs)("div",{className:"flex justify-end space-x-4 pt-6",children:[Object(s.jsx)(p,{title:"Reset",type:"button"}),Object(s.jsx)(p,{disabled:!x.password,title:"Sign In",icon:"login",type:"submit"})]})]})]})},ae=function(e){var t=e.onClose,n=e.onLogin,a=e.onSignin,c=e.onEdit;return n||a||c?Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("div",{className:"w-full flex justify-center items-center h-full fixed bg-dark z-40 bg-opacity-50",children:a?Object(s.jsx)(se,{onClose:t}):n?Object(s.jsx)(te,{onClose:t}):c?Object(s.jsx)(ne,{onClose:t}):""})}):""},ce=function(){var e=Object(a.useState)(!1),t=Object(d.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(!1),r=Object(d.a)(i,2),l=r[0],o=r[1],u=Object(a.useState)(!1),j=Object(d.a)(u,2),x=j[0],f=j[1];return Object(s.jsx)(m,{children:Object(s.jsxs)(C,{children:[Object(s.jsx)(ae,{onClose:function(){c(!1),o(!1),f(!1)},onLogin:n,onSignin:l,onEdit:x}),Object(s.jsxs)("div",{id:"bg",className:"z-0 relative overflow-x-hidden transition-all duration-500 ease-in-out h-full",children:[Object(s.jsx)(S,{signin:function(){o(!0)},login:function(){c(!0)},edit:function(){f(!0)}}),Object(s.jsxs)(b.c,{children:[Object(s.jsx)(b.a,{path:"/",element:Object(s.jsx)(K,{})}),Object(s.jsx)(b.a,{path:"/about",element:Object(s.jsx)(G,{})}),Object(s.jsx)(b.a,{path:"/services",element:Object(s.jsx)(ee,{})})]}),Object(s.jsx)(Y,{})]})]})})},ie=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),s(e),a(e),c(e),i(e)}))};n(40),n(41),n(42),n(43);r.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(g.a,{basename:"/box",children:Object(s.jsx)(ce,{})})}),document.getElementById("root")),ie()}},[[44,1,2]]]);
//# sourceMappingURL=main.d6884b5a.chunk.js.map