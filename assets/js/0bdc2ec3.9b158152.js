"use strict";(self.webpackChunkmcss_docs=self.webpackChunkmcss_docs||[]).push([[84],{9850:(e,r,A)=>{A.r(r),A.d(r,{assets:()=>s,contentTitle:()=>t,default:()=>d,frontMatter:()=>o,metadata:()=>n,toc:()=>c});var a=A(5893),i=A(1151);const o={sidebar_position:3,title:"Manually creating a Fabric server",description:"Steps to create a new Fabric server, along with a video.",keywords:["fabric","server","create","tutorial","MCSS","mods","modded"]},t=void 0,n={id:"basic/create-server/Fabric/create-fabric-server-manually",title:"Manually creating a Fabric server",description:"Steps to create a new Fabric server, along with a video.",source:"@site/docs/basic/create-server/Fabric/create-fabric-server-manually.md",sourceDirName:"basic/create-server/Fabric",slug:"/basic/create-server/Fabric/create-fabric-server-manually",permalink:"/basic/create-server/Fabric/create-fabric-server-manually",draft:!1,unlisted:!1,editUrl:"https://github.com/mcserversoft/documentation/edit/main/docs/basic/create-server/Fabric/create-fabric-server-manually.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Manually creating a Fabric server",description:"Steps to create a new Fabric server, along with a video.",keywords:["fabric","server","create","tutorial","MCSS","mods","modded"]},sidebar:"tutorialSidebar",previous:{title:"Sourcing a server file",permalink:"/basic/create-server/sourcing-server-file"},next:{title:"Supported server types",permalink:"/basic/supported-server-types"}},s={},c=[{value:"Download Fabric",id:"-download-fabric",level:2},{value:"Create the Fabric server",id:"-create-the-fabric-server",level:2},{value:"Import the server in MCSS",id:"-migrate-the-server-to-mcss",level:2}];function l(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.h2,{id:"-download-fabric",children:"Download Fabric"}),"\n",(0,a.jsxs)(r.p,{children:["Go to ",(0,a.jsx)(r.a,{href:"https://fabricmc.net/use/server/",children:"Fabric's server download page"}),' and choose the version that you want to download. Click on "Executable server (.jar)" to download that version\'s server launcher.']}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.img,{alt:"Download fabric",src:A(4126).Z+"",width:"805",height:"429"})}),"\n",(0,a.jsx)(r.p,{children:"You can now use the downloaded jar as the source file for a new server by clicking File > New Server in MCSS."}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(r.admonition,{title:"Using an installer",type:"note",children:(0,a.jsx)(r.p,{children:"If you have a Fabric installer instead of a single launcher jar, you can follow this procedure to create a server, though it's recommended to use the standalone file method as presented above."})}),"\n",(0,a.jsx)(r.h2,{id:"-create-the-fabric-server",children:"Create the Fabric server"}),"\n",(0,a.jsxs)(r.p,{children:["Once the download is done, open the file ",(0,a.jsx)(r.code,{children:"fabric-installer-<fabric-version>.jar"})," to begin the Fabric server installation. ",(0,a.jsx)("br",{}),'\nChoose "install server" and select an empty folder in which the server will temporarily be installed (it will then be moved to the MCSS folder) and click OK. All the required files will be downloaded and placed in the selected folder. It\'ll ask for the official Minecraft Server jar to be downloaded, this can be done pressing the prompted window']}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.img,{alt:"Install forge",src:A(4644).Z+"",width:"560",height:"369"})}),"\n",(0,a.jsx)(r.p,{children:"The folder now contains :"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["A sub-folder ",(0,a.jsx)(r.code,{children:".fabric-installer"})]}),"\n",(0,a.jsxs)(r.li,{children:["A file ",(0,a.jsx)(r.code,{children:"fabric-server-launch.jar"})]}),"\n",(0,a.jsxs)(r.li,{children:["A file ",(0,a.jsx)(r.code,{children:"server.jar"})]}),"\n"]}),"\n",(0,a.jsx)(r.p,{children:"You can now delete the fabric installer file."}),"\n",(0,a.jsx)(r.h2,{id:"-migrate-the-server-to-mcss",children:"Import the server in MCSS"}),"\n",(0,a.jsxs)(r.p,{children:["Now, open MCSS and go to \"File > Import server\". A new window will open, select Fabric server. Then in the left pane, drop your server's jar, for fabric it's ",(0,a.jsx)(r.code,{children:"fabric-server-launch.jar"}),".\nThen, choose a name for you server and a folder name (the server will be stored in ",(0,a.jsx)(r.code,{children:"mcss/servers/<folder_name>"}),"). Choose the amount of RAM that will be allocated to the server in MB (it's recommended to have at least 4GB, or 4096MB, for a Fabric server), and click on Import Server.",(0,a.jsx)("br",{}),"\nAll the server files are copied to the /servers folder of MCSS and your server will appear in the servers list. ",(0,a.jsx)("br",{})]}),"\n",(0,a.jsx)(r.p,{children:"You can also delete the temporary folder where you installed Forge, it is now useless since all the files have been copied to the /servers folder of the app."}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.img,{alt:"Migrate fabric",src:A(1957).Z+"",width:"1066",height:"615"})}),"\n",(0,a.jsxs)(r.p,{children:["Finally, you have to rename your server's jar to ",(0,a.jsx)(r.code,{children:"fabric.jar"})," or it will not be detected by MCSS."]}),"\n",(0,a.jsxs)(r.p,{children:['You can now start you Fabric server by clicking the "Start" button. ',(0,a.jsx)("br",{}),'\nAt the first server start, the console will show an error asking you to accept the EULA. To do so, click on "servers > show in file explorer" and open the "eula.txt" file. Change the line ',(0,a.jsx)(r.code,{children:"eula=false"})," to ",(0,a.jsx)(r.code,{children:"eula=true"})," and start the server again. ",(0,a.jsx)("br",{}),"\nthis time, it will fully start and you will be able to connect from you Minecraft client. ",(0,a.jsx)("br",{})]}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsxs)(r.p,{children:["Many thanks to Kennas for making this wonderful video on how to install Fabric on MCSS",(0,a.jsx)("br",{})]}),"\n",(0,a.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/yHd5OAl8L9c",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"})]})}function d(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},4126:(e,r,A)=>{A.d(r,{Z:()=>a});const a=A.p+"assets/images/download_fabric-d16fa29a00c9bdc0b70cc9ee358fb8fc.png"},4644:(e,r,A)=>{A.d(r,{Z:()=>a});const a="data:image/png;base64,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"},1957:(e,r,A)=>{A.d(r,{Z:()=>a});const a=A.p+"assets/images/migrate_fabric-e366403e84c019335dfb7effe9b00b7b.png"},1151:(e,r,A)=>{A.d(r,{Z:()=>n,a:()=>t});var a=A(7294);const i={},o=a.createContext(i);function t(e){const r=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function n(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),a.createElement(o.Provider,{value:r},e.children)}}}]);