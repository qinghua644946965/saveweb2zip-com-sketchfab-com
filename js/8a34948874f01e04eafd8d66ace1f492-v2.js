"use strict";(self.webpackChunksketchfab=self.webpackChunksketchfab||[]).push([[1465],{"7txH":(e,t,r)=>{r.d(t,{Z:()=>c});var o,n=r("MQQR"),a=[{type:"VERTEX_SHADER",text:["attribute vec3 aPosition;","void main() {","gl_Position = vec4(aPosition, 1.0);","}"].join("\n")},{type:"FRAGMENT_SHADER",text:["#version 100","#ifdef GL_FRAGMENT_PRECISION_HIGH","  precision highp float;","#else"," precision mediump float;","#endif","uniform sampler2D uT0;","uniform sampler2D uT1;","uniform sampler2D uT2;","uniform sampler2D uT3;","uniform ivec4 uR;","varying vec2 vT;","varying vec3 vC;","varying vec3 vColor;","varying vec4 vColor2;","void f(in vec3 a, out vec3 b) {","b = 2.0 * a;","}","#define LIN_SRGB(x) x < 0.0031308 ? x * 12.92 : 1.055 * pow(x, 1.0/2.4) - 0.055","#define SRGB_LIN(x) x < 0.04045 ? x * (1.0 / 12.92) : pow((x + 0.055) * (1.0 / 1.055), 2.4)","float linearTosRGB(const in float color) { return LIN_SRGB(color); }","vec3 linearTosRGB(const in vec3 color) { return vec3(LIN_SRGB(color.r), LIN_SRGB(color.g), LIN_SRGB(color.b)); }","vec4 linearTosRGB(const in vec4 color) { return vec4(LIN_SRGB(color.r), LIN_SRGB(color.g), LIN_SRGB(color.b), color.a); }","void main(void) {","vec4 col;","col.r = linearTosRGB(vColor2.r);","col.rgb = linearTosRGB(vColor);","f(vC, col.xyz);","if ( uR.x == 3 ) {","  col.rgb = texture2D( uT0, vT ).aaa;","  col.a = uR.y == 0 ? texture2D( uT1, vT ).r : texture2D( uT1, vT ).a;","} else if ( uR.x == 2 ) {","  col.rgb = texture2D( uT0, vT ).rgb;","  col.a = uR.y == 0 ? texture2D( uT1, vT ).r : texture2D( uT1, vT ).a;","} else {","  col.r = uR.x == 0 ? texture2D( uT0, vT ).r : texture2D( uT0, vT ).a;","  col.g = uR.y == 0 ? texture2D( uT1, vT ).r : texture2D( uT1, vT ).a;","  col.b = uR.z == 0 ? texture2D( uT2, vT ).r : texture2D( uT2, vT ).a;","  col.a = uR.w == 0 ? texture2D( uT3, vT ).r : texture2D( uT3, vT ).a;","}","gl_FragColor = gl_FrontFacing ? vec4(col.rgb, 1.0) : col;","}"].join("\n")}];function i(e){var t=e&&e.getExtension("WEBGL_lose_context");return t&&t.loseContext(),!0}function c(){if(void 0!==window.sketchfabWebGLSupport)return window.sketchfabWebGLSupport;if(o=!1,window.sketchfabWebGLSupport=o,!window.Set||!window.Map||!window.Uint8ClampedArray)return!1;var e=null;try{var t=["webgl","experimental-webgl"],r={antialias:!1},c=document.createElement("canvas");if(!c||!c.getContext)return!1;for(var l=0;l<t.length&&!(e=c.getContext(t[l],r));l++);if(!(e&&e.getParameter&&e.getExtension&&e.getShaderPrecisionFormat))return i(e)&&!1;var s=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS);if(!s||s<64)return i(e)&&!1;var u=e.getParameter(e.MAX_VARYING_VECTORS);if(!u||u<8)return i(e)&&!1;var d=e.getExtension("WEBGL_debug_renderer_info");if(d&&-1!==e.getParameter(d.UNMASKED_RENDERER_WEBGL).indexOf("SwiftShader")&&!(0,n.Z)().allowSwiftShader)return i(e)&&!1;o=a.every((function(t){return function(e,t,r){var o=t;"string"==typeof o&&(o=e[t]);var n=e.createShader(o);return e.shaderSource(n,r),e.compileShader(n),!(!e.getShaderParameter(n,e.COMPILE_STATUS)&&!e.isContextLost()&&(console.warn("Could't compile shader "+r),console.warn(e.getShaderInfoLog(n)),console.warn("You may want to consider a browser that fully supports WebGL."),1))}(e,t.type,t.text)})),i(e)}catch(t){return i(e)&&!1}return window.sketchfabWebGLSupport=o,o}},g6dK:(e,t,r)=>{r.d(t,{Z:()=>a});r("rFQh");var o=r("lotc"),n=r("KDlt");const a=r("7e5f").Z.extend({displayName:"MessagePopup",optionTypes:{title:o.Z.string.isRequired,text:o.Z.string.isRequired,buttons:o.Z.shape({cancel:o.Z.bool,cancelClass:o.Z.string,cancelLabel:o.Z.string,close:o.Z.bool,closeClass:o.Z.string,closeLabel:o.Z.string,continue:o.Z.bool,continueClass:o.Z.string,continueLabel:o.Z.string,ok:o.Z.bool,okClass:o.Z.string,okLabel:o.Z.string,delete:o.Z.bool,deleteClass:o.Z.string,deleteLabel:o.Z.string}),popupClass:o.Z.string,safe:o.Z.bool,popupClosable:o.Z.bool,shouldRejectOnCancel:o.Z.bool},defaultOptions:{shouldRejectOnCancel:!0},events:{"reset form":"cancel","submit form":"continue"},template:function(){return n.Z.get("front/popups/message",{title:this.options.title,text:this.options.text,buttons:this.options.buttons,safe:this.options.safe,popupClass:this.options.popupClass,popupClosable:this.options.popupClosable})}})},olZw:(e,t,r)=>{r.d(t,{S:()=>o});var o=function(e){var t=e.dataset.uri||"",r=new Image;r.classList.add("lazyloaded"),r.onload=r.onerror=function(){var t=e.offsetWidth,o=r.naturalWidth>t?r.naturalHeight*(t/r.naturalWidth):r.naturalHeight;t?(["transitionend","webkittransitionend","moztransitionend"].forEach((function(t){return e.addEventListener(t,(function(){return e.replaceWith(r)}))}),{once:!0}),o!==e.offsetHeight?e.style.minHeight="".concat(o,"px"):e.classList.add("loaded")):e.replaceWith(r)},r.src=t}},KGKI:(e,t,r)=>{r.d(t,{Z:()=>s});var o=r("D4hk"),n=r("sQwH"),a=r("3MRe"),i=r("3Z9q"),c=r("X40V"),l=["onChange","value","name","disabled","className","data-selenium","checked","children"];const s=function(e){var t=e.onChange,r=e.value,s=e.name,u=void 0===s?"":s,d=e.disabled,f=void 0!==d&&d,p=e.className,v=e["data-selenium"],b=e.checked,m=void 0===b?r:b,g=e.children,h=(0,a.Z)(e,l);return i.createElement("div",(0,o.Z)({onClick:function(e){f||(e.preventDefault(),t(!r))},className:(0,c.AK)(p,"form-onoff-wrapper",{"--checked":m}),"data-selenium":"switch-".concat(v)},h),(0,n.Z)("input",{className:"form-onoff",type:"checkbox","data-ref":"input",checked:m,onChange:function(e){return t(e.target.checked)}}),(0,n.Z)("label",{className:(0,c.AK)({"form-onoff-actor":!0,disabled:f}),htmlFor:u}),(0,n.Z)("div",{className:(0,c.AK)("form-onoff__label",{"--disabled":f})},void 0,g))}},"e+fc":(e,t,r)=>{r.d(t,{I:()=>b,Z:()=>h});var o=r("xKIK"),n=r("3Z9q"),a=r("mSEu"),i=r("wHg8"),c=r("Fnsp"),l=r("X40V"),s=r("zIYZ"),u=r("JBVY"),d=r("iu9k"),f=r("a261");function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var b="viewer/inspector/toggle",m={convertVertexColor8Bit:"convert_vertex_color_8bit",debug3D:"debug3d",materialF0:"material_f0",shadowPCF:"shadow_PCF",webgl2:"webgl2"};function g(e,t){var r=e.model,o=e.versionUid,p=e.defaultOptions,g=void 0===p?a.Z.defaultInternalEmbedOptions:p,h=e.embedOptions,w=void 0===h?a.Z.defaultInternalEmbedOptions:h,x=e.isInspectorOpen,R=void 0!==x&&x,T=e.className,_=n.useRef(null),Z=o?new URL(r.embedUrl).origin+(0,d.HQ)("models:embed_specific_version",{model_id:r.uid,version_uid:o}):r.embedUrl,C=n.useRef(!0);n.useEffect((function(){var e=_.current;if(e&&e.contentWindow){e.focus();var t=function(e){document.body.dispatchEvent(new KeyboardEvent("keydown",e))};return e.contentWindow.addEventListener("keydown",t),function(){e.contentWindow&&e.contentWindow.removeEventListener("keydown",t)}}}),[]),n.useEffect((function(){var e=_.current;e&&e.contentWindow&&e.contentWindow.postMessage(b,"*")}),[R]);var E=Z+function(e,t){return(0,u.cA)("?",v(v({},e),(0,s.m_)((0,i.Z)(t,(function(e,t){return m[t]||(0,c.Z)(t)})),(function(e,t){return f[t]&&f[t].defaultValue!==e}))))}(g,w);return n.useEffect((function(){if(C.current)C.current=!1;else{var e=_.current;if(e){var t=e.parentElement;t&&t.removeChild(e),requestAnimationFrame((function(){return t&&t.appendChild(e)}))}}}),[E]),n.createElement("div",{className:(0,l.AK)("c-viewer",T),ref:t},n.createElement("iframe",{title:r.name+" 3D model - Sketchfab",ref:_,className:"c-viewer__iframe",src:E,id:"api-frame",allow:"autoplay; fullscreen; xr-spatial-tracking","xr-spatial-tracking":"true","execution-while-out-of-viewport":"true","execution-while-not-rendered":"true","web-share":"true",allowFullScreen:!0}))}const h=n.forwardRef(g)}}]);