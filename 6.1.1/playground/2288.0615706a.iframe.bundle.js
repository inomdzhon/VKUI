"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[2288],{"../../node_modules/@swc/helpers/esm/_object_without_properties.js":(e,o,n)=>{n.d(o,{_:()=>t});function t(e,o){if(null==e)return{};var n,t,i=function(e,o){if(null==e)return{};var n,t,i={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],o.indexOf(n)>=0||(i[n]=e[n]);return i}(e,o);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],!(o.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}},"../../node_modules/@vkontakte/icons-sprite/dist/index.js":(e,o,n)=>{n.d(o,{cL:()=>p});var t,i=n("../../node_modules/@swc/helpers/esm/_object_spread.js"),s=n("../../node_modules/@swc/helpers/esm/_object_spread_props.js"),l=n("../../node_modules/@swc/helpers/esm/_object_without_properties.js"),d=n("../../node_modules/react/index.js"),r=n("../../node_modules/@swc/helpers/esm/_class_call_check.js"),c=n("../../node_modules/@swc/helpers/esm/_create_class.js"),a=n("../../node_modules/@swc/helpers/esm/_define_property.js"),h=function(){function e(o){var n,t,i=o.content;(0,r._)(this,e),(0,a._)(this,"isMounted",!1),(0,a._)(this,"node",void 0),this.node=(n=!!document.importNode,t=new DOMParser().parseFromString(i,"image/svg+xml").documentElement,n?document.importNode(t,!0):t)}return(0,c._)(e,[{key:"id",get:function(){return this.node.id}},{key:"mount",value:function(e){return this.isMounted||(this.isMounted=!0,e.appendChild(this.node)),this.node}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&(this.node.parentNode.removeChild(this.node),this.isMounted=!1)}}],[{key:"createFromExistingNode",value:function(o){var n=new e({content:""});return n.node=o,n}}]),e}(),_="http://www.w3.org/2000/svg",u=function(){function e(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,r._)(this,e),(0,a._)(this,"symbols",new Map),(0,a._)(this,"config",{attrs:{xmlns:_,"xmlns:xlink":"http://www.w3.org/1999/xlink",style:"position:absolute;width:0;height:0","aria-hidden":"true"}}),(0,a._)(this,"node",null),Object.assign(this.config.attrs,o.attrs)}return(0,c._)(e,[{key:"push",value:function(e){var o=this.symbols,n=o.has(e.id);return o.set(e.id,e),!n}},{key:"add",value:function(e){var o=this.push(e);return this.node&&o&&e.mount(this.node),o}},{key:"attach",value:function(e){var o=this;this.node||(this.node=e,this.symbols.forEach(function(o){o.mount(e)}),e.querySelectorAll("symbol").forEach(function(e){var n=h.createFromExistingNode(e);o.add(n)}))}},{key:"mount",value:function(e){var o=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.node||(this.node=this.render(),o&&e.childNodes[0]?e.insertBefore(this.node,e.firstChild):e.appendChild(this.node)),this.node}},{key:"render",value:function(){var e=document.createElementNS(_,"svg");return Object.entries(this.config.attrs).forEach(function(o){return e.setAttribute(o[0],o[1])}),this.symbols.forEach(function(o){return e.appendChild(o.node)}),e}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&this.node.parentNode.removeChild(this.node)}}]),e}(),v=!!("undefined"!=typeof window&&window.document&&window.document.createElement);if(v){var m="__SVG_SPRITE_NODE__";t=new u({attrs:{id:m}});var f=function(){var e=document.getElementById(m);e?t.attach(e):t.mount(document.body),document.removeEventListener("DOMContentLoaded",f)};document.querySelector("body")?f():document.addEventListener("DOMContentLoaded",f)}else t=null;var w=v?d.useLayoutEffect:d.useEffect,k=function(e){var o=e.width,n=void 0===o?0:o,t=e.height,r=void 0===t?0:t,c=e.viewBox,a=e.id,h=e.className,_=e.fill,u=e.getRootRef,v=e.style,m=e.title,f=e.children,w=(0,l._)(e,["width","height","viewBox","id","className","fill","getRootRef","style","title","children"]),k=Math.max(n,r),p=(0,i._)({width:n,height:r},void 0===v?{}:v);return d.createElement("svg",(0,s._)((0,i._)({"aria-hidden":"true",display:"block"},w),{className:["vkuiIcon","vkuiIcon--".concat(k),"vkuiIcon--w-".concat(n),"vkuiIcon--h-".concat(r),"vkuiIcon--".concat(a),void 0===h?"":h].join(" ").trim(),viewBox:c,width:n,height:r,style:p,ref:u}),m&&d.createElement("title",null,m),d.createElement("use",{xlinkHref:"#".concat(a),style:{fill:"currentColor",color:_}},f))};function p(e,o,n,l,r,c,a,_){var u,v=function(){if(!m){var e;e=new h({content:l}),t&&t.add(e),m=!0}},m=!1,f=(u={},function(o){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warn";u[o]||(console[n]("[@vkontakte/icons][".concat(e,"] ").concat(o)),u[o]=!0)}),p=function(e){return w(v,[]),a&&f("Иконка устарела"+(_?". Замените на ".concat(_):"")),d.createElement(k,(0,s._)((0,i._)({},e),{viewBox:n,id:o,width:void 0===e.width||isNaN(e.width)?r:+e.width,height:void 0===e.height||isNaN(e.height)?c:+e.height}))};return p.mountIcon=v,p.displayName=e,p}},"../../node_modules/@vkontakte/icons/dist/es6/16/chevron_16.js":(e,o,n)=>{n.d(o,{u:()=>t});var t=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").cL)("Icon16Chevron","chevron_16","0 0 12 16",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 16" id="chevron_16"><path fill="currentColor" d="M7.227 8 3.864 4.636a.9.9 0 0 1 1.272-1.272l4 4a.9.9 0 0 1 0 1.272l-4 4a.9.9 0 0 1-1.272-1.272L7.227 8" /></symbol>',12,16,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/20/check_box_off_20.js":(e,o,n)=>{n.d(o,{A:()=>t});var t=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").cL)("Icon20CheckBoxOff","check_box_off_20","0 0 20 20",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" id="check_box_off_20"><path fill="currentColor" fill-rule="evenodd" d="M4.046 2.534C4.788 2.138 5.517 2 7.128 2h5.744c1.61 0 2.34.138 3.082.534.65.348 1.164.862 1.512 1.512.396.742.534 1.471.534 3.082v5.744c0 1.61-.138 2.34-.534 3.082a3.644 3.644 0 0 1-1.512 1.512c-.742.396-1.472.534-3.082.534H7.128c-1.61 0-2.34-.138-3.082-.534a3.644 3.644 0 0 1-1.512-1.512C2.138 15.212 2 14.482 2 12.872V7.128c0-1.61.138-2.34.534-3.082a3.645 3.645 0 0 1 1.512-1.512m3.082.966c-1.531 0-1.962.136-2.374.357a2.145 2.145 0 0 0-.897.897c-.22.412-.357.843-.357 2.374v5.744c0 1.531.136 1.962.357 2.374.208.389.508.69.897.897.412.22.843.357 2.374.357h5.744c1.531 0 1.962-.136 2.374-.357.389-.208.69-.508.897-.897.22-.412.357-.843.357-2.374V7.128c0-1.531-.136-1.962-.357-2.374a2.145 2.145 0 0 0-.897-.897c-.412-.22-.843-.357-2.374-.357H7.128" clip-rule="evenodd" /></symbol>',20,20,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/20/check_box_on_20.js":(e,o,n)=>{n.d(o,{k:()=>t});var t=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").cL)("Icon20CheckBoxOn","check_box_on_20","0 0 20 20",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" id="check_box_on_20"><path fill="currentColor" fill-rule="evenodd" d="M2.436 4.184C2 5.04 2 6.16 2 8.4v3.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748C5.04 18 6.16 18 8.4 18h3.2c2.24 0 3.36 0 4.216-.436a4 4 0 0 0 1.748-1.748C18 14.96 18 13.84 18 11.6V8.4c0-2.24 0-3.36-.436-4.216a4 4 0 0 0-1.748-1.748C14.96 2 13.84 2 11.6 2H8.4c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748m12.2 3.803a.9.9 0 1 0-1.272-1.274l-4.673 4.665-2.055-2.052A.9.9 0 0 0 5.364 10.6l2.691 2.687a.9.9 0 0 0 1.272 0l5.309-5.3" clip-rule="evenodd" /></symbol>',20,20,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/24/arrow_left_outline_24.js":(e,o,n)=>{n.d(o,{k:()=>t});var t=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").cL)("Icon24ArrowLeftOutline","arrow_left_outline_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="arrow_left_outline_24"><path fill="currentColor" d="M11.532 4.26a.9.9 0 0 1 .089 1.18l-.08.092L6.05 11.1H20.1a.9.9 0 0 1 .113 1.793l-.113.007H6.05l5.49 5.568a.9.9 0 0 1 .073 1.181l-.081.092a.9.9 0 0 1-1.181.072l-.092-.081-7-7.1a.9.9 0 0 1-.08-1.172l.08-.092 7-7.1a.9.9 0 0 1 1.273-.009" /></symbol>',24,24,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/24/cancel_24.js":(e,o,n)=>{n.d(o,{K:()=>t});var t=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").cL)("Icon24Cancel","cancel_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" id="cancel_24"><path d="M7.536 6.264a.9.9 0 0 0-1.272 1.272L10.727 12l-4.463 4.464a.9.9 0 0 0 1.272 1.272L12 13.273l4.464 4.463a.9.9 0 1 0 1.272-1.272L13.273 12l4.463-4.464a.9.9 0 1 0-1.272-1.272L12 10.727z" /></symbol>',24,24,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/24/check_box_off_24.js":(e,o,n)=>{n.d(o,{M:()=>t});var t=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").cL)("Icon24CheckBoxOff","check_box_off_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="check_box_off_24"><path fill="currentColor" d="M16.872 2c1.783 0 2.43.186 3.082.534.651.349 1.163.86 1.512 1.512S22 5.345 22 7.128v9.744c0 1.783-.186 2.43-.534 3.082a3.635 3.635 0 0 1-1.512 1.512c-.652.348-1.299.534-3.082.534H7.128c-1.783 0-2.43-.186-3.082-.534s-1.163-.86-1.512-1.512C2.186 19.302 2 18.655 2 16.872V7.128c0-1.783.186-2.43.534-3.082a3.635 3.635 0 0 1 1.512-1.512C4.698 2.186 5.345 2 7.128 2zm.564 2H6.564c-.892 0-1.215.093-1.54.267-.327.174-.583.43-.757.756-.174.326-.267.65-.267 1.54v10.873c0 .892.093 1.215.267 1.54.174.327.43.583.756.757.326.174.65.267 1.54.267h10.873c.892 0 1.215-.093 1.54-.267.327-.174.583-.43.757-.756.174-.326.267-.65.267-1.54V6.563c0-.892-.093-1.215-.267-1.54a1.817 1.817 0 0 0-.756-.757c-.326-.174-.65-.267-1.54-.267z" /></symbol>',24,24,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/24/check_box_on_24.js":(e,o,n)=>{n.d(o,{O:()=>t});var t=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").cL)("Icon24CheckBoxOn","check_box_on_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="check_box_on_24"><path fill="currentColor" fill-rule="evenodd" d="M2.436 4.184C2 5.04 2 6.16 2 8.4v7.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748C5.04 22 6.16 22 8.4 22h7.2c2.24 0 3.36 0 4.216-.436a4 4 0 0 0 1.748-1.748C22 18.96 22 17.84 22 15.6V8.4c0-2.24 0-3.36-.436-4.216a4 4 0 0 0-1.748-1.748C18.96 2 17.84 2 15.6 2H8.4c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748zm15.771 5.023a1 1 0 0 0-1.414-1.414L10 14.586l-2.793-2.793a1 1 0 0 0-1.414 1.414l3.5 3.5a1 1 0 0 0 1.414 0z" clip-rule="evenodd" /></symbol>',24,24,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/24/check_circle_off_24.js":(e,o,n)=>{n.d(o,{S:()=>t});var t=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").cL)("Icon24CheckCircleOff","check_circle_off_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="check_circle_off_24"><path fill="currentColor" d="M12 0c6.629 0 12 5.373 12 12 0 6.629-5.373 12-12 12-6.629 0-12-5.373-12-12C0 5.371 5.373 0 12 0m0 1.5C6.2 1.5 1.5 6.2 1.5 12S6.2 22.5 12 22.5 22.5 17.8 22.5 12 17.8 1.5 12 1.5" /></symbol>',24,24,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/24/check_circle_on_24.js":(e,o,n)=>{n.d(o,{K:()=>t});var t=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").cL)("Icon24CheckCircleOn","check_circle_on_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="check_circle_on_24"><path fill="currentColor" fill-rule="evenodd" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12m6.207-14.793a1 1 0 0 0-1.414-1.414L10 14.586l-2.793-2.793a1 1 0 0 0-1.414 1.414l3.5 3.5a1 1 0 0 0 1.414 0l7.5-7.5" clip-rule="evenodd" /></symbol>',24,24,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/24/chevron_compact_right_24.js":(e,o,n)=>{n.d(o,{K:()=>t});var t=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").cL)("Icon24ChevronCompactRight","chevron_compact_right_24","0 0 16 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 24" id="chevron_compact_right_24"><path fill="currentColor" d="M4.706 7.706a1 1 0 0 1 0-1.412l.088-.088a.997.997 0 0 1 1.414.002l5.084 5.084a.998.998 0 0 1 0 1.416l-5.084 5.084a1.002 1.002 0 0 1-1.414.002l-.088-.088a.995.995 0 0 1 0-1.412L9 12z" /></symbol>',16,24,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/24/chevron_left_outline_24.js":(e,o,n)=>{n.d(o,{I:()=>t});var t=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").cL)("Icon24ChevronLeftOutline","chevron_left_outline_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" id="chevron_left_outline_24"><path d="m8.414 12 7.293 7.293a1 1 0 0 1-1.414 1.414l-8-8a1 1 0 0 1 0-1.414l8-8a1 1 0 1 1 1.414 1.414z" /></symbol>',24,24,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/24/reorder_24.js":(e,o,n)=>{n.d(o,{K:()=>t});var t=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").cL)("Icon24Reorder","reorder_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="reorder_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path fill="currentColor" fill-rule="nonzero" d="M21 18a1 1 0 0 1-1 1H4a1 1 0 0 1 0-2h16a1 1 0 0 1 1 1m0-4a1 1 0 0 1-1 1H4a1 1 0 0 1 0-2h16a1 1 0 0 1 1 1m0-4a1 1 0 0 1-1 1H4a1 1 0 0 1 0-2h16a1 1 0 0 1 1 1M3 6a1 1 0 0 1 1-1h16a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1" /></g></symbol>',24,24,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/24/reorder_ios_24.js":(e,o,n)=>{n.d(o,{M:()=>t});var t=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").cL)("Icon24ReorderIos","reorder_ios_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="reorder_ios_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" opacity=".1" /><path fill="currentColor" fill-rule="nonzero" d="M2.75 7h18.5a.75.75 0 1 1 0 1.5H2.75a.75.75 0 0 1 0-1.5m0 4h18.5a.75.75 0 1 1 0 1.5H2.75a.75.75 0 1 1 0-1.5m0 4h18.5a.75.75 0 1 1 0 1.5H2.75a.75.75 0 1 1 0-1.5" /></g></symbol>',24,24,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/28/arrow_left_outline_28.js":(e,o,n)=>{n.d(o,{q:()=>t});var t=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").cL)("Icon28ArrowLeftOutline","arrow_left_outline_28","0 0 28 28",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="arrow_left_outline_28"><g fill="none" fill-rule="evenodd"><path d="M28 0H0v28h28z" /><path fill="currentColor" fill-rule="nonzero" d="M12.293 6.293a1 1 0 0 1 1.414 1.414L8.414 13H22a1 1 0 0 1 .993.883L23 14a1 1 0 0 1-1 1H8.414l5.293 5.293a1 1 0 0 1 .083 1.32l-.083.094a1 1 0 0 1-1.414 0l-7-7-.073-.082A1.005 1.005 0 0 1 5 14l.004.09A1.006 1.006 0 0 1 5 14.02V14a1.02 1.02 0 0 1 .125-.484.878.878 0 0 1 .071-.111.999.999 0 0 1 .097-.112l-.08.09c.025-.031.051-.062.08-.09Z" /></g></symbol>',28,28,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/28/chevron_back_28.js":(e,o,n)=>{n.d(o,{A:()=>t});var t=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").cL)("Icon28ChevronBack","chevron_back_28","0 0 20 28",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 28" id="chevron_back_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h20v28H0z" /><path fill="currentColor" d="M4.56 12.94 13 4.5a1.414 1.414 0 0 1 2 2L7.5 14l7.5 7.5a1.414 1.414 0 0 1-2 2l-8.44-8.44a1.5 1.5 0 0 1 0-2.12" /></g></symbol>',20,28,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/28/chevron_left_outline_28.js":(e,o,n)=>{n.d(o,{C:()=>t});var t=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").cL)("Icon28ChevronLeftOutline","chevron_left_outline_28","0 0 28 28",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" id="chevron_left_outline_28"><path fill="currentColor" d="m12.414 14 5.793-5.793a1 1 0 0 0-1.414-1.414l-6.5 6.5a1 1 0 0 0 0 1.414l6.5 6.5a1 1 0 0 0 1.414-1.414z" /></symbol>',28,28,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/28/users_outline_28.js":(e,o,n)=>{n.d(o,{c:()=>t});var t=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").cL)("Icon28UsersOutline","users_outline_28","0 0 28 28",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="users_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path fill="currentColor" fill-rule="nonzero" d="M9 15c3.997 0 7.5 1.542 7.5 4.929 0 1.774-.69 2.571-2.147 2.571H3.647c-1.458 0-2.147-.797-2.147-2.571C1.5 16.542 5.003 15 9 15m10.5 0c3.997 0 7.5 1.542 7.5 4.929 0 1.774-.69 2.571-2.147 2.571H19a1 1 0 0 1 0-2h5.913a.83.83 0 0 1 .042.002l.013.001.002-.015c.01-.081.024-.22.029-.427l.001-.132C25 18.095 22.513 17 19.5 17c-.428 0-.898.03-1.37.09a1 1 0 1 1-.256-1.983A12.87 12.87 0 0 1 19.5 15M9 17c-3.013 0-5.5 1.095-5.5 2.929 0 .28.017.462.03.56l.001.014.014-.001.019-.001h10.891l.013.002.002-.015c.013-.097.03-.28.03-.56C14.5 18.096 12.013 17 9 17M19.5 5a4.25 4.25 0 0 1 4.25 4.25 4.25 4.25 0 0 1-4.25 4.25 4.25 4.25 0 0 1-4.25-4.25A4.25 4.25 0 0 1 19.5 5M9 5a4.25 4.25 0 0 1 4.25 4.25A4.25 4.25 0 0 1 9 13.5a4.25 4.25 0 0 1-4.25-4.25A4.25 4.25 0 0 1 9 5m10.5 2a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 1 0 0-4.5M9 7a2.25 2.25 0 1 0 0 4.5A2.25 2.25 0 1 0 9 7" /></g></symbol>',28,28,!1,void 0)}}]);