"use strict";(self.webpackChunktech_write_it=self.webpackChunktech_write_it||[]).push([[3993],{5914:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"docusaurus/getting-started/deploy-a-docusaurus-project-to-github-pages","title":"Deploy a Docusaurus project to GiHub pages","description":"Learn how to deploy a Docusaurus to GiHub pages","source":"@site/docs/docusaurus/getting-started/deploy-a-docusaurus-project-to-github-pages.md","sourceDirName":"docusaurus/getting-started","slug":"/docusaurus/getting-started/deploy-a-docusaurus-project-to-github-pages","permalink":"/TechWriteIt/docs/docusaurus/getting-started/deploy-a-docusaurus-project-to-github-pages","draft":false,"unlisted":false,"editUrl":"https://github.com/VadymSachenko/TechWriteIt/edit/main/docs/docusaurus/getting-started/deploy-a-docusaurus-project-to-github-pages.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Deploy a Docusaurus project to GiHub pages","sidebar_label":"Deploy","description":"Learn how to deploy a Docusaurus to GiHub pages","sidebar_position":2,"last_update":{"date":"9/7/2023"}},"sidebar":"docsSidebar","previous":{"title":"Install","permalink":"/TechWriteIt/docs/docusaurus/getting-started/install-docusaurus"},"next":{"title":"Features","permalink":"/TechWriteIt/docs/category/features"}}');var n=o(4848),t=o(8453);const i={title:"Deploy a Docusaurus project to GiHub pages",sidebar_label:"Deploy",description:"Learn how to deploy a Docusaurus to GiHub pages",sidebar_position:2,last_update:{date:"9/7/2023"}},c=void 0,a={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create a repository",id:"create-a-repository",level:2},{value:"Configure docusaurus.config.js",id:"configure-docusaurusconfigjs",level:2},{value:"Initialize and set up your Git repository",id:"initialize-and-set-up-your-git-repository",level:2},{value:"Deploy your project",id:"deploy-your-project",level:2}];function l(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"To make your website available and accessible to users on the internet, you need to deploy it.\nThis document shows how to configure and deploy a Docusaurus project to GitHub pages, a hosting service provided by GitHub."}),"\n",(0,n.jsx)(s.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Install ",(0,n.jsx)(s.a,{href:"/TechWriteIt/docs/docusaurus/getting-started/install-docusaurus",children:"Docusaurus"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:["Get a GitHub account: To deploy your project to ",(0,n.jsx)(s.a,{href:"https://github.com/",children:"GitHub"})," pages, you need a GitHub account."]}),"\n",(0,n.jsxs)(s.li,{children:["Install a code editor (for example, ",(0,n.jsx)(s.a,{href:"https://code.visualstudio.com/",children:"Visual Studio Code"}),"): You need a code editor for working with your Docusaurus project."]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"create-a-repository",children:"Create a repository"}),"\n",(0,n.jsx)(s.p,{children:"On GitHub, create a new repository for your project"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["In the ",(0,n.jsx)(s.strong,{children:"Repositories"})," tab, click ",(0,n.jsx)(s.strong,{children:"New"}),"."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"repositories-new",src:o(6567).A+"",width:"1308",height:"600"})}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["On the ",(0,n.jsx)(s.strong,{children:"Create a new repository"})," page that opens, do the following:","\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["For the ",(0,n.jsx)(s.strong,{children:"Repository"})," name, enter a name for your new repository\u2014for example, ",(0,n.jsx)(s.code,{children:"my-new-repository"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:["Optional: For ",(0,n.jsx)(s.strong,{children:"Description"}),", enter a description of your project."]}),"\n",(0,n.jsxs)(s.li,{children:["Click ",(0,n.jsx)(s.strong,{children:"Create repository"}),". This creates a new repository and redirects you to your new repository's page."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"create-repository",src:o(3209).A+"",width:"727",height:"954"})}),"\n",(0,n.jsx)(s.h2,{id:"configure-docusaurusconfigjs",children:"Configure docusaurus.config.js"}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"docusaurus.config.js"})," file serves as the central configuration file for your Docusaurus project, allowing you to tailor your documentation website to your specific needs and preferences.\nBy modifying this file, you can control many aspects of your site's behavior, deployment, and appearance."]}),"\n",(0,n.jsxs)(s.p,{children:["For more details about ",(0,n.jsx)(s.code,{children:"docusaurus.config.js"}),", in the official documenatation, see ",(0,n.jsx)(s.a,{href:"https://docusaurus.io/docs/api/docusaurus-config",children:(0,n.jsx)(s.code,{children:"docusaurus.config.js"})})]}),"\n",(0,n.jsxs)(s.p,{children:["To be able to deploy your project, you need to adjust ",(0,n.jsx)(s.code,{children:"docusaurus.config.js"}),":"]}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["In your text editor, open ",(0,n.jsx)(s.code,{children:"docusaurus.config.js"})," and adjust the ",(0,n.jsx)(s.code,{children:"url"}),", ",(0,n.jsx)(s.code,{children:"baseUrl"}),", ",(0,n.jsx)(s.code,{children:"organization"}),", ",(0,n.jsx)(s.code,{children:"projectName"}),", and ",(0,n.jsx)(s.code,{children:"deploymentBranch"})," variables as follows:"]}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"const config = {\n  ...\n  url: 'https://github.com',\n  baseUrl: '/REPOSITORY_NAME/',.\n  organizationName: 'USER_NAME',\n  projectName: 'REPOSITORY_NAME',\n  deploymentBranch: 'gh-pages',\n  ...\n}\n"})}),"\n",(0,n.jsx)(s.p,{children:"Replace the following placeholders:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.em,{children:(0,n.jsx)(s.code,{children:"REPOSITORY_NAME"})}),": Replace it with the name of the repository you created in the ",(0,n.jsx)(s.a,{href:"#create-a-repository",children:"Create a repository for your new project"})," step."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.em,{children:(0,n.jsx)(s.code,{children:"USER_NAME"})}),": Replace it with the name of your GitHub account."]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"initialize-and-set-up-your-git-repository",children:"Initialize and set up your Git repository"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"Initialize a new Git repository in the current directory and stage and commit changes:"}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"git init\ngit add .\ngit commit -m 'first commit'\n"})}),"\n",(0,n.jsxs)(s.ol,{start:"2",children:["\n",(0,n.jsxs)(s.li,{children:["Rename the default branch to ",(0,n.jsx)(s.code,{children:"main"}),":"]}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"git branch -M main\n"})}),"\n",(0,n.jsxs)(s.ol,{start:"3",children:["\n",(0,n.jsxs)(s.li,{children:["Add a remote named ",(0,n.jsx)(s.code,{children:"origin"})," and specify your GitHub repository URL:"]}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"git remote add origin https://github.com/USER_NAME/REPOSITORY_NAME.git\n"})}),"\n",(0,n.jsx)(s.p,{children:"Replace the placeholders:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.em,{children:(0,n.jsx)(s.code,{children:"REPOSITORY_NAME"})}),": Replace it with the name of the repository you created in the ",(0,n.jsx)(s.a,{href:"#create-a-repository",children:"Create a repository for your new project"})," step."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.em,{children:(0,n.jsx)(s.code,{children:"USER_NAME"})}),": Replace it with the name of your GitHub account."]}),"\n"]}),"\n",(0,n.jsxs)(s.ol,{start:"4",children:["\n",(0,n.jsxs)(s.li,{children:["Push the local ",(0,n.jsx)(s.code,{children:"main"})," branch to the ",(0,n.jsx)(s.code,{children:"origin"})," remote:"]}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"git push -u origin main\n"})}),"\n",(0,n.jsx)(s.h2,{id:"deploy-your-project",children:"Deploy your project"}),"\n",(0,n.jsx)(s.p,{children:"Deploy your project to GitHub Pages:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"GIT_USER='USER_NAME' yarn deploy\n"})}),"\n",(0,n.jsxs)(s.p,{children:["Replace ",(0,n.jsx)(s.code,{children:"USER_NAME"})," with the name of your GitHub account."]}),"\n",(0,n.jsxs)(s.admonition,{title:'The "bash: GIT_USER: command not found" error',type:"info",children:[(0,n.jsxs)(s.p,{children:["If you get the ",(0,n.jsx)(s.code,{children:"bash: GIT_USER: command not found"})," error when running ",(0,n.jsx)(s.code,{children:"GIT_USER='USER_NAME' yarn deploy"}),", try this command instead:"]}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"export GIT_USER=`USER_NAME`\nyarn deploy\n"})})]})]})}function u(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},3209:(e,s,o)=>{o.d(s,{A:()=>r});const r=o.p+"assets/images/create-repository-f4436a38b46faeb6f83e1687619393f7.png"},6567:(e,s,o)=>{o.d(s,{A:()=>r});const r=o.p+"assets/images/repositories-new-18aace8f9bc15d0a5beb44cc22fd63d1.png"},8453:(e,s,o)=>{o.d(s,{R:()=>i,x:()=>c});var r=o(6540);const n={},t=r.createContext(n);function i(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);