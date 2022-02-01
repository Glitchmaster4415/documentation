"use strict";(self.webpackChunkmcss_docs=self.webpackChunkmcss_docs||[]).push([[18],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2376:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return w},default:function(){return I},frontMatter:function(){return g},metadata:function(){return b},toc:function(){return y}});var a=n(7462),r=n(3366),o=n(7294),i=n(3905),s=n(2389),l=n(9443);var u=function(){var e=(0,o.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},c=n(3616),d=n(6010),p="tabItem_vU9c";function m(e){var t,n,r,i=e.lazy,s=e.block,l=e.defaultValue,m=e.values,f=e.groupId,v=e.className,h=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=m?m:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),w=(0,c.lx)(g,(function(e,t){return e.value===t.value}));if(w.length>0)throw new Error('Docusaurus error: Duplicate values "'+w.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===l?l:null!=(t=null!=l?l:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=h[0])?void 0:r.props.value;if(null!==b&&!g.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=u(),k=y.tabGroupChoices,I=y.setTabGroupChoices,T=(0,o.useState)(b),P=T[0],x=T[1],A=[],O=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var E=k[f];null!=E&&E!==P&&g.some((function(e){return e.value===E}))&&x(E)}var N=function(e){var t=e.currentTarget,n=A.indexOf(t),a=g[n].value;a!==P&&(O(t),x(a),null!=f&&I(f,a))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=A.indexOf(e.currentTarget)+1;n=A[a]||A[0];break;case"ArrowLeft":var r=A.indexOf(e.currentTarget)-1;n=A[r]||A[A.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.Z)("tabs",{"tabs--block":s},v)},g.map((function(e){var t=e.value,n=e.label,r=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:P===t?0:-1,"aria-selected":P===t,key:t,ref:function(e){return A.push(e)},onKeyDown:j,onFocus:N,onClick:N},r,{className:(0,d.Z)("tabs__item",p,null==r?void 0:r.className,{"tabs__item--active":P===t})}),null!=n?n:t)}))),i?(0,o.cloneElement)(h.filter((function(e){return e.props.value===P}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==P})}))))}function f(e){var t=(0,s.Z)();return o.createElement(m,(0,a.Z)({key:String(t)},e))}var v=function(e){var t=e.children,n=e.hidden,a=e.className;return o.createElement("div",{role:"tabpanel",hidden:n,className:a},t)},h=["components"],g={sidebar_position:3,title:"Getting started",slug:"get-started-api",description:"Tips and softwares to develop with the API"},w=void 0,b={unversionedId:"API/Usage/getting-started",id:"API/Usage/getting-started",title:"Getting started",description:"Tips and softwares to develop with the API",source:"@site/docs/API/Usage/getting-started.mdx",sourceDirName:"API/Usage",slug:"/API/Usage/get-started-api",permalink:"/API/Usage/get-started-api",editUrl:"https://github.com/mcserversoft/documentation/edit/main/docs/API/Usage/getting-started.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Getting started",slug:"get-started-api",description:"Tips and softwares to develop with the API"},sidebar:"tutorialSidebar",previous:{title:"Adding Users",permalink:"/API/guides/users"},next:{title:"FAQ",permalink:"/faq"}},y=[{value:"Making API calls",id:"-api-calls",children:[{value:"Standalone Software",id:"-standalone-software",children:[],level:3},{value:"IDE extensions",id:"-ide-extensions",children:[],level:3}],level:2},{value:"API functions",id:"-api-functions",children:[],level:2}],k={toc:y};function I(e){var t=e.components,n=(0,r.Z)(e,h);return(0,i.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"This guide is aimed at developers")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The following tips and information is aimed at developers wanting to create apps that utilize the API. If you are a regular user this may not be for you.\nAs such some steps will assume that you already have basic knowledge of how API calls work and that you can read a documentation."))),(0,i.kt)("h2",{id:"-api-calls"},"Making API calls"),(0,i.kt)("p",null,"In order to make API calls you need special software."),(0,i.kt)("h3",{id:"-standalone-software"},"Standalone Software"),(0,i.kt)("p",null,"Standalone software allow you to make API calls from a nice interface. These softwares support everything you need, from simple HTTP requests to advanced features like authentication."),(0,i.kt)(f,{mdxType:"Tabs"},(0,i.kt)(v,{value:"postman",label:"Postman",mdxType:"TabItem"},"Free forever, with unlimited calls and APIs. You can add up to three people to your team to share your work with them. You can download postman ",(0,i.kt)("a",{href:"https://www.postman.com/downloads/"},"here"),(0,i.kt)("img",{src:"/img/docs/intro-api/postman.png"})),(0,i.kt)(v,{value:"insomnia",label:"Insomnia",mdxType:"TabItem"},"Free forever, with unlimited calls and APIs. You can share your work with as many people as you want. You can download Insomnia ",(0,i.kt)("a",{href:"https://insomnia.rest/download"},"here"),(0,i.kt)("img",{src:"/img/docs/intro-api/insomnia.png"}))),(0,i.kt)("h3",{id:"-ide-extensions"},"IDE extensions"),(0,i.kt)("p",null,"If you plan on writing code that leverages the API, you may want to use an IDE extension. Visual Studio Code being the most popular, here are a few options for it."),(0,i.kt)(f,{mdxType:"Tabs"},(0,i.kt)(v,{value:"rest client",label:"Rest Client",mdxType:"TabItem"},"This option is more hands-on, requiring you to write all your requests. But it gives you more control and a more concise interface. You can download it ",(0,i.kt)("a",{href:"https://marketplace.visualstudio.com/items?itemName=humao.rest-client"},"here"),(0,i.kt)("img",{src:"/img/docs/intro-api/rest-client.png"})),(0,i.kt)(v,{value:"thunder client",label:"Thunder Client",mdxType:"TabItem"},"The cleanest of the two options, with a dedicated window similar to Insomnia's UI. You can download this extension ",(0,i.kt)("a",{href:"https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client"},"here"),(0,i.kt)("img",{src:"/img/docs/intro-api/thunder-client.png"}))),(0,i.kt)("h2",{id:"-api-functions"},"API functions"),(0,i.kt)("p",null,"View all  ",(0,i.kt)("a",{parentName:"p",href:"https://documenter.getpostman.com/view/7749159/TzJsexSC"},"implemented functions"),"."))}I.isMDXComponent=!0}}]);