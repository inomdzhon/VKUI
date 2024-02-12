"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[1852],{"./src/components/FormField/FormField.stories.tsx":(e,o,r)=>{r.r(o),r.d(o,{Playground:()=>c,__namedExportsOrder:()=>m,default:()=>p});var t=r("../../node_modules/react/index.js"),n=r("../../node_modules/@vkontakte/icons/dist/es6/28/message_outline_28.js"),i=r("../../node_modules/@vkontakte/icons/dist/es6/16/clear_16.js"),a=r("./src/storybook/VKUIDecorators.tsx"),s=r("./src/storybook/constants.ts"),d=r("./src/components/Group/Group.tsx"),l=r("./src/components/IconButton/IconButton.tsx"),u=r("./src/components/FormField/FormField.tsx");let p={title:"Forms/FormField",component:u.W,parameters:function(e){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.forEach(function(o){var t,n,i;i=r[o],o in e?Object.defineProperty(e,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[o]=i})}return e}({},s.wj,s.iM)};var c={render:function(e){return t.createElement(u.W,e,t.createElement("input",{style:{position:"relative",display:"block",width:"100%",margin:0,paddingRight:12,paddingLeft:12,fontSize:16,lineHeight:"20px",textOverflow:"ellipsis",color:"#000",border:"none",background:"transparent"}}))},args:{before:t.createElement(l.w,{label:"Сообщения"},t.createElement(n.U,null)),after:t.createElement(l.w,{label:"Очистить"},t.createElement(i.O,null))},decorators:[function(e,o){return t.createElement(d.W,null,t.createElement(e,o.args))},a.e,a.c$]};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"{\n  render: args => <FormField {...args}>\n      <input style={{\n      position: 'relative',\n      display: 'block',\n      width: '100%',\n      margin: 0,\n      paddingRight: 12,\n      paddingLeft: 12,\n      fontSize: 16,\n      lineHeight: '20px',\n      textOverflow: 'ellipsis',\n      color: '#000',\n      border: 'none',\n      background: 'transparent'\n    }} />\n    </FormField>,\n  args: {\n    before: <IconButton label=\"Сообщения\">\n        <Icon28MessageOutline />\n      </IconButton>,\n    after: <IconButton label=\"Очистить\">\n        <Icon16Clear />\n      </IconButton>\n  },\n  decorators: [(Component, context) => <Group>\n        <Component {...context.args} />\n      </Group>, withSinglePanel, withVKUILayout]\n}",...c.parameters?.docs?.source}}};let m=["Playground"]},"../../node_modules/@swc/helpers/esm/_object_without_properties.js":(e,o,r)=>{r.d(o,{_:()=>t});function t(e,o){if(null==e)return{};var r,t,n=function(e,o){if(null==e)return{};var r,t,n={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],o.indexOf(r)>=0||(n[r]=e[r]);return n}(e,o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],!(o.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}},"../../node_modules/@vkontakte/icons-sprite/dist/index.js":(e,o,r)=>{r.d(o,{cL:()=>g});var t,n=r("../../node_modules/@swc/helpers/esm/_object_spread.js"),i=r("../../node_modules/@swc/helpers/esm/_object_spread_props.js"),a=r("../../node_modules/@swc/helpers/esm/_object_without_properties.js"),s=r("../../node_modules/react/index.js"),d=r("../../node_modules/@swc/helpers/esm/_class_call_check.js"),l=r("../../node_modules/@swc/helpers/esm/_create_class.js"),u=r("../../node_modules/@swc/helpers/esm/_define_property.js"),p=function(){function e(o){var r,t,n=o.content;(0,d._)(this,e),(0,u._)(this,"isMounted",!1),(0,u._)(this,"node",void 0),this.node=(r=!!document.importNode,t=new DOMParser().parseFromString(n,"image/svg+xml").documentElement,r?document.importNode(t,!0):t)}return(0,l._)(e,[{key:"id",get:function(){return this.node.id}},{key:"mount",value:function(e){return this.isMounted||(this.isMounted=!0,e.appendChild(this.node)),this.node}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&(this.node.parentNode.removeChild(this.node),this.isMounted=!1)}}],[{key:"createFromExistingNode",value:function(o){var r=new e({content:""});return r.node=o,r}}]),e}(),c="http://www.w3.org/2000/svg",m=function(){function e(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,d._)(this,e),(0,u._)(this,"symbols",new Map),(0,u._)(this,"config",{attrs:{xmlns:c,"xmlns:xlink":"http://www.w3.org/1999/xlink",style:"position:absolute;width:0;height:0","aria-hidden":"true"}}),(0,u._)(this,"node",null),Object.assign(this.config.attrs,o.attrs)}return(0,l._)(e,[{key:"push",value:function(e){var o=this.symbols,r=o.has(e.id);return o.set(e.id,e),!r}},{key:"add",value:function(e){var o=this.push(e);return this.node&&o&&e.mount(this.node),o}},{key:"attach",value:function(e){var o=this;this.node||(this.node=e,this.symbols.forEach(function(o){o.mount(e)}),e.querySelectorAll("symbol").forEach(function(e){var r=p.createFromExistingNode(e);o.add(r)}))}},{key:"mount",value:function(e){var o=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.node||(this.node=this.render(),o&&e.childNodes[0]?e.insertBefore(this.node,e.firstChild):e.appendChild(this.node)),this.node}},{key:"render",value:function(){var e=document.createElementNS(c,"svg");return Object.entries(this.config.attrs).forEach(function(o){return e.setAttribute(o[0],o[1])}),this.symbols.forEach(function(o){return e.appendChild(o.node)}),e}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&this.node.parentNode.removeChild(this.node)}}]),e}(),_=!!("undefined"!=typeof window&&window.document&&window.document.createElement);if(_){var f="__SVG_SPRITE_NODE__";t=new m({attrs:{id:f}});var v=function(){var e=document.getElementById(f);e?t.attach(e):t.mount(document.body),document.removeEventListener("DOMContentLoaded",v)};document.querySelector("body")?v():document.addEventListener("DOMContentLoaded",v)}else t=null;var b=_?s.useLayoutEffect:s.useEffect,h=function(e){var o=e.width,r=void 0===o?0:o,t=e.height,d=void 0===t?0:t,l=e.viewBox,u=e.id,p=e.className,c=e.fill,m=e.getRootRef,_=e.style,f=e.title,v=e.children,b=(0,a._)(e,["width","height","viewBox","id","className","fill","getRootRef","style","title","children"]),h=Math.max(r,d),g=(0,n._)({width:r,height:d},void 0===_?{}:_);return s.createElement("svg",(0,i._)((0,n._)({"aria-hidden":"true",display:"block"},b),{className:["vkuiIcon","vkuiIcon--".concat(h),"vkuiIcon--w-".concat(r),"vkuiIcon--h-".concat(d),"vkuiIcon--".concat(u),void 0===p?"":p].join(" ").trim(),viewBox:l,width:r,height:d,style:g,ref:m}),f&&s.createElement("title",null,f),s.createElement("use",{xlinkHref:"#".concat(u),style:{fill:"currentColor",color:c}},v))};function g(e,o,r,a,d,l,u,c){var m,_=function(){if(!f){var e;e=new p({content:a}),t&&t.add(e),f=!0}},f=!1,v=(m={},function(o){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warn";m[o]||(console[r]("[@vkontakte/icons][".concat(e,"] ").concat(o)),m[o]=!0)}),g=function(e){return b(_,[]),u&&v("Иконка устарела"+(c?". Замените на ".concat(c):"")),s.createElement(h,(0,i._)((0,n._)({},e),{viewBox:r,id:o,width:void 0===e.width||isNaN(e.width)?d:+e.width,height:void 0===e.height||isNaN(e.height)?l:+e.height}))};return g.mountIcon=_,g.displayName=e,g}},"../../node_modules/@vkontakte/icons/dist/es6/16/clear_16.js":(e,o,r)=>{r.d(o,{O:()=>t});var t=(0,r("../../node_modules/@vkontakte/icons-sprite/dist/index.js").cL)("Icon16Clear","clear_16","0 0 16 16",'<symbol xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" id="clear_16"><path fill-rule="evenodd" d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0M4.563 4.564a.9.9 0 0 0 0 1.272L6.727 8l-2.164 2.164a.9.9 0 1 0 1.273 1.272L8 9.273l2.164 2.163a.9.9 0 0 0 1.272-1.272L9.273 8l2.163-2.164a.9.9 0 1 0-1.272-1.272L8 6.727 5.836 4.564a.9.9 0 0 0-1.273 0Z" clip-rule="evenodd" /></symbol>',16,16,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/28/message_outline_28.js":(e,o,r)=>{r.d(o,{U:()=>t});var t=(0,r("../../node_modules/@vkontakte/icons-sprite/dist/index.js").cL)("Icon28MessageOutline","message_outline_28","0 0 28 28",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="message_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path fill="currentColor" fill-rule="nonzero" d="M14 3.5c6.32 0 11.5 4.44 11.5 10s-5.18 10-11.5 10c-1.355 0-2.678-.204-3.924-.597-1.402 1.306-3.458 1.994-6.124 2.098a1.434 1.434 0 0 1-1.363-2.023c.911-2.015 1.413-3.498 1.514-4.379C3.062 17.073 2.5 15.323 2.5 13.5c0-5.56 5.18-10 11.5-10Zm0 2c-5.278 0-9.5 3.619-9.5 8 0 1.508.497 2.955 1.426 4.213a1 1 0 0 1 .196.598c-.004 1.047-.45 2.567-1.33 4.627 1.987-.208 3.388-.831 4.245-1.837a1 1 0 0 1 1.111-.287c1.202.45 2.506.686 3.852.686 5.278 0 9.5-3.619 9.5-8s-4.222-8-9.5-8" /></g></symbol>',28,28,!1,void 0)},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/FormField/FormField.module.css":(e,o,r)=>{r.d(o,{c:()=>s});var t=r("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),n=r.n(t),i=r("../../node_modules/css-loader/dist/runtime/api.js"),a=r.n(i)()(n());a.push([e.id,".FormField--cV1je{align-items:center;box-sizing:border-box;display:flex;font-family:var(--vkui--font_family_base);min-height:var(--vkui--size_field_height--regular);position:relative;-webkit-tap-highlight-color:transparent;border-radius:var(--vkui--size_border_radius--regular);isolation:isolate}.FormField--sizeY-compact--oV07Z{min-height:var(--vkui--size_field_height--compact)}@media (max-height:414.9px),(pointer:fine) and (min-width:768px){.FormField--sizeY-none--xlzBX{min-height:var(--vkui--size_field_height--compact)}}.FormField--cV1je>*{border-radius:inherit;z-index:var(--vkui_internal--z_index_form_field_element)}.FormField__after--a5xC5,.FormField__before--SmyZI{align-content:center;align-items:center;color:var(--vkui--color_icon_secondary);display:flex;flex-shrink:0;height:100%;justify-content:center;min-width:var(--vkui--size_field_height--regular);position:relative;z-index:var(--vkui_internal--z_index_form_field_side)}.FormField--sizeY-compact--oV07Z .FormField__after--a5xC5,.FormField--sizeY-compact--oV07Z .FormField__before--SmyZI{height:var(--vkui--size_field_height--compact);min-width:var(--vkui--size_field_height--compact)}@media (max-height:414.9px),(pointer:fine) and (min-width:768px){.FormField--sizeY-none--xlzBX .FormField__after--a5xC5,.FormField--sizeY-none--xlzBX .FormField__before--SmyZI{height:var(--vkui--size_field_height--compact);min-width:var(--vkui--size_field_height--compact)}}.FormField__before--SmyZI{color:var(--vkui--color_icon_accent)}.FormField__after--a5xC5{color:var(--vkui--color_icon_secondary)}.FormField__border--et6Lb{border:var(--vkui--size_border--regular) solid transparent;border-radius:inherit;box-sizing:border-box;height:100%;left:0;pointer-events:none;position:absolute;top:0;transform-origin:left top;width:100%;z-index:var(--vkui_internal--z_index_form_field_border)}.FormField--mode-default--sUDAK .FormField__border--et6Lb{border-color:var(--vkui--color_field_border_alpha)}.FormField--mode-default--sUDAK{background-color:var(--vkui--color_field_background)}.FormField--status-error--MkLL5 .FormField__border--et6Lb,.vkuiInternalFormItem--status-error .FormField__border--et6Lb{border-color:var(--vkui--color_stroke_negative);z-index:var(--vkui_internal--z_index_form_field_status)}.FormField--status-error--MkLL5,.vkuiInternalFormItem--status-error .FormField--cV1je{background-color:var(--vkui--color_background_negative_tint)}.FormField--status-valid--dDam8 .FormField__border--et6Lb,.vkuiInternalFormItem--status-valid .FormField__border--et6Lb{border-color:var(--vkui--color_stroke_positive);z-index:var(--vkui_internal--z_index_form_field_status)}.FormField--disabled--qRxeX{cursor:default;opacity:var(--vkui--opacity_disable_accessibility);pointer-events:none}.FormField--hover--zNrWU{background-color:var(--vkui--color_field_background)}.FormField--mode-default--sUDAK.FormField--hover--zNrWU .FormField__border--et6Lb{border-color:var(--vkui--color_field_border_alpha--hover);z-index:var(--vkui_internal--z_index_form_field_border_hover)}.vkuiInternalNativeSelect .FormField__after--a5xC5{pointer-events:none}.vkuiInternalCalendarHeader__picker .FormField__after--a5xC5{min-width:12px;padding-right:8px}.vkuiInternalFormLayoutGroup--segmented .FormField--cV1je{border-radius:0;isolation:auto;z-index:auto}.vkuiInternalFormLayoutGroup--segmented.vkuiInternalFormLayoutGroup--mode-horizontal .vkuiInternalFormItem:first-of-type .FormField--cV1je{border-bottom-left-radius:var(--vkui--size_border_radius--regular);border-top-left-radius:var(--vkui--size_border_radius--regular)}.vkuiInternalFormLayoutGroup--segmented.vkuiInternalFormLayoutGroup--mode-horizontal .vkuiInternalFormItem:last-of-type .FormField--cV1je{border-bottom-right-radius:var(--vkui--size_border_radius--regular);border-top-right-radius:var(--vkui--size_border_radius--regular)}.vkuiInternalFormLayoutGroup--segmented.vkuiInternalFormLayoutGroup--mode-vertical .vkuiInternalFormItem:first-of-type .FormField--cV1je{border-top-left-radius:var(--vkui--size_border_radius--regular);border-top-right-radius:var(--vkui--size_border_radius--regular)}.vkuiInternalFormLayoutGroup--segmented.vkuiInternalFormLayoutGroup--mode-vertical .vkuiInternalFormItem:last-of-type .FormField--cV1je{border-bottom-left-radius:var(--vkui--size_border_radius--regular);border-bottom-right-radius:var(--vkui--size_border_radius--regular)}.FormField--focus-visible--_koel.FormField--focus-visible--_koel.FormField--focus-visible--_koel{outline:var(--vkui_internal--outline);outline-offset:calc(-1 * var(--vkui--size_border--regular));outline-width:var(--vkui--size_border--regular)}",""]),a.locals={FormField:"FormField--cV1je","FormField--sizeY-compact":"FormField--sizeY-compact--oV07Z","FormField--sizeY-none":"FormField--sizeY-none--xlzBX",FormField__after:"FormField__after--a5xC5",FormField__before:"FormField__before--SmyZI",FormField__border:"FormField__border--et6Lb","FormField--mode-default":"FormField--mode-default--sUDAK","FormField--status-error":"FormField--status-error--MkLL5","FormField--status-valid":"FormField--status-valid--dDam8","FormField--disabled":"FormField--disabled--qRxeX","FormField--hover":"FormField--hover--zNrWU","FormField--focus-visible":"FormField--focus-visible--_koel"};let s=a},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Group/Group.module.css":(e,o,r)=>{r.d(o,{c:()=>s});var t=r("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),n=r.n(t),i=r("../../node_modules/css-loader/dist/runtime/api.js"),a=r.n(i)()(n());a.push([e.id,'.Group--xobVt{color:var(--vkui--color_text_primary);padding-bottom:8px;padding-top:8px}.Group__header--kXxNH:empty{display:none}.Group--mode-plain--KwMj9:not(:first-of-type)>.Group__header--kXxNH{margin-top:-8px}@media (max-width:767.9px){.Group--sizeX-none--_sXRj.Group--mode-none--OYdt8:not(:first-of-type)>.Group__header--kXxNH{margin-top:-8px}}.Group--mode-card--fmlmp>.Group__header--kXxNH{margin-top:-4px}@media (min-width:768px){.Group--sizeX-none--_sXRj.Group--mode-none--OYdt8>.Group__header--kXxNH{margin-top:-4px}}.Group__separator--separator--ZKY_V,.Group__separator--spacing--FNhA3{display:none}.Group--mode-plain--KwMj9+*+.Group__separator--separator--ZKY_V{display:block}@media (max-width:767.9px){.Group--sizeX-none--_sXRj.Group--mode-none--OYdt8+*+.Group__separator--separator--ZKY_V{display:block}}.Group--mode-card--fmlmp+.Group__separator--spacing--FNhA3{display:block}@media (min-width:768px){.Group--sizeX-none--_sXRj.Group--mode-none--OYdt8+.Group__separator--spacing--FNhA3{display:block}}.Group--xobVt:last-of-type~.Group__separator--op6Xj{display:none}.Group--mode-card--fmlmp:last-of-type+.Group__separator--spacing--FNhA3,.Group--xobVt:last-of-type~.Group__separator--force--xEXPB{display:block}@media (min-width:768px){.Group--sizeX-none--_sXRj.Group--mode-none--OYdt8:last-of-type+.Group__separator--spacing--FNhA3{display:block}}.Group--mode-card--fmlmp.Group--padding-s--T4za1{padding:4px}.Group--mode-card--fmlmp.Group--padding-m--eq6yP{padding:8px}@media (min-width:768px){.Group--sizeX-none--_sXRj.Group--inside-modal--Xhx9h.Group--padding-s--T4za1,.Group--sizeX-none--_sXRj.Group--mode-none--OYdt8.Group--padding-s--T4za1{padding:4px}.Group--sizeX-none--_sXRj.Group--inside-modal--Xhx9h.Group--padding-m--eq6yP,.Group--sizeX-none--_sXRj.Group--mode-none--OYdt8.Group--padding-m--eq6yP{padding:8px}}.Group--sizeX-compact--I3zDP,.Group--sizeX-compact--I3zDP.Group--mode-card--fmlmp{padding-left:0;padding-right:0}@media (max-width:767.9px){.Group--sizeX-none--_sXRj,.Group--sizeX-none--_sXRj.Group--mode-card--fmlmp{padding-left:0;padding-right:0}}.Group--mode-card--fmlmp{background:var(--vkui--color_background_content);border-radius:var(--vkui--size_border_radius_paper--regular);position:relative}@media (min-width:768px){.Group--sizeX-none--_sXRj.Group--mode-none--OYdt8{background:var(--vkui--color_background_content);border-radius:var(--vkui--size_border_radius_paper--regular);position:relative}}.Group--sizeX-compact--I3zDP.Group--mode-card--fmlmp:first-of-type{border-bottom-left-radius:var(--vkui--size_border_radius_paper--regular);border-bottom-right-radius:var(--vkui--size_border_radius_paper--regular);border-top-left-radius:0;border-top-right-radius:0}@media (max-width:767.9px){.Group--sizeX-none--_sXRj.Group--mode-card--fmlmp:first-of-type{border-bottom-left-radius:var(--vkui--size_border_radius_paper--regular);border-bottom-right-radius:var(--vkui--size_border_radius_paper--regular);border-top-left-radius:0;border-top-right-radius:0}}.Group--mode-card--fmlmp:before{border-radius:inherit;box-shadow:inset 0 0 0 var(--vkui--size_border--regular) var(--vkui--color_separator_primary);content:"";height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}@media (min-width:768px){.Group--sizeX-none--_sXRj.Group--mode-none--OYdt8:before{border-radius:inherit;box-shadow:inset 0 0 0 var(--vkui--size_border--regular) var(--vkui--color_field_border_alpha);content:"";height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}}.Group--sizeX-compact--I3zDP.Group--mode-card--fmlmp:before{box-shadow:none}@media (max-width:767.9px){.Group--sizeX-none--_sXRj.Group--mode-card--fmlmp:before{box-shadow:none}}.Group--mode-plain--KwMj9+.Group__separator--op6Xj,.Group--mode-plain--KwMj9+.Group__separator--op6Xj+.Group__separator--op6Xj{padding-bottom:8px;padding-top:8px}@media (max-width:767.9px){.Group--sizeX-none--_sXRj.Group--mode-none--OYdt8+.Group__separator--op6Xj,.Group--sizeX-none--_sXRj.Group--mode-none--OYdt8+.Group__separator--op6Xj+.Group__separator--op6Xj{padding-bottom:8px;padding-top:8px}}.Group__description--Xolzh{color:var(--vkui--color_text_secondary);display:block;padding:4px 16px 16px}.Group--xobVt .Group--xobVt,.Group--xobVt .Group--xobVt+.Group__separator--op6Xj{padding-left:0;padding-right:0}.Group--xobVt .Group--xobVt:first-of-type{padding-top:0}.Group--xobVt .Group--xobVt:last-of-type{padding-bottom:0}.Group--ios--ZeO5F .Group__description--Xolzh{padding:4px 12px 16px}.vkuiInternalPanelHeader--vkcom+* .Group--xobVt:first-of-type,.vkuiInternalPanelHeader--vkcom~.Group--xobVt:first-of-type{border-top-left-radius:0;border-top-right-radius:0;position:relative;top:-1px}',""]),a.locals={Group:"Group--xobVt",Group__header:"Group__header--kXxNH","Group--mode-plain":"Group--mode-plain--KwMj9","Group--sizeX-none":"Group--sizeX-none--_sXRj","Group--mode-none":"Group--mode-none--OYdt8","Group--mode-card":"Group--mode-card--fmlmp","Group__separator--separator":"Group__separator--separator--ZKY_V","Group__separator--spacing":"Group__separator--spacing--FNhA3",Group__separator:"Group__separator--op6Xj","Group__separator--force":"Group__separator--force--xEXPB","Group--padding-s":"Group--padding-s--T4za1","Group--padding-m":"Group--padding-m--eq6yP","Group--inside-modal":"Group--inside-modal--Xhx9h","Group--sizeX-compact":"Group--sizeX-compact--I3zDP",Group__description:"Group__description--Xolzh","Group--ios":"Group--ios--ZeO5F"};let s=a},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Typography/Footnote/Footnote.module.css":(e,o,r)=>{r.d(o,{c:()=>s});var t=r("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),n=r.n(t),i=r("../../node_modules/css-loader/dist/runtime/api.js"),a=r.n(i)()(n());a.push([e.id,".Footnote--TsLLT{font-family:var(--vkui--font_footnote--font_family--regular);font-size:var(--vkui--font_footnote--font_size--regular);font-weight:var(--vkui--font_footnote--font_weight--regular);line-height:var(--vkui--font_footnote--line_height--regular)}.Footnote--caps--rHreA{font-family:var(--vkui--font_footnote_caps--font_family--regular);font-size:var(--vkui--font_footnote_caps--font_size--regular);font-weight:var(--vkui--font_footnote_caps--font_weight--regular);line-height:var(--vkui--font_footnote_caps--line_height--regular);text-transform:uppercase}",""]),a.locals={Footnote:"Footnote--TsLLT","Footnote--caps":"Footnote--caps--rHreA"};let s=a},"./src/components/FormField/FormField.tsx":(e,o,r)=>{r.d(o,{W:()=>w});var t=r("../../node_modules/react/index.js"),n=r("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),i=r("./src/hooks/useAdaptivity.ts"),a=r("./src/hooks/useExternRef.ts"),s=r("./src/hooks/useFocusVisibleClassName.ts"),d=r("./src/hooks/useFocusWithin.ts"),l=r("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),u=r.n(l),p=r("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),c=r.n(p),m=r("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),_=r.n(m),f=r("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),v=r.n(f),b=r("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),h=r.n(b),g=r("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/FormField/FormField.module.css"),y={attributes:{class:"vkui-style"}};y.setAttributes=v(),y.insert=_().bind(null,"head"),y.domAPI=c(),y.insertStyleElement=h(),u()(g.c,y);let F=g.c&&g.c.locals?g.c.locals:void 0;function k(e,o){(null==o||o>e.length)&&(o=e.length);for(var r=0,t=Array(o);r<o;r++)t[r]=e[r];return t}function x(e,o,r){return o in e?Object.defineProperty(e,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[o]=r,e}var j=x({none:F["FormField--sizeY-none"]},"compact",F["FormField--sizeY-compact"]),G={error:F["FormField--status-error"],valid:F["FormField--status-valid"]},w=function(e){var o,r,l,u=e.Component,p=e.status,c=void 0===p?"default":p,m=e.children,_=e.getRootRef,f=e.before,v=e.after,b=e.disabled,h=e.mode,g=e.className,y=function(e,o){if(null==e)return{};var r,t,n=function(e,o){if(null==e)return{};var r,t,n={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],o.indexOf(r)>=0||(n[r]=e[r]);return n}(e,o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],!(o.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}(e,["Component","status","children","getRootRef","before","after","disabled","mode","className"]),w=(0,a.K)(_),O=(0,i._)().sizeY,z=void 0===O?"none":O,S=function(e){if(Array.isArray(e))return e}(o=t.useState(!1))||function(e,o){var r,t,n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var i=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),2!==i.length);a=!0);}catch(e){s=!0,t=e}finally{try{a||null==n.return||n.return()}finally{if(s)throw t}}return i}}(o,2)||function(e,o){if(e){if("string"==typeof e)return k(e,2);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return k(e,2)}}(o,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),I=S[0],E=S[1],X=(0,d.G)(w),R=(0,s._)({focusVisible:X,mode:F["FormField--focus-visible"]});return t.createElement(void 0===u?"span":u,(r=function(e){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.forEach(function(o){x(e,o,r[o])})}return e}({},y),l=l={ref:w,onMouseEnter:function(e){e.stopPropagation(),E(!0)},onMouseLeave:function(e){e.stopPropagation(),E(!1)},className:(0,n.gr)(F.FormField,"default"===(void 0===h?"default":h)&&F["FormField--mode-default"],"default"!==c&&G[c],"regular"!==z&&j[z],b&&F["FormField--disabled"],!b&&I&&F["FormField--hover"],R,g)},Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(l)):(function(e,o){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r.push.apply(r,t)}return r})(Object(l)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(l,e))}),r),f&&t.createElement("span",{className:F.FormField__before},f),m,v&&t.createElement("span",{className:(0,n.gr)(F.FormField__after,"vkuiInternalFormField__after")},v),t.createElement("span",{"aria-hidden":!0,className:F.FormField__border}))};try{w.displayName="FormField",w.__docgenInfo={description:"",displayName:"FormField",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}},Component:{defaultValue:{value:"span"},description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},status:{defaultValue:{value:"default"},description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"error"'},{value:'"valid"'}]}},before:{defaultValue:null,description:"Добавляет иконку слева.\n\nРекомендации:\n\n- Используйте следующие размеры иконок `12` | `16` | `20` | `24` | `28`.\n- Используйте [IconButton](https://vkcom.github.io/VKUI/#/IconButton), если вам нужна кликабельная иконка.",name:"before",required:!1,type:{name:"ReactNode"}},after:{defaultValue:null,description:"Добавляет иконку справа.\n\nРекомендации:\n\n- Используйте следующие размеры иконок `12` | `16` | `20` | `24` | `28`.\n- Используйте [IconButton](https://vkcom.github.io/VKUI/#/IconButton), если вам нужна кликабельная иконка.",name:"after",required:!1,type:{name:"ReactNode"}},mode:{defaultValue:{value:"default"},description:"Режим отображения.\n\n- `default` — показывает фон, обводку и, при наличии, текст-подсказку.\n- `plain` — показывает только текст-подсказку.",name:"mode",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"plain"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FormField/FormField.tsx#FormField"]={docgenInfo:w.__docgenInfo,name:"FormField",path:"src/components/FormField/FormField.tsx#FormField"})}catch(e){}},"./src/components/Group/Group.tsx":(e,o,r)=>{r.d(o,{W:()=>E});var t=r("../../node_modules/react/index.js"),n=r("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),i=r("./src/hooks/useAdaptivity.ts"),a=r("./src/hooks/usePlatform.ts"),s=r("./src/lib/warnOnce.ts"),d=r("./src/components/AppRoot/AppRootContext.ts"),l=r("./src/components/ModalRoot/ModalRootContext.tsx"),u=r("./src/components/RootComponent/RootComponent.tsx"),p=r("./src/components/Separator/Separator.tsx"),c=r("./src/components/Spacing/Spacing.tsx"),m=r("./src/components/Typography/Footnote/Footnote.tsx"),_=r("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),f=r.n(_),v=r("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),b=r.n(v),h=r("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),g=r.n(h),y=r("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),F=r.n(y),k=r("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),x=r.n(k),j=r("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Group/Group.module.css"),G={attributes:{class:"vkui-style"}};G.setAttributes=F(),G.insert=g().bind(null,"head"),G.domAPI=b(),G.insertStyleElement=x(),f()(j.c,G);let w=j.c&&j.c.locals?j.c.locals:void 0;function O(e,o,r){return o in e?Object.defineProperty(e,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[o]=r,e}var z=O({none:(0,n.gr)(w["Group--sizeX-none"],"vkuiInternalGroup--sizeX-none")},"compact",w["Group--sizeX-compact"]),S={none:(0,n.gr)(w["Group--mode-none"],"vkuiInternalGroup--mode-none"),plain:(0,n.gr)(w["Group--mode-plain"],"vkuiInternalGroup--mode-plain"),card:(0,n.gr)(w["Group--mode-card"],"vkuiInternalGroup--mode-card")},I={s:w["Group--padding-s"],m:w["Group--padding-m"]};(0,s.w)("Group");var E=function(e){var o,r,s,_=e.header,f=e.description,v=e.children,b=e.separator,h=void 0===b?"auto":b,g=e.mode,y=e.padding,F=e.tabIndex,k=function(e,o){if(null==e)return{};var r,t,n=function(e,o){if(null==e)return{};var r,t,n={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],o.indexOf(r)>=0||(n[r]=e[r]);return n}(e,o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],!(o.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}(e,["header","description","children","separator","mode","padding","tabIndex"]),x=t.useContext(l.y).isInsideModal,j=(0,a.o)(),G=(0,i._)().sizeX,E=void 0===G?"none":G,X=(o=t.useContext(d.c).layout,g||(x?"plain":o||("none"!==E?"regular"===E?"card":"plain":"none"))),R="tabpanel"===k.role;return t.createElement(t.Fragment,null,t.createElement(u.Q,(r=function(e){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.forEach(function(o){O(e,o,r[o])})}return e}({Component:"section"},k),s=s={tabIndex:R&&void 0===F?0:F,baseClassName:(0,n.gr)("vkuiInternalGroup",w.Group,x&&w["Group--inside-modal"],"ios"===j&&w["Group--ios"],"regular"!==E&&z[E],X&&S[X],I[void 0===y?"m":y])},Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(s)):(function(e,o){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r.push.apply(r,t)}return r})(Object(s)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(s,e))}),r),(0,n.WW)(_)&&t.createElement("div",{className:w.Group__header},_),v,(0,n.WW)(f)&&t.createElement(m.I,{className:w.Group__description},f)),"hide"!==h&&t.createElement(t.Fragment,null,t.createElement(c._,{className:(0,n.gr)(w.Group__separator,w["Group__separator--spacing"]),size:16}),t.createElement(p.U,{className:(0,n.gr)(w.Group__separator,w["Group__separator--separator"],"show"===h&&w["Group__separator--force"])})))};try{E.displayName="Group",E.__docgenInfo={description:"",displayName:"Group",props:{header:{defaultValue:null,description:"",name:"header",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},separator:{defaultValue:{value:"auto"},description:"`show` - разделитель всегда показывается,\n`hide` - разделитель всегда спрятан,\n`auto` - разделитель рисуется автоматически между соседними группами.",name:"separator",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"show"'},{value:'"hide"'}]}},mode:{defaultValue:null,description:"Режим отображения. Если установлен `card`, выглядит как карточка c\nобводкой и внешними отступами. Если `plain` — без отступов и обводки.\nПо умолчанию режим отображения зависит от `sizeX` (`mode=card` при `sizeX=REGULAR` и `mode=plain` при `sizeX=COMPACT`)\nВ модальных окнах по умолчанию `plain`.",name:"mode",required:!1,type:{name:"enum",value:[{value:'"plain"'},{value:'"card"'}]}},padding:{defaultValue:{value:"m"},description:"Отвечает за отступы вокруг контента в режиме `card`.",name:"padding",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Group/Group.tsx#Group"]={docgenInfo:E.__docgenInfo,name:"Group",path:"src/components/Group/Group.tsx#Group"})}catch(e){}},"./src/components/Typography/Footnote/Footnote.tsx":(e,o,r)=>{r.d(o,{I:()=>g});var t=r("../../node_modules/react/index.js"),n=r("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),i=r("./src/components/Typography/Typography.tsx"),a=r("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=r.n(a),d=r("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),l=r.n(d),u=r("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),p=r.n(u),c=r("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),m=r.n(c),_=r("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),f=r.n(_),v=r("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Typography/Footnote/Footnote.module.css"),b={attributes:{class:"vkui-style"}};b.setAttributes=m(),b.insert=p().bind(null,"head"),b.domAPI=l(),b.insertStyleElement=f(),s()(v.c,b);let h=v.c&&v.c.locals?v.c.locals:void 0;var g=function(e){var o=e.className,r=e.caps,a=e.Component,s=e.normalize,d=function(e,o){if(null==e)return{};var r,t,n=function(e,o){if(null==e)return{};var r,t,n={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],o.indexOf(r)>=0||(n[r]=e[r]);return n}(e,o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],!(o.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}(e,["className","caps","Component","normalize"]);return t.createElement(i.O,function(e){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.forEach(function(o){var t,n,i;i=r[o],o in e?Object.defineProperty(e,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[o]=i})}return e}({Component:void 0===a?"span":a,normalize:void 0===s||s,className:(0,n.gr)(o,h.Footnote,r&&h["Footnote--caps"])},d))};try{g.displayName="Footnote",g.__docgenInfo={description:"Используется для основных подписей.",displayName:"Footnote",props:{weight:{defaultValue:null,description:"Задаёт начертание шрифта, отличное от стандартного.",name:"weight",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'}]}},normalize:{defaultValue:{value:"true"},description:"Убирает внешние отступы",name:"normalize",required:!1,type:{name:"boolean"}},Component:{defaultValue:{value:"span"},description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}},caps:{defaultValue:null,description:"",name:"caps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typography/Footnote/Footnote.tsx#Footnote"]={docgenInfo:g.__docgenInfo,name:"Footnote",path:"src/components/Typography/Footnote/Footnote.tsx#Footnote"})}catch(e){}},"./src/hooks/useFocusWithin.ts":(e,o,r)=>{r.d(o,{G:()=>d});var t=r("../../node_modules/react/index.js"),n=r("./src/lib/dom.tsx"),i=r("./src/lib/useIsomorphicLayoutEffect.ts");function a(e,o){(null==o||o>e.length)&&(o=e.length);for(var r=0,t=Array(o);r<o;r++)t[r]=e[r];return t}var s=function(e,o){return e.contains(o.activeElement)};function d(e){var o,r=(0,n.C4)().document,d=function(e){if(Array.isArray(e))return e}(o=t.useState(function(){return!!e.current&&!!r&&s(e.current,r)}))||function(e,o){var r,t,n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var i=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),2!==i.length);a=!0);}catch(e){s=!0,t=e}finally{try{a||null==n.return||n.return()}finally{if(s)throw t}}return i}}(o,2)||function(e,o){if(e){if("string"==typeof e)return a(e,2);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(e,2)}}(o,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),l=d[0],u=d[1];return(0,i.M)(function(){if(r){var o=function(){e.current&&u(s(e.current,r))};return o(),r.addEventListener("focus",o,{capture:!0}),r.addEventListener("blur",o,{capture:!0}),function(){r.removeEventListener("focus",o,{capture:!0}),r.removeEventListener("blur",o,{capture:!0})}}},[]),l}}}]);