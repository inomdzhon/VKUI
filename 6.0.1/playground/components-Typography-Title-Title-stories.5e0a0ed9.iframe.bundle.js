"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[3620],{"./src/components/Typography/Title/Title.stories.tsx":(e,t,r)=>{r.r(t),r.d(t,{Playground:()=>u,__namedExportsOrder:()=>c,default:()=>s});var n=r("../../node_modules/react/index.js"),l=r("../../tools/storybook-addon-cartesian/src/index.tsx"),o=r("./src/storybook/constants.ts"),i=r("./src/components/Typography/Title/Title.tsx");function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n,l,o;o=r[t],t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o})}return e}let s={title:"Typography/Title",component:i.O,parameters:o.wj,decorators:[l.iU]};var u={render:function(e){return n.createElement("div",null,n.createElement(i.O,a({level:"1"},e),"Title 1"),n.createElement(i.O,a({level:"2"},e),"Title 2"),n.createElement(i.O,a({level:"3"},e),"Title 3"))}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:'{\n  render: args => <div>\n      <Title level="1" {...args}>\n        Title 1\n      </Title>\n      <Title level="2" {...args}>\n        Title 2\n      </Title>\n      <Title level="3" {...args}>\n        Title 3\n      </Title>\n    </div>\n}',...u.parameters?.docs?.source}}};let c=["Playground"]},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Typography/Title/Title.module.css":(e,t,r)=>{r.d(t,{c:()=>a});var n=r("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=r.n(n),o=r("../../node_modules/css-loader/dist/runtime/api.js"),i=r.n(o)()(l());i.push([e.id,".Title--level-1--TJIWX{font-family:var(--vkui--font_title1--font_family--regular);font-size:var(--vkui--font_title1--font_size--regular);font-weight:var(--vkui--font_title1--font_weight--regular);line-height:var(--vkui--font_title1--line_height--regular)}.Title--level-2--btQdj{font-family:var(--vkui--font_title2--font_family--regular);font-size:var(--vkui--font_title2--font_size--regular);font-weight:var(--vkui--font_title2--font_weight--regular);line-height:var(--vkui--font_title2--line_height--regular)}.Title--level-3--eS9fO{font-family:var(--vkui--font_title3--font_family--regular);font-size:var(--vkui--font_title3--font_size--regular);font-weight:var(--vkui--font_title3--font_weight--regular);line-height:var(--vkui--font_title3--line_height--regular)}",""]),i.locals={"Title--level-1":"Title--level-1--TJIWX","Title--level-2":"Title--level-2--btQdj","Title--level-3":"Title--level-3--eS9fO"};let a=i},"./src/components/Typography/Title/Title.tsx":(e,t,r)=>{r.d(t,{O:()=>h});var n=r("../../node_modules/react/index.js"),l=r("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),o=r("./src/components/Typography/Typography.tsx"),i=r("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),a=r.n(i),s=r("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),u=r.n(s),c=r("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),f=r.n(c),d=r("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),p=r.n(d),y=r("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),m=r.n(y),v=r("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Typography/Title/Title.module.css"),g={attributes:{class:"vkui-style"}};g.setAttributes=p(),g.insert=f().bind(null,"head"),g.domAPI=u(),g.insertStyleElement=m(),a()(v.c,g);let b=v.c&&v.c.locals?v.c.locals:void 0;var O={1:b["Title--level-1"],2:b["Title--level-2"],3:b["Title--level-3"]},h=function(e){var t=e.className,r=e.level,i=e.Component,a=e.normalize,s=function(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}(e,["className","level","Component","normalize"]);return n.createElement(o.O,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n,l,o;o=r[t],t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o})}return e}({Component:void 0===i?"span":i,normalize:void 0===a||a,className:(0,l.gr)(t,O[void 0===r?"1":r])},s))};try{h.displayName="Title",h.__docgenInfo={description:"Используется для заголовков.",displayName:"Title",props:{level:{defaultValue:{value:"1"},description:"",name:"level",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'}]}},weight:{defaultValue:null,description:"Задаёт начертание шрифта, отличное от стандартного.",name:"weight",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'}]}},normalize:{defaultValue:{value:"true"},description:"Убирает внешние отступы",name:"normalize",required:!1,type:{name:"boolean"}},Component:{defaultValue:{value:"span"},description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typography/Title/Title.tsx#Title"]={docgenInfo:h.__docgenInfo,name:"Title",path:"src/components/Typography/Title/Title.tsx#Title"})}catch(e){}},"./src/storybook/constants.ts":(e,t,r)=>{r.d(t,{Ok:()=>o,iM:()=>l,wj:()=>n});var n={layout:"fullscreen",centered:!0},l={cartesian:{disable:!0}},o={control:{type:"text"}}},"../../tools/storybook-addon-cartesian/src/index.tsx":(e,t,r)=>{r.d(t,{iU:()=>s});var n=r("../../node_modules/react/index.js");function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){o(e,t,r[t])})}return e}var a={display:"flex",flexWrap:"wrap",overflow:"auto",margin:"10px",gap:"5px",boxSizing:"border-box",height:"100%",width:"100%",alignItems:"center",justifyContent:"center"},s=function(e,t){var r=t.argTypes,s=t.args.cartesian,u=function(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}(t.args,["cartesian"]);if(s){var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return Object.entries(e).reduce(function(e,r){var n=function(e){if(Array.isArray(e))return e}(r)||function(e,t){var r,n,l=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=l){var o=[],i=!0,a=!1;try{for(l=l.call(e);!(i=(r=l.next()).done)&&(o.push(r.value),2!==o.length);i=!0);}catch(e){a=!0,n=e}finally{try{i||null==l.return||l.return()}finally{if(a)throw n}}return o}}(r,2)||function(e,t){if(e){if("string"==typeof e)return l(e,2);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(e,2)}}(r,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),a=n[0],s=n[1],u=[];return e.forEach(function(e){s.forEach(function(r){var n,l;u.push((n=i({},e),l=null!=(l=o({},a,t[a].mapping?t[a].mapping[r]:r))?l:{},Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(l)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(l)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(l,e))}),n))})}),u},[{}])}(s,r);return n.createElement("div",{style:a},c.map(function(t,r){return n.createElement(e,{key:r,args:i({},u,t)})}))}return n.createElement(e,{args:u})}}}]);