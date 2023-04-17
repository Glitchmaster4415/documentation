"use strict";(self.webpackChunkmcss_docs=self.webpackChunkmcss_docs||[]).push([[757],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),u=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(r),h=n,f=d["".concat(s,".").concat(h)]||d[h]||c[h]||a;return r?o.createElement(f,i(i({ref:t},p),{},{components:r})):o.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},4190:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var o=r(7462),n=(r(7294),r(3905));const a={sidebar_position:2,title:"Port forwarding",description:"Opening your server to the internet to allow your friends to join",keywords:["port","forward","forwarding","port-forward; port-forwarding","network","friends","join","internet"]},i=void 0,l={unversionedId:"networking/port-forwarding",id:"networking/port-forwarding",title:"Port forwarding",description:"Opening your server to the internet to allow your friends to join",source:"@site/docs/networking/port-forwarding.md",sourceDirName:"networking",slug:"/networking/port-forwarding",permalink:"/networking/port-forwarding",draft:!1,editUrl:"https://github.com/mcserversoft/documentation/edit/main/docs/networking/port-forwarding.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Port forwarding",description:"Opening your server to the internet to allow your friends to join",keywords:["port","forward","forwarding","port-forward; port-forwarding","network","friends","join","internet"]},sidebar:"tutorialSidebar",previous:{title:"Find your IP",permalink:"/networking/find-ip"},next:{title:"Troubleshooting",permalink:"/networking/troubleshooting"}},s={},u=[{value:"Introduction",id:"-introduction",level:2},{value:"Different network devices",id:"-different-network-devices",level:2},{value:"Setting-up the port forwarding rule",id:"-setting-up-the-port-forwarding-rule",level:2},{value:"Step 1 : make sure that you have a compatible router",id:"-step-1",level:3},{value:"Step 2: Find the ip of the modem/device (default gateway)",id:"-step-2",level:3},{value:"Step 3 : access the router interface",id:"-step-3",level:3},{value:"Step 4: setting up the port forward",id:"-step-4",level:3}],p={toc:u},d="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"-introduction"},"Introduction"),(0,n.kt)("p",null,"I could have just written an A to Z tutorial but at the end of the day you would still have no idea what you actually did. Troubleshooting problems and maintaining your network would be tricky and painful. So in this guide I'll be focusing on port forwarding and the basic logic around it."),(0,n.kt)("p",null,"Port forwarding or port mapping isn't that difficult, it might look complicated at first but it really isn't. The purpose of port forwarding is to make a specific programs on your computer accessible to other computers on the internet. It is commonly used for hosting game servers, peer-to-peer transfers, voice-over-ip applications and much more."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Overview of two networks. In the first one, port forwarding isn&#39;t setup correctly and fails, in the seconds everything works great",src:r(2503).Z,width:"670",height:"440"})),(0,n.kt)("p",null,"It isn't something you need to configure on your computer but in your modem's and/or router's web interface. In most household networks the modem contains a router with wireless capability and everything is hooked up to that. So in that case you would only need to change the settings in the modem itself."),(0,n.kt)("p",null,"In my case, I have a modem with the wireless features turned off and I've hooked up a more powerful router to the modem. So I will need to port forward the modem and the external router."),(0,n.kt)("p",null,"As you can see it becomes a bit confusing, if you don't know how your network is setup."),(0,n.kt)("h2",{id:"-different-network-devices"},"Different network devices"),(0,n.kt)("p",null,"In any network you might find one of these devices:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Device"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Modem"),(0,n.kt)("td",{parentName:"tr",align:null},"This is usually provided by your internet service provider, ISP for short. Simply put: it provides a way to receive and send data needed for your telephone, TV and internet connection.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Router"),(0,n.kt)("td",{parentName:"tr",align:null},"A device that creates a network between the computers in your home by wire or wifi. Many internet provider install modems with an built-in router. (with or without wireless capabilities)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Switch"),(0,n.kt)("td",{parentName:"tr",align:null},"Looks the same as a router but it does less. You would use a switch to expand your network, ",(0,n.kt)("em",{parentName:"td"},"ex. 1 cable goes in, 3 cables go elsewhere."))))),(0,n.kt)("p",null,"So go ahead and look around to see how your network is setup."),(0,n.kt)("h2",{id:"-setting-up-the-port-forwarding-rule"},"Setting-up the port forwarding rule"),(0,n.kt)("p",null,"Now that you have a good sense on which router/modem you are running behind. It's finally time to connect to the machine that you want to configure."),(0,n.kt)("p",null,"Every manufacturer has its own interface, so they all look different. Unfortunately it would be impossible for us to make a detailed tutorial on how to set up a redirect for everyone, but here is a general guide on how to port forward for a Minecraft server."),(0,n.kt)("h3",{id:"-step-1"},"Step 1 : make sure that you have a compatible router"),(0,n.kt)("p",null,"To have access to port forwarding, your internet connection must be wired (xDSL or fiber). This means that if you have a 4G/cellular router, it will be impossible for you to open a port of your network. However, there are some options to allow outside connections even if you can't port forward, like ngrok. See on ",(0,n.kt)("a",{parentName:"p",href:"https://ngrok.com/"},"their website")," for more infos and detailed instructions."),(0,n.kt)("p",null,"If you have a wired internet, it is very likely that your router will support port forwarding, but it might be possible that your ISP has blocked this feature."),(0,n.kt)("h3",{id:"-step-2"},"Step 2: Find the ip of the modem/device (default gateway)"),(0,n.kt)("p",null,"Open up a command line prompt, you can do this by pressing ",(0,n.kt)("inlineCode",{parentName:"p"},"Windows Key + R")," and type ",(0,n.kt)("inlineCode",{parentName:"p"},"cmd")," and hit ",(0,n.kt)("kbd",null,"Enter"),". Or you can search for ",(0,n.kt)("inlineCode",{parentName:"p"},"Command Prompt")," under your apps."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Partial screenshot of a cmd window",src:r(5740).Z,width:"670",height:"174"})),(0,n.kt)("p",null,"Type ",(0,n.kt)("var",null,"ipconfig")," and hit ",(0,n.kt)("kbd",null,"Enter"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Partial screenshot of a cmd window",src:r(8655).Z,width:"670",height:"174"})),(0,n.kt)("p",null,"This is my result, it will look different but the layout is more or less the same. What we need it the IP address of the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Default Gateway")),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Partial screenshot of a cmd window",src:r(5121).Z,width:"670",height:"379"})),(0,n.kt)("h3",{id:"-step-3"},"Step 3 : access the router interface"),(0,n.kt)("p",null,"Open a browser and type the address you got from the command prompt into the address bar."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Screenshot of the browser Opera with a login screen of the router",src:r(4163).Z,width:"700",height:"645"})),(0,n.kt)("p",null,"At this point, you will need to know the admin password of you router.\nIf it was never changed, it might be the name/serial number of your router. Try the different numbers you can find written on your router, often on the back. If none works, you can search for the default passwords that exists by googling the model number of your router."),(0,n.kt)("h3",{id:"-step-4"},"Step 4: setting up the port forward"),(0,n.kt)("p",null,"First, check ",(0,n.kt)("a",{parentName:"p",href:"https://portforward.com/router.htm"},"this website"),", they have over hundreds of tutorials for almost every brand and model. If yours isn't listed and you can't find any similar model, here are the general steps to follow :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"turn on the advanced mode if there is one")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"find the settings and open the local network category")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'find the "port mapping" or "port management" page')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"create a new forwarding rule")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"enter the local ip of your PC (it can be found with the same method as Step 2, just look for ",(0,n.kt)("inlineCode",{parentName:"p"},"IPv4 address")," instead of default gateway)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"choose the TCP protocol, and set both the public/remote and private/local port to 25565 (or another port if you changed it in your server's settings)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"apply all the changes"))),(0,n.kt)("p",null,"Once you have set the forwarding rule, you can check if it works. Make sure your Minecraft server is running and go to ",(0,n.kt)("a",{parentName:"p",href:"https://canyouseeme.org/"},"canyouseeme.org"),". Enter your server's port and click ",(0,n.kt)("kbd",null,"check port"),". If your rule was properly setup, it should indicate that the port is open."),(0,n.kt)("p",null,"You can now share your public ip to your friends and ask them to connect to your server with it."),(0,n.kt)("p",null,"I hope this guide has been somewhat useful to you, good luck!"))}c.isMDXComponent=!0},5740:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/portforward_cmd-99c310ab42af072c4c61f37015643cb4.png"},8655:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/portforward_cmd_ipconfig-e51c379637dcb7d618a9af6d5e0f8c4e.png"},5121:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/portforward_cmd_result-281196cea031c477f1195278149e17f6.png"},2503:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/portforward_overview-83caa291f31ad4d3ffb2018ee123b334.png"},4163:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/router_login-7828ff587bbc55d3e15ebc05ec6e7af1.png"}}]);