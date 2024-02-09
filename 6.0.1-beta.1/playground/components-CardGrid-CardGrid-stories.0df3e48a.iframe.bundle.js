"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[3708,1652],{"./src/components/Card/Card.stories.tsx":(e,r,o)=>{o.r(r),o.d(r,{Playground:()=>s,__namedExportsOrder:()=>d,default:()=>i});var t=o("../../node_modules/react/index.js"),n=o("./src/storybook/VKUIDecorators.tsx"),a=o("./src/storybook/constants.ts");let i={title:"Blocks/Card",component:o("./src/components/Card/Card.tsx").M,parameters:function(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{},t=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),t.forEach(function(r){var t,n,a;a=o[r],r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a})}return e}({},a.wj,a.iM),decorators:[n.e,n.c$]};var s={args:{children:t.createElement("div",{style:{height:96}})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: <div style={{\n      height: 96\n    }} />\n  }\n}",...s.parameters?.docs?.source}}};let d=["Playground"]},"./src/components/CardGrid/CardGrid.stories.tsx":(e,r,o)=>{o.r(r),o.d(r,{InsideGroup:()=>R,Playground:()=>X,__namedExportsOrder:()=>T,default:()=>P});var t=o("../../node_modules/react/index.js"),n=o("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),a=o("./src/storybook/VKUIDecorators.tsx"),i=o("./src/storybook/constants.ts"),s=o("./src/components/Card/Card.tsx"),d=o("./src/components/Card/Card.stories.tsx"),l=o("./src/components/Group/Group.tsx"),u=o("./src/hooks/useAdaptivity.ts"),p=o("./src/components/RootComponent/RootComponent.tsx"),c=o("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),m=o.n(c),g=o("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),v=o.n(g),_=o("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),f=o.n(_),y=o("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),b=o.n(y),G=o("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),h=o.n(G),j=o("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/CardGrid/CardGrid.module.css"),O={attributes:{class:"vkui-style"}};O.setAttributes=b(),O.insert=f().bind(null,"head"),O.domAPI=v(),O.insertStyleElement=h(),m()(j.c,O);let k=j.c&&j.c.locals?j.c.locals:void 0;function C(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}var x=C({none:k["CardGrid--sizeX-none"]},"compact",k["CardGrid--sizeX-compact"]),S={s:"vkuiInternalCardGrid--size-s",m:"vkuiInternalCardGrid--size-m",l:"vkuiInternalCardGrid--size-l"},w=function(e){var r,o,a=e.size,i=e.spaced,s=function(e,r){if(null==e)return{};var o,t,n=function(e,r){if(null==e)return{};var o,t,n={},a=Object.keys(e);for(t=0;t<a.length;t++)o=a[t],r.indexOf(o)>=0||(n[o]=e[o]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)o=a[t],!(r.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}(e,["size","spaced"]),d=(0,u._)().sizeX,l=void 0===d?"none":d;return t.createElement(p.Q,(r=function(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{},t=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),t.forEach(function(r){C(e,r,o[r])})}return e}({},s),o=o={baseClassName:(0,n.gr)(k.CardGrid,"vkuiInternalCardGrid",void 0!==i&&i&&k["CardGrid--spaced"],S[void 0===a?"s":a],"regular"!==l&&x[l])},Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):(function(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o.push.apply(o,t)}return o})(Object(o)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))}),r))};try{w.displayName="CardGrid",w.__docgenInfo={description:"",displayName:"CardGrid",props:{size:{defaultValue:{value:"s"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},spaced:{defaultValue:{value:"false"},description:"Если true, то вокруг компонента присутствуют стандартные отсупы сверху/снизу и слева/справа",name:"spaced",required:!1,type:{name:"boolean"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/CardGrid/CardGrid.tsx#CardGrid"]={docgenInfo:w.__docgenInfo,name:"CardGrid",path:"src/components/CardGrid/CardGrid.tsx#CardGrid"})}catch(e){}function z(e,r){(null==r||r>e.length)&&(r=e.length);for(var o=0,t=Array(r);o<r;o++)t[o]=e[o];return t}function I(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{},t=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),t.forEach(function(r){var t,n,a;a=o[r],r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a})}return e}let P={title:"Blocks/CardGrid",component:w,parameters:I({},i.wj,i.iM),argTypes:{count:{control:{type:"number"}}}};var X={render:function(e){var r=e.count,o=function(e,r){if(null==e)return{};var o,t,n=function(e,r){if(null==e)return{};var o,t,n={},a=Object.keys(e);for(t=0;t<a.length;t++)o=a[t],r.indexOf(o)>=0||(n[o]=e[o]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)o=a[t],!(r.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}(e,["count"]);return t.createElement(w,o,Array(r).fill(null).map(function(e,r){return t.createElement(s.M,I({key:r},d.Playground.args))}))},args:{count:3},decorators:[a.e,a.c$]},R=function(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):(function(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o.push.apply(o,t)}return o})(Object(r)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))}),e}(I({},X),{decorators:[function(e,r){return t.createElement(l.W,null,t.createElement(e,r.args))}].concat(function(e){return function(e){if(Array.isArray(e))return z(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(e){if("string"==typeof e)return z(e,void 0);var o=Object.prototype.toString.call(e).slice(8,-1);if("Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o)return Array.from(o);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return z(e,void 0)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}((0,n.c7)(X.decorators)?X.decorators:[]))});X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:"{\n  render: ({\n    count,\n    ...args\n  }) => <CardGrid {...args}>\n      {Array(count).fill(null).map((_, index) => <BasicCard key={index} {...BasicCardStory.args} />)}\n    </CardGrid>,\n  args: {\n    count: 3\n  },\n  decorators: [withSinglePanel, withVKUILayout]\n}",...X.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:"{\n  ...Playground,\n  decorators: [(Component, context) => <Group>\n        <Component {...context.args} />\n      </Group>, ...(isArray(Playground.decorators) ? Playground.decorators : [])]\n}",...R.parameters?.docs?.source}}};let T=["Playground","InsideGroup"]},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Card/Card.module.css":(e,r,o)=>{o.d(r,{c:()=>s});var t=o("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),n=o.n(t),a=o("../../node_modules/css-loader/dist/runtime/api.js"),i=o.n(a)()(n());i.push([e.id,`.Card--jvlT0{background:var(--vkui--color_background_secondary);border-radius:var(--vkui--size_card_border_radius--regular);position:relative}.Card--mode-shadow--_j9pa{box-shadow:var(
    --vkui--elevation3,0 2px 24px 0 rgba(0,0,0,.08),0 0 2px 0 rgba(0,0,0,.08)
  )}.Card--mode-outline--vTtkl,.Card--mode-shadow--_j9pa{background:var(--vkui--color_background_modal)}.Card--withBorder--kDVkv:after{border:var(--vkui--size_border--regular) solid var(--vkui--color_image_border_alpha);border-radius:inherit;box-sizing:border-box;content:"";display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.vkuiInternalCardScroll .Card--jvlT0{flex-shrink:0;margin-right:var(--vkui--size_cardgrid_padding--regular)}.vkuiInternalCardScroll .Card--jvlT0:last-of-type{margin-right:0}.vkuiInternalCardScroll--size-s .Card--jvlT0{width:40%}.vkuiInternalCardScroll--size-m .Card--jvlT0{width:62%}.vkuiInternalCardScroll--size-l .Card--jvlT0{margin-right:var(--vkui--size_base_padding_horizontal--regular);width:calc(100% - var(--vkui--size_base_padding_horizontal--regular) * 2)}.vkuiInternalGroup--mode-card .vkuiInternalCardScroll--size-l .Card--jvlT0,.vkuiInternalSplitCol--viewWidth-tabletPlus.vkuiInternalSplitCol--spaced-auto .vkuiInternalCardScroll--size-l .Card--jvlT0{margin-right:16px;width:calc(100% - 32px)}@media (min-width:768px){.vkuiInternalSplitCol--viewWidth-none.vkuiInternalSplitCol--spaced-auto .vkuiInternalCardScroll--size-l .Card--jvlT0{margin-right:16px;width:calc(100% - 32px)}}.vkuiInternalGroup--mode-card .vkuiInternalCardScroll--size-l .Card--jvlT0:last-of-type,.vkuiInternalSplitCol--viewWidth-tabletPlus.vkuiInternalSplitCol--spaced-auto .vkuiInternalCardScroll--size-l .Card--jvlT0:last-of-type{margin-right:0}@media (min-width:768px){.vkuiInternalSplitCol--viewWidth-none.vkuiInternalSplitCol--spaced-auto .vkuiInternalCardScroll--size-l .Card--jvlT0:last-of-type{margin-right:0}}@media (min-width:768px){.vkuiInternalGroup--mode-none .vkuiInternalCardScroll--size-l .Card--jvlT0:last-of-type{margin-right:0}.vkuiInternalGroup--mode-none .vkuiInternalCardScroll--size-l .Card--jvlT0{margin-right:16px;width:calc(100% - 32px)}}.vkuiInternalCardGrid .Card--jvlT0{margin-right:var(--vkui--size_cardgrid_padding--regular)}.vkuiInternalCardGrid--size-l .Card--jvlT0{margin-right:0;width:100%}.vkuiInternalCardGrid--size-l .Card--jvlT0:not(:first-child){margin-top:var(--vkui--size_cardgrid_padding--regular)}.vkuiInternalCardGrid--size-m .Card--jvlT0{width:calc(50% - (var(--vkui--size_cardgrid_padding--regular) / 2))}.vkuiInternalCardGrid--size-m .Card--jvlT0:nth-child(n+3){margin-top:var(--vkui--size_cardgrid_padding--regular)}.vkuiInternalCardGrid--size-m .Card--jvlT0:nth-child(2n){margin-right:0}.vkuiInternalCardGrid--size-s .Card--jvlT0{width:calc((100% - 2 * var(--vkui--size_cardgrid_padding--regular)) / 3)}.vkuiInternalCardGrid--size-s .Card--jvlT0:nth-child(n+4){margin-top:var(--vkui--size_cardgrid_padding--regular)}.vkuiInternalCardGrid--size-s .Card--jvlT0:nth-child(3n){margin-right:0}`,""]),i.locals={Card:"Card--jvlT0","Card--mode-shadow":"Card--mode-shadow--_j9pa","Card--mode-outline":"Card--mode-outline--vTtkl","Card--withBorder":"Card--withBorder--kDVkv"};let s=i},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/CardGrid/CardGrid.module.css":(e,r,o)=>{o.d(r,{c:()=>s});var t=o("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),n=o.n(t),a=o("../../node_modules/css-loader/dist/runtime/api.js"),i=o.n(a)()(n());i.push([e.id,".CardGrid--lIvr8{align-items:flex-start;display:flex;flex-wrap:wrap;justify-content:flex-start}.CardGrid--spaced--ljNuk{padding:var(--vkui--size_base_padding_vertical--regular) var(--vkui--size_base_padding_horizontal--regular)}.CardGrid--sizeX-compact--RKFUL{padding-left:var(--vkui--size_base_padding_horizontal--regular);padding-right:var(--vkui--size_base_padding_horizontal--regular)}@media (max-width:767.9px){.CardGrid--sizeX-none--SpWm2{padding-left:var(--vkui--size_base_padding_horizontal--regular);padding-right:var(--vkui--size_base_padding_horizontal--regular)}}.CardGrid--lIvr8+.CardGrid--lIvr8{margin-top:calc(var(--vkui--size_cardgrid_padding_vertical--regular) * 2)}.vkuiInternalGroup--mode-card .CardGrid--lIvr8{padding-left:var(--vkui--size_base_padding_horizontal--regular);padding-right:var(--vkui--size_base_padding_horizontal--regular)}@media (min-width:768px){.vkuiInternalGroup--mode-none .CardGrid--lIvr8{padding-left:8px;padding-right:8px}}.vkuiInternalGroup .CardGrid--lIvr8:first-child{margin-top:var(--vkui--size_cardgrid_padding_vertical--regular)}.vkuiInternalGroup .CardGrid--lIvr8:last-child{margin-bottom:var(--vkui--size_cardgrid_padding_vertical--regular)}",""]),i.locals={CardGrid:"CardGrid--lIvr8","CardGrid--spaced":"CardGrid--spaced--ljNuk","CardGrid--sizeX-compact":"CardGrid--sizeX-compact--RKFUL","CardGrid--sizeX-none":"CardGrid--sizeX-none--SpWm2"};let s=i},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Group/Group.module.css":(e,r,o)=>{o.d(r,{c:()=>s});var t=o("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),n=o.n(t),a=o("../../node_modules/css-loader/dist/runtime/api.js"),i=o.n(a)()(n());i.push([e.id,'.Group--xobVt{color:var(--vkui--color_text_primary);padding-bottom:8px;padding-top:8px}.Group__header--kXxNH:empty{display:none}.Group--mode-plain--KwMj9:not(:first-of-type)>.Group__header--kXxNH{margin-top:-8px}@media (max-width:767.9px){.Group--sizeX-none--_sXRj.Group--mode-none--OYdt8:not(:first-of-type)>.Group__header--kXxNH{margin-top:-8px}}.Group--mode-card--fmlmp>.Group__header--kXxNH{margin-top:-4px}@media (min-width:768px){.Group--sizeX-none--_sXRj.Group--mode-none--OYdt8>.Group__header--kXxNH{margin-top:-4px}}.Group__separator--separator--ZKY_V,.Group__separator--spacing--FNhA3{display:none}.Group--mode-plain--KwMj9+*+.Group__separator--separator--ZKY_V{display:block}@media (max-width:767.9px){.Group--sizeX-none--_sXRj.Group--mode-none--OYdt8+*+.Group__separator--separator--ZKY_V{display:block}}.Group--mode-card--fmlmp+.Group__separator--spacing--FNhA3{display:block}@media (min-width:768px){.Group--sizeX-none--_sXRj.Group--mode-none--OYdt8+.Group__separator--spacing--FNhA3{display:block}}.Group--xobVt:last-of-type~.Group__separator--op6Xj{display:none}.Group--mode-card--fmlmp:last-of-type+.Group__separator--spacing--FNhA3,.Group--xobVt:last-of-type~.Group__separator--force--xEXPB{display:block}@media (min-width:768px){.Group--sizeX-none--_sXRj.Group--mode-none--OYdt8:last-of-type+.Group__separator--spacing--FNhA3{display:block}}.Group--mode-card--fmlmp.Group--padding-s--T4za1{padding:4px}.Group--mode-card--fmlmp.Group--padding-m--eq6yP{padding:8px}@media (min-width:768px){.Group--sizeX-none--_sXRj.Group--inside-modal--Xhx9h.Group--padding-s--T4za1,.Group--sizeX-none--_sXRj.Group--mode-none--OYdt8.Group--padding-s--T4za1{padding:4px}.Group--sizeX-none--_sXRj.Group--inside-modal--Xhx9h.Group--padding-m--eq6yP,.Group--sizeX-none--_sXRj.Group--mode-none--OYdt8.Group--padding-m--eq6yP{padding:8px}}.Group--sizeX-compact--I3zDP,.Group--sizeX-compact--I3zDP.Group--mode-card--fmlmp{padding-left:0;padding-right:0}@media (max-width:767.9px){.Group--sizeX-none--_sXRj,.Group--sizeX-none--_sXRj.Group--mode-card--fmlmp{padding-left:0;padding-right:0}}.Group--mode-card--fmlmp{background:var(--vkui--color_background_content);border-radius:var(--vkui--size_border_radius_paper--regular);position:relative}@media (min-width:768px){.Group--sizeX-none--_sXRj.Group--mode-none--OYdt8{background:var(--vkui--color_background_content);border-radius:var(--vkui--size_border_radius_paper--regular);position:relative}}.Group--sizeX-compact--I3zDP.Group--mode-card--fmlmp:first-of-type{border-bottom-left-radius:var(--vkui--size_border_radius_paper--regular);border-bottom-right-radius:var(--vkui--size_border_radius_paper--regular);border-top-left-radius:0;border-top-right-radius:0}@media (max-width:767.9px){.Group--sizeX-none--_sXRj.Group--mode-card--fmlmp:first-of-type{border-bottom-left-radius:var(--vkui--size_border_radius_paper--regular);border-bottom-right-radius:var(--vkui--size_border_radius_paper--regular);border-top-left-radius:0;border-top-right-radius:0}}.Group--mode-card--fmlmp:before{border-radius:inherit;box-shadow:inset 0 0 0 var(--vkui--size_border--regular) var(--vkui--color_separator_primary);content:"";height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}@media (min-width:768px){.Group--sizeX-none--_sXRj.Group--mode-none--OYdt8:before{border-radius:inherit;box-shadow:inset 0 0 0 var(--vkui--size_border--regular) var(--vkui--color_field_border_alpha);content:"";height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}}.Group--sizeX-compact--I3zDP.Group--mode-card--fmlmp:before{box-shadow:none}@media (max-width:767.9px){.Group--sizeX-none--_sXRj.Group--mode-card--fmlmp:before{box-shadow:none}}.Group--mode-plain--KwMj9+.Group__separator--op6Xj,.Group--mode-plain--KwMj9+.Group__separator--op6Xj+.Group__separator--op6Xj{padding-bottom:8px;padding-top:8px}@media (max-width:767.9px){.Group--sizeX-none--_sXRj.Group--mode-none--OYdt8+.Group__separator--op6Xj,.Group--sizeX-none--_sXRj.Group--mode-none--OYdt8+.Group__separator--op6Xj+.Group__separator--op6Xj{padding-bottom:8px;padding-top:8px}}.Group__description--Xolzh{color:var(--vkui--color_text_secondary);display:block;padding:4px 16px 16px}.Group--xobVt .Group--xobVt,.Group--xobVt .Group--xobVt+.Group__separator--op6Xj{padding-left:0;padding-right:0}.Group--xobVt .Group--xobVt:first-of-type{padding-top:0}.Group--xobVt .Group--xobVt:last-of-type{padding-bottom:0}.Group--ios--ZeO5F .Group__description--Xolzh{padding:4px 12px 16px}.vkuiInternalPanelHeader--vkcom+* .Group--xobVt:first-of-type,.vkuiInternalPanelHeader--vkcom~.Group--xobVt:first-of-type{border-top-left-radius:0;border-top-right-radius:0;position:relative;top:-1px}',""]),i.locals={Group:"Group--xobVt",Group__header:"Group__header--kXxNH","Group--mode-plain":"Group--mode-plain--KwMj9","Group--sizeX-none":"Group--sizeX-none--_sXRj","Group--mode-none":"Group--mode-none--OYdt8","Group--mode-card":"Group--mode-card--fmlmp","Group__separator--separator":"Group__separator--separator--ZKY_V","Group__separator--spacing":"Group__separator--spacing--FNhA3",Group__separator:"Group__separator--op6Xj","Group__separator--force":"Group__separator--force--xEXPB","Group--padding-s":"Group--padding-s--T4za1","Group--padding-m":"Group--padding-m--eq6yP","Group--inside-modal":"Group--inside-modal--Xhx9h","Group--sizeX-compact":"Group--sizeX-compact--I3zDP",Group__description:"Group__description--Xolzh","Group--ios":"Group--ios--ZeO5F"};let s=i},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Typography/Footnote/Footnote.module.css":(e,r,o)=>{o.d(r,{c:()=>s});var t=o("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),n=o.n(t),a=o("../../node_modules/css-loader/dist/runtime/api.js"),i=o.n(a)()(n());i.push([e.id,".Footnote--TsLLT{font-family:var(--vkui--font_footnote--font_family--regular);font-size:var(--vkui--font_footnote--font_size--regular);font-weight:var(--vkui--font_footnote--font_weight--regular);line-height:var(--vkui--font_footnote--line_height--regular)}.Footnote--caps--rHreA{font-family:var(--vkui--font_footnote_caps--font_family--regular);font-size:var(--vkui--font_footnote_caps--font_size--regular);font-weight:var(--vkui--font_footnote_caps--font_weight--regular);line-height:var(--vkui--font_footnote_caps--line_height--regular);text-transform:uppercase}",""]),i.locals={Footnote:"Footnote--TsLLT","Footnote--caps":"Footnote--caps--rHreA"};let s=i},"./src/components/Card/Card.tsx":(e,r,o)=>{o.d(r,{M:()=>b});var t=o("../../node_modules/react/index.js"),n=o("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),a=o("./src/components/RootComponent/RootComponent.tsx"),i=o("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=o.n(i),d=o("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),l=o.n(d),u=o("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),p=o.n(u),c=o("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),m=o.n(c),g=o("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),v=o.n(g),_=o("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Card/Card.module.css"),f={attributes:{class:"vkui-style"}};f.setAttributes=m(),f.insert=p().bind(null,"head"),f.domAPI=l(),f.insertStyleElement=v(),s()(_.c,f);let y=_.c&&_.c.locals?_.c.locals:void 0;var b=function(e){var r,o,i=e.mode,s=void 0===i?"tint":i,d=function(e,r){if(null==e)return{};var o,t,n=function(e,r){if(null==e)return{};var o,t,n={},a=Object.keys(e);for(t=0;t<a.length;t++)o=a[t],r.indexOf(o)>=0||(n[o]=e[o]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)o=a[t],!(r.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}(e,["mode"]);return t.createElement(a.Q,(r=function(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{},t=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),t.forEach(function(r){var t,n,a;a=o[r],r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a})}return e}({},d),o=o={baseClassName:(0,n.gr)(y.Card,"outline"===s&&y["Card--mode-outline"],"shadow"===s&&y["Card--mode-shadow"],("outline"===s||"outline-tint"===s)&&y["Card--withBorder"])},Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):(function(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o.push.apply(o,t)}return o})(Object(o)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))}),r))};try{b.displayName="Card",b.__docgenInfo={description:"",displayName:"Card",props:{mode:{defaultValue:{value:"tint"},description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"shadow"'},{value:'"outline"'},{value:'"tint"'},{value:'"outline-tint"'}]}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Card/Card.tsx#Card"]={docgenInfo:b.__docgenInfo,name:"Card",path:"src/components/Card/Card.tsx#Card"})}catch(e){}},"./src/components/Group/Group.tsx":(e,r,o)=>{o.d(r,{W:()=>P});var t=o("../../node_modules/react/index.js"),n=o("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),a=o("./src/hooks/useAdaptivity.ts"),i=o("./src/hooks/usePlatform.ts"),s=o("./src/lib/warnOnce.ts"),d=o("./src/components/AppRoot/AppRootContext.ts"),l=o("./src/components/ModalRoot/ModalRootContext.tsx"),u=o("./src/components/RootComponent/RootComponent.tsx"),p=o("./src/components/Separator/Separator.tsx"),c=o("./src/components/Spacing/Spacing.tsx"),m=o("./src/components/Typography/Footnote/Footnote.tsx"),g=o("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),v=o.n(g),_=o("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),f=o.n(_),y=o("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),b=o.n(y),G=o("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),h=o.n(G),j=o("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),O=o.n(j),k=o("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Group/Group.module.css"),C={attributes:{class:"vkui-style"}};C.setAttributes=h(),C.insert=b().bind(null,"head"),C.domAPI=f(),C.insertStyleElement=O(),v()(k.c,C);let x=k.c&&k.c.locals?k.c.locals:void 0;function S(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}var w=S({none:(0,n.gr)(x["Group--sizeX-none"],"vkuiInternalGroup--sizeX-none")},"compact",x["Group--sizeX-compact"]),z={none:(0,n.gr)(x["Group--mode-none"],"vkuiInternalGroup--mode-none"),plain:(0,n.gr)(x["Group--mode-plain"],"vkuiInternalGroup--mode-plain"),card:(0,n.gr)(x["Group--mode-card"],"vkuiInternalGroup--mode-card")},I={s:x["Group--padding-s"],m:x["Group--padding-m"]};(0,s.w)("Group");var P=function(e){var r,o,s,g=e.header,v=e.description,_=e.children,f=e.separator,y=void 0===f?"auto":f,b=e.mode,G=e.padding,h=e.tabIndex,j=function(e,r){if(null==e)return{};var o,t,n=function(e,r){if(null==e)return{};var o,t,n={},a=Object.keys(e);for(t=0;t<a.length;t++)o=a[t],r.indexOf(o)>=0||(n[o]=e[o]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)o=a[t],!(r.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}(e,["header","description","children","separator","mode","padding","tabIndex"]),O=t.useContext(l.y).isInsideModal,k=(0,i.o)(),C=(0,a._)().sizeX,P=void 0===C?"none":C,X=(r=t.useContext(d.c).layout,b||(O?"plain":r||("none"!==P?"regular"===P?"card":"plain":"none"))),R="tabpanel"===j.role;return t.createElement(t.Fragment,null,t.createElement(u.Q,(o=function(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{},t=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),t.forEach(function(r){S(e,r,o[r])})}return e}({Component:"section"},j),s=s={tabIndex:R&&void 0===h?0:h,baseClassName:(0,n.gr)("vkuiInternalGroup",x.Group,O&&x["Group--inside-modal"],"ios"===k&&x["Group--ios"],"regular"!==P&&w[P],X&&z[X],I[void 0===G?"m":G])},Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(s)):(function(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o.push.apply(o,t)}return o})(Object(s)).forEach(function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(s,e))}),o),(0,n.WW)(g)&&t.createElement("div",{className:x.Group__header},g),_,(0,n.WW)(v)&&t.createElement(m.I,{className:x.Group__description},v)),"hide"!==y&&t.createElement(t.Fragment,null,t.createElement(c._,{className:(0,n.gr)(x.Group__separator,x["Group__separator--spacing"]),size:16}),t.createElement(p.U,{className:(0,n.gr)(x.Group__separator,x["Group__separator--separator"],"show"===y&&x["Group__separator--force"])})))};try{P.displayName="Group",P.__docgenInfo={description:"",displayName:"Group",props:{header:{defaultValue:null,description:"",name:"header",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},separator:{defaultValue:{value:"auto"},description:"`show` - разделитель всегда показывается,\n`hide` - разделитель всегда спрятан,\n`auto` - разделитель рисуется автоматически между соседними группами.",name:"separator",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"show"'},{value:'"hide"'}]}},mode:{defaultValue:null,description:"Режим отображения. Если установлен `card`, выглядит как карточка c\nобводкой и внешними отступами. Если `plain` — без отступов и обводки.\nПо умолчанию режим отображения зависит от `sizeX` (`mode=card` при `sizeX=REGULAR` и `mode=plain` при `sizeX=COMPACT`)\nВ модальных окнах по умолчанию `plain`.",name:"mode",required:!1,type:{name:"enum",value:[{value:'"plain"'},{value:'"card"'}]}},padding:{defaultValue:{value:"m"},description:"Отвечает за отступы вокруг контента в режиме `card`.",name:"padding",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Group/Group.tsx#Group"]={docgenInfo:P.__docgenInfo,name:"Group",path:"src/components/Group/Group.tsx#Group"})}catch(e){}},"./src/components/Typography/Footnote/Footnote.tsx":(e,r,o)=>{o.d(r,{I:()=>b});var t=o("../../node_modules/react/index.js"),n=o("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),a=o("./src/components/Typography/Typography.tsx"),i=o("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=o.n(i),d=o("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),l=o.n(d),u=o("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),p=o.n(u),c=o("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),m=o.n(c),g=o("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),v=o.n(g),_=o("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Typography/Footnote/Footnote.module.css"),f={attributes:{class:"vkui-style"}};f.setAttributes=m(),f.insert=p().bind(null,"head"),f.domAPI=l(),f.insertStyleElement=v(),s()(_.c,f);let y=_.c&&_.c.locals?_.c.locals:void 0;var b=function(e){var r=e.className,o=e.caps,i=e.Component,s=e.normalize,d=function(e,r){if(null==e)return{};var o,t,n=function(e,r){if(null==e)return{};var o,t,n={},a=Object.keys(e);for(t=0;t<a.length;t++)o=a[t],r.indexOf(o)>=0||(n[o]=e[o]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)o=a[t],!(r.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}(e,["className","caps","Component","normalize"]);return t.createElement(a.O,function(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{},t=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),t.forEach(function(r){var t,n,a;a=o[r],r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a})}return e}({Component:void 0===i?"span":i,normalize:void 0===s||s,className:(0,n.gr)(r,y.Footnote,o&&y["Footnote--caps"])},d))};try{b.displayName="Footnote",b.__docgenInfo={description:"Используется для основных подписей.",displayName:"Footnote",props:{weight:{defaultValue:null,description:"Задаёт начертание шрифта, отличное от стандартного.",name:"weight",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'}]}},normalize:{defaultValue:{value:"true"},description:"Убирает внешние отступы",name:"normalize",required:!1,type:{name:"boolean"}},Component:{defaultValue:{value:"span"},description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}},caps:{defaultValue:null,description:"",name:"caps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typography/Footnote/Footnote.tsx#Footnote"]={docgenInfo:b.__docgenInfo,name:"Footnote",path:"src/components/Typography/Footnote/Footnote.tsx#Footnote"})}catch(e){}},"./src/storybook/constants.ts":(e,r,o)=>{o.d(r,{Ok:()=>a,iM:()=>n,wj:()=>t});var t={layout:"fullscreen",centered:!0},n={cartesian:{disable:!0}},a={control:{type:"text"}}}}]);