"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[4600],{"./src/components/Typography/Text/Text.stories.tsx":(e,r,t)=>{t.r(r),t.d(r,{Playground:()=>i,__namedExportsOrder:()=>l,default:()=>s});var n=t("../../node_modules/react/index.js"),o=t("../../tools/storybook-addon-cartesian/src/index.tsx"),a=t("./src/storybook/constants.ts"),c=t("./src/components/Typography/Text/Text.tsx");let s={title:"Typography/Text",component:c.a,parameters:a.wj,decorators:[o.iU]};var i={render:function(e){return n.createElement(c.a,e,"Text")}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{\n  render: args => <Text {...args}>Text</Text>\n}",...i.parameters?.docs?.source}}};let l=["Playground"]},"./src/storybook/constants.ts":(e,r,t)=>{t.d(r,{Ok:()=>a,iM:()=>o,wj:()=>n});var n={layout:"fullscreen",centered:!0},o={cartesian:{disable:!0}},a={control:{type:"text"}}},"../../tools/storybook-addon-cartesian/src/index.tsx":(e,r,t)=>{t.d(r,{iU:()=>i});var n=t("../../node_modules/react/index.js");function o(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=Array(r);t<r;t++)n[t]=e[t];return n}function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.forEach(function(r){a(e,r,t[r])})}return e}var s={display:"flex",flexWrap:"wrap",overflow:"auto",margin:"10px",gap:"5px",boxSizing:"border-box",height:"100%",width:"100%",alignItems:"center",justifyContent:"center"},i=function(e,r){var t=r.argTypes,i=r.args.cartesian,l=function(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],!(r.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(r.args,["cartesian"]);if(i){var u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments.length>1?arguments[1]:void 0;return Object.entries(e).reduce(function(e,t){var n=function(e){if(Array.isArray(e))return e}(t)||function(e,r){var t,n,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var a=[],c=!0,s=!1;try{for(o=o.call(e);!(c=(t=o.next()).done)&&(a.push(t.value),2!==a.length);c=!0);}catch(e){s=!0,n=e}finally{try{c||null==o.return||o.return()}finally{if(s)throw n}}return a}}(t,2)||function(e,r){if(e){if("string"==typeof e)return o(e,2);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return o(e,2)}}(t,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),s=n[0],i=n[1],l=[];return e.forEach(function(e){i.forEach(function(t){var n,o;l.push((n=c({},e),o=null!=(o=a({},s,r[s].mapping?r[s].mapping[t]:t))?o:{},Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):(function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t.push.apply(t,n)}return t})(Object(o)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(o,e))}),n))})}),l},[{}])}(i,t);return n.createElement("div",{style:s},u.map(function(r,t){return n.createElement(e,{key:t,args:c({},l,r)})}))}return n.createElement(e,{args:l})}}}]);