"use strict";(self.webpackChunkmcss_docs=self.webpackChunkmcss_docs||[]).push([[59],{2929:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=s(5893),i=s(1151);const r={sidebar_position:1,title:"Custom ZIP file format",description:"Provide a custom format for backup ZIP files",keywords:["backup","zip","custom","format"]},a=void 0,o={id:"backups/custom-filename",title:"Custom ZIP file format",description:"Provide a custom format for backup ZIP files",source:"@site/docs/backups/custom-filename.md",sourceDirName:"backups",slug:"/backups/custom-filename",permalink:"/backups/custom-filename",draft:!1,unlisted:!1,editUrl:"https://github.com/mcserversoft/documentation/edit/main/docs/backups/custom-filename.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Custom ZIP file format",description:"Provide a custom format for backup ZIP files",keywords:["backup","zip","custom","format"]},sidebar:"tutorialSidebar",previous:{title:"Troubleshooting",permalink:"/networking/troubleshooting"},next:{title:"Java versions",permalink:"/advanced/java-version"}},c={},d=[{value:"Example",id:"-example",level:2},{value:"Parameters",id:"-parameters",level:2}];function l(e){const t={admonition:"admonition",code:"code",h2:"h2",img:"img",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Provide a custom format for backup ZIP files. If the format is invalid the default will be used.",(0,n.jsx)("br",{}),"\nDefault format: ",(0,n.jsx)(t.code,{children:"[backupname]_[unix]"})]}),"\n",(0,n.jsx)(t.admonition,{title:"Be aware of generic formats",type:"info",children:(0,n.jsxs)(t.p,{children:["Be careful when creating custom file formats. If the format is too generic, the file can easily get overwritten.\nIf the same backup destination is used by multiple servers, backups might not be able to run.",(0,n.jsx)("br",{}),"\nExample: ",(0,n.jsx)(t.code,{children:"test [date].zip"}),", only produces 1 unique filename per day."]})}),"\n",(0,n.jsx)(t.h2,{id:"-example",children:"Example"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"ZIP File Format setting in mcss",src:s(2743).Z+"",width:"715",height:"141"})}),"\n",(0,n.jsxs)(t.p,{children:["Results in ",(0,n.jsx)(t.code,{children:"Backup of 5555_New backup 1644602572.zip"})]}),"\n",(0,n.jsx)(t.h2,{id:"-parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Example"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"[date]"}),(0,n.jsx)(t.td,{children:"10-2-2022 or 2-10-2022"}),(0,n.jsx)(t.td,{children:'Returns the date in the format of the system\'s "Region and Language" settings'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"[time]"}),(0,n.jsx)(t.td,{children:"20-15 or 8-15PM"}),(0,n.jsx)(t.td,{children:'Returns the time in the format of the system\'s "Region and Language" settings'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"[unix]"}),(0,n.jsx)(t.td,{children:"1644601247"}),(0,n.jsx)(t.td,{children:"Returns a unix timestamp"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"[backupname]"}),(0,n.jsx)(t.td,{children:"My Backup Name"}),(0,n.jsx)(t.td,{children:"Returns the name of the backup"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"[servername]"}),(0,n.jsx)(t.td,{children:"My Server Name"}),(0,n.jsx)(t.td,{children:"Returns the name of the server"})]})]})]})]})}function m(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},2743:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/mcss_backup_file_setting-8a1e3ee9088f752571b5b91a47a254e2.jpg"},1151:(e,t,s)=>{s.d(t,{Z:()=>o,a:()=>a});var n=s(7294);const i={},r=n.createContext(i);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);