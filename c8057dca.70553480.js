(window.webpackJsonp=window.webpackJsonp||[]).push([[269],{407:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return b}));var n=r(1),o=r(9),a=(r(0),r(469)),c={id:"07-bootstrap",title:"Bootstrap"},i={id:"07-bootstrap",title:"Bootstrap",description:"[<- Go Back](06-css.md)",source:"@site/../docs/07-bootstrap.md",permalink:"/node_comit/docs/07-bootstrap",editUrl:"https://github.com/prma85/node_comit/edit/master/../docs/07-bootstrap.md",lastUpdatedBy:"prma85",lastUpdatedAt:1582870518,sidebar:"course",previous:{title:"CSS - Cascade Style Sheet",permalink:"/node_comit/docs/06-css"},next:{title:"Javascript",permalink:"/node_comit/docs/08-javascript"}},s=[{value:"Get Started",id:"get-started",children:[{value:"CSS",id:"css",children:[]},{value:"JS",id:"js",children:[]},{value:"Starter template",id:"starter-template",children:[]}]},{value:"Layout",id:"layout",children:[{value:"Grid system",id:"grid-system",children:[]}]},{value:"Content",id:"content",children:[{value:"Images",id:"images",children:[]}]},{value:"Components",id:"components",children:[{value:"Buttons",id:"buttons",children:[]},{value:"Forms",id:"forms",children:[]},{value:"Navbar",id:"navbar",children:[]}]},{value:"Utilities",id:"utilities",children:[{value:"Colors",id:"colors",children:[]}]}],p={rightToc:s};function b(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/node_comit/docs/06-css"}),"<- Go Back")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Build responsive, mobile-first projects on the web with the world\u2019s most popular front-end component library."),Object(a.b)("li",{parentName:"ul"},"Bootstrap is an open source toolkit for developing with HTML, CSS, and JS. Quickly prototype your ideas or build your entire app with our Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful plugins built on jQuery.")),Object(a.b)("h2",{id:"get-started"},"Get Started"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Looking to quickly add Bootstrap to your project? Use ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://getbootstrap.com/docs/4.3/getting-started/introduction/"}),"BootstrapCDN"),". Using a package manager or need to download the source files? ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://getbootstrap.com/docs/4.3/getting-started/download/"}),"Head to the downloads page"),".")),Object(a.b)("h3",{id:"css"},"CSS"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Copy-paste the stylesheet ",Object(a.b)("inlineCode",{parentName:"li"},"<link>")," into your ",Object(a.b)("inlineCode",{parentName:"li"},"<head>")," before all other stylesheets to load our CSS.",Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<link\n  rel="stylesheet"\n  href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"\n  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"\n  crossorigin="anonymous"\n/>\n')))),Object(a.b)("h3",{id:"js"},"JS"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Many of the components require the use of JavaScript to function. Specifically, they require jQuery, Popper.js, and our own JavaScript plugins. Place the following ",Object(a.b)("inlineCode",{parentName:"p"},"<script>"),"s near the end of your pages, right before the closing ",Object(a.b)("inlineCode",{parentName:"p"},"</body>")," tag, to enable them. jQuery must come first, then Popper.js, and then the JavaScript plugins."),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<script\n  src="https://code.jquery.com/jquery-3.3.1.slim.min.js"\n  integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"\n  crossorigin="anonymous"\n><\/script>\n<script\n  src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"\n  integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"\n  crossorigin="anonymous"\n><\/script>\n<script\n  src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"\n  integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"\n  crossorigin="anonymous"\n><\/script>\n')))),Object(a.b)("h3",{id:"starter-template"},"Starter template"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Be sure to have your pages set up with the latest design and development standards. That means using an HTML5 doctype and including a viewport meta tag for proper responsive behaviors. Put it all together and your pages should look like this:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    \x3c!-- Required meta tags --\x3e\n    <meta charset="utf-8" />\n    <meta\n      name="viewport"\n      content="width=device-width, initial-scale=1, shrink-to-fit=no"\n    />\n\n    \x3c!-- Bootstrap CSS --\x3e\n    <link\n      rel="stylesheet"\n      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"\n      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"\n      crossorigin="anonymous"\n    />\n\n    <title>Hello, world!</title>\n  </head>\n  <body>\n    <h1>Hello, world!</h1>\n\n    \x3c!-- Optional JavaScript --\x3e\n    \x3c!-- jQuery first, then Popper.js, then Bootstrap JS --\x3e\n    <script\n      src="https://code.jquery.com/jquery-3.3.1.slim.min.js"\n      integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"\n      crossorigin="anonymous"\n    ><\/script>\n    <script\n      src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"\n      integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"\n      crossorigin="anonymous"\n    ><\/script>\n    <script\n      src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"\n      integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"\n      crossorigin="anonymous"\n    ><\/script>\n  </body>\n</html>\n')))),Object(a.b)("h4",{id:"practice"},"Practice"),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/node_comit/docs/exercises/bootstrap/ex_1"}),"Exercise 1")),Object(a.b)("h2",{id:"layout"},"Layout"),Object(a.b)("h3",{id:"grid-system"},"Grid system"),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://getbootstrap.com/docs/4.3/layout/grid/"}),"Please review the Bootstrap Documentation")),Object(a.b)("h4",{id:"practice-1"},"Practice"),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/node_comit/docs/exercises/bootstrap/ex_2"}),"Exercise 2")),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/node_comit/docs/exercises/bootstrap/ex_3"}),"Exercise 3")),Object(a.b)("h2",{id:"content"},"Content"),Object(a.b)("h3",{id:"images"},"Images"),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://getbootstrap.com/docs/4.3/content/images/"}),"Please review the Bootstrap Documentation")),Object(a.b)("h4",{id:"practice-2"},"Practice"),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/node_comit/docs/exercises/bootstrap/ex_4"}),"Exercise 4")),Object(a.b)("h2",{id:"components"},"Components"),Object(a.b)("h3",{id:"buttons"},"Buttons"),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://getbootstrap.com/docs/4.3/components/buttons/"}),"Please review the Bootstrap Documentation")),Object(a.b)("h3",{id:"forms"},"Forms"),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://getbootstrap.com/docs/4.3/components/forms/"}),"Please review the Bootstrap Documentation")),Object(a.b)("h4",{id:"practice-3"},"Practice"),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/node_comit/docs/exercises/bootstrap/ex_5"}),"Exercise 5")),Object(a.b)("h3",{id:"navbar"},"Navbar"),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://getbootstrap.com/docs/4.3/components/navbar/"}),"Please review the Bootstrap Documentation")),Object(a.b)("h4",{id:"practice-4"},"Practice"),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/node_comit/docs/exercises/bootstrap/ex_6"}),"Exercise 6")),Object(a.b)("h2",{id:"utilities"},"Utilities"),Object(a.b)("h3",{id:"colors"},"Colors"),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://getbootstrap.com/docs/4.3/utilities/colors/"}),"Please review the Bootstrap Documentation")))}b.isMDXComponent=!0},469:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),b=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},l=function(e){var t=b(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=b(r),u=n,m=l["".concat(c,".").concat(u)]||l[u]||d[u]||a;return r?o.a.createElement(m,i({ref:t},p,{components:r})):o.a.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);