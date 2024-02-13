"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[8600],{"./src/components/ChipsInput/ChipsInput.stories.tsx":(e,t,r)=>{r.r(t),r.d(t,{Playground:()=>p,__namedExportsOrder:()=>f,default:()=>m});var n=r("../../node_modules/react/index.js"),o=r("./src/storybook/constants.ts"),i=r("./src/components/FormItem/FormItem.tsx"),a=r("./src/hooks/useExternRef.ts"),l=r("./src/components/ChipsInputBase/ChipsInputBase.tsx"),u=r("./src/components/ChipsInputBase/constants.tsx"),s=r("./src/components/ChipsInput/useChipsInput.ts"),d=function(e){var t,r,o=e.value,i=e.defaultValue,d=e.onChange,c=e.getRef,m=e.inputValue,p=e.defaultInputValue,f=e.onInputChange,v=e.getOptionValue,h=void 0===v?u.Uf:v,b=e.getOptionLabel,_=void 0===b?u._q:b,y=e.getNewOptionData,F=void 0===y?u._c:y,g=e.disabled,O=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,["value","defaultValue","onChange","getRef","inputValue","defaultInputValue","onInputChange","getOptionValue","getOptionLabel","getNewOptionData","disabled"]),k=(0,s.m)({value:o,defaultValue:i,onChange:d,getOptionLabel:_,getOptionValue:h,getNewOptionData:F,inputValue:m,defaultInputValue:p,onInputChange:f,disabled:g}),I=k.value,j=k.addOptionFromInput,w=k.removeOption,x=k.inputRef,C=k.inputValue,S=k.onInputChange,V=(0,a.K)(c,x);return n.createElement(l.L,(t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n,o,i;i=r[t],t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i})}return e}({},O),r=r={disabled:g,value:I,onAddChipOption:j,onRemoveChipOption:w,getRef:V,inputValue:C,onInputChange:S},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}),t))};try{d.displayName="ChipsInput",d.__docgenInfo={description:"",displayName:"ChipsInput",props:{getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}},addOnBlur:{defaultValue:null,description:"Добавляет значение в список на событие `onBlur`",name:"addOnBlur",required:!1,type:{name:"boolean"}},renderChip:{defaultValue:{value:"Используется [Chip](#/Chip)"},description:"Render prop функция для возврата своего компонента.",name:"renderChip",required:!1,type:{name:"RenderChip<ChipOption>"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"Option[]"}},onInputChange:{defaultValue:null,description:"",name:"onInputChange",required:!1,type:{name:"OnInputChange"}},inputValue:{defaultValue:null,description:"",name:"inputValue",required:!1,type:{name:"string"}},getRef:{defaultValue:null,description:"",name:"getRef",required:!1,type:{name:"Ref<HTMLInputElement>"}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"right"'},{value:'"left"'}]}},getOptionValue:{defaultValue:null,description:"Селектор значения.",name:"getOptionValue",required:!1,type:{name:"GetOptionValue<Option>"}},getOptionLabel:{defaultValue:null,description:"Селектор пользовательского представления.",name:"getOptionLabel",required:!1,type:{name:"GetOptionLabel<Option>"}},getNewOptionData:{defaultValue:null,description:"Функция для создания новой опции.",name:"getNewOptionData",required:!1,type:{name:"GetNewOptionData<Option>"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"Option[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"OnChange<Option>"}},defaultInputValue:{defaultValue:null,description:"",name:"defaultInputValue",required:!1,type:{name:"string"}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"error"'},{value:'"valid"'}]}},before:{defaultValue:null,description:"Добавляет иконку слева.\n\nРекомендации:\n\n- Используйте следующие размеры иконок `12` | `16` | `20` | `24` | `28`.\n- Используйте [IconButton](https://vkcom.github.io/VKUI/#/IconButton), если вам нужна кликабельная иконка.",name:"before",required:!1,type:{name:"ReactNode"}},after:{defaultValue:null,description:"Добавляет иконку справа.\n\nРекомендации:\n\n- Используйте следующие размеры иконок `12` | `16` | `20` | `24` | `28`.\n- Используйте [IconButton](https://vkcom.github.io/VKUI/#/IconButton), если вам нужна кликабельная иконка.",name:"after",required:!1,type:{name:"ReactNode"}},mode:{defaultValue:null,description:"Режим отображения.\n\n- `default` — показывает фон, обводку и, при наличии, текст-подсказку.\n- `plain` — показывает только текст-подсказку.",name:"mode",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"plain"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ChipsInput/ChipsInput.tsx#ChipsInput"]={docgenInfo:d.__docgenInfo,name:"ChipsInput",path:"src/components/ChipsInput/ChipsInput.tsx#ChipsInput"})}catch(e){}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n,o,i;i=r[t],t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i})}return e}let m={title:"Forms/ChipsInput",component:d,parameters:c({},o.wj,o.iM)};var p={render:function(e){var t,r;return n.createElement(i.N,{top:"Добавьте любимые теги",htmlFor:"chips-input",style:{width:320}},n.createElement(d,(t=c({},e),r=r={id:"chips-input"},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}),t)))}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:'{\n  render: args => <FormItem top="Добавьте любимые теги" htmlFor="chips-input" style={{\n    width: 320\n  }}>\n      <ChipsInput {...args} id="chips-input" />\n    </FormItem>\n}',...p.parameters?.docs?.source}}};let f=["Playground"]},"../../node_modules/@swc/helpers/esm/_object_without_properties.js":(e,t,r)=>{r.d(t,{_:()=>n});function n(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}},"../../node_modules/@vkontakte/icons-sprite/dist/index.js":(e,t,r)=>{r.d(t,{cL:()=>y});var n,o=r("../../node_modules/@swc/helpers/esm/_object_spread.js"),i=r("../../node_modules/@swc/helpers/esm/_object_spread_props.js"),a=r("../../node_modules/@swc/helpers/esm/_object_without_properties.js"),l=r("../../node_modules/react/index.js"),u=r("../../node_modules/@swc/helpers/esm/_class_call_check.js"),s=r("../../node_modules/@swc/helpers/esm/_create_class.js"),d=r("../../node_modules/@swc/helpers/esm/_define_property.js"),c=function(){function e(t){var r,n,o=t.content;(0,u._)(this,e),(0,d._)(this,"isMounted",!1),(0,d._)(this,"node",void 0),this.node=(r=!!document.importNode,n=new DOMParser().parseFromString(o,"image/svg+xml").documentElement,r?document.importNode(n,!0):n)}return(0,s._)(e,[{key:"id",get:function(){return this.node.id}},{key:"mount",value:function(e){return this.isMounted||(this.isMounted=!0,e.appendChild(this.node)),this.node}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&(this.node.parentNode.removeChild(this.node),this.isMounted=!1)}}],[{key:"createFromExistingNode",value:function(t){var r=new e({content:""});return r.node=t,r}}]),e}(),m="http://www.w3.org/2000/svg",p=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,u._)(this,e),(0,d._)(this,"symbols",new Map),(0,d._)(this,"config",{attrs:{xmlns:m,"xmlns:xlink":"http://www.w3.org/1999/xlink",style:"position:absolute;width:0;height:0","aria-hidden":"true"}}),(0,d._)(this,"node",null),Object.assign(this.config.attrs,t.attrs)}return(0,s._)(e,[{key:"push",value:function(e){var t=this.symbols,r=t.has(e.id);return t.set(e.id,e),!r}},{key:"add",value:function(e){var t=this.push(e);return this.node&&t&&e.mount(this.node),t}},{key:"attach",value:function(e){var t=this;this.node||(this.node=e,this.symbols.forEach(function(t){t.mount(e)}),e.querySelectorAll("symbol").forEach(function(e){var r=c.createFromExistingNode(e);t.add(r)}))}},{key:"mount",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.node||(this.node=this.render(),t&&e.childNodes[0]?e.insertBefore(this.node,e.firstChild):e.appendChild(this.node)),this.node}},{key:"render",value:function(){var e=document.createElementNS(m,"svg");return Object.entries(this.config.attrs).forEach(function(t){return e.setAttribute(t[0],t[1])}),this.symbols.forEach(function(t){return e.appendChild(t.node)}),e}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&this.node.parentNode.removeChild(this.node)}}]),e}(),f=!!("undefined"!=typeof window&&window.document&&window.document.createElement);if(f){var v="__SVG_SPRITE_NODE__";n=new p({attrs:{id:v}});var h=function(){var e=document.getElementById(v);e?n.attach(e):n.mount(document.body),document.removeEventListener("DOMContentLoaded",h)};document.querySelector("body")?h():document.addEventListener("DOMContentLoaded",h)}else n=null;var b=f?l.useLayoutEffect:l.useEffect,_=function(e){var t=e.width,r=void 0===t?0:t,n=e.height,u=void 0===n?0:n,s=e.viewBox,d=e.id,c=e.className,m=e.fill,p=e.getRootRef,f=e.style,v=e.title,h=e.children,b=(0,a._)(e,["width","height","viewBox","id","className","fill","getRootRef","style","title","children"]),_=Math.max(r,u),y=(0,o._)({width:r,height:u},void 0===f?{}:f);return l.createElement("svg",(0,i._)((0,o._)({"aria-hidden":"true",display:"block"},b),{className:["vkuiIcon","vkuiIcon--".concat(_),"vkuiIcon--w-".concat(r),"vkuiIcon--h-".concat(u),"vkuiIcon--".concat(d),void 0===c?"":c].join(" ").trim(),viewBox:s,width:r,height:u,style:y,ref:p}),v&&l.createElement("title",null,v),l.createElement("use",{xlinkHref:"#".concat(d),style:{fill:"currentColor",color:m}},h))};function y(e,t,r,a,u,s,d,m){var p,f=function(){if(!v){var e;e=new c({content:a}),n&&n.add(e),v=!0}},v=!1,h=(p={},function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warn";p[t]||(console[r]("[@vkontakte/icons][".concat(e,"] ").concat(t)),p[t]=!0)}),y=function(e){return b(f,[]),d&&h("Иконка устарела"+(m?". Замените на ".concat(m):"")),l.createElement(_,(0,i._)((0,o._)({},e),{viewBox:r,id:t,width:void 0===e.width||isNaN(e.width)?u:+e.width,height:void 0===e.height||isNaN(e.height)?s:+e.height}))};return y.mountIcon=f,y.displayName=e,y}},"../../node_modules/@vkontakte/icons/dist/es6/16/cancel_16.js":(e,t,r)=>{r.d(t,{I:()=>n});var n=(0,r("../../node_modules/@vkontakte/icons-sprite/dist/index.js").cL)("Icon16Cancel","cancel_16","0 0 16 16",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" id="cancel_16"><path fill="currentColor" d="M12.736 3.264a.9.9 0 0 1 0 1.272L9.273 8l3.463 3.464a.9.9 0 0 1 .081 1.18l-.08.092a.9.9 0 0 1-1.273 0L8 9.273l-3.464 3.463a.9.9 0 0 1-1.272-1.272L6.727 8 3.264 4.536a.9.9 0 0 1-.08-1.18l.08-.092a.9.9 0 0 1 1.272 0L8 6.727l3.464-3.463a.9.9 0 0 1 1.272 0Z" /></symbol>',16,16,!1,void 0)},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/FormField/FormField.module.css":(e,t,r)=>{r.d(t,{c:()=>l});var n=r("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=r.n(n),i=r("../../node_modules/css-loader/dist/runtime/api.js"),a=r.n(i)()(o());a.push([e.id,".FormField--cV1je{align-items:center;box-sizing:border-box;display:flex;font-family:var(--vkui--font_family_base);min-height:var(--vkui--size_field_height--regular);position:relative;-webkit-tap-highlight-color:transparent;border-radius:var(--vkui--size_border_radius--regular);isolation:isolate}.FormField--sizeY-compact--oV07Z{min-height:var(--vkui--size_field_height--compact)}@media (max-height:414.9px),(pointer:fine) and (min-width:768px){.FormField--sizeY-none--xlzBX{min-height:var(--vkui--size_field_height--compact)}}.FormField--cV1je>*{border-radius:inherit;z-index:var(--vkui_internal--z_index_form_field_element)}.FormField__after--a5xC5,.FormField__before--SmyZI{align-content:center;align-items:center;color:var(--vkui--color_icon_secondary);display:flex;flex-shrink:0;height:100%;justify-content:center;min-width:var(--vkui--size_field_height--regular);position:relative;z-index:var(--vkui_internal--z_index_form_field_side)}.FormField--sizeY-compact--oV07Z .FormField__after--a5xC5,.FormField--sizeY-compact--oV07Z .FormField__before--SmyZI{height:var(--vkui--size_field_height--compact);min-width:var(--vkui--size_field_height--compact)}@media (max-height:414.9px),(pointer:fine) and (min-width:768px){.FormField--sizeY-none--xlzBX .FormField__after--a5xC5,.FormField--sizeY-none--xlzBX .FormField__before--SmyZI{height:var(--vkui--size_field_height--compact);min-width:var(--vkui--size_field_height--compact)}}.FormField__before--SmyZI{color:var(--vkui--color_icon_accent)}.FormField__after--a5xC5{color:var(--vkui--color_icon_secondary)}.FormField__border--et6Lb{border:var(--vkui--size_border--regular) solid transparent;border-radius:inherit;box-sizing:border-box;height:100%;left:0;pointer-events:none;position:absolute;top:0;transform-origin:left top;width:100%;z-index:var(--vkui_internal--z_index_form_field_border)}.FormField--mode-default--sUDAK .FormField__border--et6Lb{border-color:var(--vkui--color_field_border_alpha)}.FormField--mode-default--sUDAK{background-color:var(--vkui--color_field_background)}.FormField--status-error--MkLL5 .FormField__border--et6Lb,.vkuiInternalFormItem--status-error .FormField__border--et6Lb{border-color:var(--vkui--color_stroke_negative);z-index:var(--vkui_internal--z_index_form_field_status)}.FormField--status-error--MkLL5,.vkuiInternalFormItem--status-error .FormField--cV1je{background-color:var(--vkui--color_background_negative_tint)}.FormField--status-valid--dDam8 .FormField__border--et6Lb,.vkuiInternalFormItem--status-valid .FormField__border--et6Lb{border-color:var(--vkui--color_stroke_positive);z-index:var(--vkui_internal--z_index_form_field_status)}.FormField--disabled--qRxeX{cursor:default;opacity:var(--vkui--opacity_disable_accessibility);pointer-events:none}.FormField--hover--zNrWU{background-color:var(--vkui--color_field_background)}.FormField--mode-default--sUDAK.FormField--hover--zNrWU .FormField__border--et6Lb{border-color:var(--vkui--color_field_border_alpha--hover);z-index:var(--vkui_internal--z_index_form_field_border_hover)}.vkuiInternalNativeSelect .FormField__after--a5xC5{pointer-events:none}.vkuiInternalCalendarHeader__picker .FormField__after--a5xC5{min-width:12px;padding-right:8px}.vkuiInternalFormLayoutGroup--segmented .FormField--cV1je{border-radius:0;isolation:auto;z-index:auto}.vkuiInternalFormLayoutGroup--segmented.vkuiInternalFormLayoutGroup--mode-horizontal .vkuiInternalFormItem:first-of-type .FormField--cV1je{border-bottom-left-radius:var(--vkui--size_border_radius--regular);border-top-left-radius:var(--vkui--size_border_radius--regular)}.vkuiInternalFormLayoutGroup--segmented.vkuiInternalFormLayoutGroup--mode-horizontal .vkuiInternalFormItem:last-of-type .FormField--cV1je{border-bottom-right-radius:var(--vkui--size_border_radius--regular);border-top-right-radius:var(--vkui--size_border_radius--regular)}.vkuiInternalFormLayoutGroup--segmented.vkuiInternalFormLayoutGroup--mode-vertical .vkuiInternalFormItem:first-of-type .FormField--cV1je{border-top-left-radius:var(--vkui--size_border_radius--regular);border-top-right-radius:var(--vkui--size_border_radius--regular)}.vkuiInternalFormLayoutGroup--segmented.vkuiInternalFormLayoutGroup--mode-vertical .vkuiInternalFormItem:last-of-type .FormField--cV1je{border-bottom-left-radius:var(--vkui--size_border_radius--regular);border-bottom-right-radius:var(--vkui--size_border_radius--regular)}.FormField--focus-visible--_koel.FormField--focus-visible--_koel.FormField--focus-visible--_koel{outline:var(--vkui_internal--outline);outline-offset:calc(-1 * var(--vkui--size_border--regular));outline-width:var(--vkui--size_border--regular)}",""]),a.locals={FormField:"FormField--cV1je","FormField--sizeY-compact":"FormField--sizeY-compact--oV07Z","FormField--sizeY-none":"FormField--sizeY-none--xlzBX",FormField__after:"FormField__after--a5xC5",FormField__before:"FormField__before--SmyZI",FormField__border:"FormField__border--et6Lb","FormField--mode-default":"FormField--mode-default--sUDAK","FormField--status-error":"FormField--status-error--MkLL5","FormField--status-valid":"FormField--status-valid--dDam8","FormField--disabled":"FormField--disabled--qRxeX","FormField--hover":"FormField--hover--zNrWU","FormField--focus-visible":"FormField--focus-visible--_koel"};let l=a},"./src/components/FormField/FormField.tsx":(e,t,r)=>{r.d(t,{W:()=>w});var n=r("../../node_modules/react/index.js"),o=r("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),i=r("./src/hooks/useAdaptivity.ts"),a=r("./src/hooks/useExternRef.ts"),l=r("./src/hooks/useFocusVisibleClassName.ts"),u=r("./src/hooks/useFocusWithin.ts"),s=r("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),d=r.n(s),c=r("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),m=r.n(c),p=r("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),f=r.n(p),v=r("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),h=r.n(v),b=r("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),_=r.n(b),y=r("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/FormField/FormField.module.css"),F={attributes:{class:"vkui-style"}};F.setAttributes=h(),F.insert=f().bind(null,"head"),F.domAPI=m(),F.insertStyleElement=_(),d()(y.c,F);let g=y.c&&y.c.locals?y.c.locals:void 0;function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function k(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var I=k({none:g["FormField--sizeY-none"]},"compact",g["FormField--sizeY-compact"]),j={error:g["FormField--status-error"],valid:g["FormField--status-valid"]},w=function(e){var t,r,s,d=e.Component,c=e.status,m=void 0===c?"default":c,p=e.children,f=e.getRootRef,v=e.before,h=e.after,b=e.disabled,_=e.mode,y=e.className,F=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,["Component","status","children","getRootRef","before","after","disabled","mode","className"]),w=(0,a.K)(f),x=(0,i._)().sizeY,C=void 0===x?"none":x,S=function(e){if(Array.isArray(e))return e}(t=n.useState(!1))||function(e,t){var r,n,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var i=[],a=!0,l=!1;try{for(o=o.call(e);!(a=(r=o.next()).done)&&(i.push(r.value),2!==i.length);a=!0);}catch(e){l=!0,n=e}finally{try{a||null==o.return||o.return()}finally{if(l)throw n}}return i}}(t,2)||function(e,t){if(e){if("string"==typeof e)return O(e,2);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return O(e,2)}}(t,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),V=S[0],E=S[1],z=(0,u.G)(w),L=(0,l._)({focusVisible:z,mode:g["FormField--focus-visible"]});return n.createElement(void 0===d?"span":d,(r=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){k(e,t,r[t])})}return e}({},F),s=s={ref:w,onMouseEnter:function(e){e.stopPropagation(),E(!0)},onMouseLeave:function(e){e.stopPropagation(),E(!1)},className:(0,o.gr)(g.FormField,"default"===(void 0===_?"default":_)&&g["FormField--mode-default"],"default"!==m&&j[m],"regular"!==C&&I[C],b&&g["FormField--disabled"],!b&&V&&g["FormField--hover"],L,y)},Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(s)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(s)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(s,e))}),r),v&&n.createElement("span",{className:g.FormField__before},v),p,h&&n.createElement("span",{className:(0,o.gr)(g.FormField__after,"vkuiInternalFormField__after")},h),n.createElement("span",{"aria-hidden":!0,className:g.FormField__border}))};try{w.displayName="FormField",w.__docgenInfo={description:"",displayName:"FormField",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}},Component:{defaultValue:{value:"span"},description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},status:{defaultValue:{value:"default"},description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"error"'},{value:'"valid"'}]}},before:{defaultValue:null,description:"Добавляет иконку слева.\n\nРекомендации:\n\n- Используйте следующие размеры иконок `12` | `16` | `20` | `24` | `28`.\n- Используйте [IconButton](https://vkcom.github.io/VKUI/#/IconButton), если вам нужна кликабельная иконка.",name:"before",required:!1,type:{name:"ReactNode"}},after:{defaultValue:null,description:"Добавляет иконку справа.\n\nРекомендации:\n\n- Используйте следующие размеры иконок `12` | `16` | `20` | `24` | `28`.\n- Используйте [IconButton](https://vkcom.github.io/VKUI/#/IconButton), если вам нужна кликабельная иконка.",name:"after",required:!1,type:{name:"ReactNode"}},mode:{defaultValue:{value:"default"},description:"Режим отображения.\n\n- `default` — показывает фон, обводку и, при наличии, текст-подсказку.\n- `plain` — показывает только текст-подсказку.",name:"mode",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"plain"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FormField/FormField.tsx#FormField"]={docgenInfo:w.__docgenInfo,name:"FormField",path:"src/components/FormField/FormField.tsx#FormField"})}catch(e){}},"./src/hooks/useFocusWithin.ts":(e,t,r)=>{r.d(t,{G:()=>u});var n=r("../../node_modules/react/index.js"),o=r("./src/lib/dom.tsx"),i=r("./src/lib/useIsomorphicLayoutEffect.ts");function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var l=function(e,t){return e.contains(t.activeElement)};function u(e){var t,r=(0,o.C4)().document,u=function(e){if(Array.isArray(e))return e}(t=n.useState(function(){return!!e.current&&!!r&&l(e.current,r)}))||function(e,t){var r,n,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var i=[],a=!0,l=!1;try{for(o=o.call(e);!(a=(r=o.next()).done)&&(i.push(r.value),2!==i.length);a=!0);}catch(e){l=!0,n=e}finally{try{a||null==o.return||o.return()}finally{if(l)throw n}}return i}}(t,2)||function(e,t){if(e){if("string"==typeof e)return a(e,2);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(e,2)}}(t,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),s=u[0],d=u[1];return(0,i.M)(function(){if(r){var t=function(){e.current&&d(l(e.current,r))};return t(),r.addEventListener("focus",t,{capture:!0}),r.addEventListener("blur",t,{capture:!0}),function(){r.removeEventListener("focus",t,{capture:!0}),r.removeEventListener("blur",t,{capture:!0})}}},[]),s}},"./src/lib/children.ts":(e,t,r)=>{r.d(t,{y:()=>i});var n=r("../../node_modules/react/index.js"),o=function(e){return null==e||"boolean"==typeof e||"{}"===JSON.stringify(e)?"":e.toString()},i=function(e){var t;return(null!=(t=Array)&&"undefined"!=typeof Symbol&&t[Symbol.hasInstance]?t[Symbol.hasInstance](e):e instanceof t)||(0,n.isValidElement)(e)?n.Children.toArray(e).reduce(function(e,t){var r="",a=(0,n.isValidElement)(t),l=a&&"children"in t.props;return r=a&&l?i(t.props.children):a&&!l?"":o(t),e.concat(r)},""):o(e)}}}]);