"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[7108],{"./src/components/Snackbar/Snackbar.stories.tsx":(e,r,t)=>{t.r(r),t.d(r,{Playground:()=>m,WithBottomOffset:()=>g,WithSubtitle:()=>d,__namedExportsOrder:()=>O,default:()=>b});var n=t("../../node_modules/react/index.js"),o=t("../../node_modules/@vkontakte/icons/dist/es6/24/thumbs_up_outline_24.js"),a=t("../../node_modules/@vkontakte/icons/dist/es6/28/error_circle_outline_28.js"),s=t("./src/storybook/constants.ts"),c=t("./src/testing/mock.ts"),i=t("./src/components/Avatar/Avatar.tsx"),l=t("./src/components/Image/Image.tsx"),u=t("./src/components/Snackbar/Snackbar.tsx");function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.forEach(function(r){var n,o,a;a=t[r],r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a})}return e}function f(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):(function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t.push.apply(t,n)}return t})(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}),e}let b={title:"Popouts/Snackbar",component:u.w,parameters:p({},s.wj,s.iM),argTypes:{before:{options:["None","Icon24","Icon28","Avatar","Image"],mapping:{None:null,Icon24:n.createElement(o.I,{fill:"var(--vkui--color_icon_accent)"}),Icon28:n.createElement(a.e,{fill:"var(--vkui--color_icon_negative)"}),Avatar:n.createElement(i.C,{size:32,src:(0,c.eG)()}),Image:n.createElement(l.W,{size:40,src:(0,c.eG)("app_shorm_online")})}},after:{control:{type:"boolean"}},subtitle:s.Ok,offsetY:s.Ok}};var m={render:function(e){var r=e.after,t=function(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],!(r.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(e,["after"]),o=r?n.createElement(i.C,{size:32,src:(0,c.eG)()}):void 0;return n.createElement(u.w,p({after:o},t))},args:{action:"Поделиться",children:"Этот сервис рекомендует один друг",before:"Icon24"}},d=f(p({},m),{args:f(p({},m.args),{action:void 0,subtitle:"Вы можете порекомендовать сервис в дополнительном меню"})}),g=f(p({},m),{args:f(p({},m.args),{action:void 0,offsetY:"48px"})});m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{\n  render: ({\n    after,\n    ...args\n  }) => {\n    const After = after ? <Avatar size={32} src={getAvatarUrl()} /> : undefined;\n    return <Snackbar after={After} {...args} />;\n  },\n  args: {\n    action: 'Поделиться',\n    children: 'Этот сервис рекомендует один друг',\n    before: 'Icon24'\n  }\n}",...m.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{\n  ...Playground,\n  args: {\n    ...Playground.args,\n    action: undefined,\n    subtitle: 'Вы можете порекомендовать сервис в дополнительном меню'\n  }\n}",...d.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:"{\n  ...Playground,\n  args: {\n    ...Playground.args,\n    action: undefined,\n    offsetY: '48px'\n  }\n}",...g.parameters?.docs?.source}}};let O=["Playground","WithSubtitle","WithBottomOffset"]}}]);