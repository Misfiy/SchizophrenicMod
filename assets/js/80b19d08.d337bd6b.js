"use strict";(self.webpackChunkexiled_docs=self.webpackChunkexiled_docs||[]).push([[859],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1337:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],u={sidebar_position:1},l="Contributing to EXILED",s={unversionedId:"Contributing/Intro",id:"Contributing/Intro",title:"Contributing to EXILED",description:"This is a simple tutorial guiding you to contribute to our framework.",source:"@site/docs/Contributing/Intro.md",sourceDirName:"Contributing",slug:"/Contributing/Intro",permalink:"/EXILED/docs/Contributing/Intro",draft:!1,editUrl:"https://github.com/Exiled-Team/EXILED/tree/master/docs/docs/Contributing/Intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Events",permalink:"/EXILED/docs/Plugins/Events"}},c={},p=[{value:"Forking EXILED",id:"forking-exiled",level:3},{value:"Setting <code>EXILED_REFERENCES</code>",id:"setting-exiled_references",level:3},{value:"Windows users",id:"windows-users",level:4},{value:"Linux users",id:"linux-users",level:4},{value:"Contributing docs",id:"contributing-docs",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"contributing-to-exiled"},"Contributing to EXILED"),(0,i.kt)("p",null,"This is a simple tutorial guiding you to contribute to our framework."),(0,i.kt)("h3",{id:"forking-exiled"},"Forking EXILED"),(0,i.kt)("p",null,"First, create a fork of our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Exiled-Team/EXILED"},"GitHub repository"),"."),(0,i.kt)("p",null,"Then, clone it to your computer like so: ",(0,i.kt)("inlineCode",{parentName:"p"},"git clone https://github.com/your-username/EXILED.git")),(0,i.kt)("p",null,"Open a terminal in your forked EXILED folder and run ",(0,i.kt)("inlineCode",{parentName:"p"},"git checkout dev"),". This will switch you to the dev branch, which all pull requests should be submitted to."),(0,i.kt)("h3",{id:"setting-exiled_references"},"Setting ",(0,i.kt)("inlineCode",{parentName:"h3"},"EXILED_REFERENCES")),(0,i.kt)("p",null,"If you haven't already, install the ",(0,i.kt)("inlineCode",{parentName:"p"},"SCP: Secret Laboratory Dedicated Server")," through Steam or extract ",(0,i.kt)("a",{parentName:"p",href:"https://exiled.host/build_deps/References.zip"},"this zip file")," to an easily accessible folder."),(0,i.kt)("h4",{id:"windows-users"},"Windows users"),(0,i.kt)("p",null,"Open the Environment Variables menu by searching for ",(0,i.kt)("inlineCode",{parentName:"p"},"Environment Variables")," in the Start Menu."),(0,i.kt)("p",null,"Create a new environment variable titled ",(0,i.kt)("inlineCode",{parentName:"p"},"EXILED_REFERENCES"),"."),(0,i.kt)("p",null,"The value should point to ",(0,i.kt)("inlineCode",{parentName:"p"},"your_steamapps_directory/common/SCP Secret Laboratory Dedicated Server/SCPSL_Data/Managed"),", or to the folder where you extracted the zip file mentioned earlier."),(0,i.kt)("h4",{id:"linux-users"},"Linux users"),(0,i.kt)("p",null,"Add ",(0,i.kt)("inlineCode",{parentName:"p"},'export EXILED_REFERENCES="PATH"')," to your ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.bashrc")," or similar file."),(0,i.kt)("p",null,"PATH should point to ",(0,i.kt)("inlineCode",{parentName:"p"},"your_steamapps_directory/common/SCP Secret Laboratory Dedicated Server/SCPSL_Data/Managed"),", or to the folder where you extracted the zip file mentioned earlier."),(0,i.kt)("hr",null),(0,i.kt)("p",null,"You should now be able to open the EXILED directory in your favorite IDE."),(0,i.kt)("p",null,"Once you are done, test your changes thoroughly, and then submit a pull request to the main EXILED repository. Make sure you are targeting the ",(0,i.kt)("inlineCode",{parentName:"p"},"dev")," branch, not ",(0,i.kt)("inlineCode",{parentName:"p"},"master"),"!"),(0,i.kt)("p",null,"Happy coding!"),(0,i.kt)("h2",{id:"contributing-docs"},"Contributing docs"),(0,i.kt)("p",null,"Documentation is built using ",(0,i.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs"},"Docosaurus")))}m.isMDXComponent=!0}}]);