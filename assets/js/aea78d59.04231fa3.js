"use strict";(self.webpackChunkmcss_docs=self.webpackChunkmcss_docs||[]).push([[749],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),h=o,u=m["".concat(l,".").concat(h)]||m[h]||d[h]||r;return n?a.createElement(u,i(i({ref:t},p),{},{components:n})):a.createElement(u,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1104:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:1,title:"Getting started with the panel",description:"How to get started with the integrated remote panel",keywords:["remote","panel","api","mcss","web","control","internet","enable"],slug:"getting-started"},i=void 0,s={unversionedId:"basic/panel/getting-started",id:"basic/panel/getting-started",title:"Getting started with the panel",description:"How to get started with the integrated remote panel",source:"@site/docs/basic/panel/getting-started.md",sourceDirName:"basic/panel",slug:"/basic/panel/getting-started",permalink:"/basic/panel/getting-started",draft:!1,editUrl:"https://github.com/mcserversoft/documentation/edit/main/docs/basic/panel/getting-started.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Getting started with the panel",description:"How to get started with the integrated remote panel",keywords:["remote","panel","api","mcss","web","control","internet","enable"],slug:"getting-started"},sidebar:"tutorialSidebar",previous:{title:"Supported server files",permalink:"/basic/import-server/supported-server-files"},next:{title:"Find your IP",permalink:"/networking/find-ip"}},l={},c=[{value:"Enabling the remote panel",id:"-enable-panel",level:2},{value:"Accessing the panel locally",id:"-local-access",level:2},{value:"Accessing the panel from your local network",id:"-LAN-access",level:2},{value:"Accessing the panel from anywhere",id:"-anywhere-access",level:2}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Your connection is not private")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},'When you first connect to the panel, you will get a message saying "your connection is not private". This is due to the way MCSS handles the connection. Feel safe to click on "Advanced" and "connect anyways".',(0,o.kt)("br",null),"\nTo avoid seeing this warning, you can get a mcss.app subdomain by supporting the project. Learn more ",(0,o.kt)("a",{parentName:"p",href:"https://mcss.app"},"here")))),(0,o.kt)("h2",{id:"-enable-panel"},"Enabling the remote panel"),(0,o.kt)("p",null,"To enable the remote panel, navigate to ",(0,o.kt)("inlineCode",{parentName:"p"},"file > options"),' then  scroll down to the "Remote Access / Developer API" section.'),(0,o.kt)("p",null,"If you haven't enabled the API already, follow ",(0,o.kt)("a",{parentName:"p",href:"/API/about#-api-enable"},"this guide")," to do so."),(0,o.kt)("p",null,'If the API is enabled already, click on "Enable Web Panel", then close MCSS completely for the changes to take effect.'),(0,o.kt)("h2",{id:"-local-access"},"Accessing the panel locally"),(0,o.kt)("p",null,'If the option to "Show Web API/Panel on startup" is enabled, the panel will be automatically opened when you start MCSS.'),(0,o.kt)("p",null,"If not, you can connect from the computer running MCSS by navigating to ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost:25560")," from your web browser."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Local only")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This will only work if you are accessing the web panel from the computer that is running MCSS. As such it is only recommended for testing purposes, as the GUI offers more features."))),(0,o.kt)("h2",{id:"-LAN-access"},"Accessing the panel from your local network"),(0,o.kt)("p",null,'To have access to the panel from another PC than the one hosting mcss, first enable remote access in the settings by checking "Allow Remote Access" in the API section.'),(0,o.kt)("p",null,"You can now access your servers from any other PC ",(0,o.kt)("strong",{parentName:"p"},"on your local network")," by opening a browser and going to ",(0,o.kt)("inlineCode",{parentName:"p"},"http://<host's local ip>:<API port>"),"."),(0,o.kt)("h2",{id:"-anywhere-access"},"Accessing the panel from anywhere"),(0,o.kt)("p",null,"You can also enable fully remote access to allow anyone with credentials to control your MCSS instance."),(0,o.kt)("p",null,"To do this, first ",(0,o.kt)("a",{parentName:"p",href:"#-LAN-access"},"enable remote access in mcss"),"."),(0,o.kt)("p",null,"You will have to port forward the API through your router in order for other people to be able to use it. We have a complete guide on that ",(0,o.kt)("a",{parentName:"p",href:"/networking/port-forwarding"},"here"),"."),(0,o.kt)("p",null,"You can now access the panel from anywhere by going to ",(0,o.kt)("inlineCode",{parentName:"p"},"http://<public ip>:<API port>"),"."),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Security")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},'If you enable remote access, it is highly recommended that you also enable SSL. This will allow your connection to the panel to be encrypted, protecting your password and servers. Do this by checking "Enable SSl" in the API settings.'))),(0,o.kt)("p",null,"However, doing so will cause warnings like this one to appear in browsers :\n",(0,o.kt)("img",{alt:"certificate warning",src:n(7456).Z,width:"853",height:"709"})),(0,o.kt)("p",null,"This is normal and expected as MCSS uses a self-signed certificate. Using a verified one isn't possible here since certificates are only valid for domain names and not IPs, and a given certificate can only be used on one server at a time."),(0,o.kt)("p",null,"Your panel should now be accessible by going to ",(0,o.kt)("inlineCode",{parentName:"p"},"https://<your public ip>:<API port>")," and dissmissing the warning."))}d.isMDXComponent=!0},7456:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ssl-warning-ddf407913588b23e9b3d52ffc9ab1423.png"}}]);