(this.webpackJsonpbox=this.webpackJsonpbox||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),i=n.n(s),r=n(5),a=n.n(r),l=(n(11),n(12),n(2)),o={items:[{id:1,title:"Turbo Max",desc:"for gaming and streaming",price:280,feature:["100Mbps","Stable Networking Area","12 Game Voucher for Selected Games"],status:!1},{id:2,title:"Super User",desc:"for multimedia and office",price:200,feature:["80Mbps","Free 12 TV Channel","Unlimited Phone Call with Box Users"],status:!1},{id:3,title:"Show Bizz",desc:"for entertaiment and streaming",price:170,feature:["50Mbps","Access From All Device","10 Movies and Drama on Selected Provider"],status:!1},{id:4,title:"Silver Mine",desc:"for college and high scholl student",price:100,feature:["20Mbps","Stable Networking Area","12 Voucher Academic on Selected Provider"],status:!1}],currentCard:1},d=i.a.createContext([{},function(){}]),j=function(e){var t=e.children,n=Object(s.useState)(o),i=Object(l.a)(n,2),r=i[0],a=i[1];return Object(c.jsx)(d.Provider,{value:[r,a],children:t})},x=[{id:1,title:"compatible with almost",right:!0,left:!1,position:-4},{id:2,title:"every provider",right:!0,left:!0,position:-32.5},{id:3,title:"on indonesia and 12 country",right:!1,left:!0,position:-24}],u=i.a.createContext([{},function(){}]),b=function(e){var t=e.children,n=Object(s.useState)(x),i=Object(l.a)(n,2),r=i[0],a=i[1];return Object(c.jsx)(u.Provider,{value:[r,a],children:t})},f=Object(s.createContext)([{},function(){}]),m=function(e){var t=e.children,n=Object(s.useState)(0),i=Object(l.a)(n,2),r=i[0],a=i[1];return Object(s.useEffect)((function(){return window.addEventListener("scroll",(function(){a(window.scrollY)})),function(){window.removeEventListener("scroll",(function(){a(0)}))}}),[]),Object(c.jsx)(f.Provider,{value:[r,a],children:t})},h=n.p+"static/media/logo.df5d3dac.svg",O=function(e){var t=e.title,n=e.icon,i=e.className,r=e.bg,a=Object(s.useState)(!1),o=Object(l.a)(a,2),d=o[0],j=o[1],x=r||"bg-red-100",u=d?"py-1 px-3":"py-2 px-4";return Object(c.jsxs)("button",{onPointerEnter:function(){return j(!0)},onPointerLeave:function(){return j(!1)},className:"flex items-center transition-all duration-300 ease-in-out font-quicksand font-medium  text-light-200 space-x-2 rounded-full text-sm ".concat(u," ").concat(i," ").concat(x),children:[Object(c.jsxs)("span",{children:[" ",t," "]}),n&&Object(c.jsx)("i",{className:"material-icons",children:n})]})},p={logo:"Box",nav:[{name:"Home",url:"#"},{name:"About",url:"#"},{name:"Service",url:"#"},{name:"Contact",url:"#"}],button:{name:"Sign Up",icon:"account_circle"}},v=function(e){return e.toUpperCase()},C=function(){var e=Object(s.useState)(!1),t=Object(l.a)(e,2),n=t[0],i=t[1];return Object(c.jsxs)("a",{href:"/#",className:"flex space-x-1 justify-start items-center relative",onPointerEnter:function(){return i(!0)},onPointerLeave:function(){return i(!1)},children:[Object(c.jsx)("img",{src:h,alt:"Logo",className:"\n          transform transition-transform duration-700 ease-in-out origin-center\n          ".concat(n?"rotate-180":"","\n        ")}),Object(c.jsx)("span",{className:["font-raleway font-bold text-2xl"],children:v("box")})]})},g=function(e){var t=e.item,n=Object(s.useState)(!1),i=Object(l.a)(n,2),r=i[0],a=i[1];return Object(c.jsxs)("a",{href:t.url,className:"flex space-x-1 items-center transition-all duration-100 ease-in-out ".concat(r?"text-red-100":"text-light-200"),onPointerEnter:function(){return a(!0)},onPointerLeave:function(){return a(!1)},children:[Object(c.jsxs)("span",{children:[" ",v(t.name)," "]}),Object(c.jsx)("i",{className:"material-icons text-sm transform transition-transform duration-500 ease-in-out ".concat(r?"translate-x-0 opacity-1":"-translate-x-1 opacity-0"),children:"arrow_forward"})]})},w=function(){return Object(c.jsxs)("nav",{className:"text-light-200 mx-auto relative grid grid-cols-4 gap-0 h-32",children:[Object(c.jsx)("section",{className:"my-auto",children:Object(c.jsx)(C,{})}),Object(c.jsx)("section",{className:"col-span-2 my-auto",children:Object(c.jsx)("ul",{className:"flex space-x-6 justify-center font-quicksand font-semibold text-sm",children:p.nav.map((function(e,t){return Object(c.jsx)(g,{item:e},t)}))})}),Object(c.jsx)("section",{className:"ml-auto my-auto",children:Object(c.jsx)(O,{title:v(p.button.name),icon:p.button.icon})})]})},N=function(e){var t=e.position,n=e.translateX,i=e.translateY,r=e.typeX,a=e.typeY,o=e.divideY,d=e.divideX,j=Object(s.useContext)(f),x=Object(l.a)(j,1)[0],u=Object(s.useState)({x:r,y:a}),b=Object(l.a)(u,1)[0],m=Object(s.useState)({x:n,y:i}),h=Object(l.a)(m,1)[0],O=h.x+x/d,p=h.y+x/o,v=b.x?b.x:"rem",C=b.y?b.y:"rem";return Object(c.jsx)("section",{className:"absolute transform ".concat(t," transition-transform duration-500 ease-in-out"),style:{transform:"translate(".concat(O+v,", ").concat(p+C,")")},children:Object(c.jsx)("svg",{width:"278",height:"278",viewBox:"0 0 278 278",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(c.jsx)("circle",{cx:"139",cy:"139",r:"138.5",stroke:"#FF6161"})})})},y=function(){return Object(s.useEffect)((function(){document.querySelectorAll("#text").forEach((function(e){Object.values(e.children).forEach((function(e){return e.className+="text-light-200 font-black"}))}))})),Object(c.jsxs)("section",{className:"relative flex items-center",children:[Object(c.jsxs)("div",{className:"absolute z-0 flex font-raleway text-3xl w-full justify-center space-x-16",children:[Object(c.jsx)("div",{className:"text-left text-red-100",children:Object(c.jsxs)("span",{id:"text",children:["TAKE YOUR ",Object(c.jsx)("br",{})," ",Object(c.jsx)("strong",{children:"FREEDOM"})," AND ",Object(c.jsx)("strong",{children:"ENJOY"})]})}),Object(c.jsx)("div",{className:"text-center text-red-100",children:Object(c.jsxs)("span",{id:"text",children:["BE ",Object(c.jsx)("strong",{children:"CONSIESE"})," AND TAKE ",Object(c.jsx)("br",{}),Object(c.jsx)("strong",{children:"CONTROL"})," OF IT"]})}),Object(c.jsx)("div",{className:"text-right text-red-100",children:Object(c.jsxs)("span",{id:"text",children:["YOUR ",Object(c.jsx)("strong",{children:"FIRST"})," ",Object(c.jsx)("br",{}),Object(c.jsx)("strong",{children:"INTERNET"})," PROVIDER:"]})})]}),Object(c.jsxs)("div",{className:"relative z-10 grid grid-cols-5 w-full h-36",children:[Object(c.jsx)("span",{className:"w-full col-span-2 trans bg-gradient-to-r from-dark"}),Object(c.jsx)("span",{}),Object(c.jsx)("span",{className:"w-full col-span-2 bg-gradient-to-l from-dark"})]})]})},E=function(){return Object(c.jsxs)("section",{className:"flex justify-center h-64 my-9 relative",children:[Object(c.jsx)("div",{id:"lyone",className:"absolute z-0 mx-auto",children:Object(c.jsx)("svg",{width:"241",height:"241",viewBox:"0 0 241 241",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(c.jsx)("rect",{x:"0.984619",y:"91.8954",width:"174.429",height:"174.429",rx:"15",transform:"rotate(-31.4631 0.984619 91.8954)",fill:"#FF3F3F"})})}),Object(c.jsx)("div",{id:"lytwo",className:"absolute z-10 mx-auto ",children:Object(c.jsx)("svg",{width:"247",height:"248",viewBox:"0 0 247 248",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(c.jsx)("rect",{y:"123.989",width:"174.429",height:"174.429",rx:"15",transform:"rotate(-45 0 123.989)",fill:"#FF6161"})})})]})},k=n(4),S=function(e){var t=e.id,n=e.title,i=e.desc,r=e.price,a=e.current,o=e.color,j=e.height,x=e.bg,u=Object(s.useContext)(d),b=Object(l.a)(u,2),f=b[0],m=b[1];var h=a===t?"border-4 border-light-100 border-opacity-70 ":"";return Object(c.jsxs)("div",{id:"card",onClick:function(){t!==f.currentCard&&m((function(e){return Object(k.a)(Object(k.a)({},e),{},{currentCard:t})}))},className:"px-8 py-9 relative flex flex-col justify-between rounded-2xl transition-all  ease-in-out duration-200 cursor-pointer select-none ".concat(h," ").concat(x," ").concat(o),style:{height:j},children:[Object(c.jsxs)("div",{className:" flex flex-col",children:[Object(c.jsx)("span",{className:"text-5xl text font-bold",children:n.toUpperCase()}),i&&Object(c.jsx)("span",{className:"font-quicksand font-medium text-lg mt-2",children:i.toUpperCase()})]}),Object(c.jsxs)("span",{className:"font-quicksand text-3xl font-medium ",children:["Rp. ",r,"K"]})]})},A=function(){var e=Object(s.useContext)(d),t=Object(l.a)(e,1)[0],n=t.items.slice(0,2),i=t.currentCard;return Object(c.jsx)("div",{className:"grid grid-cols-2 gap-9",children:n.map((function(e){return Object(c.jsx)(S,{id:e.id,title:e.title,desc:e.desc,price:e.price,height:"21rem",color:"text-light-200",bg:"bg-red-100",click:!0,current:i},e.id)}))})},F=function(e){var t=e.id,n=e.children,i=e.animateClass,r=Object(s.useState)(i),a=Object(l.a)(r,1)[0];return Object(s.useEffect)((function(){var e=document.getElementById(t);return e.classList.add(a),setTimeout((function(){e.classList.remove(a)}),300),function(){}}),[n]),Object(c.jsx)("div",{id:t,children:n})},M=function(){var e=Object(s.useContext)(d),t=Object(l.a)(e,1)[0],n=t.items.filter((function(e){return e.id===t.currentCard}))[0];return Object(c.jsxs)("div",{className:"bg-light-100 text-dark rounded-2xl p-9 flex flex-col justify-between select-none",style:{height:"21rem"},children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("span",{id:"title",className:"text-dark text-4xl font-extrabold block ",children:Object(c.jsx)(F,{id:"title",animateClass:"animate-fade",children:n.title.toUpperCase()})}),Object(c.jsx)("div",{className:"block space-y-2 w-auto font-quicksand font-medium text-2xl mt-6",children:n.feature.map((function(e){return Object(c.jsxs)("div",{className:"flex items-center font-medium ",children:[Object(c.jsx)("span",{className:"material-icons mr-2 opacity-90 ",children:"verified"}),e]})}))})]}),Object(c.jsxs)("div",{className:"flex justify-between items-end",children:[Object(c.jsx)("a",{href:"www.google.com",className:"font-medium hover:text-opacity-50 transition-opacity",children:"ask question".toUpperCase()}),Object(c.jsx)(O,{title:"ORDER HERE",icon:"arrow_right_alt"})]})]})},T=function(e){var t=e.text,n=e.right,i=e.left,r=e.position,a=[0,1,2,3],o=Object(s.useContext)(f),d=Object(l.a)(o,1)[0],j=i?r-d/100:r+d/100;return Object(c.jsxs)("div",{className:"flex  text-light-200 items-center space-x-7 min-w-max overflow-hidden relative transition-transform duration-700 ease-out transform origin-left",style:{transform:"translateX(".concat(j,"rem)")},children:[i&&Object(c.jsx)("span",{className:"flex items-center space-x-6 left-0",children:a.map((function(e){return Object(c.jsx)("span",{className:"border-4 rounded-xl border-red-200 border-opacity-80 h-0 w-56 w"},e)}))}),Object(c.jsx)("div",{className:"font-raleway font-bold  text-5xl w-full ",children:t.toUpperCase()}),n&&Object(c.jsx)("span",{className:"flex items-center space-x-6 left-0",children:a.map((function(e){return Object(c.jsx)("span",{className:"border-4 rounded-xl border-red-200 border-opacity-80 h-0 w-56 w"},e)}))})]})},Y=function(){var e=Object(s.useContext)(u),t=Object(l.a)(e,1)[0];return Object(s.useEffect)((function(){})),Object(c.jsx)("section",{className:"mt-20 mb-28 space-y-7",children:t.map((function(e){return Object(c.jsx)(T,{text:e.title,right:e.right,left:e.left,position:e.position},e.id)}))})},P=function(e){var t=e.title,n=e.price,i=e.feature,r=e.left,a=Object(s.useState)(!1),o=Object(l.a)(a,2),d=o[0],j=o[1],x=Object(s.useState)(!1),u=Object(l.a)(x,2),b=u[0],f=u[1],m=b?"border-red-100 border-4":"",h=b?"210%":"100%",p=r?" right-0":"",v=d?"flex-initial":"flex-1";return Object(c.jsx)("div",{className:"relative select-none cursor-pointer h-64",children:Object(c.jsxs)("div",{id:"parent",onClick:function(){b||d?(j(!d),setTimeout((function(){return f(!b)}),200)):(f(!b),setTimeout((function(){return j(!d)}),200))},className:"flex ".concat(p," ").concat(m," absolute bg-light-100 transform h-full rounded-3xl overflow-hidden ease-in-out duration-200 transition-all"),style:{width:h},children:[Object(c.jsxs)("div",{className:" text-dark pl-10 py-10 flex flex-col justify-between ".concat(v," "),children:[Object(c.jsx)("span",{className:"text-5xl font-bold",children:t.toUpperCase()}),Object(c.jsxs)("span",{className:"font-quicksand text-3xl font-medium",children:["Rp. ",n,"K"]})]}),d&&Object(c.jsxs)("div",{className:"py-10 pr-10 flex flex-initial flex-col justify-between",children:[Object(c.jsx)("div",{className:"flex flex-col space-y-1",children:i.map((function(e){return Object(c.jsxs)("div",{className:"inline-flex font-medium ",children:[Object(c.jsx)("span",{className:"material-icons mr-2 opacity-90 text-lg",children:"verified"}),e]})}))}),Object(c.jsx)(O,{title:"ORDER HERE",icon:"arrow_right_alt",className:"w-max"})]})]})})},R=function(){var e=Object(s.useContext)(d),t=Object(l.a)(e,1)[0],n=t.items.filter((function(e){return e.id%2===1})),i=t.items.filter((function(e){return e.id%2===0})),r=Object(s.useContext)(f),a=Object(l.a)(r,1)[0],o=4-a/300,j=a/300-4;return Object(c.jsxs)("div",{className:"grid grid-cols-4 gap-7 mt-20 mb-28",children:[Object(c.jsx)("div",{className:"grid grid-rows-2 col-start-2 gap-7 relative transform transition-transform ease-out duration-700",style:{transform:"translateY(".concat(o,"rem)")},children:n.map((function(e){return Object(c.jsx)(P,{title:e.title,price:e.price,feature:e.feature,left:!0},e.id)}))}),Object(c.jsx)("div",{className:" grid grid-rows-2 col-start-3 gap-7 relative transform transition-transform ease-out duration-700",style:{transform:"translateY(".concat(j,"rem)")},children:i.map((function(e){return Object(c.jsx)(P,{title:e.title,price:e.price,feature:e.feature},e.id)}))})]})},B=function(e){var t=e.className;return Object(c.jsxs)("div",{className:"flex space-x-2 text-dark "+t,children:[Object(c.jsx)("a",{href:"http://www.facebook.com",children:Object(c.jsx)("svg",{width:"25",height:"25",viewBox:"0 0 25 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(c.jsx)("path",{d:"M25 12.5C25 5.5957 19.4043 0 12.5 0C5.5957 0 0 5.5957 0 12.5C0 19.4043 5.5957 25 12.5 25C12.5732 25 12.6465 25 12.7197 24.9951V15.2686H10.0342V12.1387H12.7197V9.83398C12.7197 7.16309 14.3506 5.70801 16.7334 5.70801C17.876 5.70801 18.8574 5.79102 19.1406 5.83008V8.62305H17.5C16.2061 8.62305 15.9521 9.23828 15.9521 10.1416V12.1338H19.0527L18.6475 15.2637H15.9521V24.5166C21.1768 23.0176 25 18.208 25 12.5V12.5Z",fill:"#362A2A"})})}),Object(c.jsx)("a",{href:"http://www.instagram.com",children:Object(c.jsxs)("svg",{width:"25",height:"25",viewBox:"0 0 25 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(c.jsx)("path",{d:"M14.8926 12.5C14.8926 13.8214 13.8214 14.8926 12.5 14.8926C11.1786 14.8926 10.1074 13.8214 10.1074 12.5C10.1074 11.1786 11.1786 10.1074 12.5 10.1074C13.8214 10.1074 14.8926 11.1786 14.8926 12.5Z",fill:"#362A2A"}),Object(c.jsx)("path",{d:"M18.0954 8.26691C17.9804 7.95525 17.7969 7.67316 17.5585 7.4416C17.327 7.20319 17.0451 7.0197 16.7332 6.90469C16.4803 6.80646 16.1003 6.68954 15.4005 6.65768C14.6435 6.62316 14.4165 6.61572 12.5 6.61572C10.5833 6.61572 10.3564 6.62297 9.59953 6.65749C8.89972 6.68954 8.51958 6.80646 8.26686 6.90469C7.95501 7.0197 7.67291 7.20319 7.44155 7.4416C7.20313 7.67316 7.01965 7.95506 6.90444 8.26691C6.80621 8.51983 6.68929 8.89996 6.65744 9.59977C6.62292 10.3566 6.61548 10.5836 6.61548 12.5003C6.61548 14.4168 6.62292 14.6438 6.65744 15.4008C6.68929 16.1006 6.80621 16.4805 6.90444 16.7334C7.01965 17.0453 7.20294 17.3272 7.44136 17.5588C7.67291 17.7972 7.95482 17.9807 8.26667 18.0957C8.51958 18.1941 8.89972 18.311 9.59953 18.3429C10.3564 18.3774 10.5831 18.3846 12.4998 18.3846C14.4167 18.3846 14.6437 18.3774 15.4003 18.3429C16.1002 18.311 16.4803 18.1941 16.7332 18.0957C17.3592 17.8542 17.854 17.3594 18.0954 16.7334C18.1937 16.4805 18.3106 16.1006 18.3426 15.4008C18.3771 14.6438 18.3844 14.4168 18.3844 12.5003C18.3844 10.5836 18.3771 10.3566 18.3426 9.59977C18.3108 8.89996 18.1938 8.51983 18.0954 8.26691V8.26691ZM12.5 16.1858C10.4643 16.1858 8.81408 14.5358 8.81408 12.5001C8.81408 10.4644 10.4643 8.81432 12.5 8.81432C14.5356 8.81432 16.1858 10.4644 16.1858 12.5001C16.1858 14.5358 14.5356 16.1858 12.5 16.1858ZM16.3315 9.52996C15.8558 9.52996 15.4702 9.14429 15.4702 8.6686C15.4702 8.19291 15.8558 7.80724 16.3315 7.80724C16.8072 7.80724 17.1929 8.19291 17.1929 8.6686C17.1927 9.14429 16.8072 9.52996 16.3315 9.52996Z",fill:"#362A2A"}),Object(c.jsx)("path",{d:"M12.5 0C5.5975 0 0 5.5975 0 12.5C0 19.4025 5.5975 25 12.5 25C19.4025 25 25 19.4025 25 12.5C25 5.5975 19.4025 0 12.5 0ZM19.6344 15.4593C19.5997 16.2233 19.4782 16.745 19.3008 17.2016C18.928 18.1658 18.1658 18.928 17.2016 19.3008C16.7452 19.4782 16.2233 19.5995 15.4594 19.6344C14.694 19.6693 14.4495 19.6777 12.5002 19.6777C10.5507 19.6777 10.3064 19.6693 9.54075 19.6344C8.77686 19.5995 8.255 19.4782 7.79858 19.3008C7.31945 19.1206 6.88572 18.8381 6.52714 18.4729C6.16207 18.1145 5.87959 17.6805 5.69935 17.2016C5.52197 16.7452 5.40047 16.2233 5.36575 15.4594C5.33047 14.6938 5.32227 14.4493 5.32227 12.5C5.32227 10.5507 5.33047 10.3062 5.36556 9.54075C5.40028 8.77666 5.52158 8.255 5.69897 7.79839C5.87921 7.31945 6.16188 6.88553 6.52714 6.52714C6.88553 6.16188 7.31945 5.8794 7.79839 5.69916C8.255 5.52177 8.77666 5.40047 9.54075 5.36556C10.3062 5.33066 10.5507 5.32227 12.5 5.32227C14.4493 5.32227 14.6938 5.33066 15.4593 5.36575C16.2233 5.40047 16.745 5.52177 17.2016 5.69897C17.6805 5.87921 18.1145 6.16188 18.4731 6.52714C18.8381 6.88572 19.1208 7.31945 19.3008 7.79839C19.4784 8.255 19.5997 8.77666 19.6346 9.54075C19.6695 10.3062 19.6777 10.5507 19.6777 12.5C19.6777 14.4493 19.6695 14.6938 19.6344 15.4593V15.4593Z",fill:"#362A2A"})]})}),Object(c.jsx)("a",{href:"http://www.twitter.com",children:Object(c.jsx)("svg",{width:"25",height:"25",viewBox:"0 0 25 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(c.jsx)("path",{d:"M12.5 0C5.5975 0 0 5.5975 0 12.5C0 19.4025 5.5975 25 12.5 25C19.4025 25 25 19.4025 25 12.5C25 5.5975 19.4025 0 12.5 0ZM18.2074 9.74617C18.2129 9.86919 18.2156 9.99279 18.2156 10.117C18.2156 13.9082 15.3297 18.28 10.0523 18.2802H10.0525H10.0523C8.43201 18.2802 6.92425 17.8053 5.65453 16.9914C5.87902 17.0179 6.10752 17.0311 6.33888 17.0311C7.68318 17.0311 8.92029 16.5726 9.90238 15.803C8.64639 15.7797 7.58743 14.9502 7.22198 13.8102C7.39689 13.8437 7.57675 13.862 7.76119 13.862C8.02307 13.862 8.27675 13.8268 8.51784 13.7609C7.20501 13.4981 6.21605 12.3379 6.21605 10.9486C6.21605 10.9356 6.21605 10.924 6.21643 10.9119C6.60305 11.1269 7.04517 11.2562 7.51591 11.2707C6.74553 10.7567 6.23913 9.87797 6.23913 8.88252C6.23913 8.35686 6.38123 7.86438 6.62766 7.44038C8.04253 9.17645 10.157 10.3182 12.5416 10.4382C12.4924 10.228 12.467 10.009 12.467 9.78394C12.467 8.20007 13.752 6.91509 15.3364 6.91509C16.1617 6.91509 16.9071 7.26395 17.4307 7.82166C18.0843 7.69272 18.6981 7.45392 19.2526 7.12528C19.038 7.79495 18.5833 8.35686 17.9909 8.7122C18.5713 8.64277 19.1244 8.48885 19.6384 8.26035C19.2545 8.83579 18.7675 9.34124 18.2074 9.74617V9.74617Z",fill:"#362A2A"})})})]})},U=function(){return Object(c.jsx)("footer",{className:"mt-24 container mx-auto mb-10",children:Object(c.jsxs)("div",{className:"grid grid-cols-3 bg-light-100 rounded-full p-2",children:[Object(c.jsx)(B,{className:"my-auto ml-4"}),Object(c.jsx)("div",{className:"mx-auto my-auto",children:Object(c.jsx)(C,{})}),Object(c.jsx)(O,{title:"BACK TO TOP",icon:"keyboard_capslock",className:"w-max ml-auto ",bg:"bg-dark"})]})})},L=function(){return Object(s.useEffect)((function(){}),[]),Object(c.jsx)(m,{children:Object(c.jsxs)("div",{id:"app",className:"bg-dark relative overflow-x-hidden transition-all duration-500 ease-in-out h-full",children:[Object(c.jsx)(N,{position:"z-20 left-0",translateX:-12,translateY:20,divideX:700,divideY:500}),Object(c.jsx)(N,{position:"right-0",translateX:9,translateY:10,divideX:600,divideY:400}),Object(c.jsx)(N,{position:"left-0 ",translateX:10,translateY:90,divideX:700,divideY:700}),Object(c.jsx)(N,{position:"right-0",translateX:-12,translateY:120,divideX:1400,divideY:-1100}),Object(c.jsxs)("header",{className:"container mx-auto relative ",children:[Object(c.jsx)(w,{}),Object(c.jsx)(E,{}),Object(c.jsx)(y,{}),Object(c.jsx)(O,{title:"BECOME MEMBER",className:"mx-auto font-bold"})]}),Object(c.jsxs)("main",{className:"container mx-auto relative my-20 w-full px-11 ",children:[Object(c.jsxs)(j,{children:[Object(c.jsx)(N,{position:" w-full",translateX:33,translateY:2,typeX:"%",divideX:1e3,divideY:400}),Object(c.jsxs)("section",{id:"cards",className:"grid grid-cols-2 gap-9 relative z-10",children:[Object(c.jsx)(A,{}),Object(c.jsx)(M,{})]})]}),Object(c.jsx)(b,{children:Object(c.jsx)(Y,{})}),Object(c.jsxs)("section",{className:"w-full",children:[Object(c.jsxs)("div",{className:"text-center text-light-200",children:[Object(c.jsx)("h1",{className:"font-bold text-4xl mb-2",children:"FAVORITE PLAN"}),Object(c.jsx)("span",{className:"text-2xl",children:"Choose Your Style"}),Object(c.jsx)("div",{className:" w-1/2 mx-auto mt-6",children:Object(c.jsx)("p",{className:"font-quicksand text-xl font-medium",children:"Decide what plan you want to your life and enjoy it. Full support from our team. We always ready to give you the best interconnection experience with our services."})})]}),Object(c.jsx)(j,{children:Object(c.jsx)(R,{})}),Object(c.jsxs)("div",{className:"flex text-light-200 space-x-5 mx-auto w-2/5",children:[Object(c.jsxs)("div",{className:"text-right flex flex-col justify-between",children:[Object(c.jsx)("span",{className:"font-bold text-4xl font-raleway ",children:"FULL SUPPORT"}),Object(c.jsx)(O,{title:"CONTACT US",icon:"arrow_right_alt",className:"font-bold w-max"})]}),Object(c.jsx)("p",{className:"text-lg font-quicksand font-medium",children:"Decide what plan you want to your life and enjoy it. Full support from our team. We always ready to give you the best interconnection experience with our services."})]})]})]}),Object(c.jsx)(U,{})]})})},V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),i(e),r(e)}))};n(13),n(14);a.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(L,{})}),document.getElementById("root")),V()}},[[15,1,2]]]);
//# sourceMappingURL=main.ff8474f8.chunk.js.map