/*! For license information please see 4.ba45a808.chunk.js.LICENSE.txt */
(this.webpackJsonpsonderblu=this.webpackJsonpsonderblu||[]).push([[4],{40:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var s=r.apply(null,a);s&&e.push(s)}else if("object"===o)for(var c in a)n.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},41:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return l}));var a,r=n(8),o=n.n(r);function s(e,t){return void 0===e&&(e=""),void 0===t&&(t=a),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}var c="object"===typeof window&&window.Element||function(){};o.a.oneOfType([o.a.string,o.a.func,function(e,t,n){if(!(e[t]instanceof c))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")},o.a.shape({current:o.a.any})]);var i=o.a.oneOfType([o.a.func,o.a.string,o.a.shape({$$typeof:o.a.symbol,render:o.a.func}),o.a.arrayOf(o.a.oneOfType([o.a.func,o.a.string,o.a.shape({$$typeof:o.a.symbol,render:o.a.func})]))]);"undefined"===typeof window||!window.document||window.document.createElement;function l(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}},44:function(e,t,n){"use strict";function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],a=!0,r=!1,o=void 0;try{for(var s,c=e[Symbol.iterator]();!(a=(s=c.next()).done)&&(n.push(s.value),!t||n.length!==t);a=!0);}catch(i){r=!0,o=i}finally{try{a||null==c.return||c.return()}finally{if(r)throw o}}return n}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(t,"a",(function(){return a}))},47:function(e,t,n){"use strict";var a=n(1),r=n(2),o=n(0),s=n.n(o),c=n(8),i=n.n(c),l=n(40),u=n.n(l),f=n(41),d={tag:f.c,fluid:i.a.oneOfType([i.a.bool,i.a.string]),className:i.a.string,cssModule:i.a.object},m=function(e){var t=e.className,n=e.cssModule,o=e.fluid,c=e.tag,i=Object(r.a)(e,["className","cssModule","fluid","tag"]),l="container";!0===o?l="container-fluid":o&&(l="container-"+o);var d=Object(f.b)(u()(t,l),n);return s.a.createElement(c,Object(a.a)({},i,{className:d}))};m.propTypes=d,m.defaultProps={tag:"div"},t.a=m},48:function(e,t,n){"use strict";var a=n(1),r=n(2),o=n(0),s=n.n(o),c=n(8),i=n.n(c),l=n(40),u=n.n(l),f=n(41),d=i.a.oneOfType([i.a.number,i.a.string]),m={tag:f.c,noGutters:i.a.bool,className:i.a.string,cssModule:i.a.object,form:i.a.bool,xs:d,sm:d,md:d,lg:d,xl:d},p={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e){var t=e.className,n=e.cssModule,o=e.noGutters,c=e.tag,i=e.form,l=e.widths,d=Object(r.a)(e,["className","cssModule","noGutters","tag","form","widths"]),m=[];l.forEach((function(t,n){var a=e[t];if(delete d[t],a){var r=!n;m.push(r?"row-cols-"+a:"row-cols-"+t+"-"+a)}}));var p=Object(f.b)(u()(t,o?"no-gutters":null,i?"form-row":"row",m),n);return s.a.createElement(c,Object(a.a)({},d,{className:p}))};g.propTypes=m,g.defaultProps=p,t.a=g},49:function(e,t,n){"use strict";var a=n(1),r=n(2),o=n(0),s=n.n(o),c=n(8),i=n.n(c),l=n(40),u=n.n(l),f=n(41),d=i.a.oneOfType([i.a.number,i.a.string]),m=i.a.oneOfType([i.a.bool,i.a.number,i.a.string,i.a.shape({size:i.a.oneOfType([i.a.bool,i.a.number,i.a.string]),order:d,offset:d})]),p={tag:f.c,xs:m,sm:m,md:m,lg:m,xl:m,className:i.a.string,cssModule:i.a.object,widths:i.a.array},g={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e,t,n){return!0===n||""===n?e?"col":"col-"+t:"auto"===n?e?"col-auto":"col-"+t+"-auto":e?"col-"+n:"col-"+t+"-"+n},v=function(e){var t=e.className,n=e.cssModule,o=e.widths,c=e.tag,i=Object(r.a)(e,["className","cssModule","widths","tag"]),l=[];o.forEach((function(t,a){var r=e[t];if(delete i[t],r||""===r){var o=!a;if(Object(f.a)(r)){var s,c=o?"-":"-"+t+"-",d=b(o,t,r.size);l.push(Object(f.b)(u()(((s={})[d]=r.size||""===r.size,s["order"+c+r.order]=r.order||0===r.order,s["offset"+c+r.offset]=r.offset||0===r.offset,s)),n))}else{var m=b(o,t,r);l.push(m)}}})),l.length||l.push("col");var d=Object(f.b)(u()(t,l),n);return s.a.createElement(c,Object(a.a)({},i,{className:d}))};v.propTypes=p,v.defaultProps=g,t.a=v},56:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var a=n(44),r=n(0),o=n.n(r),s=n(47),c=n(48),i=n(49),l=n(14);n(56);function u(e){var t=Object(r.useState)(window.innerWidth),n=Object(a.a)(t,2),u=n[0],f=n[1],d=Object(r.useState)("60%"),m=Object(a.a)(d,2),p=m[0],g=m[1];return Object(r.useLayoutEffect)((function(){function e(){f(window.innerWidth),g(window.innerWidth<=768?"90%":"60%")}window.addEventListener("resize",e),window.innerWidth<=768&&e()}),[]),o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,{fluid:!0,className:"RESET_PASSWORD_CONTAINER"},o.a.createElement(c.a,null,o.a.createElement(i.a,{className:"MOBILE_TITLE d-flex d-md-none"},o.a.createElement("img",{src:"img/Logo.png",className:"img-fluid",alt:""})),o.a.createElement(i.a,{md:6,className:"COVER_TITLE"},o.a.createElement("img",{src:"img/".concat(u<=786?"mobileCover@3x":"LoginImg@3x",".png"),alt:""})),o.a.createElement(i.a,{md:6,className:"LOGIN_FORM"},o.a.createElement("div",{style:{width:p},className:"d-flex flex-column justify-content-center align-items-center"},o.a.createElement("img",{src:"img/Logo.png",className:"d-md-inline d-none",alt:""}),o.a.createElement("h5",{className:"mt-3 m-md-0"},"Password Reset"),o.a.createElement("span",null,"We\u2019ve sent you an email with password recovery instructions. Use the 6-digit recovery code here or use the recovery link in your email."),o.a.createElement("form",{onSubmit:function(e){e.preventDefault()}},o.a.createElement("button",null,o.a.createElement(l.b,{to:"/login"},"Back To Login")),o.a.createElement(l.b,{to:"/signup"},"Don\u2019t have an account? Sign up")))))))}u.whyDidYouRender=!0,t.default=u}}]);
//# sourceMappingURL=4.ba45a808.chunk.js.map