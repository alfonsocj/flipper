(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{138:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return f}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),c=function(e){var n=i.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return i.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},d=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=c(t),d=r,f=p["".concat(o,".").concat(d)]||p[d]||b[d]||a;return t?i.a.createElement(f,l(l({ref:n},s),{},{components:t})):i.a.createElement(f,l({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=d;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=t[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},139:function(e,n,t){"use strict";t.d(n,"b",(function(){return a})),t.d(n,"a",(function(){return o}));var r=t(141),i=t(140);function a(){var e=Object(r.default)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,a=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,r){var a=void 0===r?{}:r,o=a.forcePrependBaseUrl,l=void 0!==o&&o,u=a.absolute,s=void 0!==u&&u;if(!t)return t;if(t.startsWith("#"))return t;if(Object(i.b)(t))return t;if(l)return n+t;var c=t.startsWith(n)?t:n+t.replace(/^\//,"");return s?e+c:c}(a,t,e,n)}}}function o(e,n){return void 0===n&&(n={}),(0,a().withBaseUrl)(e,n)}},140:function(e,n,t){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return i}))},141:function(e,n,t){"use strict";t.r(n);var r=t(0),i=t(20);n.default=function(){var e=Object(r.useContext)(i.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},83:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return u})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return p}));var r=t(3),i=t(7),a=(t(0),t(138)),o=t(139),l={id:"js-publishing",title:"Publishing your Plugin",sidebar_label:"Publishing"},u={unversionedId:"tutorial/js-publishing",id:"tutorial/js-publishing",isDocsHomePage:!1,title:"Publishing your Plugin",description:"Once you're happy with your plugin and want the world to see it,",source:"@site/../docs/tutorial/js-publishing.mdx",slug:"/tutorial/js-publishing",permalink:"/docs/tutorial/js-publishing",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/tutorial/js-publishing.mdx",version:"current",sidebar_label:"Publishing",sidebar:"extending",previous:{title:"Building A Custom Desktop Plugin",permalink:"/docs/tutorial/js-custom"},next:{title:"Desktop Plugin Development",permalink:"/docs/extending/js-setup"}},s=[{value:"Installing Plugins",id:"installing-plugins",children:[]},{value:"Native Distribution",id:"native-distribution",children:[]}],c={rightToc:s};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Once you're happy with your plugin and want the world to see it,\nyou can publish it to npm. Ensure that your plugin follows these\ntwo rules:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},'The package name should to start with "flipper-plugin-". This makes\nit easier to see what the purpose of the package is.'),Object(a.b)("li",{parentName:"ul"},'The package must include the keyword "flipper-plugin".'),Object(a.b)("li",{parentName:"ul"},'Source code of the plugin must be bundled by "flipper-pkg" tool.')),Object(a.b)("p",null,"A valid example ",Object(a.b)("inlineCode",{parentName:"p"},"package.json")," could look like this:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "$schema": "https://fbflipper.com/schemas/plugin-package/v2.json",\n  "name": "flipper-plugin-sea-mammals",\n  "id": "sea-mammals",\n  "version": "2.0.0",\n  "main": "dist/bundle.js",\n  "flipperBundlerEntry": "src/index.tsx",\n  "license": "MIT",\n  "keywords": ["flipper-plugin"],\n  "icon": "apps",\n  "title": "Sea Mammals",\n  "category": "Example Plugin",\n  "scripts": {\n    "prepack": "flipper-pkg lint && flipper-pkg bundle"\n  },\n  "dependencies": {\n    "flipper": "latest"\n  },\n  "devDependencies": {\n    "flipper-pkg": "latest"\n  }\n}\n')),Object(a.b)("p",null,"When you have confirmed that your ",Object(a.b)("inlineCode",{parentName:"p"},"package.json")," is correct,\nrun ",Object(a.b)("inlineCode",{parentName:"p"},"yarn publish")," or ",Object(a.b)("inlineCode",{parentName:"p"},"npm publish")," and follow the instructions."),Object(a.b)("h2",{id:"installing-plugins"},"Installing Plugins"),Object(a.b)("p",null,'Once your plugin is published you can find it, alongside other\navailable Flipper plugins, by clicking on "Manage Plugins..."\nin the bottom of the left sidebar and selecting the\n"Install Plugins" tab. It may take a few moments for the\nsearch index to update and your plugin to appear.'),Object(a.b)("img",{alt:"Install plugins",src:Object(o.a)("img/install-plugins.png")}),Object(a.b)("h2",{id:"native-distribution"},"Native Distribution"),Object(a.b)("p",null,"Depending on whether the client-side part of your plugin targets\nAndroid, iOS or React Native, we recommend you use the standard\npackage distribution mechanism for the platform."),Object(a.b)("p",null,"This may be Maven Central, JCenter or GitHub Packages for Android,\nCocoaPods for iOS and npm or GitHub Packages for React Native.\nMake sure to leave setup instructions in the README of your\nnpm package."))}p.isMDXComponent=!0}}]);