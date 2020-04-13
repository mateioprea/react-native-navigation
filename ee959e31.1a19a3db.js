(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{168:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return i})),n.d(e,"metadata",(function(){return c})),n.d(e,"rightToc",(function(){return o})),n.d(e,"default",(function(){return b}));var a=n(1),r=(n(0),n(179));const i={id:"stack-backButton",title:"The Back button",sidebar_label:"Back button"},c={id:"stack-backButton",title:"The Back button",description:"The back button is added automatically when two or more screens are pushed into the stack.",source:"@site/docs/stack-backButton.mdx",permalink:"/react-native-navigation/docs/stack-backButton",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/docs/docs/stack-backButton.mdx",sidebar_label:"Back button"},o=[{value:"Styling the back button",id:"styling-the-back-button",children:[]},{value:"Controling visibility",id:"controling-visibility",children:[]},{value:"Changing visbility programmatically",id:"changing-visbility-programmatically",children:[]},{value:"Handling the back button",id:"handling-the-back-button",children:[]}],l={rightToc:o};function b({components:t,...e}){return Object(r.b)("wrapper",Object(a.a)({},l,e,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The back button is added automatically when two or more screens are pushed into the stack."),Object(r.b)("h2",{id:"styling-the-back-button"},"Styling the back button"),Object(r.b)("p",null,"The back button's style can be customised by declaring a backButton options object. This configuration can be part of a screen's static options, or default options."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"backButton: {\n  color: 'red',\n  icon: require('../../img/customChevron.png')\n}\n")),Object(r.b)("h2",{id:"controling-visibility"},"Controling visibility"),Object(r.b)("p",null,"The back buttons visbility can be controlled with the visible property."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"backButton: {\n  visible: false\n}\n")),Object(r.b)("h2",{id:"changing-visbility-programmatically"},"Changing visbility programmatically"),Object(r.b)("p",null,"Back button visibility can be changed dynamically using the mergeOptions command. When using a screen's componentId, the change will affect only that specific screen. But when using the stack's id, the change will affect all screens pushed into the stack."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"Navigation.mergeOptions(this.props.componentId, {\n  backButton: {\n    visible: false\n  }\n});\n")),Object(r.b)("h2",{id:"handling-the-back-button"},"Handling the back button"),Object(r.b)("p",null,"Handling the back button is not possible. However, you can set a left button with a chevron and handle it like you'd handle any other button and calling ",Object(r.b)("inlineCode",{parentName:"p"},"Navigation.pop")," when desired."))}b.isMDXComponent=!0},179:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return h}));var a=n(0),r=n.n(a);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var b=r.a.createContext({}),u=function(t){var e=r.a.useContext(b),n=e;return t&&(n="function"==typeof t?t(e):o({},e,{},t)),n},s=function(t){var e=u(t.components);return r.a.createElement(b.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},d=Object(a.forwardRef)((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,c=t.parentName,b=l(t,["components","mdxType","originalType","parentName"]),s=u(n),d=a,h=s["".concat(c,".").concat(d)]||s[d]||p[d]||i;return n?r.a.createElement(h,o({ref:e},b,{components:n})):r.a.createElement(h,o({ref:e},b))}));function h(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,c=new Array(i);c[0]=d;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=t,o.mdxType="string"==typeof t?t:a,c[1]=o;for(var b=2;b<i;b++)c[b]=n[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);