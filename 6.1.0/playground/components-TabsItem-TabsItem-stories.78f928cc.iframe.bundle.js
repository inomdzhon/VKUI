"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[2888],{"../../node_modules/@swc/helpers/esm/_object_without_properties.js":(e,t,n)=>{n.d(t,{_:()=>o});function o(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}},"../../node_modules/@vkontakte/icons-sprite/dist/index.js":(e,t,n)=>{n.d(t,{cL:()=>k});var o,i=n("../../node_modules/@swc/helpers/esm/_object_spread.js"),s=n("../../node_modules/@swc/helpers/esm/_object_spread_props.js"),d=n("../../node_modules/@swc/helpers/esm/_object_without_properties.js"),c=n("../../node_modules/react/index.js"),l=n("../../node_modules/@swc/helpers/esm/_class_call_check.js"),r=n("../../node_modules/@swc/helpers/esm/_create_class.js"),a=n("../../node_modules/@swc/helpers/esm/_define_property.js"),u=function(){function e(t){var n,o,i=t.content;(0,l._)(this,e),(0,a._)(this,"isMounted",!1),(0,a._)(this,"node",void 0),this.node=(n=!!document.importNode,o=new DOMParser().parseFromString(i,"image/svg+xml").documentElement,n?document.importNode(o,!0):o)}return(0,r._)(e,[{key:"id",get:function(){return this.node.id}},{key:"mount",value:function(e){return this.isMounted||(this.isMounted=!0,e.appendChild(this.node)),this.node}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&(this.node.parentNode.removeChild(this.node),this.isMounted=!1)}}],[{key:"createFromExistingNode",value:function(t){var n=new e({content:""});return n.node=t,n}}]),e}(),h="http://www.w3.org/2000/svg",v=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,l._)(this,e),(0,a._)(this,"symbols",new Map),(0,a._)(this,"config",{attrs:{xmlns:h,"xmlns:xlink":"http://www.w3.org/1999/xlink",style:"position:absolute;width:0;height:0","aria-hidden":"true"}}),(0,a._)(this,"node",null),Object.assign(this.config.attrs,t.attrs)}return(0,r._)(e,[{key:"push",value:function(e){var t=this.symbols,n=t.has(e.id);return t.set(e.id,e),!n}},{key:"add",value:function(e){var t=this.push(e);return this.node&&t&&e.mount(this.node),t}},{key:"attach",value:function(e){var t=this;this.node||(this.node=e,this.symbols.forEach(function(t){t.mount(e)}),e.querySelectorAll("symbol").forEach(function(e){var n=u.createFromExistingNode(e);t.add(n)}))}},{key:"mount",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.node||(this.node=this.render(),t&&e.childNodes[0]?e.insertBefore(this.node,e.firstChild):e.appendChild(this.node)),this.node}},{key:"render",value:function(){var e=document.createElementNS(h,"svg");return Object.entries(this.config.attrs).forEach(function(t){return e.setAttribute(t[0],t[1])}),this.symbols.forEach(function(t){return e.appendChild(t.node)}),e}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&this.node.parentNode.removeChild(this.node)}}]),e}(),m=!!("undefined"!=typeof window&&window.document&&window.document.createElement);if(m){var _="__SVG_SPRITE_NODE__";o=new v({attrs:{id:_}});var w=function(){var e=document.getElementById(_);e?o.attach(e):o.mount(document.body),document.removeEventListener("DOMContentLoaded",w)};document.querySelector("body")?w():document.addEventListener("DOMContentLoaded",w)}else o=null;var p=m?c.useLayoutEffect:c.useEffect,f=function(e){var t=e.width,n=void 0===t?0:t,o=e.height,l=void 0===o?0:o,r=e.viewBox,a=e.id,u=e.className,h=e.fill,v=e.getRootRef,m=e.style,_=e.title,w=e.children,p=(0,d._)(e,["width","height","viewBox","id","className","fill","getRootRef","style","title","children"]),f=Math.max(n,l),k=(0,i._)({width:n,height:l},void 0===m?{}:m);return c.createElement("svg",(0,s._)((0,i._)({"aria-hidden":"true",display:"block"},p),{className:["vkuiIcon","vkuiIcon--".concat(f),"vkuiIcon--w-".concat(n),"vkuiIcon--h-".concat(l),"vkuiIcon--".concat(a),void 0===u?"":u].join(" ").trim(),viewBox:r,width:n,height:l,style:k,ref:v}),_&&c.createElement("title",null,_),c.createElement("use",{xlinkHref:"#".concat(a),style:{fill:"currentColor",color:h}},w))};function k(e,t,n,d,l,r,a,h){var v,m=function(){if(!_){var e;e=new u({content:d}),o&&o.add(e),_=!0}},_=!1,w=(v={},function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warn";v[t]||(console[n]("[@vkontakte/icons][".concat(e,"] ").concat(t)),v[t]=!0)}),k=function(e){return p(m,[]),a&&w("Иконка устарела"+(h?". Замените на ".concat(h):"")),c.createElement(f,(0,s._)((0,i._)({},e),{viewBox:n,id:t,width:void 0===e.width||isNaN(e.width)?l:+e.width,height:void 0===e.height||isNaN(e.height)?r:+e.height}))};return k.mountIcon=m,k.displayName=e,k}},"../../node_modules/@vkontakte/icons/dist/es6/16/dropdown_16.js":(e,t,n)=>{n.d(t,{a:()=>o});var o=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").cL)("Icon16Dropdown","dropdown_16","0 0 16 12",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12" id="dropdown_16"><path fill="currentColor" d="M4.454 3.691a.9.9 0 0 0-1.108 1.418l4.096 3.203a.9.9 0 0 0 1.109 0l4.1-3.203a.9.9 0 1 0-1.109-1.418L7.997 6.46l-3.543-2.77Z" /></symbol>',16,12,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/20/newsfeed_outline_20.js":(e,t,n)=>{n.d(t,{A:()=>o});var o=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").cL)("Icon20NewsfeedOutline","newsfeed_outline_20","0 0 20 20",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" id="newsfeed_outline_20"><path fill="currentColor" fill-rule="evenodd" d="M11.843 2H8.156c-.924 0-1.664 0-2.261.049-.614.05-1.143.155-1.63.403a4.15 4.15 0 0 0-1.814 1.814c-.248.487-.353 1.016-.403 1.63C2 6.493 2 7.233 2 8.157v3.686c0 .924 0 1.664.049 2.261.05.613.155 1.143.403 1.63a4.15 4.15 0 0 0 1.814 1.814c.487.248 1.016.353 1.63.403C6.493 18 7.233 18 8.157 18h3.685c.925 0 1.665 0 2.262-.049.613-.05 1.143-.155 1.63-.403a4.15 4.15 0 0 0 1.814-1.814c.248-.487.353-1.017.403-1.63.049-.597.049-1.337.049-2.262V8.157c0-.924 0-1.664-.049-2.261-.05-.614-.155-1.143-.403-1.63a4.15 4.15 0 0 0-1.814-1.814c-.487-.248-1.017-.353-1.63-.403C13.507 2 12.767 2 11.842 2zM4.946 3.789c.24-.123.55-.203 1.071-.245C6.548 3.5 7.226 3.5 8.19 3.5h3.62c.964 0 1.643 0 2.172.044.52.042.83.122 1.071.245.499.254.904.66 1.158 1.158.123.24.203.55.245 1.071.012.148.021.308.027.482H3.517c.006-.174.015-.334.027-.482.042-.52.122-.83.245-1.071a2.65 2.65 0 0 1 1.158-1.158M3.5 8v3.81c0 .964 0 1.643.044 2.172.042.52.122.83.245 1.071.254.499.66.904 1.158 1.158.24.123.55.203 1.071.245.53.043 1.208.044 2.172.044h3.62c.964 0 1.643 0 2.172-.044.52-.042.83-.122 1.071-.245a2.65 2.65 0 0 0 1.158-1.158c.123-.24.203-.55.245-1.071.043-.53.044-1.207.044-2.172V8z" clip-rule="evenodd" /></symbol>',20,20,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/20/picture_outline_20.js":(e,t,n)=>{n.d(t,{E:()=>o});var o=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").cL)("Icon20PictureOutline","picture_outline_20","0 0 20 20",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" id="picture_outline_20"><path fill="currentColor" fill-rule="evenodd" d="M6.838 16.437c.759.062 1.737.063 3.162.063 1.425 0 2.403-.001 3.162-.063.74-.06 1.139-.172 1.427-.318a3.5 3.5 0 0 0 1.53-1.53c.146-.288.257-.686.318-1.427.016-.194.027-.402.036-.628l-.003-.004-1.303-1.303a12.742 12.742 0 0 0-.666-.64c-.156-.133-.23-.166-.27-.179a.75.75 0 0 0-.463 0c-.04.013-.113.046-.269.179-.162.138-.36.335-.666.64L10.53 13.53a.75.75 0 0 1-1.06 0l-.303-.303a12.75 12.75 0 0 0-.666-.64c-.156-.133-.23-.166-.27-.179a.75.75 0 0 0-.463 0c-.04.013-.113.046-.269.179-.162.138-.36.335-.666.64l-2.277 2.278c.25.245.539.452.855.614.288.146.686.257 1.427.318zm9.39-6.27.272.272V10c0-1.425-.001-2.403-.063-3.162-.06-.74-.172-1.139-.318-1.427a3.5 3.5 0 0 0-1.53-1.53c-.288-.146-.686-.257-1.427-.318C12.403 3.501 11.425 3.5 10 3.5c-1.425 0-2.403.001-3.162.063-.74.06-1.139.172-1.427.318a3.5 3.5 0 0 0-1.53 1.53c-.146.288-.257.686-.318 1.427C3.501 7.597 3.5 8.575 3.5 10c0 1.425.001 2.403.063 3.162.038.463.096.793.17 1.045l2.04-2.04.02-.02c.28-.28.52-.521.736-.704.226-.192.473-.363.776-.462a2.25 2.25 0 0 1 1.39 0c.303.099.55.27.776.462.16.136.335.304.529.497l1.773-1.773.02-.02c.28-.28.52-.521.736-.704.226-.192.473-.363.776-.462a2.25 2.25 0 0 1 1.39 0c.303.099.55.27.776.462.215.183.456.424.736.703zM2.544 4.73C2 5.8 2 7.2 2 10c0 2.8 0 4.2.545 5.27a5 5 0 0 0 2.185 2.185C5.8 18 7.2 18 10 18c2.8 0 4.2 0 5.27-.545a5 5 0 0 0 2.185-2.185C18 14.2 18 12.8 18 10c0-2.8 0-4.2-.545-5.27a5 5 0 0 0-2.185-2.185C14.2 2 12.8 2 10 2c-2.8 0-4.2 0-5.27.545A5 5 0 0 0 2.545 4.73zM7.25 6a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5z" clip-rule="evenodd" /></symbol>',20,20,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/20/thumbs_up_outline_20.js":(e,t,n)=>{n.d(t,{A:()=>o});var o=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").cL)("Icon20ThumbsUpOutline","thumbs_up_outline_20","0 0 20 20",'<symbol xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" id="thumbs_up_outline_20"><path fill-rule="evenodd" d="M9.238 1.497c-.898 0-1.711.532-2.07 1.356l-1.77 4.056a7.133 7.133 0 0 0-.132.317c-.152.401-.24.823-.261 1.251C5 8.577 5 8.675 5 8.822v4.46c0 .673 0 1.223.037 1.671.037.463.118.882.317 1.273a3.25 3.25 0 0 0 1.42 1.42c.391.199.81.28 1.273.317.447.037.998.037 1.671.037h2.47c.829 0 1.433 0 1.974-.197a3.251 3.251 0 0 0 1.254-.826c.395-.42.633-.974.96-1.736l.994-2.319c.387-.902.698-1.626.89-2.218.196-.6.306-1.166.2-1.726a3.25 3.25 0 0 0-1.378-2.09c-.473-.319-1.036-.44-1.665-.498-.62-.057-1.408-.057-2.389-.057h-1.531V3.755a2.259 2.259 0 0 0-2.26-2.258Zm-.695 1.955a.759.759 0 0 1 1.454.303V6.8c0 .571.463 1.034 1.034 1.034h1.96c1.027 0 1.747.001 2.29.05.543.05.803.141.963.249.388.261.655.666.742 1.125.036.19.017.465-.152.983-.169.52-.452 1.18-.857 2.125l-.93 2.167c-.399.93-.534 1.215-.724 1.417a1.751 1.751 0 0 1-.675.445c-.26.095-.576.106-1.588.106H9.75c-.712 0-1.202 0-1.581-.032-.37-.03-.57-.085-.714-.159a1.75 1.75 0 0 1-.764-.765c-.074-.144-.13-.343-.16-.713-.03-.38-.031-.868-.031-1.581V8.84c0-.171 0-.232.003-.29.013-.27.069-.538.165-.791.02-.055.045-.11.113-.267l1.762-4.04ZM3.25 18a.75.75 0 0 0 .75-.75v-8.5a.75.75 0 0 0-1.5 0v8.5c0 .414.336.75.75.75" /></symbol>',20,20,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/20/users_outline_20.js":(e,t,n)=>{n.d(t,{k:()=>o});var o=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").cL)("Icon20UsersOutline","users_outline_20","0 0 20 20",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" id="users_outline_20"><g fill="currentColor"><g fill-rule="evenodd" clip-rule="evenodd"><path d="M6.25 3.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6m-1.5 3a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0M2.688 11.57c.96-.555 2.226-.82 3.562-.82s2.602.265 3.562.82c.977.563 1.688 1.467 1.688 2.68 0 .707-.275 1.306-.781 1.71-.484.387-1.105.54-1.719.54H3.5c-.614 0-1.235-.153-1.719-.54C1.276 15.557 1 14.958 1 14.25c0-1.213.71-2.117 1.688-2.68m.75 1.298c-.649.374-.938.845-.938 1.382 0 .293.1.444.219.54.141.113.395.21.781.21H9c.386 0 .64-.097.781-.21.12-.096.219-.247.219-.54 0-.537-.29-1.008-.937-1.382-.665-.383-1.65-.618-2.813-.618s-2.148.235-2.813.618zM13.75 3.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6m-1.5 3a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0" /></g><path d="M13.75 12.25c-.227 0-.453.011-.677.033a.75.75 0 1 1-.146-1.493c.272-.026.547-.04.823-.04 1.336 0 2.602.265 3.562.82.977.563 1.688 1.467 1.688 2.68 0 .707-.275 1.306-.781 1.71-.484.387-1.105.54-1.719.54h-3a.75.75 0 0 1 0-1.5h3c.386 0 .64-.097.782-.21.119-.096.218-.247.218-.54 0-.537-.29-1.008-.937-1.382-.665-.383-1.65-.618-2.813-.618" /></g></symbol>',20,20,!1,void 0)}}]);