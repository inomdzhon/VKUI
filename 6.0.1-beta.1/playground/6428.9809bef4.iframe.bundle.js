"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[6428],{"../../node_modules/@swc/helpers/esm/_object_without_properties.js":(e,o,t)=>{t.d(o,{_:()=>n});function n(e,o){if(null==e)return{};var t,n,s=function(e,o){if(null==e)return{};var t,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],o.indexOf(t)>=0||(s[t]=e[t]);return s}(e,o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],!(o.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}},"../../node_modules/@vkontakte/icons-sprite/dist/index.js":(e,o,t)=>{t.d(o,{cL:()=>k});var n,s=t("../../node_modules/@swc/helpers/esm/_object_spread.js"),i=t("../../node_modules/@swc/helpers/esm/_object_spread_props.js"),d=t("../../node_modules/@swc/helpers/esm/_object_without_properties.js"),l=t("../../node_modules/react/index.js"),r=t("../../node_modules/@swc/helpers/esm/_class_call_check.js"),c=t("../../node_modules/@swc/helpers/esm/_create_class.js"),a=t("../../node_modules/@swc/helpers/esm/_define_property.js"),u=function(){function e(o){var t,n,s=o.content;(0,r._)(this,e),(0,a._)(this,"isMounted",!1),(0,a._)(this,"node",void 0),this.node=(t=!!document.importNode,n=new DOMParser().parseFromString(s,"image/svg+xml").documentElement,t?document.importNode(n,!0):n)}return(0,c._)(e,[{key:"id",get:function(){return this.node.id}},{key:"mount",value:function(e){return this.isMounted||(this.isMounted=!0,e.appendChild(this.node)),this.node}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&(this.node.parentNode.removeChild(this.node),this.isMounted=!1)}}],[{key:"createFromExistingNode",value:function(o){var t=new e({content:""});return t.node=o,t}}]),e}(),h="http://www.w3.org/2000/svg",m=function(){function e(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,r._)(this,e),(0,a._)(this,"symbols",new Map),(0,a._)(this,"config",{attrs:{xmlns:h,"xmlns:xlink":"http://www.w3.org/1999/xlink",style:"position:absolute;width:0;height:0","aria-hidden":"true"}}),(0,a._)(this,"node",null),Object.assign(this.config.attrs,o.attrs)}return(0,c._)(e,[{key:"push",value:function(e){var o=this.symbols,t=o.has(e.id);return o.set(e.id,e),!t}},{key:"add",value:function(e){var o=this.push(e);return this.node&&o&&e.mount(this.node),o}},{key:"attach",value:function(e){var o=this;this.node||(this.node=e,this.symbols.forEach(function(o){o.mount(e)}),e.querySelectorAll("symbol").forEach(function(e){var t=u.createFromExistingNode(e);o.add(t)}))}},{key:"mount",value:function(e){var o=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.node||(this.node=this.render(),o&&e.childNodes[0]?e.insertBefore(this.node,e.firstChild):e.appendChild(this.node)),this.node}},{key:"render",value:function(){var e=document.createElementNS(h,"svg");return Object.entries(this.config.attrs).forEach(function(o){return e.setAttribute(o[0],o[1])}),this.symbols.forEach(function(o){return e.appendChild(o.node)}),e}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&this.node.parentNode.removeChild(this.node)}}]),e}(),v=!!("undefined"!=typeof window&&window.document&&window.document.createElement);if(v){var _="__SVG_SPRITE_NODE__";n=new m({attrs:{id:_}});var f=function(){var e=document.getElementById(_);e?n.attach(e):n.mount(document.body),document.removeEventListener("DOMContentLoaded",f)};document.querySelector("body")?f():document.addEventListener("DOMContentLoaded",f)}else n=null;var w=v?l.useLayoutEffect:l.useEffect,p=function(e){var o=e.width,t=void 0===o?0:o,n=e.height,r=void 0===n?0:n,c=e.viewBox,a=e.id,u=e.className,h=e.fill,m=e.getRootRef,v=e.style,_=e.title,f=e.children,w=(0,d._)(e,["width","height","viewBox","id","className","fill","getRootRef","style","title","children"]),p=Math.max(t,r),k=(0,s._)({width:t,height:r},void 0===v?{}:v);return l.createElement("svg",(0,i._)((0,s._)({"aria-hidden":"true",display:"block"},w),{className:["vkuiIcon","vkuiIcon--".concat(p),"vkuiIcon--w-".concat(t),"vkuiIcon--h-".concat(r),"vkuiIcon--".concat(a),void 0===u?"":u].join(" ").trim(),viewBox:c,width:t,height:r,style:k,ref:m}),_&&l.createElement("title",null,_),l.createElement("use",{xlinkHref:"#".concat(a),style:{fill:"currentColor",color:h}},f))};function k(e,o,t,d,r,c,a,h){var m,v=function(){if(!_){var e;e=new u({content:d}),n&&n.add(e),_=!0}},_=!1,f=(m={},function(o){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warn";m[o]||(console[t]("[@vkontakte/icons][".concat(e,"] ").concat(o)),m[o]=!0)}),k=function(e){return w(v,[]),a&&f("Иконка устарела"+(h?". Замените на ".concat(h):"")),l.createElement(p,(0,i._)((0,s._)({},e),{viewBox:t,id:o,width:void 0===e.width||isNaN(e.width)?r:+e.width,height:void 0===e.height||isNaN(e.height)?c:+e.height}))};return k.mountIcon=v,k.displayName=e,k}},"../../node_modules/@vkontakte/icons/dist/es6/12/circle_12.js":(e,o,t)=>{t.d(o,{I:()=>n});var n=(0,t("../../node_modules/@vkontakte/icons-sprite/dist/index.js").cL)("Icon12Circle","circle_12","0 0 12 12",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 12" id="circle_12"><path fill="currentColor" d="M10 6a4 4 0 1 1-8 0 4 4 0 0 1 8 0" /></symbol>',12,12,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/12/online_mobile_12.js":(e,o,t)=>{t.d(o,{d:()=>n});var n=(0,t("../../node_modules/@vkontakte/icons-sprite/dist/index.js").cL)("Icon12OnlineMobile","online_mobile_12","0 0 8 12",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 12" id="online_mobile_12"><path fill="currentColor" d="M5.99 0C7.1 0 8 .9 8 2.01v7.98C8 11.1 7.1 12 5.99 12H2.01C.9 12 0 11.1 0 9.99V2.01C0 .9.9 0 2.01 0zm.008 3H2.003a.502.502 0 0 0-.503.502v4.996c0 .277.225.502.503.502h3.995a.502.502 0 0 0 .502-.502V3.503A.502.502 0 0 0 5.997 3Z" /></symbol>',8,12,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/12/users_12.js":(e,o,t)=>{t.d(o,{m:()=>n});var n=(0,t("../../node_modules/@vkontakte/icons-sprite/dist/index.js").cL)("Icon12Users","users_12","0 0 12 12",'<symbol xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 12 12" id="users_12"><path d="M8.25 6.5c1.147 0 3.25.429 3.25 2.143 0 .75-.191.857-.573.857l-3.046.001A2.77 2.77 0 0 0 8 8.643c0-.862-.316-1.534-.837-2.032.392-.08.775-.111 1.087-.111Zm-4.5 0C4.897 6.5 7 6.929 7 8.643c0 .75-.191.857-.574.857H1.074C.69 9.5.5 9.393.5 8.643.5 6.929 2.603 6.5 3.75 6.5m0-3.75a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m4.5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" /></symbol>',12,12,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/16/users_16.js":(e,o,t)=>{t.d(o,{W:()=>n});var n=(0,t("../../node_modules/@vkontakte/icons-sprite/dist/index.js").cL)("Icon16Users","users_16","0 0 16 16",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" id="users_16"><path fill="currentColor" d="M11.357 8.5c1.533 0 4.343.571 4.343 2.857 0 1-.255 1.143-.766 1.143l-4.07.001c.106-.326.159-.709.159-1.144 0-1.149-.422-2.045-1.118-2.708a7.444 7.444 0 0 1 1.452-.149Zm-6.014 0c1.533 0 4.343.571 4.343 2.857 0 1-.255 1.143-.766 1.143H1.766c-.51 0-.766-.143-.766-1.143C1 9.071 3.81 8.5 5.343 8.5Zm0-5c1.108 0 2.005.895 2.005 2s-.897 2-2.005 2c-1.107 0-2.004-.895-2.004-2s.897-2 2.004-2m6.014 0c1.107 0 2.004.895 2.004 2s-.897 2-2.004 2-2.005-.895-2.005-2 .897-2 2.005-2" /></symbol>',16,16,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/20/gift_circle_fill_red_20.js":(e,o,t)=>{t.d(o,{U:()=>n});var n=(0,t("../../node_modules/@vkontakte/icons-sprite/dist/index.js").cL)("Icon20GiftCircleFillRed","gift_circle_fill_red_20","0 0 20 20",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" id="gift_circle_fill_red_20"><linearGradient id="gift_circle_fill_red_20_a" x1="-10" x2="10" y1="10" y2="30" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ff5263" /><stop offset="1" stop-color="#ff3347" /></linearGradient><path fill="url(#gift_circle_fill_red_20_a)" d="M0 10C0 4.477 4.477 0 10 0s10 4.477 10 10-4.477 10-10 10S0 15.523 0 10" /><path fill="#fff" d="M8.709 12.3c.223 0 .304.023.385.067s.146.107.19.189c.043.081.066.162.066.385v2.418c0 .223-.023.304-.067.385a.454.454 0 0 1-.189.19c-.081.043-.162.066-.385.066H7.282c-.446 0-.607-.046-.77-.133a.91.91 0 0 1-.378-.379c-.088-.162-.134-.324-.134-.77v-1.777c0-.223.023-.304.067-.385.043-.082.107-.146.189-.19s.162-.066.385-.066zm4.65 0c.223 0 .304.023.385.067s.146.107.19.189.066.162.066.385v1.777c0 .446-.046.607-.134.77a.909.909 0 0 1-.378.379c-.162.087-.324.133-.77.133h-1.427c-.223 0-.304-.023-.385-.067a.454.454 0 0 1-.19-.189c-.043-.081-.066-.162-.066-.385v-2.418c0-.223.023-.304.067-.385s.107-.146.189-.19.162-.066.385-.066zM8.709 8c.223 0 .304.023.385.067s.146.107.19.189c.043.081.066.162.066.385v1.718c0 .223-.023.304-.067.385a.454.454 0 0 1-.189.19c-.081.043-.162.066-.385.066H5.641c-.223 0-.304-.023-.385-.067a.454.454 0 0 1-.19-.189C5.024 10.663 5 10.582 5 10.36V9.255c0-.413.046-.58.134-.743a.909.909 0 0 1 .378-.378c.163-.088.33-.134.743-.134zm5.036 0c.413 0 .58.046.743.134.163.087.291.215.378.378.088.163.134.33.134.743v1.104c0 .223-.023.304-.067.385a.454.454 0 0 1-.189.19c-.081.043-.162.066-.385.066h-3.068c-.223 0-.304-.023-.385-.067a.454.454 0 0 1-.19-.189c-.043-.081-.066-.162-.066-.385V8.641c0-.223.023-.304.067-.385s.107-.146.189-.19S11.068 8 11.29 8zM10 7C6.5 7 6.2 4.8 7 4s3-.5 3 3m3-3.003c.8.8.5 3.003-3 3.003 0-3.5 2.2-3.803 3-3.003" /></symbol>',20,20,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/20/users_20.js":(e,o,t)=>{t.d(o,{C:()=>n});var n=(0,t("../../node_modules/@vkontakte/icons-sprite/dist/index.js").cL)("Icon20Users","users_20","0 0 20 20",'<symbol xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" id="users_20"><path d="M13.5 10.5c1.941 0 5.5.714 5.5 3.571 0 1.25-.323 1.429-.97 1.429l-4.738.001c.139-.4.208-.878.208-1.43 0-1.483-.592-2.62-1.555-3.436A9.413 9.413 0 0 1 13.5 10.5m-7 0c1.941 0 5.5.714 5.5 3.571 0 1.25-.323 1.429-.97 1.429H1.97c-.646 0-.97-.179-.97-1.429C1 11.214 4.559 10.5 6.5 10.5m0-6.5a2.5 2.5 0 1 1 .001 4.999A2.5 2.5 0 0 1 6.5 4m7 0a2.5 2.5 0 1 1 .001 4.999A2.5 2.5 0 0 1 13.5 4" /></symbol>',20,20,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/24/add_outline_24.js":(e,o,t)=>{t.d(o,{Q:()=>n});var n=(0,t("../../node_modules/@vkontakte/icons-sprite/dist/index.js").cL)("Icon24AddOutline","add_outline_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="add_outline_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path fill="currentColor" fill-rule="nonzero" d="M12 3a.9.9 0 0 1 .9.9v7.2h7.2a.9.9 0 1 1 0 1.8l-7.2-.001V20.1a.9.9 0 1 1-1.8 0V12.9l-7.2.001a.9.9 0 1 1 0-1.8h7.2V3.9A.9.9 0 0 1 12 3" /></g></symbol>',24,24,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/24/users_24.js":(e,o,t)=>{t.d(o,{I:()=>n});var n=(0,t("../../node_modules/@vkontakte/icons-sprite/dist/index.js").cL)("Icon24Users","users_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" id="users_24"><path d="M16.5 12.75c2.294 0 6.5.857 6.5 4.285 0 1.5-.382 1.715-1.147 1.715h-6.09c.158-.489.237-1.062.237-1.715 0-1.723-.631-3.066-1.672-4.062.783-.16 1.548-.223 2.172-.223Zm-9 0c2.294 0 6.5.857 6.5 4.285 0 1.5-.382 1.715-1.147 1.715H2.147C1.382 18.75 1 18.535 1 17.035c0-3.428 4.206-4.285 6.5-4.285m0-7.5a3 3 0 1 1 0 6 3 3 0 1 1 0-6m9 0a3 3 0 1 1 0 6 3 3 0 1 1 0-6" /></symbol>',24,24,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/28/add_outline_28.js":(e,o,t)=>{t.d(o,{c:()=>n});var n=(0,t("../../node_modules/@vkontakte/icons-sprite/dist/index.js").cL)("Icon28AddOutline","add_outline_28","0 0 28 28",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="add_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path fill="currentColor" fill-rule="nonzero" d="M14 4a1 1 0 0 1 1 1v8h8a1 1 0 0 1 0 2h-8v8a1 1 0 0 1-2 0v-8H5a1 1 0 0 1 0-2h8V5a1 1 0 0 1 1-1" /></g></symbol>',28,28,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/28/users_28.js":(e,o,t)=>{t.d(o,{C:()=>n});var n=(0,t("../../node_modules/@vkontakte/icons-sprite/dist/index.js").cL)("Icon28Users","users_28","0 0 28 28",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="users_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path fill="currentColor" d="M22.5 10c0-1.934-1.566-3.5-3.5-3.5a3.499 3.499 0 0 0-3.5 3.5c0 1.934 1.566 3.5 3.5 3.5s3.5-1.566 3.5-3.5m-6.17 5.293A12.72 12.72 0 0 1 19 15c2.47 0 7 .857 7 4.286 0 1.5-.412 1.714-1.235 1.714h-7.01c.163-.487.245-1.06.245-1.714 0-1.69-.627-3.009-1.67-3.993M12.5 10c0 1.934-1.566 3.5-3.5 3.5A3.499 3.499 0 0 1 5.5 10c0-1.934 1.566-3.5 3.5-3.5s3.5 1.566 3.5 3.5M2 19.286C2 15.857 6.53 15 9 15c2.47 0 7 .857 7 4.286 0 1.5-.412 1.714-1.235 1.714H3.235C2.412 21 2 20.786 2 19.286" /></g></symbol>',28,28,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/36/users_36.js":(e,o,t)=>{t.d(o,{g:()=>n});var n=(0,t("../../node_modules/@vkontakte/icons-sprite/dist/index.js").cL)("Icon36Users","users_36","0 0 36 36",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 36 36" id="users_36"><path fill="currentColor" d="M28.929 12.857c0-2.486-2.014-4.5-4.5-4.5a4.499 4.499 0 0 0-4.5 4.5c0 2.486 2.013 4.5 4.5 4.5 2.486 0 4.5-2.014 4.5-4.5m-4.5 6.429c3.176 0 9 1.102 9 5.51 0 1.928-.53 2.204-1.589 2.204h-9.012c.209-.626.315-1.363.315-2.204 0-2.171-.807-3.868-2.147-5.133a16.304 16.304 0 0 1 3.433-.377m-12.858 0c3.177 0 9 1.102 9 5.51 0 1.928-.529 2.204-1.588 2.204H4.16c-1.06 0-1.589-.276-1.589-2.204 0-4.408 5.824-5.51 9-5.51m0-10.929c2.487 0 4.5 2.014 4.5 4.5s-2.013 4.5-4.5 4.5a4.499 4.499 0 0 1-4.5-4.5c0-2.486 2.014-4.5 4.5-4.5" /></symbol>',36,36,!1,void 0)}}]);