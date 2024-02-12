"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[5e3],{"./src/components/GridAvatar/GridAvatar.stories.tsx":(e,t,r)=>{r.r(t),r.d(t,{Playground:()=>C,__namedExportsOrder:()=>P,default:()=>I});var n=r("../../node_modules/react/index.js"),o=r("../../tools/storybook-addon-cartesian/src/index.tsx"),s=r("./src/storybook/constants.ts"),a=r("./src/testing/icons.tsx"),i=r("./src/testing/mock.ts"),d=r("./src/components/ImageBase/types.ts"),l=r("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),c=r("./src/lib/warnOnce.ts"),u=r("./src/components/ImageBase/ImageBase.tsx"),m=r("./src/components/ImageBase/context.ts"),v=r("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),p=r.n(v),f=r("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),g=r.n(f),h=r("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),_=r.n(h),y=r("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),b=r.n(y),w=r("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),O=r.n(w),j=r("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/GridAvatar/GridAvatarBadge/GridAvatarBadge.module.css"),A={attributes:{class:"vkui-style"}};A.setAttributes=b(),A.insert=_().bind(null,"head"),A.domAPI=g(),A.insertStyleElement=O(),p()(j.c,A);let k=j.c&&j.c.locals?j.c.locals:void 0;var S=function(e){var t,r,o=e.className,s=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,["className"]),a=n.useContext(m.i).size;return n.createElement(u.IP.Badge,(t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n,o,s;s=r[t],t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s})}return e}({},s),r=r={className:(0,l.gr)(k.GridAvatarBadge,a<96&&k["GridAvatarBadge--shifted"],o)},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}),t))};try{S.displayName="GridAvatarBadge",S.__docgenInfo={description:"",displayName:"GridAvatarBadge",props:{background:{defaultValue:null,description:'Вид подложки под иконку.\n\n- `"stroke"` – имитирует вырез (⚠️ если фон под компонентом динамический, то ожидайте баг).\n- `"shadow"` – добавляет небольшую тень.',name:"background",required:!1,type:{name:"enum",value:[{value:'"shadow"'},{value:'"stroke"'}]}},children:{defaultValue:null,description:"Принимает иконку.\n\n> \uD83D\uDCDD Нужный для `<ImageBase size={...} />` размер можно узнать из функции `getBadgeIconSizeByImageBaseSize()`.\n\n> Предпочтительней использовать иконки из `@vkontakte/icons`.\n\n> \uD83D\uDCCA️ Если вы хотите передать кастомную иконку, то следует именовать её по шаблону `Icon<size><name>`. Или же\n> чтобы в неё был передан параметр `width`. Тогда мы сможем выводить в консоль подсказку правильного ли размера вы\n> использовали иконку.",name:"children",required:!0,type:{name:"ReactElement<ImageBaseExpectedIconProps, string | JSXElementConstructor<any>>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/GridAvatar/GridAvatarBadge/GridAvatarBadge.tsx#GridAvatarBadge"]={docgenInfo:S.__docgenInfo,name:"GridAvatarBadge",path:"src/components/GridAvatar/GridAvatarBadge/GridAvatarBadge.tsx#GridAvatarBadge"})}catch(e){}var G=r("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/GridAvatar/GridAvatar.module.css"),B={attributes:{class:"vkui-style"}};B.setAttributes=b(),B.insert=_().bind(null,"head"),B.domAPI=g(),B.insertStyleElement=O(),p()(G.c,B);let x=G.c&&G.c.locals?G.c.locals:void 0;(0,c.w)("GridAvatar");var E=function(e){var t,r,o=e.src,s=e.size,a=e.className,i=e.children,d=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,["src","size","className","children"]);return n.createElement(u.IP,(t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n,o,s;s=r[t],t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s})}return e}({},d),r=r={size:void 0===s?48:s,className:(0,l.gr)(x.GridAvatar,a)},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}),t),n.createElement("div",{className:x.GridAvatar__in,"aria-hidden":!0},(void 0===o?[]:o).map(function(e,t){return t<4?n.createElement("div",{key:e,className:x.GridAvatar__item,style:{backgroundImage:"url(".concat(e,")")}}):null})),i)};E.Badge=S;try{E.displayName="GridAvatar",E.__docgenInfo={description:"",displayName:"GridAvatar",props:{src:{defaultValue:{value:"[]"},description:"Массив со ссылками. От 1 до 4 элементов.",name:"src",required:!1,type:{name:"string[]"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}},getRef:{defaultValue:null,description:"",name:"getRef",required:!1,type:{name:"Ref<HTMLImageElement>"}},size:{defaultValue:{value:"48"},description:"Задаёт размер картинки.\n\nИспользуйте размеры заданные дизайн-системой `16 | 20 | 24 | 28 | 32 | 36 | 40 | 44 | 48 | 56 | 64 | 72 | 80 | 88 | 96`.\n\n> ⚠️ Использование кастомного размера – это пограничный кейс.",name:"size",required:!1,type:{name:"LiteralUnion<16 | 20 | 24 | 28 | 32 | 36 | 40 | 44 | 48 | 56 | 64 | 72 | 80 | 88 | 96, number>"}},widthSize:{defaultValue:null,description:"Ширина изображения",name:"widthSize",required:!1,type:{name:"number"}},heightSize:{defaultValue:null,description:"Высота изображения",name:"heightSize",required:!1,type:{name:"number"}},noBorder:{defaultValue:null,description:"Отключает обводку.",name:"noBorder",required:!1,type:{name:"boolean"}},withTransparentBackground:{defaultValue:null,description:"Отключает фон, заданный по умолчанию. Полезен для отображения картинок с прозрачностью.\n@since 5.10.0",name:"withTransparentBackground",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/GridAvatar/GridAvatar.tsx#GridAvatar"]={docgenInfo:E.__docgenInfo,name:"GridAvatar",path:"src/components/GridAvatar/GridAvatar.tsx#GridAvatar"})}catch(e){}try{Badge.displayName="GridAvatar.Badge",Badge.__docgenInfo={description:"",displayName:"GridAvatar.Badge",props:{background:{defaultValue:null,description:'Вид подложки под иконку.\n\n- `"stroke"` – имитирует вырез (⚠️ если фон под компонентом динамический, то ожидайте баг).\n- `"shadow"` – добавляет небольшую тень.',name:"background",required:!1,type:{name:"enum",value:[{value:'"shadow"'},{value:'"stroke"'}]}},children:{defaultValue:null,description:"Принимает иконку.\n\n> \uD83D\uDCDD Нужный для `<ImageBase size={...} />` размер можно узнать из функции `getBadgeIconSizeByImageBaseSize()`.\n\n> Предпочтительней использовать иконки из `@vkontakte/icons`.\n\n> \uD83D\uDCCA️ Если вы хотите передать кастомную иконку, то следует именовать её по шаблону `Icon<size><name>`. Или же\n> чтобы в неё был передан параметр `width`. Тогда мы сможем выводить в консоль подсказку правильного ли размера вы\n> использовали иконку.",name:"children",required:!0,type:{name:"ReactElement<ImageBaseExpectedIconProps, string | JSXElementConstructor<any>>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/GridAvatar/GridAvatar.tsx#GridAvatar.Badge"]={docgenInfo:E.Badge.__docgenInfo,name:"GridAvatar.Badge",path:"src/components/GridAvatar/GridAvatar.tsx#GridAvatar.Badge"})}catch(e){}let I={title:"Blocks/GridAvatar",component:E,parameters:s.wj,argTypes:{badged:{control:"boolean"},size:{control:{type:"select"},options:d.I}},decorators:[o.iU]};var C={render:function(e){var t,r,o=e.badged,s=e.size,i=void 0===s?48:s,d=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,["badged","size"]),l=i>=24&&o?n.createElement(E.Badge,null,n.createElement(a.YR,null)):void 0;return n.createElement(E,(t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n,o,s;s=r[t],t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s})}return e}({},d),r=r={size:i},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}),t),l)},args:{src:[(0,i.eG)(),(0,i.eG)(),(0,i.eG)(),(0,i.eG)()],badged:!1}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:"{\n  render: ({\n    badged,\n    size = 48,\n    ...args\n  }) => {\n    const badge = size >= 24 && badged ? <GridAvatar.Badge>\n          <IconExampleForBadgeBasedOnImageBaseSize />\n        </GridAvatar.Badge> : undefined;\n    return <GridAvatar {...args} size={size}>\n        {badge}\n      </GridAvatar>;\n  },\n  args: {\n    src: [getAvatarUrl(), getAvatarUrl(), getAvatarUrl(), getAvatarUrl()],\n    badged: false\n  }\n}",...C.parameters?.docs?.source}}};let P=["Playground"]},"../../node_modules/@swc/helpers/esm/_object_without_properties.js":(e,t,r)=>{r.d(t,{_:()=>n});function n(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}},"../../node_modules/@vkontakte/icons-sprite/dist/index.js":(e,t,r)=>{r.d(t,{cL:()=>y});var n,o=r("../../node_modules/@swc/helpers/esm/_object_spread.js"),s=r("../../node_modules/@swc/helpers/esm/_object_spread_props.js"),a=r("../../node_modules/@swc/helpers/esm/_object_without_properties.js"),i=r("../../node_modules/react/index.js"),d=r("../../node_modules/@swc/helpers/esm/_class_call_check.js"),l=r("../../node_modules/@swc/helpers/esm/_create_class.js"),c=r("../../node_modules/@swc/helpers/esm/_define_property.js"),u=function(){function e(t){var r,n,o=t.content;(0,d._)(this,e),(0,c._)(this,"isMounted",!1),(0,c._)(this,"node",void 0),this.node=(r=!!document.importNode,n=new DOMParser().parseFromString(o,"image/svg+xml").documentElement,r?document.importNode(n,!0):n)}return(0,l._)(e,[{key:"id",get:function(){return this.node.id}},{key:"mount",value:function(e){return this.isMounted||(this.isMounted=!0,e.appendChild(this.node)),this.node}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&(this.node.parentNode.removeChild(this.node),this.isMounted=!1)}}],[{key:"createFromExistingNode",value:function(t){var r=new e({content:""});return r.node=t,r}}]),e}(),m="http://www.w3.org/2000/svg",v=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,d._)(this,e),(0,c._)(this,"symbols",new Map),(0,c._)(this,"config",{attrs:{xmlns:m,"xmlns:xlink":"http://www.w3.org/1999/xlink",style:"position:absolute;width:0;height:0","aria-hidden":"true"}}),(0,c._)(this,"node",null),Object.assign(this.config.attrs,t.attrs)}return(0,l._)(e,[{key:"push",value:function(e){var t=this.symbols,r=t.has(e.id);return t.set(e.id,e),!r}},{key:"add",value:function(e){var t=this.push(e);return this.node&&t&&e.mount(this.node),t}},{key:"attach",value:function(e){var t=this;this.node||(this.node=e,this.symbols.forEach(function(t){t.mount(e)}),e.querySelectorAll("symbol").forEach(function(e){var r=u.createFromExistingNode(e);t.add(r)}))}},{key:"mount",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.node||(this.node=this.render(),t&&e.childNodes[0]?e.insertBefore(this.node,e.firstChild):e.appendChild(this.node)),this.node}},{key:"render",value:function(){var e=document.createElementNS(m,"svg");return Object.entries(this.config.attrs).forEach(function(t){return e.setAttribute(t[0],t[1])}),this.symbols.forEach(function(t){return e.appendChild(t.node)}),e}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&this.node.parentNode.removeChild(this.node)}}]),e}(),p=!!("undefined"!=typeof window&&window.document&&window.document.createElement);if(p){var f="__SVG_SPRITE_NODE__";n=new v({attrs:{id:f}});var g=function(){var e=document.getElementById(f);e?n.attach(e):n.mount(document.body),document.removeEventListener("DOMContentLoaded",g)};document.querySelector("body")?g():document.addEventListener("DOMContentLoaded",g)}else n=null;var h=p?i.useLayoutEffect:i.useEffect,_=function(e){var t=e.width,r=void 0===t?0:t,n=e.height,d=void 0===n?0:n,l=e.viewBox,c=e.id,u=e.className,m=e.fill,v=e.getRootRef,p=e.style,f=e.title,g=e.children,h=(0,a._)(e,["width","height","viewBox","id","className","fill","getRootRef","style","title","children"]),_=Math.max(r,d),y=(0,o._)({width:r,height:d},void 0===p?{}:p);return i.createElement("svg",(0,s._)((0,o._)({"aria-hidden":"true",display:"block"},h),{className:["vkuiIcon","vkuiIcon--".concat(_),"vkuiIcon--w-".concat(r),"vkuiIcon--h-".concat(d),"vkuiIcon--".concat(c),void 0===u?"":u].join(" ").trim(),viewBox:l,width:r,height:d,style:y,ref:v}),f&&i.createElement("title",null,f),i.createElement("use",{xlinkHref:"#".concat(c),style:{fill:"currentColor",color:m}},g))};function y(e,t,r,a,d,l,c,m){var v,p=function(){if(!f){var e;e=new u({content:a}),n&&n.add(e),f=!0}},f=!1,g=(v={},function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warn";v[t]||(console[r]("[@vkontakte/icons][".concat(e,"] ").concat(t)),v[t]=!0)}),y=function(e){return h(p,[]),c&&g("Иконка устарела"+(m?". Замените на ".concat(m):"")),i.createElement(_,(0,s._)((0,o._)({},e),{viewBox:r,id:t,width:void 0===e.width||isNaN(e.width)?d:+e.width,height:void 0===e.height||isNaN(e.height)?l:+e.height}))};return y.mountIcon=p,y.displayName=e,y}},"../../node_modules/@vkontakte/icons/dist/es6/12/users_12.js":(e,t,r)=>{r.d(t,{m:()=>n});var n=(0,r("../../node_modules/@vkontakte/icons-sprite/dist/index.js").cL)("Icon12Users","users_12","0 0 12 12",'<symbol xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 12 12" id="users_12"><path d="M8.25 6.5c1.147 0 3.25.429 3.25 2.143 0 .75-.191.857-.573.857l-3.046.001A2.77 2.77 0 0 0 8 8.643c0-.862-.316-1.534-.837-2.032.392-.08.775-.111 1.087-.111Zm-4.5 0C4.897 6.5 7 6.929 7 8.643c0 .75-.191.857-.574.857H1.074C.69 9.5.5 9.393.5 8.643.5 6.929 2.603 6.5 3.75 6.5m0-3.75a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m4.5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" /></symbol>',12,12,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/16/users_16.js":(e,t,r)=>{r.d(t,{W:()=>n});var n=(0,r("../../node_modules/@vkontakte/icons-sprite/dist/index.js").cL)("Icon16Users","users_16","0 0 16 16",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" id="users_16"><path fill="currentColor" d="M11.357 8.5c1.533 0 4.343.571 4.343 2.857 0 1-.255 1.143-.766 1.143l-4.07.001c.106-.326.159-.709.159-1.144 0-1.149-.422-2.045-1.118-2.708a7.444 7.444 0 0 1 1.452-.149Zm-6.014 0c1.533 0 4.343.571 4.343 2.857 0 1-.255 1.143-.766 1.143H1.766c-.51 0-.766-.143-.766-1.143C1 9.071 3.81 8.5 5.343 8.5Zm0-5c1.108 0 2.005.895 2.005 2s-.897 2-2.005 2c-1.107 0-2.004-.895-2.004-2s.897-2 2.004-2m6.014 0c1.107 0 2.004.895 2.004 2s-.897 2-2.004 2-2.005-.895-2.005-2 .897-2 2.005-2" /></symbol>',16,16,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/20/gift_circle_fill_red_20.js":(e,t,r)=>{r.d(t,{U:()=>n});var n=(0,r("../../node_modules/@vkontakte/icons-sprite/dist/index.js").cL)("Icon20GiftCircleFillRed","gift_circle_fill_red_20","0 0 20 20",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" id="gift_circle_fill_red_20"><linearGradient id="gift_circle_fill_red_20_a" x1="-10" x2="10" y1="10" y2="30" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ff5263" /><stop offset="1" stop-color="#ff3347" /></linearGradient><path fill="url(#gift_circle_fill_red_20_a)" d="M0 10C0 4.477 4.477 0 10 0s10 4.477 10 10-4.477 10-10 10S0 15.523 0 10" /><path fill="#fff" d="M8.709 12.3c.223 0 .304.023.385.067s.146.107.19.189c.043.081.066.162.066.385v2.418c0 .223-.023.304-.067.385a.454.454 0 0 1-.189.19c-.081.043-.162.066-.385.066H7.282c-.446 0-.607-.046-.77-.133a.91.91 0 0 1-.378-.379c-.088-.162-.134-.324-.134-.77v-1.777c0-.223.023-.304.067-.385.043-.082.107-.146.189-.19s.162-.066.385-.066zm4.65 0c.223 0 .304.023.385.067s.146.107.19.189.066.162.066.385v1.777c0 .446-.046.607-.134.77a.909.909 0 0 1-.378.379c-.162.087-.324.133-.77.133h-1.427c-.223 0-.304-.023-.385-.067a.454.454 0 0 1-.19-.189c-.043-.081-.066-.162-.066-.385v-2.418c0-.223.023-.304.067-.385s.107-.146.189-.19.162-.066.385-.066zM8.709 8c.223 0 .304.023.385.067s.146.107.19.189c.043.081.066.162.066.385v1.718c0 .223-.023.304-.067.385a.454.454 0 0 1-.189.19c-.081.043-.162.066-.385.066H5.641c-.223 0-.304-.023-.385-.067a.454.454 0 0 1-.19-.189C5.024 10.663 5 10.582 5 10.36V9.255c0-.413.046-.58.134-.743a.909.909 0 0 1 .378-.378c.163-.088.33-.134.743-.134zm5.036 0c.413 0 .58.046.743.134.163.087.291.215.378.378.088.163.134.33.134.743v1.104c0 .223-.023.304-.067.385a.454.454 0 0 1-.189.19c-.081.043-.162.066-.385.066h-3.068c-.223 0-.304-.023-.385-.067a.454.454 0 0 1-.19-.189c-.043-.081-.066-.162-.066-.385V8.641c0-.223.023-.304.067-.385s.107-.146.189-.19S11.068 8 11.29 8zM10 7C6.5 7 6.2 4.8 7 4s3-.5 3 3m3-3.003c.8.8.5 3.003-3 3.003 0-3.5 2.2-3.803 3-3.003" /></symbol>',20,20,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/20/users_20.js":(e,t,r)=>{r.d(t,{C:()=>n});var n=(0,r("../../node_modules/@vkontakte/icons-sprite/dist/index.js").cL)("Icon20Users","users_20","0 0 20 20",'<symbol xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" id="users_20"><path d="M13.5 10.5c1.941 0 5.5.714 5.5 3.571 0 1.25-.323 1.429-.97 1.429l-4.738.001c.139-.4.208-.878.208-1.43 0-1.483-.592-2.62-1.555-3.436A9.413 9.413 0 0 1 13.5 10.5m-7 0c1.941 0 5.5.714 5.5 3.571 0 1.25-.323 1.429-.97 1.429H1.97c-.646 0-.97-.179-.97-1.429C1 11.214 4.559 10.5 6.5 10.5m0-6.5a2.5 2.5 0 1 1 .001 4.999A2.5 2.5 0 0 1 6.5 4m7 0a2.5 2.5 0 1 1 .001 4.999A2.5 2.5 0 0 1 13.5 4" /></symbol>',20,20,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/24/add_outline_24.js":(e,t,r)=>{r.d(t,{Q:()=>n});var n=(0,r("../../node_modules/@vkontakte/icons-sprite/dist/index.js").cL)("Icon24AddOutline","add_outline_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="add_outline_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path fill="currentColor" fill-rule="nonzero" d="M12 3a.9.9 0 0 1 .9.9v7.2h7.2a.9.9 0 1 1 0 1.8l-7.2-.001V20.1a.9.9 0 1 1-1.8 0V12.9l-7.2.001a.9.9 0 1 1 0-1.8h7.2V3.9A.9.9 0 0 1 12 3" /></g></symbol>',24,24,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/24/users_24.js":(e,t,r)=>{r.d(t,{I:()=>n});var n=(0,r("../../node_modules/@vkontakte/icons-sprite/dist/index.js").cL)("Icon24Users","users_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" id="users_24"><path d="M16.5 12.75c2.294 0 6.5.857 6.5 4.285 0 1.5-.382 1.715-1.147 1.715h-6.09c.158-.489.237-1.062.237-1.715 0-1.723-.631-3.066-1.672-4.062.783-.16 1.548-.223 2.172-.223Zm-9 0c2.294 0 6.5.857 6.5 4.285 0 1.5-.382 1.715-1.147 1.715H2.147C1.382 18.75 1 18.535 1 17.035c0-3.428 4.206-4.285 6.5-4.285m0-7.5a3 3 0 1 1 0 6 3 3 0 1 1 0-6m9 0a3 3 0 1 1 0 6 3 3 0 1 1 0-6" /></symbol>',24,24,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/28/add_outline_28.js":(e,t,r)=>{r.d(t,{c:()=>n});var n=(0,r("../../node_modules/@vkontakte/icons-sprite/dist/index.js").cL)("Icon28AddOutline","add_outline_28","0 0 28 28",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="add_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path fill="currentColor" fill-rule="nonzero" d="M14 4a1 1 0 0 1 1 1v8h8a1 1 0 0 1 0 2h-8v8a1 1 0 0 1-2 0v-8H5a1 1 0 0 1 0-2h8V5a1 1 0 0 1 1-1" /></g></symbol>',28,28,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/28/users_28.js":(e,t,r)=>{r.d(t,{C:()=>n});var n=(0,r("../../node_modules/@vkontakte/icons-sprite/dist/index.js").cL)("Icon28Users","users_28","0 0 28 28",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="users_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path fill="currentColor" d="M22.5 10c0-1.934-1.566-3.5-3.5-3.5a3.499 3.499 0 0 0-3.5 3.5c0 1.934 1.566 3.5 3.5 3.5s3.5-1.566 3.5-3.5m-6.17 5.293A12.72 12.72 0 0 1 19 15c2.47 0 7 .857 7 4.286 0 1.5-.412 1.714-1.235 1.714h-7.01c.163-.487.245-1.06.245-1.714 0-1.69-.627-3.009-1.67-3.993M12.5 10c0 1.934-1.566 3.5-3.5 3.5A3.499 3.499 0 0 1 5.5 10c0-1.934 1.566-3.5 3.5-3.5s3.5 1.566 3.5 3.5M2 19.286C2 15.857 6.53 15 9 15c2.47 0 7 .857 7 4.286 0 1.5-.412 1.714-1.235 1.714H3.235C2.412 21 2 20.786 2 19.286" /></g></symbol>',28,28,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/36/users_36.js":(e,t,r)=>{r.d(t,{g:()=>n});var n=(0,r("../../node_modules/@vkontakte/icons-sprite/dist/index.js").cL)("Icon36Users","users_36","0 0 36 36",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 36 36" id="users_36"><path fill="currentColor" d="M28.929 12.857c0-2.486-2.014-4.5-4.5-4.5a4.499 4.499 0 0 0-4.5 4.5c0 2.486 2.013 4.5 4.5 4.5 2.486 0 4.5-2.014 4.5-4.5m-4.5 6.429c3.176 0 9 1.102 9 5.51 0 1.928-.53 2.204-1.589 2.204h-9.012c.209-.626.315-1.363.315-2.204 0-2.171-.807-3.868-2.147-5.133a16.304 16.304 0 0 1 3.433-.377m-12.858 0c3.177 0 9 1.102 9 5.51 0 1.928-.529 2.204-1.588 2.204H4.16c-1.06 0-1.589-.276-1.589-2.204 0-4.408 5.824-5.51 9-5.51m0-10.929c2.487 0 4.5 2.014 4.5 4.5s-2.013 4.5-4.5 4.5a4.499 4.499 0 0 1-4.5-4.5c0-2.486 2.014-4.5 4.5-4.5" /></symbol>',36,36,!1,void 0)},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/GridAvatar/GridAvatar.module.css":(e,t,r)=>{r.d(t,{c:()=>i});var n=r("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=r.n(n),s=r("../../node_modules/css-loader/dist/runtime/api.js"),a=r.n(s)()(o());a.push([e.id,".GridAvatar--zMaTn{border-radius:50%}.GridAvatar__in--Rnx3A{border-radius:inherit;display:flex;flex-flow:column wrap;height:100%;overflow:hidden;width:100%}.GridAvatar__item--hQ52f{background-position:50%;background-size:cover;height:calc(50% - var(--vkui_internal--grid_avatar_image_offset) / 2);margin-right:var(--vkui_internal--grid_avatar_image_offset);width:calc(50% - var(--vkui_internal--grid_avatar_image_offset) / 2)}.GridAvatar__item--hQ52f:only-child{width:100%}.GridAvatar__item--hQ52f:first-child:not(:nth-last-child(4)),.GridAvatar__item--hQ52f:nth-child(2):last-child{height:100%}.GridAvatar__item--hQ52f:nth-last-child(4),.GridAvatar__item--hQ52f:nth-last-child(n+3)~.GridAvatar__item--hQ52f:nth-last-child(2){margin-bottom:var(--vkui_internal--grid_avatar_image_offset)}",""]),a.locals={GridAvatar:"GridAvatar--zMaTn",GridAvatar__in:"GridAvatar__in--Rnx3A",GridAvatar__item:"GridAvatar__item--hQ52f"};let i=a},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/GridAvatar/GridAvatarBadge/GridAvatarBadge.module.css":(e,t,r)=>{r.d(t,{c:()=>i});var n=r("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=r.n(n),s=r("../../node_modules/css-loader/dist/runtime/api.js"),a=r.n(s)()(o());a.push([e.id,".GridAvatarBadge--J_6Ka{bottom:0;right:0}.GridAvatarBadge--shifted--jEyVM{bottom:-2px;right:-2px}",""]),a.locals={GridAvatarBadge:"GridAvatarBadge--J_6Ka","GridAvatarBadge--shifted":"GridAvatarBadge--shifted--jEyVM"};let i=a},"./src/components/ImageBase/helpers.ts":(e,t,r)=>{function n(e){return e<=20?12:e>20&&e<=28?16:e>28&&e<=32?20:e>32&&e<=44?24:e>44&&e<=64?28:n.MAX_SIZE}function o(e){return e<=36?12:e>36&&e<=48?16:e>48&&e<=64?20:o.MAX_SIZE}function s(e){return e<=20?12:e>20&&e<=24?16:e>24&&e<=28?18:e>28&&e<=40?20:e>40&&e<=48?24:e>48&&e<=88?28:s.MAX_SIZE}r.d(t,{$m:()=>n,_w:()=>o,i6:()=>s}),n.MAX_SIZE=36,o.MAX_SIZE=24,s.MAX_SIZE=32}}]);