(self.webpackChunkgatsby_starter_wordpress_blog=self.webpackChunkgatsby_starter_wordpress_blog||[]).push([[351],{2993:function(e){"use strict";var t=Array.isArray,n=Object.keys,r=Object.prototype.hasOwnProperty,i="undefined"!=typeof Element;function a(e,o){if(e===o)return!0;if(e&&o&&"object"==typeof e&&"object"==typeof o){var l,c,u,s=t(e),T=t(o);if(s&&T){if((c=e.length)!=o.length)return!1;for(l=c;0!=l--;)if(!a(e[l],o[l]))return!1;return!0}if(s!=T)return!1;var E=e instanceof Date,m=o instanceof Date;if(E!=m)return!1;if(E&&m)return e.getTime()==o.getTime();var f=e instanceof RegExp,d=o instanceof RegExp;if(f!=d)return!1;if(f&&d)return e.toString()==o.toString();var p=n(e);if((c=p.length)!==n(o).length)return!1;for(l=c;0!=l--;)if(!r.call(o,p[l]))return!1;if(i&&e instanceof Element&&o instanceof Element)return e===o;for(l=c;0!=l--;)if(!("_owner"===(u=p[l])&&e.$$typeof||a(e[u],o[u])))return!1;return!0}return e!=e&&o!=o}e.exports=function(e,t){try{return a(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},7701:function(e,t,n){t.ql=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=T(n(7294)),o=T(n(5697)),l=T(n(4839)),c=T(n(2993)),u=n(1640),s=n(286);function T(e){return e&&e.__esModule?e:{default:e}}function E(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var d,p,A,y=(0,l.default)(u.reducePropsToState,u.handleClientStateChange,u.mapStateOnServer)((function(){return null})),h=(d=y,A=p=function(e){function t(){return m(this,t),f(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,c.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case s.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,i=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return r({},i,((t={})[n.type]=[].concat(i[n.type]||[],[r({},a,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,i=e.child,a=e.newProps,o=e.newChildProps,l=e.nestedChildren;switch(i.type){case s.TAG_NAMES.TITLE:return r({},a,((t={})[i.type]=l,t.titleAttributes=r({},o),t));case s.TAG_NAMES.BODY:return r({},a,{bodyAttributes:r({},o)});case s.TAG_NAMES.HTML:return r({},a,{htmlAttributes:r({},o)})}return r({},a,((n={})[i.type]=r({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=r({},t);return Object.keys(e).forEach((function(t){var i;n=r({},n,((i={})[t]=e[t],i))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return a.default.Children.forEach(e,(function(e){if(e&&e.props){var i=e.props,a=i.children,o=E(i,["children"]),l=(0,u.convertReactPropstoHtmlAttributes)(o);switch(n.warnOnInvalidChildren(e,a),e.type){case s.TAG_NAMES.LINK:case s.TAG_NAMES.META:case s.TAG_NAMES.NOSCRIPT:case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:l,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:l,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=E(e,["children"]),i=r({},n);return t&&(i=this.mapChildrenToProps(t,i)),a.default.createElement(d,i)},i(t,null,[{key:"canUseDOM",set:function(e){d.canUseDOM=e}}]),t}(a.default.Component),p.propTypes={base:o.default.object,bodyAttributes:o.default.object,children:o.default.oneOfType([o.default.arrayOf(o.default.node),o.default.node]),defaultTitle:o.default.string,defer:o.default.bool,encodeSpecialCharacters:o.default.bool,htmlAttributes:o.default.object,link:o.default.arrayOf(o.default.object),meta:o.default.arrayOf(o.default.object),noscript:o.default.arrayOf(o.default.object),onChangeClientState:o.default.func,script:o.default.arrayOf(o.default.object),style:o.default.arrayOf(o.default.object),title:o.default.string,titleAttributes:o.default.object,titleTemplate:o.default.string},p.defaultProps={defer:!0,encodeSpecialCharacters:!0},p.peek=d.peek,p.rewind=function(){var e=d.rewind();return e||(e=(0,u.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},A);h.renderStatic=h.rewind,t.ql=h},286:function(e,t){t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var n=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},r=(t.VALID_TAG_NAMES=Object.keys(n).map((function(e){return n[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce((function(e,t){return e[r[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},1640:function(e,t,n){t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=c(n(7294)),o=c(n(6494)),l=n(286);function c(e){return e&&e.__esModule?e:{default:e}}var u,s=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},T=function(e){var t=p(e,l.TAG_NAMES.TITLE),n=p(e,l.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,(function(){return t}));var r=p(e,l.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},E=function(e){return p(e,l.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},m=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return i({},e,t)}),{})},f=function(e,t){return t.filter((function(e){return void 0!==e[l.TAG_NAMES.BASE]})).map((function(e){return e[l.TAG_NAMES.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),i=0;i<r.length;i++){var a=r[i].toLowerCase();if(-1!==e.indexOf(a)&&n[a])return t.concat(n)}return t}),[])},d=function(e,t,n){var i={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&S("Helmet: "+e+' should be of type "Array". Instead found type "'+r(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var r={};n.filter((function(e){for(var n=void 0,a=Object.keys(e),o=0;o<a.length;o++){var c=a[o],u=c.toLowerCase();-1===t.indexOf(u)||n===l.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||u===l.TAG_PROPERTIES.REL&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==l.TAG_PROPERTIES.INNER_HTML&&c!==l.TAG_PROPERTIES.CSS_TEXT&&c!==l.TAG_PROPERTIES.ITEM_PROP||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return i[n]||(i[n]={}),r[n]||(r[n]={}),!i[n][s]&&(r[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(r),c=0;c<a.length;c++){var u=a[c],s=(0,o.default)({},i[u],r[u]);i[u]=s}return e}),[]).reverse()},p=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},A=(u=Date.now(),function(e){var t=Date.now();t-u>16?(u=t,e(t)):setTimeout((function(){A(e)}),0)}),y=function(e){return clearTimeout(e)},h="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||A:n.g.requestAnimationFrame||A,M="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||y:n.g.cancelAnimationFrame||y,S=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},g=null,N=function(e,t){var n=e.baseTag,r=e.bodyAttributes,i=e.htmlAttributes,a=e.linkTags,o=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,T=e.styleTags,E=e.title,m=e.titleAttributes;v(l.TAG_NAMES.BODY,r),v(l.TAG_NAMES.HTML,i),I(E,m);var f={baseTag:_(l.TAG_NAMES.BASE,n),linkTags:_(l.TAG_NAMES.LINK,a),metaTags:_(l.TAG_NAMES.META,o),noscriptTags:_(l.TAG_NAMES.NOSCRIPT,c),scriptTags:_(l.TAG_NAMES.SCRIPT,s),styleTags:_(l.TAG_NAMES.STYLE,T)},d={},p={};Object.keys(f).forEach((function(e){var t=f[e],n=t.newTags,r=t.oldTags;n.length&&(d[e]=n),r.length&&(p[e]=f[e].oldTags)})),t&&t(),u(e,d,p)},b=function(e){return Array.isArray(e)?e.join(""):e},I=function(e,t){void 0!==e&&document.title!==e&&(document.title=b(e)),v(l.TAG_NAMES.TITLE,t)},v=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(l.HELMET_ATTRIBUTE),i=r?r.split(","):[],a=[].concat(i),o=Object.keys(t),c=0;c<o.length;c++){var u=o[c],s=t[u]||"";n.getAttribute(u)!==s&&n.setAttribute(u,s),-1===i.indexOf(u)&&i.push(u);var T=a.indexOf(u);-1!==T&&a.splice(T,1)}for(var E=a.length-1;E>=0;E--)n.removeAttribute(a[E]);i.length===a.length?n.removeAttribute(l.HELMET_ATTRIBUTE):n.getAttribute(l.HELMET_ATTRIBUTE)!==o.join(",")&&n.setAttribute(l.HELMET_ATTRIBUTE,o.join(","))}},_=function(e,t){var n=document.head||document.querySelector(l.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+l.HELMET_ATTRIBUTE+"]"),i=Array.prototype.slice.call(r),a=[],o=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===l.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===l.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(l.HELMET_ATTRIBUTE,"true"),i.some((function(e,t){return o=t,n.isEqualNode(e)}))?i.splice(o,1):a.push(n)})),i.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return n.appendChild(e)})),{oldTags:i,newTags:a}},w=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},L=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[l.REACT_TAG_MAP[n]||n]=e[n],t}),t)},C=function(e,t,n){switch(e){case l.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[l.HELMET_ATTRIBUTE]=!0,i=L(n,r),[a.default.createElement(l.TAG_NAMES.TITLE,i,e)];var e,n,r,i},toString:function(){return function(e,t,n,r){var i=w(n),a=b(t);return i?"<"+e+" "+l.HELMET_ATTRIBUTE+'="true" '+i+">"+s(a,r)+"</"+e+">":"<"+e+" "+l.HELMET_ATTRIBUTE+'="true">'+s(a,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case l.ATTRIBUTE_NAMES.BODY:case l.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return L(t)},toString:function(){return w(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,i=((r={key:n})[l.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach((function(e){var n=l.REACT_TAG_MAP[e]||e;if(n===l.TAG_PROPERTIES.INNER_HTML||n===l.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:r}}else i[n]=t[e]})),a.default.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var i=Object.keys(r).filter((function(e){return!(e===l.TAG_PROPERTIES.INNER_HTML||e===l.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var i=void 0===r[t]?t:t+'="'+s(r[t],n)+'"';return e?e+" "+i:i}),""),a=r.innerHTML||r.cssText||"",o=-1===l.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+l.HELMET_ATTRIBUTE+'="true" '+i+(o?"/>":">"+a+"</"+e+">")}),"")}(e,t,n)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[l.HTML_TAG_MAP[n]||n]=e[n],t}),t)},t.handleClientStateChange=function(e){g&&M(g),e.defer?g=h((function(){N(e,(function(){g=null}))})):(N(e),g=null)},t.mapStateOnServer=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,i=e.htmlAttributes,a=e.linkTags,o=e.metaTags,c=e.noscriptTags,u=e.scriptTags,s=e.styleTags,T=e.title,E=void 0===T?"":T,m=e.titleAttributes;return{base:C(l.TAG_NAMES.BASE,t,r),bodyAttributes:C(l.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:C(l.ATTRIBUTE_NAMES.HTML,i,r),link:C(l.TAG_NAMES.LINK,a,r),meta:C(l.TAG_NAMES.META,o,r),noscript:C(l.TAG_NAMES.NOSCRIPT,c,r),script:C(l.TAG_NAMES.SCRIPT,u,r),style:C(l.TAG_NAMES.STYLE,s,r),title:C(l.TAG_NAMES.TITLE,{title:E,titleAttributes:m},r)}},t.reducePropsToState=function(e){return{baseTag:f([l.TAG_PROPERTIES.HREF],e),bodyAttributes:m(l.ATTRIBUTE_NAMES.BODY,e),defer:p(e,l.HELMET_PROPS.DEFER),encode:p(e,l.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:m(l.ATTRIBUTE_NAMES.HTML,e),linkTags:d(l.TAG_NAMES.LINK,[l.TAG_PROPERTIES.REL,l.TAG_PROPERTIES.HREF],e),metaTags:d(l.TAG_NAMES.META,[l.TAG_PROPERTIES.NAME,l.TAG_PROPERTIES.CHARSET,l.TAG_PROPERTIES.HTTPEQUIV,l.TAG_PROPERTIES.PROPERTY,l.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:d(l.TAG_NAMES.NOSCRIPT,[l.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:E(e),scriptTags:d(l.TAG_NAMES.SCRIPT,[l.TAG_PROPERTIES.SRC,l.TAG_PROPERTIES.INNER_HTML],e),styleTags:d(l.TAG_NAMES.STYLE,[l.TAG_PROPERTIES.CSS_TEXT],e),title:T(e),titleAttributes:m(l.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=h,t.warn=S},4839:function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var i=n(7294),a=r(i),o=r(n(6872));function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function T(){u=e(s.map((function(e){return e.props}))),E.canUseDOM?t(u):n&&(u=n(u))}var E=function(e){var t,n;function i(){return e.apply(this,arguments)||this}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,i.peek=function(){return u},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,s=[],e};var l=i.prototype;return l.shouldComponentUpdate=function(e){return!o(e,this.props)},l.componentWillMount=function(){s.push(this),T()},l.componentDidUpdate=function(){T()},l.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),T()},l.render=function(){return a.createElement(r,this.props)},i}(i.Component);return l(E,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),l(E,"canUseDOM",c),E}}},6872:function(e){e.exports=function(e,t,n,r){var i=n?n.call(r,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),c=0;c<a.length;c++){var u=a[c];if(!l(u))return!1;var s=e[u],T=t[u];if(!1===(i=n?n.call(r,s,T,u):void 0)||void 0===i&&s!==T)return!1}return!0}},7031:function(e,t,n){"use strict";n.d(t,{Z:function(){return T}});var r=n(7294),i=n(1597),a=function(e){var t=!1;return e.childItems&&e.childItems.nodes.length&&(t=!0),r.createElement("li",{key:e.id},r.createElement(i.Link,{to:e.url},e.label),t&&o(e))},o=function(e){return r.createElement("ul",null,e.childItems.nodes.map((function(e){return a(e)})))},l=function(e){return r.createElement("div",null,r.createElement(i.StaticQuery,{query:"1052349954",render:function(e){var t=e.allWpMenuItem.nodes;return r.createElement("ul",{className:"nav"},t.map((function(e){return a(e)})))}}))},c=function(){var e=(0,r.useState)(""),t=e[0],n=e[1],a=(0,r.useState)("false"),o=a[0],c=a[1];(0,r.useEffect)((function(){return window.addEventListener("scroll",u),function(){return window.removeEventListener("scroll",u)}}),[]);var u=function(){if(void 0!==window){var e=window.scrollY;n(e>10?"scrolled":"")}},s=function(){c(!o)};return r.createElement(r.Fragment,null,r.createElement("header",{id:"header",style:{borderBottom:"1px solid #898C92"},className:"clixsy_header sticky top-0 z-40 transition-all "+t},r.createElement("div",{className:"flex items-center justify-between container mx-auto h-20"},r.createElement(i.Link,{to:"/",className:"logo"},r.createElement("img",{height:35,width:"145",className:"m-0",alt:"Clixsy Logo",src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iMjMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTI0LjQ3IDEuNjE4djE5LjE0N2gxNC40MTJNNDQuMDMgMS44MjN2MTkuMzUzTTY0LjQxMiAyLjAzTDQ4Ljk3IDIwLjk3bTYuNTg5LTExLjMyM2wtNi4zODMtNy42MThtNDUuNTAxLjIwNkw4OC41IDExLjV2OS42NzZNMTguMDg4IDQuMjk0Yy03LjIwNi02LjE3Ni0xNCAwLTE0IDAtMS44NTMgMi4wNTktNC45NDEgOC4zNTkgMCAxMy43OTQgNC45NDEgNS40MzYgMTEuMzkyIDIuNjc3IDE0IC42MTgiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxLjg4MiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTTgxLjkxMiAyLjAzYy0xLjg1My0uNDgxLTUuODQ3LS40NTQtNyAzLjUtMS4xNTMgMy45NTItMi40MDIgOS4xOTYtMi44ODMgMTEuMzIzLS40OCAxLjg1My0yLjUxMSA1LjM1My02Ljc5NCA0LjUzIiBzdHJva2U9IiMyNUREN0UiIHN0cm9rZS13aWR0aD0iMS44ODIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Ik02NS4wMyAyMS4xNzZMNTcgMTEuNW0yNC45MTItOS40N2w1LjM1MyA3LjYxNyIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEuODgyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48L3N2Zz4="}),r.createElement("img",{height:35,width:"145",className:"scrolled_logo m-0",alt:"Clixsy Logo",src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iMjMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTI0LjQ3IDEuNjE4djE5LjE0N2gxNC40MTJNNDQuMDMgMS44MjN2MTkuMzUzTTY0LjQxMiAyLjAzTDQ4Ljk3IDIwLjk3bTYuNTg5LTExLjMyM2wtNi4zODMtNy42MThtNDUuNTAxLjIwNkw4OC41IDExLjV2OS42NzZNMTguMDg4IDQuMjk0Yy03LjIwNi02LjE3Ni0xNCAwLTE0IDAtMS44NTMgMi4wNTktNC45NDEgOC4zNTkgMCAxMy43OTQgNC45NDEgNS40MzYgMTEuMzkyIDIuNjc3IDE0IC42MTgiIHN0cm9rZT0iIzE5MTkxOSIgc3Ryb2tlLXdpZHRoPSIxLjg4MiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTTgxLjkxMiAyLjAzYy0xLjg1My0uNDgxLTUuODQ3LS40NTQtNyAzLjUtMS4xNTMgMy45NTItMi40MDIgOS4xOTYtMi44ODMgMTEuMzIzLS40OCAxLjg1My0yLjUxMSA1LjM1My02Ljc5NCA0LjUzIiBzdHJva2U9IiMyNUREN0UiIHN0cm9rZS13aWR0aD0iMS44ODIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Ik02NS4wMyAyMS4xNzZMNTcgMTEuNW0yNC45MTItOS40N2w1LjM1MyA3LjYxNyIgc3Ryb2tlPSIjMTkxOTE5IiBzdHJva2Utd2lkdGg9IjEuODgyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48L3N2Zz4="})),r.createElement(l,null),r.createElement("a",{href:"tel:(801)701-2030",className:"call_us font-oswald text-white uppercase font-medium"},r.createElement("span",null,"CALL US:")," (801) 701-2030"),r.createElement("div",{className:"mobile_menu_toggle",onClick:s},r.createElement("svg",{width:"24",height:"12",viewBox:"0 0 24 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M0.749981 1.49996H23.25C23.664 1.49996 23.9999 1.16393 23.9999 0.749981C23.9999 0.335964 23.6639 0 23.25 0H0.749981C0.335964 0 0 0.336026 0 0.749981C0 1.16393 0.336026 1.49996 0.749981 1.49996Z",fill:"white"}),r.createElement("path",{d:"M23.25 5.25H0.749981C0.335964 5.25 0 5.58603 0 5.99998C0 6.41393 0.336026 6.74996 0.749981 6.74996H23.25C23.664 6.74996 23.9999 6.41393 23.9999 5.99998C23.9999 5.58603 23.664 5.25 23.25 5.25Z",fill:"white"}),r.createElement("path",{d:"M23.25 10.5H8.24998C7.83596 10.5 7.5 10.836 7.5 11.25C7.5 11.664 7.83603 12 8.24998 12H23.25C23.664 12 23.9999 11.6639 23.9999 11.25C24 10.836 23.664 10.5 23.25 10.5Z",fill:"white"}))))),r.createElement("div",{id:"mob_menu",className:"mobile_menu container "+(o?"":"active")},r.createElement("div",{className:"mobile_menu_close",onClick:s},r.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M23.2941 21.8824L2.11755 0.705867C1.72788 0.316203 1.09542 0.316261 0.705816 0.705866C0.31621 1.09547 0.316211 1.72799 0.705816 2.1176L21.8824 23.2941C22.272 23.6838 22.9045 23.6837 23.2941 23.2941C23.6837 22.9045 23.6837 22.2721 23.2941 21.8824Z",fill:"white"}),r.createElement("path",{d:"M21.8824 0.705733L0.705867 21.8823C0.316203 22.2719 0.316261 22.9044 0.705866 23.294C1.09547 23.6836 1.72799 23.6836 2.1176 23.294L23.2941 2.11747C23.6838 1.7278 23.6837 1.09534 23.2941 0.705732C22.9045 0.316127 22.2721 0.316069 21.8824 0.705733Z",fill:"white"}))),r.createElement(l,null)),r.createElement("div",{id:"mm_over",className:"mob_menu_overlay "+(o?"":"active"),onClick:s}))};c.defaultProps={siteTitle:""};var u=c,s=function(){return r.createElement(r.Fragment,null,r.createElement("footer",{className:"bg-black pt-28 relative md:pt-16"},r.createElement("div",{className:"tab-black"}),r.createElement("div",{className:"container mx-auto grid grid-cols-4 gap-4 md:grid-cols-2 "},r.createElement("div",{className:"md:col-span-full md:block md:mx-auto md:pb-16"},r.createElement("a",{href:"<?php echo home_url('/') ?>"}),r.createElement("ul",{className:"text-white space-y-2 text-base"},r.createElement("li",null,r.createElement("a",{href:"/media-room/"},"Media Room")),r.createElement("li",null,r.createElement("a",{href:"/social-wall/"},"Social Wall")),r.createElement("li",null,r.createElement("a",{href:"/blog/"},"Blog")))),r.createElement("div",{className:"md:pl-8"},r.createElement("h6",{className:"text-2xl text-white font-oswald mb-7 uppercase"},"Contact"),r.createElement("ul",{className:"text-white space-y-2 text-base"},r.createElement("li",null,"Clixsy"),r.createElement("li",null,r.createElement("a",{href:"tel:(801)701-2030"}," (801) 701-2030")),r.createElement("li",null,r.createElement("a",{href:"mailto:info@clixsy.com"}," info@clixsy.com")))),r.createElement("div",{className:"md:pl-8"},r.createElement("h6",{className:"text-2xl text-white font-oswald mb-7 uppercase"},"Learn more"),r.createElement("ul",{id:"menu-footer-menu",className:"text-white space-y-2 text-base"},r.createElement("li",{id:"menu-item-49",className:"menu-item menu-item-type-post_type menu-item-object-page menu-item-49"},r.createElement("a",{href:"https://www.clixsy.com/seo/"},"SEO")),r.createElement("li",{id:"menu-item-82",className:"menu-item menu-item-type-post_type menu-item-object-page menu-item-82"},r.createElement("a",{href:"https://www.clixsy.com/law-firm/"},"Legal Marketing")),r.createElement("li",{id:"menu-item-51",className:"menu-item menu-item-type-post_type menu-item-object-page menu-item-51"},r.createElement("a",{href:"https://www.clixsy.com/about-us/"},"About Us")),r.createElement("li",{id:"menu-item-52",className:"menu-item menu-item-type-post_type menu-item-object-page menu-item-52"},r.createElement("a",{href:"https://www.clixsy.com/smart-ads/"},"Smart Ads"))))),r.createElement("div",{className:"p-4 mt-8 md:pt-6 md:mt-16 border-t-2 border-grey "},r.createElement("p",{className:"text-white text-tiny text-center uppercase"},r.createElement("span",{className:"hidden md:block"}),r.createElement("a",{href:"<?php echo get_page_link(60); ?>"},"Terms & Conditions")," |",r.createElement("a",{href:"<?php echo get_page_link(55); ?>"},"Privacy Policy")))))},T=function(e){var t,n=e.children,a=(0,i.useStaticQuery)("3649515864");return r.createElement(r.Fragment,null,r.createElement(u,{siteTitle:(null===(t=a.site.siteMetadata)||void 0===t?void 0:t.title)||"Title"}),r.createElement("div",null,r.createElement("main",null,n),r.createElement(s,null)))}},9357:function(e,t,n){"use strict";var r=n(7294),i=n(7701),a=n(1597),o=function(e){var t,n,o=e.description,l=e.lang,c=e.meta,u=e.title,s=(0,a.useStaticQuery)("848497233"),T=s.wp,E=s.wpUser,m=o||(null===(t=T.generalSettings)||void 0===t?void 0:t.description),f=null===(n=T.generalSettings)||void 0===n?void 0:n.title;return r.createElement(i.ql,{htmlAttributes:{lang:l},title:u,titleTemplate:f?"%s | "+f:null,meta:[{name:"description",content:m},{property:"og:title",content:u},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null==E?void 0:E.twitter)||""},{name:"twitter:title",content:u},{name:"twitter:description",content:m}].concat(c)})};o.defaultProps={lang:"en",meta:[],description:""},t.Z=o}}]);
//# sourceMappingURL=commons-245c77b52ee80be17428.js.map