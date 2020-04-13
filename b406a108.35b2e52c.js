(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{152:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(1),r=(n(0),n(179));const o={id:"style-theme",title:"Themes",sidebar_label:"Themes"},i={id:"style-theme",title:"Themes",description:"A theme is a type of style which is applied to the entire app. It allows you to declare",source:"@site/docs/style-theme.mdx",permalink:"/react-native-navigation/docs/style-theme",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/docs/docs/style-theme.mdx",sidebar_label:"Themes",sidebar:"docs",previous:{title:"Overlay",permalink:"/react-native-navigation/docs/overlay"},next:{title:"StatusBar",permalink:"/react-native-navigation/docs/style-statusBar"}},c=[{value:"Applying a theme",id:"applying-a-theme",children:[]},{value:"Changing theme dynamically",id:"changing-theme-dynamically",children:[]}],l={rightToc:c};function s({components:e,...t}){return Object(r.b)("wrapper",Object(a.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"A theme is a type of style which is applied to the entire app. It allows you to declare\na consistent style to all Navigation components such as the TopBar and BottomTabs and also\nto system elements like the StatusBar and NavigationBar."),Object(r.b)("h2",{id:"applying-a-theme"},"Applying a theme"),Object(r.b)("p",null,"Themes are applied using ",Object(r.b)("inlineCode",{parentName:"p"},"Navigation.setDefaultOptions()")," which must be called ",Object(r.b)("strong",{parentName:"p"},"before")," ",Object(r.b)("inlineCode",{parentName:"p"},"Navigation.setRoot()")," is called."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// Set the default topBar background color to red\nNavigation.setDefaultOptions({\n  topBar: {\n    background: {\n      color: 'red'\n    }\n  }\n});\n\n// That stack's topBar background color will be red, as is set in default options\nNavigation.setRoot({\n  root: {\n    stack: {\n      children: [\n        ...\n      ]\n    }\n  }\n});\n")),Object(r.b)("h2",{id:"changing-theme-dynamically"},"Changing theme dynamically"),Object(r.b)("p",null,"Apps can have multiple themes and sometimes you might need to change theme dynamically. To change current theme, simply call ",Object(r.b)("inlineCode",{parentName:"p"},"Navigation.setDefaultOptions()")," with updated theme options, following that with a call to ",Object(r.b)("inlineCode",{parentName:"p"},"Navigation.setRoot()"),". The reason we need to setRoot once more is because ",Object(r.b)("inlineCode",{parentName:"p"},"Navigation.setDefaultOptions()")," does not apply options to screens which had already been created."))}s.isMDXComponent=!0},179:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,b=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return n?r.a.createElement(b,c({ref:t},s,{components:n})):r.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);