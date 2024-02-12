"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[2732],{"./src/components/Link/Link.stories.tsx":(e,t,n)=>{n.r(t),n.d(t,{Playground:()=>a,WithIcon:()=>d,__namedExportsOrder:()=>l,default:()=>c});var o=n("../../node_modules/react/index.js"),r=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").cL)("Icon24ExternalLinkOutline","external_link_outline_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="external_link_outline_24"><g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><path d="M5.146 3.634c.762-.407 1.512-.534 3.082-.534H10.1a.9.9 0 1 1 0 1.8H8.228c-1.487 0-1.87.128-2.233.322-.336.18-.594.437-.773.773-.194.362-.322.746-.322 2.233v7.544c0 1.487.128 1.87.322 2.233.18.336.437.594.773.774.362.193.746.321 2.233.321h7.544c1.487 0 1.87-.128 2.233-.321.336-.18.594-.438.774-.774.193-.362.321-.746.321-2.233V13.9a.9.9 0 1 1 1.8 0v1.872c0 1.57-.127 2.32-.534 3.082a3.646 3.646 0 0 1-1.512 1.512c-.763.407-1.512.534-3.082.534H8.228c-1.57 0-2.32-.127-3.082-.534a3.647 3.647 0 0 1-1.512-1.512c-.407-.762-.534-1.512-.534-3.082V8.228c0-1.57.127-2.32.534-3.082a3.647 3.647 0 0 1 1.512-1.512z" /><path d="M14 4a.9.9 0 0 1 .9-.9H20a.9.9 0 0 1 .9.9v5.1a.9.9 0 1 1-1.8 0V6.173l-6.564 6.563a.9.9 0 1 1-1.272-1.272L17.827 4.9H14.9A.9.9 0 0 1 14 4z" /></g></symbol>',24,24,!1,void 0),i=n("./src/storybook/constants.ts");function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){var o,r,i;i=n[t],t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i})}return e}let c={title:"Blocks/Link",component:n("./src/components/Link/Link.tsx").c,parameters:s({},i.wj,i.iM)};var a={args:{href:"https://vkcom.github.io/VKUI/#/About",children:"О VKUI"}},d=function(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n.push.apply(n,o)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}(s({},a),{args:{href:"https://google.com",target:"_blank",children:o.createElement(o.Fragment,null,"https://google.com ",o.createElement(r,{width:16,height:16}))}});a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{\n  args: {\n    href: 'https://vkcom.github.io/VKUI/#/About',\n    children: 'О VKUI'\n  }\n}",...a.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{\n  ...Playground,\n  args: {\n    href: 'https://google.com',\n    target: '_blank',\n    children: <>\n        https://google.com <Icon24ExternalLinkOutline width={16} height={16} />\n      </>\n  }\n}",...d.parameters?.docs?.source}}};let l=["Playground","WithIcon"]},"../../node_modules/@swc/helpers/esm/_object_without_properties.js":(e,t,n)=>{n.d(t,{_:()=>o});function o(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}},"../../node_modules/@vkontakte/icons-sprite/dist/index.js":(e,t,n)=>{n.d(t,{cL:()=>w});var o,r=n("../../node_modules/@swc/helpers/esm/_object_spread.js"),i=n("../../node_modules/@swc/helpers/esm/_object_spread_props.js"),s=n("../../node_modules/@swc/helpers/esm/_object_without_properties.js"),c=n("../../node_modules/react/index.js"),a=n("../../node_modules/@swc/helpers/esm/_class_call_check.js"),d=n("../../node_modules/@swc/helpers/esm/_create_class.js"),l=n("../../node_modules/@swc/helpers/esm/_define_property.js"),u=function(){function e(t){var n,o,r=t.content;(0,a._)(this,e),(0,l._)(this,"isMounted",!1),(0,l._)(this,"node",void 0),this.node=(n=!!document.importNode,o=new DOMParser().parseFromString(r,"image/svg+xml").documentElement,n?document.importNode(o,!0):o)}return(0,d._)(e,[{key:"id",get:function(){return this.node.id}},{key:"mount",value:function(e){return this.isMounted||(this.isMounted=!0,e.appendChild(this.node)),this.node}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&(this.node.parentNode.removeChild(this.node),this.isMounted=!1)}}],[{key:"createFromExistingNode",value:function(t){var n=new e({content:""});return n.node=t,n}}]),e}(),h="http://www.w3.org/2000/svg",m=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,a._)(this,e),(0,l._)(this,"symbols",new Map),(0,l._)(this,"config",{attrs:{xmlns:h,"xmlns:xlink":"http://www.w3.org/1999/xlink",style:"position:absolute;width:0;height:0","aria-hidden":"true"}}),(0,l._)(this,"node",null),Object.assign(this.config.attrs,t.attrs)}return(0,d._)(e,[{key:"push",value:function(e){var t=this.symbols,n=t.has(e.id);return t.set(e.id,e),!n}},{key:"add",value:function(e){var t=this.push(e);return this.node&&t&&e.mount(this.node),t}},{key:"attach",value:function(e){var t=this;this.node||(this.node=e,this.symbols.forEach(function(t){t.mount(e)}),e.querySelectorAll("symbol").forEach(function(e){var n=u.createFromExistingNode(e);t.add(n)}))}},{key:"mount",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.node||(this.node=this.render(),t&&e.childNodes[0]?e.insertBefore(this.node,e.firstChild):e.appendChild(this.node)),this.node}},{key:"render",value:function(){var e=document.createElementNS(h,"svg");return Object.entries(this.config.attrs).forEach(function(t){return e.setAttribute(t[0],t[1])}),this.symbols.forEach(function(t){return e.appendChild(t.node)}),e}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&this.node.parentNode.removeChild(this.node)}}]),e}(),p=!!("undefined"!=typeof window&&window.document&&window.document.createElement);if(p){var f="__SVG_SPRITE_NODE__";o=new m({attrs:{id:f}});var v=function(){var e=document.getElementById(f);e?o.attach(e):o.mount(document.body),document.removeEventListener("DOMContentLoaded",v)};document.querySelector("body")?v():document.addEventListener("DOMContentLoaded",v)}else o=null;var g=p?c.useLayoutEffect:c.useEffect,_=function(e){var t=e.width,n=void 0===t?0:t,o=e.height,a=void 0===o?0:o,d=e.viewBox,l=e.id,u=e.className,h=e.fill,m=e.getRootRef,p=e.style,f=e.title,v=e.children,g=(0,s._)(e,["width","height","viewBox","id","className","fill","getRootRef","style","title","children"]),_=Math.max(n,a),w=(0,r._)({width:n,height:a},void 0===p?{}:p);return c.createElement("svg",(0,i._)((0,r._)({"aria-hidden":"true",display:"block"},g),{className:["vkuiIcon","vkuiIcon--".concat(_),"vkuiIcon--w-".concat(n),"vkuiIcon--h-".concat(a),"vkuiIcon--".concat(l),void 0===u?"":u].join(" ").trim(),viewBox:d,width:n,height:a,style:w,ref:m}),f&&c.createElement("title",null,f),c.createElement("use",{xlinkHref:"#".concat(l),style:{fill:"currentColor",color:h}},v))};function w(e,t,n,s,a,d,l,h){var m,p=function(){if(!f){var e;e=new u({content:s}),o&&o.add(e),f=!0}},f=!1,v=(m={},function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warn";m[t]||(console[n]("[@vkontakte/icons][".concat(e,"] ").concat(t)),m[t]=!0)}),w=function(e){return g(p,[]),l&&v("Иконка устарела"+(h?". Замените на ".concat(h):"")),c.createElement(_,(0,i._)((0,r._)({},e),{viewBox:n,id:t,width:void 0===e.width||isNaN(e.width)?a:+e.width,height:void 0===e.height||isNaN(e.height)?d:+e.height}))};return w.mountIcon=p,w.displayName=e,w}}}]);