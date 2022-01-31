"use strict";(self.webpackChunkmcss_docs=self.webpackChunkmcss_docs||[]).push([[580],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return v}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(a),v=r,h=u["".concat(s,".").concat(v)]||u[v]||c[v]||o;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function v(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1165:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],l={sidebar_position:5,title:"Changing the version of Java",description:"Change the global Java path, or per-server"},s=void 0,p={unversionedId:"advanced/java-path-update",id:"advanced/java-path-update",title:"Changing the version of Java",description:"Change the global Java path, or per-server",source:"@site/docs/advanced/java-path-update.md",sourceDirName:"advanced",slug:"/advanced/java-path-update",permalink:"/advanced/java-path-update",editUrl:"https://github.com/mcserversoft/documentation/edit/main/docs/advanced/java-path-update.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Changing the version of Java",description:"Change the global Java path, or per-server"},sidebar:"tutorialSidebar",previous:{title:"Java versions",permalink:"/advanced/java-version"},next:{title:"About the API",permalink:"/API/about"}},d=[{value:"Finding the path to the Java executable",id:"-java-path",children:[],level:2},{value:"Globally",id:"-globally",children:[],level:2},{value:"Per server",id:"-per-server",children:[],level:2}],c={toc:d};function u(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"With MCSS you can use different versions of java for each of your servers, or set a global override for the version of java that is used by all servers."),(0,o.kt)("h2",{id:"-java-path"},"Finding the path to the Java executable"),(0,o.kt)("p",null,"Once you have installed the Java version you need (refer to the ",(0,o.kt)("a",{parentName:"p",href:"java-version"},"java version guide")," for more information), you need to locate the Java executable."),(0,o.kt)("p",null,"To find the version you need, go to ",(0,o.kt)("inlineCode",{parentName:"p"},"C:\\Program Files\\Java")," and look for the folder that contains the version you need. Open that folder then the ",(0,o.kt)("inlineCode",{parentName:"p"},"bin")," folder."),(0,o.kt)("p",null,"Copy the path to this folder as shown below (in this case, we're using java 11.0.10)"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"explorer path",src:a(4205).Z})),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Alternative Folders")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Some providers of Java builds may place the Java executable in a different folder. Here is a list of known alternative folders: ",(0,o.kt)("br",null),"\nAdoptium 17: ",(0,o.kt)("inlineCode",{parentName:"p"},"C:\\Program Files\\Eclipse Adoptium")," ",(0,o.kt)("br",null),"\nAdoptium 16: ",(0,o.kt)("inlineCode",{parentName:"p"},"C:\\Program Files\\Eclipse Foundation")," ",(0,o.kt)("br",null)))),(0,o.kt)("h2",{id:"-globally"},"Globally"),(0,o.kt)("p",null,"If you only have one server or if your servers all use the same version of Java, you can set the path globally.\nTo do so, open MCSS then at the top click on ",(0,o.kt)("inlineCode",{parentName:"p"},"file > options"),"."),(0,o.kt)("p",null,'Scroll down and you will see a text box labeled "Global Java Path override". Paste the path to the folder containing the Java executable you just found and add ',(0,o.kt)("inlineCode",{parentName:"p"},"\\java.exe")," at the end."),(0,o.kt)("p",null,"The path you entered will be used for all servers and should look something like this (in this case we're using java 11.0.10):"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"explorer path",src:a(25).Z})),(0,o.kt)("h2",{id:"-per-server"},"Per server"),(0,o.kt)("p",null,"If you have multiple servers that require different versions of Java, you can override the global Java setting. To do so, open the server settings by clicking the \u2699\ufe0f then navigate to the advanced tab."),(0,o.kt)("p",null,'You will see a text box labeled "Local Java Path override". Paste the path to the folder containing the Java executable you just found and add ',(0,o.kt)("inlineCode",{parentName:"p"},"\\java.exe")," at the end."),(0,o.kt)("p",null,"The path you entered will be used for this server and should look something like this (in this case we're using java 11.0.10):"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"explorer path",src:a(255).Z})))}u.isMDXComponent=!0},4205:function(e,t,a){t.Z=a.p+"assets/images/explorer-ad4e90d1488929f4417c286200534ef4.png"},25:function(e,t,a){t.Z=a.p+"assets/images/java-path-override-bf6a9f90e7ff77b3dc7a1f5cabcc71b2.png"},255:function(e,t,a){t.Z=a.p+"assets/images/local-path-override-6c014e5a558d07ff6e9ab474bfc15869.png"}}]);