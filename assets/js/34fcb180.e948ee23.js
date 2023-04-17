"use strict";(self.webpackChunkmcss_docs=self.webpackChunkmcss_docs||[]).push([[597],{3905:(e,A,n)=>{n.d(A,{Zo:()=>l,kt:()=>u});var t=n(7294);function a(e,A,n){return A in e?Object.defineProperty(e,A,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[A]=n,e}function r(e,A){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);A&&(t=t.filter((function(A){return Object.getOwnPropertyDescriptor(e,A).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var A=1;A<arguments.length;A++){var n=null!=arguments[A]?arguments[A]:{};A%2?r(Object(n),!0).forEach((function(A){a(e,A,n[A])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(A){Object.defineProperty(e,A,Object.getOwnPropertyDescriptor(n,A))}))}return e}function c(e,A){if(null==e)return{};var n,t,a=function(e,A){if(null==e)return{};var n,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],A.indexOf(n)>=0||(a[n]=e[n]);return a}(e,A);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],A.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=t.createContext({}),s=function(e){var A=t.useContext(i),n=A;return e&&(n="function"==typeof e?e(A):o(o({},A),e)),n},l=function(e){var A=s(e.components);return t.createElement(i.Provider,{value:A},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var A=e.children;return t.createElement(t.Fragment,{},A)}},v=t.forwardRef((function(e,A){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=s(n),v=a,u=p["".concat(i,".").concat(v)]||p[v]||d[v]||r;return n?t.createElement(u,o(o({ref:A},l),{},{components:n})):t.createElement(u,o({ref:A},l))}));function u(e,A){var n=arguments,a=A&&A.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=v;var c={};for(var i in A)hasOwnProperty.call(A,i)&&(c[i]=A[i]);c.originalType=e,c[p]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<r;s++)o[s]=n[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}v.displayName="MDXCreateElement"},9453:(e,A,n)=>{n.r(A),n.d(A,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>s});var t=n(7462),a=(n(7294),n(3905));const r={sidebar_position:3,title:"Tweaking the Java Path Detection",description:"Adding more locations to the Java Path Detection",keywords:["java","path","detection"]},o=void 0,c={unversionedId:"advanced/tweak-java-path-detection",id:"advanced/tweak-java-path-detection",title:"Tweaking the Java Path Detection",description:"Adding more locations to the Java Path Detection",source:"@site/docs/advanced/tweak-java-path-detection.md",sourceDirName:"advanced",slug:"/advanced/tweak-java-path-detection",permalink:"/advanced/tweak-java-path-detection",draft:!1,editUrl:"https://github.com/mcserversoft/documentation/edit/main/docs/advanced/tweak-java-path-detection.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Tweaking the Java Path Detection",description:"Adding more locations to the Java Path Detection",keywords:["java","path","detection"]},sidebar:"tutorialSidebar",previous:{title:"Changing the version of Java",permalink:"/advanced/java-path-update"},next:{title:"Getting started with the panel",permalink:"/webpanel/getting-started"}},i={},s=[{value:"Adding more locations to search",id:"-edit-locations",level:2}],l={toc:s},p="wrapper";function d(e){let{components:A,...r}=e;return(0,a.kt)(p,(0,t.Z)({},l,r,{components:A,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In mcss you can use the 'Java Path Picker' to easily change the java version of the server. Out of the box this feature doesn't work when you install Java in non-typical locations."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"explorer path",src:n(3730).Z,width:"616",height:"158"})),(0,a.kt)("p",null,"These are the default search locations:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"C:\\Program Files (x86)\\Java\nC:\\Program Files\\Java\nC:\\Program Files (x86)\\Eclipse Adoptium\nC:\\Program Files\\Eclipse Adoptium\nC:\\Program Files (x86)\\Eclipse Foundation\nC:\\Program Files\\Eclipse Foundation\n")),(0,a.kt)("h2",{id:"-edit-locations"},"Adding more locations to search"),(0,a.kt)("p",null,"If you have installed Java in another locations you can manually add these to the mcss config file (",(0,a.kt)("inlineCode",{parentName:"p"},"resources\\mcss_config.json"),").\nMcss must be fully closed before you make these changes. The setting is called ",(0,a.kt)("inlineCode",{parentName:"p"},"potentialInstalledJavaLocations"),"."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'...\n"potentialInstalledJavaLocations": [\n    ...\n    "C:\\\\Program Files (x86)\\\\Eclipse Foundation",\n    "C:\\\\Program Files\\\\Eclipse Foundation",\n    "D:\\\\Program Files\\\\Eclipse Foundation"\n]\n...\n')))}d.isMDXComponent=!0},3730:(e,A,n)=>{n.d(A,{Z:()=>t});const t="data:image/png;base64,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"}}]);