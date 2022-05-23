/**
 * MODULE: default FILE: jquery-1.11.3.min.js
 */
/*! jQuery v1.11.3 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.3",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b="length"in a&&a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;

return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function aa(){return!0}function ba(){return!1}function ca(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ca()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ca()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?aa:ba):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=aa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=aa,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=aa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=ba;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=ba),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function da(a){var b=ea.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var ea="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fa=/ jQuery\d+="(?:null|\d+)"/g,ga=new RegExp("<(?:"+ea+")[\\s/>]","i"),ha=/^\s+/,ia=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ja=/<([\w:]+)/,ka=/<tbody/i,la=/<|&#?\w+;/,ma=/<(?:script|style|link)/i,na=/checked\s*(?:[^=]|=\s*.checked.)/i,oa=/^$|\/(?:java|ecma)script/i,pa=/^true\/(.*)/,qa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ra={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sa=da(y),ta=sa.appendChild(y.createElement("div"));ra.optgroup=ra.option,ra.tbody=ra.tfoot=ra.colgroup=ra.caption=ra.thead,ra.th=ra.td;function ua(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ua(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function va(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wa(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xa(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function ya(a){var b=pa.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function za(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Aa(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Ba(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xa(b).text=a.text,ya(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!ga.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(ta.innerHTML=a.outerHTML,ta.removeChild(f=ta.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ua(f),h=ua(a),g=0;null!=(e=h[g]);++g)d[g]&&Ba(e,d[g]);if(b)if(c)for(h=h||ua(a),d=d||ua(f),g=0;null!=(e=h[g]);g++)Aa(e,d[g]);else Aa(a,f);return d=ua(f,"script"),d.length>0&&za(d,!i&&ua(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=da(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(la.test(f)){h=h||o.appendChild(b.createElement("div")),i=(ja.exec(f)||["",""])[1].toLowerCase(),l=ra[i]||ra._default,h.innerHTML=l[1]+f.replace(ia,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&ha.test(f)&&p.push(b.createTextNode(ha.exec(f)[0])),!k.tbody){f="table"!==i||ka.test(f)?"<table>"!==l[1]||ka.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ua(p,"input"),va),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ua(o.appendChild(f),"script"),g&&za(h),c)){e=0;while(f=h[e++])oa.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ua(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&za(ua(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ua(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fa,""):void 0;if(!("string"!=typeof a||ma.test(a)||!k.htmlSerialize&&ga.test(a)||!k.leadingWhitespace&&ha.test(a)||ra[(ja.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ia,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ua(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ua(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&na.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ua(i,"script"),xa),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ua(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,ya),j=0;f>j;j++)d=g[j],oa.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qa,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Ca,Da={};function Ea(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fa(a){var b=y,c=Da[a];return c||(c=Ea(a,b),"none"!==c&&c||(Ca=(Ca||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ca[0].contentWindow||Ca[0].contentDocument).document,b.write(),b.close(),c=Ea(a,b),Ca.detach()),Da[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Ga=/^margin/,Ha=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ia,Ja,Ka=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ia=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Ha.test(g)&&Ga.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ia=function(a){return a.currentStyle},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Ha.test(g)&&!Ka.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function La(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight),b.removeChild(i)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Ma=/alpha\([^)]*\)/i,Na=/opacity\s*=\s*([^)]*)/,Oa=/^(none|table(?!-c[ea]).+)/,Pa=new RegExp("^("+S+")(.*)$","i"),Qa=new RegExp("^([+-])=("+S+")","i"),Ra={position:"absolute",visibility:"hidden",display:"block"},Sa={letterSpacing:"0",fontWeight:"400"},Ta=["Webkit","O","Moz","ms"];function Ua(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Ta.length;while(e--)if(b=Ta[e]+c,b in a)return b;return d}function Va(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fa(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wa(a,b,c){var d=Pa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Ya(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ia(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Ja(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ha.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xa(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Ja(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ua(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qa.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ua(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Ja(a,b,d)),"normal"===f&&b in Sa&&(f=Sa[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Oa.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Ra,function(){return Ya(a,b,d)}):Ya(a,b,d):void 0},set:function(a,c,d){var e=d&&Ia(a);return Wa(a,c,d?Xa(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Na.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Ma,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Ma.test(f)?f.replace(Ma,e):f+" "+e)}}),m.cssHooks.marginRight=La(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Ja,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Ga.test(a)||(m.cssHooks[a+b].set=Wa)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ia(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Va(this,!0)},hide:function(){return Va(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Za(a,b,c,d,e){
return new Za.prototype.init(a,b,c,d,e)}m.Tween=Za,Za.prototype={constructor:Za,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")},cur:function(){var a=Za.propHooks[this.prop];return a&&a.get?a.get(this):Za.propHooks._default.get(this)},run:function(a){var b,c=Za.propHooks[this.prop];return this.options.duration?this.pos=b=m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Za.propHooks._default.set(this),this}},Za.prototype.init.prototype=Za.prototype,Za.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Za.propHooks.scrollTop=Za.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Za.prototype.init,m.fx.step={};var $a,_a,ab=/^(?:toggle|show|hide)$/,bb=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cb=/queueHooks$/,db=[ib],eb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bb.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bb.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fb(){return setTimeout(function(){$a=void 0}),$a=m.now()}function gb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hb(a,b,c){for(var d,e=(eb[b]||[]).concat(eb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fa(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fa(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ab.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fa(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hb(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=db.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$a||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$a||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);g>f;f++)if(d=db[f].call(j,a,k,j.opts))return d;return m.map(k,hb,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kb,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],eb[c]=eb[c]||[],eb[c].unshift(b)},prefilter:function(a,b){b?db.unshift(a):db.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kb(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),m.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($a=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$a=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_a||(_a=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_a),_a=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lb=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lb,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mb,nb,ob=m.expr.attrHandle,pb=/^(?:checked|selected)$/i,qb=k.getSetAttribute,rb=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nb:mb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rb&&qb||!pb.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qb?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nb={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rb&&qb||!pb.test(c)?a.setAttribute(!qb&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=ob[b]||m.find.attr;ob[b]=rb&&qb||!pb.test(b)?function(a,b,d){var e,f;return d||(f=ob[b],ob[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,ob[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rb&&qb||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mb&&mb.set(a,b,c)}}),qb||(mb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},ob.id=ob.name=ob.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mb.set},m.attrHooks.contenteditable={set:function(a,b,c){mb.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sb=/^(?:input|select|textarea|button|object)$/i,tb=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sb.test(a.nodeName)||tb.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var ub=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ub," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vb=m.now(),wb=/\?/,xb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yb,zb,Ab=/#.*$/,Bb=/([?&])_=[^&]*/,Cb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Db=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Eb=/^(?:GET|HEAD)$/,Fb=/^\/\//,Gb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hb={},Ib={},Jb="*/".concat("*");try{zb=location.href}catch(Kb){zb=y.createElement("a"),zb.href="",zb=zb.href}yb=Gb.exec(zb.toLowerCase())||[];function Lb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mb(a,b,c,d){var e={},f=a===Ib;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nb(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Ob(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zb,type:"GET",isLocal:Db.test(yb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nb(Nb(a,m.ajaxSettings),b):Nb(m.ajaxSettings,a)},ajaxPrefilter:Lb(Hb),ajaxTransport:Lb(Ib),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cb.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zb)+"").replace(Ab,"").replace(Fb,yb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gb.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yb[1]&&c[2]===yb[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yb[3]||("http:"===yb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mb(Hb,k,b,v),2===t)return v;h=m.event&&k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Eb.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wb.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bb.test(e)?e.replace(Bb,"$1_="+vb++):e+(wb.test(e)?"&":"?")+"_="+vb++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jb+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mb(Ib,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Ob(k,v,c)),u=Pb(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qb=/%20/g,Rb=/\[\]$/,Sb=/\r?\n/g,Tb=/^(?:submit|button|image|reset|file)$/i,Ub=/^(?:input|select|textarea|keygen)/i;function Vb(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rb.test(a)?d(a,e):Vb(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vb(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vb(c,a[c],b,e);return d.join("&").replace(Qb,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Ub.test(this.nodeName)&&!Tb.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sb,"\r\n")}}):{name:b.name,value:c.replace(Sb,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zb()||$b()}:Zb;var Wb=0,Xb={},Yb=m.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Xb)Xb[a](void 0,!0)}),k.cors=!!Yb&&"withCredentials"in Yb,Yb=k.ajax=!!Yb,Yb&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xb[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xb[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zb(){try{return new a.XMLHttpRequest}catch(b){}}function $b(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _b=[],ac=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_b.pop()||m.expando+"_"+vb++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ac.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ac.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ac,"$1"+e):b.jsonp!==!1&&(b.url+=(wb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_b.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bc=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bc)return bc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cc=a.document.documentElement;function dc(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cc;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cc})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=La(k.pixelPosition,function(a,c){return c?(c=Ja(a,b),Ha.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ec=a.jQuery,fc=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fc),b&&a.jQuery===m&&(a.jQuery=ec),m},typeof b===K&&(a.jQuery=a.$=m),m});


/**
 * MODULE: default FILE: element_to_screen.js
 */
(function($) {

	var methods = {
		init: function( options ) {

			var settings = $.extend( {
				'exceptionHeight'    : '',
				'nextScreenElement'  : '',
				'pathImage': ''
			}, options);

			return this.each(function() {
				var $this = $(this),
					data = $this.data('element-to-screen');

				var $toNextScreenButton =
										$('<div class="to-next-screen js-to-next-screen"></div>');

				var exceptionAttr = $this.attr('data-ets-exception-height');
				if(exceptionAttr !== undefined || !isNaN(exceptionAttr)) {
					settings.exceptionHeight = exceptionAttr;
				}

				// Если плагин ещё не проинициализирован
				if(!data) {
					/* Тут выполняем инициализацию */
					var pathImage = $this.attr('data-ets-path-image') ? $this.attr('data-ets-path-image') : '';

					if(
						(device.mobile() && !device.landscape())
						|| !device.mobile()
					) {
						// добавляем необхдимые элементы

						$this.css({
							'background-image': "url('" + pathImage + "')"
						})

						// перейти к другому экрану
						$(document).on('click', '.js-to-next-screen', function(e) {

							var nextScreenElement = $this.attr('data-ets-next-element');
							if(nextScreenElement !== undefined || !isNaN(nextScreenElement)) {
								settings.nextScreenElement = $(nextScreenElement);
							} else {
								settings.nextScreenElement = $this.next();
							}

							var
							$targetElement = settings.nextScreenElement;

							e.preventDefault();
							$('html, body')
							.animate(
								{
									scrollTop: $targetElement.offset().top
								}, 200
							);
						});

					}


				}
			});
		},
	},

	// установить высоту элемента
	setHeight = function($element, settings) {
		var
			exceptionHeight = getExceptionHeight(settings),
			screenHeight = Screen.getHeight(),
			heightElement = screenHeight - exceptionHeight;

		$element.outerHeight(heightElement);
	}

	// получить исключаемую высоту
	getExceptionHeight = function(settings) {
		var
			exceptionElementArray = '',
			$exceptionElements = $([]),
			exceptionHeight = 0;

		if($.trim(settings.exceptionHeight).length) {
			exceptionElementArray = $.trim(settings.exceptionHeight).split(',');
			$.each(exceptionElementArray, function(index, value) {
				var
					$exceptionElement = $(value);

				exceptionHeight += $exceptionElement.outerHeight();
			});
		}

		return exceptionHeight;

	},

	$.fn.elementToScreen = function( method ) {
		if(methods[method]) {
			return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if (typeof method === 'object' || !method) {
			return methods.init.apply(this, arguments);
		} else {
			$.error( 'Метод с именем ' +  method + ' не существует для jQuery.elementToScreen' );
		}
	};

})( jQuery );


/**
 * MODULE: default FILE: bootstrap.min.js
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){if(a(b.target).is(this))return b.handleObj.handler.apply(this,arguments)}})})}(jQuery),+function(a){"use strict";function d(b){return this.each(function(){var d=a(this),e=d.data("bs.alert");e||d.data("bs.alert",e=new c(this)),"string"==typeof b&&e[b].call(d)})}var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.VERSION="3.3.2",c.TRANSITION_DURATION=150,c.prototype.close=function(b){function g(){f.detach().trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.closest(".alert")),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",g).emulateTransitionEnd(c.TRANSITION_DURATION):g())};var e=a.fn.alert;a.fn.alert=d,a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",b,c.prototype.close)}(jQuery),+function(a){"use strict";function c(c){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof c&&c;e||d.data("bs.button",e=new b(this,f)),"toggle"==c?e.toggle():c&&e.setState(c)})}var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.isLoading=!1};b.VERSION="3.3.2",b.DEFAULTS={loadingText:"loading..."},b.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},b.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active"));a&&this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=c,a.fn.button.Constructor=b,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(b){var d=a(b.target);d.hasClass("btn")||(d=d.closest(".btn")),c.call(d,"toggle"),b.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function c(c){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c),g="string"==typeof c?c:f.slide;e||d.data("bs.carousel",e=new b(this,f)),"number"==typeof c?e.to(c):g?e[g]():f.interval&&e.pause().cycle()})}var b=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};b.VERSION="3.3.2",b.TRANSITION_DURATION=600,b.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},b.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},b.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},b.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},b.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},b.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(!(a>this.$items.length-1||a<0))return this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},b.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},b.prototype.next=function(){if(!this.sliding)return this.slide("next")},b.prototype.prev=function(){if(!this.sliding)return this.slide("prev")},b.prototype.slide=function(c,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(c,e),g=this.interval,h="next"==c?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(c),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([c,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(b.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=c,a.fn.carousel.Constructor=b,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(b){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),c.call(f,g),h&&f.data("bs.carousel").to(h),b.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function c(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function d(c){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c);!e&&f.toggle&&"show"==c&&(f.toggle=!1),e||d.data("bs.collapse",e=new b(this,f)),"string"==typeof c&&e[c]()})}var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.$trigger=a(this.options.trigger).filter('[href="#'+c.id+'"], [data-target="#'+c.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};b.VERSION="3.3.2",b.TRANSITION_DURATION=350,b.DEFAULTS={toggle:!0,trigger:'[data-toggle="collapse"]'},b.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},b.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var c,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(c=e.data("bs.collapse"),c&&c.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(d.call(e,"hide"),c||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(b.TRANSITION_DURATION)[g](this.$element[0][i])}}}},b.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var c=a.Event("hide.bs.collapse");if(this.$element.trigger(c),!c.isDefaultPrevented()){var d=this.dimension();this.$element[d](this.$element[d]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[d](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(b.TRANSITION_DURATION):e.call(this)}}},b.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},b.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(b,d){var e=a(d);this.addAriaAndCollapsedClass(c(e),e)},this)).end()},b.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=d,a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(b){var e=a(this);e.attr("data-target")||b.preventDefault();var f=c(e),g=f.data("bs.collapse"),h=g?"toggle":a.extend({},e.data(),{trigger:this});d.call(f,h)})}(jQuery),+function(a){"use strict";function e(d){d&&3===d.which||(a(b).remove(),a(c).each(function(){var b=a(this),c=f(b),e={relatedTarget:this};c.hasClass("open")&&(c.trigger(d=a.Event("hide.bs.dropdown",e)),d.isDefaultPrevented()||(b.attr("aria-expanded","false"),c.removeClass("open").trigger("hidden.bs.dropdown",e)))}))}function f(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function g(b){return this.each(function(){var c=a(this),e=c.data("bs.dropdown");e||c.data("bs.dropdown",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var b=".dropdown-backdrop",c='[data-toggle="dropdown"]',d=function(b){a(b).on("click.bs.dropdown",this.toggle)};d.VERSION="3.3.2",d.prototype.toggle=function(b){var c=a(this);if(!c.is(".disabled, :disabled")){var d=f(c),g=d.hasClass("open");if(e(),!g){"ontouchstart"in document.documentElement&&!d.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",e);var h={relatedTarget:this};if(d.trigger(b=a.Event("show.bs.dropdown",h)),b.isDefaultPrevented())return;c.trigger("focus").attr("aria-expanded","true"),d.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},d.prototype.keydown=function(b){if(/(38|40|27|32)/.test(b.which)&&!/input|textarea/i.test(b.target.tagName)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var e=f(d),g=e.hasClass("open");if(!g&&27!=b.which||g&&27==b.which)return 27==b.which&&e.find(c).trigger("focus"),d.trigger("click");var h=" li:not(.divider):visible a",i=e.find('[role="menu"]'+h+', [role="listbox"]'+h);if(i.length){var j=i.index(b.target);38==b.which&&j>0&&j--,40==b.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=g,a.fn.dropdown.Constructor=d,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",e).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",c,d.prototype.toggle).on("keydown.bs.dropdown.data-api",c,d.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="menu"]',d.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="listbox"]',d.prototype.keydown)}(jQuery),+function(a){"use strict";function c(c,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},b.DEFAULTS,e.data(),"object"==typeof c&&c);f||e.data("bs.modal",f=new b(this,g)),"string"==typeof c?f[c](d):g.show&&f.show(d)})}var b=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$backdrop=this.isShown=null,this.scrollbarWidth=0,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};b.VERSION="3.3.2",b.TRANSITION_DURATION=300,b.BACKDROP_TRANSITION_DURATION=150,b.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},b.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},b.prototype.show=function(c){var d=this,e=a.Event("show.bs.modal",{relatedTarget:c});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.options.backdrop&&d.adjustBackdrop(),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in").attr("aria-hidden",!1),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:c});e?d.$element.find(".modal-dialog").one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(b.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},b.prototype.hide=function(c){c&&c.preventDefault(),c=a.Event("hide.bs.modal"),this.$element.trigger(c),this.isShown&&!c.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(b.TRANSITION_DURATION):this.hideModal())},b.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},b.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},b.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},b.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},b.prototype.backdrop=function(c){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a('<div class="modal-backdrop '+e+'" />').prependTo(this.$element).on("click.dismiss.bs.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!c)return;f?this.$backdrop.one("bsTransitionEnd",c).emulateTransitionEnd(b.BACKDROP_TRANSITION_DURATION):c()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),c&&c()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(b.BACKDROP_TRANSITION_DURATION):g()}else c&&c()},b.prototype.handleUpdate=function(){this.options.backdrop&&this.adjustBackdrop(),this.adjustDialog()},b.prototype.adjustBackdrop=function(){this.$backdrop.css("height",0).css("height",this.$element[0].scrollHeight)},b.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},b.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},b.prototype.checkScrollbar=function(){this.bodyIsOverflowing=document.body.scrollHeight>document.documentElement.clientHeight,this.scrollbarWidth=this.measureScrollbar()},b.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},b.prototype.resetScrollbar=function(){this.$body.css("padding-right","")},b.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=c,a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(b){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&b.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),c.call(f,g,this)})}(jQuery),+function(a){"use strict";function c(c){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof c&&c;(e||"destroy"!=c)&&(e||d.data("bs.tooltip",e=new b(this,f)),"string"==typeof c&&e[c]())})}var b=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};b.VERSION="3.3.2",b.TRANSITION_DURATION=150,b.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},b.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(this.options.viewport.selector||this.options.viewport);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},b.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},b.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c&&c.$tip&&c.$tip.is(":visible")?void(c.hoverState="in"):(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},b.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},b.prototype.show=function(){var c=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(c);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(c.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.options.container?a(this.options.container):this.$element.parent(),p=this.getPosition(o);h="bottom"==h&&k.bottom+m>p.bottom?"top":"top"==h&&k.top-m<p.top?"bottom":"right"==h&&k.right+l>p.width?"left":"left"==h&&k.left-l<p.left?"right":h,f.removeClass(n).addClass(h)}var q=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(q,h);var r=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",r).emulateTransitionEnd(b.TRANSITION_DURATION):r()}},b.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top=b.top+g,b.left=b.left+h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},b.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},b.prototype.hide=function(c){function g(){"in"!=d.hoverState&&e.detach(),d.$element.removeAttr("aria-describedby").trigger("hidden.bs."+d.type),c&&c()}var d=this,e=this.tip(),f=a.Event("hide.bs."+this.type);if(this.$element.trigger(f),!f.isDefaultPrevented())return e.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?e.one("bsTransitionEnd",g).emulateTransitionEnd(b.TRANSITION_DURATION):g(),this.hoverState=null,this},b.prototype.fixTitle=function(){/*var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title")&&"undefined"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")*/},b.prototype.hasContent=function(){return this.getTitle()},b.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},b.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},b.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.width&&(e.left=g.left+g.width-k)}return e},b.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},b.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},b.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},b.prototype.enable=function(){this.enabled=!0},b.prototype.disable=function(){this.enabled=!1},b.prototype.toggleEnabled=function(){this.enabled=!this.enabled},b.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),c.tip().hasClass("in")?c.leave(c):c.enter(c)},b.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type)})};var d=a.fn.tooltip;a.fn.tooltip=c,a.fn.tooltip.Constructor=b,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function c(c){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof c&&c;(e||"destroy"!=c)&&(e||d.data("bs.popover",e=new b(this,f)),"string"==typeof c&&e[c]())})}var b=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");b.VERSION="3.3.2",b.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),b.prototype.constructor=b,b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},b.prototype.hasContent=function(){return this.getTitle()||this.getContent()},b.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},b.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var d=a.fn.popover;a.fn.popover=c,a.fn.popover.Constructor=b,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){var e=a.proxy(this.process,this);this.$body=a("body"),this.$scrollElement=a(a(c).is("body")?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",e),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.2",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b="offset",c=0;a.isWindow(this.$scrollElement[0])||(b="position",c=this.$scrollElement.scrollTop()),this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight();var d=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[b]().top+c,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){d.offsets.push(this[0]),d.targets.push(this[1])})},b.prototype.process=function(){var g,a=this.$scrollElement.scrollTop()+this.options.offset,b=this.getScrollHeight(),c=this.options.offset+b-this.$scrollElement.height(),d=this.offsets,e=this.targets,f=this.activeTarget;if(this.scrollHeight!=b&&this.refresh(),a>=c)return f!=(g=e[e.length-1])&&this.activate(g);if(f&&a<d[0])return this.activeTarget=null,this.clear();for(g=d.length;g--;)f!=e[g]&&a>=d[g]&&(!d[g+1]||a<=d[g+1])&&this.activate(e[g])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function c(c){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new b(this)),"string"==typeof c&&e[c]()})}var b=function(b){this.element=a(b)};b.VERSION="3.3.2",b.TRANSITION_DURATION=150,b.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},b.prototype.activate=function(c,d,e){
function h(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),c.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),g?(c[0].offsetWidth,c.addClass("in")):c.removeClass("fade"),c.parent(".dropdown-menu")&&c.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var f=d.find("> .active"),g=e&&a.support.transition&&(f.length&&f.hasClass("fade")||!!d.find("> .fade").length);f.length&&g?f.one("bsTransitionEnd",h).emulateTransitionEnd(b.TRANSITION_DURATION):h(),f.removeClass("in")};var d=a.fn.tab;a.fn.tab=c,a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(b){b.preventDefault(),c.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function c(c){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof c&&c;e||d.data("bs.affix",e=new b(this,f)),"string"==typeof c&&e[c]()})}var b=function(c,d){this.options=a.extend({},b.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(c),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};b.VERSION="3.3.2",b.RESET="affix affix-top affix-bottom",b.DEFAULTS={offset:0,target:window},b.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return e<c&&"top";if("bottom"==this.affixed)return null!=c?!(e+this.unpin<=f.top)&&"bottom":!(e+g<=a-d)&&"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&e<=c?"top":null!=d&&i+j>=a-d&&"bottom"},b.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(b.RESET).addClass("affix");var a=this.$target.scrollTop(),c=this.$element.offset();return this.pinnedOffset=c.top-a},b.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},b.prototype.checkPosition=function(){if(this.$element.is(":visible")){var c=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=a("body").height();"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,c,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(b.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-c-f})}};var d=a.fn.affix;a.fn.affix=c,a.fn.affix.Constructor=b,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var b=a(this),d=b.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),c.call(b,d)})})}(jQuery);

/**
 * MODULE: default FILE: webpower.js
 */
window.webpower = window.webpower || {};

(function(webpower, undefined) {
	var initializing = false,
		fnTest = /xyz/.test(function(){xyz;}) ? /\b_super\b/ : /.*/;
  	webpower.Class = function(){};
	webpower.Class.extend = function(prop) {
    	var _super = this.prototype;

	    initializing = true;
	    var prototype = new this();
    	initializing = false;

    	// Copy the properties over onto the new prototype
	    for (var name in prop) {
	      // Check if we're overwriting an existing function
	      prototype[name] = typeof prop[name] == "function" &&
	        typeof _super[name] == "function" && fnTest.test(prop[name]) ?
	        (function(name, fn){
	          return function() {
	            var tmp = this._super;

	            // Add a new ._super() method that is the same method
	            // but on the super-class
	            this._super = _super[name];

	            // The method only need to be bound temporarily, so we
	            // remove it when we're done executing
	            var ret = fn.apply(this, arguments);
	            this._super = tmp;

	            return ret;
	          };
	        })(name, prop[name]) :
	        prop[name];
	    }

	    // The dummy class constructor
	    function Class() {
	      // All construction is actually done in the init method
	      if ( !initializing && this.init )
	        this.init.apply(this, arguments);
	    }

	    // Populate our constructed prototype object
	    Class.prototype = prototype;

	    // Enforce the constructor to be what we expect
	    Class.prototype.constructor = Class;

	    // And make this class extendable
	    Class.extend = arguments.callee;

    	return Class;
  	};

  	webpower.createNS = function(namespace) {
  		var nsparts = namespace.split("."),
			parent = webpower;

    	if (nsparts[0] === "webpower") {
        	nsparts = nsparts.slice(1);
    	}

    	for (var i = 0, l = nsparts.length; i < l; i++) {
        	var partname = nsparts[i];
        	if (typeof parent[partname] === "undefined") {
            	parent[partname] = {};
        	}

        	parent = parent[partname];
    	}

    	return parent;
	}


	webpower.flat = function(target, delimiter) {
		var result = {};
		if (typeof delimiter === 'undefined') {
			delimiter = ':';
		}

		function getKeys(o) {
			var keys = [];
			for (var k in o) {
				if (o.hasOwnProperty(k)) {
					keys.push(k);
				}
			}
			return keys;
		}

		function step(object, prev) {
			$.each(getKeys(object), function(i, key){
				var value = object[key],
					isObject = typeof value !== 'string',
					newKey = !!prev ? [].concat(prev, key).join(delimiter) : key;

				if (isObject && getKeys(value).length) {
					return step(value, newKey);
				}

				result[newKey] = value;
			});
		}

		step(target);

		return result;
	}

})(webpower);

window.wp = window.WP = window.webpower;

function scrollToElement(selector, offset_top, time, target){
	if ($(selector).length != 0) {
		var time_to_scroll = (typeof time!='undefined') ? time : 500;
		var target_to_scroll = (typeof target!='undefined') ? target : 'html, body';
		var offset_top = (typeof offset_top!='undefined') ? offset_top : 0;
		$(target_to_scroll).animate({ scrollTop: $(selector).offset().top-offset_top }, time_to_scroll);
	}
}

function initDataTargetLink() {
	if(typeof device !== 'undefined' && !device.mobile()) {
		var $targetLink = $('a[data-btarget]');

		if ($targetLink.length) {
			$.each($targetLink, function(index, element) {
				var $this = $(element),
					target = $this.attr('data-btarget');
				$this.attr('target', target);
				$this.removeAttr('data-btarget');
			});
		}
	}
}

if (typeof $ !='undefined'){
	$(document).on('ready portionLoaded filterLoaded', function() {
		initDataTargetLink();
	});
}


/**
 * MODULE: default FILE: api.js
 */
/**
 * API webpower requests
 * @author Avatar
 * @author ml
 * @uses JQuery
 *
 * @param string url
 * @param mixed params paramsObject | callbackSuccessFunction
 * @param mixed functions callbackSuccessFunction | { success: func, data: func, actions: func, errors: func }
 *				{loadButtons: '#button1' || ['#button1', '#button2']} - for TOOLS.loadButton
 *				if callbacks(actions|errors) return false for stop propagation
 */

wp.isEmpty = function(input) {
	return (typeof input === 'undefined') || ($.isArray(input) && input.length == 0) || ($.isPlainObject(input) && $.isEmptyObject(input));
}
wp.request = function () {

	var wh = new wp.requestHelper();

		wh.setParams( arguments );

	return wh.send();
};

wp.requestHelper = function() {

	this.params = {
		url: null,
		data: {},
		callback: {}
	};
};

wp.requestHelper.prototype.setSystemValues = function() {

	this.params.data.platform = 'js';
	this.params.data.token = 'Hy6U3z61fflbgT2yJ/VdlQ2719'; // TODO: from wp.settings
	this.params.data.uuid = parseInt( new Date().getTime() / 1000 + Math.random()*1000, 10);
};

wp.requestHelper.prototype.setParams = function(args) {

		var _gag = function(){};

		this.params.url = (!!args[0]&&typeof args[0] == 'string')? args[0]:document.URL;

		this.params.data = (!!args[0]&&typeof args[0] == 'object')? args[0] : (
						(!!args[1] && typeof args[1]=='object')? args[1]||{}:{}
					);
		this.params.callback = { success: _gag, data: _gag, actions: _gag, errors: _gag };

	if ( !!args[1] && typeof args[1] == 'function' ) {
		this.params.callback.success = args[1];
	} else if ( !!args[2] && typeof args[2] == 'function') {
		this.params.callback.success = args[2];
	} else if( !!args[2] && typeof args[2] == 'object' ) {
		this.params.callback.success = args[2].success||_gag;
		this.params.callback.actions = args[2].actions||_gag;
		this.params.callback.errors = args[2].errors||_gag;
		this.params.callback.data = args[2].data||_gag;

		if ( !!args[2].loadButtons ) {
			this.params.callback.loadButtons = args[2].loadButtons;
			TOOLS.loadButton( args[2].loadButtons, true );
		}

		if ( !!args[2].loadingElements ) {
			this.params.callback.loadingElements = args[2].loadingElements;
			TOOLS.loadingElement( args[2].loadingElements, true );
		}

		if ( !!args[2].loadingModal ) {
			this.params.callback.loadingModal = args[2].loadingModal;
			TOOLS.loadingModal(true);
		}

	} else if ( !!args[2] && typeof args[2] == 'string' ) {
		this.params.callback.success = function(){ setTimeout( args[2]+'()', 0 ); };
	}

	this.setSystemValues();
};

wp.requestHelper.prototype.send = function() {
	var userAgent = window.navigator.userAgent.toLowerCase();
	var domainParts = document.domain.split('.');
	if ( userAgent.indexOf('bot') !== -1 ) return; 
	var me=this;
	var data = null;

	if($.ajaxSetup().contentType === 'application/json') {
		data = JSON.stringify(this.params.data);
	} else {
		data = this.params.data;
	}

	return $.post(
			this.params.url,
			data,
			null,
			'json'
		).always(function(){
				me.callback.call(me, arguments);
		});
};

wp.requestHelper.prototype.callback = function(args) {
		var response = (!!args[1] && args[1] == 'error')?
						args[0].responseJSON
						: args[0];

		if ( !!this.params.callback.loadButtons ) {
			TOOLS.loadButton(this.params.callback.loadButtons, false);
		}

		if ( !!this.params.callback.loadingElements ) {
			TOOLS.loadingElement(this.params.callback.loadingElements, false);
		}

		if ( !!this.params.callback.loadingModal ) {
			TOOLS.loadingModal(false);
		}
		// пришёл не тот запрос
		if ( !response ) return;
		if ( !!response.uuid && response.uuid != this.params.data.uuid ) return;

		if (!wp.isEmpty(response.errors)) {
			this.callbackErrors(response);
		}
		if (!wp.isEmpty(response.actions)) {
			this.callbackActions(response);
		}
		if (!wp.isEmpty(response.data)) {
			this.callbackData(response);
		}
		if ( !!response.success ) {
			this.callbackSuccess(response);
		}
};

wp.requestHelper.prototype.callbackSuccess = function(response) {

	this.params.callback.success(response.data||null);
};

wp.requestHelper.prototype.callbackData = function(response) {

	this.params.callback.data(response.data||null, !!response.success);
};

wp.requestHelper.prototype.callbackErrors = function(response) {

	if ( this.params.callback.errors(response.errors||[], !!response.success) === false ) return;

	// TODO: всё переписать!
	var errorMessage = '';
	$.each(response.errors, function (index, value) {
		if(typeof value === 'object') {
			errorMessage += '<p>' + value.value + '</p>';
			$('[name*="' + value.key + '"]').addClass('error-field');
		} else {
			errorMessage += '<p>' + value + '</p>';
		}
	});
	if (typeof response.errors_block!='undefined' && response.errors_block) {
		$(response.errors_block).html( errorMessage ).removeClass('hidden').show();
	}
	else {
		//-- Bootstrap Modal
		var header = 'Ошибка';
		if (typeof T.core !== 'undefined' && !$.isEmptyObject(T.core)){
			header = T.core.api_error_heading;
		}
		this.modal(
			header,
			'<p class="text-danger">' + errorMessage + '</p>'
		);
	}
};

wp.requestHelper.prototype.callbackActions = function(response) {

	var me = this;

	if ( this.params.callback.actions(response.actions||[], !!response.success) === false ) return;

	$.each(response.actions, function (action) {
		switch (action) {
			case 'success':
			case 'info':
			case 'alert':
			case 'warning':
			case 'danger':
				var titleText = 'api_' + action + '_heading';
				me.modal(
						T.core[titleText],
						response.actions[action]
					);
				break;
			case 'need_auth':
				document.dispatchEvent(new Event('toggleAuthForm'))	
				break;
			case 'redirect':
				window.location.href = response.actions[action];
				break;
			default:
				break;
		}
	});
};

wp.requestHelper.prototype.modal = function(header, content) {

		wp.modal({
			size: 1,
			closeX: true,
			box: {
				header: {
					content: header
				},
				body: {
					content: content
				},
				footer: {

				},
				buttons: [
					{
						content: (typeof T.core !== 'undefined' && !$.isEmptyObject(T.core)) ? T.core.word_close : 'Закрыть',
						closeModal: true,
						className: 'btn-default'
					}
				]
			}
		});
};


/**
 * MODULE: default FILE: typeahead.bundle.js
 */
/*!
 * typeahead.js 1.2.0
 * https://github.com/twitter/typeahead.js
 * Copyright 2013-2017 Twitter, Inc. and other contributors; Licensed MIT
 */

(function(root, factory) {
    if (typeof define === "function" && define.amd) {
        define([ "jquery" ], function(a0) {
            return root["Bloodhound"] = factory(a0);
        });
    } else if (typeof exports === "object") {
        module.exports = factory(require("jquery"));
    } else {
        root["Bloodhound"] = factory(root["jQuery"]);
    }
})(this, function($) {
    var _ = function() {
        "use strict";
        return {
            isMsie: function() {
                return /(msie|trident)/i.test(navigator.userAgent) ? navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2] : false;
            },
            isBlankString: function(str) {
                return !str || /^\s*$/.test(str);
            },
            escapeRegExChars: function(str) {
                return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
            },
            isString: function(obj) {
                return typeof obj === "string";
            },
            isNumber: function(obj) {
                return typeof obj === "number";
            },
            isArray: $.isArray,
            isFunction: $.isFunction,
            isObject: $.isPlainObject,
            isUndefined: function(obj) {
                return typeof obj === "undefined";
            },
            isElement: function(obj) {
                return !!(obj && obj.nodeType === 1);
            },
            isJQuery: function(obj) {
                return obj instanceof $;
            },
            toStr: function toStr(s) {
                return _.isUndefined(s) || s === null ? "" : s + "";
            },
            bind: $.proxy,
            each: function(collection, cb) {
                $.each(collection, reverseArgs);
                function reverseArgs(index, value) {
                    return cb(value, index);
                }
            },
            map: $.map,
            filter: $.grep,
            every: function(obj, test) {
                var result = true;
                if (!obj) {
                    return result;
                }
                $.each(obj, function(key, val) {
                    if (!(result = test.call(null, val, key, obj))) {
                        return false;
                    }
                });
                return !!result;
            },
            some: function(obj, test) {
                var result = false;
                if (!obj) {
                    return result;
                }
                $.each(obj, function(key, val) {
                    if (result = test.call(null, val, key, obj)) {
                        return false;
                    }
                });
                return !!result;
            },
            mixin: $.extend,
            identity: function(x) {
                return x;
            },
            clone: function(obj) {
                return $.extend(true, {}, obj);
            },
            getIdGenerator: function() {
                var counter = 0;
                return function() {
                    return counter++;
                };
            },
            templatify: function templatify(obj) {
                return $.isFunction(obj) ? obj : template;
                function template() {
                    return String(obj);
                }
            },
            defer: function(fn) {
                setTimeout(fn, 0);
            },
            debounce: function(func, wait, immediate) {
                var timeout, result;
                return function() {
                    var context = this, args = arguments, later, callNow;
                    later = function() {
                        timeout = null;
                        if (!immediate) {
                            result = func.apply(context, args);
                        }
                    };
                    callNow = immediate && !timeout;
                    clearTimeout(timeout);
                    timeout = setTimeout(later, wait);
                    if (callNow) {
                        result = func.apply(context, args);
                    }
                    return result;
                };
            },
            throttle: function(func, wait) {
                var context, args, timeout, result, previous, later;
                previous = 0;
                later = function() {
                    previous = new Date();
                    timeout = null;
                    result = func.apply(context, args);
                };
                return function() {
                    var now = new Date(), remaining = wait - (now - previous);
                    context = this;
                    args = arguments;
                    if (remaining <= 0) {
                        clearTimeout(timeout);
                        timeout = null;
                        previous = now;
                        result = func.apply(context, args);
                    } else if (!timeout) {
                        timeout = setTimeout(later, remaining);
                    }
                    return result;
                };
            },
            stringify: function(val) {
                return _.isString(val) ? val : JSON.stringify(val);
            },
            guid: function() {
                function _p8(s) {
                    var p = (Math.random().toString(16) + "000000000").substr(2, 8);
                    return s ? "-" + p.substr(0, 4) + "-" + p.substr(4, 4) : p;
                }
                return "tt-" + _p8() + _p8(true) + _p8(true) + _p8();
            },
            noop: function() {}
        };
    }();
    var VERSION = "1.2.0";
    var tokenizers = function() {
        "use strict";
        return {
            nonword: nonword,
            whitespace: whitespace,
            ngram: ngram,
            obj: {
                nonword: getObjTokenizer(nonword),
                whitespace: getObjTokenizer(whitespace),
                ngram: getObjTokenizer(ngram)
            }
        };
        function whitespace(str) {
            str = _.toStr(str);
            return str ? str.split(/\s+/) : [];
        }
        function nonword(str) {
            str = _.toStr(str);
            return str ? str.split(/\W+/) : [];
        }
        function ngram(str) {
            str = _.toStr(str);
            var tokens = [], word = "";
            _.each(str.split(""), function(char) {
                if (char.match(/\s+/)) {
                    word = "";
                } else {
                    tokens.push(word + char);
                    word += char;
                }
            });
            return tokens;
        }
        function getObjTokenizer(tokenizer) {
            return function setKey(keys) {
                keys = _.isArray(keys) ? keys : [].slice.call(arguments, 0);
                return function tokenize(o) {
                    var tokens = [];
                    _.each(keys, function(k) {
                        tokens = tokens.concat(tokenizer(_.toStr(o[k])));
                    });
                    return tokens;
                };
            };
        }
    }();
    var LruCache = function() {
        "use strict";
        function LruCache(maxSize) {
            this.maxSize = _.isNumber(maxSize) ? maxSize : 100;
            this.reset();
            if (this.maxSize <= 0) {
                this.set = this.get = $.noop;
            }
        }
        _.mixin(LruCache.prototype, {
            set: function set(key, val) {
                var tailItem = this.list.tail, node;
                if (this.size >= this.maxSize) {
                    this.list.remove(tailItem);
                    delete this.hash[tailItem.key];
                    this.size--;
                }
                if (node = this.hash[key]) {
                    node.val = val;
                    this.list.moveToFront(node);
                } else {
                    node = new Node(key, val);
                    this.list.add(node);
                    this.hash[key] = node;
                    this.size++;
                }
            },
            get: function get(key) {
                var node = this.hash[key];
                if (node) {
                    this.list.moveToFront(node);
                    return node.val;
                }
            },
            reset: function reset() {
                this.size = 0;
                this.hash = {};
                this.list = new List();
            }
        });
        function List() {
            this.head = this.tail = null;
        }
        _.mixin(List.prototype, {
            add: function add(node) {
                if (this.head) {
                    node.next = this.head;
                    this.head.prev = node;
                }
                this.head = node;
                this.tail = this.tail || node;
            },
            remove: function remove(node) {
                node.prev ? node.prev.next = node.next : this.head = node.next;
                node.next ? node.next.prev = node.prev : this.tail = node.prev;
            },
            moveToFront: function(node) {
                this.remove(node);
                this.add(node);
            }
        });
        function Node(key, val) {
            this.key = key;
            this.val = val;
            this.prev = this.next = null;
        }
        return LruCache;
    }();
    var PersistentStorage = function() {
        "use strict";
        var LOCAL_STORAGE;
        try {
            LOCAL_STORAGE = window.localStorage;
            LOCAL_STORAGE.setItem("~~~", "!");
            LOCAL_STORAGE.removeItem("~~~");
        } catch (err) {
            LOCAL_STORAGE = null;
        }
        function PersistentStorage(namespace, override) {
            this.prefix = [ "__", namespace, "__" ].join("");
            this.ttlKey = "__ttl__";
            this.keyMatcher = new RegExp("^" + _.escapeRegExChars(this.prefix));
            this.ls = override || LOCAL_STORAGE;
            !this.ls && this._noop();
        }
        _.mixin(PersistentStorage.prototype, {
            _prefix: function(key) {
                return this.prefix + key;
            },
            _ttlKey: function(key) {
                return this._prefix(key) + this.ttlKey;
            },
            _noop: function() {
                this.get = this.set = this.remove = this.clear = this.isExpired = _.noop;
            },
            _safeSet: function(key, val) {
                try {
                    this.ls.setItem(key, val);
                } catch (err) {
                    if (err.name === "QuotaExceededError") {
                        this.clear();
                        this._noop();
                    }
                }
            },
            get: function(key) {
                if (this.isExpired(key)) {
                    this.remove(key);
                }
                return decode(this.ls.getItem(this._prefix(key)));
            },
            set: function(key, val, ttl) {
                if (_.isNumber(ttl)) {
                    this._safeSet(this._ttlKey(key), encode(now() + ttl));
                } else {
                    this.ls.removeItem(this._ttlKey(key));
                }
                return this._safeSet(this._prefix(key), encode(val));
            },
            remove: function(key) {
                this.ls.removeItem(this._ttlKey(key));
                this.ls.removeItem(this._prefix(key));
                return this;
            },
            clear: function() {
                var i, keys = gatherMatchingKeys(this.keyMatcher);
                for (i = keys.length; i--; ) {
                    this.remove(keys[i]);
                }
                return this;
            },
            isExpired: function(key) {
                var ttl = decode(this.ls.getItem(this._ttlKey(key)));
                return _.isNumber(ttl) && now() > ttl ? true : false;
            }
        });
        return PersistentStorage;
        function now() {
            return new Date().getTime();
        }
        function encode(val) {
            return JSON.stringify(_.isUndefined(val) ? null : val);
        }
        function decode(val) {
            return $.parseJSON(val);
        }
        function gatherMatchingKeys(keyMatcher) {
            var i, key, keys = [], len = LOCAL_STORAGE.length;
            for (i = 0; i < len; i++) {
                if ((key = LOCAL_STORAGE.key(i)).match(keyMatcher)) {
                    keys.push(key.replace(keyMatcher, ""));
                }
            }
            return keys;
        }
    }();
    var Transport = function() {
        "use strict";
        var pendingRequestsCount = 0, pendingRequests = {}, sharedCache = new LruCache(10);
        function Transport(o) {
            o = o || {};
            this.maxPendingRequests = o.maxPendingRequests || 6;
            this.cancelled = false;
            this.lastReq = null;
            this._send = o.transport;
            this._get = o.limiter ? o.limiter(this._get) : this._get;
            this._cache = o.cache === false ? new LruCache(0) : sharedCache;
        }
        Transport.setMaxPendingRequests = function setMaxPendingRequests(num) {
            this.maxPendingRequests = num;
        };
        Transport.resetCache = function resetCache() {
            sharedCache.reset();
        };
        _.mixin(Transport.prototype, {
            _fingerprint: function fingerprint(o) {
                o = o || {};
                return o.url + o.type + $.param(o.data || {});
            },
            _get: function(o, cb) {
                var that = this, fingerprint, jqXhr;
                fingerprint = this._fingerprint(o);
                if (this.cancelled || fingerprint !== this.lastReq) {
                    return;
                }
                if (jqXhr = pendingRequests[fingerprint]) {
                    jqXhr.done(done).fail(fail);
                } else if (pendingRequestsCount < this.maxPendingRequests) {
                    pendingRequestsCount++;
                    pendingRequests[fingerprint] = this._send(o).done(done).fail(fail).always(always);
                } else {
                    this.onDeckRequestArgs = [].slice.call(arguments, 0);
                }
                function done(resp) {
                    cb(null, resp);
                    that._cache.set(fingerprint, resp);
                }
                function fail() {
                    cb(true);
                }
                function always() {
                    pendingRequestsCount--;
                    delete pendingRequests[fingerprint];
                    if (that.onDeckRequestArgs) {
                        that._get.apply(that, that.onDeckRequestArgs);
                        that.onDeckRequestArgs = null;
                    }
                }
            },
            get: function(o, cb) {
                var resp, fingerprint;
                cb = cb || $.noop;
                o = _.isString(o) ? {
                    url: o
                } : o || {};
                fingerprint = this._fingerprint(o);
                this.cancelled = false;
                this.lastReq = fingerprint;
                if (resp = this._cache.get(fingerprint)) {
                    cb(null, resp);
                } else {
                    this._get(o, cb);
                }
            },
            cancel: function() {
                this.cancelled = true;
            }
        });
        return Transport;
    }();
    var SearchIndex = window.SearchIndex = function() {
        "use strict";
        var CHILDREN = "c", IDS = "i";
        function SearchIndex(o) {
            o = o || {};
            if (!o.datumTokenizer || !o.queryTokenizer) {
                $.error("datumTokenizer and queryTokenizer are both required");
            }
            this.identify = o.identify || _.stringify;
            this.datumTokenizer = o.datumTokenizer;
            this.queryTokenizer = o.queryTokenizer;
            this.matchAnyQueryToken = o.matchAnyQueryToken;
            this.reset();
        }
        _.mixin(SearchIndex.prototype, {
            bootstrap: function bootstrap(o) {
                this.datums = o.datums;
                this.trie = o.trie;
            },
            add: function(data) {
                var that = this;
                data = _.isArray(data) ? data : [ data ];
                _.each(data, function(datum) {
                    var id, tokens;
                    that.datums[id = that.identify(datum)] = datum;
                    tokens = normalizeTokens(that.datumTokenizer(datum));
                    _.each(tokens, function(token) {
                        var node, chars, ch;
                        node = that.trie;
                        chars = token.split("");
                        while (ch = chars.shift()) {
                            node = node[CHILDREN][ch] || (node[CHILDREN][ch] = newNode());
                            node[IDS].push(id);
                        }
                    });
                });
            },
            get: function get(ids) {
                var that = this;
                return _.map(ids, function(id) {
                    return that.datums[id];
                });
            },
            search: function search(query) {
                var that = this, tokens, matches;
                tokens = normalizeTokens(this.queryTokenizer(query));
                _.each(tokens, function(token) {
                    var node, chars, ch, ids;
                    if (matches && matches.length === 0 && !that.matchAnyQueryToken) {
                        return false;
                    }
                    node = that.trie;
                    chars = token.split("");
                    while (node && (ch = chars.shift())) {
                        node = node[CHILDREN][ch];
                    }
                    if (node && chars.length === 0) {
                        ids = node[IDS].slice(0);
                        matches = matches ? getIntersection(matches, ids) : ids;
                    } else {
                        if (!that.matchAnyQueryToken) {
                            matches = [];
                            return false;
                        }
                    }
                });
                return matches ? _.map(unique(matches), function(id) {
                    return that.datums[id];
                }) : [];
            },
            all: function all() {
                var values = [];
                for (var key in this.datums) {
                    values.push(this.datums[key]);
                }
                return values;
            },
            reset: function reset() {
                this.datums = {};
                this.trie = newNode();
            },
            serialize: function serialize() {
                return {
                    datums: this.datums,
                    trie: this.trie
                };
            }
        });
        return SearchIndex;
        function normalizeTokens(tokens) {
            tokens = _.filter(tokens, function(token) {
                return !!token;
            });
            tokens = _.map(tokens, function(token) {
                return token.toLowerCase();
            });
            return tokens;
        }
        function newNode() {
            var node = {};
            node[IDS] = [];
            node[CHILDREN] = {};
            return node;
        }
        function unique(array) {
            var seen = {}, uniques = [];
            for (var i = 0, len = array.length; i < len; i++) {
                if (!seen[array[i]]) {
                    seen[array[i]] = true;
                    uniques.push(array[i]);
                }
            }
            return uniques;
        }
        function getIntersection(arrayA, arrayB) {
            var ai = 0, bi = 0, intersection = [];
            arrayA = arrayA.sort();
            arrayB = arrayB.sort();
            var lenArrayA = arrayA.length, lenArrayB = arrayB.length;
            while (ai < lenArrayA && bi < lenArrayB) {
                if (arrayA[ai] < arrayB[bi]) {
                    ai++;
                } else if (arrayA[ai] > arrayB[bi]) {
                    bi++;
                } else {
                    intersection.push(arrayA[ai]);
                    ai++;
                    bi++;
                }
            }
            return intersection;
        }
    }();
    var Prefetch = function() {
        "use strict";
        var keys;
        keys = {
            data: "data",
            protocol: "protocol",
            thumbprint: "thumbprint"
        };
        function Prefetch(o) {
            this.url = o.url;
            this.ttl = o.ttl;
            this.cache = o.cache;
            this.prepare = o.prepare;
            this.transform = o.transform;
            this.transport = o.transport;
            this.thumbprint = o.thumbprint;
            this.storage = new PersistentStorage(o.cacheKey);
        }
        _.mixin(Prefetch.prototype, {
            _settings: function settings() {
                return {
                    url: this.url,
                    type: "GET",
                    dataType: "json"
                };
            },
            store: function store(data) {
                if (!this.cache) {
                    return;
                }
                this.storage.set(keys.data, data, this.ttl);
                this.storage.set(keys.protocol, location.protocol, this.ttl);
                this.storage.set(keys.thumbprint, this.thumbprint, this.ttl);
            },
            fromCache: function fromCache() {
                var stored = {}, isExpired;
                if (!this.cache) {
                    return null;
                }
                stored.data = this.storage.get(keys.data);
                stored.protocol = this.storage.get(keys.protocol);
                stored.thumbprint = this.storage.get(keys.thumbprint);
                isExpired = stored.thumbprint !== this.thumbprint || stored.protocol !== location.protocol;
                return stored.data && !isExpired ? stored.data : null;
            },
            fromNetwork: function(cb) {
                var that = this, settings;
                if (!cb) {
                    return;
                }
                settings = this.prepare(this._settings());
                this.transport(settings).fail(onError).done(onResponse);
                function onError() {
                    cb(true);
                }
                function onResponse(resp) {
                    cb(null, that.transform(resp));
                }
            },
            clear: function clear() {
                this.storage.clear();
                return this;
            }
        });
        return Prefetch;
    }();
    var Remote = function() {
        "use strict";
        function Remote(o) {
            this.url = o.url;
            this.prepare = o.prepare;
            this.transform = o.transform;
            this.indexResponse = o.indexResponse;
            this.transport = new Transport({
                cache: o.cache,
                limiter: o.limiter,
                transport: o.transport,
                maxPendingRequests: o.maxPendingRequests
            });
        }
        _.mixin(Remote.prototype, {
            _settings: function settings() {
                return {
                    url: this.url,
                    type: "GET",
                    dataType: "json"
                };
            },
            get: function get(query, cb) {
                var that = this, settings;
                if (!cb) {
                    return;
                }
                query = query || "";
                settings = this.prepare(query, this._settings());
                return this.transport.get(settings, onResponse);
                function onResponse(err, resp) {
                    err ? cb([]) : cb(that.transform(resp));
                }
            },
            cancelLastRequest: function cancelLastRequest() {
                this.transport.cancel();
            }
        });
        return Remote;
    }();
    var oParser = function() {
        "use strict";
        return function parse(o) {
            var defaults, sorter;
            defaults = {
                initialize: true,
                identify: _.stringify,
                datumTokenizer: null,
                queryTokenizer: null,
                matchAnyQueryToken: false,
                sufficient: 5,
                indexRemote: false,
                sorter: null,
                local: [],
                prefetch: null,
                remote: null
            };
            o = _.mixin(defaults, o || {});
            !o.datumTokenizer && $.error("datumTokenizer is required");
            !o.queryTokenizer && $.error("queryTokenizer is required");
            sorter = o.sorter;
            o.sorter = sorter ? function(x) {
                return x.sort(sorter);
            } : _.identity;
            o.local = _.isFunction(o.local) ? o.local() : o.local;
            o.prefetch = parsePrefetch(o.prefetch);
            o.remote = parseRemote(o.remote);
            return o;
        };
        function parsePrefetch(o) {
            var defaults;
            if (!o) {
                return null;
            }
            defaults = {
                url: null,
                ttl: 24 * 60 * 60 * 1e3,
                cache: true,
                cacheKey: null,
                thumbprint: "",
                prepare: _.identity,
                transform: _.identity,
                transport: null
            };
            o = _.isString(o) ? {
                url: o
            } : o;
            o = _.mixin(defaults, o);
            !o.url && $.error("prefetch requires url to be set");
            o.transform = o.filter || o.transform;
            o.cacheKey = o.cacheKey || o.url;
            o.thumbprint = VERSION + o.thumbprint;
            o.transport = o.transport ? callbackToDeferred(o.transport) : $.ajax;
            return o;
        }
        function parseRemote(o) {
            var defaults;
            if (!o) {
                return;
            }
            defaults = {
                url: null,
                cache: true,
                prepare: null,
                replace: null,
                wildcard: null,
                limiter: null,
                rateLimitBy: "debounce",
                rateLimitWait: 300,
                transform: _.identity,
                transport: null
            };
            o = _.isString(o) ? {
                url: o
            } : o;
            o = _.mixin(defaults, o);
            !o.url && $.error("remote requires url to be set");
            o.transform = o.filter || o.transform;
            o.prepare = toRemotePrepare(o);
            o.limiter = toLimiter(o);
            o.transport = o.transport ? callbackToDeferred(o.transport) : $.ajax;
            delete o.replace;
            delete o.wildcard;
            delete o.rateLimitBy;
            delete o.rateLimitWait;
            return o;
        }
        function toRemotePrepare(o) {
            var prepare, replace, wildcard;
            prepare = o.prepare;
            replace = o.replace;
            wildcard = o.wildcard;
            if (prepare) {
                return prepare;
            }
            if (replace) {
                prepare = prepareByReplace;
            } else if (o.wildcard) {
                prepare = prepareByWildcard;
            } else {
                prepare = identityPrepare;
            }
            return prepare;
            function prepareByReplace(query, settings) {
                settings.url = replace(settings.url, query);
                return settings;
            }
            function prepareByWildcard(query, settings) {
                settings.url = settings.url.replace(wildcard, encodeURIComponent(query));
                return settings;
            }
            function identityPrepare(query, settings) {
                return settings;
            }
        }
        function toLimiter(o) {
            var limiter, method, wait;
            limiter = o.limiter;
            method = o.rateLimitBy;
            wait = o.rateLimitWait;
            if (!limiter) {
                limiter = /^throttle$/i.test(method) ? throttle(wait) : debounce(wait);
            }
            return limiter;
            function debounce(wait) {
                return function debounce(fn) {
                    return _.debounce(fn, wait);
                };
            }
            function throttle(wait) {
                return function throttle(fn) {
                    return _.throttle(fn, wait);
                };
            }
        }
        function callbackToDeferred(fn) {
            return function wrapper(o) {
                var deferred = $.Deferred();
                fn(o, onSuccess, onError);
                return deferred;
                function onSuccess(resp) {
                    _.defer(function() {
                        deferred.resolve(resp);
                    });
                }
                function onError(err) {
                    _.defer(function() {
                        deferred.reject(err);
                    });
                }
            };
        }
    }();
    var Bloodhound = function() {
        "use strict";
        var old;
        old = window && window.Bloodhound;
        function Bloodhound(o) {
            o = oParser(o);
            this.sorter = o.sorter;
            this.identify = o.identify;
            this.sufficient = o.sufficient;
            this.indexRemote = o.indexRemote;
            this.local = o.local;
            this.remote = o.remote ? new Remote(o.remote) : null;
            this.prefetch = o.prefetch ? new Prefetch(o.prefetch) : null;
            this.index = new SearchIndex({
                identify: this.identify,
                datumTokenizer: o.datumTokenizer,
                queryTokenizer: o.queryTokenizer
            });
            o.initialize !== false && this.initialize();
        }
        Bloodhound.noConflict = function noConflict() {
            window && (window.Bloodhound = old);
            return Bloodhound;
        };
        Bloodhound.tokenizers = tokenizers;
        _.mixin(Bloodhound.prototype, {
            __ttAdapter: function ttAdapter() {
                var that = this;
                return this.remote ? withAsync : withoutAsync;
                function withAsync(query, sync, async) {
                    return that.search(query, sync, async);
                }
                function withoutAsync(query, sync) {
                    return that.search(query, sync);
                }
            },
            _loadPrefetch: function loadPrefetch() {
                var that = this, deferred, serialized;
                deferred = $.Deferred();
                if (!this.prefetch) {
                    deferred.resolve();
                } else if (serialized = this.prefetch.fromCache()) {
                    this.index.bootstrap(serialized);
                    deferred.resolve();
                } else {
                    this.prefetch.fromNetwork(done);
                }
                return deferred.promise();
                function done(err, data) {
                    if (err) {
                        return deferred.reject();
                    }
                    that.add(data);
                    that.prefetch.store(that.index.serialize());
                    deferred.resolve();
                }
            },
            _initialize: function initialize() {
                var that = this, deferred;
                this.clear();
                (this.initPromise = this._loadPrefetch()).done(addLocalToIndex);
                return this.initPromise;
                function addLocalToIndex() {
                    that.add(that.local);
                }
            },
            initialize: function initialize(force) {
                return !this.initPromise || force ? this._initialize() : this.initPromise;
            },
            add: function add(data) {
                this.index.add(data);
                return this;
            },
            get: function get(ids) {
                ids = _.isArray(ids) ? ids : [].slice.call(arguments);
                return this.index.get(ids);
            },
            search: function search(query, sync, async) {
                var that = this, local;
                sync = sync || _.noop;
                async = async || _.noop;
                local = this.sorter(this.index.search(query));
                sync(this.remote ? local.slice() : local);
                if (this.remote && local.length < this.sufficient) {
                    this.remote.get(query, processRemote);
                } else if (this.remote) {
                    this.remote.cancelLastRequest();
                }
                return this;
                function processRemote(remote) {
                    var nonDuplicates = [];
                    _.each(remote, function(r) {
                        !_.some(local, function(l) {
                            return that.identify(r) === that.identify(l);
                        }) && nonDuplicates.push(r);
                    });
                    that.indexRemote && that.add(nonDuplicates);
                    async(nonDuplicates);
                }
            },
            all: function all() {
                return this.index.all();
            },
            clear: function clear() {
                this.index.reset();
                return this;
            },
            clearPrefetchCache: function clearPrefetchCache() {
                this.prefetch && this.prefetch.clear();
                return this;
            },
            clearRemoteCache: function clearRemoteCache() {
                Transport.resetCache();
                return this;
            },
            ttAdapter: function ttAdapter() {
                return this.__ttAdapter();
            }
        });
        return Bloodhound;
    }();
    return Bloodhound;
});

(function(root, factory) {
    if (typeof define === "function" && define.amd) {
        define([ "jquery" ], function(a0) {
            return factory(a0);
        });
    } else if (typeof exports === "object") {
        module.exports = factory(require("jquery"));
    } else {
        factory(root["jQuery"]);
    }
})(this, function($) {
    var _ = function() {
        "use strict";
        return {
            isMsie: function() {
                return /(msie|trident)/i.test(navigator.userAgent) ? navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2] : false;
            },
            isBlankString: function(str) {
                return !str || /^\s*$/.test(str);
            },
            escapeRegExChars: function(str) {
                return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
            },
            isString: function(obj) {
                return typeof obj === "string";
            },
            isNumber: function(obj) {
                return typeof obj === "number";
            },
            isArray: $.isArray,
            isFunction: $.isFunction,
            isObject: $.isPlainObject,
            isUndefined: function(obj) {
                return typeof obj === "undefined";
            },
            isElement: function(obj) {
                return !!(obj && obj.nodeType === 1);
            },
            isJQuery: function(obj) {
                return obj instanceof $;
            },
            toStr: function toStr(s) {
                return _.isUndefined(s) || s === null ? "" : s + "";
            },
            bind: $.proxy,
            each: function(collection, cb) {
                $.each(collection, reverseArgs);
                function reverseArgs(index, value) {
                    return cb(value, index);
                }
            },
            map: $.map,
            filter: $.grep,
            every: function(obj, test) {
                var result = true;
                if (!obj) {
                    return result;
                }
                $.each(obj, function(key, val) {
                    if (!(result = test.call(null, val, key, obj))) {
                        return false;
                    }
                });
                return !!result;
            },
            some: function(obj, test) {
                var result = false;
                if (!obj) {
                    return result;
                }
                $.each(obj, function(key, val) {
                    if (result = test.call(null, val, key, obj)) {
                        return false;
                    }
                });
                return !!result;
            },
            mixin: $.extend,
            identity: function(x) {
                return x;
            },
            clone: function(obj) {
                return $.extend(true, {}, obj);
            },
            getIdGenerator: function() {
                var counter = 0;
                return function() {
                    return counter++;
                };
            },
            templatify: function templatify(obj) {
                return $.isFunction(obj) ? obj : template;
                function template() {
                    return String(obj);
                }
            },
            defer: function(fn) {
                setTimeout(fn, 0);
            },
            debounce: function(func, wait, immediate) {
                var timeout, result;
                return function() {
                    var context = this, args = arguments, later, callNow;
                    later = function() {
                        timeout = null;
                        if (!immediate) {
                            result = func.apply(context, args);
                        }
                    };
                    callNow = immediate && !timeout;
                    clearTimeout(timeout);
                    timeout = setTimeout(later, wait);
                    if (callNow) {
                        result = func.apply(context, args);
                    }
                    return result;
                };
            },
            throttle: function(func, wait) {
                var context, args, timeout, result, previous, later;
                previous = 0;
                later = function() {
                    previous = new Date();
                    timeout = null;
                    result = func.apply(context, args);
                };
                return function() {
                    var now = new Date(), remaining = wait - (now - previous);
                    context = this;
                    args = arguments;
                    if (remaining <= 0) {
                        clearTimeout(timeout);
                        timeout = null;
                        previous = now;
                        result = func.apply(context, args);
                    } else if (!timeout) {
                        timeout = setTimeout(later, remaining);
                    }
                    return result;
                };
            },
            stringify: function(val) {
                return _.isString(val) ? val : JSON.stringify(val);
            },
            guid: function() {
                function _p8(s) {
                    var p = (Math.random().toString(16) + "000000000").substr(2, 8);
                    return s ? "-" + p.substr(0, 4) + "-" + p.substr(4, 4) : p;
                }
                return "tt-" + _p8() + _p8(true) + _p8(true) + _p8();
            },
            noop: function() {}
        };
    }();
    var WWW = function() {
        "use strict";
        var defaultClassNames = {
            wrapper: "twitter-typeahead",
            input: "tt-input",
            hint: "tt-hint",
            menu: "tt-menu",
            dataset: "tt-dataset",
            suggestion: "tt-suggestion",
            selectable: "tt-selectable",
            empty: "tt-empty",
            open: "tt-open",
            cursor: "tt-cursor",
            highlight: "tt-highlight"
        };
        return build;
        function build(o) {
            var www, classes;
            classes = _.mixin({}, defaultClassNames, o);
            www = {
                css: buildCss(),
                classes: classes,
                html: buildHtml(classes),
                selectors: buildSelectors(classes)
            };
            return {
                css: www.css,
                html: www.html,
                classes: www.classes,
                selectors: www.selectors,
                mixin: function(o) {
                    _.mixin(o, www);
                }
            };
        }
        function buildHtml(c) {
            return {
                wrapper: '<span class="' + c.wrapper + '"></span>',
                menu: '<div role="listbox" class="' + c.menu + '"></div>'
            };
        }
        function buildSelectors(classes) {
            var selectors = {};
            _.each(classes, function(v, k) {
                selectors[k] = "." + v;
            });
            return selectors;
        }
        function buildCss() {
            var css = {
                wrapper: {
                    position: "relative",
                    display: "inline-block"
                },
                hint: {
                    position: "absolute",
                    top: "0",
                    left: "0",
                    borderColor: "transparent",
                    boxShadow: "none",
                    opacity: "1"
                },
                input: {
                    position: "relative",
                    verticalAlign: "top",
                    backgroundColor: "transparent"
                },
                inputWithNoHint: {
                    position: "relative",
                    verticalAlign: "top"
                },
                menu: {
                    position: "absolute",
                    top: "100%",
                    left: "0",
                    zIndex: "100",
                    display: "none"
                },
                ltr: {
                    left: "0",
                    right: "auto"
                },
                rtl: {
                    left: "auto",
                    right: " 0"
                }
            };
            if (_.isMsie()) {
                _.mixin(css.input, {
                    backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"
                });
            }
            return css;
        }
    }();
    var EventBus = function() {
        "use strict";
        var namespace, deprecationMap;
        namespace = "typeahead:";
        deprecationMap = {
            render: "rendered",
            cursorchange: "cursorchanged",
            select: "selected",
            autocomplete: "autocompleted"
        };
        function EventBus(o) {
            if (!o || !o.el) {
                $.error("EventBus initialized without el");
            }
            this.$el = $(o.el);
        }
        _.mixin(EventBus.prototype, {
            _trigger: function(type, args) {
                var $e = $.Event(namespace + type);
                this.$el.trigger.call(this.$el, $e, args || []);
                return $e;
            },
            before: function(type) {
                var args, $e;
                args = [].slice.call(arguments, 1);
                $e = this._trigger("before" + type, args);
                return $e.isDefaultPrevented();
            },
            trigger: function(type) {
                var deprecatedType;
                this._trigger(type, [].slice.call(arguments, 1));
                if (deprecatedType = deprecationMap[type]) {
                    this._trigger(deprecatedType, [].slice.call(arguments, 1));
                }
            }
        });
        return EventBus;
    }();
    var EventEmitter = function() {
        "use strict";
        var splitter = /\s+/, nextTick = getNextTick();
        return {
            onSync: onSync,
            onAsync: onAsync,
            off: off,
            trigger: trigger
        };
        function on(method, types, cb, context) {
            var type;
            if (!cb) {
                return this;
            }
            types = types.split(splitter);
            cb = context ? bindContext(cb, context) : cb;
            this._callbacks = this._callbacks || {};
            while (type = types.shift()) {
                this._callbacks[type] = this._callbacks[type] || {
                    sync: [],
                    async: []
                };
                this._callbacks[type][method].push(cb);
            }
            return this;
        }
        function onAsync(types, cb, context) {
            return on.call(this, "async", types, cb, context);
        }
        function onSync(types, cb, context) {
            return on.call(this, "sync", types, cb, context);
        }
        function off(types) {
            var type;
            if (!this._callbacks) {
                return this;
            }
            types = types.split(splitter);
            while (type = types.shift()) {
                delete this._callbacks[type];
            }
            return this;
        }
        function trigger(types) {
            var type, callbacks, args, syncFlush, asyncFlush;
            if (!this._callbacks) {
                return this;
            }
            types = types.split(splitter);
            args = [].slice.call(arguments, 1);
            while ((type = types.shift()) && (callbacks = this._callbacks[type])) {
                syncFlush = getFlush(callbacks.sync, this, [ type ].concat(args));
                asyncFlush = getFlush(callbacks.async, this, [ type ].concat(args));
                syncFlush() && nextTick(asyncFlush);
            }
            return this;
        }
        function getFlush(callbacks, context, args) {
            return flush;
            function flush() {
                var cancelled;
                for (var i = 0, len = callbacks.length; !cancelled && i < len; i += 1) {
                    cancelled = callbacks[i].apply(context, args) === false;
                }
                return !cancelled;
            }
        }
        function getNextTick() {
            var nextTickFn;
            if (window.setImmediate) {
                nextTickFn = function nextTickSetImmediate(fn) {
                    setImmediate(function() {
                        fn();
                    });
                };
            } else {
                nextTickFn = function nextTickSetTimeout(fn) {
                    setTimeout(function() {
                        fn();
                    }, 0);
                };
            }
            return nextTickFn;
        }
        function bindContext(fn, context) {
            return fn.bind ? fn.bind(context) : function() {
                fn.apply(context, [].slice.call(arguments, 0));
            };
        }
    }();
    var highlight = function(doc) {
        "use strict";
        var defaults = {
            node: null,
            pattern: null,
            tagName: "strong",
            className: null,
            wordsOnly: false,
            caseSensitive: false,
            diacriticInsensitive: false
        };
        var accented = {
            A: "[AaªÀ-Åà-åĀ-ąǍǎȀ-ȃȦȧᴬᵃḀḁẚẠ-ảₐ℀℁℻⒜Ⓐⓐ㍱-㍴㎀-㎄㎈㎉㎩-㎯㏂㏊㏟㏿Ａａ]",
            B: "[BbᴮᵇḂ-ḇℬ⒝Ⓑⓑ㍴㎅-㎇㏃㏈㏔㏝Ｂｂ]",
            C: "[CcÇçĆ-čᶜ℀ℂ℃℅℆ℭⅭⅽ⒞Ⓒⓒ㍶㎈㎉㎝㎠㎤㏄-㏇Ｃｃ]",
            D: "[DdĎďǄ-ǆǱ-ǳᴰᵈḊ-ḓⅅⅆⅮⅾ⒟Ⓓⓓ㋏㍲㍷-㍹㎗㎭-㎯㏅㏈Ｄｄ]",
            E: "[EeÈ-Ëè-ëĒ-ěȄ-ȇȨȩᴱᵉḘ-ḛẸ-ẽₑ℡ℯℰⅇ⒠Ⓔⓔ㉐㋍㋎Ｅｅ]",
            F: "[FfᶠḞḟ℉ℱ℻⒡Ⓕⓕ㎊-㎌㎙ﬀ-ﬄＦｆ]",
            G: "[GgĜ-ģǦǧǴǵᴳᵍḠḡℊ⒢Ⓖⓖ㋌㋍㎇㎍-㎏㎓㎬㏆㏉㏒㏿Ｇｇ]",
            H: "[HhĤĥȞȟʰᴴḢ-ḫẖℋ-ℎ⒣Ⓗⓗ㋌㍱㎐-㎔㏊㏋㏗Ｈｈ]",
            I: "[IiÌ-Ïì-ïĨ-İĲĳǏǐȈ-ȋᴵᵢḬḭỈ-ịⁱℐℑℹⅈⅠ-ⅣⅥ-ⅨⅪⅫⅰ-ⅳⅵ-ⅸⅺⅻ⒤Ⓘⓘ㍺㏌㏕ﬁﬃＩｉ]",
            J: "[JjĲ-ĵǇ-ǌǰʲᴶⅉ⒥ⒿⓙⱼＪｊ]",
            K: "[KkĶķǨǩᴷᵏḰ-ḵK⒦Ⓚⓚ㎄㎅㎉㎏㎑㎘㎞㎢㎦㎪㎸㎾㏀㏆㏍-㏏Ｋｋ]",
            L: "[LlĹ-ŀǇ-ǉˡᴸḶḷḺ-ḽℒℓ℡Ⅼⅼ⒧Ⓛⓛ㋏㎈㎉㏐-㏓㏕㏖㏿ﬂﬄＬｌ]",
            M: "[MmᴹᵐḾ-ṃ℠™ℳⅯⅿ⒨Ⓜⓜ㍷-㍹㎃㎆㎎㎒㎖㎙-㎨㎫㎳㎷㎹㎽㎿㏁㏂㏎㏐㏔-㏖㏘㏙㏞㏟Ｍｍ]",
            N: "[NnÑñŃ-ŉǊ-ǌǸǹᴺṄ-ṋⁿℕ№⒩Ⓝⓝ㎁㎋㎚㎱㎵㎻㏌㏑Ｎｎ]",
            O: "[OoºÒ-Öò-öŌ-őƠơǑǒǪǫȌ-ȏȮȯᴼᵒỌ-ỏₒ℅№ℴ⒪Ⓞⓞ㍵㏇㏒㏖Ｏｏ]",
            P: "[PpᴾᵖṔ-ṗℙ⒫Ⓟⓟ㉐㍱㍶㎀㎊㎩-㎬㎰㎴㎺㏋㏗-㏚Ｐｐ]",
            Q: "[Qqℚ⒬Ⓠⓠ㏃Ｑｑ]",
            R: "[RrŔ-řȐ-ȓʳᴿᵣṘ-ṛṞṟ₨ℛ-ℝ⒭Ⓡⓡ㋍㍴㎭-㎯㏚㏛Ｒｒ]",
            S: "[SsŚ-šſȘșˢṠ-ṣ₨℁℠⒮Ⓢⓢ㎧㎨㎮-㎳㏛㏜ﬆＳｓ]",
            T: "[TtŢ-ťȚțᵀᵗṪ-ṱẗ℡™⒯Ⓣⓣ㉐㋏㎔㏏ﬅﬆＴｔ]",
            U: "[UuÙ-Üù-üŨ-ųƯưǓǔȔ-ȗᵁᵘᵤṲ-ṷỤ-ủ℆⒰Ⓤⓤ㍳㍺Ｕｕ]",
            V: "[VvᵛᵥṼ-ṿⅣ-Ⅷⅳ-ⅷ⒱Ⓥⓥⱽ㋎㍵㎴-㎹㏜㏞Ｖｖ]",
            W: "[WwŴŵʷᵂẀ-ẉẘ⒲Ⓦⓦ㎺-㎿㏝Ｗｗ]",
            X: "[XxˣẊ-ẍₓ℻Ⅸ-Ⅻⅸ-ⅻ⒳Ⓧⓧ㏓Ｘｘ]",
            Y: "[YyÝýÿŶ-ŸȲȳʸẎẏẙỲ-ỹ⒴Ⓨⓨ㏉Ｙｙ]",
            Z: "[ZzŹ-žǱ-ǳᶻẐ-ẕℤℨ⒵Ⓩⓩ㎐-㎔Ｚｚ]"
        };
        return function hightlight(o) {
            var regex;
            o = _.mixin({}, defaults, o);
            if (!o.node || !o.pattern) {
                return;
            }
            o.pattern = _.isArray(o.pattern) ? o.pattern : [ o.pattern ];
            regex = getRegex(o.pattern, o.caseSensitive, o.wordsOnly, o.diacriticInsensitive);
            traverse(o.node, hightlightTextNode);
            function hightlightTextNode(textNode) {
                var match, patternNode, wrapperNode;
                if (match = regex.exec(textNode.data)) {
                    wrapperNode = doc.createElement(o.tagName);
                    o.className && (wrapperNode.className = o.className);
                    patternNode = textNode.splitText(match.index);
                    patternNode.splitText(match[0].length);
                    wrapperNode.appendChild(patternNode.cloneNode(true));
                    textNode.parentNode.replaceChild(wrapperNode, patternNode);
                }
                return !!match;
            }
            function traverse(el, hightlightTextNode) {
                var childNode, TEXT_NODE_TYPE = 3;
                for (var i = 0; i < el.childNodes.length; i++) {
                    childNode = el.childNodes[i];
                    if (childNode.nodeType === TEXT_NODE_TYPE) {
                        i += hightlightTextNode(childNode) ? 1 : 0;
                    } else {
                        traverse(childNode, hightlightTextNode);
                    }
                }
            }
        };
        function accent_replacer(chr) {
            return accented[chr.toUpperCase()] || chr;
        }
        function getRegex(patterns, caseSensitive, wordsOnly, diacriticInsensitive) {
            var escapedPatterns = [], regexStr;
            for (var i = 0, len = patterns.length; i < len; i++) {
                var escapedWord = _.escapeRegExChars(patterns[i]);
                if (diacriticInsensitive) {
                    escapedWord = escapedWord.replace(/\S/g, accent_replacer);
                }
                escapedPatterns.push(escapedWord);
            }
            regexStr = wordsOnly ? "\\b(" + escapedPatterns.join("|") + ")\\b" : "(" + escapedPatterns.join("|") + ")";
            return caseSensitive ? new RegExp(regexStr) : new RegExp(regexStr, "i");
        }
    }(window.document);
    var Input = function() {
        "use strict";
        var specialKeyCodeMap;
        specialKeyCodeMap = {
            9: "tab",
            27: "esc",
            37: "left",
            39: "right",
            13: "enter",
            38: "up",
            40: "down"
        };
        function Input(o, www) {
            o = o || {};
            if (!o.input) {
                $.error("input is missing");
            }
            www.mixin(this);
            this.$hint = $(o.hint);
            this.$input = $(o.input);
            this.$input.attr({
                "aria-activedescendant": "",
                "aria-owns": this.$input.attr("id") + "_listbox",
                role: "combobox",
                "aria-readonly": "true",
                "aria-autocomplete": "list"
            });
            $(www.menu).attr("id", this.$input.attr("id") + "_listbox");
            this.query = this.$input.val();
            this.queryWhenFocused = this.hasFocus() ? this.query : null;
            this.$overflowHelper = buildOverflowHelper(this.$input);
            this._checkLanguageDirection();
            if (this.$hint.length === 0) {
                this.setHint = this.getHint = this.clearHint = this.clearHintIfInvalid = _.noop;
            }
            this.onSync("cursorchange", this._updateDescendent);
        }
        Input.normalizeQuery = function(str) {
            return _.toStr(str).replace(/^\s*/g, "").replace(/\s{2,}/g, " ");
        };
        _.mixin(Input.prototype, EventEmitter, {
            _onBlur: function onBlur() {
                this.resetInputValue();
                this.trigger("blurred");
            },
            _onFocus: function onFocus() {
                this.queryWhenFocused = this.query;
                this.trigger("focused");
            },
            _onKeydown: function onKeydown($e) {
                var keyName = specialKeyCodeMap[$e.which || $e.keyCode];
                this._managePreventDefault(keyName, $e);
                if (keyName && this._shouldTrigger(keyName, $e)) {
                    this.trigger(keyName + "Keyed", $e);
                }
            },
            _onInput: function onInput() {
                this._setQuery(this.getInputValue());
                this.clearHintIfInvalid();
                this._checkLanguageDirection();
            },
            _managePreventDefault: function managePreventDefault(keyName, $e) {
                var preventDefault;
                switch (keyName) {
                  case "up":
                  case "down":
                    preventDefault = !withModifier($e);
                    break;

                  default:
                    preventDefault = false;
                }
                preventDefault && $e.preventDefault();
            },
            _shouldTrigger: function shouldTrigger(keyName, $e) {
                var trigger;
                switch (keyName) {
                  case "tab":
                    trigger = !withModifier($e);
                    break;

                  default:
                    trigger = true;
                }
                return trigger;
            },
            _checkLanguageDirection: function checkLanguageDirection() {
                var dir = (this.$input.css("direction") || "ltr").toLowerCase();
                if (this.dir !== dir) {
                    this.dir = dir;
                    this.$hint.attr("dir", dir);
                    this.trigger("langDirChanged", dir);
                }
            },
            _setQuery: function setQuery(val, silent) {
                var areEquivalent, hasDifferentWhitespace;
                areEquivalent = areQueriesEquivalent(val, this.query);
                hasDifferentWhitespace = areEquivalent ? this.query.length !== val.length : false;
                this.query = val;
                if (!silent && !areEquivalent) {
                    this.trigger("queryChanged", this.query);
                } else if (!silent && hasDifferentWhitespace) {
                    this.trigger("whitespaceChanged", this.query);
                }
            },
            _updateDescendent: function updateDescendent(event, id) {
                this.$input.attr("aria-activedescendant", id);
            },
            bind: function() {
                var that = this, onBlur, onFocus, onKeydown, onInput;
                onBlur = _.bind(this._onBlur, this);
                onFocus = _.bind(this._onFocus, this);
                onKeydown = _.bind(this._onKeydown, this);
                onInput = _.bind(this._onInput, this);
                this.$input.on("blur.tt", onBlur).on("focus.tt", onFocus).on("keydown.tt", onKeydown);
                if (!_.isMsie() || _.isMsie() > 9) {
                    this.$input.on("input.tt", onInput);
                } else {
                    this.$input.on("keydown.tt keypress.tt cut.tt paste.tt", function($e) {
                        if (specialKeyCodeMap[$e.which || $e.keyCode]) {
                            return;
                        }
                        _.defer(_.bind(that._onInput, that, $e));
                    });
                }
                return this;
            },
            focus: function focus() {
                this.$input.focus();
            },
            blur: function blur() {
                this.$input.blur();
            },
            getLangDir: function getLangDir() {
                return this.dir;
            },
            getQuery: function getQuery() {
                return this.query || "";
            },
            setQuery: function setQuery(val, silent) {
                this.setInputValue(val);
                this._setQuery(val, silent);
            },
            hasQueryChangedSinceLastFocus: function hasQueryChangedSinceLastFocus() {
                return this.query !== this.queryWhenFocused;
            },
            getInputValue: function getInputValue() {
                return this.$input.val();
            },
            setInputValue: function setInputValue(value) {
                this.$input.val(value);
                this.clearHintIfInvalid();
                this._checkLanguageDirection();
            },
            resetInputValue: function resetInputValue() {
                this.setInputValue(this.query);
            },
            getHint: function getHint() {
                return this.$hint.val();
            },
            setHint: function setHint(value) {
                this.$hint.val(value);
            },
            clearHint: function clearHint() {
                this.setHint("");
            },
            clearHintIfInvalid: function clearHintIfInvalid() {
                var val, hint, valIsPrefixOfHint, isValid;
                val = this.getInputValue();
                hint = this.getHint();
                valIsPrefixOfHint = val !== hint && hint.indexOf(val) === 0;
                isValid = val !== "" && valIsPrefixOfHint && !this.hasOverflow();
                !isValid && this.clearHint();
            },
            hasFocus: function hasFocus() {
                return this.$input.is(":focus");
            },
            hasOverflow: function hasOverflow() {
                var constraint = this.$input.width() - 2;
                this.$overflowHelper.text(this.getInputValue());
                return this.$overflowHelper.width() >= constraint;
            },
            isCursorAtEnd: function() {
                var valueLength, selectionStart, range;
                valueLength = this.$input.val().length;
                selectionStart = this.$input[0].selectionStart;
                if (_.isNumber(selectionStart)) {
                    return selectionStart === valueLength;
                } else if (document.selection) {
                    range = document.selection.createRange();
                    range.moveStart("character", -valueLength);
                    return valueLength === range.text.length;
                }
                return true;
            },
            destroy: function destroy() {
                this.$hint.off(".tt");
                this.$input.off(".tt");
                this.$overflowHelper.remove();
                this.$hint = this.$input = this.$overflowHelper = $("<div>");
            }
        });
        return Input;
        function buildOverflowHelper($input) {
            return $('<pre aria-hidden="true"></pre>').css({
                position: "absolute",
                visibility: "hidden",
                whiteSpace: "pre",
                fontFamily: $input.css("font-family"),
                fontSize: $input.css("font-size"),
                fontStyle: $input.css("font-style"),
                fontVariant: $input.css("font-variant"),
                fontWeight: $input.css("font-weight"),
                wordSpacing: $input.css("word-spacing"),
                letterSpacing: $input.css("letter-spacing"),
                textIndent: $input.css("text-indent"),
                textRendering: $input.css("text-rendering"),
                textTransform: $input.css("text-transform")
            }).insertAfter($input);
        }
        function areQueriesEquivalent(a, b) {
            return Input.normalizeQuery(a) === Input.normalizeQuery(b);
        }
        function withModifier($e) {
            return $e.altKey || $e.ctrlKey || $e.metaKey || $e.shiftKey;
        }
    }();
    var Dataset = function() {
        "use strict";
        var keys, nameGenerator;
        keys = {
            dataset: "tt-selectable-dataset",
            val: "tt-selectable-display",
            obj: "tt-selectable-object"
        };
        nameGenerator = _.getIdGenerator();
        function Dataset(o, www) {
            o = o || {};
            o.templates = o.templates || {};
            o.templates.notFound = o.templates.notFound || o.templates.empty;
            if (!o.source) {
                $.error("missing source");
            }
            if (!o.node) {
                $.error("missing node");
            }
            if (o.name && !isValidName(o.name)) {
                $.error("invalid dataset name: " + o.name);
            }
            www.mixin(this);
            this.highlight = !!o.highlight;
            this.name = _.toStr(o.name || nameGenerator());
            this.limit = o.limit || 5;
            this.displayFn = getDisplayFn(o.display || o.displayKey);
            this.templates = getTemplates(o.templates, this.displayFn);
            this.source = o.source.__ttAdapter ? o.source.__ttAdapter() : o.source;
            this.async = _.isUndefined(o.async) ? this.source.length > 2 : !!o.async;
            this._resetLastSuggestion();
            this.$el = $(o.node).attr("role", "presentation").addClass(this.classes.dataset).addClass(this.classes.dataset + "-" + this.name);
        }
        Dataset.extractData = function extractData(el) {
            var $el = $(el);
            if ($el.data(keys.obj)) {
                return {
                    dataset: $el.data(keys.dataset) || "",
                    val: $el.data(keys.val) || "",
                    obj: $el.data(keys.obj) || null
                };
            }
            return null;
        };
        _.mixin(Dataset.prototype, EventEmitter, {
            _overwrite: function overwrite(query, suggestions) {
                suggestions = suggestions || [];
                if (suggestions.length) {
                    this._renderSuggestions(query, suggestions);
                } else if (this.async && this.templates.pending) {
                    this._renderPending(query);
                } else if (!this.async && this.templates.notFound) {
                    this._renderNotFound(query);
                } else {
                    this._empty();
                }
                this.trigger("rendered", suggestions, false, this.name);
            },
            _append: function append(query, suggestions) {
                suggestions = suggestions || [];
                if (suggestions.length && this.$lastSuggestion.length) {
                    this._appendSuggestions(query, suggestions);
                } else if (suggestions.length) {
                    this._renderSuggestions(query, suggestions);
                } else if (!this.$lastSuggestion.length && this.templates.notFound) {
                    this._renderNotFound(query);
                }
                this.trigger("rendered", suggestions, true, this.name);
            },
            _renderSuggestions: function renderSuggestions(query, suggestions) {
                var $fragment;
                $fragment = this._getSuggestionsFragment(query, suggestions);
                this.$lastSuggestion = $fragment.children().last();
                this.$el.html($fragment).prepend(this._getHeader(query, suggestions)).append(this._getFooter(query, suggestions));
            },
            _appendSuggestions: function appendSuggestions(query, suggestions) {
                var $fragment, $lastSuggestion;
                $fragment = this._getSuggestionsFragment(query, suggestions);
                $lastSuggestion = $fragment.children().last();
                this.$lastSuggestion.after($fragment);
                this.$lastSuggestion = $lastSuggestion;
            },
            _renderPending: function renderPending(query) {
                var template = this.templates.pending;
                this._resetLastSuggestion();
                template && this.$el.html(template({
                    query: query,
                    dataset: this.name
                }));
            },
            _renderNotFound: function renderNotFound(query) {
                var template = this.templates.notFound;
                this._resetLastSuggestion();
                template && this.$el.html(template({
                    query: query,
                    dataset: this.name
                }));
            },
            _empty: function empty() {
                this.$el.empty();
                this._resetLastSuggestion();
            },
            _getSuggestionsFragment: function getSuggestionsFragment(query, suggestions) {
                var that = this, fragment;
                fragment = document.createDocumentFragment();
                _.each(suggestions, function getSuggestionNode(suggestion) {
                    var $el, context;
                    context = that._injectQuery(query, suggestion);
                    $el = $(that.templates.suggestion(context)).data(keys.dataset, that.name).data(keys.obj, suggestion).data(keys.val, that.displayFn(suggestion)).addClass(that.classes.suggestion + " " + that.classes.selectable);
                    fragment.appendChild($el[0]);
                });
                this.highlight && highlight({
                    className: this.classes.highlight,
                    node: fragment,
                    pattern: query
                });
                return $(fragment);
            },
            _getFooter: function getFooter(query, suggestions) {
                return this.templates.footer ? this.templates.footer({
                    query: query,
                    suggestions: suggestions,
                    dataset: this.name
                }) : null;
            },
            _getHeader: function getHeader(query, suggestions) {
                return this.templates.header ? this.templates.header({
                    query: query,
                    suggestions: suggestions,
                    dataset: this.name
                }) : null;
            },
            _resetLastSuggestion: function resetLastSuggestion() {
                this.$lastSuggestion = $();
            },
            _injectQuery: function injectQuery(query, obj) {
                return _.isObject(obj) ? _.mixin({
                    _query: query
                }, obj) : obj;
            },
            update: function update(query) {
                var that = this, canceled = false, syncCalled = false, rendered = 0;
                this.cancel();
                this.cancel = function cancel() {
                    canceled = true;
                    that.cancel = $.noop;
                    that.async && that.trigger("asyncCanceled", query, that.name);
                };
                this.source(query, sync, async);
                !syncCalled && sync([]);
                function sync(suggestions) {
                    if (syncCalled) {
                        return;
                    }
                    syncCalled = true;
                    suggestions = (suggestions || []).slice(0, that.limit);
                    rendered = suggestions.length;
                    that._overwrite(query, suggestions);
                    if (rendered < that.limit && that.async) {
                        that.trigger("asyncRequested", query, that.name);
                    }
                }
                function async(suggestions) {
                    suggestions = suggestions || [];
                    if (!canceled && rendered < that.limit) {
                        that.cancel = $.noop;
                        var idx = Math.abs(rendered - that.limit);
                        rendered += idx;
                        that._append(query, suggestions.slice(0, idx));
                        that.async && that.trigger("asyncReceived", query, that.name);
                    }
                }
            },
            cancel: $.noop,
            clear: function clear() {
                this._empty();
                this.cancel();
                this.trigger("cleared");
            },
            isEmpty: function isEmpty() {
                return this.$el.is(":empty");
            },
            destroy: function destroy() {
                this.$el = $("<div>");
            }
        });
        return Dataset;
        function getDisplayFn(display) {
            display = display || _.stringify;
            return _.isFunction(display) ? display : displayFn;
            function displayFn(obj) {
                return obj[display];
            }
        }
        function getTemplates(templates, displayFn) {
            return {
                notFound: templates.notFound && _.templatify(templates.notFound),
                pending: templates.pending && _.templatify(templates.pending),
                header: templates.header && _.templatify(templates.header),
                footer: templates.footer && _.templatify(templates.footer),
                suggestion: templates.suggestion || suggestionTemplate
            };
            function suggestionTemplate(context) {
                return $('<div role="option">').attr("id", _.guid()).text(displayFn(context));
            }
        }
        function isValidName(str) {
            return /^[_a-zA-Z0-9-]+$/.test(str);
        }
    }();
    var Menu = function() {
        "use strict";
        function Menu(o, www) {
            var that = this;
            o = o || {};
            if (!o.node) {
                $.error("node is required");
            }
            www.mixin(this);
            this.$node = $(o.node);
            this.query = null;
            this.datasets = _.map(o.datasets, initializeDataset);
            function initializeDataset(oDataset) {
                var node = that.$node.find(oDataset.node).first();
                oDataset.node = node.length ? node : $("<div>").appendTo(that.$node);
                return new Dataset(oDataset, www);
            }
        }
        _.mixin(Menu.prototype, EventEmitter, {
            _onSelectableClick: function onSelectableClick($e) {
                this.trigger("selectableClicked", $($e.currentTarget));
            },
            _onRendered: function onRendered(type, dataset, suggestions, async) {
                this.$node.toggleClass(this.classes.empty, this._allDatasetsEmpty());
                this.trigger("datasetRendered", dataset, suggestions, async);
            },
            _onCleared: function onCleared() {
                this.$node.toggleClass(this.classes.empty, this._allDatasetsEmpty());
                this.trigger("datasetCleared");
            },
            _propagate: function propagate() {
                this.trigger.apply(this, arguments);
            },
            _allDatasetsEmpty: function allDatasetsEmpty() {
                return _.every(this.datasets, _.bind(function isDatasetEmpty(dataset) {
                    var isEmpty = dataset.isEmpty();
                    this.$node.attr("aria-expanded", !isEmpty);
                    return isEmpty;
                }, this));
            },
            _getSelectables: function getSelectables() {
                return this.$node.find(this.selectors.selectable);
            },
            _removeCursor: function _removeCursor() {
                var $selectable = this.getActiveSelectable();
                $selectable && $selectable.removeClass(this.classes.cursor);
            },
            _ensureVisible: function ensureVisible($el) {
                var elTop, elBottom, nodeScrollTop, nodeHeight;
                elTop = $el.position().top;
                elBottom = elTop + $el.outerHeight(true);
                nodeScrollTop = this.$node.scrollTop();
                nodeHeight = this.$node.height() + parseInt(this.$node.css("paddingTop"), 10) + parseInt(this.$node.css("paddingBottom"), 10);
                if (elTop < 0) {
                    this.$node.scrollTop(nodeScrollTop + elTop);
                } else if (nodeHeight < elBottom) {
                    this.$node.scrollTop(nodeScrollTop + (elBottom - nodeHeight));
                }
            },
            bind: function() {
                var that = this, onSelectableClick;
                onSelectableClick = _.bind(this._onSelectableClick, this);
                this.$node.on("click.tt", this.selectors.selectable, onSelectableClick);
                this.$node.on("mouseover", this.selectors.selectable, function() {
                    that.setCursor($(this));
                });
                this.$node.on("mouseleave", function() {
                    that._removeCursor();
                });
                _.each(this.datasets, function(dataset) {
                    dataset.onSync("asyncRequested", that._propagate, that).onSync("asyncCanceled", that._propagate, that).onSync("asyncReceived", that._propagate, that).onSync("rendered", that._onRendered, that).onSync("cleared", that._onCleared, that);
                });
                return this;
            },
            isOpen: function isOpen() {
                return this.$node.hasClass(this.classes.open);
            },
            open: function open() {
                this.$node.scrollTop(0);
                this.$node.addClass(this.classes.open);
            },
            close: function close() {
                this.$node.attr("aria-expanded", false);
                this.$node.removeClass(this.classes.open);
                this._removeCursor();
            },
            setLanguageDirection: function setLanguageDirection(dir) {
                this.$node.attr("dir", dir);
            },
            selectableRelativeToCursor: function selectableRelativeToCursor(delta) {
                var $selectables, $oldCursor, oldIndex, newIndex;
                $oldCursor = this.getActiveSelectable();
                $selectables = this._getSelectables();
                oldIndex = $oldCursor ? $selectables.index($oldCursor) : -1;
                newIndex = oldIndex + delta;
                newIndex = (newIndex + 1) % ($selectables.length + 1) - 1;
                newIndex = newIndex < -1 ? $selectables.length - 1 : newIndex;
                return newIndex === -1 ? null : $selectables.eq(newIndex);
            },
            setCursor: function setCursor($selectable) {
                this._removeCursor();
                if ($selectable = $selectable && $selectable.first()) {
                    $selectable.addClass(this.classes.cursor);
                    this._ensureVisible($selectable);
                }
            },
            getSelectableData: function getSelectableData($el) {
                return $el && $el.length ? Dataset.extractData($el) : null;
            },
            getActiveSelectable: function getActiveSelectable() {
                var $selectable = this._getSelectables().filter(this.selectors.cursor).first();
                return $selectable.length ? $selectable : null;
            },
            getTopSelectable: function getTopSelectable() {
                var $selectable = this._getSelectables().first();
                return $selectable.length ? $selectable : null;
            },
            update: function update(query) {
                var isValidUpdate = query !== this.query;
                if (isValidUpdate) {
                    this.query = query;
                    _.each(this.datasets, updateDataset);
                }
                return isValidUpdate;
                function updateDataset(dataset) {
                    dataset.update(query);
                }
            },
            empty: function empty() {
                _.each(this.datasets, clearDataset);
                this.query = null;
                this.$node.addClass(this.classes.empty);
                function clearDataset(dataset) {
                    dataset.clear();
                }
            },
            destroy: function destroy() {
                this.$node.off(".tt");
                this.$node = $("<div>");
                _.each(this.datasets, destroyDataset);
                function destroyDataset(dataset) {
                    dataset.destroy();
                }
            }
        });
        return Menu;
    }();
    var Status = function() {
        "use strict";
        function Status(options) {
            this.$el = $("<span></span>", {
                role: "status",
                "aria-live": "polite"
            }).css({
                position: "absolute",
                padding: "0",
                border: "0",
                height: "1px",
                width: "1px",
                "margin-bottom": "-1px",
                "margin-right": "-1px",
                overflow: "hidden",
                clip: "rect(0 0 0 0)",
                "white-space": "nowrap"
            });
            options.$input.after(this.$el);
            _.each(options.menu.datasets, _.bind(function(dataset) {
                if (dataset.onSync) {
                    dataset.onSync("rendered", _.bind(this.update, this));
                    dataset.onSync("cleared", _.bind(this.cleared, this));
                }
            }, this));
        }
        _.mixin(Status.prototype, {
            update: function update(event, suggestions) {
                var length = suggestions.length;
                var words;
                if (length === 1) {
                    words = {
                        result: "result",
                        is: "is"
                    };
                } else {
                    words = {
                        result: "results",
                        is: "are"
                    };
                }
                this.$el.text(length + " " + words.result + " " + words.is + " available, use up and down arrow keys to navigate.");
            },
            cleared: function() {
                this.$el.text("");
            }
        });
        return Status;
    }();
    var DefaultMenu = function() {
        "use strict";
        var s = Menu.prototype;
        function DefaultMenu() {
            Menu.apply(this, [].slice.call(arguments, 0));
        }
        _.mixin(DefaultMenu.prototype, Menu.prototype, {
            open: function open() {
                !this._allDatasetsEmpty() && this._show();
                return s.open.apply(this, [].slice.call(arguments, 0));
            },
            close: function close() {
                this._hide();
                return s.close.apply(this, [].slice.call(arguments, 0));
            },
            _onRendered: function onRendered() {
                if (this._allDatasetsEmpty()) {
                    this._hide();
                } else {
                    this.isOpen() && this._show();
                }
                return s._onRendered.apply(this, [].slice.call(arguments, 0));
            },
            _onCleared: function onCleared() {
                if (this._allDatasetsEmpty()) {
                    this._hide();
                } else {
                    this.isOpen() && this._show();
                }
                return s._onCleared.apply(this, [].slice.call(arguments, 0));
            },
            setLanguageDirection: function setLanguageDirection(dir) {
                this.$node.css(dir === "ltr" ? this.css.ltr : this.css.rtl);
                return s.setLanguageDirection.apply(this, [].slice.call(arguments, 0));
            },
            _hide: function hide() {
                this.$node.hide();
            },
            _show: function show() {
                this.$node.css("display", "block");
            }
        });
        return DefaultMenu;
    }();
    var Typeahead = function() {
        "use strict";
        function Typeahead(o, www) {
            var onFocused, onBlurred, onEnterKeyed, onTabKeyed, onEscKeyed, onUpKeyed, onDownKeyed, onLeftKeyed, onRightKeyed, onQueryChanged, onWhitespaceChanged;
            o = o || {};
            if (!o.input) {
                $.error("missing input");
            }
            if (!o.menu) {
                $.error("missing menu");
            }
            if (!o.eventBus) {
                $.error("missing event bus");
            }
            www.mixin(this);
            this.eventBus = o.eventBus;
            this.minLength = _.isNumber(o.minLength) ? o.minLength : 1;
            this.input = o.input;
            this.menu = o.menu;
            this.enabled = true;
            this.autoselect = !!o.autoselect;
            this.active = false;
            this.input.hasFocus() && this.activate();
            this.dir = this.input.getLangDir();
            this._hacks();
            this.menu.bind().onSync("selectableClicked", this._onSelectableClicked, this).onSync("asyncRequested", this._onAsyncRequested, this).onSync("asyncCanceled", this._onAsyncCanceled, this).onSync("asyncReceived", this._onAsyncReceived, this).onSync("datasetRendered", this._onDatasetRendered, this).onSync("datasetCleared", this._onDatasetCleared, this);
            onFocused = c(this, "activate", "open", "_onFocused");
            onBlurred = c(this, "deactivate", "_onBlurred");
            onEnterKeyed = c(this, "isActive", "isOpen", "_onEnterKeyed");
            onTabKeyed = c(this, "isActive", "isOpen", "_onTabKeyed");
            onEscKeyed = c(this, "isActive", "_onEscKeyed");
            onUpKeyed = c(this, "isActive", "open", "_onUpKeyed");
            onDownKeyed = c(this, "isActive", "open", "_onDownKeyed");
            onLeftKeyed = c(this, "isActive", "isOpen", "_onLeftKeyed");
            onRightKeyed = c(this, "isActive", "isOpen", "_onRightKeyed");
            onQueryChanged = c(this, "_openIfActive", "_onQueryChanged");
            onWhitespaceChanged = c(this, "_openIfActive", "_onWhitespaceChanged");
            this.input.bind().onSync("focused", onFocused, this).onSync("blurred", onBlurred, this).onSync("enterKeyed", onEnterKeyed, this).onSync("tabKeyed", onTabKeyed, this).onSync("escKeyed", onEscKeyed, this).onSync("upKeyed", onUpKeyed, this).onSync("downKeyed", onDownKeyed, this).onSync("leftKeyed", onLeftKeyed, this).onSync("rightKeyed", onRightKeyed, this).onSync("queryChanged", onQueryChanged, this).onSync("whitespaceChanged", onWhitespaceChanged, this).onSync("langDirChanged", this._onLangDirChanged, this);
        }
        _.mixin(Typeahead.prototype, {
            _hacks: function hacks() {
                var $input, $menu;
                $input = this.input.$input || $("<div>");
                $menu = this.menu.$node || $("<div>");
                $input.on("blur.tt", function($e) {
                    var active, isActive, hasActive;
                    active = document.activeElement;
                    isActive = $menu.is(active);
                    hasActive = $menu.has(active).length > 0;
                    if (_.isMsie() && (isActive || hasActive)) {
                        $e.preventDefault();
                        $e.stopImmediatePropagation();
                        _.defer(function() {
                            $input.focus();
                        });
                    }
                });
                $menu.on("mousedown.tt", function($e) {
                    $e.preventDefault();
                });
            },
            _onSelectableClicked: function onSelectableClicked(type, $el) {
                this.select($el);
            },
            _onDatasetCleared: function onDatasetCleared() {
                this._updateHint();
            },
            _onDatasetRendered: function onDatasetRendered(type, suggestions, async, dataset) {
                this._updateHint();
                if (this.autoselect) {
                    var cursorClass = this.selectors.cursor.substr(1);
                    this.menu.$node.find(this.selectors.suggestion).first().addClass(cursorClass);
                }
                this.eventBus.trigger("render", suggestions, async, dataset);
            },
            _onAsyncRequested: function onAsyncRequested(type, dataset, query) {
                this.eventBus.trigger("asyncrequest", query, dataset);
            },
            _onAsyncCanceled: function onAsyncCanceled(type, dataset, query) {
                this.eventBus.trigger("asynccancel", query, dataset);
            },
            _onAsyncReceived: function onAsyncReceived(type, dataset, query) {
                this.eventBus.trigger("asyncreceive", query, dataset);
            },
            _onFocused: function onFocused() {
                this._minLengthMet() && this.menu.update(this.input.getQuery());
            },
            _onBlurred: function onBlurred() {
                if (this.input.hasQueryChangedSinceLastFocus()) {
                    this.eventBus.trigger("change", this.input.getQuery());
                }
            },
            _onEnterKeyed: function onEnterKeyed(type, $e) {
                var $selectable;
                if ($selectable = this.menu.getActiveSelectable()) {
                    if (this.select($selectable)) {
                        $e.preventDefault();
                        $e.stopPropagation();
                    }
                } else if (this.autoselect) {
                    if (this.select(this.menu.getTopSelectable())) {
                        $e.preventDefault();
                        $e.stopPropagation();
                    }
                }
            },
            _onTabKeyed: function onTabKeyed(type, $e) {
                var $selectable;
                if ($selectable = this.menu.getActiveSelectable()) {
                    this.select($selectable) && $e.preventDefault();
                } else if ($selectable = this.menu.getTopSelectable()) {
                    this.autocomplete($selectable) && $e.preventDefault();
                }
            },
            _onEscKeyed: function onEscKeyed() {
                this.close();
            },
            _onUpKeyed: function onUpKeyed() {
                this.moveCursor(-1);
            },
            _onDownKeyed: function onDownKeyed() {
                this.moveCursor(+1);
            },
            _onLeftKeyed: function onLeftKeyed() {
                if (this.dir === "rtl" && this.input.isCursorAtEnd()) {
                    this.autocomplete(this.menu.getActiveSelectable() || this.menu.getTopSelectable());
                }
            },
            _onRightKeyed: function onRightKeyed() {
                if (this.dir === "ltr" && this.input.isCursorAtEnd()) {
                    this.autocomplete(this.menu.getActiveSelectable() || this.menu.getTopSelectable());
                }
            },
            _onQueryChanged: function onQueryChanged(e, query) {
                this._minLengthMet(query) ? this.menu.update(query) : this.menu.empty();
            },
            _onWhitespaceChanged: function onWhitespaceChanged() {
                this._updateHint();
            },
            _onLangDirChanged: function onLangDirChanged(e, dir) {
                if (this.dir !== dir) {
                    this.dir = dir;
                    this.menu.setLanguageDirection(dir);
                }
            },
            _openIfActive: function openIfActive() {
                this.isActive() && this.open();
            },
            _minLengthMet: function minLengthMet(query) {
                query = _.isString(query) ? query : this.input.getQuery() || "";
                return query.length >= this.minLength;
            },
            _updateHint: function updateHint() {
                var $selectable, data, val, query, escapedQuery, frontMatchRegEx, match;
                $selectable = this.menu.getTopSelectable();
                data = this.menu.getSelectableData($selectable);
                val = this.input.getInputValue();
                if (data && !_.isBlankString(val) && !this.input.hasOverflow()) {
                    query = Input.normalizeQuery(val);
                    escapedQuery = _.escapeRegExChars(query);
                    frontMatchRegEx = new RegExp("^(?:" + escapedQuery + ")(.+$)", "i");
                    match = frontMatchRegEx.exec(data.val);
                    match && this.input.setHint(val + match[1]);
                } else {
                    this.input.clearHint();
                }
            },
            isEnabled: function isEnabled() {
                return this.enabled;
            },
            enable: function enable() {
                this.enabled = true;
            },
            disable: function disable() {
                this.enabled = false;
            },
            isActive: function isActive() {
                return this.active;
            },
            activate: function activate() {
                if (this.isActive()) {
                    return true;
                } else if (!this.isEnabled() || this.eventBus.before("active")) {
                    return false;
                } else {
                    this.active = true;
                    this.eventBus.trigger("active");
                    return true;
                }
            },
            deactivate: function deactivate() {
                if (!this.isActive()) {
                    return true;
                } else if (this.eventBus.before("idle")) {
                    return false;
                } else {
                    this.active = false;
                    this.close();
                    this.eventBus.trigger("idle");
                    return true;
                }
            },
            isOpen: function isOpen() {
                return this.menu.isOpen();
            },
            open: function open() {
                if (!this.isOpen() && !this.eventBus.before("open")) {
                    this.menu.open();
                    this._updateHint();
                    this.eventBus.trigger("open");
                }
                return this.isOpen();
            },
            close: function close() {
                if (this.isOpen() && !this.eventBus.before("close")) {
                    this.menu.close();
                    this.input.clearHint();
                    this.input.resetInputValue();
                    this.eventBus.trigger("close");
                }
                return !this.isOpen();
            },
            setVal: function setVal(val) {
                this.input.setQuery(_.toStr(val));
            },
            getVal: function getVal() {
                return this.input.getQuery();
            },
            select: function select($selectable) {
                var data = this.menu.getSelectableData($selectable);
                if (data && !this.eventBus.before("select", data.obj, data.dataset)) {
                    this.input.setQuery(data.val, true);
                    this.eventBus.trigger("select", data.obj, data.dataset);
                    this.close();
                    return true;
                }
                return false;
            },
            autocomplete: function autocomplete($selectable) {
                var query, data, isValid;
                query = this.input.getQuery();
                data = this.menu.getSelectableData($selectable);
                isValid = data && query !== data.val;
                if (isValid && !this.eventBus.before("autocomplete", data.obj, data.dataset)) {
                    this.input.setQuery(data.val);
                    this.eventBus.trigger("autocomplete", data.obj, data.dataset);
                    return true;
                }
                return false;
            },
            moveCursor: function moveCursor(delta) {
                var query, $candidate, data, suggestion, datasetName, cancelMove, id;
                query = this.input.getQuery();
                $candidate = this.menu.selectableRelativeToCursor(delta);
                data = this.menu.getSelectableData($candidate);
                suggestion = data ? data.obj : null;
                datasetName = data ? data.dataset : null;
                id = $candidate ? $candidate.attr("id") : null;
                this.input.trigger("cursorchange", id);
                cancelMove = this._minLengthMet() && this.menu.update(query);
                if (!cancelMove && !this.eventBus.before("cursorchange", suggestion, datasetName)) {
                    this.menu.setCursor($candidate);
                    if (data) {
                        this.input.setInputValue(data.val);
                    } else {
                        this.input.resetInputValue();
                        this._updateHint();
                    }
                    this.eventBus.trigger("cursorchange", suggestion, datasetName);
                    return true;
                }
                return false;
            },
            destroy: function destroy() {
                this.input.destroy();
                this.menu.destroy();
            }
        });
        return Typeahead;
        function c(ctx) {
            var methods = [].slice.call(arguments, 1);
            return function() {
                var args = [].slice.call(arguments);
                _.each(methods, function(method) {
                    return ctx[method].apply(ctx, args);
                });
            };
        }
    }();
    (function() {
        "use strict";
        var old, keys, methods;
        old = $.fn.typeahead;
        keys = {
            www: "tt-www",
            attrs: "tt-attrs",
            typeahead: "tt-typeahead"
        };
        methods = {
            initialize: function initialize(o, datasets) {
                var www;
                datasets = _.isArray(datasets) ? datasets : [].slice.call(arguments, 1);
                o = o || {};
                www = WWW(o.classNames);
                return this.each(attach);
                function attach() {
                    var $input, $wrapper, $hint, $menu, defaultHint, defaultMenu, eventBus, input, menu, status, typeahead, MenuConstructor;
                    _.each(datasets, function(d) {
                        d.highlight = !!o.highlight;
                    });
                    $input = $(this);
                    $wrapper = $(www.html.wrapper);
                    $hint = $elOrNull(o.hint);
                    $menu = $elOrNull(o.menu);
                    defaultHint = o.hint !== false && !$hint;
                    defaultMenu = o.menu !== false && !$menu;
                    defaultHint && ($hint = buildHintFromInput($input, www));
                    defaultMenu && ($menu = $(www.html.menu).css(www.css.menu));
                    $hint && $hint.val("");
                    $input = prepInput($input, www);
                    if (defaultHint || defaultMenu) {
                        $wrapper.css(www.css.wrapper);
                        $input.css(defaultHint ? www.css.input : www.css.inputWithNoHint);
                        $input.wrap($wrapper).parent().prepend(defaultHint ? $hint : null).append(defaultMenu ? $menu : null);
                    }
                    MenuConstructor = defaultMenu ? DefaultMenu : Menu;
                    eventBus = new EventBus({
                        el: $input
                    });
                    input = new Input({
                        hint: $hint,
                        input: $input
                    }, www);
                    menu = new MenuConstructor({
                        node: $menu,
                        datasets: datasets
                    }, www);
                    status = new Status({
                        $input: $input,
                        menu: menu
                    });
                    typeahead = new Typeahead({
                        input: input,
                        menu: menu,
                        eventBus: eventBus,
                        minLength: o.minLength,
                        autoselect: o.autoselect
                    }, www);
                    $input.data(keys.www, www);
                    $input.data(keys.typeahead, typeahead);
                }
            },
            isEnabled: function isEnabled() {
                var enabled;
                ttEach(this.first(), function(t) {
                    enabled = t.isEnabled();
                });
                return enabled;
            },
            enable: function enable() {
                ttEach(this, function(t) {
                    t.enable();
                });
                return this;
            },
            disable: function disable() {
                ttEach(this, function(t) {
                    t.disable();
                });
                return this;
            },
            isActive: function isActive() {
                var active;
                ttEach(this.first(), function(t) {
                    active = t.isActive();
                });
                return active;
            },
            activate: function activate() {
                ttEach(this, function(t) {
                    t.activate();
                });
                return this;
            },
            deactivate: function deactivate() {
                ttEach(this, function(t) {
                    t.deactivate();
                });
                return this;
            },
            isOpen: function isOpen() {
                var open;
                ttEach(this.first(), function(t) {
                    open = t.isOpen();
                });
                return open;
            },
            open: function open() {
                ttEach(this, function(t) {
                    t.open();
                });
                return this;
            },
            close: function close() {
                ttEach(this, function(t) {
                    t.close();
                });
                return this;
            },
            select: function select(el) {
                var success = false, $el = $(el);
                ttEach(this.first(), function(t) {
                    success = t.select($el);
                });
                return success;
            },
            autocomplete: function autocomplete(el) {
                var success = false, $el = $(el);
                ttEach(this.first(), function(t) {
                    success = t.autocomplete($el);
                });
                return success;
            },
            moveCursor: function moveCursoe(delta) {
                var success = false;
                ttEach(this.first(), function(t) {
                    success = t.moveCursor(delta);
                });
                return success;
            },
            val: function val(newVal) {
                var query;
                if (!arguments.length) {
                    ttEach(this.first(), function(t) {
                        query = t.getVal();
                    });
                    return query;
                } else {
                    ttEach(this, function(t) {
                        t.setVal(_.toStr(newVal));
                    });
                    return this;
                }
            },
            destroy: function destroy() {
                ttEach(this, function(typeahead, $input) {
                    revert($input);
                    typeahead.destroy();
                });
                return this;
            }
        };
        $.fn.typeahead = function(method) {
            if (methods[method]) {
                return methods[method].apply(this, [].slice.call(arguments, 1));
            } else {
                return methods.initialize.apply(this, arguments);
            }
        };
        $.fn.typeahead.noConflict = function noConflict() {
            $.fn.typeahead = old;
            return this;
        };
        function ttEach($els, fn) {
            $els.each(function() {
                var $input = $(this), typeahead;
                (typeahead = $input.data(keys.typeahead)) && fn(typeahead, $input);
            });
        }
        function buildHintFromInput($input, www) {
            return $input.clone().addClass(www.classes.hint).removeData().css(www.css.hint).css(getBackgroundStyles($input)).prop({
                readonly: true,
                required: false
            }).removeAttr("id name placeholder").removeClass("required").attr({
                spellcheck: "false",
                tabindex: -1
            });
        }
        function prepInput($input, www) {
            $input.data(keys.attrs, {
                dir: $input.attr("dir"),
                autocomplete: $input.attr("autocomplete"),
                spellcheck: $input.attr("spellcheck"),
                style: $input.attr("style")
            });
            $input.addClass(www.classes.input).attr({
                spellcheck: false
            });
            try {
                !$input.attr("dir") && $input.attr("dir", "auto");
            } catch (e) {}
            return $input;
        }
        function getBackgroundStyles($el) {
            return {
                backgroundAttachment: $el.css("background-attachment"),
                backgroundClip: $el.css("background-clip"),
                backgroundColor: $el.css("background-color"),
                backgroundImage: $el.css("background-image"),
                backgroundOrigin: $el.css("background-origin"),
                backgroundPosition: $el.css("background-position"),
                backgroundRepeat: $el.css("background-repeat"),
                backgroundSize: $el.css("background-size")
            };
        }
        function revert($input) {
            var www, $wrapper;
            www = $input.data(keys.www);
            $wrapper = $input.parent().filter(www.selectors.wrapper);
            _.each($input.data(keys.attrs), function(val, key) {
                _.isUndefined(val) ? $input.removeAttr(key) : $input.attr(key, val);
            });
            $input.removeData(keys.typeahead).removeData(keys.www).removeData(keys.attr).removeClass(www.classes.input);
            if ($wrapper.length) {
                $input.detach().insertAfter($wrapper);
                $wrapper.remove();
            }
        }
        function $elOrNull(obj) {
            var isValid, $el;
            isValid = _.isJQuery(obj) || _.isElement(obj);
            $el = isValid ? $(obj).first() : [];
            return $el.length ? $el : null;
        }
    })();
});

/**
 * MODULE: default FILE: webpower.components.js
 */
webpower.createNS('webpower.components');
(function(){
	webpower.components.Base = webpower.Class.extend({
		ELEMENT_CLASS: '',
		ELEMENT_MODIFICATORS: [],

		init: function () {
			this._initElements();
		},
		render: function () {
			var applyModificator = $.proxy(function(index, element) {
				var cls = $(element).attr('class') || '';
				var modificators = this._getModificators(cls);

				if (modificators.length) {
					for (var i = 0, l = modificators.length; i < l; i++) {
						this._renderModificator(modificators[i], element);
					}
				} else {
					this._renderModificator(element);
				}

			}, this);

			this.$_elements.each(applyModificator);
		},
		_initElements: function() {
			var elementSelector = this._getSelector();
			this.$_elements = $(elementSelector);
		},
		_getMethodName: function(modificator) {
			modificator = modificator || 'empty';
			return '_renderModificator' + modificator.charAt(0).toUpperCase() + modificator.substr(1);
		},
		_renderModificator: function(modificator, element) {
			var method, methodName;

			if (typeof element === 'undefined') {
				element = modificator;
				modificator = '';
			}

			methodName = this._getMethodName(modificator);
			method  = this[methodName];

			if ($.isFunction(method)) {
				method.call(this, element);
			} else {
				console.error('Method ' + methodName + ' is not a function.');
			}
		},
		_getSelector: function (modificator) {
			var selector = '.' + this.ELEMENT_CLASS;
			if (!!modificator) {
				if (this.ELEMENT_MODIFICATORS.indexOf(modificator) === -1) {
					throw new Error('Неизвестный модификатор ' + modificator);
				}
				selector += '__' + modificator;
			}

			return selector;
		},
		_getModificators: function(cls) {
			var modificatorPrefix = this.ELEMENT_CLASS + '__';

			return cls.split(' ').filter(function skipNonModificator(cls) {
				return cls.indexOf(modificatorPrefix) !== -1;
			}).map(function cutElementClass(cls) {
				return cls.substr(modificatorPrefix.length);
			});
		}

	});
})();


(function(){
	webpower.components.BaseController = webpower.Class.extend({
		init: function() {
			this.components = {};
		},
		start: function() {
			this._initRootElement();
			this._initComponents();
			this._initHandlers();
			this._initCompleted();
		},
		_initRootElement: function() {
			return this.$rootElement = $(document);
		},
		_initHandlers: function() {},
		_initComponents: function() {

		},
		_initCompleted: function() {
			var component;

			for (var p in this.components) {
				if (this.components.hasOwnProperty(p)) {
					component = this.components[p];
					if (typeof component.onControllerInited === 'function') {
						component.onControllerInited.call(component, this);
					}
				}
			}
		},
		_addComponent: function(object, alias) {
			var isString = Object.prototype.toString.call(alias) === '[object String]';

			if (!isString || !alias) {
				throw new Error('Need alias for object');
			}

			this.components[alias] = object;
		},
		_getComponent: function(name) {
			return (!!this.components[name])? this.components[name] : null;
		}

	});
})();

/**
 * MODULE: default FILE: css.include.js
 */
/**
 * CSS inclusion by javascript
 *
 * @author perfectavatar@gmail.com
 * @author http://www.topsitepro.ru
 * @package TopCMS
 * @sinse 2011
 */
css = {};
css.include = function(path){
	path = path+'.css';
	var link = document.createElement('link');
	link.setAttribute("rel", "stylesheet");
	link.setAttribute("type", "text/css");
	link.setAttribute("charset", "utf-8");
	link.setAttribute("href", path);
	if (typeof link != "undefined")
		  document.getElementsByTagName("head")[0].appendChild(link);
};

/**
 * MODULE: default FILE: tools.custom.js
 */
/**
 * набор разных функций
 * @use jQuery
 */
var TOOLS = new (function () {

	var me = this;

	this.host = location.host;

	var dmn = this.host.split('.');
	if (dmn.length>2){
		dmn.shift();
	}
	this.domain = dmn.join('.');

	this.includeJs = function (src, callback, attrs) {

		var head = document.getElementsByTagName('head'),
			_ = function(){

				if ( head.length ) {
					var script = document.createElement('script');
					script.type = 'text/javascript';
					script.src = src;
					if ( !!attrs ) {
						for( var k in attrs ) {
							script[k] = attrs[k];
						}
					}
					if ( typeof callback == 'function' ) script.onload = callback;

					head[0].appendChild(script);
				} else {
					setTimeout(_, 300);
				}
			};
		_();
	};
	this.includeCss = function ( src ) {

		var head = document.getElementsByTagName('head'),
			_ = function(){

				if ( head.length ) {
					var lnk = document.createElement('link');
					lnk.setAttribute('href', src);
					lnk.setAttribute('type','text/css');
					lnk.setAttribute('rel','stylesheet');

					head[0].appendChild(lnk);
				} else {
					setTimeout(_, 300);
				}
			};
		_();
	};
	this.copy = function (o) {
		var no = (o instanceof Array)?[]:{};
		for (var k in o) {
			if ( !o.hasOwnProperty(k) ) continue;

			if ( o[k] && typeof o[k] === 'object' ) {
				no[k] = this.copy(o[k]);
			} else {
				no[k] = o[k]||null;
			}
		}
		return no;
	};
	/**
	 * Парсинг строки в GET параметры
	 * @param string str
	 * @return object
	 */
	this.parseStr = function(str){

				// +   original by: Cagri Ekin
				// +   improved by: Michael White (http://crestidg.com)
				// ...modified

				if ( str.indexOf('?')>-1 ) str = str.substring( str.indexOf('?')+1, str.length  );

			var _array = str.split('&');
			var out = {}, tmp;

			for(var x=0; x<_array.length; x++){

				tmp = _array[x].split('=');
				out[unescape(tmp[0])] = unescape(tmp[1]).replace(/[+]/g, ' ');
			}

			return out;
		};
	/**
	 * Расширение дефолтных параметров
	 * @param objects defaultParams
	 * @param objects newParams
	 * @return object Новый объект
	 */
	this.extend = function( defaultParams, newParams ) {

		var out = {};
		for ( var k in defaultParams ) {
			out[k] = !!newParams[k]? newParams[k] : defaultParams[k];
		}
		for ( var k in newParams ) {
			if ( typeof out[k] === 'undefined' ) out[k] = newParams[k];
		}
		return out;
	};
	/**
	 * Trim
	 * @param string str
	 */
	this.trim = function ( str, symbols ) {
		var r = new RegExp("^[" + (symbols||'\\s') + "]" + "+|" + "[" + (symbols||'\\s') + "]" + "+$", "g");
		return str&&str.toString().replace(r, '');
	};
	/**
	 * Двузначный номер. Преобразует число, делая его двузначным
	 * @param integer val
	 * @return string
	 */
	this.n2s = function(val){
		val = Math.floor(val);
		return val < 10 ? '0' + val : val;
	};
	/**
	 * Удаляет элемент массива или объекта по ключу.
	 * @param obj val
	 * @param mixed key
	 */

	if ( !Array.isArray ) {
		Array.isArray = function (obj) {
			return Object.prototype.toString.call(obj) === "[object Array]";
		};
	};

	this.unset = function( obj, key ) {
		( Array.isArray(obj)? obj.splice(key, 1) : delete obj[key] );
	};
	/**
	 * Словоформа для числа (русский)
	 * @param integer n Само число
	 * @param array words Массив слов для словоформы числа ['один','два-четыре','пять-и-более']
	 * @return string
	 */
	this.plural = function ( n, words ) { // TOOLS.plural( cnt, ['один','два-четыре','пять-и-более'] )
											//			один крокодил, два крокодила, пять крокодилов
		n = Number(n);
		return words[ ( (n%10===1 && n%100!==11) ? 0 : (n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20)) ? 1 : 2)];
	};
	/**
	 * Форматирование числа
	 * @param float|integer value Само число
	 * @param integer decimals Количество знаков после запятой
	 * @return string
	 */
	this.nF = function( value, decimals, decPoint, thousSep ) {
value = parseFloat(value);
		if ( Math.abs(value) < 1000 ) return value.toString();

		var sign = (value>0);

		decimals = decimals||0;
		decPoint = decPoint||'.';
		thousSep = thousSep||'&nbsp;';

		if ( parseInt(value) != value ) value.toFixed( decimals );

		var out = value.toString().split(''),
			l = out.length, i=1;

		while( l-- ) {

			if ( !(i++%3) && l ) out[l] = thousSep + out[l];
		}
		return out.join('');
	};
	/**
	 * Возвращает объект полученный из значений формы
	 *
	 * @ param jQuery form
	 * @return Object
	 */
	this.getFormData = function ( $form ) {

		var obj = {};

		$form.find('input').each(function(){

			switch ( this.type ) {
				case 'radio':
				case 'checkbox':
						if ( this.checked || this.selected ) obj[ this.name ] = this.value||'on';
					break;
				default:
					obj[ this.name ] = this.value||'';
			}
		});
		$form.find('textarea').each(function(){

			obj[ this.name ] = this.value||'';
		});

		$form.find('select').each(function(){

			obj[ this.name ] = $(this).val();
		});

		return obj;
	};

	this.getSelectOptions = function(obj, params) {

		var out = [];
		for( var k in obj ) {
			out.push( '<option value="' + k + '"' + ( ((params.selected||'') == k)? ' selected="selected"':'' ) + '>' + obj[k] + '</option>' );
		}
		return out.join('');
	};


	this.inString = function (data, level) {

		level = level||0;

		if ( level > 5 ) return '[max_calls recursion]';

		var s = '', tab, str;

		for(var k in data) {

			if ( typeof data[k] == 'object' ) {
				str = '[Object]\n' + TOOLS.inString(data[k], level+1 );
			} else {
				str = data[k];
			}

			tab = new Array( level+1 ).join('\t');
									//+ '['+typeof data[k]+']'
			s += tab +  k.toString()  + " : \t" + (str||'').toString() + "\n";
		}
		return s;
	};

	this.inArray = function( array, element ) {

		var l = array.length;

		if ( !l ) return -1;

		while(l--) {
			if ( array[l] == element ) return l;
		}
		return -1;
	};
	this.removeSpecChars = function( str ) {

		return str.replace(/</g, '&lt;' )
					.replace(/\n\r/g, '<br>')
					.replace(/\r\n/g, '<br>')
					.replace(/(\n|\r)/g, '<br>')
					.replace(/(<br>){3,}/gm, '<br><br>');
	};
	this.gebcn = function( wrap, className ) {

		return (wrap.getElementsByClassName && wrap.getElementsByClassName( className ))
				|| (wrap.querySelectorAll && wrap.querySelectorAll('.' + className))
				|| []; // not support ie7 and below
	};
	this.each = function( arr, func ) {

		for( var i=0; i<arr.length; i++ ) {
			func.call( arr[i] );
		}
	};

	this.prevent = function(e){

		if ( e.preventDefault ) e.preventDefault();
		if ( e.stopPropagation ) e.stopPropagation();
		else e.cancelBubble = true;

		return false;
	};

	this.translit_name = function (str) {
	    var replace = new Array(
				["а", "a"], ["А", "A"],
				["б", "b"], ["Б", "B"],
				["в", "v"], ["В", "V"],
				["г", "g"], ["Г", "G"],
				["д", "d"], ["Д", "D"],
				["е", "e"], ["Е", "Ye"],
				["ё", "yo"], ["Ё", "Yo"],
				["ж", "zh"], ["Ж", "Zh"],
				["з", "z"], ["З", "Z"],
				["и", "i"], ["И", "I"],
				["й", "y"], ["Й", "Y"],
				["к", "k"], ["К", "K"],
				["л", "l"], ["Л", "L"],
				["м", "m"], ["М", "M"],
				["н", "n"], ["Н", "N"],
				["о", "o"], ["О", "O"],
				["п", "p"], ["П", "P"],
				["р", "r"], ["Р", "R"],
				["с", "s"], ["С", "S"],
				["т", "t"], ["Т", "T"],
				["у", "u"], ["У", "U"],
				["ф", "f"], ["Ф", "F"],
				["х", "kh"], ["Х", "Kh"],
				["ц", "ts"], ["Ц", "Ts"],
				["ч", "ch"], ["Ч", "Ch"],
				["ш", "sh"], ["Ш", "Sh"],
				["щ", "sch"], ["Щ", "Sch"],
				["ъ", "~"], ["Ъ", "~"],
				["ы", "y"], ["Ы", "Y"],
				["ь", "~"], ["Ь", "~"],
				["э", "e"], ["Э", "E"],
				["ю", "yu"], ["Ю", "Yu"],
				["я", "ya"], ["Я", "Ya"],
				["і", "i"], ["І", "I"],
				["ї", "yi"], ["Ї", "Yi"],
				["є", "e"], ["Є", "E"]
		);
		var newStr = new String();
		var lang = (T.core == undefined)?'ru':T.core.lang;
		if (lang == "ru") {
			return str; //если выбран русский язык, ничего не транслитерируем
		} else {
			for (var i = 0; i < str.length; i++) {
				ch = str.charAt(i);
				var newCh = '';
				for (var j = 0; j < replace.length; j++) {
					if (ch == replace[j][0]) {
						newCh = replace[j][1];
					}
				}
				if (newCh == '') {
					newCh = ch;
				} else if (newCh == '~') {
					newCh = '';
				}
				newStr += newCh;
			}
			return newStr;
		}
	};

	me.loadButtons = {};
	me.loadingElements = {};
	me.loadModal = null;

	/* Функция подстановки переменных
	 * @param string sentence
	 * @param object params
	 * @return string
	 */
	this.fill = function(sentence,params) {
		if(typeof(params) === 'object' && typeof(sentence) === 'string'){
			$.each(params,function(key,val){
				sentence = sentence.replace('{$'+key+'}',val);
			});
			return sentence;
		}
	};
	//-- функция изменения кнопки при загрузке данных
	this.loadButton = function( element, status, callback ){

		if ( Array.isArray(element) ) {
			var l = element.length;
			while(l--){
				me.loadButton( element[l], status||null, callback||null );
			}
			return;
		}

		var elm = $(element)
			, selector = elm.selector
			, val = elm.val()||''
			, html = elm.html()||''
			, wait = (T.core&&T.core.button_text_wait)||' '
			, load = elm.data('loading-text')||wait
			, overload = $.trim(elm.attr('data-type-overload'))||'loading-primary'
			, width = elm.outerWidth()
			, height = elm.outerHeight()
			, gag = function(){}
			, func = (typeof callback == 'function')? callback : gag
			;

		if (status) {
			elm.html(load)
				.val(load)
				.data({
					'load-val': val,
					'load-html': html,
					'disabled': 'disabled',
					'load-width': width
				})
				.attr('disabled', 'disabled')
				.css('width', width)
				.css('height', height)
				.addClass('loading ' + overload);

			me.loadButtons[selector] = func;
		} else {
			elm.html(elm.data('load-html'))
					.val(elm.data('load-val'))
					.removeAttr('disabled')
					.removeAttr('style')
					.removeClass('loading ' + overload);
			(callback||me.loadButtons[selector]||gag)();
			me.unset(me.loadButtons, selector);
		}
	};

	//-- функция которая вешает лоадер на элемент
	this.loadingElement = function( element, status, callback ){
		if ( Array.isArray(element) ) {
			var l = element.length;
			while(l--){
				me.loadingElement( element[l], status||null, callback||null );
			}
			return;
		}

		var elm = $(element)
			, selector = elm.selector
			, val = elm.val()||''
			, html = elm.html()||''
			, wait = (T.core&&T.core.button_text_wait)||' '
			, load = elm.data('loading-text')||wait
			, overload = $.trim(elm.attr('data-type-overload'))||'loading-primary'
			, width = elm.outerWidth()
			, height = elm.outerHeight()
			, gag = function(){}
			, func = (typeof callback == 'function')? callback : gag
			, tagName = ''
			;

		if(typeof elm[0] !== 'undefined') {
			 tagName = elm[0].tagName.toLowerCase();
		}

		if (status) {
			if(
				tagName === 'input'
				|| tagName === 'button'
				|| tagName === 'a'
			) {
				elm
					.html(load)
					.val(load)
					.data({
						'load-val': val,
						'load-html': html,
						'disabled': 'disabled',
						'load-width': width
					})
					.attr('disabled', 'disabled')
					.css('width', width)
					.css('height', height)
			}
			if(typeof elm.html() !== 'undefined' && !elm.html().replace(/(?:\r\n|\r|\n|\t)/g, '')) {
				overload += ' loading-empty';
			}
			elm.addClass('loading ' + overload);
			me.loadingElements[selector] = func;
		} else {
			if(
				tagName === 'input'
				|| tagName === 'button'
				|| tagName === 'a'
			) {
				elm
					.html(elm.data('load-html'))
					.val(elm.data('load-val'))
					.removeAttr('disabled')
					.removeAttr('style')
			}

			elm
				.removeClass('loading ' + overload)
				.removeClass('loading-empty');
			(callback||me.loadingElements[selector]||gag)();
			me.unset(me.loadingElements, selector);
		}

	};

	this.loadingModal = function(status, callback ){
		var
			gag = function(){},
			func = (typeof callback == 'function')? callback : gag;

		if(status) {
			var options = {
				className: 'modal-extra'
				, size: 3
				, closeX: true
				, box: {
					body: {
						content:
								'<p class="primary-title">' +
									(typeof T.core != 'undefined' ? T.core.request : 'Loading...') +
								'</p>' +
								'<p class="text-large">' +
									(typeof T.core != 'undefined' ? T.core.request_take : '')  +
								'</p>' +
								'<span class="loading loading-primary center-block"></span>'
						, attr: null
					}
				}
			};
			// вызов модального окна
			me.loadModal = window.wp.modal(options);
		} else {
			if(me.loadModal) {
				me.loadModal.close();
			}
		}
	}


	this.base64_decode = function(data) {
		var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
		var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,
			ac = 0,
			dec = '',
			tmp_arr = [];
		if (!data) {
			return data;
		}
		data += '';
		do { // unpack four hexets into three octets using index points in b64
			h1 = b64.indexOf(data.charAt(i++));
			h2 = b64.indexOf(data.charAt(i++));
			h3 = b64.indexOf(data.charAt(i++));
			h4 = b64.indexOf(data.charAt(i++));
			bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;
			o1 = bits >> 16 & 0xff;
			o2 = bits >> 8 & 0xff;
			o3 = bits & 0xff;
			if (h3 == 64) {
				tmp_arr[ac++] = String.fromCharCode(o1);
			} else if (h4 == 64) {
				tmp_arr[ac++] = String.fromCharCode(o1, o2);
			} else {
				tmp_arr[ac++] = String.fromCharCode(o1, o2, o3);
			}
		} while (i < data.length);
		dec = tmp_arr.join('');
		return dec.replace(/\0+$/, '');
	};

	/**
	 * Получение символа по коду клавиши для события keypress
	 */
	this.getChar = function(event) {
		if (event.which == null) { // IE
			if (event.keyCode < 32) return null; // спец. символ
			return String.fromCharCode(event.keyCode)
		}
		if (event.which != 0 && event.charCode != 0) { // кроме IE
			if (event.which < 32) return null; // спец. символ
			return String.fromCharCode(event.which); // остальные
		}
		return null; // спец. символ
	};

	/**
	 * Валидация номера телефона: только цифры, длина номера (для России - 11, для др. стран - от 8 до 15)
	 * @param string phone_value - номер телефона (без "+", без пробелов и др. незначащих символов)
	 * @param bool russian - если это должен быть российский номер
	 */
	this.validatePhone = function(phone_value, russian) {
		var result = {errors:'', success:false};
		if (russian==true && phone_value.length != 11) { //если номер неправильной длины ...
			result.errors = T.users.invalid_phone_length;
			return result;
		} else if (phone_value.length < 8 || phone_value.length > 15) {
			result.errors = T.users.invalid_phone_length;
			return result;
		}
		var regNumbers = new RegExp("^[0-9]+$");//только цифры
		if (!regNumbers.test(phone_value)) {
			result.errors = T.users.phone_should_be_number;
			return result;
		} else {
			result.success = true;
		}
		return result;
	};


	/**
	 * Валидация email
	 * @param string email_value - адрес email
	 */
	this.validateEmail = function(email_value) {
		var result = {errors:'', success:false};
		if (email_value.length < 6 || email_value.length > 100) { //100 - ограничение в БД
			result.errors = T.users.invalid_email_length;
			return result;
		}
		var regEmail_0 = new RegExp(".*[а-яА-ЯЁё]+.*"); //кириллицу все равно Zend_validate_EmailAddress не понимает
		if (regEmail_0.test(email_value)) {
			result.errors = T.users.invalid_email_encoding;
			return result;
		}
		var regEmail = new RegExp(".+@.+[\.].+"); //более детальную проверку сделаем в php
		if (!regEmail.test(email_value)) {
			result.errors = T.users.invalid_email_format;
			return result;
		} else {
			result.success = true;
		}
		return result;
	};

	// Работа с HASH параметрами в строке URL
	this.urlhash = {
		// Получить значение параметра по его имени (или все параметры в виде объекта, если имя не передано)
		get: function(param){
			var hash = window.location.hash.replace('#', '');
			var result = null;
			if (hash.length > 0){
				var params = hash.split('&');
				for(var i = 0; i < params.length; i++){
					var propval = params[i].split('=');
					if (typeof param !== 'undefined'){
						if ( propval[0] === param ) {
							result = propval[1]||propval[0];
							break;
						}
					}else{
						if ( !result ) {result={};}
						result[propval[0]] = propval[1]||propval[0];
					}
				}
			}
			return result;
		},
		// Установить строку параметров по переданному объекту
		set: function(params){
			var hash = '';
			var i = 0;
			var size = Object.keys(params).length;
			for(var key in params){
				hash += key + (params[key]? '=' + params[key] : '');
				i++;
				if (i < size){
					hash += '&';
				}
			}
			window.location.hash = hash;
			return true;
		},
		// Обновить или добавить параметр в строку
		update: function(param, val){
			if (typeof param !== 'undefined'){
				var hash = this.get();
				var newhash = {};
				var exists = false;
				for(var key in hash){
					if (key === param){
						newhash[key] = val;
						exists = true;
					}else{
						newhash[key] = hash[key];
					}
				}
				if (!exists){
					newhash[param] = val;
				}
				return this.set(newhash);
			}
			return false;
		},
		// Удалить параметр из строки по имени
		remove: function(param){
			if (typeof param !== 'undefined'){
				var hash = this.get();
				delete hash[param];
				return this.set(hash);
			}
			return false;
		},
		// Оставить только один параметр, остальные удалить
		leaveonly: function(param){
			if (typeof param !== 'undefined'){
				var val = this.get(param);
				var newhash = {};
				newhash[param] = val;
				return this.set(newhash);
			}
			return false;
		},
	};

	// Получение GET-параметров из адресной строки
	this.getGet = function(param){
		var get = window.location.search.replace('?', '');
		var result = {}, found_val = null;
		if (get.length > 0){
			var params = get.split('&');
			for(var i = 0; i < params.length; i++){
				var propval = params[i].split('=');
				if (typeof param !== 'undefined' && propval[0] === param){
					found_val = propval[1];
					break;
				}else{
					result[propval[0]] = propval[1];
				}
			}
			if (typeof param !== 'undefined'){
				result = found_val;
			}
		}
		return result;
	};

	// Получение GET-параметров из адресной строки (исправлен возврат результата неопределённого типа )
	this.getGetParam = function(param){

		var vars = this.parseStr( window.location.search.replace('?', '') );

		return (typeof param == 'undefined')
				? vars
				: vars[param]||''
			;
	};
	/**
	 * Замена или добавление в строку поиска GET-переменной
	 * @return string Строка поиска с новой переменной
	 */
	this.replaceGetParam = function( newParams ) {

		var params =  TOOLS.getGetParam()
			, vals = []
		;
		for( var k in newParams ) {
			if ( newParams[k] !== null ) {
				params[k] = newParams[k];
			} else {
				if ( typeof params[k] != 'undefined' ) {
					delete params[k];
				}
			}
		}

		for( var k in params) {
			vals.push( k + '=' + params[k] )
		}
		return '?' + vals.join('&');
	}

	this.getGUID = function() {
		function s4() {
			return Math.floor((1+Math.random())*0x10000).toString(16).substring(1);
		}
		return s4()+s4()+'-'+s4()+'-'+s4()+'-'+s4()+'-'+s4()+s4()+s4();
	};


	this.getRand = function(len){
		if ( !len )
			len = 16;
		return Math.random().toString(16).substr(-1*len-1,len);
	};

	this.addEvent = function(elem, evnt,  func) {
		if (elem.addEventListener) { // W3C DOM
			elem.addEventListener(evnt,func,false);
		} else if (elem.attachEvent) { // IE DOM
			elem.attachEvent("on"+evnt, func);
		} else {
			elem["on"+evnt] = func;
		}
	};

	this.gotoUrl = function( url ) {

		var _ = window.location.href.replace(/#.+$/, '');

		window.location.href = url||_;
	};

	/**
	 *
	 * @param int time
	 * @param string mask Default 'hh:mm:ss'
	 * @returns {String|undefined}
	 */
	this.getTimeDigits = function( time, mask ) {

		mask = mask||'hh:mm:ss';

		if ( !(time&&time>0) ) return '';

		var _ = [
				Math.floor(time / 3600),
				Math.floor(time / 60 % 60),
				time % 60
			];

		return mask
			.replace('hh', me.n2s( _[0] ) ).replace('h', _[0] )
			.replace('mm', me.n2s( _[1] ) ).replace('m', _[1] )
			.replace('ss', me.n2s( _[2] ) ).replace('s', _[2] );
	};
	/**
	 * Заменяем спецсимволы на html представление
	 */
	this.escapeTags = function(str) {
			var map = {
				"&": "&amp;",
				"<": "&lt;",
				">": "&gt;",
				"\"": "&quot;",
				"'": "&#39;" // ' -> &apos; for XML only
			};
			return (typeof str == 'string') ? str.replace(/[&<>"']/g, function(m) { return map[m]; }) : str;
		};
	/**
	 * Заменяем html представление на спецсимволы
	 */
	this.unescapeTags = function(str) {
			var map = {
				"&amp;": "&",
				"&lt;": "<",
				"&gt;": ">",
				"&quot;": "\"",
				"&#39;": "'"
			};
			return (typeof str == 'string') ? str.replace(/(&amp;|&lt;|&gt;|&quot;|&#39;)/g, function(m) { return map[m]; }) : str;
		};
	/**
	 * Проверка URL на валидность
	 *
	 * @param string value
	 * @returns boolean
	 */
	this.validUrl = function( value ) {

		return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test( value );

		};

	/**
	 * Добавление дат в куку
	 *
	 * @param  {string} date_begin - Дата начала
	 * @param  {string} date_end - Дата окончания
	 */
	this.setDatesInCookie = function(date_begin, date_end){
		if (
			date_begin && date_end
			&& !jQuery.isEmptyObject(date_begin) && !jQuery.isEmptyObject(date_end)
		){

			var
				cookieParams = {date_begin: date_begin, date_end:date_end},
				nowDate = new Date(),
				endDate = new Date(date_begin);
				cntDay = Math.ceil(Math.abs(endDate.getTime() - nowDate.getTime()) / (1000 * 3600 * 24)),
				expires = cntDay < 10 ? cntDay: 10
			;

			$.cookie('calendar_dates', JSON.stringify(cookieParams), {expires: expires, path: '/', domain:'.'+TOOLS.domain});
		}
	};

	/**
	 * Добавление кол-во гостей в куку
	 *
	 * @param  {number} guests - Кол-во гостей
	 */
	this.setGuestsInCookie = function(guests){
		if (guests && guests > 0 && guests <= 50){
			$.cookie('filter_guests', guests, {expires: 10, path: '/', domain:'.'+TOOLS.domain});
		}
	};
})();


/**
 * MODULE: default FILE: timer.custom.js
 */
/**
 * работа со временем (отслеживание событий по интервалам)
 * @use TOOLS
 */
var TIMER = new (function () {
	
	// правка времени отправки ( только что, несколько секунд назад, минуту назад, несколько минут назад и/или - просто тики )
	
	var me = this;
	
	this.tiсk = 1; // в секундах
	this.busy = false;
	this.callbacks = {};
	
	this.countdownCallbacks = []; // {element, callback}
	this.classNameFinalCountdown = '';
	this.dataAttrFinalCountdown = '';
	
	this.interval = function() {
	
		if ( me.busy ) return;
		me.busy = true;
		
		me.finalCountdown();
		
		// другие функции по подписке
		me.calls();
		
		me.busy = false;
	};
	this.calls = function() {
		
		var now = (new Date).getSeconds(), k, i;
		
		for( k in this.callbacks ) {
			
			if ( !(now%k) ) {
				for( i=0; i<this.callbacks[k].length; i++ ) {
					if ( typeof this.callbacks[k][i] === 'function' ) {
						//try { 
							this.callbacks[k][i](); 
						//} catch(e){ }
					}
				}
			}
		}
	};
	
	// TODO: пока что до одной минуты (!) сделать большие периоды
	this.addCallback = function( eachSec, callback ) {
		
		eachSec = eachSec||1;
		if ( !this.callbacks[ eachSec ] ) this.callbacks[ eachSec ] = [];
		
		this.callbacks[ eachSec ].push( callback );

		return this.callbacks[ eachSec ].length-1;
	};
	this.deleteCallback = function( eachSec, id ) {
		if ( !!this.callbacks[ eachSec ] && !!this.callbacks[ eachSec ][id] ) {
			TOOLS.unset( this.callbacks[ eachSec ], id );
		}
	};
	
	this.finalCountdown = function () {
		
		if ( !me.classNameFinalCountdown ) return;
		
		if ( !document.getElementsByClassName ) return;
		
		var spots = document.getElementsByClassName( me.classNameFinalCountdown ),
			len = spots.length,
			elem, time, sec, sep;
	
		while(len--) {

			elem = spots[len];
			time = Number( elem.getAttribute( me.dataAttrFinalCountdown ) );
		
			if ( !(time&&time>0) ) continue;
				
			time--;
			elem.setAttribute( me.dataAttrFinalCountdown, time.toString() );
			
			sec = (time % 60);
			sep = (sec%2)? ':':':';
			
			elem.innerHTML = ([ 
					//TOOLS.n2s( time / 3600  % 24 ), // часы без дней
					TOOLS.n2s( Math.floor(time / 3600) ), // общее кол-во часов
					TOOLS.n2s( time / 60 % 60 ),
					TOOLS.n2s( sec )
				]).join(sep);
				
			if ( time <= 0 ) {
				me.destroyCountdown(elem);
			}
		}
	};
	
	this.destroyCountdown = function( elem ) {
		
		var item = this.findCountdownCallback('elem', elem);
		
		if ( item ) {
			this.countdownCallbacks[item].func.call( elem );
			delete this.countdownCallbacks[item];
		}
		elem.parentNode.removeChild(elem);
	};
	
	this.addCountdownCallback = function( elem, func ) {
		
		var item = this.findCountdownCallback('elem', elem);
		
		if ( item ) {
			this.countdownCallbacks[item].func = func ;
		} else {
			this.countdownCallbacks.push({ "elem": elem, "func": func });
		}
			
		return this;
	};
	this.removeCountdownCallback = function( something ) {
		
		var key = (typeof some === 'function')? 'func':'elem',
			item = this.findCountdownCallback(key, something);
		
		if ( item ) {
			delete this.countdownCallbacks[item];
		}
		
		return this;
	};
	this.findCountdownCallback = function (key, something) {
		
		var len = this.countdownCallbacks.length;
		
		while(len--) {
			if ( this.countdownCallbacks[len] && (this.countdownCallbacks[len][key] === something) ) {
				return len;
			}
		}
		return null;
	};
	
			
	setInterval( this.interval, this.tiсk*1000 );
	
})();


/**
 * MODULE: default FILE: hideShowPassword.min.js
 */
!function(factory,global){if(typeof define==="function"&&define.amd){define(["jquery"],factory)}else{factory(global.jQuery)}}(function($,undef){var dataKey="plugin_hideShowPassword",shorthandArgs=["show","innerToggle"],SPACE=32,ENTER=13;var canSetInputAttribute=function(){var body=document.body,input=document.createElement("input"),result=true;if(!body){body=document.createElement("body")}input=body.appendChild(input);try{input.setAttribute("type","text")}catch(e){result=false}body.removeChild(input);return result}();var defaults={show:"infer",innerToggle:false,enable:canSetInputAttribute,className:"hideShowPassword-field",initEvent:"hideShowPasswordInit",changeEvent:"passwordVisibilityChange",props:{autocapitalize:"off",autocomplete:"off",autocorrect:"off",spellcheck:"false"},toggle:{element:'<button type="button">',className:"hideShowPassword-toggle",touchSupport:typeof Modernizr==="undefined"?false:Modernizr.touch,attachToEvent:"click",attachToTouchEvent:"touchstart mousedown",attachToKeyEvent:"keyup",attachToKeyCodes:true,styles:{position:"absolute"},touchStyles:{pointerEvents:"none"},position:"infer",verticalAlign:"middle",offset:0,attr:{role:"button","aria-label":"Show Password",tabIndex:0}},wrapper:{element:"<div>",className:"hideShowPassword-wrapper",enforceWidth:true,styles:{position:"relative"},inheritStyles:["display","verticalAlign","marginTop","marginRight","marginBottom","marginLeft"],innerElementStyles:{marginTop:0,marginRight:0,marginBottom:0,marginLeft:0}},states:{shown:{className:"hideShowPassword-shown",changeEvent:"passwordShown",props:{type:"text"},toggle:{className:"hideShowPassword-toggle-hide",content:"Hide",attr:{"aria-pressed":"true"}}},hidden:{className:"hideShowPassword-hidden",changeEvent:"passwordHidden",props:{type:"password"},toggle:{className:"hideShowPassword-toggle-show",content:"Show",attr:{"aria-pressed":"false"}}}}};function HideShowPassword(element,options){this.element=$(element);this.wrapperElement=$();this.toggleElement=$();this.init(options)}HideShowPassword.prototype={init:function(options){if(this.update(options,defaults)){this.element.addClass(this.options.className);if(this.options.innerToggle){this.wrapElement(this.options.wrapper);this.initToggle(this.options.toggle);if(typeof this.options.innerToggle==="string"){this.toggleElement.hide();this.element.one(this.options.innerToggle,$.proxy(function(){this.toggleElement.show()},this))}}this.element.trigger(this.options.initEvent,[this])}},update:function(options,base){this.options=this.prepareOptions(options,base);if(this.updateElement()){this.element.trigger(this.options.changeEvent,[this]).trigger(this.state().changeEvent,[this])}return this.options.enable},toggle:function(showVal){showVal=showVal||"toggle";return this.update({show:showVal})},prepareOptions:function(options,base){var keyCodes=[],testElement;base=base||this.options;options=$.extend(true,{},base,options);if(options.enable){if(options.show==="toggle"){options.show=this.isType("hidden",options.states)}else if(options.show==="infer"){options.show=this.isType("shown",options.states)}if(options.toggle.position==="infer"){options.toggle.position=this.element.css("text-direction")==="rtl"?"left":"right"}if(!$.isArray(options.toggle.attachToKeyCodes)){if(options.toggle.attachToKeyCodes===true){testElement=$(options.toggle.element);switch(testElement.prop("tagName").toLowerCase()){case"button":case"input":break;case"a":if(testElement.filter("[href]").length){keyCodes.push(SPACE);break}default:keyCodes.push(SPACE,ENTER);break}}options.toggle.attachToKeyCodes=keyCodes}}return options},updateElement:function(){if(!this.options.enable||this.isType())return false;this.element.prop($.extend({},this.options.props,this.state().props)).addClass(this.state().className).removeClass(this.otherState().className);this.updateToggle();return true},isType:function(comparison,states){states=states||this.options.states;comparison=comparison||this.state(undef,undef,states).props.type;if(states[comparison]){comparison=states[comparison].props.type}return this.element.prop("type")===comparison},state:function(key,invert,states){states=states||this.options.states;if(key===undef){key=this.options.show}if(typeof key==="boolean"){key=key?"shown":"hidden"}if(invert){key=key==="shown"?"hidden":"shown"}return states[key]},otherState:function(key){return this.state(key,true)},wrapElement:function(options){var enforceWidth=options.enforceWidth,targetWidth;if(!this.wrapperElement.length){targetWidth=this.element.outerWidth();$.each(options.inheritStyles,$.proxy(function(index,prop){options.styles[prop]=this.element.css(prop)},this));this.element.css(options.innerElementStyles).wrap($(options.element).addClass(options.className).css(options.styles));this.wrapperElement=this.element.parent();if(enforceWidth===true){enforceWidth=this.wrapperElement.outerWidth()===targetWidth?false:targetWidth}if(enforceWidth!==false){this.wrapperElement.css("width",enforceWidth)}}return this.wrapperElement},initToggle:function(options){if(!this.toggleElement.length){this.toggleElement=$(options.element).attr(options.attr).addClass(options.className).css(options.styles).appendTo(this.wrapperElement);this.updateToggle();this.positionToggle(options.position,options.verticalAlign,options.offset);if(options.touchSupport){this.toggleElement.css(options.touchStyles);this.element.on(options.attachToTouchEvent,$.proxy(this.toggleTouchEvent,this))}else{this.toggleElement.on(options.attachToEvent,$.proxy(this.toggleEvent,this))}if(options.attachToKeyCodes.length){this.toggleElement.on(options.attachToKeyEvent,$.proxy(this.toggleKeyEvent,this))}}return this.toggleElement},positionToggle:function(position,verticalAlign,offset){var styles={};styles[position]=offset;switch(verticalAlign){case"top":case"bottom":styles[verticalAlign]=offset;break;case"middle":styles["top"]="50%";styles["marginTop"]=this.toggleElement.outerHeight()/-2;break}return this.toggleElement.css(styles)},updateToggle:function(state,otherState){var paddingProp,targetPadding;if(this.toggleElement.length){paddingProp="padding-"+this.options.toggle.position;state=state||this.state().toggle;otherState=otherState||this.otherState().toggle;this.toggleElement.attr(state.attr).addClass(state.className).removeClass(otherState.className).html(state.content);targetPadding=this.toggleElement.outerWidth()+this.options.toggle.offset*2;if(this.element.css(paddingProp)!==targetPadding){this.element.css(paddingProp,targetPadding)}}return this.toggleElement},toggleEvent:function(event){event.preventDefault();this.toggle()},toggleKeyEvent:function(event){$.each(this.options.toggle.attachToKeyCodes,$.proxy(function(index,keyCode){if(event.which===keyCode){this.toggleEvent(event);return false}},this))},toggleTouchEvent:function(event){var toggleX=this.toggleElement.offset().left,eventX,lesser,greater;if(toggleX){eventX=event.pageX||event.originalEvent.pageX;if(this.options.toggle.position==="left"){toggleX+=this.toggleElement.outerWidth();lesser=eventX;greater=toggleX}else{lesser=toggleX;greater=eventX}if(greater>=lesser){this.toggleEvent(event)}}}};$.fn.hideShowPassword=function(){var options={};$.each(arguments,function(index,value){var newOptions={};if(typeof value==="object"){newOptions=value}else if(shorthandArgs[index]){newOptions[shorthandArgs[index]]=value}else{return false}$.extend(true,options,newOptions)});return this.each(function(){var $this=$(this),data=$this.data(dataKey);if(data){data.update(options)}else{$this.data(dataKey,new HideShowPassword(this,options))}})};$.each({show:true,hide:false,toggle:"toggle"},function(verb,showVal){$.fn[verb+"Password"]=function(innerToggle,options){return this.hideShowPassword(showVal,innerToggle,options)}})},this);

/**
 * MODULE: default FILE: auth.js
 */
/**
 * Обработка форм авторизации
 */

window.webpower.authHandler = function( idForm, successCallback, initialStatus ) {

	var translations = {
			  minutes:	[T.core.minute1, T.core.minutes2, T.core.minutes5]
			, seconds:	[T.core.second1, T.core.seconds2, T.core.seconds5]
			, phoneOrEmail: T.core.auth_phone_or_email
			, phoneOrEmailEasy: T.core.auth_phone_or_email_easy
			, enterPwd:	T.core.auth_enter_pwd
			, pwd:		T.core.auth_pwd
			, email:	T.core.auth_email
			, eml:		T.core.auth_eml
			, emlg:		T.core.auth_emlg // на эл.почту мы отправим пароль
			, phone:	T.core.auth_phone
			, on_phone:	T.core.auth_on_phone
		};

	var me = this;


	var id = idForm, idt = id + '_' + (new Date).getTime();
	document.getElementById(id).id = idt;

	this.idBlock = '#'+idt;
	this.lastStatus = this.currentStatus = 'js-auth-login';
	this.links = {
			  'show password for old user': 'js-auth-login-last' // 'js-auth-login'
			, 'show terms': 'js-auth-terms'
			, 'show password for new user': 'js-auth-registration-last'
			, 'show password for new user after create': 'js-auth-registration-last'
			, 'show password for new user after forgot': 'js-auth-registration-last'
			, 'show password for old user after forgot': 'js-auth-forgot-last'
			// по клику - js-auth-login, js-auth-registration, js-auth-forgot
		};

	this.idTimer = null;

	// функция
	this.successCallback = successCallback||null;
	this.initialStatus = initialStatus||null;


	this.setDefaultValues = function() {

		var block = $( me.idBlock )
			, value = block.find('input[name="value"]')
			, password = block.find('input[name="password"]')
			;

		if(me.currentStatus !== 'js-auth-login-last') {
			me.resetErrors();
			block.find('input[name="persistent"]').removeAttr('checked');
		}

		switch( me.currentStatus ) {
			case 'js-auth-login':
					value.attr('placeholder', translations.phoneOrEmail);
					password.attr('placeholder', translations.pwd);
					block.find('.js-auth-checkbox-function').show();
				break;
			case 'js-auth-forgot':
					value.attr('placeholder', translations.phoneOrEmail);
					password.attr('placeholder', translations.enterPwd).val('');
					block.find('.js-auth-checkbox-function').hide();
				break;
			case 'js-auth-registration':
					value.attr('placeholder', translations.phone);
					password.attr('placeholder', translations.enterPwd);
					block.find('.js-auth-checkbox-function').show();
					me.switcher( 'setDefault' );
				break;
		};
	};

	this.setKindForm = function( kind ) {

		me.lastStatus = me.currentStatus;
		me.currentStatus = kind;

		$( me.idBlock + ' > form > div' )[0].className = me.currentStatus;

		me.setDefaultValues();
		return false;
	};

	this.setPrevKindForm = function() {

		switch( me.currentStatus ) {
			case 'js-auth-forgot':
			case 'js-auth-forgot-last':
					me.currentStatus = 'js-auth-login';
				break;
			case 'js-auth-registration-last':
					me.currentStatus = 'js-auth-registration';
				break;
			default:
				me.currentStatus = me.lastStatus;
		}
		me.lastStatus = me.currentStatus;

		$( me.idBlock + ' > form > div' )[0].className = me.currentStatus;
		me.setDefaultValues();
		return false;
	};

	this.switcher = function( setDefault ) {

		var swClass = 'jsn-switcher-phone'
			, block = $( me.idBlock )
			, def = ((setDefault||'') == 'setDefault')
			//, t = def? block.find('.jsn-phone-email-switch').removeClass( swClass ) : $(this)
			, value = block.find('input[name="value"]')
			//, fld = block.find('.jsn-switcher-fld')
			//, txt = block.find('.jsn-switcher-txt')
			, vals = []
			;

//		if ( !t.hasClass( swClass ) ) {
//
//			vals = [ translations.phone, translations.emlg, translations.phone ];
//			t.addClass( swClass );
//
//		} else {
//
//			vals = [ translations.email, translations.phone, translations.emlg ];
//			t.removeClass( swClass );
//		}

		//value.attr('placeholder', vals[0]);
		// value.attr('placeholder', translations.phoneOrEmailEasy);
		if ( !def ) value.val('');

		//fld.html( vals[1] );
		//txt.html( vals[2] );

		return false;
	};

	this.resendPassword = function() {

		var block = $( me.idBlock );

		me.forgot(true);

		// и отправляем форму снова
		block.find('form').submit();

		setTimeout( function(){ me.forgot(false); }, 500 );
		return false;
	};
	this.terms = function( val ) {

		if ( val||false ) {
			$( me.idBlock ).find('input[name="terms"]').attr('checked','checked')[0].checked=true;
		} else {
			$( me.idBlock ).find('input[name="terms"]').removeAttr('checked')[0].checked=false;
		}
	};
	this.forgot = function( val ) {

		$( me.idBlock ).find('input[name="forgot"]').val( ( val||false )? '1' : '0' );
	};

	this.submit = function() {

		var block = $( me.idBlock )
			, form = block.find('form')
			, formData = TOOLS.getFormData( form )
			, callbacks = {
				success: me.callbackSuccess,
				data: me.callbackData,
				actions: me.callbackActions,
				errors: me.callbackErrors,
				loadButtons: ['#auth-btn-1', '#auth-btn-2', '#auth-btn-3', '#auth-btn-4']
			};

		me.resetErrors();
		TIMER.deleteCallback( 1, me.idTimer );
		formData.status = me.currentStatus.replace(/^js\-/, '');
		webpower.request('/api/json/users/auth/', formData, callbacks);

		setTimeout( function(){ me.forgot(false); }, 500 );
		return false;
	};

	this.callbackSuccess = function(data){
//		alert(TOOLS.inString(data));

		var url = null;
		if ( typeof me.successCallback == 'function' ) {

			url = me.successCallback(data);

		} else {
			url = window.location.href.replace(/(.*?)#(.*)/, "$1");
		}
		if ( url ) {
			window.location.href = url;
		}

		if ($('.tab-content').hasClass('js-mode-add-object')) {
			wp.btnSelectHotels();
		}

	};

	this.callbackData = function(data, successFlag){
		
//		alert('data: '+TOOLS.inString(data));
		if ( !!successFlag ) return;

		var block = $( me.idBlock );

		// обрабатываем спец значения
		if ( !!data.messages ) {

			var _m = data.messages;

			block.find('.jsn-auth-message-registration')
					.html( !!_m.registration? _m.registration:'' );

			block.find('.jsn-auth-message-forgot')
					.html( !!_m.forgot? _m.forgot:'' );

			block.find('.jsn-auth-message-login-last')
					.html( !!_m.already? _m.already:'' );

			block.find('.jsn-auth-forgot-link')[ !!_m.host? 'show':'hide' ]()
					.find('a')
					.attr({href: '//' + (_m.host||'')})
					.html(_m.host||'');
			
		}

		if ( !!data.timeout ) {

			if ( !!data.messages && !!data.messages.timeout ) {
				// сообщение в спец.блок
			}
			// устанавливаем таймаут в блок спец.ошибок

			TIMER.deleteCallback( 1, me.idTimer );

			block.find('.jsn-auth-timeout').attr('data-auth-timeout', data.timeout).show();
			block.find('.jsn-auth-timeout-block').show();
			block.find('.jsn-auth-timeout-link').hide();

			me.idTimer = TIMER.addCallback( 1, me.timer );
		}
	};

	this.callbackActions = function(actions, successFlag){

		if ( $.isEmptyObject(actions) ) return; // false;

		var action = actions.auth||'' // (function(a){var k,n=null;for(k in a )return[k,a[k]];return[n,n];})(actions);
			, redirect = actions.redirect||'';

		if ( !!me.links[ action ] ) {
			me.setKindForm( me.links[ action ] );
			return false;
		}

		if ( !!successFlag && redirect ) {

			window.location.href = redirect||'/';
		}

		return false;
	};

	this.setErrors = function(errors) {
		var block = $( me.idBlock )
			, collect = block.find('input[name="value"], input[name="password"], input[name="name"]')
			;
		if(me.currentStatus === 'js-auth-login') {
			block.find('.js-auth-errors').html(errors.join('<br/>')).show();
		} else if(me.currentStatus === 'js-auth-registration' || me.currentStatus === 'js-auth-login-last') {
			block.find('.js-auth-errors').html(errors.join('<br/>')).show();
			block.find('.js-auth-regist-forgot-errors').html(errors.join('<br/>')).show();
		} else {
			block.find('.js-auth-regist-forgot-errors').html(errors.join('<br/>')).show();
		}
		collect.closest('.form-group').addClass('has-error');
	};
	this.resetErrors = function() {
		var block = $( me.idBlock )
			, collect = block.find('input[name="value"], input[name="password"], input[name="name"]')
			;
		block.find('.js-auth-errors').html('').hide();
		block.find('.js-auth-regist-forgot-errors').html('').hide();
		collect.closest('.form-group').removeClass('has-error');
	};

	this.callbackErrors = function(errors, actions){
		var block = $( me.idBlock );

		if ( errors.length ) {
			// засовываем в блок ошибок и показываем весь блок ошибок
			me.setErrors(errors);
		}
		return false;
	};

	this.timer = function() {

		var block = $( me.idBlock )
			, elm = block.find('.jsn-auth-timeout')
			, timeout = Number( elm.attr('data-auth-timeout') ) - 1;

		if ( timeout > 0 ) {
			var time = [ Math.floor((timeout / 60) % 60), timeout % 60 ];

			if ( time[0] > 0 ) {
				time[0] = time[0] + ' ' + TOOLS.plural( time[0], translations.minutes );
				time[1] = TOOLS.n2s( time[1] ) + ' ' + TOOLS.plural( time[1], translations.seconds );
			} else {
				time[1] = time[1] + ' ' + TOOLS.plural( time[1], translations.seconds );
				TOOLS.unset(time, 0);
			}
			elm.attr('data-auth-timeout', timeout).html( time.join(' ') );

		} else {
			TIMER.deleteCallback( 1, me.idTimer );

			block.find('.jsn-auth-timeout-block').hide();
			block.find('.jsn-auth-timeout-link').show();
		}
	};

	this.initRegistration = function(){

		$( me.idBlock )
			.find('input[name="password"]')
			.val('');

		var 
			$countriesPhoneCode = $('.js-countries-phone-codes');
		js.include('input_phones');
		$countriesPhoneCode.input_phones();
		me.forgot(false);
		me.terms(false);

		return me.setKindForm('js-auth-registration');
	};
	this.initLogin = function(){

		$( me.idBlock ).find('input[name="password"]').val('');
		if($( me.idBlock ).find('input[name="value"]').data('input_phones')) {
			$( me.idBlock ).find('input[name="value"]').input_phones('destroy');
		}

		me.forgot(false);
		me.terms(false);
		return me.setKindForm('js-auth-login');
	};
	this.initForgot = function() {

		$( me.idBlock ).find('input[name="password"]').val('');
		if($( me.idBlock ).find('input[name="value"]').data('input_phones')) {
			$( me.idBlock ).find('input[name="value"]').input_phones('destroy');
		}
		me.forgot(true);
		me.terms(false);
		return me.setKindForm('js-auth-forgot');
	};


	this.init = function() { // initialStatus = [login, registration, forgot]

		var block = $( me.idBlock );
		block.find('form').submit( me.submit );

		// клик по "зарегистрироваться"
		block.find('.jsn-auth-registration-link').click( me.initRegistration );

		// клик по "войти"
		block.find('.jsn-auth-login-link').click( me.initLogin );

		// клик по "напомнить пароль"
		block.find('.jsn-auth-forgot-help').click( me.initForgot );

		// клик по "< вернуться"
		block.find('.jsn-auth-back-link').click(function(){

			me.forgot(false);
			return me.setPrevKindForm();
		});

		// клик по "отправить заново"
		block.find('.jsn-auth-timeout-link').click( me.resendPassword );

		// клик по кнопкам "принимаю" и "не принимаю"
		block.find('.jsn-auth-terms-btn').click(function(){

			var t = $(this);
			if ( t.hasClass('jsn-auth-terms-confirm') ) {

				me.terms(true);
				block.find('form').submit();
			} else {
				me.setPrevKindForm();
			}
			return false;
		});
		block.find('.js-hideShowPassword-toggle').click(function() {
			var 
				$this = $(this),
				$iconPassword = $this.find('.js-icon-pass');
			if($iconPassword.hasClass('icon-wp-show-pass')) {
				$iconPassword
					.removeClass('icon-wp-show-pass')
					.addClass('icon-wp-hide-pass');
			} else if($iconPassword.hasClass('icon-wp-hide-pass')) {
				$iconPassword
					.removeClass('icon-wp-hide-pass')
					.addClass('icon-wp-show-pass');
			}
			// $(this).toggleClass('hideShowPassword-toggle-hide');
			block.find('input[name="password"]').togglePassword();
		});

		// клик по ссылкам "или эл.почту"/"или телефон"
		block.find('.jsn-phone-email-switch').click(me.switcher);

		// *** Авторизация через соц.сервисы ***********************************
		window.webpower.authSocialHandler(block);


		//
		switch (me.initialStatus) {
			case 'registration':
					me.initRegistration();
				break;
			case 'forgot':
					me.initForgot();
				break;
			case 'login':
				break;
			default:
		}
	};

	$(me.init);

	return this;
};

// *** Авторизация через соц.сервисы *******************************************

window.webpower.authSocialHandler = function( $block ) {
	var me = this;

	this.popupWindow = null;
	this.popupWindowOpts = {
				width: 640,
				height: 480
			};

	this.openWindow = function( url ) {

		if ( me.popupWindow ) me.popupWindow.close();

		var center = {
				left: (($(window).width() -me.popupWindowOpts.width) / 2),
				top: (($(window).height() - me.popupWindowOpts.height) / 2)
			};

		me.popupWindow = window.open(url, "soc_auth_popup_window",
				"width="
					+ me.popupWindowOpts.width
				+ ",height="
					+ me.popupWindowOpts.height
				+ ",left="
					+ center.left
				+ ",top="
					+ center.top
				+ ",resizable=yes,scrollbars=no,toolbar=no,menubar=no,"
				+ "location=no,directories=no,status=yes");

		me.popupWindow.focus();
	};

	$block.find('.jsn-auth-social').click(function(e){
		e.preventDefault();

		var url = this.href + (this.href.indexOf('?') >= 0 ? '&' : '?') + 'js';

		try {
			me.openWindow(url);
		} catch(e) {
			document.domain = window.location.host.split('.').slice(-2).join('.');
			me.openWindow(url);
		}
		// return false;
	});

};

/**
 * MODULE: default FILE: device.js
 */
// Device.js
// (c) 2014 Matthew Hudson
// Device.js is freely distributable under the MIT license.
// For all details and documentation:
// http://matthewhudson.me/projects/device.js/

(function() {

  var device,
    previousDevice,
    addClass,
    documentElement,
    find,
    handleOrientation,
    hasClass,
    orientationEvent,
    removeClass,
    userAgent;

  // Save the previous value of the device variable.
  previousDevice = window.device;

  device = {};

  // Add device as a global object.
  window.device = device;

  // The <html> element.
  documentElement = window.document.documentElement;

  // The client user agent string.
  // Lowercase, so we can use the more efficient indexOf(), instead of Regex
  userAgent = window.navigator.userAgent.toLowerCase();

  // Main functions
  // --------------

  device.ios = function () {
    return device.iphone() || device.ipod() || device.ipad();
  };

  device.iphone = function () {
    return !device.windows() && find('iphone');
  };

  device.macintosh = function () {
    return find('macintosh');
  }

  device.safari = function() {
    return find('safari');
  }

  device.chrome = function() {
    return find('chrome')
  }

  device.firefox = function() {
    return find('firefox')
  }

  device.ipod = function () {
    return find('ipod');
  };

  device.ipad = function () {
    return find('ipad');
  };

  device.android = function () {
    return !device.windows() && find('android');
  };

  device.androidPhone = function () {
    return device.android() && find('mobile');
  };

  device.androidTablet = function () {
    return device.android() && !find('mobile');
  };

  device.blackberry = function () {
    return find('blackberry') || find('bb10') || find('rim');
  };

  device.blackberryPhone = function () {
    return device.blackberry() && !find('tablet');
  };

  device.blackberryTablet = function () {
    return device.blackberry() && find('tablet');
  };

  device.windows = function () {
    return find('windows');
  };

  device.windowsPhone = function () {
    return device.windows() && find('phone');
  };

  device.windowsTablet = function () {
    return device.windows() && (find('touch') && !device.windowsPhone());
  };

  device.fxos = function () {
    return (find('(mobile;') || find('(tablet;')) && find('; rv:');
  };

  device.fxosPhone = function () {
    return device.fxos() && find('mobile');
  };

  device.fxosTablet = function () {
    return device.fxos() && find('tablet');
  };

  device.meego = function () {
    return find('meego');
  };

  device.cordova = function () {
    return window.cordova && location.protocol === 'file:';
  };

  device.nodeWebkit = function () {
    return typeof window.process === 'object';
  };

  device.mobile = function () {
    return device.androidPhone() || device.iphone() || device.ipod() || device.windowsPhone() || device.blackberryPhone() || device.fxosPhone() || device.meego();
  };

  device.tablet = function () {
    return device.ipad() || device.androidTablet() || device.blackberryTablet() || device.windowsTablet() || device.fxosTablet();
  };

  device.desktop = function () {
    return !device.tablet() && !device.mobile();
  };

  device.television = function() {
    var i, tvString;

    television = [
      "googletv",
      "viera",
      "smarttv",
      "internet.tv",
      "netcast",
      "nettv",
      "appletv",
      "boxee",
      "kylo",
      "roku",
      "dlnadoc",
      "roku",
      "pov_tv",
      "hbbtv",
      "ce-html"
    ];

    i = 0;
    while (i < television.length) {
      if (find(television[i])) {
        return true;
      }
      i++;
    }
    return false;
  };

  device.portrait = function () {
    return (window.innerHeight / window.innerWidth) > 1;
  };

  device.landscape = function () {
    return (window.innerHeight / window.innerWidth) < 1;
  };

  // Public Utility Functions
  // ------------------------

  // Run device.js in noConflict mode,
  // returning the device variable to its previous owner.
  device.noConflict = function () {
    window.device = previousDevice;
    return this;
  };

  // Private Utility Functions
  // -------------------------

  // Simple UA string search
  find = function (needle) {
    return userAgent.indexOf(needle) !== -1;
  };

  // Check if documentElement already has a given class.
  hasClass = function (className) {
    var regex;
    regex = new RegExp(className, 'i');
    return documentElement.className.match(regex);
  };

  // Add one or more CSS classes to the <html> element.
  addClass = function (className) {
    var currentClassNames = null;
    if (!hasClass(className)) {
      currentClassNames = documentElement.className.replace(/^\s+|\s+$/g, '');
      documentElement.className = currentClassNames + " " + className;
    }
  };

  // Remove single CSS class from the <html> element.
  removeClass = function (className) {
    if (hasClass(className)) {
      documentElement.className = documentElement.className.replace(" " + className, "");
    }
  };

  // HTML Element Handling
  // ---------------------

  // Insert the appropriate CSS class based on the _user_agent.

  if (device.ios()) {
    if (device.ipad()) {
      addClass("ios ipad tablet");
    } else if (device.iphone()) {
      addClass("ios iphone mobile");
    } else if (device.ipod()) {
      addClass("ios ipod mobile");
    }
  } else if (device.android()) {
    if (device.androidTablet()) {
      addClass("android tablet");
    } else {
      addClass("android mobile");
    }
  } else if (device.blackberry()) {
    if (device.blackberryTablet()) {
      addClass("blackberry tablet");
    } else {
      addClass("blackberry mobile");
    }
  } else if (device.windows()) {
    if (device.windowsTablet()) {
      addClass("windows tablet");
    } else if (device.windowsPhone()) {
      addClass("windows mobile");
    } else {
      addClass("desktop");
    }
  } else if (device.fxos()) {
    if (device.fxosTablet()) {
      addClass("fxos tablet");
    } else {
      addClass("fxos mobile");
    }
  } else if (device.meego()) {
    addClass("meego mobile");
  } else if (device.nodeWebkit()) {
    addClass("node-webkit");
  } else if (device.television()) {
    addClass("television");
  } else if (device.desktop()) {
    addClass("desktop");
  }

  if (device.cordova()) {
    addClass("cordova");
  }

  // Orientation Handling
  // --------------------

  // Handle device orientation changes.
  handleOrientation = function () {
    if (device.landscape()) {
      removeClass("portrait");
      addClass("landscape");
    } else {
      removeClass("landscape");
      addClass("portrait");
    }
    return;
  };

  // Detect whether device supports orientationchange event,
  // otherwise fall back to the resize event.
  if (Object.prototype.hasOwnProperty.call(window, "onorientationchange")) {
    orientationEvent = "orientationchange";
  } else {
    orientationEvent = "resize";
  }

  // Listen for changes in orientation.
  if (window.addEventListener) {
    window.addEventListener(orientationEvent, handleOrientation, false);
  } else if (window.attachEvent) {
    window.attachEvent(orientationEvent, handleOrientation);
  } else {
    window[orientationEvent] = handleOrientation;
  }

  handleOrientation();

  if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
    define(function() {
      return device;
    });
  } else if (typeof module !== 'undefined' && module.exports) {
    module.exports = device;
  } else {
    window.device = device;
  }

}).call(this);


/**
 * MODULE: default FILE: jquery.sticky-kit.min.js
 */
/*
 Sticky-kit v1.1.2 | WTFPL | Leaf Corcoran 2015 | http://leafo.net
*/
(function(){var b,f;b=this.jQuery||window.jQuery;f=b(window);b.fn.stick_in_parent=function(d){var A,w,J,n,B,K,p,q,k,E,t;null==d&&(d={});t=d.sticky_class;B=d.inner_scrolling;E=d.recalc_every;k=d.parent;q=d.offset_top;p=d.spacer;w=d.bottoming;null==q&&(q=0);null==k&&(k=void 0);null==B&&(B=!0);null==t&&(t="is_stuck");A=b(document);null==w&&(w=!0);J=function(a,d,n,C,F,u,r,G){var v,H,m,D,I,c,g,x,y,z,h,l;if(!a.data("sticky_kit")){a.data("sticky_kit",!0);I=A.height();g=a.parent();null!=k&&(g=g.closest(k));
if(!g.length)throw"failed to find stick parent";v=m=!1;(h=null!=p?p&&a.closest(p):b("<div />"))&&h.css("position",a.css("position"));x=function(){var c,f,e;if(!G&&(I=A.height(),c=parseInt(g.css("border-top-width"),10),f=parseInt(g.css("padding-top"),10),d=parseInt(g.css("padding-bottom"),10),n=g.offset().top+c+f,C=g.height(),m&&(v=m=!1,null==p&&(a.insertAfter(h),h.detach()),a.css({position:"",top:"",width:"",bottom:""}).removeClass(t),e=!0),F=a.offset().top-(parseInt(a.css("margin-top"),10)||0)-q,
u=a.outerHeight(!0),r=a.css("float"),h&&h.css({width:a.outerWidth(!0),height:u,display:a.css("display"),"vertical-align":a.css("vertical-align"),"float":r}),e))return l()};x();if(u!==C)return D=void 0,c=q,z=E,l=function(){var b,l,e,k;if(!G&&(e=!1,null!=z&&(--z,0>=z&&(z=E,x(),e=!0)),e||A.height()===I||x(),e=f.scrollTop(),null!=D&&(l=e-D),D=e,m?(w&&(k=e+u+c>C+n,v&&!k&&(v=!1,a.css({position:"fixed",bottom:"",top:c}).trigger("sticky_kit:unbottom"))),e<F&&(m=!1,c=q,null==p&&("left"!==r&&"right"!==r||a.insertAfter(h),
h.detach()),b={position:"",width:"",top:""},a.css(b).removeClass(t).trigger("sticky_kit:unstick")),B&&(b=f.height(),u+q>b&&!v&&(c-=l,c=Math.max(b-u,c),c=Math.min(q,c),m&&a.css({top:c+"px"})))):e>F&&(m=!0,b={position:"fixed",top:c},b.width="border-box"===a.css("box-sizing")?a.outerWidth()+"px":a.width()+"px",a.css(b).addClass(t),null==p&&(a.after(h),"left"!==r&&"right"!==r||h.append(a)),a.trigger("sticky_kit:stick")),m&&w&&(null==k&&(k=e+u+c>C+n),!v&&k)))return v=!0,"static"===g.css("position")&&g.css({position:"relative"}),
a.css({position:"absolute",bottom:d,top:"auto"}).trigger("sticky_kit:bottom")},y=function(){x();return l()},H=function(){G=!0;f.off("touchmove",l);f.off("scroll",l);f.off("resize",y);b(document.body).off("sticky_kit:recalc",y);a.off("sticky_kit:detach",H);a.removeData("sticky_kit");a.css({position:"",bottom:"",top:"",width:""});g.position("position","");if(m)return null==p&&("left"!==r&&"right"!==r||a.insertAfter(h),h.remove()),a.removeClass(t)},f.on("touchmove",l),f.on("scroll",l),f.on("resize",
y),b(document.body).on("sticky_kit:recalc",y),a.on("sticky_kit:detach",H),setTimeout(l,0)}};n=0;for(K=this.length;n<K;n++)d=this[n],J(b(d));return this}}).call(this);


/**
 * MODULE: default FILE: resize-sensor.min.js
 */
!function(){var e=function(t,i){function s(){this.q=[],this.add=function(e){this.q.push(e)};var e,t;this.call=function(){for(e=0,t=this.q.length;e<t;e++)this.q[e].call()}}function o(e,t){return e.currentStyle?e.currentStyle[t]:window.getComputedStyle?window.getComputedStyle(e,null).getPropertyValue(t):e.style[t]}function n(e,t){if(e.resizedAttached){if(e.resizedAttached)return void e.resizedAttached.add(t)}else e.resizedAttached=new s,e.resizedAttached.add(t);e.resizeSensor=document.createElement("div"),e.resizeSensor.className="resize-sensor";var i="position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;",n="position: absolute; left: 0; top: 0; transition: 0s;";e.resizeSensor.style.cssText=i,e.resizeSensor.innerHTML='<div class="resize-sensor-expand" style="'+i+'"><div style="'+n+'"></div></div><div class="resize-sensor-shrink" style="'+i+'"><div style="'+n+' width: 200%; height: 200%"></div></div>',e.appendChild(e.resizeSensor),{fixed:1,absolute:1}[o(e,"position")]||(e.style.position="relative");var d,r,l=e.resizeSensor.childNodes[0],c=l.childNodes[0],h=e.resizeSensor.childNodes[1],a=(h.childNodes[0],function(){c.style.width=l.offsetWidth+10+"px",c.style.height=l.offsetHeight+10+"px",l.scrollLeft=l.scrollWidth,l.scrollTop=l.scrollHeight,h.scrollLeft=h.scrollWidth,h.scrollTop=h.scrollHeight,d=e.offsetWidth,r=e.offsetHeight});a();var f=function(){e.resizedAttached&&e.resizedAttached.call()},u=function(e,t,i){e.attachEvent?e.attachEvent("on"+t,i):e.addEventListener(t,i)},p=function(){e.offsetWidth==d&&e.offsetHeight==r||f(),a()};u(l,"scroll",p),u(h,"scroll",p)}var d=Object.prototype.toString.call(t),r="[object Array]"===d||"[object NodeList]"===d||"[object HTMLCollection]"===d||"undefined"!=typeof jQuery&&t instanceof jQuery||"undefined"!=typeof Elements&&t instanceof Elements;if(r)for(var l=0,c=t.length;l<c;l++)n(t[l],i);else n(t,i);this.detach=function(){if(r)for(var i=0,s=t.length;i<s;i++)e.detach(t[i]);else e.detach(t)}};e.detach=function(e){e.resizeSensor&&(e.removeChild(e.resizeSensor),delete e.resizeSensor,delete e.resizedAttached)},"undefined"!=typeof module&&"undefined"!=typeof module.exports?module.exports=e:window.ResizeSensor=e}();
//# sourceMappingURL=maps/ResizeSensor.min.js.map


/**
 * MODULE: default FILE: theia-sticky-sidebar.min.js
 */
!function(i){i.fn.theiaStickySidebar=function(t){function e(t,e){var a=o(t,e);a||(console.log("TSS: Body width smaller than options.minWidth. Init is delayed."),i(document).on("scroll."+t.namespace,function(t,e){return function(a){var n=o(t,e);n&&i(this).unbind(a)}}(t,e)),i(window).on("resize."+t.namespace,function(t,e){return function(a){var n=o(t,e);n&&i(this).unbind(a)}}(t,e)))}function o(t,e){return t.initialized===!0||!(i("body").width()<t.minWidth)&&(a(t,e),!0)}function a(t,e){t.initialized=!0;var o=i("#theia-sticky-sidebar-stylesheet-"+t.namespace);0===o.length&&i("head").append(i('<style id="theia-sticky-sidebar-stylesheet-'+t.namespace+'">.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>')),e.each(function(){function e(){a.fixedScrollTop=0,a.sidebar.css({"min-height":"1px"}),a.stickySidebar.css({position:"static",width:"",transform:"none"})}function o(t){var e=t.height();return t.children().each(function(){e=Math.max(e,i(this).height())}),e}var a={};if(a.sidebar=i(this),a.options=t||{},a.container=i(a.options.containerSelector),0==a.container.length&&(a.container=a.sidebar.parent()),a.sidebar.parents().css("-webkit-transform","none"),a.sidebar.css({position:a.options.defaultPosition,overflow:"visible","-webkit-box-sizing":"border-box","-moz-box-sizing":"border-box","box-sizing":"border-box"}),a.stickySidebar=a.sidebar.find(".theiaStickySidebar"),0==a.stickySidebar.length){var s=/(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i;a.sidebar.find("script").filter(function(i,t){return 0===t.type.length||t.type.match(s)}).remove(),a.stickySidebar=i("<div>").addClass("theiaStickySidebar").append(a.sidebar.children()),a.sidebar.append(a.stickySidebar)}a.marginBottom=parseInt(a.sidebar.css("margin-bottom")),a.paddingTop=parseInt(a.sidebar.css("padding-top")),a.paddingBottom=parseInt(a.sidebar.css("padding-bottom"));var r=a.stickySidebar.offset().top,d=a.stickySidebar.outerHeight();a.stickySidebar.css("padding-top",1),a.stickySidebar.css("padding-bottom",1),r-=a.stickySidebar.offset().top,d=a.stickySidebar.outerHeight()-d-r,0==r?(a.stickySidebar.css("padding-top",0),a.stickySidebarPaddingTop=0):a.stickySidebarPaddingTop=1,0==d?(a.stickySidebar.css("padding-bottom",0),a.stickySidebarPaddingBottom=0):a.stickySidebarPaddingBottom=1,a.previousScrollTop=null,a.fixedScrollTop=0,e(),a.onScroll=function(a){if(a.stickySidebar.is(":visible")){if(i("body").width()<a.options.minWidth)return void e();if(a.options.disableOnResponsiveLayouts){var s=a.sidebar.outerWidth("none"==a.sidebar.css("float"));if(s+50>a.container.width())return void e()}var r=i(document).scrollTop(),d="static";if(r>=a.sidebar.offset().top+(a.paddingTop-a.options.additionalMarginTop)){var c,p=a.paddingTop+t.additionalMarginTop,b=a.paddingBottom+a.marginBottom+t.additionalMarginBottom,l=a.sidebar.offset().top,f=a.sidebar.offset().top+o(a.container),h=0+t.additionalMarginTop,g=a.stickySidebar.outerHeight()+p+b<i(window).height();c=g?h+a.stickySidebar.outerHeight():i(window).height()-a.marginBottom-a.paddingBottom-t.additionalMarginBottom;var u=l-r+a.paddingTop,S=f-r-a.paddingBottom-a.marginBottom,y=a.stickySidebar.offset().top-r,m=a.previousScrollTop-r;"fixed"==a.stickySidebar.css("position")&&"modern"==a.options.sidebarBehavior&&(y+=m),"stick-to-top"==a.options.sidebarBehavior&&(y=t.additionalMarginTop),"stick-to-bottom"==a.options.sidebarBehavior&&(y=c-a.stickySidebar.outerHeight()),y=m>0?Math.min(y,h):Math.max(y,c-a.stickySidebar.outerHeight()),y=Math.max(y,u),y=Math.min(y,S-a.stickySidebar.outerHeight());var k=a.container.height()==a.stickySidebar.outerHeight();d=(k||y!=h)&&(k||y!=c-a.stickySidebar.outerHeight())?r+y-a.sidebar.offset().top-a.paddingTop<=t.additionalMarginTop?"static":"absolute":"fixed"}if("fixed"==d){var v=i(document).scrollLeft();a.stickySidebar.css({position:"fixed",width:n(a.stickySidebar)+"px",transform:"translateY("+y+"px)",left:a.sidebar.offset().left+parseInt(a.sidebar.css("padding-left"))-v+"px",top:"0px"})}else if("absolute"==d){var x={};"absolute"!=a.stickySidebar.css("position")&&(x.position="absolute",x.transform="translateY("+(r+y-a.sidebar.offset().top-a.stickySidebarPaddingTop-a.stickySidebarPaddingBottom)+"px)",x.top="0px"),x.width=n(a.stickySidebar)+"px",x.left="",a.stickySidebar.css(x)}else"static"==d&&e();"static"!=d&&1==a.options.updateSidebarHeight&&a.sidebar.css({"min-height":a.stickySidebar.outerHeight()+a.stickySidebar.offset().top-a.sidebar.offset().top+a.paddingBottom}),a.previousScrollTop=r}},a.onScroll(a),i(document).on("scroll."+a.options.namespace,function(i){return function(){i.onScroll(i)}}(a)),i(window).on("resize."+a.options.namespace,function(i){return function(){i.stickySidebar.css({position:"static"}),i.onScroll(i)}}(a)),"undefined"!=typeof ResizeSensor&&new ResizeSensor(a.stickySidebar[0],function(i){return function(){i.onScroll(i)}}(a))})}function n(i){var t;try{t=i[0].getBoundingClientRect().width}catch(i){}return"undefined"==typeof t&&(t=i.width()),t}var s={containerSelector:"",additionalMarginTop:0,additionalMarginBottom:0,updateSidebarHeight:!0,minWidth:0,disableOnResponsiveLayouts:!0,sidebarBehavior:"modern",defaultPosition:"relative",namespace:"TSS"};return t=i.extend(s,t),t.additionalMarginTop=parseInt(t.additionalMarginTop)||0,t.additionalMarginBottom=parseInt(t.additionalMarginBottom)||0,e(t,this),this}}(jQuery);
//# sourceMappingURL=maps/theia-sticky-sidebar.min.js.map


/**
 * MODULE: default FILE: screen.js
 */
(function() {
	var Screen = {};
	
	var mediaQueries = [
		{
			mediaTitle: 'xs',
			mediaValue: 320
		},
		{
			mediaTitle: 'sm',
			mediaValue: 768
		},
		{
			mediaTitle: 'md',
			mediaValue: 1024
		},
		{
			mediaTitle: 'lg',
			mediaValue: 1280
		}
	];

	Screen.getMediaQuery = function() {
		var 
			screenWidth = Screen.getWidth(),
			result = null,
			mediaQueriesLength = mediaQueries.length;

		for (var i = mediaQueriesLength - 1; i >= 0; i--) {
			if (mediaQueries[i].mediaValue <= screenWidth) {
				result = mediaQueries[i].mediaTitle;
				break;
			} 
		}

		return result;
	};
	Screen.isViewElement = function(selector, fullView, offset) {
		var 
			result = false,
			screenCoords = {},
			elementsCoords = {},
			$element = $(selector);
		
		if(!$element.length) return result;

		screenCoords['top'] = parseInt(offset) ? $(window).scrollTop() + ((Screen.getHeight() * offset)/100) : $(window).scrollTop();
		screenCoords['bottom'] = screenCoords['top'] + Screen.getHeight();

		elementsCoords['top'] = $element.offset().top;
		elementsCoords['bottom'] = elementsCoords['top'] + $element.height();

		switch(fullView) {
			case true:
				if($element.height() <= Screen.getHeight()) {
					if(
						(
							elementsCoords.top >= screenCoords.top
							&& elementsCoords.bottom <= screenCoords.bottom
						)
					) {
						result = true;
					}
				} else {
					if(
						elementsCoords.top <= screenCoords.top
					) {
						result = true;
					}
				}
				break;
			default:
				if(
					(
						elementsCoords.top >= screenCoords.top
						&& elementsCoords.top < screenCoords.bottom
					)
					||
					(
						elementsCoords.bottom > screenCoords.top
						&& elementsCoords.top < screenCoords.top
					)
				) {
					result = true;
				}
				break;
		}

		return result;
	}

	Screen.ScrollTo = function(selector, offset, time) {
		var 
			$element = $(selector),
			currOffset = !isNaN(parseInt(offset)) ? parseInt(offset) : 0,
			currTime = !isNaN(parseInt(time)) ? parseInt(time) : 500;

		if(!$element.length) return;

		$('html, body').animate(
			{
				scrollTop: $element.offset().top - currOffset
			}, 
			currTime
		);
	}

	// поддержка тач скрина
	Screen.isTouch = function() {
		try {
			document.createEvent("TouchEvent");
			return true;
		}
		catch (e) { return false; }
	};

	// ширина экрана
	Screen.getWidth = function() {
		var viewPortWidth;

		// the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
		if (typeof window.innerWidth != 'undefined') {
			viewPortWidth = window.innerWidth;
		}

		// IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
		else if (typeof document.documentElement != 'undefined' 
				 && typeof document.documentElement.clientWidth != 'undefined' 
				 && document.documentElement.clientWidth != 0) {

			viewPortWidth = document.documentElement.clientWidth;
		}

		// older versions of IE
		else {
			viewPortWidth = document.getElementsByTagName('body')[0].clientWidth;
		}

		return viewPortWidth;
	}

	// высота экрана
	Screen.getHeight =function() {
		var viewPortHeight;

		// the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
		if (typeof window.innerWidth != 'undefined') {
			viewPortHeight = window.innerHeight;
		}

		// IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
		else if (typeof document.documentElement != 'undefined' 
				 && typeof document.documentElement.clientHeight != 'undefined' 
				 && document.documentElement.clientHeight != 0) {

			viewPortHeight = document.documentElement.clientHeight;
		}

		// older versions of IE
		else {
			viewPortHeight = document.getElementsByTagName('body')[0].clientHeight;
		}

		return viewPortHeight;
	}

	window.Screen = Screen;

}).call(this);


/**
 * MODULE: default FILE: jquery.mb.browser.js
 */
/*
 * ******************************************************************************
 *  jquery.mb.components
 *  file: jquery.mb.browser.js
 *
 *  Copyright (c) 2001-2014. Matteo Bicocchi (Pupunzi);
 *  Open lab srl, Firenze - Italy
 *  email: matteo@open-lab.com
 *  site: 	http://pupunzi.com
 *  blog:	http://pupunzi.open-lab.com
 * 	http://open-lab.com
 *
 *  Licences: MIT, GPL
 *  http://www.opensource.org/licenses/mit-license.php
 *  http://www.gnu.org/licenses/gpl.html
 *
 *  last modified: 13/03/14 22.30
 *  *****************************************************************************
 */

/*******************************************************************************
 *
 * jquery.mb.browser
 * Author: pupunzi
 * Creation date: 16/01/13
 *
 ******************************************************************************/
/*Browser detection patch*/

var nAgt = navigator.userAgent;

if(!jQuery.browser){

	jQuery.browser = {};
	jQuery.browser.mozilla = false;
	jQuery.browser.webkit = false;
	jQuery.browser.opera = false;
	jQuery.browser.safari = false;
	jQuery.browser.chrome = false;
	jQuery.browser.msie = false;

	jQuery.browser.ua = nAgt;

	jQuery.browser.name  = navigator.appName;
	jQuery.browser.fullVersion  = ''+parseFloat(navigator.appVersion);
	jQuery.browser.majorVersion = parseInt(navigator.appVersion,10);
	var nameOffset,verOffset,ix;

// In Opera, the true version is after "Opera" or after "Version"
	if ((verOffset=nAgt.indexOf("Opera"))!=-1) {
		jQuery.browser.opera = true;
		jQuery.browser.name = "Opera";
		jQuery.browser.fullVersion = nAgt.substring(verOffset+6);
		if ((verOffset=nAgt.indexOf("Version"))!=-1)
			jQuery.browser.fullVersion = nAgt.substring(verOffset+8);
	}

// In Opera > 20 the true version is after "OPR"
	else if ((verOffset=nAgt.indexOf("OPR"))!=-1) {
		jQuery.browser.opera = true;
		jQuery.browser.name = "Opera";
		jQuery.browser.fullVersion = nAgt.substring(verOffset+4);
	}
	
// In MSIE < 11, the true version is after "MSIE" in userAgent
	else if ( (verOffset=nAgt.indexOf("MSIE"))!=-1) {
		jQuery.browser.msie = true;
		jQuery.browser.name = "Microsoft Internet Explorer";
		jQuery.browser.fullVersion = nAgt.substring(verOffset+5);
	}

// In TRIDENT (IE11) => 11, the true version is after "rv:" in userAgent
	else if (nAgt.indexOf("Trident")!=-1 ) {
		jQuery.browser.msie = true;
		jQuery.browser.name = "Microsoft Internet Explorer";
		var start = nAgt.indexOf("rv:")+3;
		var end = start+4;
		jQuery.browser.fullVersion = nAgt.substring(start,end);
	}

// In Chrome, the true version is after "Chrome"
	else if ((verOffset=nAgt.indexOf("Chrome"))!=-1) {
		jQuery.browser.webkit = true;
		jQuery.browser.chrome = true;
		jQuery.browser.name = "Chrome";
		jQuery.browser.fullVersion = nAgt.substring(verOffset+7);
	}
// In Safari, the true version is after "Safari" or after "Version"
	else if ((verOffset=nAgt.indexOf("Safari"))!=-1) {
		jQuery.browser.webkit = true;
		jQuery.browser.safari = true;
		jQuery.browser.name = "Safari";
		jQuery.browser.fullVersion = nAgt.substring(verOffset+7);
		if ((verOffset=nAgt.indexOf("Version"))!=-1)
			jQuery.browser.fullVersion = nAgt.substring(verOffset+8);
	}
// In Safari, the true version is after "Safari" or after "Version"
	else if ((verOffset=nAgt.indexOf("AppleWebkit"))!=-1) {
		jQuery.browser.webkit = true;
		jQuery.browser.name = "Safari";
		jQuery.browser.fullVersion = nAgt.substring(verOffset+7);
		if ((verOffset=nAgt.indexOf("Version"))!=-1)
			jQuery.browser.fullVersion = nAgt.substring(verOffset+8);
	}
// In Firefox, the true version is after "Firefox"
	else if ((verOffset=nAgt.indexOf("Firefox"))!=-1) {
		jQuery.browser.mozilla = true;
		jQuery.browser.name = "Firefox";
		jQuery.browser.fullVersion = nAgt.substring(verOffset+8);
	}
// In most other browsers, "name/version" is at the end of userAgent
	else if ( (nameOffset=nAgt.lastIndexOf(' ')+1) < (verOffset=nAgt.lastIndexOf('/')) ){
		jQuery.browser.name = nAgt.substring(nameOffset,verOffset);
		jQuery.browser.fullVersion = nAgt.substring(verOffset+1);
		if (jQuery.browser.name.toLowerCase()==jQuery.browser.name.toUpperCase()) {
			jQuery.browser.name = navigator.appName;
		}
	}

// trim the fullVersion string at semicolon/space if present
	if ((ix=jQuery.browser.fullVersion.indexOf(";"))!=-1)
		jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,ix);
	if ((ix=jQuery.browser.fullVersion.indexOf(" "))!=-1)
		jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,ix);

	jQuery.browser.majorVersion = parseInt(''+jQuery.browser.fullVersion,10);
	if (isNaN(jQuery.browser.majorVersion)) {
		jQuery.browser.fullVersion  = ''+parseFloat(navigator.appVersion);
		jQuery.browser.majorVersion = parseInt(navigator.appVersion,10);
	}
	jQuery.browser.version = jQuery.browser.majorVersion;

}

/*Check all mobile environments*/
jQuery.browser.android = (/Android/i).test(nAgt);
jQuery.browser.blackberry = /BlackBerry|BB|PlayBook/i.test(nAgt);
jQuery.browser.ios = /iPhone|iPad|iPod|webOS/i.test(nAgt);
jQuery.browser.operaMobile = (/Opera Mini/i).test(nAgt);
jQuery.browser.windowsMobile = /IEMobile|Windows Phone/i.test(nAgt);
jQuery.browser.kindle = /Kindle|Silk/i.test(nAgt);

jQuery.browser.mobile = jQuery.browser.android || jQuery.browser.blackberry || jQuery.browser.ios || jQuery.browser.windowsMobile || jQuery.browser.operaMobile || jQuery.browser.kindle;



/**
 * MODULE: default FILE: jquery.numberMask.min.js
 */
/*!
 * jQuery numberMask Plugin v1.0.0
 *
 * Licensed under the MIT License
 * Authors: Konstantin Krivlenia
 *          krivlenia@gmail.com
 * Site:  https://github.com/Mavrin/maskInput
 */
!function(e){if("function"==typeof define&&define.amd)define(["jquery"],e);else if("object"==typeof module&&module.exports){var t=require("jquery");module.exports=e(t)}else e(jQuery)}(function(e){return e.fn.numberMask=function(t){var n,r={type:"int",beforePoint:10,afterPoint:2,defaultValueInput:0,allowNegative:!1,decimalMark:["."],pattern:""},a=function(e){var t=e.which;if(e.ctrlKey||e.altKey||e.metaKey||32>t)return!0;if(t){var a=String.fromCharCode(t),i=e.target.value,l=o(e.target);return i=i.substring(0,l.start)+a+i.substring(l.end),r.allowNegative&&"-"===i||n.test(i)}},i=function(t){var n=e(t.currentTarget);n.val(l(n))},o=function(e){var t,n,r,a,i,o=0,l=0,c=!1;return"number"==typeof e.selectionStart&&"number"==typeof e.selectionEnd?(o=e.selectionStart,l=e.selectionEnd):(n=document.selection.createRange(),n&&n.parentElement()==e&&(a=e.value.length,t=e.value.replace(/\r\n/g,"\n"),r=e.createTextRange(),r.moveToBookmark(n.getBookmark()),i=e.createTextRange(),i.collapse(!1),r.compareEndPoints("StartToEnd",i)>-1?o=l=a:(o=-r.moveStart("character",-a),o+=t.slice(0,o).split("\n").length-1,r.compareEndPoints("EndToEnd",i)>-1?l=a:(l=-r.moveEnd("character",-a),l+=t.slice(0,l).split("\n").length-1)))),o-l!=0&&(c=!0),{start:o,end:l,statusSelection:c}},l=function(e){var t=e.val();return n.test(t)?t:r.defaultValueInput},c=function(){for(var e="(\\"+r.decimalMark[0],t=1;t<r.decimalMark.length;t++)e+="|\\"+r.decimalMark[t];return e+=")"};if(this.bind("keypress",a).bind("input",i),t&&(t.decimalMark&&"string"===e.type(t.decimalMark)&&(t.decimalMark=[t.decimalMark]),e.extend(r,t)),"object"==typeof r.pattern&&r.pattern instanceof RegExp)n=r.pattern;else{var u=r.allowNegative?"[-]?":"",d="^"+u+"\\d{1,"+r.beforePoint+"}$",s="^"+u+"\\d{1,"+r.beforePoint+"}"+c()+"\\d{0,"+r.afterPoint+"}$";n=new RegExp("int"==r.type?d:d+"|"+s)}return this},e});

/**
 * MODULE: default FILE: number_format.js
 */
Number.prototype.number_format = function(decimals, dec_point, thousands_sep, decimals_views_zero) {
	var 
		number = this,
		i, 
		j, 
		kw, 
		kd, 
		km,
		result;

	if(typeof decimals_views_zero === 'undefined') {
		decimals_views_zero = false;
	}

	if( isNaN(decimals = Math.abs(decimals)) ){
		decimals = 2;
	}
	if( dec_point == undefined ){
		dec_point = ",";
	}
	if( thousands_sep == undefined ){
		thousands_sep = ".";
	}

	i = parseInt(number = (+number || 0).toFixed(decimals)) + "";

	if( (j = i.length) > 3 ){
		j = j % 3;
	} else{
		j = 0;
	}

	km = (j ? i.substr(0, j) + thousands_sep : "");
	kw = i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands_sep);

	if(decimals) {
		kd = Math.abs(number - i).toFixed(decimals).replace(/-/, 0).slice(2);
		if(!decimals_views_zero && parseInt(kd) === 0) {
			kd = "";
		} else {
			kd = dec_point + kd;
		}
	} else {
		kd = "";
	}

	result = km + kw + kd;
	return result;
};

/**
 * MODULE: default FILE: jquery.cookie.js
 */
/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2006, 2014 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		// CommonJS
		factory(require('jquery'));
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function encode(s) {
		return config.raw ? s : encodeURIComponent(s);
	}

	function decode(s) {
		return config.raw ? s : decodeURIComponent(s);
	}

	function stringifyCookieValue(value) {
		return encode(config.json ? JSON.stringify(value) : String(value));
	}

	function parseCookieValue(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape...
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}

		try {
			// Replace server-side written pluses with spaces.
			// If we can't decode the cookie, ignore it, it's unusable.
			// If we can't parse the cookie, ignore it, it's unusable.
			s = decodeURIComponent(s.replace(pluses, ' '));
			return config.json ? JSON.parse(s) : s;
		} catch(e) {}
	}

	function read(s, converter) {
		var value = config.raw ? s : parseCookieValue(s);
		return $.isFunction(converter) ? converter(value) : value;
	}

	var config = $.cookie = function (key, value, options) {

		// Write

		if (arguments.length > 1 && !$.isFunction(value)) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setTime(+t + days * 864e+5);
			}

			return (document.cookie = [
				encode(key), '=', stringifyCookieValue(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// Read

		var result = key ? undefined : {};

		// To prevent the for loop in the first place assign an empty array
		// in case there are no cookies at all. Also prevents odd result when
		// calling $.cookie().
		var cookies = document.cookie ? document.cookie.split('; ') : [];

		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = parts.join('=');

			if (key && key === name) {
				// If second argument (value) is a function it's a converter...
				result = read(cookie, value);
				break;
			}

			// Prevent storing a cookie that we couldn't decode.
			if (!key && (cookie = read(cookie)) !== undefined) {
				result[name] = cookie;
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) === undefined) {
			return false;
		}

		// Must not alter options, thus extending a fresh object...
		$.cookie(key, '', $.extend({}, options, { expires: -1 }));
		return !$.cookie(key);
	};

}));

/**
 * MODULE: default FILE: selectWP.js
 */

(function($) {
	jQuery.fn.selectWP = function(options){

		var init = function(){
			var $this = $(this),
				$parentSelect = $this.parent(),
				optionList = [],
				$selectWP;

			optionList = getOptionList($this.find('option'), $this.find('option:selected'));
			$selectWP = formSelect();

			$parentSelect.append($selectWP);
			$this.hide();
			addEvents();

			function getOptionList(selectOptionList, selectedOption) {
				var optionList = [],
					selectedValue = selectedOption.val();

				$.each(selectOptionList, function(key, value) {
					var optionListItem = {},
						$this = $(value);

					optionListItem.value = $this.val();
					optionListItem.text = $this.text();

					if($this.attr('data-selectwp-class') !== undefined) {
						optionListItem.class = $this.attr('data-selectwp-class');
					}

					if($this.attr('selected') !== undefined || $this.val() === selectedValue) {
						optionListItem.selected = true;
					} else {
						optionListItem.selected = false;
					}

					optionList.push(optionListItem);
				});
				return optionList;
			};

			function formSelect() {
				var selectCntHtml = '<div class="selectwp-wrapper">' + 
										'<div class="selectwp-cnt">' + 
											'<span class="selectwp-text">' + 
											'</span>' + 
										'</div>' + 
									'</div>',
					selectOptionsCntHtml =  '<div class="selectwp-options-cnt"></div>',
					selectOptionHtml =  '<div class="selectwp-option-item">' + 
											'<span class="selectwp-option-text">' + 
											'</span>' + 
										'</div>',
					selectedText = '',
					selectedValue = '';

				$templateSelectCnt = $(selectCntHtml),
				$templateOptionsCnt = $(selectOptionsCntHtml),
				$templateOption = $(selectOptionHtml);

				$.each(optionList, function(key, value) {
					var $option = $templateOption.clone(),
						$optionText = $option.find('.selectwp-option-text');

					$option.attr('value', value.value);
					$optionText.text(value.text);

					if(value.class) {
						$optionText.addClass(value.class);
					}

					if(value.selected) {
						$option.attr('selected', 'selected');
						selectedText = value.text;
					}
					$templateOptionsCnt.append($option);
				});

				if(selectedText) {
					$templateSelectCnt.find(".selectwp-text").text(selectedText);
				}

				$templateSelectCnt.append($templateOptionsCnt);

				return $templateSelectCnt;

			};

			function addEvents() {
				$selectWP.find('.selectwp-cnt').on('click', function(e) {
					var $this = $(e.target),
						$parentThis = $this.parent();
					$selectWP.toggleClass('open');
				})

				$selectWP.find('.selectwp-option-item').on('click', function(e) {
					var $this = $(this),
						value = $this.attr('value'),
						selected = $this.attr('selected'),
						text = $this.find('.selectwp-option-text').text(),
						classList = $this.find('.selectwp-option-text').attr('class').replace('selectwp-option-text', ''),
						addClasses = '';

					if(classList !== undefined) {
						addClasses = classList;
					}

					$selectWP.toggleClass('open');

					// if(selected === undefined) {
						setActiveOption($selectWP, $this);
						setTextSelect($selectWP, text, addClasses);
						setSelectValue(value);
					// }
				});

				$(document).on('click', function(e) {
					var target = $(e.target);

					if(target.closest('.selectwp-wrapper').get(0) != $selectWP.get(0)) {
						$selectWP.removeClass('open');
						return;
					}

					if (
						// ie modal dialog fix
						e.type == "focusin" ||
						target.closest('.selectwp-wrapper').length ||
						target.closest('.select-cnt').length
						) return;
				})
			};

			function setActiveOption(selectWP, $option) {
				$selectWP.find('.selectwp-option-item').removeAttr('selected');
				$option.attr('selected', 'selected');
			};

			function setTextSelect(selectWP, text, classes) {
				$selectWP.find('.selectwp-text').text(text).attr('class', 'selectwp-text').addClass(classes);
			};

			function setSelectValue(value, classes) {
				$this.find('option').removeAttr('selected');
				$this.find("option[value='" + value + "']").attr('selected', 'selected');
				$this.trigger('change');
			};

		};

		return this.each(init);

	};
})(jQuery);

/**
 * MODULE: default FILE: jquery.smartbanner.js
 */
/*!
 * jQuery Smart Banner
 * Copyright (c) 2012 Arnold Daniels <arnold@jasny.net>
 * Based on 'jQuery Smart Web App Banner' by Kurt Zenisek @ kzeni.com
 */
(function(root, factory) {
  if (typeof define == 'function' && define.amd) {
    define(['jquery'], factory);
  } else {
    factory(root.jQuery);
  }
})(this, function($) {
  var UA = navigator.userAgent;
  var isEdge = /Edge/i.test(UA);

  var SmartBanner = function(options) {
    // Get the original margin-top of the HTML element so we can take that into account.
    this.origHtmlMargin = parseFloat($('html').css('margin-top'));
    this.options = $.extend({}, $.smartbanner.defaults, options);

    // Check if it's already a standalone web app or running within a webui view of an app (not mobile safari).
    var standalone = navigator.standalone;

    // Detect banner type (iOS or Android).
    if (this.options.force) {
      this.type = this.options.force;
    }
    else if (UA.match(/Windows Phone/i) !== null && UA.match(/Edge|Touch/i) !== null) {
      this.type = 'windows';
    }
    else if (UA.match(/iPhone|iPod/i) !== null || (UA.match(/iPad/) && this.options.iOSUniversalApp)) {
      if (UA.match(/Safari/i) !== null &&
          (UA.match(/CriOS/i) !== null ||
           UA.match(/FxiOS/i) != null ||
            window.Number(UA.substr(UA.indexOf('OS ') + 3, 3).replace('_', '.')) < 6)) {
        // Check webview and native smart banner support (iOS 6+).
        this.type = 'ios';
      }
    }
    else if (UA.match(/\bSilk\/(.*\bMobile Safari\b)?/) || UA.match(/\bKF\w/) || UA.match('Kindle Fire')) {
      this.type = 'kindle';
    }
    else if (UA.match(/Android/i) !== null) {
      this.type = 'android';
    }
    // Don't show banner if device isn't iOS or Android, website is loaded in app or user dismissed banner.
    if (!this.type || standalone || this.getCookie('sb-closed') || this.getCookie('sb-installed')) {
      return;
    }
    // Calculate scale.
    this.scale = this.options.scale == 'auto' ? $(window).width() / window.screen.width : this.options.scale;
    if (this.scale < 1) {
      this.scale = 1;
    }
    // Get info from meta data.
    var meta = $(
      this.type == 'android'
        ? 'meta[name="google-play-app"]'
        : (this.type == 'ios'
            ? 'meta[name="apple-itunes-app"]'
            : (this.type == 'kindle'
                ? 'meta[name="kindle-fire-app"]'
                : 'meta[name="msApplication-ID"]'
              )
          )
    );
    if (!meta.length) {
      return;
    }
    // For Windows Store apps, get the PackageFamilyName for protocol launch.
    if (this.type == 'windows') {
      if (isEdge) {
        this.appId = $('meta[name="msApplication-PackageEdgeName"]').attr('content');
      }
      if (!this.appId) {
        this.appId = $('meta[name="msApplication-PackageFamilyName"]').attr('content');
      }
    }
    else {
      // Try to pull the appId out of the meta tag and store the result.
      var parsedMetaContent = /app-id=([^\s,]+)/.exec(meta.attr('content'));
      if (parsedMetaContent) {
        this.appId = parsedMetaContent[1];
      } else {
        return;
      }
    }
    this.title = this.options.title
      ? this.options.title
      : (meta.data('title') || $('title').text().replace(/\s*[|\-·].*$/, ''));

    this.author = this.options.author
      ? this.options.author
      : (meta.data('author') || ($('meta[name="author"]').length ? $('meta[name="author"]').attr('content') : window.location.hostname));

    this.iconUrl = meta.data('icon-url');
    this.price = meta.data('price');

    // Set default onInstall callback if not set in options.
    if (typeof this.options.onInstall == 'function') {
      this.options.onInstall = this.options.onInstall;
    } else {
      this.options.onInstall = function() {};
    }
    // Set default onClose callback if not set in options.
    if (typeof this.options.onClose == 'function') {
      this.options.onClose = this.options.onClose;
    } else {
      this.options.onClose = function() {};
    }
    // Create banner.
    this.create();
    this.show();
    this.listen();
  };

  SmartBanner.prototype = {

    constructor: SmartBanner,

    create: function() {
      var iconURL;
      var price = this.price || this.options.price;

      var link = this.options.url || (function() {
        switch (this.type) {
          case 'android':
            return 'market://details?id=';
          case 'kindle':
            return 'amzn://apps/android?asin=';
          case 'windows':
            return isEdge
              ? 'ms-windows-store://pdp/?productid='
              : 'ms-windows-store:navigate?appid=';
        }
        return 'https://itunes.apple.com/' + this.options.appStoreLanguage + '/app/id';
      }.call(this) + this.appId);

      var inStore = !price ? '' : (function() {
        var result = price + ' - ';
        switch (this.type) {
          case 'android':
            return result + this.options.inGooglePlay;
          case 'kindle':
            return result + this.options.inAmazonAppStore;
          case 'windows':
            return result + this.options.inWindowsStore;
        }
        return result + this.options.inAppStore
      }.call(this));

      var gloss = this.options.iconGloss == null
        ? (this.type=='ios')
        : this.options.iconGloss;

      if (this.type == 'android' && this.options.GooglePlayParams) {
        link += '&referrer=' + this.options.GooglePlayParams;
      }
      var banner = (
        '<div id="smartbanner" class="' + this.type + '">' +
          '<div class="sb-container">' +
            '<a href="#" class="sb-close">&times;</a>' +
            '<span class="sb-icon"></span>' +
            '<div class="sb-info">' +
              '<strong>' + this.title + '</strong>' +
              '<span>' + this.author + '</span>' +
              '<span>' + inStore + '</span>' +
            '</div>' +
            '<a href="' + link + '" class="sb-button">' +
              '<span>' + this.options.button + '</span>' +
            '</a>' +
          '</div>' +
        '</div>'
      );
      if (this.options.layer) {
        $(this.options.appendToSelector).append(banner);
      } else {
        $(this.options.appendToSelector).prepend(banner);
      }
      if (this.options.icon) {
        iconURL = this.options.icon;
      } else if(this.iconUrl) {
        iconURL = this.iconUrl;
      } else if ($('link[rel="apple-touch-icon-precomposed"]').length > 0) {
        iconURL = $('link[rel="apple-touch-icon-precomposed"]').attr('href');
        if (this.options.iconGloss == null) {
          gloss = false;
        }
      } else if ($('link[rel="apple-touch-icon"]').length > 0) {
        iconURL = $('link[rel="apple-touch-icon"]').attr('href');
      } else if ($('meta[name="msApplication-TileImage"]').length > 0) {
        iconURL = $('meta[name="msApplication-TileImage"]').attr('content');
      } else if ($('meta[name="msapplication-TileImage"]').length > 0) {
        // Redundant because ms docs show two case usages.
        iconURL = $('meta[name="msapplication-TileImage"]').attr('content');
      }
      if (iconURL) {
        $('#smartbanner .sb-icon').css('background-image', 'url(' + iconURL + ')');
        if (gloss) {
          $('#smartbanner .sb-icon').addClass('gloss');
        }
      } else{
        $('#smartbanner').addClass('no-icon');
      }
      this.bannerHeight = $('#smartbanner').outerHeight() + 2;

      if (this.scale > 1) {
        $('#smartbanner')
          .css('top', parseFloat($('#smartbanner').css('top')) * this.scale)
          .css('height', parseFloat($('#smartbanner').css('height')) * this.scale)
          .hide();
        $('#smartbanner .sb-container')
          .css('-webkit-transform', 'scale(' + this.scale + ')')
          .css('-msie-transform', 'scale(' + this.scale + ')')
          .css('-moz-transform', 'scale(' + this.scale + ')')
          .css('width', $(window).width() / this.scale);
      }
      $('#smartbanner')
        .css('position', this.options.layer ? 'absolute' : 'static');
    },

    listen: function() {
      $('#smartbanner .sb-close').on('click', $.proxy(this.close, this));
      $('#smartbanner .sb-button').on('click', $.proxy(this.install, this));
    },

    show: function(callback) {
      var banner = $('#smartbanner');
      banner.stop();

      if (this.options.layer) {
        banner
          .animate({ top: 0, display: 'block' }, this.options.speedIn)
          .addClass('shown')
          .show();
        $(this.pushSelector)
          .animate({
            paddingTop: this.origHtmlMargin + (this.bannerHeight * this.scale)
          }, this.options.speedIn, 'swing', callback);
      }
      else {
        if ($.support.transition) {
          banner.animate({ top: 0 }, this.options.speedIn).addClass('shown');
          var transitionCallback = function() {
            $('html').removeClass('sb-animation');
            if (callback) {
              callback();
            }
          };
          $(this.pushSelector)
            .addClass('sb-animation')
            .one($.support.transition.end, transitionCallback)
            .emulateTransitionEnd(this.options.speedIn)
            .css('margin-top', this.origHtmlMargin + (this.bannerHeight * this.scale));
        }
        else {
          banner
            .slideDown(this.options.speedIn)
            .addClass('shown');
        }
      }
    },

    hide: function(callback) {
      var banner = $('#smartbanner');
      banner.stop();

      if (this.options.layer) {
        banner.animate({
          top: -1 * this.bannerHeight * this.scale,
          display: 'block'
        }, this.options.speedIn)
        .removeClass('shown');

        $(this.pushSelector)
          .animate({
            paddingTop: this.origHtmlMargin
          }, this.options.speedIn, 'swing', callback);
      }
      else {
        if ($.support.transition) {
          if (this.type !== 'android') {
            banner
              .css('top', -1 * this.bannerHeight * this.scale)
              .removeClass('shown');
          }
          else {
            banner
              .css({display:'none'})
              .removeClass('shown');
          }
          var transitionCallback = function() {
            $('html').removeClass('sb-animation');
            if (callback) {
              callback();
            }
          };
          $(this.pushSelector)
            .addClass('sb-animation')
            .one($.support.transition.end, transitionCallback)
            .emulateTransitionEnd(this.options.speedOut)
            .css('margin-top', this.origHtmlMargin);
        }
        else {
          banner.slideUp(this.options.speedOut).removeClass('shown');
        }
      }
    },

    close: function(e) {
      e.preventDefault();
      this.hide();
      this.setCookie('sb-closed', 'true', this.options.daysHidden);
      this.options.onClose(e);
    },

    install: function(e) {
      if (this.options.hideOnInstall) {
        this.hide();
      }
      this.setCookie('sb-installed', 'true', this.options.daysReminder);
      this.options.onInstall(e);
    },

    setCookie: function(name, value, exdays) {
      var exdate = new Date();
      exdate.setDate(exdate.getDate() + exdays);
      value = encodeURI(value) + ((exdays == null) ? '' : '; expires=' + exdate.toUTCString());
      document.cookie = name + '=' + value + '; path=/;';
    },

    getCookie: function(name) {
      var i, x, y, ARRcookies = document.cookie.split(';');
      for (i = 0; i < ARRcookies.length; i++) {
        x = ARRcookies[i].substr(0, ARRcookies[i].indexOf('='));
        y = ARRcookies[i].substr(ARRcookies[i].indexOf('=') + 1);
        x = x.replace(/^\s+|\s+$/g, '');
        if (x == name) {
          return decodeURI(y);
        }
      }
      return null;
    },

    // Demo only.
    switchType: function() {
      var that = this;

      this.hide(function() {
        that.type = that.type == 'android' ? 'ios' : 'android';
        var meta = $(that.type == 'android' ? 'meta[name="google-play-app"]' : 'meta[name="apple-itunes-app"]').attr('content');
        that.appId = /app-id=([^\s,]+)/.exec(meta)[1];

        $('#smartbanner').detach();
        that.create();
        that.show();
      });
    }
  };

  $.smartbanner = function(option) {
    var $window = $(window);
    var data = $window.data('smartbanner');
    var options = typeof option == 'object' && option;
    if (!data) {
      $window.data('smartbanner', (data = new SmartBanner(options)));
    }
    if (typeof option == 'string') {
      data[option]();
    }
  };

  // override these globally if you like (they are all optional)
  $.smartbanner.defaults = {
    title: null, // What the title of the app should be in the banner (defaults to <title>)
    author: null, // What the author of the app should be in the banner (defaults to <meta name="author"> or hostname)
    price: 'FREE', // Price of the app
    appStoreLanguage: 'us', // Language code for App Store
    inAppStore: 'On the App Store', // Text of price for iOS
    inGooglePlay: 'In Google Play', // Text of price for Android
    inAmazonAppStore: 'In the Amazon Appstore',
    inWindowsStore: 'In the Windows Store', //Text of price for Windows
    GooglePlayParams: null, // Aditional parameters for the market
    icon: null, // The URL of the icon (defaults to <meta name="apple-touch-icon">)
    iconGloss: null, // Force gloss effect for iOS even for precomposed
    button: 'VIEW', // Text for the install button
    url: null, // The URL for the button. Keep null if you want the button to link to the app store.
    scale: 'auto', // Scale based on viewport size (set to 1 to disable)
    speedIn: 300, // Show animation speed of the banner
    speedOut: 400, // Close animation speed of the banner
    daysHidden: 15, // Duration to hide the banner after being closed (0 = always show banner)
    daysReminder: 90, // Duration to hide the banner after "VIEW" is clicked *separate from when the close button is clicked* (0 = always show banner)
    force: null, // Choose 'ios', 'android' or 'windows'. Don't do a browser check, just always show this banner
    hideOnInstall: true, // Hide the banner after "VIEW" is clicked.
    layer: false, // Display as overlay layer or slide down the page
    iOSUniversalApp: true, // If the iOS App is a universal app for both iPad and iPhone, display Smart Banner to iPad users, too.
    appendToSelector: 'body', //Append the banner to a specific selector
    pushSelector: 'html' // What element is going to push the site content down; this is where the banner append animation will start.
  };

  $.smartbanner.Constructor = SmartBanner;

  // ============================================================
  // Bootstrap transition
  // Copyright 2011-2014 Twitter, Inc.
  // Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)

  function transitionEnd () {
    var el = document.createElement('smartbanner');

    var transEndEventNames = {
      WebkitTransition: 'webkitTransitionEnd',
      MozTransition: 'transitionend',
      OTransition: 'oTransitionEnd otransitionend',
      transition: 'transitionend'
    };

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return {end: transEndEventNames[name]};
      }
    }
    // Explicit for ie8.
    return false;
  }
  if ($.support.transition !== undefined) {
    // Prevent conflict with Twitter Bootstrap.
    return;
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function(duration) {
    var called = false, $el = this;
    $(this).one($.support.transition.end, function() {
      called = true;
    });
    var callback = function() {
      if (!called) {
        $($el).trigger($.support.transition.end);
      }
    };
    setTimeout(callback, duration);
    return this;
  };

  $(function() {
    $.support.transition = transitionEnd();
  });
  // ============================================================
});


/**
 * MODULE: default FILE: favorite.js
 */
$(function() {
	$('.like').favoriteButton();
	window.favoriteIndicator = new FavoriteIndicator('.js-favorites-count');

	$(document).on('filterLoaded portionLoaded similarlistLoaded', function() {
		$('.like').favoriteButton();
	});

	$(document).on('balloonOpen', function(e) {
		var $likes = $('#map-m').find('.like').favoriteButton();
	})

	$(document).on('click', '.js-del-from-favorite', function(e) {
		e.preventDefault();
		e.stopPropagation();

		var 
			$this = $(this),
			$favoriteBtn = $this
								.closest('.js-like-wrapper')
								.find('.js-like-as-btn')
								.data('plugin_favoriteButton');

		if($favoriteBtn) {
			$favoriteBtn.toggleFavorite();
		}
	})

});


/**
 * MODULE: default FILE: favorite.plugin.js
 */
/* objects/favorite.plugin */

(function ($, w, d, undefined) {
	var pluginName = 'favoriteButton',
		arrFavorites = [];

	function FavoriteButton(element) {
		this.$element = $(element);
		var that = this;
		this.$element.on('click', function (e) {
			e.preventDefault();
			e.stopPropagation();

			var 
				$this = $(this);

			// для кнопки избранного как на странице объекта
			if($this.hasClass('js-like-as-btn') && $this.hasClass('favorite-is-set')) {
				var urlToFavorites = $this
										.closest('.js-like-wrapper')
										.find('.js-go-to-favorites')
										.attr('data-href');
				if(typeof urlToFavorites !== 'undefined') {
					location.href = urlToFavorites;
				}
			} else {
				that.toggleFavorite();
			}
		});

	}

	FavoriteButton.prototype = {
		setFavorite: function (value) {
			if (value) {
				this
					.$element
					.removeClass('favorite-not-set')
					.addClass('favorite-is-set')
					// для кнопки избранного как на странице объекта
					.closest('.js-like-wrapper')
					.removeClass('favorite-not-set')
					.addClass('favorite-is-set')
					;
			} else {
				this
					.$element
					.removeClass('favorite-is-set')
					.addClass('favorite-not-set')
					// для кнопки избранного как на странице объекта
					.closest('.js-like-wrapper')
					.removeClass('favorite-is-set')
					.addClass('favorite-not-set');
			}
		},
		toggleFavorite: function () {
			var 
				self = this,
				loadingElements = null,
				$element = self.$element;

			if(self.$element.hasClass('js-like-as-btn')) {
				loadingElements = '.js-like-wrapper';
			}

			w.favoriteIndicator.addAnimation($element);
			
			webpower.request(
				'/api/json/objects/toggle_favorite/id/' + self.$element.data('obj-id'),
				{},
				{
					success: function(data) {
						self.setFavorite(data.is_favorite);
						w.favoriteIndicator.setCount(data.count, data.count_text);
						w.favoriteIndicator.removeAnimation($element);
						$element.removeClass('pulse-animation');
						w.favoriteIndicator.afterToggleFavorite(data, $element);
						
						$(document).trigger(
								'favorite-toggle',
								[
									self.$element.data('obj-id'),
									data.is_favorite
								]
							);
						$(document.body).trigger("sticky_kit:recalc");
					},
					errors: function() {
						w.favoriteIndicator.removeAnimation($element);
					},
					actions: function() {
						w.favoriteIndicator.removeAnimation($element);
					},
					loadingElements: loadingElements
				}
			);

		}
	};

	$.fn[pluginName] = function () {
		return this.each(function () {
			if (!$.data(this, "plugin_" + pluginName)) {
				$.data(this, "plugin_" + pluginName, new FavoriteButton(this));
			}
		});
	};

	function FavoriteIndicator(selector) {
		this.$elements = $(selector);
		// this.lastPopover = null;
		//this.update();
		var that = this,
			statusLogin = false;

		$(w).on('updateFavorites', function() {
			that.update();
		})
	}

	FavoriteIndicator.prototype = {
		update: function () {
			if(arrFavorites.length) {
				for(var i = 0; i < arrFavorites.length; i++) {
					var $favorite = $('.like[data-obj-id=' + arrFavorites[i] + ']');

					if($favorite.length) {
						$favorite
							.addClass('favorite-is-set')
							// для кнопки избранного как на странице объекта
							.closest('.js-like-wrapper')
							.removeClass('favorite-not-set')
							.addClass('favorite-is-set');

						if($favorite.attr('data-toggle') === 'popover') {
							$favorite.attr('data-content', T.core.delete_favorite);
						}
					}
				}

				this.setCount( arrFavorites.length );
			}
		},
		setCount: function (count, text) {
			$(this.$elements.selector).each(function () {
				var isShort = $(this).attr('data-short-favorites-count');
				// $(this).text(isShort ? count : [count, text].join(' '));

				if(parseInt(count) > 0) {
					$('.js-favorites-something').removeClass('hidden');
					$('.js-favorites-nothing').addClass('hidden');
					
					$(this).text(count);
					$(this).removeClass('not-active');
				} else {
					$(this).text('');
					$('.js-favorites-nothing').removeClass('hidden');
					$('.js-favorites-something').addClass('hidden');
					
					if(!$(this).hasClass('not-active')) {
						$(this).addClass('not-active');
					}
				}
			});
		},
		addFavorites: function(arrayFavorites) {
			arrFavorites = arrayFavorites;
		},
		afterToggleFavorite: function (data, $element) {
			var 
				defaultShowTime = 3; // in sec

/*
			if ( this.lastPopover ) {
				this.lastPopover.popover('destroy');
			}
*/
			if (!$element.hasClass('js-like-as-btn')) {
				$element.popover('hide');
/*
				$element.data({
					'toggle': 'popover',
					'placement': 'bottom',
					'trigger': 'manual',
					'html': true,
					'popoverClass': 'popover-md text-center',
					// 'popoverClass': 'popover-md popover-secondary text-center',
					// 'timerClose': defaultShowTime
				})
*/
				if(data.is_favorite) {
					if($element.attr('data-toggle') === 'popover') {
						$element.attr('data-content', T.core.delete_favorite);
					}
				} else {
					if($element.attr('data-toggle') === 'popover') {
						$element.attr('data-content', T.core.add_favorite);
					}
				}

				// data.is_favorite 
				// 	? 
				// 		$element.attr('data-content', 'Добавлено в <a href="/cabinet/favorites">Список избранных</a>') 
				// 	: 
				// 		$element.attr('data-content', 'Удалено из избранного');

				// $element.popover('show');
				// this.lastPopover = $element.popover('show');
			}
		},
		addAnimation: function($element) {
			if (!$element.hasClass('js-like-as-btn')) {
				$element.addClass('pulse-animation');
			} else {
				$element.addClass('loading loading-primary');
			}
		},
		removeAnimation: function($element) {
			if (!$element.hasClass('js-like-as-btn')) {
				$element.removeClass('pulse-animation');
			} else {
				$element.removeClass('loading loading-primary');
			}
		}
	};

	w.FavoriteIndicator = FavoriteIndicator;
})(jQuery, window, document);



/**
 * MODULE: default FILE: popover.js
 */
!function($) {

    'use strict';

    // save the original function object
    var _super = $.fn.popover;

    var dismiss = '[data-dismiss="popover"]';

    // create a new constructor
    var Popover = function(element, options) {
        // do custom constructor stuff here
        var
            self = this,
            $popover = $(element),
            template = '<div class="popover ',
            setTimeoutClose = null;

        if('popoverClass' in options && options['popoverClass']) {
            template += options.popoverClass;
        }

        if('dismissible' in options) {
            template +=
                        ' popover-dismissible" role="tooltip">' +
                            '<div class="arrow"></div>' +
                            '<button type="button" class="close" data-dismiss="popover" aria-hidden="true">&times;</button>';
        } else {
            template +=
                        '" role="tooltip">' +
                            '<div class="arrow"></div>';
        }

        template +=
                        '<div class="popover-content"></div>' +
                    '</div>';

        options.template = template;
        options.setTimeoutClose = null;

        // call the original constructor
        _super.Constructor.apply( this, arguments );

        this.$element.on('click', dismiss, function() {
            self._super('hide');
            clearTimeout(self.setTimeoutClose);

            if(typeof self.$element.attr('id') !== 'undefined') {
                var
                    cookieData = [],
                    popoverId = self.$element.attr('id');

                if (typeof($.cookie('popovers')) == 'undefined') {
                    $.cookie('popovers', popoverId, {expires: 365, path: '/', domain:'.'+TOOLS.domain, raw:true});
                } else {
                    var cookieDataStr = $.cookie('popovers');
                    cookieData = cookieDataStr.split(',');
                }

                cookieData.push(popoverId);
                $.cookie('popovers', cookieData.join(','), {expires: 365, path: '/', domain:'.'+TOOLS.domain, raw:true});
            }

        });

        if('timerClose' in options) {
            var
                timerClose = parseInt(options['timerClose']);

            if(isNaN(timerClose) || timerClose === 0) {
                timerClose = Popover.DEFAULTS.timerCloseInterval;
            }

            this.$element.on('shown.bs.popover', function() {
                self.setTimeoutClose =  setTimeout(
                                        function() {
                                            self._super('hide');
                                            clearTimeout(self.setTimeoutClose);
                                        },
                                        timerClose * 1000
                                    );
            });

            this.$element.on('hidden.bs.popover', function() {
                clearTimeout(self.setTimeoutClose);
            });
        }

        if('autoOpen' in options) {
            var
                $popover = self.$element,
                popoverId = $popover.attr('id');;

            if('setCookie' in options) {
                if(isShowPopoverFromCookieByID(popoverId)) {
                    this.show();
                }
            } else {
                this.show();
            }
        }

    }

    // add custom defaults
    Popover.DEFAULTS = $.extend( _super.defaults, {
         timerCloseInterval: 10
    });

    // extend prototypes and add a super function
    Popover.prototype = $.extend({}, _super.Constructor.prototype, {
        constructor: Popover,
        _super: function() {
            var args = $.makeArray(arguments);

            _super.Constructor.prototype[args.shift()].apply(this, args);
        },
        show: function() {
            var
                popover = this,
                $popover = this.$element,
                popoverId = $popover.attr('id');

            if(
                ('setCookie' in this.options && isShowPopoverFromCookieByID(popoverId)) 
                || 'setCookie' in this.options === false
            ) {
                this._super('show');
				if('dismissible' in this.options) {
                	initDismissible(popover);
				}
			}
        }
    });

    function initDismissible(popover) {
		if (!popover || !popover.$tip) return;
        popover.$tip.on('click', function() {
			popover._super('hide');
			clearTimeout(popover.setTimeoutClose);
			writeInCookie(popover)
		})
    }

    function writeInCookie(popover) {
        if('setCookie' in popover.options) {
            if(typeof popover.$element.attr('id') !== 'undefined') {
                var
                    cookieData = [],
                    popoverId = popover.$element.attr('id');

                if (typeof($.cookie('popovers')) == 'undefined') {
                    $.cookie('popovers', popoverId, {expires: 365, path: '/', domain:'.'+TOOLS.domain, raw:true});
                } else {
                    var cookieDataStr = $.cookie('popovers');
                    cookieData = cookieDataStr.split(',');
                }

                cookieData.push(popoverId);
                $.cookie('popovers', cookieData.join(','), {expires: 365, path: '/', domain:'.'+TOOLS.domain, raw:true});
            }
        }
    }

    function isShowPopoverFromCookieByID(popoverId) {
        var popoversCookie = $.cookie('popovers');

        if (typeof(popoversCookie) == 'undefined') {
            if (device.desktop() || device.ipad()) {
                return true;
            }
        } else {
            var hiddenIDs = popoversCookie.split(',');
            if ($.inArray(popoverId, hiddenIDs) == -1) {
                if (device.desktop() || device.ipad()) {
                    return true;
                }
            }
        }

        return false;
    }

    // Copied exactly from Bootstrap 3 (as of Popover.VERSION  = '3.3.5')
    // Notice: You can copy & paste it exactly, no differences!
    function Plugin(option, _relatedTarget) {
        return this.each(function () {
            var $this   = $(this)
            var data    = $this.data('bs.popover')
            var options = $.extend({}, Popover.DEFAULTS, $this.data(), typeof option == 'object' && option)

            if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
            if (typeof option == 'string') data[option](_relatedTarget)
            else if (options.show) data.show(_relatedTarget)
        })
    }

    // override the old initialization with the new constructor
    $.fn.popover = $.extend(Plugin, $.fn.popover);

}(jQuery);


/**
 * MODULE: default FILE: tagManagerDataLayer.js
 */
// Глобальная переменная источника данных для Google TagManager
var dataLayer = [];

var md5Criteo = '' //'79054025255fb1a26e4bc422aef54eb4';

var TMDL = {

	// Хелпер для получения статуса гостя
	getGuestStatus: function (userData) {
		var guestStatus = 'new';

		if (userData.user_is_client > 0) {
			if (userData.user_is_client_loyal > 0) {
				guestStatus = 'loyal';
			} else {
				guestStatus = 'returning';
			}
		}

		return guestStatus;
	},

	// Хелпер для получения статуса владельца
	getOwnerStatus: function (userData) {
		var ownerStatus = '';
		if (userData.user_is_superhost) {
			ownerStatus = ownerStatus + ' ' + 'superhost';
		}
		if (userData.user_is_newbie) {
			ownerStatus = ownerStatus + ' ' + 'newbie';
		}
		ownerStatus = (ownerStatus.trim().length === 0) ? 'ordinary' : ownerStatus.trim();

		return ownerStatus;
	},

	// Отправка данных о пользователе при инициализации шапки
	initUserData: function (userData) {

		this.createGoogleAnalyticsUser(userData);

		var data = {};
		if (typeof userData.user === 'undefined') {
			data = {userAuth: 'unauthorized'};
		} else {
			data = {
				userAuth: 'authorized',
				userId: userData.user.id,
				userRole: (userData.user_is_owner > 0) ? 'owner' : 'guest',
				guestStatus: this.getGuestStatus(userData),
				ownerStatus: this.getOwnerStatus(userData)
			};
		}

		return dataLayer.push(data);
	},

	//отправка расширенной аналитики пользователя
	createGoogleAnalyticsUser: function(userData) {
		if (typeof(ga) == 'undefined') {
			return;
		}
		ga('create', glob_ga_id, 'auto');

		if (glob_ga_utm_source!="")		ga('set', 'campaignSource', glob_ga_utm_source);
		if (glob_ga_utm_medium!="")		ga('set', 'campaignMedium', glob_ga_utm_medium);
		if (glob_ga_utm_campaign!="")	ga('set', 'campaignName',	glob_ga_utm_campaign);

		if (typeof userData.user === 'undefined') {
			ga('set','dimension8', 'unauthorized');
		} else {
			ga('set','userId', userData.user.id);
			ga('set','dimension8', 'authorized');
			
			ga('set','dimension9', (userData.user_is_owner > 0) ? 'owner' : 'guest');
			ga('set','dimension11', this.getGuestStatus(userData));

			if (userData.user_is_owner > 0) {
				ga('set','dimension10', this.getOwnerStatus(userData));
			}			
		}

		ga('set','dimension16', this.getGoogleAnalyticsParam('clientId'));

		ga('send', {
			hitType: 'pageview',
			page: glob_ga_pageparams
		});

	},

	getObjectDataValue: function(fieldName, objectData, defaultValue=null){
		try{ return objectData.data.properties[fieldName].value; }
		catch(e){ return defaultValue; } 
	},
	
	//получение параметров ga
	getGoogleAnalyticsParam:  function(paramName){
		if (typeof(ga) == 'undefined') {
			return false;
		}		
		if (!ga.getAll) {
			return false;
		}
		var tracker = ga.getAll()[0];
		if (!tracker || !tracker.get) {
			return false;
		}
		return tracker.get(paramName);
	},
	//отправка расширенной аналитики продукта
	createGoogleAnalyticsProduct:  function(objectData, type, detail) {
		
		if (typeof(ga) == 'undefined') {
			return;
		}
		
		ga('create', glob_ga_id, 'auto');
		ga('require', 'ec');

		ga('set', 'currencyCode', 'RUR');

		if (glob_ga_utm_source!="")		ga('set', 'campaignSource', glob_ga_utm_source);
		if (glob_ga_utm_medium!="")		ga('set', 'campaignMedium', glob_ga_utm_medium);
		if (glob_ga_utm_campaign!="")	ga('set', 'campaignName',	glob_ga_utm_campaign);

		ga('set','dimension16', this.getGoogleAnalyticsParam('clientId'));

		ga('set', 'dimension1', objectData.id);
		ga('set', 'dimension4', objectData.data.prices[0].value);
		ga('set', 'dimension5', ''+Math.round(parseFloat(objectData.rating)));

		if (type =='detail') {
			if (objectData.choosen_dates !== false) {
				ga('set', 'dimension2', moment(objectData.choosen_dates.date_begin).format('YYYY-MM-DD'));
				ga('set', 'dimension3', moment(objectData.choosen_dates.date_end).format('YYYY-MM-DD'));
			}
		}

		if (type =='add' || type =='checkout') {
			ga('set', 'dimension2', moment(detail.date_begin).format('YYYY-MM-DD'));
			ga('set', 'dimension3', moment(detail.date_end).format('YYYY-MM-DD'));
		}

		if (type =='checkout') {
			ga('set', 'dimension6', this.bookingTypeHelper(detail.orderData));
			ga('set', 'dimension7', detail.orderData.guests);
			ga('set', 'metric5', detail.orderData.guests);

		}


		var variant = 1;
		if (objectData.type_id == 1 || objectData.type_id == 2) {
			variant = this.getObjectDataValue('rooms', objectData, 1);
		}

		ga('ec:addProduct', {
		'name': objectData.object_subtype,
		'id': objectData.id,
		'price': (type=='add' ? (detail.commonPrice/detail.days).toFixed(2) : objectData.data.prices[0].value),
		'brand': objectData.data.location[0].city,
		'category': objectData.object_type,
		'variant': variant,
		'position': objectData.priorities.data || "0"
		});

		ga('ec:setAction', type);


		ga('send', {
			hitType: 'pageview',
			page: glob_ga_pageparams
		});
	},

	// Отправка сведений об объекте при загрузке карточки объекта
	initObjectPage: function (objectData) {
		if (!objectData.id) return false;

		this.createGoogleAnalyticsProduct(objectData, 'detail', {});

		var data = {
			objectId: objectData.id,
			objectBasecost: objectData.data.prices[0].value,
			objectRating: Math.round(parseFloat(objectData.rating)),
			ecommerce: {
				detail: {
					//actionField: { //список с которого был переход на объект. поиск, похожие, вы смотрели, избранное и т.п.
					//	list: 'search'
					//},
					products: [{
							name: objectData.object_subtype,
							id: objectData.id,
							price: objectData.data.prices[0].value,
							brand: objectData.data.location[0].city,
							category: objectData.object_type,
							position: objectData.priorities.data || "0"
						}]
				}
			}
		};

		if (objectData.choosen_dates !== false) {
			data.bookingStartdate = moment(objectData.choosen_dates.date_begin).format('YYYY-MM-DD');
			data.bookingEnddate = moment(objectData.choosen_dates.date_end).format('YYYY-MM-DD');
		}

		if (objectData.type_id == 1 || objectData.type_id == 2) {
			data.ecommerce.detail.products[0].variant = this.getObjectDataValue('rooms', objectData, 1);
		}

		return dataLayer.push(data);
	},

	// Отправка кликов по форме бронирования на карточке объекта
	bookingFormClick: function (objectData) {
		var data = {
			event: 'sutochnogtm',
			eventCategory: 'booking',
			eventAction: 'step1',
			eventLabel: objectData.data.location[0].city
		};

		return dataLayer.push(data);
	},

	// Добавление в корзину (переход в черновик)
	addToBasketClick: function (objectData, detail) {
		if (typeof(ga) == 'undefined') {
			return;
		}		
		this.createGoogleAnalyticsProduct(objectData, 'add', detail);
		ga('send', 'event', 'booking', 'step1,5', objectData.data.location[0].city, detail.commonPrice);
		return true;
	},

	// Оформление брони
	orderSent2: function (objectData, detail) {
		if (typeof(ga) == 'undefined') {
			return;
		}				
		this.createGoogleAnalyticsProduct(objectData, 'checkout', detail);
		ga('send', 'event', 'booking', 'step2', objectData.data.location[0].city, detail.commonPrice);
		return true;
	},

	// Отправка данных о черновике заявки
	initOrderDraft: function (objectData, priceData) {
		var data = {
			event: 'sutochnogtm',
			eventCategory: 'booking',
			eventAction: 'step1,5',
			eventLabel: objectData.data.location[0].city,
			eventValue: priceData.price,
			bookingStartdate: moment(priceData.date_begin).format('YYYY-MM-DD'),
			bookingEnddate: moment(priceData.date_end).format('YYYY-MM-DD'),
			ecommerce: {
				add: {
					products: [{
							name: objectData.object_subtype,
							id: objectData.id,
							price: (priceData.price / priceData.cnt).toFixed(2),
							brand: objectData.data.location[0].city,
							category: objectData.object_type,
							position: objectData.priorities.data || "0",
							quantity: priceData.cnt
						}]
				}
			}
		};

		if (objectData.type_id == 1 || objectData.type_id == 2) {
			data.ecommerce.add.products[0].variant = this.getObjectDataValue('rooms', objectData, 1);
		}

		return dataLayer.push(data);
	},

	bookingTypeHelper: function(orderData) {
		var bookingType = '';
		if (orderData.is_object_hot) {
			bookingType = bookingType + ' ' + 'hot';
		}
		if (orderData.is_booking_now) {
			bookingType = bookingType + ' ' + 'instant';
		}

		return bookingType.trim();
	},

	// Отправка данных после отправки заявки
	orderSent: function (orderData, objectCity) {
		var data = {
			event: 'sutochnogtm',
			eventCategory: 'booking',
			eventAction: 'step2',
			eventLabel: objectCity,
			eventValue: orderData.form.cost,
			bookingType: this.bookingTypeHelper(orderData),
			bookingGuestcount: orderData.guests
		};

		return dataLayer.push(data);
	},

	// Отправка данных после оплаты брони
	orderPayed: function(objectData, orderData){
		var orderCost = orderData.data.properties.cost.value;
		if (typeof orderData.data.properties.cost_new !== 'undefined'){
			var orderCost = orderData.data.properties.cost_new.value;
		}
		var data = {
			event: 'sutochnogtm',
			eventCategory: 'booking',
			eventAction: 'gtmtransaction',
			eventLabel: objectData.data.location[0].city,
			eventValue: orderCost,
			bookingPrepayment: orderData.precost,
			bookingBonus: orderData.precost_bonus || 0,
			bookingRealmoney: orderData.precost_real || 0,
			bookingFee: orderData.data.properties.service_fee.value || 0,
			ecommerce: {
				purchase: {
					actionField: {
						id: orderData.id,
						revenue: orderCost,
					},
					products: [{
						name: objectData.object_subtype,
						id: objectData.id,
						price: (orderCost / orderData.nights).toFixed(2),
						brand: objectData.data.location[0].city,
						category: objectData.object_type,
						position: objectData.priorities.data || "0",
						quantity: orderData.nights,
					}]
				}
			}
		};

		if (objectData.type_id == 1 || objectData.type_id == 2) {
			data.ecommerce.purchase.products[0].variant = this.getObjectDataValue('rooms', objectData, 1);
		}

		return dataLayer.push(data);
	},

	// Клик по соцсетям в футере сайта
	socialClick: function(socialNetwork){
		var data = {
			event: 'sutochnogtm',
			eventCategory: 'social',
			eventAction: socialNetwork
		};

		return dataLayer.push(data);
	},

	// Шаринг объекта в соцсетях
	objectSocialShare: function(socialNetwork){
		var data = {
			event: 'sutochnogtm',
			eventCategory: 'share',
			eventAction: socialNetwork
		};

		return dataLayer.push(data);
	},

	// Criteo
	criteo: {
		/**
		 * Главная страница
		 * Path: /core/views/index.tpl.html
		 * @function
		 * @name home
		 */
		home: function(){
			dataLayer.push({
				'event': 'crto_homepage',
				crto: {
					'email': md5Criteo
				}
			});
		},
		/**
		 * Каталог / Листинг
		 * Path: /modules/search/views/js/searchResults.js
		 * @function
		 * @name listing
		 * @param {array} products - Массив уникальных идентификаторов продуктов.
		 */
		listing: function (products) {
			dataLayer.push({
				'event': 'crto_listingpage',
				crto: {
					'email': md5Criteo,
					'products': products
				}
			});
		},
		/**
		 * Карточка товара
		 * Path: /modules/orders/views/js/booking_v2.js
		 * @function
		 * @name product
		 * @param {string} product - Уникальный идентификатор продукта.
		 */
		product: function (product) {
			dataLayer.push({
				'event': 'crto_productpage',
				crto: {
					'email': md5Criteo,
					'products': [product]
				}
			});
		},
		/**
		 * Корзина
		 * Path: /modules/orders/views/js/booking_v2.js
		 * @function
		 * @name basket
		 * @param {string} productID - Уникальный идентификатор продукта.
		 * @param {string} productPrice - Цена за сутки.
		 * @param {string} productQuantity - Кол-во суток.
		 */
		basket: function (productID, productPrice, productQuantity, productCurrency) {
			dataLayer.push({
				'event': 'crto_basketpage',
				crto: {
					'email': md5Criteo,
					'currency' : productCurrency,
					'products': [{
						id: productID,
						price: productPrice,
						quantity: productQuantity
					}]
				}
			})
		},
		/**
		 * Продажа
		 * Path: /modules/orders/views/js/booking_v2_detail.js
		 * @function
		 * @name transaction
		 * @param {string} ID - Идентификатор заказа.
		 * @param {string} productID - Уникальный идентификатор продукта.
		 * @param {string} productPrice - Цена за сутки.
		 * @param {string} productQuantity - Кол-во суток.
		 */
		transaction: function (ID, productID, productPrice, productQuantity, productCurrency) {
			dataLayer.push({
				'event': 'crto_transactionpage',
				crto: {
					'email': md5Criteo,
					'currency' : productCurrency,
					'transactionid': ID,
					'products': [{
						id: productID,
						price: productPrice,
						quantity: productQuantity
					}]
				}
			})
		},
	}

};


/**
 * MODULE: default FILE: functions.js
 */
function init() {
	/**
	 * @author Vladimir Kolesnikov <voloko@gmail.com>
	 * @copyright (c) Vladimir Kolesnikov <voloko@gmail.com>
	 */
	var js = {
		version: '1.1.7_als',
		rootUrl: '/doc/js/',
		context: this,
		versioninig: false
	};



/*	Function.prototype.bind = function() {
	  var __method = this;
	  var object = arguments[0];
	  return function() {
	    return __method.apply(object);
	  };
	};
*/

	Object.extend = function(destination, source) {
	  for (var property in source) {
	    destination[property] = source[property];
	  }
	  return destination;
	};

	js.getXHTTPTransport = function() {
		var result = false;
		var actions = [
	      function() {return new XMLHttpRequest();},
	      function() {return new ActiveXObject('Msxml2.XMLHTTP');},
	      function() {return new ActiveXObject('Microsoft.XMLHTTP');}
	    ];
	    for(var i = 0; i < actions.length; i++) {
	    	try{
	    		result = actions[i]();
	    		break;
	    	} catch (e) {}
	    }
	    return result;
	 };
	/**
	 * @param {Object} object
	 * @param {String} name
	 * @param {Object?} value
	 * @param {bool?} forceSet
	 */
	js.evalProperty = function(object, name, value, forceSet) {
		if(object) {
			if(!object[name] || forceSet) object[name] = value || true;
			return object[name];
		}
		return null;
	};
	/**
	 * @param {String} path
	 * @param {Object?} context
	 * @param {Object?} value
	 * @param {bool?} forceSet
	 */
	js.evalPath = function(path, context, value, forceSet) {
		context = context || js.context;
		var pos = path.indexOf('.');
		if(pos == -1) {
			return js.evalProperty(context, path, value, forceSet);
		} else {
			var name = path.substring(0, pos);
			var path = path.substring(pos + 1);
			var obj = js.evalProperty(context, name, value);
			return js.evalPath(path, obj, value, forceSet);
		}
	};

	/**
	 * @param {String} path
	 * @param {float} version
	 * @return {String}
	 */
	js.pathToUrl = function(path, version) {
		return js.rootUrl + path+// .replace(/\./g, '/') +
			(js.versioninig ? '.v' + version : '') + '.js';
	};
	/**
	 * @type {Array}
	 */
	js.loadedModules = {};

	/**
	 * @type {Array}
	 */
	js.loadedFiles = {};

	/**
	 * @param {String} path
	 * @param {float} version
	 */
	js.module = function(path, version) {
		version = version || 1.0;
		js.loadedModules[path] = js.loadedModules[path] ? Math.max(js.loadedModules[path], version) : version;
		return js.evalPath(path, null, {});
	};


	/**
	 * @param {String} path
	 * @param {float} version
	 */
	js.include = function(path, version) {
		version = version || 1.0;
		if(js.loadedModules[path] && js.loadedModules[path] >= version) return false;
		if(js.loadedFiles[path]) return false;
		js.loadedFiles[path] = path;
		var transport = js.getXHTTPTransport();
		transport.open('GET', js.pathToUrl(path, version), false);
		transport.send(null);
		if(transport.status == 404) {
			console.warn("Not Found file: ", path);
			return false;
		}

		var code = transport.responseText;
		(typeof execScript != 'undefined') ? execScript(code) :
			(js.context.eval ? js.context.eval(code) : eval(code));

		// window.execScript ? execScript(code) : window.eval(code);

		return true;
	};
	js.load = js.include;

	js.includeScript = function(path, version) {
		if(js.loadedModules[path] && js.loadedModules[path] >= version) return false;
		var transport = js.getXHTTPTransport();
		transport.open('GET', path, false);
		transport.send(null);
		if (!code) return true;
		var code = transport.responseText;
		(typeof execScript != 'undefined') ? execScript(code) :
			(js.context.eval ? js.context.eval(code) : eval(code));
		return true;
	};

	/**
	 * @param {String} newClass
	 * @param {Object} superClass
	 * @param {Object} props
	 */
	js.extend = function(newClass, superClass, props) {
		var multiple = [];
		if(superClass instanceof Array || typeof superClass == 'array') {
			multiple = superClass;
			superClass = multiple.shift();
		}
		if(typeof newClass == 'string') {
			newClass = js.evalPath(newClass, null, js.createClass(), 1);
		} else {
			return;
		}

		if(superClass) {
			var inheritance = function() {};
			inheritance.prototype = superClass.prototype;

			newClass.prototype = new inheritance();
			newClass.superClass = superClass.prototype;
		}
		for(var i = 0; i < multiple.length; i++) {
			Object.extend(newClass.prototype, multiple[i].prototype);
		}
		newClass.mixins = multiple;

		Object.extend(newClass.prototype, props || {});

		newClass.prototype.constructor = newClass;
	};
	js.define = js.extend;

	js.createClass = function() {
	    return function() {
			var _this = arguments.callee.prototype;
			_this.init.apply(this, arguments);
			for(var i = 0, mixins = _this.constructor.mixins, length = mixins.length; i < length; i++){
				mixins[i].init.apply(this);
			}
	    };
	};

	js.hasOwnProperty = function(obj, prop) {
	        if (Object.prototype.hasOwnProperty) {
	            return obj.hasOwnProperty(prop);
	        }

	        return typeof obj[prop] != 'undefined' &&
	                obj.constructor.prototype[prop] !== obj[prop];
	};

	js.dump = function(text){};
	js.error = function(text){};

	restorejs = function(obj) {
		return function() {
			window.js = obj;
		};
	}(js);
	return js;
}

var js = init();

$(document).ready(function(){
	var js_block_id = '.js-close-alert';
	var alertBlock = $(js_block_id);
	alertBlock.each(function(){
		var name = $(this).data('name');
		if (localStorage.getItem(name)) {
			$(js_block_id+'[data-name="'+name+'"]').addClass('hidden');
		} else {
			$(js_block_id+'[data-name="'+name+'"]').removeClass('hidden');
		}
	});
	alertBlock.on('close.bs.alert', function () {
		var name = $(this).data('name');
		localStorage.setItem(name, true);
		$(js_block_id+'[data-name="'+name+'"]').addClass('hidden');
	});

	// header placeholder
	var
		_ia_ = $.cookie('_ia_'),
		$headerPlaceholderWrapper = $('.header-item-center');
	if(_ia_ == '1') {
		$headerPlaceholderWrapper.addClass('header-placeholder');
	}

	// баннер на главной
	var
		$elementToScreen = $('.js-element-to-screen'),
		imageWithoutVideo = $elementToScreen.attr('data-image-without-video') ? $elementToScreen.attr('data-image-without-video') : '',
		$parallax = $('.parallax-layer');
	$elementToScreen.elementToScreen();

	if(device.desktop() && $parallax.length) {
		$parallax.parallax({
			mouseport: $(".banner-main-page")
		});
		$(window).on('resize', function() {
			$parallax.parallax({
				mouseport: $(".banner-main-page")
			});
		});
	}


	// видео на главной
/*
	var video = document.getElementById('video');
	if(
		device.desktop()
		&& (video && typeof video.load === 'function')
	) {
		$elementToScreen.css('background-position', '50% 100%');
		var
			$video = $('#video'),
			$mp4 = $('#video-mp4'),
			$webm = $('#video-webm'),
			httpStatic = null,
			videoPath = '/doc/i/';
			videoFileName = 'winter';
			typesVideo = ['mp4', 'webm'];

		if($video.length) {
			httpStatic = $video.attr('data-http-static');
			for(var i = 0; i < typesVideo.length; i++) {
				var
					$typeVideo = $('#video-' + typesVideo[i]);
				if($typeVideo.length) {
					$typeVideo.attr('src', httpStatic + videoPath + videoFileName + '.' + typesVideo[i]);
				}
			}
			video.load();
			video.play();
		}
	} else {
		$elementToScreen.css('background-image', "url('" + imageWithoutVideo + "'");
	}
*/
	var url = location.host.split('.');
	if (url.length>4) url.shift();
	url.shift();

	$('.span-replace').each(function(index,span){
		var link = '<a class="link author-name" rel="nofollow noopener" target="_blank" href="'+$(span).data('href')+'">'+$(span).text()+'</a>';
		$(span).before(link).remove();
	});

	// sticky-column set height
	var setStickyColumnWrapperHeight = function() {
		var stickyColumnWrapper = $('.js-sticky-column-wrapper');
		var stickyColumnWrapperHeight = 0;
		var stickyColumnHeight = $('.js-sticky-column').outerHeight(true);
		$('.objects-list').each(function() {
			stickyColumnWrapperHeight += $(this).outerHeight(true);
		});
		if (stickyColumnWrapperHeight < stickyColumnHeight){
			stickyColumnWrapperHeight = stickyColumnHeight;
		}
		stickyColumnWrapper.css("height", ""+(stickyColumnWrapperHeight  - 8)+"px");
	};
	// sticky-column
	var $stickyColumn = $('.js-sticky-column');
	if($stickyColumn.length && !device.mobile()) {
		$(document).on('wpc.ObjectList.render', function () {
			setStickyColumnWrapperHeight();
		});
		setStickyColumnWrapperHeight();
		var sticky_offset;

		var $stickyColumn = $('.js-sticky-column');
		$.each($stickyColumn, function(index, element) {
			var $this = $(element);
				sticky_offset = parseInt($this.attr('data-sticky-offset')),
				sticky_init_mobile = $this.attr('data-sticky_init-mobile'),
				$footer = $('#footer');
				footerTop = ($footer.length>0 ? $footer.offset().top : 0 ),
				windowHeight = Screen.getHeight();

				filterWrapper = $('#filter-wrapper');
			if(sticky_offset === undefined || isNaN(sticky_offset)) {
				sticky_offset = 0;
			}

			if(sticky_init_mobile != undefined) {
				$this.stick_in_parent({
					offset_top: sticky_offset,
				});
			} else {
				if((device.desktop() && Screen.getMediaQuery() !== 'xs') || device.ipad() || device.tablet()) {
					$this.stick_in_parent({
						offset_top: sticky_offset
					});
				}
			}

			$this
				.on("sticky_kit:stick", function(e) {
					if($this.hasClass('is_stuck')) {
						var $messages = $('.jsn-message-list-messages');

						if($messages.length) {
							$messages.css('float', 'right');
							$this
								.parent()
								.css('height', 0);
						}
					}
					// @operafix for *nix
					var
						thisWidth = $this.width(),
						maxWidth = isNaN(parseInt($this.attr('data-max-width'))) ? thisWidth : parseInt($this.attr('data-max-width'));
					$this.parent().css('width', maxWidth);
					if(Screen.getMediaQuery() !== 'xs') {
						$this
							.css('width', maxWidth);
					}
				})
				.on("sticky_kit:bottom", function(e) {
					if($this.parent().css('position') !== 'static') {
						$this.parent().css('position', 'static');
					}
				});


			$(window).on('resize', function() {
				if(Screen.getMediaQuery() === 'xs') {
					$this.trigger("sticky_kit:detach");
				} else {
					if(!$this.data('sticky_kit') && !$this.hasClass('sticky-disabled-init')) {
						$this.stick_in_parent({
							offset_top: sticky_offset
						});
					}
				}
			})
		});
	}

	$(document).on('click', '.js-sel-language', function(e) {
		e.preventDefault();
		var $this = $(e.target),
			languageId = $this.attr('data-lang-id');
			webpower.request('/api/rest/localisation/setLanguage/', {id: languageId, url: document.URL}, function(data){});
	});


	$(document).on('click', '.js-sel-language-mobile',function(e) {
		e.preventDefault();
		var $this = $(e.target),
			languageId = $this.parent().data('langId');
		webpower.request('/api/rest/localisation/setLanguage/', {id: languageId, url: document.URL}, function(data){});
	});

	$(document).on('click', '.js-sel-currency, .js-sel-currency-mobile',function(e) {
		e.preventDefault();
		var $this = $(e.target),
			currencyId = $this.data('currency-id');
		if (!$this.hasClass('active')) {
			wp.request('/api/json/currencies/setCurrency', {id: currencyId, return_url: document.URL.split('#')[0]});
		}
	});

	$('#back-to-search').on('click', function(e){
		e.preventDefault();
		history.back();
	});
	// выпадашки в шапке

	if(device.desktop()) {
		$(document).on('mouseenter', '.js-header-menu-trigger', function() {
			var $this = $(this);
				$menuInstance = $this.closest('.dd-menu-instance');

			$menuInstance.toggleClass('active');
		});

		$(document).on('mouseleave', '.js-header-menu-trigger', function(e) {
			var $target = $(e.target),
				$relatedTarget = $(e.relatedTarget),
				$menuInstance = $target.closest('.dd-menu-instance');

			if(!$relatedTarget.hasClass('dd-menu-content')) {
				$menuInstance.toggleClass('active');
			}
		});

		$(document).on('mouseleave', '.dd-menu-content', function(e) {
			var $this = $(this),
				$menuInstance = $this.closest('.dd-menu-instance'),
				$relatedTarget = $(e.relatedTarget);

			if(!$relatedTarget.hasClass('.js-header-menu-trigger')) {
				$menuInstance.toggleClass('active');
			}
		});
	} else if(device.tablet()) {

		$(document).on('click', '.js-header-menu-trigger-tablet', function(e) {
			e.preventDefault();
			var
				$this = $(this),
				$menuInstance = $this.closest('.dd-menu-instance'),
				$menuContent = $menuInstance.find('.dd-menu-content');

			if($menuContent.length) {
				if($menuInstance.hasClass('active')) {
					$menuInstance.toggleClass('active');
				} else {
					$('.dd-menu-instance').removeClass('active');
					$menuInstance.addClass('active');
				}
			} else {
				var
					link = $this.attr('href');
				if(typeof link !== 'undefined') {
					location.href = link;
				}
			}
		});

		$(document).on('click', function(e) {
			var $target = $(e.target);

			if(!$target.closest('.dd-menu-instance').length) {
				$('.dd-menu-instance').removeClass('active');
			}
		});

	} else if(device.mobile()) {
		$(document).on('click', '.js-header-menu-trigger-mobile', function(e) {
			$mainMenu = $('.js-mobile-header-menu-wrapper');
			$mainMenu.removeClass('active');
			e.preventDefault();
			var
				$this = $(this),
				$menuInstance = $this.closest('.dd-menu-instance'),
				$menuContent = $menuInstance.find('.dd-menu-content');

			if($menuContent.length) {
				if($menuInstance.hasClass('active')) {
					$menuInstance.toggleClass('active');
				} else {
					$('.dd-menu-instance').removeClass('active');
					$menuInstance.addClass('active');
				}
			} else {
				var
					link = $this.attr('href');
				if(typeof link !== 'undefined') {
					location.href = link;
				}
			}
		});

		$(document).on('click', function(e) {
			var $target = $(e.target);

			if(!$target.closest('.dd-menu-instance').length) {
				$('.dd-menu-instance').removeClass('active');
			}
		});
	}

	// показать ссылку в меню шапки если подсказки есть на странице
	if(window.is_hints) {
		$('.js-help-menu').removeClass('hidden');
	}

	// скрыть показать подсказки в шапке
	$('.js-trigger-hints').on('click', function(e) {
		e.preventDefault();
		var $this = $(this);

		if($this.hasClass('active')) {
			hideAllHints();
		} else {
			showAllHints();
		}

		$this.toggleClass('active');
	});

	// строка поиска в шапке
	var searchValue = $('#searchform .typeahead').val(),
		$searchHeader = $('#searchform-header .typeahead');

	if(searchValue && $searchHeader.length) {
		$searchHeader.val(searchValue);
	}

	$('.js-header-mobile-button').on('click', function() {
		var $mobileMenu = $('.js-mobile-header-menu-wrapper');
		if($mobileMenu.length) {
			$mobileMenu.toggleClass('active');
		}
	});

	$('#navbar').on('show.bs.collapse', function() {
		$('.header .navbar .container-fluid').addClass('active');
	});

	$('#navbar').on('hide.bs.collapse', function() {
		$('.header .navbar .container-fluid').removeClass('active');
	});

	$('#currency-list, #sel-language').on('show.bs.collapse', function(e) {
		e.stopPropagation();
	});

	$('#currency-list, #sel-language').on('hide.bs.collapse', function(e) {
		e.stopPropagation();
	});

	if (typeof($.cookie('hwc')) == 'undefined' && $.cookie('hwc') != 'true') $('.header-warning').slideDown('slow');
	initHeaderWarningClose = function(){
		$.cookie('hwc', true, {expires: 60, path: '/', domain:'.'+TOOLS.domain, raw:true});
		$('.header-warning').slideUp('slow');
		return false;
	};

	// how wokrs
	$('.js-open-how-works').on('click', function(e) {
		e.preventDefault();
		e.stopPropagation();

		var $this = $(this),
			$howWorksCnt = $('.how-works');

		if ($howWorksCnt.hasClass('active')) {
			scrollToElement('.how-works');
		} else {
			$howWorksCnt.slideDown('fast').addClass('active');
		}
	});

	$('.js-close-how-works').on('click', function() {
		var $this = $(this),
			$howWorksCnt = $('.how-works');

		$howWorksCnt.slideUp('fast').removeClass('active');

	});

	$.each($('[data-toggle="popover"]'), function(){
		$(this).popover();
	});

	function receiveMessage(event) {
		if(event.data == 'sendMeInfo'){
			//var urlParams = new URLSearchParams(window.top.location.search);
			var source = TOOLS.getGet('utm_source');
			var medium = TOOLS.getGet('utm_medium');
			var campaign = TOOLS.getGet('utm_campaign');
			var partner = TOOLS.getGet('admitad_uid');
			var gclid = TOOLS.getGet('gclid');
			var domain = TOOLS.domain;
			var referrer = document.referrer;
			var objects = $('#objects-list').length;
			var filtered = $('#objects-list').data('filtered');
			var object = $('#object-description').length;
			var href = document.location.href;
			var params = {};
			params['type'] = 'sourceTraffic';
			params['source'] = source;
			params['medium']  = medium;
			params['campaign'] = campaign;
			params['partner'] = partner;
			params['domain'] = domain;
			params['referrer'] = referrer;
			params['objects'] = objects;
			params['object'] = object;
			params['filtered'] = filtered;
			params['gclid'] = gclid;
			params['href'] = href;
			var iframe = document.getElementById("LS-data").contentWindow;
			iframe.postMessage(params,'*');
		}
	}
	// Прослушка iframe для отправки данных по источникам трафика
	window.addEventListener("message", receiveMessage, false);

	function bannersForMobileApps(response) {
		var
			androidOpts = {
				'title': T.core.project_ru,
				'force': 'android',
				'button': 'Смотреть',
				'price': 'БЕСПЛАТНО',
				'inGooglePlay': 'в Google Play'
			},
			appId = 973070068;
		if(!!response) {
			if(!response.user_is_owner) {
				$("meta[name='apple-itunes-app']").attr('content','app-id=' + appId + ', app-argument=' + window.location.toString().replace(window.location.hash, ''));
				if(device.android())
					$.smartbanner(androidOpts);
			} else {
				$("meta[name='apple-itunes-app']").remove();
				if (device.android())
					$.smartbanner('hide');
			}
		}
	}

	function showMessagesFromAdministration(response) {
		if (!response.user) return;
		$('.js-messages-from-administration').removeClass('hidden');
	}

	function userDataCallback(response) {
		if($('#auth-template').length) {
			var header = tmpl('auth-template', response);
			$('.js-header-container').html(header).removeClass('header-user-cnt');
			$('.header-item-center').removeClass('header-placeholder');
		}
		if($('#mobile-menu-template').length) {
			mobileHeaderMenu = tmpl('mobile-menu-template', response);
			$('.js-mobile-header-menu-content').html(mobileHeaderMenu);
		}
		if($('#mobile-menu-user-template').length) {
			mobileHeaderUser = tmpl('mobile-menu-user-template', response);
			$('.js-mobile-user-wrapper').html(mobileHeaderUser);
		}
		// меню свободных заявок
		if($('#selection-house').length) {
			var
				selectionMenu = tmpl('selection-house', response),
				$selectionWrapper = $('.js-selection-wrapper');
			if($selectionWrapper.length) {
				$selectionWrapper.html(selectionMenu);

				$('.js-request-accommodation').unbind('click').on('click', function(e) {
					var hasLocation = !!response.location_w;
					if (!hasLocation) {
						e.preventDefault();
						return initRequestAccomodation(response);
					}
				});
			}
		}

		if (!!response.is_auth){
			var stat_data = {
				url: document.URL
			};

			webpower.request(
				'/api/json/users/getUserData/',
				{
					stat_data: stat_data,
					location_id: response.locationId,
					location_type: response.locationType
				},
				{
					success: initUserCounters,
					actions: enoughContactsRequired,
					data: initFavorites,
				}
			);
			$('.js-logout').click(function(){
				WP.push.setTokenSentToServer(false);
			});
		}
	}

	function initRequestAccomodation(response){
		var hasLocation = !!response.location_w;
		if (!hasLocation) {
			wp.modal({
				size: 2,
				closeX: true,
				onclose: function() {
					$('.js-search-input').focus();
				},
				box: {
					header: {
						content: T.core.modal_select_city || ''
					},
					body: {
						content: T.core.text_select_city_for_request_accommodation
					},
					footer: {
					},
					buttons: [{
						className: 'btn-primary',
						content: T.core.word_ok,
						closeModal: true
					}]
				}
			});
		}
	}

	function getValueResponse(response, ar){
		var result = response;
		for (var i in ar){
			if (typeof result[ar[i]] != 'undefined')
				result = result[ar[i]];
			else {
				result = null;
				break;
			}
		}
		return result;
	}

	function initUserCounters(response){
		if (!response) { return; }

		// Вызов событий Google tagManager (tagManagerDataLayer.js)
		TMDL.initUserData(response);

		$(document).trigger( "online-chat", [ response ]);

		//-- меняем аватарку
		if (typeof response.user != 'undefined' && typeof response.user.avatar != 'undefined'){
			$('.jsn-user-avatar').prop('src', response.user.avatar);
		}

		//-- подставляем текстовые значения в ячейки
		$('#header [data-load-num]').each(function(){
			var value = $(this).data('load-num');
			var ar = value.split('.');
			var response_value = getValueResponse(response, ar);
			if (response_value != null)
				$(this).html(response_value);
		});

		//-- подставляем текстовые значения в ячейки
		$('#header [data-load-bool]').each(function(){
			var value = $(this).data('load-bool');
			var ar = value.split('.');
			var response_value = getValueResponse(response, ar);
			if (response_value){
				$(this).hide().removeClass('hidden').fadeIn(500);
			}
			else {
				$(this).fadeOut(300);//.addClass('hidden');
			}
		});

		//-- показываем выпадашку с новыми сообщениями, если есть
		if($('#new-messages-orders-menu-template').length) {
			var text = tmpl('new-messages-orders-menu-template', response);
			$('.jsn-new-messages-template').html(text);
		}
		//-- показываем выпадашку с неоплачеными счетами, если есть
		if ($('#invoices-menu-template').length){
			var text = tmpl('invoices-menu-template', response);
			$('.jsn-invoices-menu-template').html(text);
		}
		//-- показываем меню с избранными, если есть
		if ($('#favorites-menu-template').length && response.objects.favorites>0){
			var text = tmpl('favorites-menu-template', response);
			$('.jsn-favorites-menu-template').html(text).removeClass('hidden');
		}

		var
			modalNewOrders = typeof response.new_orders !== 'undefined' && response.new_orders && !/cabinet\/notices/.test(location.href);
		bannersForMobileApps(response);
		showMessagesFromAdministration(response);

		//-- если есть непрочитанные сообщения от администрации, то активируем бедж с к-вом
		var $jsn_nma = $('.jsn-notices-cnt-new-messages-admin'),
			$jsn_nmal = $('.jsn-noticer-new-admin-link');
		$jsn_nmal.attr('href', '/cabinet/notices?filter[tp]=admin');
		if (typeof response.messages != 'undefined' && response.messages.modules.messages.new>0){
			$jsn_nma.text(response.messages.modules.messages.new);
			$jsn_nma.parent().hide().removeClass('hidden').fadeIn(500);
			if (response.messages.modules.messages.new==1){
				$jsn_nmal.attr('href', response.messages.modules.messages.list[0].url);
			}
		}
		else {
			$jsn_nma.parent().addClass('hidden');
		}


		// флаг для показа модалки с запросом почты для арендодателей - эта модалка приоритетней чем модалка с бронями
		var modalRequestEmail = typeof response.email_modal !== 'undefined';
		if(modalRequestEmail!==false && !$('.js-modal-succes-booking').length && (!TOOLS.getGet('order_code'))==false && ($.cookie('email-modal')!='true')) {
			js.include('modal_user_email');
			// если есть неподтвержденная почта - указать ее в init:  modalUserEmailApp.init('mail@mail.com');
			modalUserEmailApp.init(response.email_modal);
		}

		if(modalNewOrders && !$('.js-modal-succes-booking').length) {
			var OrdersListTitle = (response.new_orders>1) ? 'Гости ждут вашего ответа!' : 'Гость ждёт вашего ответа!';
			var $modal = wp.modal({
				size: 2,
				loader: true,
				closeX: true,
				onbeforeopen: function(){
					webpower.request('/api/html/orders/getNewOrdersList/', {}, function(html){
						$modal.box.body.html('<h3 class="text-center no-mr-top hidden-md hidden-lg">'+OrdersListTitle+'</h3>'+html);
					});
				},
				box: {
					header: {
						content: '<span class="hidden-xs hidden-sm">'+OrdersListTitle+'</span>',
					},
					body: {
						content: ''
					}
				}
			});
		}


		if (!device.mobile() && typeof response.extension != 'undefined'){
			wp.createNS('extension');
			wp.extension = response.extension;
			try {
				js.include(wp.extension.src);
			} catch (err) {
			}
		}

		if (typeof response.user_review_block!='undefined' && response.user_review_block){
			$('div.jsn-comments-list').prepend(response.user_review_block);
			var t_h3 = $('#object-comments h3:first').text();
			var myArr = /\d+/.exec(t_h3);
			if (myArr != null){
				var cnt_r = parseInt(myArr[0], 10)+1;
				if (cnt_r>1)
					$('#object-comments h3:first').text(t_h3.replace(/\d+/, cnt_r));
				else
					$('#object-comments h3:first').text('1 отзыв от гостей');
			}
		}

		//-- показываем меню с подбором по свободным заявкам, если есть
		if ($('#selection-house-menu-template').length){
			var text = tmpl('selection-house-menu-template', response);
			$('.jsn-selection-house-menu-template').html(text).removeClass('hidden');
		}

		// меню свободных заявок
		var	$selectionWrapper = $('.js-selection-wrapper');
		if($selectionWrapper.length) {
			var hasLocation = !!response.location_w;
			$('.js-request-accommodation').unbind('click').on('click', function(e) {
				if (hasLocation) {
					var $hots = $('.js-hot-order');
					var $hotList = $('<ol>');//.css('list-style','none');
					$hots.find('td:first a').clone().each(function(index, item){
						$('<li/>').append(item).appendTo($hotList).css({'margin':'10px 0'});
					});

					var limit = response.limitHotOrders || 3;
					if ($hots.length >= limit) { //
						wp.modal({
							size: 2,
							closeX: true,
							onclose: function() {
								$('.js-search-input').focus();
							},
							box: {
								header: {
									content: T.core.modal_tourist_hot_orders_limit || ''
								},
								body: {
									content: $('<p>').append(T.core.modal_tourist_hot_orders_limit_text).html() + $('<div>').append($hotList).html()
								},
								footer: {
								},
								buttons: [{
									className: 'btn-primary',
									content: T.core.authmsg_btn_ok2,
									closeModal: true
								}]
							}
						});
						return false;
					}
				}
				else {
					e.preventDefault();
					return initRequestAccomodation(response);
				}
			});
		}

		wp.searchAppEnabled = !!response.searchAppEnabled;
		WP.user_id = (!!response.user&&response.user.id?response.user.id:null) || null;
		WP.userHasWebPushToken = response.user_has_web_push_token;

		if ( WP.user_id && typeof response === 'object' && (response.length === undefined)) {
			$('.js-header').addClass('auth');
			$('.js-header').removeClass('no-auth');
			if(response.user_is_owner) {
				$('.js-header').addClass('auth-owner');
			} else if(response.user_is_client) {
				$('.js-header').addClass('auth-client');
			}

			WP.tabs.init();

			$(document).trigger('user_load_data', response);
		}

		if(WP.user_id) {
			$(document).trigger('user_authenticated');
		}

		if (typeof response.hint_set_mode !== 'undefined' && !!response.hint_set_mode) {
			webpower.request('/api/html/preferences/showHintsPanel/', {}, function (response) {
				$('body').append(response);
			});
		}
		initFavorites(response);

		//-- если есть бонус, но чел неавторизован, вызываем окно авторизации
		var is_bonus_str = (typeof TOOLS.getGet('bonus')=='string' && TOOLS.getGet('bonus'));
		if (is_bonus_str && WP.user_id===null) {
			webpower.openAuthModal();
		} else if (WP.user_id>0 && is_bonus_str && $modal_bonus===null ) {
			options = {
				size: 1,
				loader: true,
				closeX: true,
				onopen: function(){
					webpower.request('/api/json/payments/testPayedBonus/', {serviceName:TOOLS.getGet('bonus')}, function(data){
						if (!data.bonus){
							$modal_bonus.close();
							return false;
						}

						$modal_bonus.box.header.find('h4.modal-title').text(data.bonus_title);
						$modal_bonus.box.body.html('<p>'+data.bonus_text+'</p>');
						if (data.bonus==1){
							$(document).trigger('refreshUserData');
						}
						$('.jsn-btn-ok').removeClass('hidden');
					});
				},
				box: {
					header: {
						content: T.core.bonus_test_title
					},
					body: {
						content: ''
					},
					footer: {
						className: 'text-center'
					},
					buttons: [{
						content: 'Понятно',
						className: 'btn-primary hidden jsn-btn-ok',
						closeModal: true
					}]
				}
			};
			$modal_bonus = wp.modal(options);
		}

	}

	function enoughContactsRequired(actions){

		actions &&
		actions.enough_contacts_required &&
		$(document).trigger('enoughContactsAfterSocialLogin');
	}
	window.enoughContactsRequired = enoughContactsRequired;

	function initFavorites( data ) {

		if(data.objects && data.objects.favorites_ids.length) {
			favoriteIndicator.addFavorites(data.objects.favorites_ids);
			favoriteIndicator.update();
		}

		var elm = $('#jsn-indicator-notauth-user');
		if ( elm.length ) {
			elm[ WP.user_id? 'hide':'show' ]();
		}
	}

	/**
	 * Вешает обработчик открытия окна авторизации на указанный элемент
	 *
	 * @param mixed selector jQuery selector
	 * @param string type "login", "registration" or "forgot"
	 * @param function callback Success callback function after auth
	 */
	webpower.handlerAuthModalWithType = function( selector, type, successCallback, closeCallback ) {

		successCallback = successCallback||function(){};
		closeCallback = closeCallback||function(){};

		var _modal = null
			, _open = function() {

				var params = {
						size: 1
						, className: 'modal-login'
						, textCenter: false
						, closeX: true
						, box: {
							body: {
								content: ($('#auth-form').length? tmpl('auth-form', {}) : '')
								, className: 'log-modal'
							}
						}
					, onclose: function() {
						_modal = null;
						closeCallback()
					}
				};
				_modal = WP.modal( params );
				new window.webpower.authHandler(
								'authBlock',
								function(){
										if ( _modal ) {
											_modal.close();
										}
										successCallback();
									},
								type
							);
				return false;
			};
		$('body').on('click', selector, _open);
	};

	var $modal_bonus = null;
	/**
	 * Форма авторизации/регистрации/изменения пароля
	 */
	initUserData = function(event, func_param){
		if ($('#auth-template').length) {
			var
				$location = $('#header'),
				locationId = $location.data('location-id'),
				locationType = $location.data('location-type'),
				location_w = $('.js-search-input').val()
			;
			if ( $.cookie('_ia_')!=null && /^1\-/.test($.cookie('_ia_')) ){
				var c_ia = $.cookie('_ia_').replace(/^\d\-/, '');
				c_ia = JSON.parse(TOOLS.base64_decode(c_ia));

				var obj_data = {is_auth:1, objects:{favorites:[], favorites_cities_groups:[], favorites_ids:[]}, user_is_owner:c_ia.objs, user_is_client:(!c_ia.objs), complete_publication:false, name:c_ia.name, gender:c_ia.g, locationId:locationId, locationType:locationType, location_w: location_w};
				userDataCallback(obj_data);
			}
			else {
				userDataCallback({location_w: location_w});
				initFavorites({});
			}

			var _authTrigger = '.jsn-logInModal';

			webpower.handlerAuthModalWithType(
				_authTrigger,
				'login',
				function() {
					if ( $('#jsn-indicator-of-favorites-page').length) { window.location.reload(1); }
					initUserData(event, func_param);
					return null;
				},
				function() {
					if (!!func_param && !!func_param.reload){
						window.location.reload(true);
					}
				}
			);

			webpower.openAuthModal = function(){
				$(_authTrigger).trigger('click');
			};
		}
	};

	if ( !window.DO_NOT_CALL_INIT_USER_DATA ) {
		initUserData();
	}
	//-- слушаем и отлавливаем событие по триггеру на обновление шапки пользователя
	$(document).on('refreshUserData', initUserData);
	//-- слушаем и отлавливаем событие по триггеру на обновление блока с формой подачи заявки
	$(document).on('user_authenticated', function(){

		if ($('#orderform').length){
			//@todo: нужно только компонент перезагружать
			window.location.reload(true);
		}
	});



	/**
	 * Функция отправки формы сочетанием клавиш Ctrl+Enter
	 * @param Event event События нажатия на клавишу
	 * @param string formElem DOM-элемент формы, который нужно отправить
	 */
	ctrlEnter = function(event, formElem) {
		if((event.ctrlKey) && ((event.keyCode == 0xA)||(event.keyCode == 0xD))){
			formElem.submit();
        }
    };
	$('.jsn-ctrlenter').on('keypress',function(e){
		ctrlEnter(e, $(this).parents('form'));
	});


	// Collapse block for article
	var $collapseBlocks = $('.js-collapse-block');
	if($collapseBlocks.length) {
		$collapseBlocks.on('click', function() {
			var $this = $(this),
				$parent = $this.closest('.collapse-block-cnt'),
				$bodyCollapse = $parent.find('.collapse-block-body');
			$bodyCollapse.slideToggle(300);
		});
	}

	// select's
	// $('.js-select').selectWP();

	// Якорные ссылки для статей
	var anchorsLinks = $('.content-articles a[href^="#"], a.js-anchor[href^="#"]'),
		anchorsArray = [],
		linksArray = [];
	$.each(anchorsLinks, function(key, value) {
		var target = $(value).attr('href');
		if($(target).length) {
			anchorsArray.push($(target));
			linksArray.push($(value));
			var anchorsText = $(anchorsLinks[key]).attr('href'),
				hash = location.hash,
				urlPage = document.URL.replace(hash, ''),
				urlPageArray = urlPage.split('/'),
				urlPage = '';

			urlPage = urlPageArray.join('/');

			$(anchorsLinks[key]).attr('href', urlPage + anchorsText);

		}
	});

	function initNumberMask() {
		// number mask for input
		var $numberMaskObjects = $('.js-number-mask');
		if($numberMaskObjects.length) {
			var decimalMarkDefault = '.',
				afterPointDefault = 2,
				typeDefault = '',
				beforePoint;

			$.each($numberMaskObjects, function(index, value) {
				var $this = $(value),
					type = $this.attr('number-mask-type'),
					afterPoint = $this.attr('number-mask-afterpoint'),
					decimalMark = $this.attr('number-mask-decimalmark'),
					valueInputDefault = '';

				switch (type) {
					case undefined:
						type = typeDefault;
						$this.numberMask({
							'defaultValueInput': valueInputDefault
						});
						break
					case 'float':
						type = 'float';
						if(afterPoint === undefined || isNaN(afterPoint)) {
							afterPoint = afterPointDefault;
						}
						if(decimalMark === undefined) {
							decimalMark = decimalMarkDefault;
						}
						$this.numberMask({
							'type': type,
							'afterPoint': afterPoint,
							'decimalMark': decimalMark,
							'defaultValueInput': valueInputDefault
						});
						break
					default:
						type = typeDefault;
						$this.numberMask({
							'defaultValueInput': valueInputDefault
						});
						break
				}
			});
		}
	}

	initNumberMask();

	$(window).on('init-number-mask', function() {
		initNumberMask();
	});

	$(document).on('portionLoaded', function() {
		$('[data-toggle="popover"]').popover();
	});

	$('.js-abuse').click(function(){
		var form = '<form class="form-result-phone jsn-form-action-phone" method="get">';
		form += '<div class="jsn-more-reason">';
		form += '<div class="form-group"><textarea placeholder="' + T.core.describe_problem + '" class="form-control" id="js-abuse-data" name="problem-phone" rows="5"></textarea></div>';
		if (!!!wp.user_id) {
			form += '<div class="form-group"><input type="text" name="contact" placeholder="' + T.core.auth_phone_or_email + '" class="form-control" id="js-abuse-contact-phone"></div>';
		}
		form += '</div></form>';

		var abuseModal = wp.modal({
			size: 2,
			closeX: true,
			box: {
				header: {
					content: T.core.complaint,
				},
				body: {
					content: form,
				},
				footer: {
					className: 'text-center'
				},
				buttons: [
				{
					content: T.core.word_cancel,
					className: 'btn btn-default',
					closeModal: true
				},
				{
					content: T.core.send_complaint,
					className: 'btn btn-primary jsn-stat-click-abuse',
					onclick: function() {

						if (!$('#js-abuse-data').val()) {
							$('#js-abuse-data').attr('placeholder', T.core.text_required).parent().addClass('has-error');
							return false;
						}

						var contact  = $('#js-abuse-contact-phone');

						if (contact.length ) {

							var resultValidateEmail = TOOLS.validateEmail(contact.val());
							var resultValidatePhone = TOOLS.validatePhone(contact.val());

							if ( !contact.val() || (!resultValidateEmail.success && !resultValidatePhone.success ) ) {
								contact.attr('placeholder', T.core.text_required).parent().addClass('has-error');

								return false;
							}
						}

						var data = {info:{}};
						data.activity_group = 'objectAbuse';
						data.info.type = 'objectAbuse';
						data.info.text = {};
						data.info.text.contact = contact.val();
						data.info.text.text = $('#js-abuse-data').val();
						data.info.user_id  = wp.user_id;
						$objectData = $.parseJSON( OBJECT_MAP_DATA )||{}

						data.info.object_id  = ($objectData ? $objectData.objects[0].id : null);
						data.info.object_url  = ($objectData ? $objectData.objects[0].url : null);

						webpower.request('/api/json/feedback/sendAbuseEmail', {params: data.info},function(data){});

						$('.modal-title', abuseModal.box.header).text(T.core.complaint_sent);
						abuseModal.box.buttons[0].text(T.core.word_close);
						abuseModal.box.buttons[1].remove();
						abuseModal.box.body.html('<p class="thanks text-center" style="font-size:22px; padding:10px 0;">' + T.core.thank_you + '</p>');
					}
				}
				]
			}
		});
	});

	$(document).on('click', '.js-scroll-to, .js-scroll-wrapper', function(e) {
		e.preventDefault();
		var
			$this = $(this),
			selector = $this.attr('data-scroll-to-selector'),
			offset = $this.attr('data-scroll-to-offset'),
			time = $this.attr('data-scroll-to-time');
		Screen.ScrollTo(selector, offset, time);
	});

	$(document).on('click', '.js-more-currency-handler', function(e) {
		e.preventDefault()

		var
			$this = $(this),
			SELECTOR_CURRENCY_ITEMS = '.js-more-currency';

		$(SELECTOR_CURRENCY_ITEMS).show();
		$this.hide();
	})
	$(document).on('click', '.js-header-search-handler', function(e) {
		e.preventDefault();
		$('#header').addClass('open-search');
	});

	// Hide android/iphone links
  	if ($("html").hasClass("android")){
  		$( "#iphone-app-logo,#iphone-app-picture" ).addClass( "display-none" );
  	}
  	if ($("html").hasClass("ios")){
  		$( "#android-app-logo,#android-app-picture" ).addClass( "display-none" );
  	}
});

// *** Синхронизация авторизации ***

var ALREADY_IDENTIFIED_CALLED = false;
/**
 * Идентификация пользователя
 * @returns
 */
function includeIdentity( list ) {

	if ( !list.length || ALREADY_IDENTIFIED_CALLED ) return;
	ALREADY_IDENTIFIED_CALLED = true;

	var l = list.length;
	while(l--) {
		var url = location.protocol + '//' + list[l] + '/identity.html';
		setTimeout(function(){

			TOOLS.includeJs(
					url,
					null,
					{crossorigin: "use-credentials"}
				);

		}, 100);
	}
}

var ALREADY_IDENTIFIED = false;
/**
 * Идентификация пользователя
 *
 * @param string code
 * @returns
 */
function setImplicitIdentity(code) {

	if ( !!!code || ALREADY_IDENTIFIED ) return;
	ALREADY_IDENTIFIED = true;

	wp.request('/api/json/applications/identity', {code: code}, function(){

		if ( location.pathname.indexOf('/login.html')>-1 ) {
			location.reload(1);
		}
		$(document).trigger('refreshUserData');
	});
}

// *** Синхронизация сессии ***

var ALREADY_SYNCHRONIZED_CALLED = false;
/**
 * Идентификация пользователя
 * @returns
 */
function includeSession( domain ) {

	if ( !domain || ALREADY_SYNCHRONIZED_CALLED ) return;
	ALREADY_SYNCHRONIZED_CALLED = true;

	setTimeout(function(){

		TOOLS.includeJs(
				location.protocol + '//' + domain + '/session.html',
				null,
				{crossorigin: "use-credentials"}
			);

	}, 100);
}


var ALREADY_SYNCHRONIZED = false;
/**
 * Синхронизация сессии
 *
 * @param string code
 * @returns
 */
function setImplicitSession(code) {

	if ( !!!code || ALREADY_SYNCHRONIZED ) return;
	ALREADY_SYNCHRONIZED = true;

	wp.request('/api/json/applications/session', {code: code}, function(){

		$(document).trigger('refreshUserData');
	});
}


/**
 * MODULE: default FILE: json.js
 */
/*
Copyright (c) 2002 JSON.org

Permission is hereby granted, free of charge, to any person obtaining a copy 
of this software and associated documentation files (the "Software"), to deal 
in the Software without restriction, including without limitation the rights 
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell 
copies of the Software, and to permit persons to whom the Software is 
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all 
copies or substantial portions of the Software.

The Software shall be used for Good, not Evil.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE 
SOFTWARE.
*/

toJsonString = function(arg) {
    return toJsonStringArray(arg).join('');
}

toJsonStringArray = function(arg, out) {
    out = out || new Array();
    var u; // undefined

    switch (typeof arg) {
    case 'object':
        if (arg) {
            if (arg.constructor == Array) {
                out.push('[');
                for (var i = 0; i < arg.length; ++i) {
                    if (i > 0)
                        out.push(',\n');
                    toJsonStringArray(arg[i], out);
                }
                out.push(']');
                return out;
            } else if (typeof arg.toString != 'undefined') {
                out.push('{');
                var first = true;
                for (var i in arg) {
                    var curr = out.length; // Record position to allow undo when arg[i] is undefined.
                    if (!first)
                        out.push(',\n');
                    toJsonStringArray(i, out);
                    out.push(':');                    
                    toJsonStringArray(arg[i], out);
                    if (out[out.length - 1] == u)
                        out.splice(curr, out.length - curr);
                    else
                        first = false;
                }
                out.push('}');
                return out;
            }
            return out;
        }
        out.push('null');
        return out;
    case 'unknown':
    case 'undefined':
    case 'function':
        out.push(u);
        return out;
    case 'string':
        out.push('"')
        out.push(arg.replace(/(["\\])/g, '\\$1').replace(/\r/g, '').replace(/\n/g, '\\n'));
        out.push('"');
        return out;
    default:
        out.push(String(arg));
        return out;
    }
}

/**
 * MODULE: default FILE: uploader/templates/tmpl.min.js
 */
!function(a){"use strict";var b=function(a,c){var d=/[^\w\-\.:]/.test(a)?new Function(b.arg+",tmpl","var _e=tmpl.encode"+b.helper+",_s='"+a.replace(b.regexp,b.func)+"';return _s;"):b.cache[a]=b.cache[a]||b(b.load(a));return c?d(c,b):function(a){return d(a,b)}};b.cache={},b.load=function(a){return document.getElementById(a).innerHTML},b.regexp=/([\s'\\])(?!(?:[^{]|\{(?!%))*%\})|(?:\{%(=|#)([\s\S]+?)%\})|(\{%)|(%\})/g,b.func=function(a,b,c,d,e,f){return b?{"\n":"\\n","\r":"\\r","	":"\\t"," ":" "}[b]||"\\"+b:c?"="===c?"'+_e("+d+")+'":"'+("+d+"==null?'':"+d+")+'":e?"';":f?"_s+='":void 0},b.encReg=/[<>&"'\x00]/g,b.encMap={"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;","'":"&#39;"},b.encode=function(a){return(null==a?"":""+a).replace(b.encReg,function(a){return b.encMap[a]||""})},b.arg="o",b.helper=",print=function(s,e){_s+=e?(s==null?'':s):_e(s);},include=function(s,d){_s+=tmpl(s,d);}","function"==typeof define&&define.amd?define(function(){return b}):a.tmpl=b}(this);

/**
 * MODULE: default FILE: wp.modal.js
 */
/**
 * Bootstrap Modal Popup
 *
 * @use bootstrap.js
 * @use jQuery
 * @author ml
 */

window.WP.modal = function(options) {
    var 
        bodyScrollTop = 0;

    var defaultOptions = {
            size: 1 // размер модального окна [0,1,2,3]
                ,
            className: '' // название класса модального окна (дополнительно)
                ,
            attr: '' // дополнительные атрибуты модального окна
                ,
            textCenter: false // центрирование текста модального окна
                ,
            loader: false // показывать значок загрузки
                ,
            closeX: false // крестик "закрыть"
                ,
            bootstrapOptions: {},
            onbeforeopen: null //function(){}
                ,
            onopen: null //function(){}
                ,
            onbeforeclose: null //function(){}
                ,
            onclose: null //function(){},
                ,
            closeTimeout: null // таймаут автоматического закрытия окна (мс)
                ,
            box: { // string, function, object - содержимое окна
                header: null //{ content: '', className: '', attr: null, hattr: null} // блок заголовка
                    ,
                body: null //{ content: '', className: '', attr: null} // блок
                    ,
                footer: null //{ content: '', bottomContent: '', className: '', attr: null} // нижняя часть окна
                    ,
                buttons: [ // кнопки
                    //{ content: '', className: '', attr: null, closeModal: null, onclick: function(){} }
                ]
            },
            id: 'BootstrapModalWindow'
        },
        templates = {
            buttons: '<button type="button" class="btn {{className}}" {{attr}}>{{content}}</button>',
            closer: '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>',
            loader: '<div class="modal-loader"></div>',
            footer: '<div class="modal-footer {{className}}" {{attr}}>{{content}}{{bottomContent}}</div>',
            body: '<div class="modal-body {{className}}" {{attr}}>{{content}}</div>',
            header: '<div class="modal-header {{className}}" {{attr}}>{{closeX}}<h4 class="modal-title" {{h4attr}}>{{content}}</h4></div>',
            container: '<div id="{{id}}" class="modal fade {{className}}" tabindex="-1" role="dialog" aria-hidden="true" {{attr}}><div class="modal-dialog {{size}}"><div class="modal-content {{textCenter}}">{{content}}</div></div></div>'
        },
        sizes = { 0: '', 1: 'modal-sm', 2: 'modal-md', 3: 'modal-lg' },
        elms = {},
        box = (function() { var _ = {}; for (var k in templates) { _[k] = ''; }; return _; })(),
        _render = function(obj, template) {
            var re;
            for (var k in obj) {
                re = new RegExp("{{" + k + "}}", "g");
                template = template.replace(re, obj[k] || '');
                re = null;
            }
            return template.replace(/\{\{([0-9A-z_]*)\}\}/g, '');
        },
        _extend = function(def, args) {
            var name, out = {};
            for (name in def) out[name] = def[name];
            for (name in args) out[name] = args[name];
            return out;
        },
        _oattr = function(attr) {
            var out = [];
            for (var k in attr) { out.push(k + '="' + attr[k] + '"'); }
            return out.join(' ');
        },
        _attr = function(attr) {
            var out = '';
            if (attr === null) {} else if (typeof attr == 'object') {
                out = _oattr(attr);
            } else if (typeof attr == 'function') {
                out = attr();
                if (typeof out == 'object') {
                    out = _oattr(out);
                }
            } else {
                out = attr;
            }
            return out;
        },
        _getContent = function(content) {

            return ((typeof(content || '') == 'object') ?
                _render(
                    content.data,
                    content.template
                ) : (content || '')
            );
        },
        params = _extend(defaultOptions, options || {}),
        out;

    params.container = $('#' + params.id);

    // удаляем существующее окно
    if (params.container.length) {
        params.container.remove();
    }

    if (params.box && typeof params.box == 'object') {

        if (!!params.box.buttons && params.box.buttons.length) {

            for (var i = 0; i < params.box.buttons.length; i++) {
                box.buttons += _render({
                    attr: _attr(params.box.buttons[i].attr || '') +
                        ((params.box.buttons[i].closeModal || null) ? ' data-dismiss="modal"' : ''),
                    className: params.box.buttons[i].className || '',
                    content: _getContent(params.box.buttons[i].content || '')
                }, templates.buttons);
            }
        }

        if (!!params.box.footer) {
            box.footer += _render({
                attr: _attr(params.box.footer.attr || ''),
                className: params.box.footer.className || '',
                content: _getContent(params.box.footer.content || '') + (box.buttons || ''),
                bottomContent: params.box.footer.bottomContent || ''
            }, templates.footer);
        }

        if (!!params.box.body) {
            box.body += _render({
                attr: _attr(params.box.body.attr || ''),
                className: params.box.body.className || '',
                content: ((params.closeX && !params.box.header) ? templates.closer : '') +
                    _getContent(params.box.body.content || '') +
                    (params.loader ? templates.loader : '') +
                    ((!params.box.footer && box.buttons) ? box.buttons : '')
            }, templates.body);
        }

        if (!!params.box.header) {
            box.header += _render({
                attr: _attr(params.box.header.attr || ''),
                className: params.box.header.className || '',
                content: _getContent(params.box.header.content || ''),
                hattr: params.box.header.hattr || '',
                closeX: params.closeX ? templates.closer : ''
            }, templates.header);
        }

    } else if (typeof params.box == 'string') {

        box.body = (params.closeX ? templates.closer : '') +
            _getContent(params.box) +
            (params.loader ? templates.loader : '');

    } else if (typeof params.box == 'function') {

        box.body = (params.closeX ? templates.closer : '') + params.box();
    }

    params.container = $(
        _render({
            attr: _attr(params.attr || ''),
            className: params.className || '',
            content: box.header + box.body + box.footer,
            id: params.id,
            size: sizes[params.size || 0],
            textCenter: params.textCenter ? 'text-center' : 'text-left'
        }, templates.container)
    ).prependTo('body');

    if (box.header) elms.header = params.container.find('div.modal-header').eq(0);
    if (box.body) elms.body = params.container.find('div.modal-body').eq(0);
    if (box.footer) elms.footer = params.container.find('div.modal-footer').eq(0);


    out = {
        0: params.container // jquery объект модального окна
            ,
        close: function() { // функция закрытия окна

			this[0].modal('hide');
        },
        onclose: function(callback) {
		    if (typeof callback === 'function') {
		        params.container.on('hidden.bs.modal', callback);
	        }
		},
        box: { // jquery объект содержимого окна
            header: elms.header || null // заголовок
                ,
            body: elms.body || null //
                ,
            footer: elms.footer || null //
                ,
            buttons: elms.buttons || null
        },

        onclose: function(callback){
          if (typeof callback == 'function') {
            params.container.on('hidden.bs.modal', callback);
          }
        },

        destroyLoader: function() {
                if (elms.body) elms.body.find('.modal-loader').remove();
            }
            // приватные переменные и методы

        ,
        _closeTimeout: params.closeTimeout || null,
        _timeout: function() { // функцию можно вызвать ещё раз, для сброса таймаута

            if (!!this._clearTimeout) {
                clearTimeout(this._clearTimeout);
            } else {
                if (!!this._closeTimeout) {
                    var me = this;
                    this._clearTimeout = setTimeout(function() { me.close.call(me); }, this._closeTimeout);
                }
            }
            return this;
        }
    };

    if (box.buttons) {

        out.box.buttons = [];

        (!!params.box.footer ? elms.footer : elms.body).find('button')
            .each(function() {
                var t = $(this),
                    i = t.index();
                out.box.buttons[i] = t;
                if (typeof params.box.buttons[i].onclick == 'function') {
                    t.on('click', function(e) { params.box.buttons[i].onclick(out); });
                }
            });
    }

    if (!!params.onbeforeopen) {
        params.container.on('show.bs.modal', function(e) {
            params.onbeforeopen(out);
        });
    }
    if (!!params.onopen) {
        params.container.on('shown.bs.modal', function(e) { params.onopen(out); });
    }
    if (!!params.onbeforeclose) {
        params.container.on('hide.bs.modal', function(e) { params.onbeforeclose(out); });
    }
    if (!!params.onclose) {
        params.container.on('hidden.bs.modal', function(e) { params.onclose(out); });
    }

    if (params.bootstrapOptions !== null && typeof params.bootstrapOptions !== 'undefined') {
        params.container.modal(params.bootstrapOptions);
    } else {
        params.container.modal('show');
    }

    if(device.mobile()) {
        params.container.on('shown.bs.modal', function() {
                bodyScrollTop = $('body').scrollTop();
                $('html').addClass('modal-open');
            }
        );
        params.container.on('hide.bs.modal', function() { 
                $('body').scrollTop(bodyScrollTop);
                $('html').removeClass('modal-open'); 
            }
        );
    }
    $.fn.modal.Constructor.prototype.enforceFocus = function() {};
    return out._timeout();
};

window.WP.modalAlert = function(message) {

    var options = {
        size: 1,
        box: {
            header: { content: (T.core?.api_warning_heading || 'Внимание') + '!' },
            body: { content: (message || '').toString() },
            footer: {},
            buttons: [
                { content: (T.core?.word_ok || 'ОК'), closeModal: true, className: 'btn-primary' }
            ]
        }
    };
    return window.WP.modal(options);
};

window.WP.modalConfirm = function(message, callback) {

    var options = {
        size: 1,
        box: {
            header: { content: (T.core?.api_warning_heading || 'Внимание') + '!' },
            body: { content: (message || '').toString() },
            footer: {},
            buttons: [
                { content: (T.core?.word_ok || 'ОК'), onclick: callback, closeModal: true, className: 'btn-primary' }, { content: (T.core?.word_cancel || 'Отмена'), closeModal: true, className: 'btn-default' }
            ]
        }
    };
    return window.WP.modal(options);
};


/**
 * MODULE: default FILE: translit_name.js
 */
/* 
 * Функция транслитерации имен
 */

/*function translit_name(str) {
    var replace = new Array(
			["а", "a"], ["А", "A"],
			["б", "b"], ["Б", "B"],
			["в", "v"], ["В", "V"],
			["г", "g"], ["Г", "G"],
			["д", "d"], ["Д", "D"],
			["е", "e"], ["Е", "Ye"],
			["ё", "yo"], ["Ё", "Yo"],
			["ж", "zh"], ["Ж", "Zh"],
			["з", "z"], ["З", "Z"],
			["и", "i"], ["И", "I"],
			["й", "y"], ["Й", "Y"],
			["к", "k"], ["К", "K"],
			["л", "l"], ["Л", "L"],
			["м", "m"], ["М", "M"],
			["н", "n"], ["Н", "N"],
			["о", "o"], ["О", "O"],
			["п", "p"], ["П", "P"],
			["р", "r"], ["Р", "R"],
			["с", "s"], ["С", "S"],
			["т", "t"], ["Т", "T"],
			["у", "u"], ["У", "U"],
			["ф", "f"], ["Ф", "F"],
			["х", "kh"], ["Х", "Kh"],
			["ц", "ts"], ["Ц", "Ts"],
			["ч", "ch"], ["Ч", "Ch"],
			["ш", "sh"], ["Ш", "Sh"],
			["щ", "sch"], ["Щ", "Sch"],
			["ъ", "~"], ["Ъ", "~"],
			["ы", "y"], ["Ы", "Y"],
			["ь", "~"], ["Ь", "~"],
			["э", "e"], ["Э", "E"],
			["ю", "yu"], ["Ю", "Yu"],
			["я", "ya"], ["Я", "Ya"],
			["і", "i"], ["І", "I"],
			["ї", "yi"], ["Ї", "Yi"],
			["є", "e"], ["Є", "E"]
	);
	var newStr = new String();
	var lang = (T.core == undefined)?'en':T.core.lang;
	if (lang == "ru") {
		return str; //если выбран русский язык, ничего не транслитерируем
	} else {
		for (var i = 0; i < str.length; i++) {
			ch = str.charAt(i);
			var newCh = '';
			for (var j = 0; j < replace.length; j++) {
				if (ch == replace[j][0]) {
					newCh = replace[j][1];
				}
			}
			if (newCh == '') {
				newCh = ch;
			} else if (newCh == '~') {
				newCh = '';
			}
			newStr += newCh;
		}
		return newStr;
	}
}*/




/**
 * MODULE: default FILE: analytics.js
 */
/**
 * Web analytics
 * @author Alexander Kozlov
 * @uses JQuery
 * @uses ab_params.js
 */

// Скрываем элементы, участвующие в A/B
// ab_params подтягиваются из ab_params.js
//
// Скрипт установки новых значений на страницу будет
// работать уже после загрузки страницы
if (T.core.lang === 'ru') {
	if ((typeof ab_params_all !== 'undefined') && (ab_params_all)) {
		if (ab_params_all.length > 0){
			var page_abs = [];
			var now = new Date();
			$.each(ab_params_all, function(key, ab_params){
				var dFrom = new Date(ab_params.valid_from.sec*1000);
				var dTo = new Date(ab_params.valid_to.sec*1000);
				if ((dFrom <= now)&&(dTo >= now)){
					if (isApplicablePage(ab_params.url_regex)){
						page_abs.push(key);
						var elements = getUniqueElementsList(ab_params);
						var css = '<style class=\"ab_style\">';
						$.each(elements, function(k, v){
							css += v + '{visibility:hidden;opacity: 0;}';
						});
						css += '</style>';
						$('head').append(css);
					}
				}
			});
		}
	}
}

$(window).load(function() {
	runABTest(null);
});

if ((typeof ab_params_all !== 'undefined') && (ab_params_all)&&(ab_params_all.length > 0)){
	$(document).on(getEventsArrayString(ab_params_all), function(event){
		runABTest(event.type);
	});
}

function runABTest(event){
	if (T.core.lang === 'ru') {
		if ((typeof ab_params_all !== 'undefined') && (ab_params_all)&&(ab_params_all.length > 0)){
			applyTestChanges(ab_params_all, page_abs, event);
		}else{
			deleteTestCookie();
		}
	}
}

function isApplicablePage(regexes){
	var url = window.location.href;
	var ok = false;
	$.each(regexes, function(key, regex){
		if ((new RegExp(regex, 'i')).test(url) === true){
			ok = true;
			return false;
		}
	});
	return ok;
}

function isset(variable) {
	if ((typeof variable !== 'undefined' )&&(variable)) {
		return true;
	}
	return false;
}

function getUniqueElementsList(params) {
	if ((typeof params !== 'undefined') && (params)) {
		var elems = [];
		$.each(params.variants, function(k, v) {
			$.each(v.elements, function(e, i) {
				elems.push(i.selector);
			});
		});
		if (elems.length > 0){
			return $.unique(elems);
		}
	}
	return [];
}

function getEventsArrayString(ab_params_all){
	var events = [];
	$.each(ab_params_all, function(k, ab_params){
		if ((typeof ab_params.events !== 'undefined') && (ab_params.events)){
			$.each(ab_params.events, function(i, event){
				events.push(event);
			});
		}
	});
	return ($.unique(events)).join(' ');
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomFromArray(items){
	return items[Math.floor(Math.random()*items.length)];
}

function getTestCookie(){
	$.cookie.json = false;
	var cookie = $.cookie('ab');
	if ((typeof cookie !== 'undefined' ) && (cookie.length > 0)){
		return $.parseJSON(cookie);
	}
	return null;
}

function getVariantId(test_id){
	$.cookie.json = true;
	var cookie = getTestCookie();
	var val = -1;
	if (cookie !== null) {
		$.each(cookie.ab, function(k, v) {
			if (v.id === test_id){
				val = v.val;
				return false;
			}
		});
	}
	$.cookie.json = false;
	return val;
}

function setTestCookie(cookie_arr){
	$.cookie.json = true;
	$.cookie('ab', cookie_arr, {path: '/', domain: '.' + getDomain(), expires: 30});
	$.cookie.json = false;
}

function deleteTestCookie(){
	return $.removeCookie('ab', {path: '/', domain: '.' + getDomain()});
}

function addOrUpdateCookie(id, val){
	var cookie = getTestCookie();
	var key = -1;
	if (cookie !== null){
		$.each(cookie.ab, function(k, v) {
			if (v.id === id){
				key = k;
				return false;
			}
		});
	}
	if (key > -1){
		cookie.ab[key] = {'id': id, 'val' : val};
	}else{
		if (cookie === null){ cookie = {ab: []};}
		cookie.ab.push({'id': id, 'val' : val});
	}
	setTestCookie(cookie);
}

function getDomain(){
	var dmn = location.host.split('.');
	var top = dmn.slice(-1);
	if (top.toString() === 'dev'){
		return dmn.slice(-3).join('.');
	}else{
		return dmn.slice(-2).join('.');
	}
}

function applyTestChanges(params, keys, event){
	$.each(params, function(key, test){
		if (TOOLS.inArray(keys, key) > -1){
			if ( (event === null) || ((event !== null)&&(TOOLS.inArray(test.events, event) > -1)) ){
				var variants = test.variants;
				var variant_id = getVariantId(test.test_id);
				var variant;
				if (variant_id === -1){
					var absolute_var_idx = getRandomInt(0, variants.length);
					variant = variants[absolute_var_idx];
				}else{
					$.each(variants, function(k,v){
						if (v.id === variant_id){
							variant = v;
							return false;
						}
					});
				}
				$.each(variant.elements, function(e, i){
					if (!($(i.selector).attr('data-ab'))){
						if (isset(i.properties)){
							$.each(i.properties, function(p, v){
								$(i.selector).prop(p, v);
								if (p === 'text'){
									$(i.selector).text(v);
								}
								$(i.selector).attr('data-ab', 'set');
							});
						}
						if (isset(i.attributes)){
							$.each(i.attributes, function(a, v){
								$(i.selector).attr(a, v);
							});
							$(i.selector).attr('data-ab', 'set');
						}
						$(i.selector).show();
					}
				});
				$('.ab_style').remove();
				addOrUpdateCookie(test.test_id, variant.id);
			}
		}
	});
}

/***	АНАЛИТИКА	***/

var LOG_SUCCESS = false;
var LOG_FAILURE = false;


function isAnalytisAvailable() {
	if ((typeof ga === "function") && (typeof ym !== "undefined")) {
		return true;
	} else {
		if (LOG_FAILURE)
			console.log('Analytics is disabled or unavailable');
		return false;
	}
}

function analytics_with_parent_handler(event) {
	var element = $(event.target);
	var func = element.attr('analytics-function');
	runAnalytics(func, element);
};

function analytics_self_handler(event) {
	var element = $(event.target).closest('.jsn-analytics');
	var func = element.attr('analytics-function');
	runAnalytics(func, element);
};

function setAnalyticsHandler(parent){
	parent = parent || null;
	if (parent === null){
		$.each($('.jsn-analytics'), function(){
			if (isset($(this).attr('analytics-events'))){
				$(this).on($(this).attr('analytics-events'), analytics_self_handler);
			}else{
				$(this).on('click', analytics_self_handler);
			}
		});
	} else {
		$.each($(parent).find('.jsn-analytics'), function(){
			$(this).off('click', analytics_self_handler);
		});
		$(parent).on('click', '.jsn-analytics', analytics_with_parent_handler);
	}
}

function runAnalytics(func, object) {
	switch (func) {
		case 'analyticsClickWantToAddMain':
			analyticsClickWantToAddMain();
			break;
		case 'analyticsShowPhoneClickObject':
			analyticsShowPhoneClickObject(object.attr('data-object-city'));
			break;
		case 'analyticsShowPhoneClickObjectOwner':
			analyticsShowPhoneClickObjectOwner(object.attr('data-object-city'));
			break;
		case 'analyticsLikeClickObject':
			analyticsLikeClickObject(object.attr('data-object-city'));
			break;
		case 'analyticsClickWantToAddCabinet':
			analyticsClickWantToAddCabinet();
			break;
		case 'analyticsShowPhoneClickSearch':
			analyticsShowPhoneClickSearch(object.attr('data-object-city'));
			break;
		case 'analyticsShowPhoneClickObjectSB':
			analyticsShowPhoneClickObjectSB(object.attr('data-object-city'));
			break;
		case 'analyticsLikeClickSearch':
			analyticsLikeClickSearch(object.attr('data-object-city'));
			break;
		case 'analyticsOrderFormShowClick':
			analyticsOrderFormShowClick(object);
			break;
		case 'analyticsBookingSuccessObject':
			analyticsBookingSuccessObject(object.attr('data-object-city'));
			break;
		case 'analyticsClickSocialLinks':
			analyticsClickSocialLinks(object.attr('data-social-network'));
			break;
		case 'analyticsSocialLogin':
			analyticsSocialLogin(object);
			break;
		case 'analyticsClickShowPriceSearch':
			analyticsClickShowPriceSearch(object.attr('data-object-city'));
			break;
		case 'analyticsClickShowPriceObject':
			analyticsClickShowPriceObject(object.attr('data-object-city'));
			break;
		case 'analyticsOrderFormDatesChange':
			analyticsOrderFormDatesChange(object);
			break;
		case 'analyticsOrderFormTimesClick':
			analyticsOrderFormTimesClick(object);
			break;
		case 'analyticsOrderFormCntGuestsClick':
			analyticsOrderFormCntGuestsClick(object);
			break;
		case 'analyticsOrderFormNameClick':
			analyticsOrderFormNameClick(object);
			break;
		case 'analyticsOrderFormPhoneClick':
			analyticsOrderFormPhoneClick(object);
			break;
		case 'analyticsBookingStepOne':
			analyticsBookingStepOne(object);
			break;
		case 'analyticsBookingStepTwo':
			analyticsBookingStepTwo(object);
			break;
		case 'analyticsBookingMessagesShowMore':
			analyticsBookingMessagesShowMore();
			break;
		case 'analyticsBookingMessagesPayNow':
			analyticsBookingMessagesPayNow();
			break;
		case 'analyticsObjectPagePayNow':
			analyticsObjectPagePayNow();
			break;
	}
}

function yaCounterReachGoal(target) {
	ym(glob_ym_id, 'reachGoal', target);
}

function analyticsAnswerPhoneClickObject(type) {
	if (isAnalytisAvailable()) {
		ga('send', 'event', 'showphone', 'feedback', type);
		yaCounterReachGoal('showphonefeedback');
		if (LOG_SUCCESS)
			console.log('analyticsAnswerPhoneClickObject(' + type + ')');
	}
}

function analyticsAnswerPhoneClickSearch(type) {
	if (isAnalytisAvailable()) {
		ga('send', 'event', 'showphone', 'feedback', type);
		yaCounterReachGoal('showphonefeedback');
		if (LOG_SUCCESS)
			console.log('analyticsAnswerPhoneClickSearch(' + type + ')');
	}
}

function analyticsShowPhoneClickObject(city) {
	if (isAnalytisAvailable()) {
		ga('send', 'event', 'showphone', 'oncard', city);
		yaCounterReachGoal('showphone');
		if (LOG_SUCCESS)
			console.log('analyticsShowPhoneClickObject(' + city + ')');
	}
}

function analyticsShowPhoneClickObjectOwner(city) {
	if (isAnalytisAvailable()) {
		ga('send', 'event', 'showphone', 'oncard-owner', city);
		yaCounterReachGoal('showphone');
		if (LOG_SUCCESS)
			console.log('analyticsShowPhoneClickObjectOwner(' + city + ')');
	}
}

function analyticsShowPhoneClickSearch(city) {
	if (isAnalytisAvailable()) {
		ga('send', 'event', 'showphone', 'onsearch', city);
		yaCounterReachGoal('showphone');
		if (LOG_SUCCESS)
			console.log('analyticsShowPhoneClickSearch(' + city + ')');
	}
}

function analyticsShowPhoneClickObjectSB(city) {
	if (isAnalytisAvailable()) {
		ga('send', 'event', 'booking', 'showphone', city);
		yaCounter.reachGoal('showphone');
		if (LOG_SUCCESS)
			console.log('analyticsShowPhoneClickObjectSB(' + city + ')');
	}
}

function analyticsLikeClickSearch(city) {
	/*
	if (isAnalytisAvailable()) {
		ga('send', 'event', 'favorites', 'onsearch', city);
		yaCounterReachGoal('favoritesonsearch');
		if (LOG_SUCCESS)
			console.log('analyticsLikeClickSearch(' + city + ')');
	}
	*/
}

function analyticsLikeClickObject(city) {
	/*
	if (isAnalytisAvailable()) {
		ga('send', 'event', 'favorites', 'oncard', city);
		yaCounterReachGoal('favoritesoncard');
		if (LOG_SUCCESS)
			console.log('analyticsLikeClickObject(' + city + ')');
	}
	*/
}

function analyticsClickWantToAddMain() {
	if (isAnalytisAvailable()) {
		ga('send', 'event', 'newobject', 'wanttoadd', 'onmain');
		yaCounterReachGoal('newobjectwanttoadd');
		if (LOG_SUCCESS)
			console.log('analyticsClickWantToAddMain()');
	}
}

function analyticsClickWantToAddCabinet() {
	/*
	if (isAnalytisAvailable()) {
		ga('send', 'event', 'newobject', 'wanttoadd', 'incabinet');
		yaCounterReachGoal('newobjectwanttoadd');
		if (LOG_SUCCESS)
			console.log('analyticsClickWantToAddCabinet()');
	}
	*/
}

function analyticsOrderFormShowClick(object) {
	if (isAnalytisAvailable() && !$('.js-booking-form-cnt').is(':visible')) {
		ga('send', 'event', 'booking', 'startv1', '');
		yaCounterReachGoal('bookingstartv1');
		if (LOG_SUCCESS)
			console.log('analyticsOrderFormShowClick()');
	}
}

function analyticsBookingSuccessObject(city) {
	if (isAnalytisAvailable()) {
		ga('send', 'event', 'booking', 'oncard', city);
		yaCounterReachGoal('bookingoncard');
		if (LOG_SUCCESS)
			console.log('analyticsBookingSuccessObject(' + city + ')');
	}
}

function analyticsClickSocialLinks(network) {
	if (isAnalytisAvailable()) {
		ga('send', 'event', 'social', network);
		yaCounterReachGoal('social'+network);
		if (LOG_SUCCESS)
			console.log('analyticsClickSocialLinks(' + network + ')');
	}

	TMDL.socialClick(network);
}

function analyticsSocialLogin(network) {
	/*
	if (isAnalytisAvailable()) {
		ga('send', 'event', 'cabinet', 'signinbysm', network);
		yaCounterReachGoal('cabinetsigninbysm');
		if (LOG_SUCCESS)
			console.log('analyticsSocialLogin(' + network + ')');
	}
	*/
}

function analyticsClickShowPriceSearch(city) {
	if (isAnalytisAvailable()) {
		ga('send', 'event', 'booking', 'showprice_search', city);
		yaCounterReachGoal('showprice_search');
		if (LOG_SUCCESS)
			console.log('analyticsClickShowPriceSearch('+city+')');
	}
}

function analyticsClickShowPriceObject(city) {
	if (isAnalytisAvailable()) {
		ga('send', 'event', 'booking', 'showprice_object', city);
		yaCounterReachGoal('showprice_object');
		if (LOG_SUCCESS)
			console.log('analyticsClickShowPriceObject('+city+')');
	}
}

function analyticsOrderFormDatesChange(object) {
	if (isAnalytisAvailable()) {
		ga('send', 'event', 'booking', 'dateschange', '');
		yaCounterReachGoal('bookingdateschange');
		if (LOG_SUCCESS)
			console.log('analyticsOrderFormDatesChange()');
	}
}

function analyticsOrderFormTimesClick(object) {
	if (isAnalytisAvailable()) {
		ga('send', 'event', 'booking', 'timesclick', '');
		yaCounterReachGoal('bookingtimesclick');
		if (LOG_SUCCESS)
			console.log('analyticsOrderFormTimesClick()');
	}
}

function analyticsOrderFormCntGuestsClick(object) {
	if (isAnalytisAvailable()) {
		ga('send', 'event', 'booking', 'cntguestsclick', '');
		yaCounterReachGoal('bookingcntguestsclick');
		if (LOG_SUCCESS)
			console.log('analyticsOrderFormCntGuestsClick()');
	}
}

function analyticsOrderFormNameClick(object) {
	if (isAnalytisAvailable()) {
		ga('send', 'event', 'booking', 'nameclick', '');
		yaCounterReachGoal('bookingnameclick');
		if (LOG_SUCCESS)
			console.log('analyticsOrderFormNameClick()');
	}
}
function analyticsOrderFormPhoneClick(object) {
	if (isAnalytisAvailable()) {
		ga('send', 'event', 'booking', 'phoneclick', '');
		yaCounterReachGoal('bookingphoneclick');
		if (LOG_SUCCESS)
			console.log('analyticsOrderFormPhoneClick()');
	}
}

function analyticsBookingStepOne(object) {
	if (isAnalytisAvailable()) {
		ga('send', 'event', 'booking', 'step1', object);
		yaCounterReachGoal('bookingstep1com');
		if (LOG_SUCCESS)
			console.log('analyticsBookingStepOne('+object+')');
	}
}

function analyticsBookingStepTwo(object) {
	if (isAnalytisAvailable()) {
		ga('send', 'event', 'booking', 'step2', object);
		yaCounterReachGoal('bookingstep2com');
		if (LOG_SUCCESS)
			console.log('analyticsBookingStepTwo('+object+')');
	}
}

/*
 * Аналитика встречных предложений
 */
function analyticsBookingMessagesShowMore() {
	if (isAnalytisAvailable()) {
		ga('send', 'event', 'hotbooking', 'MessagesShowMore', '');
		if (LOG_SUCCESS)
			console.log('analyticsBookingMessagesShowMore()');
	}
}

function analyticsBookingMessagesPayNow() {
	if (isAnalytisAvailable()) {
		ga('send', 'event', 'hotbooking', 'MessagesPayNow', '');
		if (LOG_SUCCESS)
			console.log('analyticsBookingMessagesPayNow()');
	}
}

function analyticsObjectPagePayNow() {
	if (isAnalytisAvailable()) {
		ga('send', 'event', 'hotbooking', 'ObjectPagePayNow', '');
		if (LOG_SUCCESS)
			console.log('analyticsObjectPagePayNow()');
	}
}

/**
 * Временная аналитика формы бронирования
 */

// Отправка события формы бронирования
function testBookingForm(label) {
/*
	if (isAnalytisAvailable()) {
		ga('send', 'event', 'booking', 'testform', label);
		if (LOG_SUCCESS)
			console.log('testBookingForm(' + label + ')');
	}
*/
}

// События на странице:

$(document).ready(function () {
	setAnalyticsHandler();
	/*
	// Показ календаря
	$('#booking-calendarik').on('show.daterangepicker', function(){
		testBookingForm('datesclick');
	});

	// Выбор дат
	$('#booking-calendarik').on('booking.datepicker.dates.selected', function(){
		testBookingForm('dateschoosen');
	});

	// Клик по количеству гостей
	$('select[name="guests"]').on('click', function(){
		testBookingForm('guestsclick');
	});

	// Изменение количества гостей
	$('select[name="guests"]').on('change', function(){
		testBookingForm('guestschange');
	});

	// Клик по времени заезда
	$('select[name="time_begin"]').on('click', function(){
		testBookingForm('timeinclick');
	});

	// Изменение времени заезда
	$('select[name="time_begin"]').on('change', function(){
		testBookingForm('timeinchange');
	});

	// Клик по времени отъезда
	$('select[name="time_end"]').on('click', function(){
		testBookingForm('timeoutclick');
	});

	// Изменение времени отъезда
	$('select[name="time_end"]').on('change', function(){
		testBookingForm('timeoutchange');
	});

	// Клик на имя для незарегистрированного
	$('input.form-control[name="name"]').on('click', function(){
		testBookingForm('nameclick');
	});

	// Клик на телефон для незарегистрированного
	$('input.form-control[name="value"]').on('click', function(){
		testBookingForm('phoneclick');
	});

	// Выбор телефона для зарегистрированного
	$('select[name="phones"]').on('click', function(){
		testBookingForm('choosephone');
	});

	// Клик на рассчитать стоимость
	$('.jsn-calculate-price').on('click', function(){
		testBookingForm('calculateprice');
	});
	*/
});


/**
 * MODULE: default FILE: hints.js
 */
/**
 * Web analytics
 * @author Alexander Kozlov
 * @uses JQuery
 * @uses hints_params.js
 */
(function (){
	var page_hints = [];
	if ((typeof hints_params !== 'undefined') && (hints_params)) {
		if (hints_params.length > 0){
			var url = getCurrentHostAndPath();
			$.each(hints_params, function(key, hint){
				if ((new RegExp(hint.regex)).test(url) === true){
					page_hints.push({id: hint.id, selector: hint.selector, data : JSON.parse(hint.data)});
				}
			});
		}
	}

	$(window).load(function () {
		if (device.desktop()){
			if (isset(page_hints) && page_hints.length){
				setHints(page_hints, true);
			}
			// Проставлять подсказки заново при ajax обновлении фильтра поиска
			$(window).on('filterLoaded', function() {
				$('*').popover('hide');
				setHints(page_hints, false);
			});
		}
	});

	if(page_hints.length) {
		window.is_hints = true;
	} else {
		window.is_hints = false;
	}
})();

// Получает хост и путь текущей страницы (без протокола, GET-параметров и
// без заключительного слеша)
function getCurrentHostAndPath() {
	var l = document.createElement("a");
	l.href = window.location.href;
	var p = l.pathname;
	p = (p.slice(-1) === '/') ? p.slice(0, -1) : p;
	p = (p[0] !== '/') ? '/'+p : p;
	return l.hostname + p;
};

function setHints(hints, fire_onload){
	$.each(hints, function(key, hint){
		var data = hint.data;
		data.id = hint.id;
		setPopover(hint.selector, data, false, fire_onload);
	});
}

function showAllHints(){
	$.each($('.jsn-with-hint'), function(){
		$this = $(this);
		if ($this.children('.prompt').length){
			$this.children('.prompt').popover('show');
		}else{
			$this.popover('show');
		}
	});
}

function hideAllHints(){
	$('*').popover('hide');
}

function setPopover(selector, data, hint_mode, fire_onload){
	var $selector = $(selector);
	var selector = selector;
	if (!isset(hint_mode) || !hint_mode){
		var hint_mode = false;
	}

	if (hint_mode){
		$selector.closest('.prompt').off('click');
	}

	$selector.children('.prompt').remove();
	if ((T.core.lang === 'ru' && (data.hint_caption_ru.length > 0 || data.hint_text_ru.length > 0 )) ||
		(T.core.lang === 'en' && (data.hint_caption_en.length > 0 || data.hint_text_en.length > 0 ))){

		$selector.addClass('jsn-with-hint');
		if (isset(data.hint_view_type) && (data.hint_view_type === 'question_mark')){
			var orig_height = $selector.height();
			var orig_width = $selector.width();
			$selector.append('<span class="prompt" onclick="return false;"></span>');
			if (orig_height < $selector.height()) {
				$selector.data('old-width', orig_width);
				$selector.width(orig_width + 26);
			}
		}

		if (isset(data.hint_view_type) && (data.hint_view_type === 'no_mark')){
			if ($selector.data('old-width')) {
				$selector.width($selector.data('old-width'));
			}
			$selector.addClass('hint-no-mark');
		}else{
			$selector = $('.prompt', selector);
		}

		var tpl = '<div class="popover popover-hints warning jsn-hints-popover jsn-no-hint" role="tooltip" data-selector="'+selector+'" style="width:250px;"><div class="arrow jsn-no-hint"></div><div class="popover-wrapper jsn-no-hint">';
		if (TOOLS.inArray(data.hint_close_type, 'x_click') > -1){
			tpl = tpl + '<button type="button" class="close jsn-no-hint" aria-hidden="true" data-selector="'+selector+'">&times;</button>';
		}
		if (isset(data.hint_caption_ru) &&  (data.hint_caption_ru.length > 0)){
			tpl = tpl + '<div class="popover-title warning jsn-no-hint"></div>';
		}
		tpl = tpl + '<div class="popover-content jsn-no-hint"></div></div></div>';

		var triggers = "";
		$.each(data.hint_show_type, function(key, type){
			triggers = triggers + type + " ";
		});

		var content = '';
		if (T.core.lang === 'ru') {
			content = data.hint_text_ru;
		}else if (T.core.lang === 'en') {
			content = data.hint_text_en;
		}

		var title = '';
		if (T.core.lang === 'ru') {
			title = data.hint_caption_ru;
		}else if (T.core.lang === 'en') {
			title = data.hint_caption_en;
		}

		var options = {
			template : tpl,
			trigger: triggers,
			html: true,
			content: content,
			title: title,
			placement: data.hint_place_type
		};

		if (selector.charAt(0) === '.'){
			$.each($selector, function(k, sel){
				setSelectorPopover(data, $(sel), options, fire_onload);
			});
		}else{
			setSelectorPopover(data, $selector, options, fire_onload);
		}
	}

}

function setHintsCookie(cookie_arr){
	$.cookie.json = true;
	$.cookie('hhids', cookie_arr, {path: '/', domain: '.' + TOOLS.domain, expires: 365});
	$.cookie.json = false;
}

function addOrUpdateHintsCookie(id){
	var cookie = getTestCookie();
	var key = -1;
	if (cookie !== null){
		$.each(cookie.hint, function(k, v) {
			if (v.id === id){
				key = k;
				return false;
			}
		});
	}
	if (key > -1){
		cookie.hint[key] = id;
	}else{
		if (cookie === null){ cookie = {hint: []};}
		cookie.hint.push(id);
	}
	setHintsCookie(cookie);
}

function checkHintsCookie(id){
	$.cookie.json = false;
	var cookie = $.cookie('hhids');
	if ((typeof cookie !== 'undefined' ) && (cookie.length > 0)){
		var parsed = $.parseJSON(cookie);
		if (TOOLS.inArray(id, parsed.hint) > -1){
			return true;
		}
	}
	return false;
}


function setSelectorPopover(data, $selector, options, fire_onload){
	$selector.popover(options)
	.on('shown.bs.popover', function () {
		var popup_id = '#'+$selector.attr('aria-describedby');
		var $popup = $(popup_id);

		function close_popover_timeout($selector) {
			$selector.popover('hide');
		}
		// Убираем все клики "сквозь" подсказку
		$popup.on('click', function (e) {
			e.stopPropagation();
			e.preventDefault();
		});
		// Закрытие подсказки по крестику
		if (TOOLS.inArray(data.hint_close_type, 'x_click') > -1){
			$popup.find('button.close').on('click', function (e) {
				$popup.popover('hide');
				if (TOOLS.inArray(data.hint_close_type, 'timeout') > -1){
					addOrUpdateHintsCookie(data.id);
					//$.cookie('hhids', data.id);
				}
				e.stopPropagation();
				e.preventDefault();
			});
		}
		// Закрытие по клику вне подсказки
		if (TOOLS.inArray(data.hint_close_type, 'out_click') > -1){
			$('body').on('click', function(e){
				if (!($(e.target).hasClass('jsn-with-hint') || $(e.target).hasClass('prompt'))){
					$popup.popover('hide');
				}
			});
		}
		// Закрытие по второму клику
		if (TOOLS.inArray(data.hint_close_type, 'second_click') > -1){
			$popup.parent('.jsn-with-hint').on('click', function (e) {
				if (!($(e.target).hasClass('jsn-with-hint') || $(e.target).hasClass('prompt') )){
					$popup.popover('hide');
					e.stopPropagation();
					e.preventDefault();
				}
			});
		}
		// Закрытие по таймауту
		if (TOOLS.inArray(data.hint_close_type, 'timeout') > -1){
			var timeout = 5000;
			if (isset(data.hint_close_timeout) && (data.hint_close_timeout !== '')){
				timeout = parseInt(data.hint_close_timeout);
			}
			var timeout_id = setTimeout(close_popover_timeout, timeout, $selector);
			$popup
				// Если мышка над подсказкой - отключаем таймер
				.on('mouseenter', function(){
					clearTimeout(timeout_id);
				})
				// Если мышка ушла - запускаем таймер снова
				.on('mouseleave', function(){
					timeout_id = setTimeout(close_popover_timeout, timeout, $selector);
				});
		}
	});
	if (fire_onload){
		if (TOOLS.inArray(data.hint_show_type, 'pageload') > -1){
			if (!checkHintsCookie(data.id)){
				$selector.popover('show');
			}
		}
	}

}

/**
 * MODULE: default FILE: jquery.parallax.js
 */
// jquery.parallax.js
// 2.0
// Stephen Band
//
// Project and documentation site:
// webdev.stephband.info/jparallax/
//
// Repository:
// github.com/stephband/jparallax

(function(jQuery, undefined) {
	// VAR
	var debug = true,
	    
	    options = {
	    	mouseport:     'body',  // jQuery object or selector of DOM node to use as mouseport
	    	xparallax:     true,    // boolean | 0-1 | 'npx' | 'n%'
	    	yparallax:     true,    //
	    	xorigin:       0.5,     // 0-1 - Sets default alignment. Only has effect when parallax values are something other than 1 (or true, or '100%')
	    	yorigin:       0.5,     //
	    	decay:         0.66,    // 0-1 (0 instant, 1 forever) - Sets rate of decay curve for catching up with target mouse position
	    	frameDuration: 30,      // Int (milliseconds)
	    	freezeClass:   'freeze' // String - Class added to layer when frozen
	    },
	
	    value = {
	    	left: 0,
	    	top: 0,
	    	middle: 0.5,
	    	center: 0.5,
	    	right: 1,
	    	bottom: 1
	    },
	
	    rpx = /^\d+\s?px$/,
	    rpercent = /^\d+\s?%$/,
	    
	    win = jQuery(window),
	    doc = jQuery(document),
	    mouse = [0, 0];
	
	var Timer = (function(){
		var debug = false;
		
		// Shim for requestAnimationFrame, falling back to timer. See:
		// see http://paulirish.com/2011/requestanimationframe-for-smart-animating/
		var requestFrame = (function(){
		    	return (
		    		window.requestAnimationFrame ||
		    		window.webkitRequestAnimationFrame ||
		    		window.mozRequestAnimationFrame ||
		    		window.oRequestAnimationFrame ||
		    		window.msRequestAnimationFrame ||
		    		function(fn, node){
		    			return window.setTimeout(function(){
		    				fn();
		    			}, 25);
		    		}
		    	);
		    })();
		
		function Timer() {
			var callbacks = [],
				nextFrame;
			
			function noop() {}
			
			function frame(){
				var cbs = callbacks.slice(0),
				    l = cbs.length,
				    i = -1;
				
				if (debug) { console.log('timer frame()', l); }
				
				while(++i < l) { cbs[i].call(this); }
				requestFrame(nextFrame);
			}
			
			function start() {
				if (debug) { console.log('timer start()'); }
				this.start = noop;
				this.stop = stop;
				nextFrame = frame;
				requestFrame(nextFrame);
			}
			
			function stop() {
				if (debug) { console.log('timer stop()'); }
				this.start = start;
				this.stop = noop;
				nextFrame = noop;
			}
			
			this.callbacks = callbacks;
			this.start = start;
			this.stop = stop;
		}

		Timer.prototype = {
			add: function(fn) {
				var callbacks = this.callbacks,
				    l = callbacks.length;
				
				// Check to see if this callback is already in the list.
				// Don't add it twice.
				while (l--) {
					if (callbacks[l] === fn) { return; }
				}
				
				this.callbacks.push(fn);
				if (debug) { console.log('timer add()', this.callbacks.length); }
			},
		
			remove: function(fn) {
				var callbacks = this.callbacks,
				    l = callbacks.length;
				
				// Remove all instances of this callback.
				while (l--) {
					if (callbacks[l] === fn) { callbacks.splice(l, 1); }
				}
				
				if (debug) { console.log('timer remove()', this.callbacks.length); }
				
				if (callbacks.length === 0) { this.stop(); }
			}
		};
		
		return Timer;
	})();
	
	function parseCoord(x) {
		return (rpercent.exec(x)) ? parseFloat(x)/100 : x;
	}
	
	function parseBool(x) {
		return typeof x === "boolean" ? x : !!( parseFloat(x) ) ;
	}
	
	function portData(port) {
		var events = {
		    	'mouseenter.parallax': mouseenter,
		    	'mouseleave.parallax': mouseleave
		    },
		    winEvents = {
		    	'resize.parallax': resize
		    },
		    data = {
		    	elem: port,
		    	events: events,
		    	winEvents: winEvents,
		    	timer: new Timer()
		    },
		    layers, size, offset;
		
		function updatePointer() {
			data.pointer = getPointer(mouse, [true, true], offset, size);
		}
		
		function resize() {
			size = getSize(port);
			offset = getOffset(port);
			data.threshold = getThreshold(size);
		}
		
		function mouseenter() {
			data.timer.add(updatePointer);
		}
		
		function mouseleave(e) {
			data.timer.remove(updatePointer);
			data.pointer = getPointer([e.pageX, e.pageY], [true, true], offset, size);
		}

		win.on(winEvents);
		port.on(events);
		
		resize();
		
		return data;
	}
	
	function getData(elem, name, fn) {
		var data = elem.data(name);
		
		if (!data) {
			data = fn ? fn(elem) : {} ;
			elem.data(name, data);
		}
		
		return data;
	}
	
	function getPointer(mouse, parallax, offset, size){
		var pointer = [],
		    x = 2;
		
		while (x--) {
			pointer[x] = (mouse[x] - offset[x]) / size[x] ;
			pointer[x] = pointer[x] < 0 ? 0 : pointer[x] > 1 ? 1 : pointer[x] ;
		}
		
		return pointer;
	}
	
	function getSize(elem) {
		return [elem.width(), elem.height()];
	}
	
	function getOffset(elem) {
		var offset = elem.offset() || {left: 0, top: 0},
			borderLeft = elem.css('borderLeftStyle') === 'none' ? 0 : parseInt(elem.css('borderLeftWidth'), 10),
			borderTop = elem.css('borderTopStyle') === 'none' ? 0 : parseInt(elem.css('borderTopWidth'), 10),
			paddingLeft = parseInt(elem.css('paddingLeft'), 10),
			paddingTop = parseInt(elem.css('paddingTop'), 10);
		
		return [offset.left + borderLeft + paddingLeft, offset.top + borderTop + paddingTop];
	}
	
	function getThreshold(size) {
		return [1/size[0], 1/size[1]];
	}
	
	function layerSize(elem, x, y) {
		return [x || elem.outerWidth(), y || elem.outerHeight()];
	}
	
	function layerOrigin(xo, yo) {
		var o = [xo, yo],
			i = 2,
			origin = [];
		
		while (i--) {
			origin[i] = typeof o[i] === 'string' ?
				o[i] === undefined ?
					1 :
					value[origin[i]] || parseCoord(origin[i]) :
				o[i] ;
		}
		
		return origin;
	}
	
	function layerPx(xp, yp) {
		return [rpx.test(xp), rpx.test(yp)];
	}
	
	function layerParallax(xp, yp, px) {
		var p = [xp, yp],
		    i = 2,
		    parallax = [];
		
		while (i--) {
			parallax[i] = px[i] ?
				parseInt(p[i], 10) :
				parallax[i] = p[i] === true ? 1 : parseCoord(p[i]) ;
		}
		
		return parallax;
	}
	
	function layerOffset(parallax, px, origin, size) {
		var i = 2,
		    offset = [];
		
		while (i--) {
			offset[i] = px[i] ?
				origin[i] * (size[i] - parallax[i]) :
				parallax[i] ? origin[i] * ( 1 - parallax[i] ) : 0 ;
		}
		
		return offset;
	}
	
	function layerPosition(px, origin) {
		var i = 2,
		    position = [];
		
		while (i--) {
			if (px[i]) {
				// Set css position constant
				position[i] = origin[i] * 100 + '%';
			}
			else {
			
			}
		}
		
		return position;
	}
	
	function layerPointer(elem, parallax, px, offset, size) {
		var viewport = elem.offsetParent(),
			pos = elem.position(),
			position = [],
			pointer = [],
			i = 2;
		
		// Reverse calculate ratio from elem's current position
		while (i--) {
			position[i] = px[i] ?
				// TODO: reverse calculation for pixel case
				0 :
				pos[i === 0 ? 'left' : 'top'] / (viewport[i === 0 ? 'outerWidth' : 'outerHeight']() - size[i]) ;
			
			pointer[i] = (position[i] - offset[i]) / parallax[i] ;
		}
		
		return pointer;
	}
	
	function layerCss(parallax, px, offset, size, position, pointer) {
		var pos = [],
		    cssPosition,
		    cssMargin,
		    x = 2,
		    css = {};
		
		while (x--) {
			if (parallax[x]) {
				pos[x] = parallax[x] * pointer[x] + offset[x];
				
				// We're working in pixels
				if (px[x]) {
					cssPosition = position[x];
					cssMargin = pos[x] * -1;
				}
				// We're working by ratio
				else {
					cssPosition = pos[x] * 100 + '%';
					cssMargin = pos[x] * size[x] * -1;
				}
				
				// Fill in css object
				if (x === 0) {
					css.left = cssPosition;
					css.marginLeft = cssMargin;
				}
				else {
					css.top = cssPosition;
					css.marginTop = cssMargin;
				}
			}
		}
		
		return css;
	}
	
	function pointerOffTarget(targetPointer, prevPointer, threshold, decay, parallax, targetFn, updateFn) {
		var pointer, x;
		
		if ((!parallax[0] || Math.abs(targetPointer[0] - prevPointer[0]) < threshold[0]) &&
		    (!parallax[1] || Math.abs(targetPointer[1] - prevPointer[1]) < threshold[1])) {
		    // Pointer has hit the target
		    if (targetFn) { targetFn(); }
		    return updateFn(targetPointer);
		}
		
		// Pointer is nowhere near the target
		pointer = [];
		x = 2;
		
		while (x--) {
			if (parallax[x]) {
				pointer[x] = targetPointer[x] + decay * (prevPointer[x] - targetPointer[x]);
			}
		}
			
		return updateFn(pointer);
	}
	
	function pointerOnTarget(targetPointer, prevPointer, threshold, decay, parallax, targetFn, updateFn) {
		// Don't bother updating if the pointer hasn't changed.
		if (targetPointer[0] === prevPointer[0] && targetPointer[1] === prevPointer[1]) {
			return;
		}
		
		return updateFn(targetPointer);
	}
	
	function unport(elem, events, winEvents) {
		elem.off(events).removeData('parallax_port');
		win.off(winEvents);
	}
	
	function unparallax(node, port, events) {
		port.elem.off(events);
		
		// Remove this node from layers
		port.layers = port.layers.not(node);
		
		// If port.layers is empty, destroy the port
		if (port.layers.length === 0) {
			unport(port.elem, port.events, port.winEvents);
		}
	}
	
	function unstyle(parallax) {
		var css = {};
		
		if (parallax[0]) {
			css.left = '';
			css.marginLeft = '';
		}
		
		if (parallax[1]) {
			css.top = '';
			css.marginTop = '';
		}
		
		elem.css(css);
	}
	
	jQuery.fn.parallax = function(o){
		var options = jQuery.extend({}, jQuery.fn.parallax.options, o),
		    args = arguments,
		    elem = options.mouseport instanceof jQuery ?
		    	options.mouseport :
		    	jQuery(options.mouseport) ,
		    port = getData(elem, 'parallax_port', portData),
		    timer = port.timer;
		
		return this.each(function(i) {
			var node      = this,
			    elem      = jQuery(this),
			    opts      = args[i + 1] ? jQuery.extend({}, options, args[i + 1]) : options,
			    decay     = opts.decay,
			    size      = layerSize(elem, opts.width, opts.height),
			    origin    = layerOrigin(opts.xorigin, opts.yorigin),
			    px        = layerPx(opts.xparallax, opts.yparallax),
			    parallax  = layerParallax(opts.xparallax, opts.yparallax, px),
			    offset    = layerOffset(parallax, px, origin, size),
			    position  = layerPosition(px, origin),
			    pointer   = layerPointer(elem, parallax, px, offset, size),
			    pointerFn = pointerOffTarget,
			    targetFn  = targetInside,
			    events = {
			    	'mouseenter.parallax': function mouseenter(e) {
			    		pointerFn = pointerOffTarget;
			    		targetFn = targetInside;
			    		timer.add(frame);
			    		timer.start();
			    	},
			    	'mouseleave.parallax': function mouseleave(e) {
			    		// Make the layer come to rest at it's limit with inertia
			    		pointerFn = pointerOffTarget;
			    		// Stop the timer when the the pointer hits target
			    		targetFn = targetOutside;
			    	}
			    };
			
			function updateCss(newPointer) {
				var css = layerCss(parallax, px, offset, size, position, newPointer);
				elem.css(css);
				pointer = newPointer;
			}
			
			function frame() {
				pointerFn(port.pointer, pointer, port.threshold, decay, parallax, targetFn, updateCss);
			}
			
			function targetInside() {
				// Pointer hits the target pointer inside the port
				pointerFn = pointerOnTarget;
			}
			
			function targetOutside() {
				// Pointer hits the target pointer outside the port
				timer.remove(frame);
			}
			
			
			if (jQuery.data(node, 'parallax')) {
				elem.unparallax();
			}
			
			jQuery.data(node, 'parallax', {
				port: port,
				events: events,
				parallax: parallax
			});
			
			port.elem.on(events);
			port.layers = port.layers? port.layers.add(node): jQuery(node);
			
			/*function freeze() {
				freeze = true;
			}
			
			function unfreeze() {
				freeze = false;
			}*/
			
			/*jQuery.event.add(this, 'freeze.parallax', freeze);
			jQuery.event.add(this, 'unfreeze.parallax', unfreeze);*/
		});
	};
	
	jQuery.fn.unparallax = function(bool) {
		return this.each(function() {
			var data = jQuery.data(this, 'parallax');
			
			// This elem is not parallaxed
			if (!data) { return; }
			
			jQuery.removeData(this, 'parallax');
			unparallax(this, data.port, data.events);
			if (bool) { unstyle(data.parallax); }
		});
	};
	
	jQuery.fn.parallax.options = options;
	
	// Pick up and store mouse position on document: IE does not register
	// mousemove on window.
	doc.on('mousemove.parallax', function(e){
		mouse = [e.pageX, e.pageY];
	});
}(jQuery));

/**
 * MODULE: default FILE: wp.tabs.js
 */

var LS_IFRAME_ID = 'LS-data';

document.domain = window.location.host.split('.').slice(-2).join('.');

$(function(){
	if ( !$('#'+LS_IFRAME_ID).length && location.pathname != '/iframe.html' && TOOLS.getGet('appm')!=1){
		$('body').append('<iframe id="'+LS_IFRAME_ID+'" src="//'+TOOLS.domain+'/iframe.html" border="0" height="1" width="1" class="hidden" allow-scripts="1"></iframe>');
	}
});

/*
 * класс работы с вкладками
 *
 * dependeces: tools.custom.js
 */
WP.tabs = {
	params: {},
	triggers: {},
	tabs: {},
	is_polling: 0,
	iam: null,
	t_interval: null,
	t_repeat:4850,

	//-- я вкладка/окно браузера, я активировалась и добавила о себе информацию
	init: function(params){
		var $this = this
			, dt = new Date().getTime()
			, tbs = $this.get_list()
		;

		if (typeof params != 'undefined')
			$this.params = params;

		//-- установка данных новой вкладки
		do {
			$this.iam = TOOLS.getRand(3);
		}
		while (typeof tbs[$this.iam] != 'undefined');

		$this.update();
		if ($this.t_interval == null){
			$this.t_interval = setInterval(function(){$this.update();}, $this.t_repeat);

			TOOLS.addEvent(window, "message", function(e){
				$this.eventFrame(e)
			});
		}
	},

	//-- обработчик события приходящего из iframe
	eventFrame: function(event){
		if (typeof event.data.moment != 'undefined'){
			for (var i in event.data.moment){
				//WP.polling._callFunction(event.data.moment[i].callback, event.data.moment[i].data);
				WP.polling.triggers[event.data.moment[i].callback](event.data.moment[i].data);
			}
		}
		if (typeof event.data.push_log != 'undefined'){
			//wp.request('/api/json/noticer/setPushPermission/', {permission:event.data.push_log.permission, device:window.document.documentElement.className}, function(){
			$.cookie('is_show_push', true, {expires: 1, path: '/', domain:'.'+TOOLS.domain, raw:true});
			//});
		}
		if (typeof event.data.tabs != 'undefined'){
			this.set_list(event.data.tabs);
		}
	},

	//-- отправщик события с данными для распределения по вкладкам
	set_moment: function(data){
		this.setItem('moment', data);
	},

	//-- отправщик собятия что нужно показать уведомление на рабочем столе
	/*show_notes2desktop: function(data){
		this.setItem('desktop', data);
	},*/

	//-- функция проверки открытого канала с сервером
	test_polling: function(){
		var met = false
			, tbs = this.get_list();
		for (var i in tbs){
			if (tbs[i].is_polling){
				met = true;

				if (i==this.get_iam())
					this.is_polling = 1;
				break;
			}
		}
		return met;
	},

	//-- получение текущего имени вкладки
	get_iam: function(){
		return this.iam;
	},

	//-- вставка данных в переменную вкладок
	set_list: function(data){

		var iam = this.get_iam(),
			$this = this;
			
		this.tabs = data;
	},

	//-- получение списка вкладок с данными
	get_list: function(){
		return this.tabs;
	},

	//-- обновление данных вкладки
	update: function(){
		var tbs = {};
		tbs[this.get_iam()] = {dt:new Date().getTime(), is_polling:this.is_polling};

		this.setItem('tabs', tbs);
	},

	//-- запись данных вкладки в хранилище
	setItem: function(name, data){
		if ( !$('#'+LS_IFRAME_ID).length )
			return null;
		var win = document.getElementById(LS_IFRAME_ID).contentWindow;
		var user_id = (typeof WP.user_id != 'undefined' && WP.user_id>0) ? WP.user_id : null;
		var is_show_push = (typeof $.cookie('is_show_push') != 'undefined' && $.cookie('is_show_push')) ? true : false;
		win.postMessage({name:name, data:data, wp_user_id:user_id, tab_url:window.location.href, is_show_push:is_show_push}, '*');
//		$.cookie(name, JSON.stringify(data), {expires: 30, path: '/', domain:'.'+TOOLS.domain, raw: true});
	},

	//-- извлечение данных из хранилища по имени
	getItem: function(name){
/*
		var data = {};
		if (typeof $.cookie(name) != 'undefined')
			data = JSON.parse($.cookie(name));
		return data;*/
	},



	add_trigger: function(name, data){
		this.triggers[name] = (!!data) ? data : true;
	},
	go_triggers: function(){

		//-- перезагружаем шапку пользователя
		if (!!this.triggers.refreshUserDataWithReloadPage)
			$(document).trigger('refreshUserData', {reload:1});

		//-- перезагружаем шапку пользователя
		if (!!this.triggers.refreshUserData)
			$(document).trigger('refreshUserData');

		//-- обновляем список сообщений
		if (!!this.triggers.initMessagesOrder){
			try {
				initMessagesOrder(this.triggers.initMessagesOrder.order_id, 1);
			}
			catch(e){console.log(e);}
		}

		//-- обновляем переписку по заявке целиком
		if (!!this.triggers.initOrderData){
			try {
				initOrderData(this.triggers.initOrderData.order_id);
			}
			catch(e){console.log(e);}
		}

		//-- обновляем список всплывающих уведомлений
		/*if (!!this.triggers.loadPushNotices){
			WP.polling.action_loadPushNotices();
		}*/

		//-- очищаем очередь действий
		this.triggers = {};
	}

};

/**
 * Crosstab LocalStorage constructor
 *
 * @param string key
 * @param function callback
 */
window.wp.storage = function(key, callback){

		var me = this;

		this.key = key;
		this.callback = callback;

		this.data = null;

		this.set = function( data ) {

			var iframe = getIframe();
			this.data = data;

			if ( !iframe ) return;

			iframe.postMessage(
					JSON.stringify({
						type: 'setDataStorage',
						key: this.key,
						data: data
					}),'*');
		};
		this.get = function() {

			return this.data;
		};

		var getIframe = function() {

				var iframe = document.getElementById( LS_IFRAME_ID )
					, win = null;

				if ( iframe ) {
					try {
						win = iframe.contentWindow;
					} catch(e) {
						win = iframe.contentWindow;
					}
				}
				return win;
			}
			, JsonParse = function( o, def ) {
				try{
					return JSON.parse(o)||def||{};
				}catch(e){}

				return def||{};
			}
			, handler = function( event ){

				var _test = function() {
					return new RegExp(
								'^' + window.location.protocol + '\/\/([a-z]+\.)?'
								+ window.location.host.split('.').slice(-2).join('.')
							).test(event.origin);
				};
				if ( !_test() ) return;

				var data = JsonParse(event.data, {});

				if ( data.type != 'returnDataStorage' ) return;
				if ( data.key != me.key ) return;

				me.data = data.data;

				if (  typeof me.callback == 'function' ) {
					me.callback(me.data);
				}
				me.callback = null;
			}
			, initGet = function() {

				var iframe = getIframe();

				if ( !iframe ) return setTimeout( initGet, 100);

				iframe.postMessage(
						JSON.stringify({
							type: 'getDataStorage',
							key: me.key
						}),'*');
			}
			, init = function(){

				var iframe = getIframe();

				if ( !!iframe ) {
					setTimeout( initGet, 100);
				} else {
					setTimeout( init, 100);
				}
			}
		;

		if ( window.addEventListener ) {
			window.addEventListener("message", handler);
		} else {
			window.attachEvent('onmessage', handler);
		}
		init();
};


/**
 * MODULE: default FILE: visibility.core.min.js
 */
;(function(global){"use strict";var lastId=-1;var self={onVisible:function(callback){var support=self.isSupported();if(!support||!self.hidden()){callback();return support;}var listener=self.change(function(e,state){if(!self.hidden()){self.unbind(listener);callback();}});return listener;},change:function(callback){if(!self.isSupported()){return false;}lastId+=1;var number=lastId;self._callbacks[number]=callback;self._listen();return number;},unbind:function(id){delete self._callbacks[id];},afterPrerendering:function(callback){var support=self.isSupported();var prerender='prerender';if(!support||prerender!=self.state()){callback();return support;}var listener=self.change(function(e,state){if(prerender!=state){self.unbind(listener);callback();}});return listener;},hidden:function(){return !!(self._doc.hidden||self._doc.webkitHidden);},state:function(){return self._doc.visibilityState||self._doc.webkitVisibilityState||'visible';},isSupported:function(){return !!(self._doc.visibilityState||self._doc.webkitVisibilityState);},_doc:document||{},_callbacks:{},_change:function(event){var state=self.state();for(var i in self._callbacks){self._callbacks[i].call(self._doc,event,state);}},_listen:function(){if(self._init){return;}var event='visibilitychange';if(self._doc.webkitVisibilityState){event='webkit'+event;}var listener=function(){self._change.apply(self,arguments);};if(self._doc.addEventListener){self._doc.addEventListener(event,listener);}else{self._doc.attachEvent(event,listener);}self._init=true;}};if(typeof(module)!='undefined'&&module.exports){module.exports=self;}else{global.Visibility=self;}})(this);

/**
 * MODULE: default FILE: wp.polling.js
 */
/**
 * Long-polling client-side
 *
 * @author Solovjov
 */

window.WP.polling = {
	running: {},
	etag: 0,
	time: null,
	//subID: '',
	callback: '',
	xhr_p: null,

	start: function(params) {
		if(typeof(params.polling) != 'undefined'){
			WP.polling.init({chanel:params.polling.chanel, callback:params.polling.callback});
			return true;
		}
		else if (typeof WP.user_id != 'undefined' && WP.user_id>0) {
			WP.polling.init({chanel:'push-user-'+WP.user_id, callback:'actionPolling'});
			return true;
		}
		return false;
	},

	init: function (params) {
		if (!!params.chanel)
			var subID = params.chanel;
		else
			return false;

		//-- не даём запускать прослушку канала, уже открытого соединения
		if (this.running[subID])
			return false;

		if (!!params.callback)
			callback = params.callback;

		var $this = this, xhr;
		if ($this.time === null) {
			$this.time = $this.dateToUTCString(new Date());
		}
		if (window.XDomainRequest) {
			// Если IE, запускаем работу чуть позже (из-за бага IE8)
			setTimeout(function () {
				$this.poll_IE($this, subID, params.host);
			}, 2000);
		} else {
			// Создает XMLHttpRequest объект
			mcXHR = xhr = new XMLHttpRequest();
			xhr.onreadystatechange = xhr.onload = function () {
				if (4 === xhr.readyState) {
					// Если пришло сообщение
					if (200 === xhr.status && xhr.responseText.length > 0) {
						// Берем Etag и Last-Modified из Header ответа
						$this.etag = xhr.getResponseHeader('Etag');
						$this.time = xhr.getResponseHeader('Last-Modified');
						// Вызываем обработчик сообщения
						$this.action(callback, xhr.responseText);
					}
					if (404 === xhr.status) {
						return; /* Если страница не найдена, то оттуда уж точно ничего не придет */
					}

					if (xhr.status > 0) {
						// Если ничего не пришло повторяем операцию
						$this.poll($this, xhr, subID, params.host);
					}
				}
			};
			// Начинаем long polling
			$this.poll($this, xhr, subID, params.host);
			this.running[subID] = true;
		}

		return true;
	},
	poll: function ($this, xhr, subID, host) {
		var timestamp = (new Date()).getTime(),
			url = '/sub/' + subID + '?callfunc=' + callback + '&v=' + timestamp;
		if (!!host) {
			url = host + url;
		}
		// timestamp помогает защитить от кеширования в браузерах
		xhr.open('GET', url, true);
		xhr.setRequestHeader("If-None-Match", $this.etag);
		xhr.setRequestHeader("If-Modified-Since", $this.time);
		xhr.send();

		this.xhr_p = xhr;
	},
	// То же самое что и poll(), только для IE
	poll_IE: function ($this, subID, host) {
		var xhr = new window.XDomainRequest();
		var timestamp = (new Date()).getTime(),
			url = '/sub/' + subID + '?callfunc=' + callback + '&v=' + timestamp;
		if (!!host) {
			url = host + url;
		}
		xhr.onprogress = function () {
		};
		xhr.onload = function () {
			$this.action(callback, xhr.responseText);
			$this.poll_IE($this, subID, host);
		};
		xhr.onerror = function () {
			$this.poll_IE($this, subID, host);
		};
		xhr.open('GET', url, true);
		xhr.send();

		this.xhr_p = xhr;
	},
	close: function(){
		try {
			this.xhr_p.onreadystatechange = null;
			this.xhr_p.abort();
			this.xhr_p = null;
			this.running = {};
		}
		catch (e){
			console.log(e);
		}
	},
	pub: function(chanel_id, data){
		wp.request('/api/json/noticer/pushNote/', {chanel:chanel_id, data:data}, function(){
			//-- перезагружаем шапку, todo: а зачем???
			//$(document).trigger('refreshUserData');
		});
	},
	action: function (callback, data) {
		// получили сообщение, и теперь вызываем callback
		var dt = new Date().getTime();
		var test_data = this.parseData(data);
		var data_to_send = {};
		data_to_send[dt] = {callback:callback, data:data, dt:dt};

		//-- если пришел пуш на рабочий стол показываем его только если вкладка неактивна
		if (typeof test_data.desktop != 'undefined' && test_data.desktop && !!Visibility && Visibility.state()=='hidden'){
			WP.tabs.show_notes2desktop(test_data);
		}
		else {
			var url = window.location.pathname.split('/');
			if(url[1] != 'admin'){
				WP.tabs.set_moment(data_to_send);//{callback:{callback:callback, data:data, dt:dt}});
			} else {
				WP.polling._callFunction(callback, data);
			}
		}
		//WP.polling._callFunction(callback, data);
	},
	valueToTwoDigits: function (value) {
		return ((value < 10) ? '0' : '') + value;
	},
	parseData: function (value) {
		var text = JSON.parse(value);
		text = text.text.replace(/^=/, '');
		text = decodeURIComponent(text);
		text = text.replace(/\\'/g, "'");
		return JSON.parse(text);
	},
	// представление даты в виде UTC
	dateToUTCString: function (date) {
		var time = this.valueToTwoDigits(date.getUTCHours())
			+ ':' + this.valueToTwoDigits(date.getUTCMinutes())
			+ ':' + this.valueToTwoDigits(date.getUTCSeconds());
		return date.getUTCDay() + ', ' + this.valueToTwoDigits(date.getUTCDate()) + ' '
			+ date.getUTCMonth() + ' '
			+ date.getUTCFullYear() + ' ' + time + ' GMT';
	},
	// загрузка всплывающих уведомлений
	action_loadPushNotices: function(){

		if (WP.polling.p.doc_title!=null)
			document.title = WP.polling.p.doc_title;

		var t = this;
		wp.request('/api/json/noticer/getNewNotices/', {}, function(results){
			var notices = results.notices,
				push_block = $('div.jsn-push-notes');
			if (!push_block.hasClass('push-notes')){
				$('body').prepend('<div class="push-notes hidden jsn-push-notes"></div>');
				push_block = $('div.jsn-push-notes');
			}
			push_block.html('');

			//-- скрываем уведомление о том, что пишется сообщение
			$('div.jsn-write-message').remove();

			var isContinue = false;
			for (var j in notices){

				if (notices[j].type=='modal'){
					
					if ( isContinue ) continue;

					var params = JSON.parse(notices[j].params);

					// Make Footer Great Again
					var footer='<!--[FOOTER]-->'
						, header='<!--[/HEADER]-->';
					params.text = params.text||'';
					if ( !!!params.title && params.text.indexOf(header)>-1 ) {
						params.title = params.text.substring(0, params.text.indexOf(header));
						params.text = params.text.substring(params.text.indexOf(header)+header.length, params.text.length);
					}
					if ( params.text.indexOf(footer)>-1 ) {
						params.footer = params.text.substring(params.text.indexOf(footer), params.text.length);
						params.text = params.text.substring(0, params.text.indexOf(footer));
					}


					var markModalRead = function (t, modal, note_id){
						if (t!=null)
							TOOLS.loadButton(t, 1);
						var href = (t!=null && t.attr('href')!='undefined'?t.attr('href'):null);
						wp.request('/api/json/noticer/setNoticeRead/', {note_id:note_id}, function(results){
							$(document).trigger('pushNewNote2PageTitle', {show:0});
							if (href!=null && href!='#'){
								self.location = href;
							}
						});
						if (modal!=null)
							modal.close();
						return false;
					}

					// Height Control
					if (!device.mobile()){
						var _h = $(window).height()/2
							, _height = (_h<200)? 200 : _h
							;
					}
					else var _h = null;

					var delayModal = function(wmodal) {
						var mdl = wmodal[0]
							, _id = mdl.data('note-id')
						;

						var _ = mdl.find('.jsn-button-mark-close-delay')
							time = parseInt(_.data('delay'))||0
						;

						if ( time ) {
							$.cookie(
									'note_delay['+_id+']',
									_id,
									{
										expires: time/24,
										path: '/',
										domain:'.'+TOOLS.domain
									}
								);
						}
					};

					// Modal Control
					var	modal = wp.modal({
						size: params.modal_size||3,
						attr: 'data-modal-id="jsn-modal-'+notices[j].id+'" data-note-id="' + notices[j].id + '"',
						closeX: true,
						onbeforeclose: function(wmodal) {
							var mdl = wmodal[0];

							if ( mdl.find('.jsn-button-mark-close-delay').length>0 ){
								delayModal(wmodal);
							}
						},
						onopen: function(wmodal){
							var mdl = wmodal[0]
								, _id = mdl.data('note-id');

							if ( mdl.find('.jsn-button-mark-close-delay').length>0 ){
								$('.jsn-button-mark-close-delay').on('mousedown', function(e){
									delayModal(wmodal);
								});
							}
							if ( mdl.find('.jsn-dont-mark-read').length>0 ) {
								
								// nothing here
								
							} else if ( mdl.find('.jsn-button-mark-read').length>0 ) {

								$('.jsn-button-mark-read').click(function(e){
									markModalRead($(this), modal, _id);
								});

							} else {
								markModalRead(null, null, _id);
							}
						},
						box: {
							header: {
								content: params.title
							},
							body: {
								content: (_height!=null?'<div style="max-height: '+_height+'px; overflow: auto;">'+params.text+'</div>':params.text)
							},
							footer: {
								content: params.footer||null
							},
							buttons: []
						}
					});
					isContinue = true;
					//return false;
				}
				else {
					if (notices[j].seven_id!=''){
						var reg = new RegExp('\/'+notices[j].seven_id);
						if (reg.test(location.href)){
							continue;
						}
					}

					if (!push_block.find('[data-ntid="'+notices[j].id+'"]').html()){
						push_block.append(notices[j].html).removeClass('hidden');

						//-- пометка сообщения прочитанным
						push_block.find('.jsn-push-note:last').attr('data-ntid',notices[j].id).click(function(e){
							wp.request('/api/json/noticer/setNoticeRead/', {note_id:$(this).data('ntid')}, function(results){
								if (results.token == 'OrdersNewMessage') {
									t.pub('push-user-'+notices[j].user_id, {token:"OrdersNewMessage"});
								}
								$(document).trigger('pushNewNote2PageTitle', {show:0});
							});
						});
					}
				}
			}

		});
	},
	_callFunction: function(callback, data){

		try{
			WP.polling.triggers[callback](data);
		} catch(e) {
			console.log(e);
		}
	}
};
/*
$(document).click(function(){
	WP.polling.pub('push-user-338855', {callback:'_updatePageTitle'});
});*/

/**
 * Параметры/переменные для функций обратных вызовов
 * @type Object
 */
WP.polling.p = {
	doc_title : null,
	met_send : true,
	time_id : null,
	interval_id : null,
};

/**
 * Список триггеров и их обработчиков на совершаемые действия пользователя
 * @type Object
 */
WP.polling.triggers = {
	/**
	 * Общий обработчик всех входящих push-событий
	 * @param string data Строка входящих параметров
	 */
	actionPolling: function(data){
		if (!!data)
		{
			if (data.desktop){
				return true;
			}

			var input = WP.polling.parseData(data);
			if (!!input.token){

				//-- если пришли события по заявкам
				if (/^(cron_)?order/.test(input.token)){
					//-- если пришло и мы находимся на странице с сообщениями, то обновляем весь список
					if ($('.jsn-order-messages').length){
						//-- если заявка отклонена, перезагружаем страницу
						var reg = new RegExp('\/notices\/'+input.seven_id);
						if (reg.test(location.pathname)){
							try {
								//-- обновление плашки у переписки в списке переписок
								updateOrderVisual(input.seven_id, input.token, input.data);
							}
							catch(e){
								console.log(e);
							}
						}
					}
				}

				WP.polling.triggers._updatePageTitle();

				//-- обновляем шапку пользователя
				//-- если вкладка автивна, то сразу обновляем, иначе, ставим в очередь
				if (typeof (Visibility) !== undefined && Visibility.state()=='visible'){
				//	$(document).trigger('refreshUserData');
					//WP.polling.action_loadPushNotices();
				}
				else {
				//	WP.tabs.add_trigger('refreshUserData');
					WP.tabs.add_trigger('loadPushNotices');
				}
			}
			if (!!input.callback){
				WP.polling._callFunction(input.callback, input);
			}
		}
	},
	/**
	 * Триггер на отлов события набора текста пользователю
	 * @param Event e событие
	 * @param Object data
	 */
	writeToMe : function(e, data){
		if (WP.polling.p.met_send){
			WP.polling.pub('push-user-'+data.user_id, {callback:'_writeToMe', order_id:data.order_id});
			setTimeout(function(){
				WP.polling.p.met_send = true;
			}, 5000);
		}
		WP.polling.p.met_send = false;
	},
	_writeToMe: function(data){
		if (WP.polling.p.time_id!=null)
			clearTimeout(WP.polling.p.time_id);
		if (!$('div.jsn-write-message').length){
			var reg = new RegExp('\/notices\/'+data.order_id);
			if (reg.test(location.pathname)){ //$('.jsn-order-messages').length
				var text = tmpl('user-write-message-order');
				$('div.jsn-order-messages-only').after(text);
			}
			else {
				var text = tmpl('user-write-message');
				$('body').append(text);
			}
			$('div.jsn-write-message').hide().removeClass('hidden').fadeIn(500);
		}
		WP.polling.p.time_id = setTimeout(function(){
			$('div.jsn-write-message').remove();
		}, 6000);
	},

	/**
	 * Реакция на действие авторизации пользователя
	 */
	_setUserLogin: function(data){
		WP.tabs.add_trigger('refreshUserData');
	},
	/**
	 * Реакция на действие разавторизации пользователя. Будет открыто окно авторизации, и если оно закроется, то страница будет перезагружена
	 */
	_setUserLogout: function(data){
		WP.tabs.add_trigger('refreshUserDataWithReloadPage');
	},

	/**
	 * Реакция на push-уведомление с требованием перезагрузки шапки пользователя
	 */
	_refreshUser: function(data){
		//$(document).trigger('refreshUserData');
		WP.tabs.add_trigger('refreshUserData');
		WP.tabs.add_trigger('loadPushNotices');
		//$(document).trigger('polling.returnPageTitle');
	},

	/**
	 * Триггер на отлов события отправки сообщения
	 * @param Event e событие
	 * @param Object data
	 */
	wroteToMe : function(e, data){
		WP.polling.pub('push-user-'+data.user_id, {callback:'_wroteToMe', order_id:data.order_id, message:data.message}, function(){});
	},
	_wroteToMe: function(data){
		var reg = new RegExp('\/notices\/'+data.order_id);
		if (reg.test(location.pathname) && !!Visibility && Visibility.state()=='hidden'){
			//$('#jsn-last-message').before(TOOLS.base64_decode(data.message)).removeClass('hidden');
			WP.tabs.add_trigger('initMessagesOrder', {order_id:data.order_id});
		}
	},

	/**
	 * Триггер на отлов события обновления заявки/брони/переписке на соседних вкладках
	 * @param Event e событие
	 * @param Object data
	 */
	updateOrderToMe: function(e, data){
		WP.polling.pub('push-user-'+data.user_id, {callback:'_updateOrderToMe', order_id:data.order_id, message:data.message}, function(){});
	},
	_updateOrderToMe: function(data){
		var reg = new RegExp('\/notices\/'+data.order_id);
		if (reg.test(location.pathname) && !!Visibility && Visibility.state()=='hidden'){
			WP.tabs.add_trigger('initOrderData', {order_id:data.order_id});
		}
		//initOrderData(data.order_id);
	},

	/**
	 * Триггер на отлов события прочтения сообщения
	 * @param Event e событие
	 * @param Object data
	 */
	readToMe : function(e, data){
		//WP.polling.pub('push-user-'+data.user_id, {callback:'_readToMe', order_id:data.order_id, message:data.message}, function(){});
	},
	_readToMe: function(data){
		var reg = new RegExp('\/notices\/'+data.order_id);
		if (reg.test(location.pathname)){
			for (var i in data.mess_ids){
				var $tt = $('.media[data-mid="'+data.mess_ids[i]+'"] .message-data-left');
				if ($tt.length && !$tt.find('span.icon-wp-check').length){
					$tt.append(tmpl('message-check-read',{}));
				}
			}
		}
	},

	_updatePageTitle: function(){
		var n_cnt_new = parseInt($('.jsn-notices-cnt-new').text(),10);
		n_cnt_new = (!isNaN(n_cnt_new)) ? n_cnt_new+1 : 1;
		var doc_title = n_cnt_new +' '+ TOOLS.plural(n_cnt_new, [T.core.new_msg1,T.core.new_msg2,T.core.new_msg5]);

		$(document).trigger('pushNewNote2PageTitle', {show:1, doc_title:doc_title});
	},
	returnPageTitle: function(){
		WP.user_id = WP.user_id || null;
		if (WP.user_id!=null){
			WP.tabs.set_moment({callback:'_returnPageTitle'});
			//WP.polling.pub('push-user-'+WP.user_id, {"callback":'_returnPageTitle'}, function(){});
		}
	},
	_returnPageTitle: function(){
		if (WP.polling.p.doc_title!=null){
			clearInterval(WP.polling.p.interval_id);
			WP.polling.p.interval_id = null;

			document.title = WP.polling.p.doc_title;
			WP.polling.p.doc_title = null;
		}
	},

	/**
	 * Отлов события изменения списка приоритетов
	 * @param {type} data
	 * @returns {undefined}
	 */
	_pushTopList: function(data){
		$(window).trigger('changedPriorityList');
	},
	/**
	 * Отлов события изменения занятости отеля
	 * @param {Array} data - данные события
	 */
	_pushHotelCalendar: function(data) {
		// Подписываемся на событие
		// document.addEventListener('_pushHotelCalendar-toVue', function (e) { 
		// 	console.log(e.detail)
		// }, false);
		if(!document.cookie.includes(data.__UID_VUE) && document.cookie.includes("__UID_VUE") || !data.__UID_VUE) {
			var event = new CustomEvent('_pushHotelCalendar-toVue', {
				detail: data
			});
			document.dispatchEvent(event);
		}
	}
}

/**
 * Регистрация триггеров всех существующих событий polling
 */
$(function(){
	for(var k in WP.polling.triggers) {
		if ( k.substring(0,1)=='_' ) continue;
		$(document).on('polling.'+k, WP.polling.triggers[k]);
	}
});


$(function(){
	try{
		Visibility.change(function (e, state) {
			//-- окно активно
			if (state=='visible'){
				WP.tabs.go_triggers();
			}
			else {
				//document.title = 'неактивно';
			}
			if (WP.polling.p.doc_title!=null)
				WP.polling.triggers._returnPageTitle();
		});
	}
	catch(e){
		// console.log(e);
	}

	$(document).on('pushNewNote2PageTitle', function(e, data){
		if (data.show && !!Visibility && Visibility.state()=='hidden') {
			if (WP.polling.p.doc_title==null)
				WP.polling.p.doc_title = document.title;

			var k = 0;
			if (WP.polling.p.interval_id==null){
				WP.polling.p.interval_id = setInterval(function(){
					k++;
					if (k%2){
						document.title = data.doc_title;
					}
					else {
						document.title = '**************';
					}
				}, 500);
			}
			else {
				clearInterval(WP.polling.p.interval_id);
				WP.polling.p.interval_id = null;
			}
		}
		else if (WP.polling.p.doc_title!=null) {
			$(document).trigger('polling.returnPageTitle');
		}
	});
});


/**
 * MODULE: default FILE: wp.push.js
 */
/**
 * Browser Notification API
 *
 * @author Solovjov
 */

WP.push = {

	defaults: {
		icon: 'https://static.sutochno.ru/doc/i/logo_100.png',
		dir: 'auto',
	},
	messaging: null,

	init: function(){
		var _t = this;

		firebase.initializeApp({
			apiKey: "AIzaSyCAGPh-V1pVQ20CcakqMbcju3a4iwOoPRs",
			authDomain: "seraphic-plexus-477.firebaseapp.com",
			databaseURL: "https://seraphic-plexus-477.firebaseio.com",
			projectId: "seraphic-plexus-477",
			storageBucket: "seraphic-plexus-477.appspot.com",
			messagingSenderId: "440295731200",
			appId: "1:440295731200:web:82818edd66c5ae2c"
		});

		_t.messaging = firebase.messaging();

		_t.messaging.onMessage(function (payload) {
			new Notification(payload.notification.title, payload.notification);
		});
	},

	testBrowser: function(){
		if (!(
			   'Notification' in window &&
			   'serviceWorker' in navigator &&
			   'localStorage' in window
		)) {
			console.log('Browser isnt supported Notification API!');
			return false;
		}

		return true;
	},

	getToken: function(){
		var _t = this;

		_t.messaging.getToken()
			.then(function (currentToken) {
				console.log(currentToken);

				if (currentToken) {
					_t.sendTokenToServer(currentToken);
				} else {
					console.log('Токен уже отправлен на сервер.');
				}
			})
			.catch(function (err) {
				console.warn('При получении токена произошла ошибка.', err);
				_t.setTokenSentToServer(false);
			});
	},

	deleteToken: function(){
		var _t = this;

		_t.messaging.deleteToken()
			.then(function() {
				_t.setTokenSentToServer(false);
				console.log('Токен удален.');
			})
			.catch(function(error) {
				console.error('Unable to delete token', error);
			});
	},

	sendTokenToServer: function(currentToken) {
		var _t = this;

		if (!_t.isTokenSentToServer(currentToken)) {
			var oldToken = window.localStorage.getItem('sentFirebaseMessagingToken');
			_t.removeTokenOnServer(oldToken);

			wp.request('/api/json/users/setPushToken/', {pushToken: currentToken}, function(data){
				if (oldToken === null){
					_t.sendNoteFirst();
				}

				_t.setTokenSentToServer(currentToken);
			});
		} else {
			console.log('Токен уже отправлен на сервер.');
		}
	},

	removeTokenOnServer: function(token) {
		if (token) {
			wp.request('/api/json/users/removePushToken/', {pushToken: token}, function(data) {
				this.setTokenSentToServer(false);

				console.log('Удален старый токен: ' + token);
			});
		}
	},

	isTokenSentToServer: function(currentToken) {
		return window.localStorage.getItem('sentFirebaseMessagingToken') == currentToken;
	},

	setTokenSentToServer: function(currentToken) {
		if (currentToken) {
			window.localStorage.setItem('sentFirebaseMessagingToken', currentToken);
		} else {
			window.localStorage.removeItem('sentFirebaseMessagingToken');
		}
	},

	/*
	{
		'body': 'Москва, Арбат улица, 32',
		'icon': 'http://static.sutochno.ru/doc/files/objects/0/56/821/small/138233990546613900.jpg',
		'tag': 'ordersnewbookingowner',
		'requireInteraction': true,
		'silent': false,
		'dir': 'auto'
	}*/
	//-- показ конкретного оповещения
	sendNote: function(title, data, url){
		var notification = new Notification(title, data);
		if (typeof url != 'undefined'){
			notification.onclick = function(event) {
				event.preventDefault();
				window.open(url, '_blank');
			}
		}
	},

	//-- показ первого/ознакомительного оповещения
	sendNoteFirst: function(){
		this.sendNote("Оповещения от Суточно.ру", {
			'body': 'Вскоре здесь будут появляться важные оповещения',
			'icon': this.defaults.icon,
			'dir': this.defaults.dir,
			'requireInteraction': true,
			'silent': false,
			'tag': 'first',
		});
	}
}

let isExecute = false;
$(document).on('user_load_data', function(){
	if (wp.user_id && wp.push.testBrowser() && !isExecute) {
		const currentToken = window.localStorage.getItem('sentFirebaseMessagingToken');

		isExecute = true;
		if (Notification.permission !== 'denied') {
			$.getScript( "//www.gstatic.com/firebasejs/8.7.1/firebase-app.js", function(){
				$.getScript( "//www.gstatic.com/firebasejs/8.7.1/firebase-messaging.js", function(){
					wp.push.init();

					//-- на поддоменах не запрашиваем разрешение на отправку уведомлений
					var existsSubdomain = (location.hostname.match(/\./g) || []).length > 1;
					if (!existsSubdomain) {
						wp.push.getToken();
					}
				});
			});
		} else if (currentToken !== null) {
			wp.push.removeTokenOnServer(currentToken);
		}
	}
});


/**
 * MODULE: default FILE: enoughContacts.js
 */
/**
 *
 * Окно с требованием добавления номера телефона при авторизации через соц.сети
 *
 */

// *****************************************************************************

var OriginalArrayJoin = Array.prototype.join;

Array.prototype.join = function( separator, func ) {

	if ( typeof func !== 'function' ) {
		return OriginalArrayJoin.apply( this, arguments );
	}

	var _ = [];
	for( var i=0; i<this.length; i++ ) {
		_.push( func( this[i] ) );
	}
	return _.join(separator||',');
};

// *****************************************************************************


(function startEnoughContacts() {

	$(document).on('enoughContactsAfterSocialLogin', function(){

		var _enoughContacts = new enoughContacts();
		$(_enoughContacts.init);
	});
})();

/**
 * Управление вызовом модального окна
 */
function enoughContacts() {

	var me = this;

	this.url = '/api/json/users/checkEnoughContacts/';
	this.xhr = null;
	this.manager = null;

	this.init = function() {

		// подписываемся на событие авторизации
		$(document).on('user_authenticated', me.listenerLogin);

		// подписываемся на событие разавторизации
		$(document).on('refreshUserDataWithReloadPage', me.listenerLogout);

		setTimeout( me.listenerLogin, me.auth()? 0 : 500);
	};

	this.auth = function(){
		return (wp.user_id||null);
	};

	this.listenerLogin = function () {

		me.check();
	};
	this.listenerLogout = function () {

		me.resetXhr();
		me.endManager();
	};

	this.check = function() {

		this.resetXhr();
		this.xhr = wp.request( this.url, this.callback );
	};

	this.callback = function( data ) {

		if ( !!data.enough ) return;

		// ввод номера телефона с кодом
		js.include('input_phones');

		if ( me.manager ) return me.startManager(data);

		var _clb = function(){
				me.manager = new enoughContactsManager();
				me.startManager(data);
			};

		if ( typeof enoughContactsManager != 'function' ) {

			// load_script();
			// script.onload = _clb;

		} else {
			_clb();
		}
	};

	this.startManager = function(data) {

		this.manager.start(data);
	};
	this.endManager = function() {

		this.manager&&this.manager.end();
	};

	this.resetXhr = function(){

		this.xhr&&this.xhr.abort();

		delete this.xhr;
		this.xhr = null;
	};
}

/**
 * Управление визуальной частью модального окна
 */
function enoughContactsModal( data ) {

	var me = this;

	this.modal = null;

	var _t = data&&data.translation
		, typeOfEnter = data&&data.enter_from||'';

	this.t = {

		'your_enter_from'	: _t.soc_your_enter_from,
		'button_first'		: _t.soc_button_first,
		'button_last'		: _t.soc_button_last,
		
		_1		: _t.soc_for_continue_work_with_site,
		_2_1	: _t.soc_send_password_to_cell_phone_1,
		_2_2	: _t.soc_send_password_to_cell_phone_2,
		_3		: _t.soc_already_registered,
		_4		: _t.soc_number_cell_phone,
		_5		: T.core.auth_enter_pwd, //'Введите пароль',
		_6		: _t.auth_i_agree_with_terms_1,
		_7		: _t.auth_i_agree_with_terms_2,
		_71		: _t.auth_rules_link,
		_8		: _t.soc_forgot_password_question,
		//_9: 'Пароль не пришёл',
		_10		: _t.soc_password_delivered_question,
		_11		: _t.auth_get_pwd_again,
		_12		: _t.auth_request_new_pwd_in,
		_13		: _t.soc_incorrect_phone
	};

	this.typeOfEnter = {
			'vk' : _t.vk,
			'fb' : _t.fb,
			'ok' : _t.ok,
			'ml' : _t.ml,
			'gg' : _t.gg,
			'ya' : _t.ya,
			'tw' : _t.tw
		}[typeOfEnter]||'';

	this.callbacks = {
		open: null,
		close: null,
		click: null
	};
	this.elements = {
		'body'		: null,
		'message'	: null,
		'error'		: null,
		'button'	: null
	};

	this.statuses = [
		'give me password please',
		'give me code please',
		'give me code',
		'give me terms'
	];
	this.currentStatus = null;
	this.idTimer = null;

	this.openModal = function() {

		if ( this.modal ) return;

		this.modal = window.WP.modal( this.modalStruct() );
	};

	this.closeModal = function () {

		me.modal && me.modal.close();

		me.close();
	};
	this.close = function () {

	// TODO: почему-то вызывается два раза
		if ( me.modal) {
			
			// удаляем маску для номера телефона
			me.elements.body.find('.js-countries-phone-codes').input_phones('destroy');

			me.modal = null;
			if ( me.callbacks.close ) {
				me.callbacks.close();
			}
		}
	};

	this.onopen = function() {
		var _box = me.modal.box;

		me.elements = {
			'body'		: _box.body.find('.jsn-enough-contacts-wrapper').eq(0),
			'error'		: _box.body.find('.jsn-enough-contacts-error').eq(0),
			'message'	: _box.body.find('.jsn-enough-contacts-message').eq(0),
			'button'	: _box.body.find('.js-enough-button').click(me.onclick)
		};

		me.elements.body.find('.jsn-tmr-resend-code').click( me.resendCode );
		me.elements.body.find('.jsn-tmr-resend-password').click( me.resendPassword );

		me.elements.body.find('.jsn-tmr-resend-password-one')
				.click(
					function(){
						$(this).parent().remove();
						return me.resendPassword();
					});

		if ( me.callbacks.open ) {
			me.callbacks.open();
		}
		// маска для номера телефона
		me.elements.body.find('.js-countries-phone-codes').input_phones().focus();
	};

	this.onclick = function () {

		var formData = me.getValues();
		formData.status = me.currentStatus;

		me.clickCallback( formData );
	};

	this.clickCallback = function( formData ) {

		me.resetError();
		me.resetMessages();

		if ( formData.phone.length < 10 ) {
			return me.setError(me.t._13);
		}
		if ( me.callbacks.click ) {
			me.callbacks.click( formData );
		}
	};

	this.getValues = function ( name ) {

		return TOOLS.getFormData( me.elements.body );
	};

	this.setValues = function ( ) {

	};

	this.resetStatus = function() {

		this.elements.body.removeClass( this.statuses.join(', ', this._fStatus) );
		this.elements.button.html( this.t.button_first ).val( this.t.button_first );

		this.currentStatus = null;
		this.elements.body.find('.js-countries-phone-codes').focus();
	};

	this.setStatus = function ( status ) {

		this.elements.body
				.removeClass( this.statuses.join(', ', this._fStatus) )
				.addClass( this._fStatus(status) );

		this.elements.button
				.html( this.t.button_last )
				.val( this.t.button_last );

		this.currentStatus = status;
		me.elements.body.find('.js-input-phone-code').focus();

		if ( status == 'give me code' || status == 'give me code please' ) {
			me.elements.body.find('.js-enough-contacts-footer').show();
		}
	};

	this._fStatus = function(a) {

		return 'js-' + a.toString().replace(/\s/g, '-' );
	};

	this.setError = function ( data ) {
		me.elements.error.html(data)[data? 'show':'hide']();
	};

	this.setMessages = function ( data ) {

		me.elements.message.html(data)[data? 'show':'hide']();
	};

	this.resetError = function () {
		this.setError(null);
	};

	this.resetMessages = function () {
		this.setMessages(null);
	};

	this.setPhone = function( phone ) {
		if ( !phone ) return;
		me.elements.body.find('.jsn-enough-contacts-code-needed-value').html( phone.replace(/\s/g, '&nbsp;') );
	};

	this.setTimeout = function( timeout ) {

		me.elements.body.find('.jsn-tmr-cntdn').each(function(){

			var tm = Number( timeout ), _ = tm>0;
			$(this)
				.attr('data-timeout', tm)
				.find('span')
				.eq(0)[ _? 'hide':'show']()
				.end()
				.eq(1)[ _? 'show':'hide']()
				.find('span').eq(0)
				.html( TOOLS.getTimeDigits(tm, 'm:ss') );
		});

	};

	this.startTimeout = function( timeout ) {

		me.setTimeout( timeout );
		TIMER.deleteCallback( 1, me.idTimer );
		me.idTimer = TIMER.addCallback( 1, me.tick );
		me.elements.body.find('.js-enough-contacts-footer').show();
	};

	this.tick = function() {

		var tm = Number( me.elements.body.find('.jsn-tmr-cntdn').eq(0).attr('data-timeout') ) - 1;

		me.setTimeout( tm );

		if ( tm<=0 ) {
			TIMER.deleteCallback( 1, me.tick );
			me.idTimer = null;
		}
	};

	this.resendCode = function() {

		if ( me.idTimer ) return false;

		me.elements.body.find('.js-input-phone-code').val('');

		var formData = me.getValues();
		formData.status = '';

		me.clickCallback( formData );

		return false;
	};
	
	this.resendPassword = function() {

		if ( me.idTimer ) return false;

		me.elements.body.find('.js-input-phone-code').val('');

		var formData = me.getValues();
		formData.status = 'remind';
		formData.values = formData.phone;

		me.clickCallback( formData );

		return false;
	};

	this.modalStruct = function () {

		return {
			size: 1
			, className: 'modal-enough-contacts'
			, onopen: this.onopen
			, closeX: true
			, onclose: this.close
			, box: {
				header: { 
					content: this.t.your_enter_from + ' ' + this.typeOfEnter
				}
				, body: { 
					content:
						'<div class="jsn-enough-contacts-wrapper">'
							+ '<div class="jsn-enough-contacts-phone-needed">'
								+ '<p class="text-xsmall">'
									+ this.t._1
								+ '</p>'
							+ '</div>'
							+ '<div class="js-enough-contacts-code-needed">'
								+ '<p class="text-small">'
									+ this.t._2_1 + ' <span class="jsn-enough-contacts-code-needed-value"></span> ' + this.t._2_2
								+ '</p>'
							+ '</div>'
							+ '<div class="js-enough-contacts-password-needed">'
								+ '<p class="text-xsmall">'
									+ this.t._3
								+ '</p>'
							+ '</div>'
							+ '<div class="js-enough-contacts-phone">'
								+ '<div class="form-group">'
									+ '<input name="phone" class="form-control js-countries-phone-codes" type="text" value="" placeholder="' + this.t._4 + '" />'
								+ '</div>'
							+ '</div>'
							+ '<div class="js-enough-contacts-code">'
								+ '<div class="form-group">'
									+ '<input name="code" class="form-control js-input-phone-code" type="text" value="" placeholder="' + this.t._5 + '" />'
								+ '</div>'
							+ '</div>'
							+ '<p class="enough-contacts-error text-xsmall jsn-enough-contacts-error"></p>'
							+ '<p class="text-xsmall jsn-enough-contacts-message"></p>'
							+ '<div class="js-enough-contacts-terms">'
								+ '<div class="checkbox">'
									+ '<input type="checkbox" id="agreement" name="terms" value="1">'
									+ '<label for="agreement">'
										+ this.t._6 + ' <br/>'
										+ '<a href="'+ this.t._71 +'" target="_blank">'
											+ this.t._7
										+ '</a>'
									+ '</label>'
								+ '</div>'
							+ '</div>'

								+ '<div class="enough-contacts-remember clearfix">'
									+ '<a href="#" class="text-small pull-right jsn-tmr-resend-password-one">'
										+ '<span>' + this.t._8 + '</span>'
									+ '</a>'
								+ '</div>'

							+ '<div class="enough-buttons">'
								+ '<button type="button" class="btn btn-primary btn-block js-enough-button">' + this.t.button_first + '</button>'
							+ '</div>'
							+ '<div class="enough-footer js-enough-contacts-footer" style="display: none;">'
								+ '<p class="text-small text-center js-enough-contacts-resend-password jsn-tmr-cntdn">'
									+ '<span style="display: none;">' + this.t._10 + ' <a href="#" class="jsn-tmr-resend-password">' + this.t._11 + '</a></span>'
									+ '<span style="display: none;">' + this.t._12 + ' <span></span><span>'
								+ '</p>'
								+ '<p class="text-small text-center js-enough-contacts-resend-code jsn-tmr-cntdn">'
									+ '<span>' + this.t._10 + ' <a href="#" class="jsn-tmr-resend-code">' + this.t._11 + '</a></span>'
									+ '<span>' + this.t._12 + ' <span></span><span>'
								+ '</p>'
							+ '</div>'
					+ '</div>'
				}
/* поле для пароля - js есть в auth.js стр 393
+ '<div class="form-group auth-login ">'
	+ '<div class="input-group">'
		+ '<input class="form-control auth-input-password" type="password" name="password" value="" placeholder="Введите пароль" autocomplete="off">'
		+ '<div class="input-group-addon input-group-addon-password no-pd">'
			+ '<div class="control-password js-hideShowPassword-toggle">'
				+ '<div class="icon-wp icon-wp-show-pass js-icon-pass"></div>'
			+ '</div>'
		+ '</div>'
	+ '</div>'
	+ '<div class="js-auth-elm js-auth-errors auth-errors text-xsmall text-danger">'
		+ '<p class="bg-danger text-left">'

		+ '</p>'
	+ '</div>'
+ '</div>'
*/
				, footer: {

				}
			}
		};
	};
}

/**
 * Управление запросами к серверу и обработка результатов
 */
function enoughContactsManager() {

	var me = this;

	this.modal = null;
	this.xhr = null;

	this.url = {
		addPhone : '/api/json/users/addMobileToNotAuthUser/',
		resetData: '/api/json/users/clearSocialAccountData/'
	};

	this.start = function (data) {

		if ( this.modal ) return;

		this.modal = new enoughContactsModal( data||{} );

		this.modal.callbacks.close = this.closeModalCallback;
		this.modal.callbacks.click = this.send;

		this.modal.openModal();
	};

	this.end = function () {
		me.resetXhr();
		me.closeModal();
	};

	this.closeModal = function() {

		//me.modal && me.modal.closeModal();
		me.closeModalCallback();
	};
	
	this.closeModalCallback = function() {

		me.modal = null;
		wp.request( me.url.resetData );
	};

	this.send = function( formData ) {

		me.resetXhr();

		me.xhr = wp.request(
				me.url.addPhone,
				formData,
				{
					success: me.clbSuccess
					, data: me.clbData
					, actions: me.clbActions
					, errors: me.clbErrors
				}
			);
	};

	this.resetXhr = function () {
		try{ me.xhr&&me.xhr.abort(); }catch(e){}
		me.xhr = null;
	};

	this.clbSuccess = function(data) {

		me.closeModal();

		setTimeout( TOOLS.gotoUrl, 200 );
	};

	this.clbData = function(data, success) {
		if ( success ) return;

		if ( !!(data.messages&&data.messages.phone) ) {
			me.modal.setPhone(data.messages.phone);
		}

		if ( !!data.timeout ) {

			me.modal.startTimeout( data.timeout );
		}
		if ( !!data.messages ) {

			me.modal.setMessages(data.messages.forgot||data.messages.already||data.messages.timeout||'');
		}
	};

	this.clbActions = function(actions, success) {
		if ( success ) return;

		me.modal.setStatus( actions.auth||'' );
	};

	this.clbErrors = function(errors) {

		if ( errors && errors.length ) {
			me.modal.setError( errors.join('<br/>') );
			return false;
		}
	};

}


/**
 * MODULE: search FILE: searchformtemplate.js
 */
$(function () {
	$('.js-search-form').on('submit', function (e) {
		e.preventDefault();
		return false;
	});
	$('.js-search-input').keyup(function(){
		if ($(window).width() < 768) {
			$('.search-form-info-city').addClass('hidden');
		}
	});
	var $hidden = $('.js-city-or-object');
	var $searchInput = $('.js-search-input'),
		$maxGuestsSelect = $('#max_guests_max_guests')
	;

	function createSearchEngine($searchInput) {
		function toRussianKeyboardMapTokenizer() {
			var translations = {
				"`": "ё", "~": "Ё",
				"q": "й", "w": "ц", "e": "у", "r": "к", "t": "е", "y": "н", "u": "г", "i": "ш", "p": "з", "[": "х", "]": "ъ",
				"a": "ф", "s": "ы", "d": "в", "f": "а", "g": "п", "h": "р", "j": "о", "k": "л", "l": "д", ";": "ж", "'": "э",
				"z": "я", "x": "ч", "c": "с", "v": "м", "b": "и", "n": "т", "m": "ь", ",": "б", ".": "ю",

				"Q": "Й", "W": "Ц", "E": "У", "R": "К", "T": "Е", "Y": "Н", "U": "Г", "I": "Ш", "P": "З", "{": "Х", "}": "Ъ",
				"A": "Ф", "S": "Ы", "D": "В", "F": "А", "G": "П", "H": "Р", "J": "О", "K": "Л", "L": "Д", ":": "Ж", ':': "Э",
				"Z": "Я", "X": "Ч", "C": "С", "V": "М", "B": "И", "N": "Т", "M": "Ь", "<": "Б", ">": "Ю"
			};
			var replaceEnglishSymbol = function (symbol) {
				return translations[symbol] || symbol;
			};
			var toRussianKeyboardMap = function (str) {
				return str.split("").map(replaceEnglishSymbol).join("");
			};
			return function (query) {
				return Bloodhound.tokenizers.whitespace.call(this, toRussianKeyboardMap(query));
			};
		}

		function transform(response) {
			var suggestions = [];
			if (response.data && response.data.suggestions) {
				suggestions = response.data.suggestions;
			}
			return suggestions;
		}

		function webpowerTransport(options, onSuccess, onFail) {
			webpower
				.request(options.url, { query: options.query })
				.done(onSuccess)
				.fail(onFail);
		}

		function prepare(query, settings) {
			settings.query = query;
			return settings;
		}

		function getEngineCacheSettings($searchInput) {
			var cacheData = $searchInput.data('cache');
			cSettings = {};
			if (cacheData && cacheData.length) {
				cSettings['local'] = cacheData;
			}
			return cSettings;
		}

		function getMethodURL() {
			var cookieValue = $.cookie('admin_disableSearchAppMode');
			var trySearchApp =  !cookieValue || cookieValue == 0;
			var url = '/api/rest/search/getTermSuggestions?query=%QUERY';

			if (!trySearchApp) {
				return url;
			}

			url += '&urlStyle=searchApp';

			return url;
		}

		var engineSettings = $.extend({}, getEngineCacheSettings($searchInput), {
			remote: {
				url: getMethodURL(),
				transport: webpowerTransport,
				wildcard: '%QUERY',
				transform: transform
			},
			identify: function (obj) {
				return [obj.id, obj.title].join(':');
			},
			queryTokenizer: toRussianKeyboardMapTokenizer(),
			datumTokenizer: Bloodhound.tokenizers.obj.whitespace('title'),
			sorter: function(obj1, obj2) {
				return obj2.count - obj1.count;
			}
		});

		return new Bloodhound(engineSettings);
	}
	$searchInput.typeahead(
		{
			autoselect: true,
			hint: true,
			highlight: false,
			minLength: 2,
		},
		{
			displayKey: function (item) {
				return item.title;
			},
			sorter: function(obj1, obj2) {
				return obj2.count - obj1.count;
			},
			source: createSearchEngine($searchInput),
			templates: {
				suggestion: function (item) {
					var squareParts = [];
					var suggestionType = item.type || 'city';

					switch (suggestionType) {
						case 'country':
							break;
						case 'region':
							item.country && squareParts.push(item.country);
							break;
						case 'city':
							item.country && squareParts.push(item.country);
							item.country && squareParts.push(item.region);
							break;
						case 'sight':
							item.city && squareParts.push(item.city);
							break;
					}
					var squareString = (squareParts.length > 0) ? '<div class="tt-suggestion-item tt-suggestion-item-region text-muted">' + squareParts.join(', ') + '</div>' : '';
					var format = function (value) {
						var result = parseInt(value);
						if (isNaN(result)) {
							result = 0;
						}
						return result.number_format('2', '.', ' ');
					};
					if (typeof item.count === 'undefined') {
						return '<div class="tt-suggestions-object clearfix">' + item.title + '</div>';
					} else if (item.type === 'sight') {
						return '<div class="tt-suggestions-object clearfix">' + '<div class="tt-suggestion-item tt-suggestion-item-name">' + item.title + '</div>' + squareString + '</div>';
					} else {
						return '<div class="tt-suggestions-object clearfix">' + '<div class="tt-suggestion-item tt-suggestion-item-name">' + item.title + '</div>' + '<div class="tt-suggestion-item tt-suggestion-item-count text-right">' + format(item.count) + '</div>' + squareString + '</div>';
					}
				},
				empty: function (empty) {
					try {
						var $ta = $('<textarea/>').text(empty.query);
						var escaped = $ta.html();
					} catch (e) { }

					if (typeof escaped === 'undefined') {
						escaped = empty.query
					}
					return '<span class="empty-message-typeahead">' + T.search.found_nothing + ': ' + escaped + '</span>';
				}
			},
		}
	)
		.on('typeahead:selected', function (e, suggestion, dataset) {
			if ($('.main-form-search').length !== 0) {
				var $input = $('.js-search-input');
				$input.data('attr-url', suggestion.url);
				$input.data('attr-suggestion', suggestion);
				return false;
			}

			var parser = document.createElement('a');
			parser.href = window.location.protocol + suggestion.url;
			var sign = parser.search === "" ? '?' : '&';
			parser.search += sign + 'term=' + $searchInput.val() + '&from=otherpage';
			window.location.href = parser;

			return false;
		}).on('typeahead:render', function (e, data) {
			var $el = $('.js-search-form').find('.tt-selectable:first');
			$el.addClass('tt-cursor');
			$('.js-search-form').on('submit', function (e) {
				if (arguments.length - 1 === 1 ) {
					$el.trigger('click');
				}
			});
		})
		.on('typeahead:open', function (e, suggestion, dataset) {
			if (!device.desktop()) {
				scrollToElement(e.currentTarget);
			}
		})
		$('body').on('click', '.js-info-city', function(e){
			var current_val = $(this).text();
			var seacrhfield = $(this);
			$('.js-search-input').data('attr-url', seacrhfield.data('url'));
			$('.js-search-input').data('attr-suggestion', seacrhfield.data('suggestion'));
			$searchInput.val(current_val);
			$('.js-search-form pre').text(current_val);
			$('.typeahead').typeahead('val', current_val);
			e.preventDefault();
			return false;
		});


	if (!!$.cookie('filter_guests')){
		$("#max_guests_max_guests option:selected").attr('selected', false);
		$("#max_guests_max_guests [value='"+$.cookie('filter_guests')+"']").attr('selected', true);
	}

	$maxGuestsSelect.change(function(){
		var guests = +$(this).children('option:selected').val();
		TOOLS.setGuestsInCookie(guests);
	});
});

function hrefRedirectSearchApp(event, idObject, idHotel, params, url) {
	if(window.location.search.includes("re=n") || $.cookie('admin_disableSearchAppMode') == "1") return;
	if(event !== "href") {
		event.preventDefault();
		event.stopPropagation();
	}
	var pathSearchApp;
	var mainDomain = /(\w+)\.?(\w+$)/.exec(location.host)[0];
	var location_type = $('.js-search-location-type').val(); // FIXME: получено напрямую
	var location_id = $('.js-search-location-id').val(); // FIXME: получено напрямую

	if (params.substr(0,1) != "&") {
		params = "&"+params;
	}
	if(Number.isNaN(parseInt(idHotel))) {
		pathSearchApp = `/front/searchapp/detail/${idObject}?type=${location_type}&id=${location_id}${params}`;
	} else {
		pathSearchApp = `/front/searchapp/hotels/${idHotel}?type=${location_type}&id=${location_id}${params}`;
	}
	window.open(
		location.protocol + "//" +mainDomain + pathSearchApp,
		'_blank' // <- This is what makes it open in a new window.
	);
}


