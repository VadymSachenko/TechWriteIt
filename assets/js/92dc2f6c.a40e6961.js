"use strict";(self.webpackChunktech_write_it=self.webpackChunktech_write_it||[]).push([[9127],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(r),p=n,f=c["".concat(l,".").concat(p)]||c[p]||m[p]||i;return r?a.createElement(f,o(o({ref:t},d),{},{components:r})):a.createElement(f,o({ref:t},d))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6058:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));const i={title:"Install Mermaid",description:"Learn how to install Mermaid in your project",sidebar_position:2,last_update:{date:"9/11/2023"}},o=void 0,s={unversionedId:"docusaurus/features/install-mermaid",id:"docusaurus/features/install-mermaid",title:"Install Mermaid",description:"Learn how to install Mermaid in your project",source:"@site/docs/docusaurus/features/install-mermaid.md",sourceDirName:"docusaurus/features",slug:"/docusaurus/features/install-mermaid",permalink:"/TechWriteIt/docs/docusaurus/features/install-mermaid",draft:!1,editUrl:"https://github.com/VadymSachenko/TechWriteIt/edit/main/docs/docusaurus/features/install-mermaid.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Install Mermaid",description:"Learn how to install Mermaid in your project",sidebar_position:2,last_update:{date:"9/11/2023"}},sidebar:"docsSidebar",previous:{title:"Install and configure Vale",permalink:"/TechWriteIt/docs/docusaurus/features/install-and-configure-vale"}},l={},u=[{value:"Install Mermaid",id:"install-mermaid",level:2},{value:"Configure Mermaid",id:"configure-mermaid",level:2},{value:"Usage example",id:"usage-example",level:2}],d={toc:u},c="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://mermaid.js.org/intro/"},"Mermaid")," is a JavaScript-based tool that lets you create diagrams and flowcharts using simple text-based syntax.\nIt's widely used for visualizing complex processes, data flows, and system architectures directly in your documentation."),(0,n.kt)("p",null,"This document shows how to install and configure Mermaid in your Docusaurus project."),(0,n.kt)("h2",{id:"install-mermaid"},"Install Mermaid"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @docusaurus/theme-mermaid\n")),(0,n.kt)("h2",{id:"configure-mermaid"},"Configure Mermaid"),(0,n.kt)("p",null,"To use Mermaid in your documents, add the following configuration to your ",(0,n.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"...\nconst mermaid = require('mermaid')\n...\nconst config = {\n  ...\n    markdown: {\n      mermaid: true,\n    },\n    themes: ['@docusaurus/theme-mermaid'],\n};\n")),(0,n.kt)("h2",{id:"usage-example"},"Usage example"),(0,n.kt)("p",null,"To see how Mermaid renders, add the following code block to your document"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-markdown",metastring:'title="Example Mermaid diagram"',title:'"Example',Mermaid:!0,'diagram"':!0},"```mermaid\ngraph TD;\n    A--\x3eB;\n    A--\x3eC;\n    B--\x3eD;\n    C--\x3eD;\n```\n")),(0,n.kt)("p",null,"Now you have Mermaid installed and configured, and you can start creating diagrams and flowcharts."),(0,n.kt)("p",null,"For details about markdown syntax, in Mermaid's official documentation, see ",(0,n.kt)("a",{parentName:"p",href:"https://mermaid.js.org/intro/n00b-syntaxReference.html"},"Syntax and Configuration"),"."))}m.isMDXComponent=!0}}]);