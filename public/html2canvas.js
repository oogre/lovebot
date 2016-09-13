/*
  html2canvas 0.5.0-beta3 <http://html2canvas.hertzen.com>
  Copyright (c) 2016 Niklas von Hertzen

  Released under  License
*/
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;"undefined"!=typeof window?n=window:"undefined"!=typeof global?n=global:"undefined"!=typeof self&&(n=self),n.html2canvas=e()}}(function(){var e;return function n(e,f,o){function d(t,l){if(!f[t]){if(!e[t]){var s="function"==typeof require&&require;if(!l&&s)return s(t,!0);if(i)return i(t,!0);var u=new Error("Cannot find module '"+t+"'");throw u.code="MODULE_NOT_FOUND",u}var a=f[t]={exports:{}};e[t][0].call(a.exports,function(n){var f=e[t][1][n];return d(f?f:n)},a,a.exports,n,e,f,o)}return f[t].exports}for(var i="function"==typeof require&&require,t=0;t<o.length;t++)d(o[t]);return d}({1:[function(n,f,o){(function(n){!function(d){function i(e){throw RangeError(I[e])}function t(e,n){for(var f=e.length;f--;)e[f]=n(e[f]);return e}function l(e,n){return t(e.split(H),n).join(".")}function s(e){for(var n,f,o=[],d=0,i=e.length;i>d;)n=e.charCodeAt(d++),n>=55296&&56319>=n&&i>d?(f=e.charCodeAt(d++),56320==(64512&f)?o.push(((1023&n)<<10)+(1023&f)+65536):(o.push(n),d--)):o.push(n);return o}function u(e){return t(e,function(e){var n="";return e>65535&&(e-=65536,n+=L(e>>>10&1023|55296),e=56320|1023&e),n+=L(e)}).join("")}function a(e){return 10>e-48?e-22:26>e-65?e-65:26>e-97?e-97:k}function p(e,n){return e+22+75*(26>e)-((0!=n)<<5)}function c(e,n,f){var o=0;for(e=f?K(e/B):e>>1,e+=K(e/n);e>J*z>>1;o+=k)e=K(e/J);return K(o+(J+1)*e/(e+A))}function y(e){var n,f,o,d,t,l,s,p,y,m,r=[],v=e.length,w=0,b=D,g=C;for(f=e.lastIndexOf(E),0>f&&(f=0),o=0;f>o;++o)e.charCodeAt(o)>=128&&i("not-basic"),r.push(e.charCodeAt(o));for(d=f>0?f+1:0;v>d;){for(t=w,l=1,s=k;d>=v&&i("invalid-input"),p=a(e.charCodeAt(d++)),(p>=k||p>K((j-w)/l))&&i("overflow"),w+=p*l,y=g>=s?q:s>=g+z?z:s-g,!(y>p);s+=k)m=k-y,l>K(j/m)&&i("overflow"),l*=m;n=r.length+1,g=c(w-t,n,0==t),K(w/n)>j-b&&i("overflow"),b+=K(w/n),w%=n,r.splice(w++,0,b)}return u(r)}function m(e){var n,f,o,d,t,l,u,a,y,m,r,v,w,b,g,h=[];for(e=s(e),v=e.length,n=D,f=0,t=C,l=0;v>l;++l)r=e[l],128>r&&h.push(L(r));for(o=d=h.length,d&&h.push(E);v>o;){for(u=j,l=0;v>l;++l)r=e[l],r>=n&&u>r&&(u=r);for(w=o+1,u-n>K((j-f)/w)&&i("overflow"),f+=(u-n)*w,n=u,l=0;v>l;++l)if(r=e[l],n>r&&++f>j&&i("overflow"),r==n){for(a=f,y=k;m=t>=y?q:y>=t+z?z:y-t,!(m>a);y+=k)g=a-m,b=k-m,h.push(L(p(m+g%b,0))),a=K(g/b);h.push(L(p(a,0))),t=c(f,w,o==d),f=0,++o}++f,++n}return h.join("")}function r(e){return l(e,function(e){return F.test(e)?y(e.slice(4).toLowerCase()):e})}function v(e){return l(e,function(e){return G.test(e)?"xn--"+m(e):e})}var w="object"==typeof o&&o,b="object"==typeof f&&f&&f.exports==w&&f,g="object"==typeof n&&n;(g.global===g||g.window===g)&&(d=g);var h,x,j=2147483647,k=36,q=1,z=26,A=38,B=700,C=72,D=128,E="-",F=/^xn--/,G=/[^ -~]/,H=/\x2E|\u3002|\uFF0E|\uFF61/g,I={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},J=k-q,K=Math.floor,L=String.fromCharCode;if(h={version:"1.2.4",ucs2:{decode:s,encode:u},decode:y,encode:m,toASCII:v,toUnicode:r},"function"==typeof e&&"object"==typeof e.amd&&e.amd)e("punycode",function(){return h});else if(w&&!w.nodeType)if(b)b.exports=h;else for(x in h)h.hasOwnProperty(x)&&(w[x]=h[x]);else d.punycode=h}(this)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],2:[function(e,n){function f(e,n,f){!e.defaultView||n===e.defaultView.pageXOffset&&f===e.defaultView.pageYOffset||e.defaultView.scrollTo(n,f)}function o(e,n){try{n&&(n.width=e.width,n.height=e.height,n.getContext("2d").putImageData(e.getContext("2d").getImageData(0,0,e.width,e.height),0,0))}catch(f){t("Unable to copy canvas content from",e,f)}}function d(e,n){for(var f=3===e.nodeType?document.createTextNode(e.nodeValue):e.cloneNode(!1),i=e.firstChild;i;)(n===!0||1!==i.nodeType||"SCRIPT"!==i.nodeName)&&f.appendChild(d(i,n)),i=i.nextSibling;return 1===e.nodeType&&(f._scrollTop=e.scrollTop,f._scrollLeft=e.scrollLeft,"CANVAS"===e.nodeName?o(e,f):("TEXTAREA"===e.nodeName||"SELECT"===e.nodeName)&&(f.value=e.value)),f}function i(e){if(1===e.nodeType){e.scrollTop=e._scrollTop,e.scrollLeft=e._scrollLeft;for(var n=e.firstChild;n;)i(n),n=n.nextSibling}}var t=e("./log");n.exports=function(e,n,o,t,l,s,u){var a=d(e.documentElement,l.javascriptEnabled),p=n.createElement("iframe");return p.className="html2canvas-container",p.style.visibility="hidden",p.style.position="fixed",p.style.left="-10000px",p.style.top="0px",p.style.border="0",p.width=o,p.height=t,p.scrolling="no",n.body.appendChild(p),new Promise(function(n){var o=p.contentWindow.document;p.contentWindow.onload=p.onload=function(){var e=setInterval(function(){o.body.childNodes.length>0&&(i(o.documentElement),clearInterval(e),"view"===l.type&&(p.contentWindow.scrollTo(s,u),!/(iPad|iPhone|iPod)/g.test(navigator.userAgent)||p.contentWindow.scrollY===u&&p.contentWindow.scrollX===s||(o.documentElement.style.top=-u+"px",o.documentElement.style.left=-s+"px",o.documentElement.style.position="absolute")),n(p))},50)},o.open(),o.write("<!DOCTYPE html><html></html>"),f(e,s,u),o.replaceChild(o.adoptNode(a),o.documentElement),o.close()})}},{"./log":13}],3:[function(e,n){function f(e){this.r=0,this.g=0,this.b=0,this.a=null;this.fromArray(e)||this.namedColor(e)||this.rgb(e)||this.rgba(e)||this.hex6(e)||this.hex3(e)}f.prototype.darken=function(e){var n=1-e;return new f([Math.round(this.r*n),Math.round(this.g*n),Math.round(this.b*n),this.a])},f.prototype.isTransparent=function(){return 0===this.a},f.prototype.isBlack=function(){return 0===this.r&&0===this.g&&0===this.b},f.prototype.fromArray=function(e){return Array.isArray(e)&&(this.r=Math.min(e[0],255),this.g=Math.min(e[1],255),this.b=Math.min(e[2],255),e.length>3&&(this.a=e[3])),Array.isArray(e)};var o=/^#([a-f0-9]{3})$/i;f.prototype.hex3=function(e){var n=null;return null!==(n=e.match(o))&&(this.r=parseInt(n[1][0]+n[1][0],16),this.g=parseInt(n[1][1]+n[1][1],16),this.b=parseInt(n[1][2]+n[1][2],16)),null!==n};var d=/^#([a-f0-9]{6})$/i;f.prototype.hex6=function(e){var n=null;return null!==(n=e.match(d))&&(this.r=parseInt(n[1].substring(0,2),16),this.g=parseInt(n[1].substring(2,4),16),this.b=parseInt(n[1].substring(4,6),16)),null!==n};var i=/^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/;f.prototype.rgb=function(e){var n=null;return null!==(n=e.match(i))&&(this.r=Number(n[1]),this.g=Number(n[2]),this.b=Number(n[3])),null!==n};var t=/^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d?\.?\d+)\s*\)$/;f.prototype.rgba=function(e){var n=null;return null!==(n=e.match(t))&&(this.r=Number(n[1]),this.g=Number(n[2]),this.b=Number(n[3]),this.a=Number(n[4])),null!==n},f.prototype.toString=function(){return null!==this.a&&1!==this.a?"rgba("+[this.r,this.g,this.b,this.a].join(",")+")":"rgb("+[this.r,this.g,this.b].join(",")+")"},f.prototype.namedColor=function(e){e=e.toLowerCase();var n=l[e];if(n)this.r=n[0],this.g=n[1],this.b=n[2];else if("transparent"===e)return this.r=this.g=this.b=this.a=0,!0;return!!n},f.prototype.isColor=!0;var l={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]};n.exports=f},{}],4:[function(n,f){function o(e,n){var f=j++;if(n=n||{},n.logging&&(v.options.logging=!0,v.options.start=Date.now()),n.async="undefined"==typeof n.async?!0:n.async,n.allowTaint="undefined"==typeof n.allowTaint?!1:n.allowTaint,n.removeContainer="undefined"==typeof n.removeContainer?!0:n.removeContainer,n.javascriptEnabled="undefined"==typeof n.javascriptEnabled?!1:n.javascriptEnabled,n.imageTimeout="undefined"==typeof n.imageTimeout?1e4:n.imageTimeout,n.renderer="function"==typeof n.renderer?n.renderer:c,n.strict=!!n.strict,"string"==typeof e){if("string"!=typeof n.proxy)return Promise.reject("Proxy must be used when rendering url");var o=null!=n.width?n.width:window.innerWidth,t=null!=n.height?n.height:window.innerHeight;return g(a(e),n.proxy,document,o,t,n).then(function(e){return i(e.contentWindow.document.documentElement,e,n,o,t)})}var l=(void 0===e?[document.documentElement]:e.length?e:[e])[0];return l.setAttribute(x+f,f),d(l.ownerDocument,n,l.ownerDocument.defaultView.innerWidth,l.ownerDocument.defaultView.innerHeight,f).then(function(e){return"function"==typeof n.onrendered&&(v("options.onrendered is deprecated, html2canvas returns a Promise containing the canvas"),n.onrendered(e)),e})}function d(e,n,f,o,d){return b(e,e,f,o,n,e.defaultView.pageXOffset,e.defaultView.pageYOffset).then(function(t){v("Document cloned");var l=x+d,s="["+l+"='"+d+"']";e.querySelector(s).removeAttribute(l);var u=t.contentWindow,a=u.document.querySelector(s),p=Promise.resolve("function"==typeof n.onclone?n.onclone(u.document):!0);return p.then(function(){return i(a,t,n,f,o)})})}function i(e,n,f,o,d){var i=n.contentWindow,a=new p(i.document),c=new y(f,a),r=h(e),w="view"===f.type?o:s(i.document),b="view"===f.type?d:u(i.document),g=new f.renderer(w,b,c,f,document),x=new m(e,g,a,c,f);return x.ready.then(function(){v("Finished rendering");var o;return o="view"===f.type?l(g.canvas,{width:g.canvas.width,height:g.canvas.height,top:0,left:0,x:0,y:0}):e===i.document.body||e===i.document.documentElement||null!=f.canvas?g.canvas:l(g.canvas,{width:null!=f.width?f.width:r.width,height:null!=f.height?f.height:r.height,top:r.top,left:r.left,x:0,y:0}),t(n,f),o})}function t(e,n){n.removeContainer&&(e.parentNode.removeChild(e),v("Cleaned up container"))}function l(e,n){var f=document.createElement("canvas"),o=Math.min(e.width-1,Math.max(0,n.left)),d=Math.min(e.width,Math.max(1,n.left+n.width)),i=Math.min(e.height-1,Math.max(0,n.top)),t=Math.min(e.height,Math.max(1,n.top+n.height));f.width=n.width,f.height=n.height;var l=d-o,s=t-i;return v("Cropping canvas at:","left:",n.left,"top:",n.top,"width:",l,"height:",s),v("Resulting crop with width",n.width,"and height",n.height,"with x",o,"and y",i),f.getContext("2d").drawImage(e,o,i,l,s,n.x,n.y,l,s),f}function s(e){return Math.max(Math.max(e.body.scrollWidth,e.documentElement.scrollWidth),Math.max(e.body.offsetWidth,e.documentElement.offsetWidth),Math.max(e.body.clientWidth,e.documentElement.clientWidth))}function u(e){return Math.max(Math.max(e.body.scrollHeight,e.documentElement.scrollHeight),Math.max(e.body.offsetHeight,e.documentElement.offsetHeight),Math.max(e.body.clientHeight,e.documentElement.clientHeight))}function a(e){var n=document.createElement("a");return n.href=e,n.href=n.href,n}var p=n("./support"),c=n("./renderers/canvas"),y=n("./imageloader"),m=n("./nodeparser"),r=n("./nodecontainer"),v=n("./log"),w=n("./utils"),b=n("./clone"),g=n("./proxy").loadUrlDocument,h=w.getBounds,x="data-html2canvas-node",j=0;o.CanvasRenderer=c,o.NodeContainer=r,o.log=v,o.utils=w;var k="undefined"==typeof document||"function"!=typeof Object.create||"function"!=typeof document.createElement("canvas").getContext?function(){return Promise.reject("No canvas support")}:o;f.exports=k,"function"==typeof e&&e.amd&&e("html2canvas",[],function(){return k})},{"./clone":2,"./imageloader":11,"./log":13,"./nodecontainer":14,"./nodeparser":15,"./proxy":16,"./renderers/canvas":20,"./support":22,"./utils":26}],5:[function(e,n){function f(e){if(this.src=e,o("DummyImageContainer for",e),!this.promise||!this.image){o("Initiating DummyImageContainer"),f.prototype.image=new Image;var n=this.image;f.prototype.promise=new Promise(function(e,f){n.onload=e,n.onerror=f,n.src=d(),n.complete===!0&&e(n)})}}var o=e("./log"),d=e("./utils").smallImage;n.exports=f},{"./log":13,"./utils":26}],6:[function(e,n){function f(e,n){var f,d,i=document.createElement("div"),t=document.createElement("img"),l=document.createElement("span"),s="Hidden Text";i.style.visibility="hidden",i.style.fontFamily=e,i.style.fontSize=n,i.style.margin=0,i.style.padding=0,document.body.appendChild(i),t.src=o(),t.width=1,t.height=1,t.style.margin=0,t.style.padding=0,t.style.verticalAlign="baseline",l.style.fontFamily=e,l.style.fontSize=n,l.style.margin=0,l.style.padding=0,l.appendChild(document.createTextNode(s)),i.appendChild(l),i.appendChild(t),f=t.offsetTop-l.offsetTop+1,i.removeChild(l),i.appendChild(document.createTextNode(s)),i.style.lineHeight="normal",t.style.verticalAlign="super",d=t.offsetTop-i.offsetTop+1,document.body.removeChild(i),this.baseline=f,this.lineWidth=1,this.middle=d}var o=e("./utils").smallImage;n.exports=f},{"./utils":26}],7:[function(e,n){function f(){this.data={}}var o=e("./font");f.prototype.getMetrics=function(e,n){return void 0===this.data[e+"-"+n]&&(this.data[e+"-"+n]=new o(e,n)),this.data[e+"-"+n]},n.exports=f},{"./font":6}],8:[function(e,n){function f(n,f,o){this.image=null,this.src=n;var i=this,t=d(n);this.promise=(f?new Promise(function(e){"about:blank"===n.contentWindow.document.URL||null==n.contentWindow.document.documentElement?n.contentWindow.onload=n.onload=function(){e(n)}:e(n)}):this.proxyLoad(o.proxy,t,o)).then(function(n){var f=e("./core");return f(n.contentWindow.document.documentElement,{type:"view",width:n.width,height:n.height,proxy:o.proxy,javascriptEnabled:o.javascriptEnabled,removeContainer:o.removeContainer,allowTaint:o.allowTaint,imageTimeout:o.imageTimeout/2})}).then(function(e){return i.image=e})}var o=e("./utils"),d=o.getBounds,i=e("./proxy").loadUrlDocument;f.prototype.proxyLoad=function(e,n,f){var o=this.src;return i(o.src,e,o.ownerDocument,n.width,n.height,f)},n.exports=f},{"./core":4,"./proxy":16,"./utils":26}],9:[function(e,n){function f(e){this.src=e.value,this.colorStops=[],this.type=null,this.x0=.5,this.y0=.5,this.x1=.5,this.y1=.5,this.promise=Promise.resolve(!0)}f.TYPES={LINEAR:1,RADIAL:2},f.REGEXP_COLORSTOP=/^\s*(rgba?\(\s*\d{1,3},\s*\d{1,3},\s*\d{1,3}(?:,\s*[0-9\.]+)?\s*\)|[a-z]{3,20}|#[a-f0-9]{3,6})(?:\s+(\d{1,3}(?:\.\d+)?)(%|px)?)?(?:\s|$)/i,n.exports=f},{}],10:[function(e,n){function f(e,n){this.src=e,this.image=new Image;var f=this;this.tainted=null,this.promise=new Promise(function(o,d){f.image.onload=o,f.image.onerror=d,n&&(f.image.crossOrigin="anonymous"),f.image.src=e,f.image.complete===!0&&o(f.image)})}n.exports=f},{}],11:[function(e,n){function f(e,n){this.link=null,this.options=e,this.support=n,this.origin=this.getOrigin(window.location.href)}var o=e("./log"),d=e("./imagecontainer"),i=e("./dummyimagecontainer"),t=e("./proxyimagecontainer"),l=e("./framecontainer"),s=e("./svgcontainer"),u=e("./svgnodecontainer"),a=e("./lineargradientcontainer"),p=e("./webkitgradientcontainer"),c=e("./utils").bind;f.prototype.findImages=function(e){var n=[];return e.reduce(function(e,n){switch(n.node.nodeName){case"IMG":return e.concat([{args:[n.node.src],method:"url"}]);case"svg":case"IFRAME":return e.concat([{args:[n.node],method:n.node.nodeName}])}return e},[]).forEach(this.addImage(n,this.loadImage),this),n},f.prototype.findBackgroundImage=function(e,n){return n.parseBackgroundImages().filter(this.hasImageBackground).forEach(this.addImage(e,this.loadImage),this),e},f.prototype.addImage=function(e,n){return function(f){f.args.forEach(function(d){this.imageExists(e,d)||(e.splice(0,0,n.call(this,f)),o("Added image #"+e.length,"string"==typeof d?d.substring(0,100):d))},this)}},f.prototype.hasImageBackground=function(e){return"none"!==e.method},f.prototype.loadImage=function(e){if("url"===e.method){var n=e.args[0];return!this.isSVG(n)||this.support.svg||this.options.allowTaint?n.match(/data:image\/.*;base64,/i)?new d(n.replace(/url\(['"]{0,}|['"]{0,}\)$/gi,""),!1):this.isSameOrigin(n)||this.options.allowTaint===!0||this.isSVG(n)?new d(n,!1):this.support.cors&&!this.options.allowTaint&&this.options.useCORS?new d(n,!0):this.options.proxy?new t(n,this.options.proxy):new i(n):new s(n)}return"linear-gradient"===e.method?new a(e):"gradient"===e.method?new p(e):"svg"===e.method?new u(e.args[0],this.support.svg):"IFRAME"===e.method?new l(e.args[0],this.isSameOrigin(e.args[0].src),this.options):new i(e)},f.prototype.isSVG=function(e){return"svg"===e.substring(e.length-3).toLowerCase()||s.prototype.isInline(e)},f.prototype.imageExists=function(e,n){return e.some(function(e){return e.src===n})},f.prototype.isSameOrigin=function(e){return this.getOrigin(e)===this.origin},f.prototype.getOrigin=function(e){var n=this.link||(this.link=document.createElement("a"));return n.href=e,n.href=n.href,n.protocol+n.hostname+n.port},f.prototype.getPromise=function(e){return this.timeout(e,this.options.imageTimeout)["catch"](function(){var n=new i(e.src);return n.promise.then(function(n){e.image=n})})},f.prototype.get=function(e){var n=null;return this.images.some(function(f){return(n=f).src===e})?n:null},f.prototype.fetch=function(e){return this.images=e.reduce(c(this.findBackgroundImage,this),this.findImages(e)),this.images.forEach(function(e,n){e.promise.then(function(){o("Succesfully loaded image #"+(n+1),e)},function(f){o("Failed loading image #"+(n+1),e,f)})}),this.ready=Promise.all(this.images.map(this.getPromise,this)),o("Finished searching images"),this},f.prototype.timeout=function(e,n){var f,d=Promise.race([e.promise,new Promise(function(d,i){f=setTimeout(function(){o("Timed out loading image",e),i(e)},n)})]).then(function(e){return clearTimeout(f),e});return d["catch"](function(){clearTimeout(f)}),d},n.exports=f},{"./dummyimagecontainer":5,"./framecontainer":8,"./imagecontainer":10,"./lineargradientcontainer":12,"./log":13,"./proxyimagecontainer":17,"./svgcontainer":23,"./svgnodecontainer":24,"./utils":26,"./webkitgradientcontainer":27}],12:[function(e,n){function f(e){o.apply(this,arguments),this.type=o.TYPES.LINEAR;var n=f.REGEXP_DIRECTION.test(e.args[0])||!o.REGEXP_COLORSTOP.test(e.args[0]);n?e.args[0].split(/\s+/).reverse().forEach(function(e,n){switch(e){case"left":this.x0=0,this.x1=1;break;case"top":this.y0=0,this.y1=1;break;case"right":this.x0=1,this.x1=0;break;case"bottom":this.y0=1,this.y1=0;break;case"to":var f=this.y0,o=this.x0;this.y0=this.y1,this.x0=this.x1,this.x1=o,this.y1=f;break;case"center":break;default:var d=.01*parseFloat(e,10);if(isNaN(d))break;0===n?(this.y0=d,this.y1=1-this.y0):(this.x0=d,this.x1=1-this.x0)}},this):(this.y0=0,this.y1=1),this.colorStops=e.args.slice(n?1:0).map(function(e){var n=e.match(o.REGEXP_COLORSTOP),f=+n[2],i=0===f?"%":n[3];return{color:new d(n[1]),stop:"%"===i?f/100:null}}),null===this.colorStops[0].stop&&(this.colorStops[0].stop=0),null===this.colorStops[this.colorStops.length-1].stop&&(this.colorStops[this.colorStops.length-1].stop=1),this.colorStops.forEach(function(e,n){null===e.stop&&this.colorStops.slice(n).some(function(f,o){return null!==f.stop?(e.stop=(f.stop-this.colorStops[n-1].stop)/(o+1)+this.colorStops[n-1].stop,!0):!1},this)},this)}var o=e("./gradientcontainer"),d=e("./color");f.prototype=Object.create(o.prototype),f.REGEXP_DIRECTION=/^\s*(?:to|left|right|top|bottom|center|\d{1,3}(?:\.\d+)?%?)(?:\s|$)/i,n.exports=f},{"./color":3,"./gradientcontainer":9}],13:[function(e,n){var f=function(){f.options.logging&&window.console&&window.console.log&&Function.prototype.bind.call(window.console.log,window.console).apply(window.console,[Date.now()-f.options.start+"ms","html2canvas:"].concat([].slice.call(arguments,0)))};f.options={logging:!1},n.exports=f},{}],14:[function(e,n){function f(e,n){this.node=e,this.parent=n,this.stack=null,this.bounds=null,this.borders=null,this.clip=[],this.backgroundClip=[],this.offsetBounds=null,this.visible=null,this.computedStyles=null,this.colors={},this.styles={},this.backgroundImages=null,this.transformData=null,this.transformMatrix=null,this.isPseudoElement=!1,this.opacity=null}function o(e){var n=e.options[e.selectedIndex||0];return n?n.text||"":""}function d(e){if(e&&"matrix"===e[1])return e[2].split(",").map(function(e){return parseFloat(e.trim())});if(e&&"matrix3d"===e[1]){var n=e[2].split(",").map(function(e){return parseFloat(e.trim())});return[n[0],n[1],n[4],n[5],n[12],n[13]]}}function i(e){return-1!==e.toString().indexOf("%")}function t(e){return e.replace("px","")}function l(e){return parseFloat(e)}var s=e("./color"),u=e("./utils"),a=u.getBounds,p=u.parseBackgrounds,c=u.offsetBounds;f.prototype.cloneTo=function(e){e.visible=this.visible,e.borders=this.borders,e.bounds=this.bounds,e.clip=this.clip,e.backgroundClip=this.backgroundClip,e.computedStyles=this.computedStyles,e.styles=this.styles,e.backgroundImages=this.backgroundImages,e.opacity=this.opacity},f.prototype.getOpacity=function(){return null===this.opacity?this.opacity=this.cssFloat("opacity"):this.opacity},f.prototype.assignStack=function(e){this.stack=e,e.children.push(this)},f.prototype.isElementVisible=function(){return this.node.nodeType===Node.TEXT_NODE?this.parent.visible:"none"!==this.css("display")&&"hidden"!==this.css("visibility")&&!this.node.hasAttribute("data-html2canvas-ignore")&&("INPUT"!==this.node.nodeName||"hidden"!==this.node.getAttribute("type"))},f.prototype.css=function(e){return this.computedStyles||(this.computedStyles=this.isPseudoElement?this.parent.computedStyle(this.before?":before":":after"):this.computedStyle(null)),this.styles[e]||(this.styles[e]=this.computedStyles[e])},f.prototype.prefixedCss=function(e){var n=["webkit","moz","ms","o"],f=this.css(e);return void 0===f&&n.some(function(n){return f=this.css(n+e.substr(0,1).toUpperCase()+e.substr(1)),void 0!==f},this),void 0===f?null:f},f.prototype.computedStyle=function(e){return this.node.ownerDocument.defaultView.getComputedStyle(this.node,e)},f.prototype.cssInt=function(e){var n=parseInt(this.css(e),10);return isNaN(n)?0:n},f.prototype.color=function(e){return this.colors[e]||(this.colors[e]=new s(this.css(e)))},f.prototype.cssFloat=function(e){var n=parseFloat(this.css(e));return isNaN(n)?0:n},f.prototype.fontWeight=function(){var e=this.css("fontWeight");switch(parseInt(e,10)){case 401:e="bold";break;case 400:e="normal"}return e},f.prototype.parseClip=function(){var e=this.css("clip").match(this.CLIP);return e?{top:parseInt(e[1],10),right:parseInt(e[2],10),bottom:parseInt(e[3],10),left:parseInt(e[4],10)}:null},f.prototype.parseBackgroundImages=function(){return this.backgroundImages||(this.backgroundImages=p(this.css("backgroundImage")))},f.prototype.cssList=function(e,n){var f=(this.css(e)||"").split(",");return f=f[n||0]||f[0]||"auto",f=f.trim().split(" "),1===f.length&&(f=[f[0],i(f[0])?"auto":f[0]]),f},f.prototype.parseBackgroundSize=function(e,n,f){var o,d,t=this.cssList("backgroundSize",f);if(i(t[0]))o=e.width*parseFloat(t[0])/100;else{if(/contain|cover/.test(t[0])){var l=e.width/e.height,s=n.width/n.height;return s>l^"contain"===t[0]?{width:e.height*s,height:e.height}:{width:e.width,height:e.width/s}}o=parseInt(t[0],10)}return d="auto"===t[0]&&"auto"===t[1]?n.height:"auto"===t[1]?o/n.width*n.height:i(t[1])?e.height*parseFloat(t[1])/100:parseInt(t[1],10),"auto"===t[0]&&(o=d/n.height*n.width),{width:o,height:d}},f.prototype.parseBackgroundPosition=function(e,n,f,o){var d,t,l=this.cssList("backgroundPosition",f);return d=i(l[0])?(e.width-(o||n).width)*(parseFloat(l[0])/100):parseInt(l[0],10),t="auto"===l[1]?d/n.width*n.height:i(l[1])?(e.height-(o||n).height)*parseFloat(l[1])/100:parseInt(l[1],10),"auto"===l[0]&&(d=t/n.height*n.width),{left:d,top:t}},f.prototype.parseBackgroundRepeat=function(e){return this.cssList("backgroundRepeat",e)[0]},f.prototype.parseTextShadows=function(){var e=this.css("textShadow"),n=[];if(e&&"none"!==e)for(var f=e.match(this.TEXT_SHADOW_PROPERTY),o=0;f&&o<f.length;o++){var d=f[o].match(this.TEXT_SHADOW_VALUES);n.push({color:new s(d[0]),offsetX:d[1]?parseFloat(d[1].replace("px","")):0,offsetY:d[2]?parseFloat(d[2].replace("px","")):0,blur:d[3]?d[3].replace("px",""):0})}return n},f.prototype.parseTransform=function(){if(!this.transformData)if(this.hasTransform()){var e=this.parseBounds(),n=this.prefixedCss("transformOrigin").split(" ").map(t).map(l);n[0]+=e.left,n[1]+=e.top,this.transformData={origin:n,matrix:this.parseTransformMatrix()}}else this.transformData={origin:[0,0],matrix:[1,0,0,1,0,0]};return this.transformData},f.prototype.parseTransformMatrix=function(){if(!this.transformMatrix){var e=this.prefixedCss("transform"),n=e?d(e.match(this.MATRIX_PROPERTY)):null;this.transformMatrix=n?n:[1,0,0,1,0,0]}return this.transformMatrix},f.prototype.parseBounds=function(){return this.bounds||(this.bounds=this.hasTransform()?c(this.node):a(this.node))},f.prototype.hasTransform=function(){return"1,0,0,1,0,0"!==this.parseTransformMatrix().join(",")||this.parent&&this.parent.hasTransform()},f.prototype.getValue=function(){var e=this.node.value||"";return"SELECT"===this.node.tagName?e=o(this.node):"password"===this.node.type&&(e=Array(e.length+1).join("•")),0===e.length?this.node.placeholder||"":e},f.prototype.MATRIX_PROPERTY=/(matrix|matrix3d)\((.+)\)/,f.prototype.TEXT_SHADOW_PROPERTY=/((rgba|rgb)\([^\)]+\)(\s-?\d+px){0,})/g,f.prototype.TEXT_SHADOW_VALUES=/(-?\d+px)|(#.+)|(rgb\(.+\))|(rgba\(.+\))/g,f.prototype.CLIP=/^rect\((\d+)px,? (\d+)px,? (\d+)px,? (\d+)px\)$/,n.exports=f},{"./color":3,"./utils":26}],15:[function(e,n){function f(e,n,f,o,d){N("Starting NodeParser"),this.renderer=n,this.options=d,this.range=null,this.support=f,this.renderQueue=[],this.stack=new U(!0,1,e.ownerDocument,null);var i=new P(e,null);if(d.background&&n.rectangle(0,0,n.width,n.height,new T(d.background)),e===e.ownerDocument.documentElement){var t=new P(i.color("backgroundColor").isTransparent()?e.ownerDocument.body:e.ownerDocument.documentElement,null);n.rectangle(0,0,n.width,n.height,t.color("backgroundColor"))}i.visibile=i.isElementVisible(),this.createPseudoHideStyles(e.ownerDocument),this.disableAnimations(e.ownerDocument),this.nodes=I([i].concat(this.getChildren(i)).filter(function(e){return e.visible=e.isElementVisible()}).map(this.getPseudoElements,this)),this.fontMetrics=new S,N("Fetched nodes, total:",this.nodes.length),N("Calculate overflow clips"),this.calculateOverflowClips(),N("Start fetching images"),this.images=o.fetch(this.nodes.filter(A)),this.ready=this.images.ready.then(W(function(){return N("Images loaded, starting parsing"),N("Creating stacking contexts"),this.createStackingContexts(),N("Sorting stacking contexts"),this.sortStackingContexts(this.stack),this.parse(this.stack),N("Render queue created with "+this.renderQueue.length+" items"),new Promise(W(function(e){d.async?"function"==typeof d.async?d.async.call(this,this.renderQueue,e):this.renderQueue.length>0?(this.renderIndex=0,this.asyncRenderer(this.renderQueue,e)):e():(this.renderQueue.forEach(this.paint,this),e())},this))},this))}function o(e){return e.parent&&e.parent.clip.length}function d(e){return e.replace(/(\-[a-z])/g,function(e){return e.toUpperCase().replace("-","")})}function i(){}function t(e,n,f,o){return e.map(function(d,i){if(d.width>0){var t=n.left,l=n.top,s=n.width,u=n.height-e[2].width;switch(i){case 0:u=e[0].width,d.args=a({c1:[t,l],c2:[t+s,l],c3:[t+s-e[1].width,l+u],c4:[t+e[3].width,l+u]},o[0],o[1],f.topLeftOuter,f.topLeftInner,f.topRightOuter,f.topRightInner);break;case 1:t=n.left+n.width-e[1].width,s=e[1].width,d.args=a({c1:[t+s,l],c2:[t+s,l+u+e[2].width],c3:[t,l+u],c4:[t,l+e[0].width]},o[1],o[2],f.topRightOuter,f.topRightInner,f.bottomRightOuter,f.bottomRightInner);break;case 2:l=l+n.height-e[2].width,u=e[2].width,d.args=a({c1:[t+s,l+u],c2:[t,l+u],c3:[t+e[3].width,l],c4:[t+s-e[3].width,l]},o[2],o[3],f.bottomRightOuter,f.bottomRightInner,f.bottomLeftOuter,f.bottomLeftInner);break;case 3:s=e[3].width,d.args=a({c1:[t,l+u+e[2].width],c2:[t,l],c3:[t+s,l+e[0].width],c4:[t+s,l+u]},o[3],o[0],f.bottomLeftOuter,f.bottomLeftInner,f.topLeftOuter,f.topLeftInner)}}return d})}function l(e,n,f,o){var d=4*((Math.sqrt(2)-1)/3),i=f*d,t=o*d,l=e+f,s=n+o;return{topLeft:u({x:e,y:s},{x:e,y:s-t},{x:l-i,y:n},{x:l,y:n}),topRight:u({x:e,y:n},{x:e+i,y:n},{x:l,y:s-t},{x:l,y:s}),bottomRight:u({x:l,y:n},{x:l,y:n+t},{x:e+i,y:s},{x:e,y:s}),bottomLeft:u({x:l,y:s},{x:l-i,y:s},{x:e,y:n+t},{x:e,y:n})}}function s(e,n,f){var o=e.left,d=e.top,i=e.width,t=e.height,s=n[0][0]<i/2?n[0][0]:i/2,u=n[0][1]<t/2?n[0][1]:t/2,a=n[1][0]<i/2?n[1][0]:i/2,p=n[1][1]<t/2?n[1][1]:t/2,c=n[2][0]<i/2?n[2][0]:i/2,y=n[2][1]<t/2?n[2][1]:t/2,m=n[3][0]<i/2?n[3][0]:i/2,r=n[3][1]<t/2?n[3][1]:t/2,v=i-a,w=t-y,b=i-c,g=t-r;return{topLeftOuter:l(o,d,s,u).topLeft.subdivide(.5),topLeftInner:l(o+f[3].width,d+f[0].width,Math.max(0,s-f[3].width),Math.max(0,u-f[0].width)).topLeft.subdivide(.5),topRightOuter:l(o+v,d,a,p).topRight.subdivide(.5),topRightInner:l(o+Math.min(v,i+f[3].width),d+f[0].width,v>i+f[3].width?0:a-f[3].width,p-f[0].width).topRight.subdivide(.5),bottomRightOuter:l(o+b,d+w,c,y).bottomRight.subdivide(.5),bottomRightInner:l(o+Math.min(b,i-f[3].width),d+Math.min(w,t+f[0].width),Math.max(0,c-f[1].width),y-f[2].width).bottomRight.subdivide(.5),bottomLeftOuter:l(o,d+g,m,r).bottomLeft.subdivide(.5),bottomLeftInner:l(o+f[3].width,d+g,Math.max(0,m-f[3].width),r-f[2].width).bottomLeft.subdivide(.5)}
}function u(e,n,f,o){var d=function(e,n,f){return{x:e.x+(n.x-e.x)*f,y:e.y+(n.y-e.y)*f}};return{start:e,startControl:n,endControl:f,end:o,subdivide:function(i){var t=d(e,n,i),l=d(n,f,i),s=d(f,o,i),a=d(t,l,i),p=d(l,s,i),c=d(a,p,i);return[u(e,t,a,c),u(c,p,s,o)]},curveTo:function(e){e.push(["bezierCurve",n.x,n.y,f.x,f.y,o.x,o.y])},curveToReversed:function(o){o.push(["bezierCurve",f.x,f.y,n.x,n.y,e.x,e.y])}}}function a(e,n,f,o,d,i,t){var l=[];return n[0]>0||n[1]>0?(l.push(["line",o[1].start.x,o[1].start.y]),o[1].curveTo(l)):l.push(["line",e.c1[0],e.c1[1]]),f[0]>0||f[1]>0?(l.push(["line",i[0].start.x,i[0].start.y]),i[0].curveTo(l),l.push(["line",t[0].end.x,t[0].end.y]),t[0].curveToReversed(l)):(l.push(["line",e.c2[0],e.c2[1]]),l.push(["line",e.c3[0],e.c3[1]])),n[0]>0||n[1]>0?(l.push(["line",d[1].end.x,d[1].end.y]),d[1].curveToReversed(l)):l.push(["line",e.c4[0],e.c4[1]]),l}function p(e,n,f,o,d,i,t){n[0]>0||n[1]>0?(e.push(["line",o[0].start.x,o[0].start.y]),o[0].curveTo(e),o[1].curveTo(e)):e.push(["line",i,t]),(f[0]>0||f[1]>0)&&e.push(["line",d[0].start.x,d[0].start.y])}function c(e){return e.cssInt("zIndex")<0}function y(e){return e.cssInt("zIndex")>0}function m(e){return 0===e.cssInt("zIndex")}function r(e){return-1!==["inline","inline-block","inline-table"].indexOf(e.css("display"))}function v(e){return e instanceof U}function w(e){return e.node.data.trim().length>0}function b(e){return/^(normal|none|0px)$/.test(e.parent.css("letterSpacing"))}function g(e){return["TopLeft","TopRight","BottomRight","BottomLeft"].map(function(n){var f=e.css("border"+n+"Radius"),o=f.split(" ");return o.length<=1&&(o[1]=o[0]),o.map(F)})}function h(e){return e.nodeType===Node.TEXT_NODE||e.nodeType===Node.ELEMENT_NODE}function x(e){var n=e.css("position"),f=-1!==["absolute","relative","fixed"].indexOf(n)?e.css("zIndex"):"auto";return"auto"!==f}function j(e){return"static"!==e.css("position")}function k(e){return"none"!==e.css("float")}function q(e){return-1!==["inline-block","inline-table"].indexOf(e.css("display"))}function z(e){var n=this;return function(){return!e.apply(n,arguments)}}function A(e){return e.node.nodeType===Node.ELEMENT_NODE}function B(e){return e.isPseudoElement===!0}function C(e){return e.node.nodeType===Node.TEXT_NODE}function D(e){return function(n,f){return n.cssInt("zIndex")+e.indexOf(n)/e.length-(f.cssInt("zIndex")+e.indexOf(f)/e.length)}}function E(e){return e.getOpacity()<1}function F(e){return parseInt(e,10)}function G(e){return e.width}function H(e){return e.node.nodeType!==Node.ELEMENT_NODE||-1===["SCRIPT","HEAD","TITLE","OBJECT","BR","OPTION"].indexOf(e.node.nodeName)}function I(e){return[].concat.apply([],e)}function J(e){var n=e.substr(0,1);return n===e.substr(e.length-1)&&n.match(/'|"/)?e.substr(1,e.length-2):e}function K(e){for(var n,f=[],o=0,d=!1;e.length;)L(e[o])===d?(n=e.splice(0,o),n.length&&f.push(O.ucs2.encode(n)),d=!d,o=0):o++,o>=e.length&&(n=e.splice(0,o),n.length&&f.push(O.ucs2.encode(n)));return f}function L(e){return-1!==[32,13,10,9,45].indexOf(e)}function M(e){return/[^\u0000-\u00ff]/.test(e)}var N=e("./log"),O=e("punycode"),P=e("./nodecontainer"),Q=e("./textcontainer"),R=e("./pseudoelementcontainer"),S=e("./fontmetrics"),T=e("./color"),U=e("./stackingcontext"),V=e("./utils"),W=V.bind,X=V.getBounds,Y=V.parseBackgrounds,Z=V.offsetBounds;f.prototype.calculateOverflowClips=function(){this.nodes.forEach(function(e){if(A(e)){B(e)&&e.appendToDOM(),e.borders=this.parseBorders(e);var n="hidden"===e.css("overflow")?[e.borders.clip]:[],f=e.parseClip();f&&-1!==["absolute","fixed"].indexOf(e.css("position"))&&n.push([["rect",e.bounds.left+f.left,e.bounds.top+f.top,f.right-f.left,f.bottom-f.top]]),e.clip=o(e)?e.parent.clip.concat(n):n,e.backgroundClip="hidden"!==e.css("overflow")?e.clip.concat([e.borders.clip]):e.clip,B(e)&&e.cleanDOM()}else C(e)&&(e.clip=o(e)?e.parent.clip:[]);B(e)||(e.bounds=null)},this)},f.prototype.asyncRenderer=function(e,n,f){f=f||Date.now(),this.paint(e[this.renderIndex++]),e.length===this.renderIndex?n():f+20>Date.now()?this.asyncRenderer(e,n,f):setTimeout(W(function(){this.asyncRenderer(e,n)},this),0)},f.prototype.createPseudoHideStyles=function(e){this.createStyles(e,"."+R.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE+':before { content: "" !important; display: none !important; }.'+R.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER+':after { content: "" !important; display: none !important; }')},f.prototype.disableAnimations=function(e){this.createStyles(e,"* { -webkit-animation: none !important; -moz-animation: none !important; -o-animation: none !important; animation: none !important; -webkit-transition: none !important; -moz-transition: none !important; -o-transition: none !important; transition: none !important;}")},f.prototype.createStyles=function(e,n){var f=e.createElement("style");f.innerHTML=n,e.body.appendChild(f)},f.prototype.getPseudoElements=function(e){var n=[[e]];if(e.node.nodeType===Node.ELEMENT_NODE){var f=this.getPseudoElement(e,":before"),o=this.getPseudoElement(e,":after");f&&n.push(f),o&&n.push(o)}return I(n)},f.prototype.getPseudoElement=function(e,n){var f=e.computedStyle(n);if(!f||!f.content||"none"===f.content||"-moz-alt-content"===f.content||"none"===f.display)return null;for(var o=J(f.content),i="url"===o.substr(0,3),t=document.createElement(i?"img":"html2canvaspseudoelement"),l=new R(t,e,n),s=f.length-1;s>=0;s--){var u=d(f.item(s));t.style[u]=f[u]}if(t.className=R.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE+" "+R.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER,i)return t.src=Y(o)[0].args[0],[l];var a=document.createTextNode(o);return t.appendChild(a),[l,new Q(a,l)]},f.prototype.getChildren=function(e){return I([].filter.call(e.node.childNodes,h).map(function(n){var f=[n.nodeType===Node.TEXT_NODE?new Q(n,e):new P(n,e)].filter(H);return n.nodeType===Node.ELEMENT_NODE&&f.length&&"TEXTAREA"!==n.tagName?f[0].isElementVisible()?f.concat(this.getChildren(f[0])):[]:f},this))},f.prototype.newStackingContext=function(e,n){var f=new U(n,e.getOpacity(),e.node,e.parent);e.cloneTo(f);var o=n?f.getParentStack(this):f.parent.stack;o.contexts.push(f),e.stack=f},f.prototype.createStackingContexts=function(){this.nodes.forEach(function(e){A(e)&&(this.isRootElement(e)||E(e)||x(e)||this.isBodyWithTransparentRoot(e)||e.hasTransform())?this.newStackingContext(e,!0):A(e)&&(j(e)&&m(e)||q(e)||k(e))?this.newStackingContext(e,!1):e.assignStack(e.parent.stack)},this)},f.prototype.isBodyWithTransparentRoot=function(e){return"BODY"===e.node.nodeName&&e.parent.color("backgroundColor").isTransparent()},f.prototype.isRootElement=function(e){return null===e.parent},f.prototype.sortStackingContexts=function(e){e.contexts.sort(D(e.contexts.slice(0))),e.contexts.forEach(this.sortStackingContexts,this)},f.prototype.parseTextBounds=function(e){return function(n,f,o){if("none"!==e.parent.css("textDecoration").substr(0,4)||0!==n.trim().length){if(this.support.rangeBounds&&!e.parent.hasTransform()){var d=o.slice(0,f).join("").length;return this.getRangeBounds(e.node,d,n.length)}if(e.node&&"string"==typeof e.node.data){var i=e.node.splitText(n.length),t=this.getWrapperBounds(e.node,e.parent.hasTransform());return e.node=i,t}}else(!this.support.rangeBounds||e.parent.hasTransform())&&(e.node=e.node.splitText(n.length));return{}}},f.prototype.getWrapperBounds=function(e,n){var f=e.ownerDocument.createElement("html2canvaswrapper"),o=e.parentNode,d=e.cloneNode(!0);f.appendChild(e.cloneNode(!0)),o.replaceChild(f,e);var i=n?Z(f):X(f);return o.replaceChild(d,f),i},f.prototype.getRangeBounds=function(e,n,f){var o=this.range||(this.range=e.ownerDocument.createRange());return o.setStart(e,n),o.setEnd(e,n+f),o.getBoundingClientRect()},f.prototype.parse=function(e){var n=e.contexts.filter(c),f=e.children.filter(A),o=f.filter(z(k)),d=o.filter(z(j)).filter(z(r)),t=f.filter(z(j)).filter(k),l=o.filter(z(j)).filter(r),s=e.contexts.concat(o.filter(j)).filter(m),u=e.children.filter(C).filter(w),a=e.contexts.filter(y);n.concat(d).concat(t).concat(l).concat(s).concat(u).concat(a).forEach(function(e){this.renderQueue.push(e),v(e)&&(this.parse(e),this.renderQueue.push(new i))},this)},f.prototype.paint=function(e){try{e instanceof i?this.renderer.ctx.restore():C(e)?(B(e.parent)&&e.parent.appendToDOM(),this.paintText(e),B(e.parent)&&e.parent.cleanDOM()):this.paintNode(e)}catch(n){if(N(n),this.options.strict)throw n}},f.prototype.paintNode=function(e){v(e)&&(this.renderer.setOpacity(e.opacity),this.renderer.ctx.save(),e.hasTransform()&&this.renderer.setTransform(e.parseTransform())),"INPUT"===e.node.nodeName&&"checkbox"===e.node.type?this.paintCheckbox(e):"INPUT"===e.node.nodeName&&"radio"===e.node.type?this.paintRadio(e):this.paintElement(e)},f.prototype.paintElement=function(e){var n=e.parseBounds();this.renderer.clip(e.backgroundClip,function(){this.renderer.renderBackground(e,n,e.borders.borders.map(G))},this),this.renderer.clip(e.clip,function(){this.renderer.renderBorders(e.borders.borders)},this),this.renderer.clip(e.backgroundClip,function(){switch(e.node.nodeName){case"svg":case"IFRAME":var f=this.images.get(e.node);f?this.renderer.renderImage(e,n,e.borders,f):N("Error loading <"+e.node.nodeName+">",e.node);break;case"IMG":var o=this.images.get(e.node.src);o?this.renderer.renderImage(e,n,e.borders,o):N("Error loading <img>",e.node.src);break;case"CANVAS":this.renderer.renderImage(e,n,e.borders,{image:e.node});break;case"SELECT":case"INPUT":case"TEXTAREA":this.paintFormValue(e)}},this)},f.prototype.paintCheckbox=function(e){var n=e.parseBounds(),f=Math.min(n.width,n.height),o={width:f-1,height:f-1,top:n.top,left:n.left},d=[3,3],i=[d,d,d,d],l=[1,1,1,1].map(function(e){return{color:new T("#A5A5A5"),width:e}}),u=s(o,i,l);this.renderer.clip(e.backgroundClip,function(){this.renderer.rectangle(o.left+1,o.top+1,o.width-2,o.height-2,new T("#DEDEDE")),this.renderer.renderBorders(t(l,o,u,i)),e.node.checked&&(this.renderer.font(new T("#424242"),"normal","normal","bold",f-3+"px","arial"),this.renderer.text("✔",o.left+f/6,o.top+f-1))},this)},f.prototype.paintRadio=function(e){var n=e.parseBounds(),f=Math.min(n.width,n.height)-2;this.renderer.clip(e.backgroundClip,function(){this.renderer.circleStroke(n.left+1,n.top+1,f,new T("#DEDEDE"),1,new T("#A5A5A5")),e.node.checked&&this.renderer.circle(Math.ceil(n.left+f/4)+1,Math.ceil(n.top+f/4)+1,Math.floor(f/2),new T("#424242"))},this)},f.prototype.paintFormValue=function(e){var n=e.getValue();if(n.length>0){var f=e.node.ownerDocument,o=f.createElement("html2canvaswrapper"),d=["lineHeight","textAlign","fontFamily","fontWeight","fontSize","color","paddingLeft","paddingTop","paddingRight","paddingBottom","width","height","borderLeftStyle","borderTopStyle","borderLeftWidth","borderTopWidth","boxSizing","whiteSpace","wordWrap"];d.forEach(function(n){try{o.style[n]=e.css(n)}catch(f){N("html2canvas: Parse: Exception caught in renderFormValue: "+f.message)}});var i=e.parseBounds();o.style.position="fixed",o.style.left=i.left+"px",o.style.top=i.top+"px",o.textContent=n,f.body.appendChild(o),this.paintText(new Q(o.firstChild,e)),f.body.removeChild(o)}},f.prototype.paintText=function(e){e.applyTextTransform();var n=O.ucs2.decode(e.node.data),f=this.options.letterRendering&&!b(e)||M(e.node.data)?n.map(function(e){return O.ucs2.encode([e])}):K(n),o=e.parent.fontWeight(),d=e.parent.css("fontSize"),i=e.parent.css("fontFamily"),t=e.parent.parseTextShadows();this.renderer.font(e.parent.color("color"),e.parent.css("fontStyle"),e.parent.css("fontVariant"),o,d,i),t.length?this.renderer.fontShadow(t[0].color,t[0].offsetX,t[0].offsetY,t[0].blur):this.renderer.clearShadow(),this.renderer.clip(e.parent.clip,function(){f.map(this.parseTextBounds(e),this).forEach(function(n,o){n&&(this.renderer.text(f[o],n.left,n.bottom),this.renderTextDecoration(e.parent,n,this.fontMetrics.getMetrics(i,d)))},this)},this)},f.prototype.renderTextDecoration=function(e,n,f){switch(e.css("textDecoration").split(" ")[0]){case"underline":this.renderer.rectangle(n.left,Math.round(n.top+f.baseline+f.lineWidth),n.width,1,e.color("color"));break;case"overline":this.renderer.rectangle(n.left,Math.round(n.top),n.width,1,e.color("color"));break;case"line-through":this.renderer.rectangle(n.left,Math.ceil(n.top+f.middle+f.lineWidth),n.width,1,e.color("color"))}};var $={inset:[["darken",.6],["darken",.1],["darken",.1],["darken",.6]]};f.prototype.parseBorders=function(e){var n=e.parseBounds(),f=g(e),o=["Top","Right","Bottom","Left"].map(function(n,f){var o=e.css("border"+n+"Style"),d=e.color("border"+n+"Color");"inset"===o&&d.isBlack()&&(d=new T([255,255,255,d.a]));var i=$[o]?$[o][f]:null;return{width:e.cssInt("border"+n+"Width"),color:i?d[i[0]](i[1]):d,args:null}}),d=s(n,f,o);return{clip:this.parseBackgroundClip(e,d,o,f,n),borders:t(o,n,d,f)}},f.prototype.parseBackgroundClip=function(e,n,f,o,d){var i=e.css("backgroundClip"),t=[];switch(i){case"content-box":case"padding-box":p(t,o[0],o[1],n.topLeftInner,n.topRightInner,d.left+f[3].width,d.top+f[0].width),p(t,o[1],o[2],n.topRightInner,n.bottomRightInner,d.left+d.width-f[1].width,d.top+f[0].width),p(t,o[2],o[3],n.bottomRightInner,n.bottomLeftInner,d.left+d.width-f[1].width,d.top+d.height-f[2].width),p(t,o[3],o[0],n.bottomLeftInner,n.topLeftInner,d.left+f[3].width,d.top+d.height-f[2].width);break;default:p(t,o[0],o[1],n.topLeftOuter,n.topRightOuter,d.left,d.top),p(t,o[1],o[2],n.topRightOuter,n.bottomRightOuter,d.left+d.width,d.top),p(t,o[2],o[3],n.bottomRightOuter,n.bottomLeftOuter,d.left+d.width,d.top+d.height),p(t,o[3],o[0],n.bottomLeftOuter,n.topLeftOuter,d.left,d.top+d.height)}return t},n.exports=f},{"./color":3,"./fontmetrics":7,"./log":13,"./nodecontainer":14,"./pseudoelementcontainer":18,"./stackingcontext":21,"./textcontainer":25,"./utils":26,punycode:1}],16:[function(e,n,f){function o(e,n,f){var o="withCredentials"in new XMLHttpRequest;if(!n)return Promise.reject("No proxy configured");var d=t(o),s=l(n,e,d);return o?a(s):i(f,s,d).then(function(e){return m(e.content)})}function d(e,n,f){var o="crossOrigin"in new Image,d=t(o),s=l(n,e,d);return o?Promise.resolve(s):i(f,s,d).then(function(e){return"data:"+e.type+";base64,"+e.content})}function i(e,n,f){return new Promise(function(o,d){var i=e.createElement("script"),t=function(){delete window.html2canvas.proxy[f],e.body.removeChild(i)};window.html2canvas.proxy[f]=function(e){t(),o(e)},i.src=n,i.onerror=function(e){t(),d(e)},e.body.appendChild(i)})}function t(e){return e?"":"html2canvas_"+Date.now()+"_"+ ++r+"_"+Math.round(1e5*Math.random())}function l(e,n,f){return e+"?url="+encodeURIComponent(n)+(f.length?"&callback=html2canvas.proxy."+f:"")}function s(e){return function(n){var f,o=new DOMParser;try{f=o.parseFromString(n,"text/html")}catch(d){c("DOMParser not supported, falling back to createHTMLDocument"),f=document.implementation.createHTMLDocument("");try{f.open(),f.write(n),f.close()}catch(i){c("createHTMLDocument write not supported, falling back to document.body.innerHTML"),f.body.innerHTML=n}}var t=f.querySelector("base");if(!t||!t.href.host){var l=f.createElement("base");l.href=e,f.head.insertBefore(l,f.head.firstChild)}return f}}function u(e,n,f,d,i,t){return new o(e,n,window.document).then(s(e)).then(function(e){return y(e,f,d,i,t,0,0)})}var a=e("./xhr"),p=e("./utils"),c=e("./log"),y=e("./clone"),m=p.decode64,r=0;f.Proxy=o,f.ProxyURL=d,f.loadUrlDocument=u},{"./clone":2,"./log":13,"./utils":26,"./xhr":28}],17:[function(e,n){function f(e,n){var f=document.createElement("a");f.href=e,e=f.href,this.src=e,this.image=new Image;var d=this;this.promise=new Promise(function(f,i){d.image.crossOrigin="Anonymous",d.image.onload=f,d.image.onerror=i,new o(e,n,document).then(function(e){d.image.src=e})["catch"](i)})}var o=e("./proxy").ProxyURL;n.exports=f},{"./proxy":16}],18:[function(e,n){function f(e,n,f){o.call(this,e,n),this.isPseudoElement=!0,this.before=":before"===f}var o=e("./nodecontainer");f.prototype.cloneTo=function(e){f.prototype.cloneTo.call(this,e),e.isPseudoElement=!0,e.before=this.before},f.prototype=Object.create(o.prototype),f.prototype.appendToDOM=function(){this.before?this.parent.node.insertBefore(this.node,this.parent.node.firstChild):this.parent.node.appendChild(this.node),this.parent.node.className+=" "+this.getHideClass()},f.prototype.cleanDOM=function(){this.node.parentNode.removeChild(this.node),this.parent.node.className=this.parent.node.className.replace(this.getHideClass(),"")},f.prototype.getHideClass=function(){return this["PSEUDO_HIDE_ELEMENT_CLASS_"+(this.before?"BEFORE":"AFTER")]},f.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE="___html2canvas___pseudoelement_before",f.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER="___html2canvas___pseudoelement_after",n.exports=f},{"./nodecontainer":14}],19:[function(e,n){function f(e,n,f,o,d){this.width=e,this.height=n,this.images=f,this.options=o,this.document=d}var o=e("./log");f.prototype.renderImage=function(e,n,f,o){var d=e.cssInt("paddingLeft"),i=e.cssInt("paddingTop"),t=e.cssInt("paddingRight"),l=e.cssInt("paddingBottom"),s=f.borders,u=n.width-(s[1].width+s[3].width+d+t),a=n.height-(s[0].width+s[2].width+i+l);this.drawImage(o,0,0,o.image.width||u,o.image.height||a,n.left+d+s[3].width,n.top+i+s[0].width,u,a)},f.prototype.renderBackground=function(e,n,f){n.height>0&&n.width>0&&(this.renderBackgroundColor(e,n),this.renderBackgroundImage(e,n,f))},f.prototype.renderBackgroundColor=function(e,n){var f=e.color("backgroundColor");f.isTransparent()||this.rectangle(n.left,n.top,n.width,n.height,f)},f.prototype.renderBorders=function(e){e.forEach(this.renderBorder,this)},f.prototype.renderBorder=function(e){e.color.isTransparent()||null===e.args||this.drawShape(e.args,e.color)},f.prototype.renderBackgroundImage=function(e,n,f){var d=e.parseBackgroundImages();d.reverse().forEach(function(d,i,t){switch(d.method){case"url":var l=this.images.get(d.args[0]);l?this.renderBackgroundRepeating(e,n,l,t.length-(i+1),f):o("Error loading background-image",d.args[0]);break;case"linear-gradient":case"gradient":var s=this.images.get(d.value);s?this.renderBackgroundGradient(s,n,f):o("Error loading background-image",d.args[0]);break;case"none":break;default:o("Unknown background-image type",d.args[0])}},this)},f.prototype.renderBackgroundRepeating=function(e,n,f,o,d){var i=e.parseBackgroundSize(n,f.image,o),t=e.parseBackgroundPosition(n,f.image,o,i),l=e.parseBackgroundRepeat(o);switch(l){case"repeat-x":case"repeat no-repeat":this.backgroundRepeatShape(f,t,i,n,n.left+d[3],n.top+t.top+d[0],99999,i.height,d);break;case"repeat-y":case"no-repeat repeat":this.backgroundRepeatShape(f,t,i,n,n.left+t.left+d[3],n.top+d[0],i.width,99999,d);break;case"no-repeat":this.backgroundRepeatShape(f,t,i,n,n.left+t.left+d[3],n.top+t.top+d[0],i.width,i.height,d);break;default:this.renderBackgroundRepeat(f,t,i,{top:n.top,left:n.left},d[3],d[0])}},n.exports=f},{"./log":13}],20:[function(e,n){function f(e,n){d.apply(this,arguments),this.canvas=this.options.canvas||this.document.createElement("canvas"),this.options.canvas||(this.canvas.width=e,this.canvas.height=n),this.ctx=this.canvas.getContext("2d"),this.taintCtx=this.document.createElement("canvas").getContext("2d"),this.ctx.textBaseline="bottom",this.variables={},t("Initialized CanvasRenderer with size",e,"x",n)}function o(e){return e.length>0}var d=e("../renderer"),i=e("../lineargradientcontainer"),t=e("../log");f.prototype=Object.create(d.prototype),f.prototype.setFillStyle=function(e){return this.ctx.fillStyle="object"==typeof e&&e.isColor?e.toString():e,this.ctx},f.prototype.rectangle=function(e,n,f,o,d){this.setFillStyle(d).fillRect(e,n,f,o)},f.prototype.circle=function(e,n,f,o){this.setFillStyle(o),this.ctx.beginPath(),this.ctx.arc(e+f/2,n+f/2,f/2,0,2*Math.PI,!0),this.ctx.closePath(),this.ctx.fill()},f.prototype.circleStroke=function(e,n,f,o,d,i){this.circle(e,n,f,o),this.ctx.strokeStyle=i.toString(),this.ctx.stroke()},f.prototype.drawShape=function(e,n){this.shape(e),this.setFillStyle(n).fill()},f.prototype.taints=function(e){if(null===e.tainted){this.taintCtx.drawImage(e.image,0,0);try{this.taintCtx.getImageData(0,0,1,1),e.tainted=!1}catch(n){this.taintCtx=document.createElement("canvas").getContext("2d"),e.tainted=!0}}return e.tainted},f.prototype.drawImage=function(e,n,f,o,d,i,t,l,s){(!this.taints(e)||this.options.allowTaint)&&this.ctx.drawImage(e.image,n,f,o,d,i,t,l,s)},f.prototype.clip=function(e,n,f){this.ctx.save(),e.filter(o).forEach(function(e){this.shape(e).clip()},this),n.call(f),this.ctx.restore()},f.prototype.shape=function(e){return this.ctx.beginPath(),e.forEach(function(e,n){"rect"===e[0]?this.ctx.rect.apply(this.ctx,e.slice(1)):this.ctx[0===n?"moveTo":e[0]+"To"].apply(this.ctx,e.slice(1))},this),this.ctx.closePath(),this.ctx},f.prototype.font=function(e,n,f,o,d,i){this.setFillStyle(e).font=[n,f,o,d,i].join(" ").split(",")[0]},f.prototype.fontShadow=function(e,n,f,o){this.setVariable("shadowColor",e.toString()).setVariable("shadowOffsetY",n).setVariable("shadowOffsetX",f).setVariable("shadowBlur",o)},f.prototype.clearShadow=function(){this.setVariable("shadowColor","rgba(0,0,0,0)")},f.prototype.setOpacity=function(e){this.ctx.globalAlpha=e},f.prototype.setTransform=function(e){this.ctx.translate(e.origin[0],e.origin[1]),this.ctx.transform.apply(this.ctx,e.matrix),this.ctx.translate(-e.origin[0],-e.origin[1])},f.prototype.setVariable=function(e,n){return this.variables[e]!==n&&(this.variables[e]=this.ctx[e]=n),this},f.prototype.text=function(e,n,f){this.ctx.fillText(e,n,f)},f.prototype.backgroundRepeatShape=function(e,n,f,o,d,i,t,l,s){var u=[["line",Math.round(d),Math.round(i)],["line",Math.round(d+t),Math.round(i)],["line",Math.round(d+t),Math.round(l+i)],["line",Math.round(d),Math.round(l+i)]];this.clip([u],function(){this.renderBackgroundRepeat(e,n,f,o,s[3],s[0])},this)},f.prototype.renderBackgroundRepeat=function(e,n,f,o,d,i){var t=Math.round(o.left+n.left+d),l=Math.round(o.top+n.top+i);this.setFillStyle(this.ctx.createPattern(this.resizeImage(e,f),"repeat")),this.ctx.translate(t,l),this.ctx.fill(),this.ctx.translate(-t,-l)},f.prototype.renderBackgroundGradient=function(e,n){if(e instanceof i){var f=this.ctx.createLinearGradient(n.left+n.width*e.x0,n.top+n.height*e.y0,n.left+n.width*e.x1,n.top+n.height*e.y1);e.colorStops.forEach(function(e){f.addColorStop(e.stop,e.color.toString())}),this.rectangle(n.left,n.top,n.width,n.height,f)}},f.prototype.resizeImage=function(e,n){var f=e.image;if(f.width===n.width&&f.height===n.height)return f;var o,d=document.createElement("canvas");return d.width=n.width,d.height=n.height,o=d.getContext("2d"),o.drawImage(f,0,0,f.width,f.height,0,0,n.width,n.height),d},n.exports=f},{"../lineargradientcontainer":12,"../log":13,"../renderer":19}],21:[function(e,n){function f(e,n,f,d){o.call(this,f,d),this.ownStacking=e,this.contexts=[],this.children=[],this.opacity=(this.parent?this.parent.stack.opacity:1)*n}var o=e("./nodecontainer");f.prototype=Object.create(o.prototype),f.prototype.getParentStack=function(e){var n=this.parent?this.parent.stack:null;return n?n.ownStacking?n:n.getParentStack(e):e.stack},n.exports=f},{"./nodecontainer":14}],22:[function(e,n){function f(e){this.rangeBounds=this.testRangeBounds(e),this.cors=this.testCORS(),this.svg=this.testSVG()}f.prototype.testRangeBounds=function(e){var n,f,o,d,i=!1;return e.createRange&&(n=e.createRange(),n.getBoundingClientRect&&(f=e.createElement("boundtest"),f.style.height="123px",f.style.display="block",e.body.appendChild(f),n.selectNode(f),o=n.getBoundingClientRect(),d=o.height,123===d&&(i=!0),e.body.removeChild(f))),i},f.prototype.testCORS=function(){return"undefined"!=typeof(new Image).crossOrigin},f.prototype.testSVG=function(){var e=new Image,n=document.createElement("canvas"),f=n.getContext("2d");e.src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";try{f.drawImage(e,0,0),n.toDataURL()}catch(o){return!1}return!0},n.exports=f},{}],23:[function(e,n){function f(e){this.src=e,this.image=null;var n=this;this.promise=this.hasFabric().then(function(){return n.isInline(e)?Promise.resolve(n.inlineFormatting(e)):o(e)}).then(function(e){return new Promise(function(f){window.html2canvas.svg.fabric.loadSVGFromString(e,n.createCanvas.call(n,f))})})}var o=e("./xhr"),d=e("./utils").decode64;f.prototype.hasFabric=function(){return window.html2canvas.svg&&window.html2canvas.svg.fabric?Promise.resolve():Promise.reject(new Error("html2canvas.svg.js is not loaded, cannot render svg"))},f.prototype.inlineFormatting=function(e){return/^data:image\/svg\+xml;base64,/.test(e)?this.decode64(this.removeContentType(e)):this.removeContentType(e)},f.prototype.removeContentType=function(e){return e.replace(/^data:image\/svg\+xml(;base64)?,/,"")},f.prototype.isInline=function(e){return/^data:image\/svg\+xml/i.test(e)},f.prototype.createCanvas=function(e){var n=this;return function(f,o){var d=new window.html2canvas.svg.fabric.StaticCanvas("c");n.image=d.lowerCanvasEl,d.setWidth(o.width).setHeight(o.height).add(window.html2canvas.svg.fabric.util.groupSVGElements(f,o)).renderAll(),e(d.lowerCanvasEl)}},f.prototype.decode64=function(e){return"function"==typeof window.atob?window.atob(e):d(e)},n.exports=f},{"./utils":26,"./xhr":28}],24:[function(e,n){function f(e,n){this.src=e,this.image=null;var f=this;this.promise=n?new Promise(function(n,o){f.image=new Image,f.image.onload=n,f.image.onerror=o,f.image.src="data:image/svg+xml,"+(new XMLSerializer).serializeToString(e),f.image.complete===!0&&n(f.image)}):this.hasFabric().then(function(){return new Promise(function(n){window.html2canvas.svg.fabric.parseSVGDocument(e,f.createCanvas.call(f,n))})})}var o=e("./svgcontainer");f.prototype=Object.create(o.prototype),n.exports=f},{"./svgcontainer":23}],25:[function(e,n){function f(e,n){d.call(this,e,n)}function o(e,n,f){return e.length>0?n+f.toUpperCase():void 0}var d=e("./nodecontainer");f.prototype=Object.create(d.prototype),f.prototype.applyTextTransform=function(){this.node.data=this.transform(this.parent.css("textTransform"))},f.prototype.transform=function(e){var n=this.node.data;switch(e){case"lowercase":return n.toLowerCase();case"capitalize":return n.replace(/(^|\s|:|-|\(|\))([a-z])/g,o);case"uppercase":return n.toUpperCase();default:return n}},n.exports=f},{"./nodecontainer":14}],26:[function(e,n,f){f.smallImage=function(){return"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"},f.bind=function(e,n){return function(){return e.apply(n,arguments)}},f.decode64=function(e){var n,f,o,d,i,t,l,s,u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a=e.length,p="";for(n=0;a>n;n+=4)f=u.indexOf(e[n]),o=u.indexOf(e[n+1]),d=u.indexOf(e[n+2]),i=u.indexOf(e[n+3]),t=f<<2|o>>4,l=(15&o)<<4|d>>2,s=(3&d)<<6|i,p+=64===d?String.fromCharCode(t):64===i||-1===i?String.fromCharCode(t,l):String.fromCharCode(t,l,s);return p},f.getBounds=function(e){if(e.getBoundingClientRect){var n=e.getBoundingClientRect(),f=null==e.offsetWidth?n.width:e.offsetWidth;return{top:n.top,bottom:n.bottom||n.top+n.height,right:n.left+f,left:n.left,width:f,height:null==e.offsetHeight?n.height:e.offsetHeight}}return{}},f.offsetBounds=function(e){var n=e.offsetParent?f.offsetBounds(e.offsetParent):{top:0,left:0};return{top:e.offsetTop+n.top,bottom:e.offsetTop+e.offsetHeight+n.top,right:e.offsetLeft+n.left+e.offsetWidth,left:e.offsetLeft+n.left,width:e.offsetWidth,height:e.offsetHeight}},f.parseBackgrounds=function(e){var n,f,o,d,i,t,l,s=" \r\n	",u=[],a=0,p=0,c=function(){n&&('"'===f.substr(0,1)&&(f=f.substr(1,f.length-2)),f&&l.push(f),"-"===n.substr(0,1)&&(d=n.indexOf("-",1)+1)>0&&(o=n.substr(0,d),n=n.substr(d)),u.push({prefix:o,method:n.toLowerCase(),value:i,args:l,image:null})),l=[],n=o=f=i=""};return l=[],n=o=f=i="",e.split("").forEach(function(e){if(!(0===a&&s.indexOf(e)>-1)){switch(e){case'"':t?t===e&&(t=null):t=e;break;case"(":if(t)break;if(0===a)return a=1,void(i+=e);p++;break;case")":if(t)break;if(1===a){if(0===p)return a=0,i+=e,void c();p--}break;case",":if(t)break;if(0===a)return void c();if(1===a&&0===p&&!n.match(/^url$/i))return l.push(f),f="",void(i+=e)}i+=e,0===a?n+=e:f+=e}}),c(),u}},{}],27:[function(e,n){function f(e){o.apply(this,arguments),this.type="linear"===e.args[0]?o.TYPES.LINEAR:o.TYPES.RADIAL}var o=e("./gradientcontainer");f.prototype=Object.create(o.prototype),n.exports=f},{"./gradientcontainer":9}],28:[function(e,n){function f(e){return new Promise(function(n,f){var o=new XMLHttpRequest;o.open("GET",e),o.onload=function(){200===o.status?n(o.responseText):f(new Error(o.statusText))},o.onerror=function(){f(new Error("Network Error"))},o.send()})}n.exports=f},{}]},{},[4])(4)});
/*
  html2canvas 0.5.0-beta3 <http://html2canvas.hertzen.com>
  Copyright (c) 2016 Niklas von Hertzen

  Released under  License
*/

!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.html2canvas=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
(function (global){
/*! http://mths.be/punycode v1.2.4 by @mathias */
;(function(root) {

	/** Detect free variables */
	var freeExports = typeof exports == 'object' && exports;
	var freeModule = typeof module == 'object' && module &&
		module.exports == freeExports && module;
	var freeGlobal = typeof global == 'object' && global;
	if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
		root = freeGlobal;
	}

	/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */
	var punycode,

	/** Highest positive signed 32-bit float value */
	maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

	/** Bootstring parameters */
	base = 36,
	tMin = 1,
	tMax = 26,
	skew = 38,
	damp = 700,
	initialBias = 72,
	initialN = 128, // 0x80
	delimiter = '-', // '\x2D'

	/** Regular expressions */
	regexPunycode = /^xn--/,
	regexNonASCII = /[^ -~]/, // unprintable ASCII chars + non-ASCII chars
	regexSeparators = /\x2E|\u3002|\uFF0E|\uFF61/g, // RFC 3490 separators

	/** Error messages */
	errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	},

	/** Convenience shortcuts */
	baseMinusTMin = base - tMin,
	floor = Math.floor,
	stringFromCharCode = String.fromCharCode,

	/** Temporary variable */
	key;

	/*--------------------------------------------------------------------------*/

	/**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */
	function error(type) {
		throw RangeError(errors[type]);
	}

	/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */
	function map(array, fn) {
		var length = array.length;
		while (length--) {
			array[length] = fn(array[length]);
		}
		return array;
	}

	/**
	 * A simple `Array#map`-like wrapper to work with domain name strings.
	 * @private
	 * @param {String} domain The domain name.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */
	function mapDomain(string, fn) {
		return map(string.split(regexSeparators), fn).join('.');
	}

	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <http://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */
	function ucs2decode(string) {
		var output = [],
		    counter = 0,
		    length = string.length,
		    value,
		    extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */
	function ucs2encode(array) {
		return map(array, function(value) {
			var output = '';
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
			return output;
		}).join('');
	}

	/**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */
	function basicToDigit(codePoint) {
		if (codePoint - 48 < 10) {
			return codePoint - 22;
		}
		if (codePoint - 65 < 26) {
			return codePoint - 65;
		}
		if (codePoint - 97 < 26) {
			return codePoint - 97;
		}
		return base;
	}

	/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */
	function digitToBasic(digit, flag) {
		//  0..25 map to ASCII a..z or A..Z
		// 26..35 map to ASCII 0..9
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	}

	/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * http://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */
	function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	}

	/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */
	function decode(input) {
		// Don't use UCS-2
		var output = [],
		    inputLength = input.length,
		    out,
		    i = 0,
		    n = initialN,
		    bias = initialBias,
		    basic,
		    j,
		    index,
		    oldi,
		    w,
		    k,
		    digit,
		    t,
		    /** Cached calculation results */
		    baseMinusT;

		// Handle the basic code points: let `basic` be the number of input code
		// points before the last delimiter, or `0` if there is none, then copy
		// the first basic code points to the output.

		basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (j = 0; j < basic; ++j) {
			// if it's not a basic code point
			if (input.charCodeAt(j) >= 0x80) {
				error('not-basic');
			}
			output.push(input.charCodeAt(j));
		}

		// Main decoding loop: start just after the last delimiter if any basic code
		// points were copied; start at the beginning otherwise.

		for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

			// `index` is the index of the next character to be consumed.
			// Decode a generalized variable-length integer into `delta`,
			// which gets added to `i`. The overflow checking is easier
			// if we increase `i` as we go, then subtract off its starting
			// value at the end to obtain `delta`.
			for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

				if (index >= inputLength) {
					error('invalid-input');
				}

				digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error('overflow');
				}

				i += digit * w;
				t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

				if (digit < t) {
					break;
				}

				baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error('overflow');
				}

				w *= baseMinusT;

			}

			out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			// `i` was supposed to wrap around from `out` to `0`,
			// incrementing `n` each time, so we'll fix that now:
			if (floor(i / out) > maxInt - n) {
				error('overflow');
			}

			n += floor(i / out);
			i %= out;

			// Insert `n` at position `i` of the output
			output.splice(i++, 0, n);

		}

		return ucs2encode(output);
	}

	/**
	 * Converts a string of Unicode symbols to a Punycode string of ASCII-only
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */
	function encode(input) {
		var n,
		    delta,
		    handledCPCount,
		    basicLength,
		    bias,
		    j,
		    m,
		    q,
		    k,
		    t,
		    currentValue,
		    output = [],
		    /** `inputLength` will hold the number of code points in `input`. */
		    inputLength,
		    /** Cached calculation results */
		    handledCPCountPlusOne,
		    baseMinusT,
		    qMinusT;

		// Convert the input in UCS-2 to Unicode
		input = ucs2decode(input);

		// Cache the length
		inputLength = input.length;

		// Initialize the state
		n = initialN;
		delta = 0;
		bias = initialBias;

		// Handle the basic code points
		for (j = 0; j < inputLength; ++j) {
			currentValue = input[j];
			if (currentValue < 0x80) {
				output.push(stringFromCharCode(currentValue));
			}
		}

		handledCPCount = basicLength = output.length;

		// `handledCPCount` is the number of code points that have been handled;
		// `basicLength` is the number of basic code points.

		// Finish the basic string - if it is not empty - with a delimiter
		if (basicLength) {
			output.push(delimiter);
		}

		// Main encoding loop:
		while (handledCPCount < inputLength) {

			// All non-basic code points < n have been handled already. Find the next
			// larger one:
			for (m = maxInt, j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
			// but guard against overflow
			handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];

				if (currentValue < n && ++delta > maxInt) {
					error('overflow');
				}

				if (currentValue == n) {
					// Represent delta as a generalized variable-length integer
					for (q = delta, k = base; /* no condition */; k += base) {
						t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
						if (q < t) {
							break;
						}
						qMinusT = q - t;
						baseMinusT = base - t;
						output.push(
							stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
						);
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}

			++delta;
			++n;

		}
		return output.join('');
	}

	/**
	 * Converts a Punycode string representing a domain name to Unicode. Only the
	 * Punycoded parts of the domain name will be converted, i.e. it doesn't
	 * matter if you call it on a string that has already been converted to
	 * Unicode.
	 * @memberOf punycode
	 * @param {String} domain The Punycode domain name to convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */
	function toUnicode(domain) {
		return mapDomain(domain, function(string) {
			return regexPunycode.test(string)
				? decode(string.slice(4).toLowerCase())
				: string;
		});
	}

	/**
	 * Converts a Unicode string representing a domain name to Punycode. Only the
	 * non-ASCII parts of the domain name will be converted, i.e. it doesn't
	 * matter if you call it with a domain that's already in ASCII.
	 * @memberOf punycode
	 * @param {String} domain The domain name to convert, as a Unicode string.
	 * @returns {String} The Punycode representation of the given domain name.
	 */
	function toASCII(domain) {
		return mapDomain(domain, function(string) {
			return regexNonASCII.test(string)
				? 'xn--' + encode(string)
				: string;
		});
	}

	/*--------------------------------------------------------------------------*/

	/** Define the public API */
	punycode = {
		/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */
		'version': '1.2.4',
		/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <http://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */
		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};

	/** Expose `punycode` */
	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		typeof define == 'function' &&
		typeof define.amd == 'object' &&
		define.amd
	) {
		define('punycode', function() {
			return punycode;
		});
	} else if (freeExports && !freeExports.nodeType) {
		if (freeModule) { // in Node.js or RingoJS v0.8.0+
			freeModule.exports = punycode;
		} else { // in Narwhal or RingoJS v0.7.0-
			for (key in punycode) {
				punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
			}
		}
	} else { // in Rhino or a web browser
		root.punycode = punycode;
	}

}(this));

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(_dereq_,module,exports){
var log = _dereq_('./log');

function restoreOwnerScroll(ownerDocument, x, y) {
    if (ownerDocument.defaultView && (x !== ownerDocument.defaultView.pageXOffset || y !== ownerDocument.defaultView.pageYOffset)) {
        ownerDocument.defaultView.scrollTo(x, y);
    }
}

function cloneCanvasContents(canvas, clonedCanvas) {
    try {
        if (clonedCanvas) {
            clonedCanvas.width = canvas.width;
            clonedCanvas.height = canvas.height;
            clonedCanvas.getContext("2d").putImageData(canvas.getContext("2d").getImageData(0, 0, canvas.width, canvas.height), 0, 0);
        }
    } catch(e) {
        log("Unable to copy canvas content from", canvas, e);
    }
}

function cloneNode(node, javascriptEnabled) {
    var clone = node.nodeType === 3 ? document.createTextNode(node.nodeValue) : node.cloneNode(false);

    var child = node.firstChild;
    while(child) {
        if (javascriptEnabled === true || child.nodeType !== 1 || child.nodeName !== 'SCRIPT') {
            clone.appendChild(cloneNode(child, javascriptEnabled));
        }
        child = child.nextSibling;
    }

    if (node.nodeType === 1) {
        clone._scrollTop = node.scrollTop;
        clone._scrollLeft = node.scrollLeft;
        if (node.nodeName === "CANVAS") {
            cloneCanvasContents(node, clone);
        } else if (node.nodeName === "TEXTAREA" || node.nodeName === "SELECT") {
            clone.value = node.value;
        }
    }

    return clone;
}

function initNode(node) {
    if (node.nodeType === 1) {
        node.scrollTop = node._scrollTop;
        node.scrollLeft = node._scrollLeft;

        var child = node.firstChild;
        while(child) {
            initNode(child);
            child = child.nextSibling;
        }
    }
}

module.exports = function(ownerDocument, containerDocument, width, height, options, x ,y) {
    var documentElement = cloneNode(ownerDocument.documentElement, options.javascriptEnabled);
    var container = containerDocument.createElement("iframe");

    container.className = "html2canvas-container";
    container.style.visibility = "hidden";
    container.style.position = "fixed";
    container.style.left = "-10000px";
    container.style.top = "0px";
    container.style.border = "0";
    container.width = width;
    container.height = height;
    container.scrolling = "no"; // ios won't scroll without it
    containerDocument.body.appendChild(container);

    return new Promise(function(resolve) {
        var documentClone = container.contentWindow.document;

        /* Chrome doesn't detect relative background-images assigned in inline <style> sheets when fetched through getComputedStyle
         if window url is about:blank, we can assign the url to current by writing onto the document
         */
        container.contentWindow.onload = container.onload = function() {
            var interval = setInterval(function() {
                if (documentClone.body.childNodes.length > 0) {
                    initNode(documentClone.documentElement);
                    clearInterval(interval);
                    if (options.type === "view") {
                        container.contentWindow.scrollTo(x, y);
                        if ((/(iPad|iPhone|iPod)/g).test(navigator.userAgent) && (container.contentWindow.scrollY !== y || container.contentWindow.scrollX !== x)) {
                            documentClone.documentElement.style.top = (-y) + "px";
                            documentClone.documentElement.style.left = (-x) + "px";
                            documentClone.documentElement.style.position = 'absolute';
                        }
                    }
                    resolve(container);
                }
            }, 50);
        };

        documentClone.open();
        documentClone.write("<!DOCTYPE html><html></html>");
        // Chrome scrolls the parent document for some reason after the write to the cloned window???
        restoreOwnerScroll(ownerDocument, x, y);
        documentClone.replaceChild(documentClone.adoptNode(documentElement), documentClone.documentElement);
        documentClone.close();
    });
};

},{"./log":13}],3:[function(_dereq_,module,exports){
// http://dev.w3.org/csswg/css-color/

function Color(value) {
    this.r = 0;
    this.g = 0;
    this.b = 0;
    this.a = null;
    var result = this.fromArray(value) ||
        this.namedColor(value) ||
        this.rgb(value) ||
        this.rgba(value) ||
        this.hex6(value) ||
        this.hex3(value);
}

Color.prototype.darken = function(amount) {
    var a = 1 - amount;
    return  new Color([
        Math.round(this.r * a),
        Math.round(this.g * a),
        Math.round(this.b * a),
        this.a
    ]);
};

Color.prototype.isTransparent = function() {
    return this.a === 0;
};

Color.prototype.isBlack = function() {
    return this.r === 0 && this.g === 0 && this.b === 0;
};

Color.prototype.fromArray = function(array) {
    if (Array.isArray(array)) {
        this.r = Math.min(array[0], 255);
        this.g = Math.min(array[1], 255);
        this.b = Math.min(array[2], 255);
        if (array.length > 3) {
            this.a = array[3];
        }
    }

    return (Array.isArray(array));
};

var _hex3 = /^#([a-f0-9]{3})$/i;

Color.prototype.hex3 = function(value) {
    var match = null;
    if ((match = value.match(_hex3)) !== null) {
        this.r = parseInt(match[1][0] + match[1][0], 16);
        this.g = parseInt(match[1][1] + match[1][1], 16);
        this.b = parseInt(match[1][2] + match[1][2], 16);
    }
    return match !== null;
};

var _hex6 = /^#([a-f0-9]{6})$/i;

Color.prototype.hex6 = function(value) {
    var match = null;
    if ((match = value.match(_hex6)) !== null) {
        this.r = parseInt(match[1].substring(0, 2), 16);
        this.g = parseInt(match[1].substring(2, 4), 16);
        this.b = parseInt(match[1].substring(4, 6), 16);
    }
    return match !== null;
};


var _rgb = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/;

Color.prototype.rgb = function(value) {
    var match = null;
    if ((match = value.match(_rgb)) !== null) {
        this.r = Number(match[1]);
        this.g = Number(match[2]);
        this.b = Number(match[3]);
    }
    return match !== null;
};

var _rgba = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d?\.?\d+)\s*\)$/;

Color.prototype.rgba = function(value) {
    var match = null;
    if ((match = value.match(_rgba)) !== null) {
        this.r = Number(match[1]);
        this.g = Number(match[2]);
        this.b = Number(match[3]);
        this.a = Number(match[4]);
    }
    return match !== null;
};

Color.prototype.toString = function() {
    return this.a !== null && this.a !== 1 ?
    "rgba(" + [this.r, this.g, this.b, this.a].join(",") + ")" :
    "rgb(" + [this.r, this.g, this.b].join(",") + ")";
};

Color.prototype.namedColor = function(value) {
    value = value.toLowerCase();
    var color = colors[value];
    if (color) {
        this.r = color[0];
        this.g = color[1];
        this.b = color[2];
    } else if (value === "transparent") {
        this.r = this.g = this.b = this.a = 0;
        return true;
    }

    return !!color;
};

Color.prototype.isColor = true;

// JSON.stringify([].slice.call($$('.named-color-table tr'), 1).map(function(row) { return [row.childNodes[3].textContent, row.childNodes[5].textContent.trim().split(",").map(Number)] }).reduce(function(data, row) {data[row[0]] = row[1]; return data}, {}))
var colors = {
    "aliceblue": [240, 248, 255],
    "antiquewhite": [250, 235, 215],
    "aqua": [0, 255, 255],
    "aquamarine": [127, 255, 212],
    "azure": [240, 255, 255],
    "beige": [245, 245, 220],
    "bisque": [255, 228, 196],
    "black": [0, 0, 0],
    "blanchedalmond": [255, 235, 205],
    "blue": [0, 0, 255],
    "blueviolet": [138, 43, 226],
    "brown": [165, 42, 42],
    "burlywood": [222, 184, 135],
    "cadetblue": [95, 158, 160],
    "chartreuse": [127, 255, 0],
    "chocolate": [210, 105, 30],
    "coral": [255, 127, 80],
    "cornflowerblue": [100, 149, 237],
    "cornsilk": [255, 248, 220],
    "crimson": [220, 20, 60],
    "cyan": [0, 255, 255],
    "darkblue": [0, 0, 139],
    "darkcyan": [0, 139, 139],
    "darkgoldenrod": [184, 134, 11],
    "darkgray": [169, 169, 169],
    "darkgreen": [0, 100, 0],
    "darkgrey": [169, 169, 169],
    "darkkhaki": [189, 183, 107],
    "darkmagenta": [139, 0, 139],
    "darkolivegreen": [85, 107, 47],
    "darkorange": [255, 140, 0],
    "darkorchid": [153, 50, 204],
    "darkred": [139, 0, 0],
    "darksalmon": [233, 150, 122],
    "darkseagreen": [143, 188, 143],
    "darkslateblue": [72, 61, 139],
    "darkslategray": [47, 79, 79],
    "darkslategrey": [47, 79, 79],
    "darkturquoise": [0, 206, 209],
    "darkviolet": [148, 0, 211],
    "deeppink": [255, 20, 147],
    "deepskyblue": [0, 191, 255],
    "dimgray": [105, 105, 105],
    "dimgrey": [105, 105, 105],
    "dodgerblue": [30, 144, 255],
    "firebrick": [178, 34, 34],
    "floralwhite": [255, 250, 240],
    "forestgreen": [34, 139, 34],
    "fuchsia": [255, 0, 255],
    "gainsboro": [220, 220, 220],
    "ghostwhite": [248, 248, 255],
    "gold": [255, 215, 0],
    "goldenrod": [218, 165, 32],
    "gray": [128, 128, 128],
    "green": [0, 128, 0],
    "greenyellow": [173, 255, 47],
    "grey": [128, 128, 128],
    "honeydew": [240, 255, 240],
    "hotpink": [255, 105, 180],
    "indianred": [205, 92, 92],
    "indigo": [75, 0, 130],
    "ivory": [255, 255, 240],
    "khaki": [240, 230, 140],
    "lavender": [230, 230, 250],
    "lavenderblush": [255, 240, 245],
    "lawngreen": [124, 252, 0],
    "lemonchiffon": [255, 250, 205],
    "lightblue": [173, 216, 230],
    "lightcoral": [240, 128, 128],
    "lightcyan": [224, 255, 255],
    "lightgoldenrodyellow": [250, 250, 210],
    "lightgray": [211, 211, 211],
    "lightgreen": [144, 238, 144],
    "lightgrey": [211, 211, 211],
    "lightpink": [255, 182, 193],
    "lightsalmon": [255, 160, 122],
    "lightseagreen": [32, 178, 170],
    "lightskyblue": [135, 206, 250],
    "lightslategray": [119, 136, 153],
    "lightslategrey": [119, 136, 153],
    "lightsteelblue": [176, 196, 222],
    "lightyellow": [255, 255, 224],
    "lime": [0, 255, 0],
    "limegreen": [50, 205, 50],
    "linen": [250, 240, 230],
    "magenta": [255, 0, 255],
    "maroon": [128, 0, 0],
    "mediumaquamarine": [102, 205, 170],
    "mediumblue": [0, 0, 205],
    "mediumorchid": [186, 85, 211],
    "mediumpurple": [147, 112, 219],
    "mediumseagreen": [60, 179, 113],
    "mediumslateblue": [123, 104, 238],
    "mediumspringgreen": [0, 250, 154],
    "mediumturquoise": [72, 209, 204],
    "mediumvioletred": [199, 21, 133],
    "midnightblue": [25, 25, 112],
    "mintcream": [245, 255, 250],
    "mistyrose": [255, 228, 225],
    "moccasin": [255, 228, 181],
    "navajowhite": [255, 222, 173],
    "navy": [0, 0, 128],
    "oldlace": [253, 245, 230],
    "olive": [128, 128, 0],
    "olivedrab": [107, 142, 35],
    "orange": [255, 165, 0],
    "orangered": [255, 69, 0],
    "orchid": [218, 112, 214],
    "palegoldenrod": [238, 232, 170],
    "palegreen": [152, 251, 152],
    "paleturquoise": [175, 238, 238],
    "palevioletred": [219, 112, 147],
    "papayawhip": [255, 239, 213],
    "peachpuff": [255, 218, 185],
    "peru": [205, 133, 63],
    "pink": [255, 192, 203],
    "plum": [221, 160, 221],
    "powderblue": [176, 224, 230],
    "purple": [128, 0, 128],
    "rebeccapurple": [102, 51, 153],
    "red": [255, 0, 0],
    "rosybrown": [188, 143, 143],
    "royalblue": [65, 105, 225],
    "saddlebrown": [139, 69, 19],
    "salmon": [250, 128, 114],
    "sandybrown": [244, 164, 96],
    "seagreen": [46, 139, 87],
    "seashell": [255, 245, 238],
    "sienna": [160, 82, 45],
    "silver": [192, 192, 192],
    "skyblue": [135, 206, 235],
    "slateblue": [106, 90, 205],
    "slategray": [112, 128, 144],
    "slategrey": [112, 128, 144],
    "snow": [255, 250, 250],
    "springgreen": [0, 255, 127],
    "steelblue": [70, 130, 180],
    "tan": [210, 180, 140],
    "teal": [0, 128, 128],
    "thistle": [216, 191, 216],
    "tomato": [255, 99, 71],
    "turquoise": [64, 224, 208],
    "violet": [238, 130, 238],
    "wheat": [245, 222, 179],
    "white": [255, 255, 255],
    "whitesmoke": [245, 245, 245],
    "yellow": [255, 255, 0],
    "yellowgreen": [154, 205, 50]
};

module.exports = Color;

},{}],4:[function(_dereq_,module,exports){
var Support = _dereq_('./support');
var CanvasRenderer = _dereq_('./renderers/canvas');
var ImageLoader = _dereq_('./imageloader');
var NodeParser = _dereq_('./nodeparser');
var NodeContainer = _dereq_('./nodecontainer');
var log = _dereq_('./log');
var utils = _dereq_('./utils');
var createWindowClone = _dereq_('./clone');
var loadUrlDocument = _dereq_('./proxy').loadUrlDocument;
var getBounds = utils.getBounds;

var html2canvasNodeAttribute = "data-html2canvas-node";
var html2canvasCloneIndex = 0;

function html2canvas(nodeList, options) {
    var index = html2canvasCloneIndex++;
    options = options || {};
    if (options.logging) {
        log.options.logging = true;
        log.options.start = Date.now();
    }

    options.async = typeof(options.async) === "undefined" ? true : options.async;
    options.allowTaint = typeof(options.allowTaint) === "undefined" ? false : options.allowTaint;
    options.removeContainer = typeof(options.removeContainer) === "undefined" ? true : options.removeContainer;
    options.javascriptEnabled = typeof(options.javascriptEnabled) === "undefined" ? false : options.javascriptEnabled;
    options.imageTimeout = typeof(options.imageTimeout) === "undefined" ? 10000 : options.imageTimeout;
    options.renderer = typeof(options.renderer) === "function" ? options.renderer : CanvasRenderer;
    options.strict = !!options.strict;

    if (typeof(nodeList) === "string") {
        if (typeof(options.proxy) !== "string") {
            return Promise.reject("Proxy must be used when rendering url");
        }
        var width = options.width != null ? options.width : window.innerWidth;
        var height = options.height != null ? options.height : window.innerHeight;
        return loadUrlDocument(absoluteUrl(nodeList), options.proxy, document, width, height, options).then(function(container) {
            return renderWindow(container.contentWindow.document.documentElement, container, options, width, height);
        });
    }

    var node = ((nodeList === undefined) ? [document.documentElement] : ((nodeList.length) ? nodeList : [nodeList]))[0];
    node.setAttribute(html2canvasNodeAttribute + index, index);
    return renderDocument(node.ownerDocument, options, node.ownerDocument.defaultView.innerWidth, node.ownerDocument.defaultView.innerHeight, index).then(function(canvas) {
        if (typeof(options.onrendered) === "function") {
            log("options.onrendered is deprecated, html2canvas returns a Promise containing the canvas");
            options.onrendered(canvas);
        }
        return canvas;
    });
}

html2canvas.CanvasRenderer = CanvasRenderer;
html2canvas.NodeContainer = NodeContainer;
html2canvas.log = log;
html2canvas.utils = utils;

var html2canvasExport = (typeof(document) === "undefined" || typeof(Object.create) !== "function" || typeof(document.createElement("canvas").getContext) !== "function") ? function() {
    return Promise.reject("No canvas support");
} : html2canvas;

module.exports = html2canvasExport;

if (typeof(define) === 'function' && define.amd) {
    define('html2canvas', [], function() {
        return html2canvasExport;
    });
}

function renderDocument(document, options, windowWidth, windowHeight, html2canvasIndex) {
    return createWindowClone(document, document, windowWidth, windowHeight, options, document.defaultView.pageXOffset, document.defaultView.pageYOffset).then(function(container) {
        log("Document cloned");
        var attributeName = html2canvasNodeAttribute + html2canvasIndex;
        var selector = "[" + attributeName + "='" + html2canvasIndex + "']";
        document.querySelector(selector).removeAttribute(attributeName);
        var clonedWindow = container.contentWindow;
        var node = clonedWindow.document.querySelector(selector);
        var oncloneHandler = (typeof(options.onclone) === "function") ? Promise.resolve(options.onclone(clonedWindow.document)) : Promise.resolve(true);
        return oncloneHandler.then(function() {
            return renderWindow(node, container, options, windowWidth, windowHeight);
        });
    });
}

function renderWindow(node, container, options, windowWidth, windowHeight) {
    var clonedWindow = container.contentWindow;
    var support = new Support(clonedWindow.document);
    var imageLoader = new ImageLoader(options, support);
    var bounds = getBounds(node);
    var width = options.type === "view" ? windowWidth : documentWidth(clonedWindow.document);
    var height = options.type === "view" ? windowHeight : documentHeight(clonedWindow.document);
    var renderer = new options.renderer(width, height, imageLoader, options, document);
    var parser = new NodeParser(node, renderer, support, imageLoader, options);
    return parser.ready.then(function() {
        log("Finished rendering");
        var canvas;

        if (options.type === "view") {
            canvas = crop(renderer.canvas, {width: renderer.canvas.width, height: renderer.canvas.height, top: 0, left: 0, x: 0, y: 0});
        } else if (node === clonedWindow.document.body || node === clonedWindow.document.documentElement || options.canvas != null) {
            canvas = renderer.canvas;
        } else {
            canvas = crop(renderer.canvas, {width:  options.width != null ? options.width : bounds.width, height: options.height != null ? options.height : bounds.height, top: bounds.top, left: bounds.left, x: 0, y: 0});
        }

        cleanupContainer(container, options);
        return canvas;
    });
}

function cleanupContainer(container, options) {
    if (options.removeContainer) {
        container.parentNode.removeChild(container);
        log("Cleaned up container");
    }
}

function crop(canvas, bounds) {
    var croppedCanvas = document.createElement("canvas");
    var x1 = Math.min(canvas.width - 1, Math.max(0, bounds.left));
    var x2 = Math.min(canvas.width, Math.max(1, bounds.left + bounds.width));
    var y1 = Math.min(canvas.height - 1, Math.max(0, bounds.top));
    var y2 = Math.min(canvas.height, Math.max(1, bounds.top + bounds.height));
    croppedCanvas.width = bounds.width;
    croppedCanvas.height =  bounds.height;
    var width = x2-x1;
    var height = y2-y1;
    log("Cropping canvas at:", "left:", bounds.left, "top:", bounds.top, "width:", width, "height:", height);
    log("Resulting crop with width", bounds.width, "and height", bounds.height, "with x", x1, "and y", y1);
    croppedCanvas.getContext("2d").drawImage(canvas, x1, y1, width, height, bounds.x, bounds.y, width, height);
    return croppedCanvas;
}

function documentWidth (doc) {
    return Math.max(
        Math.max(doc.body.scrollWidth, doc.documentElement.scrollWidth),
        Math.max(doc.body.offsetWidth, doc.documentElement.offsetWidth),
        Math.max(doc.body.clientWidth, doc.documentElement.clientWidth)
    );
}

function documentHeight (doc) {
    return Math.max(
        Math.max(doc.body.scrollHeight, doc.documentElement.scrollHeight),
        Math.max(doc.body.offsetHeight, doc.documentElement.offsetHeight),
        Math.max(doc.body.clientHeight, doc.documentElement.clientHeight)
    );
}

function absoluteUrl(url) {
    var link = document.createElement("a");
    link.href = url;
    link.href = link.href;
    return link;
}

},{"./clone":2,"./imageloader":11,"./log":13,"./nodecontainer":14,"./nodeparser":15,"./proxy":16,"./renderers/canvas":20,"./support":22,"./utils":26}],5:[function(_dereq_,module,exports){
var log = _dereq_('./log');
var smallImage = _dereq_('./utils').smallImage;

function DummyImageContainer(src) {
    this.src = src;
    log("DummyImageContainer for", src);
    if (!this.promise || !this.image) {
        log("Initiating DummyImageContainer");
        DummyImageContainer.prototype.image = new Image();
        var image = this.image;
        DummyImageContainer.prototype.promise = new Promise(function(resolve, reject) {
            image.onload = resolve;
            image.onerror = reject;
            image.src = smallImage();
            if (image.complete === true) {
                resolve(image);
            }
        });
    }
}

module.exports = DummyImageContainer;

},{"./log":13,"./utils":26}],6:[function(_dereq_,module,exports){
var smallImage = _dereq_('./utils').smallImage;

function Font(family, size) {
    var container = document.createElement('div'),
        img = document.createElement('img'),
        span = document.createElement('span'),
        sampleText = 'Hidden Text',
        baseline,
        middle;

    container.style.visibility = "hidden";
    container.style.fontFamily = family;
    container.style.fontSize = size;
    container.style.margin = 0;
    container.style.padding = 0;

    document.body.appendChild(container);

    img.src = smallImage();
    img.width = 1;
    img.height = 1;

    img.style.margin = 0;
    img.style.padding = 0;
    img.style.verticalAlign = "baseline";

    span.style.fontFamily = family;
    span.style.fontSize = size;
    span.style.margin = 0;
    span.style.padding = 0;

    span.appendChild(document.createTextNode(sampleText));
    container.appendChild(span);
    container.appendChild(img);
    baseline = (img.offsetTop - span.offsetTop) + 1;

    container.removeChild(span);
    container.appendChild(document.createTextNode(sampleText));

    container.style.lineHeight = "normal";
    img.style.verticalAlign = "super";

    middle = (img.offsetTop-container.offsetTop) + 1;

    document.body.removeChild(container);

    this.baseline = baseline;
    this.lineWidth = 1;
    this.middle = middle;
}

module.exports = Font;

},{"./utils":26}],7:[function(_dereq_,module,exports){
var Font = _dereq_('./font');

function FontMetrics() {
    this.data = {};
}

FontMetrics.prototype.getMetrics = function(family, size) {
    if (this.data[family + "-" + size] === undefined) {
        this.data[family + "-" + size] = new Font(family, size);
    }
    return this.data[family + "-" + size];
};

module.exports = FontMetrics;

},{"./font":6}],8:[function(_dereq_,module,exports){
var utils = _dereq_('./utils');
var getBounds = utils.getBounds;
var loadUrlDocument = _dereq_('./proxy').loadUrlDocument;

function FrameContainer(container, sameOrigin, options) {
    this.image = null;
    this.src = container;
    var self = this;
    var bounds = getBounds(container);
    this.promise = (!sameOrigin ? this.proxyLoad(options.proxy, bounds, options) : new Promise(function(resolve) {
        if (container.contentWindow.document.URL === "about:blank" || container.contentWindow.document.documentElement == null) {
            container.contentWindow.onload = container.onload = function() {
                resolve(container);
            };
        } else {
            resolve(container);
        }
    })).then(function(container) {
        var html2canvas = _dereq_('./core');
        return html2canvas(container.contentWindow.document.documentElement, {type: 'view', width: container.width, height: container.height, proxy: options.proxy, javascriptEnabled: options.javascriptEnabled, removeContainer: options.removeContainer, allowTaint: options.allowTaint, imageTimeout: options.imageTimeout / 2});
    }).then(function(canvas) {
        return self.image = canvas;
    });
}

FrameContainer.prototype.proxyLoad = function(proxy, bounds, options) {
    var container = this.src;
    return loadUrlDocument(container.src, proxy, container.ownerDocument, bounds.width, bounds.height, options);
};

module.exports = FrameContainer;

},{"./core":4,"./proxy":16,"./utils":26}],9:[function(_dereq_,module,exports){
function GradientContainer(imageData) {
    this.src = imageData.value;
    this.colorStops = [];
    this.type = null;
    this.x0 = 0.5;
    this.y0 = 0.5;
    this.x1 = 0.5;
    this.y1 = 0.5;
    this.promise = Promise.resolve(true);
}

GradientContainer.TYPES = {
    LINEAR: 1,
    RADIAL: 2
};

// TODO: support hsl[a], negative %/length values
// TODO: support <angle> (e.g. -?\d{1,3}(?:\.\d+)deg, etc. : https://developer.mozilla.org/docs/Web/CSS/angle )
GradientContainer.REGEXP_COLORSTOP = /^\s*(rgba?\(\s*\d{1,3},\s*\d{1,3},\s*\d{1,3}(?:,\s*[0-9\.]+)?\s*\)|[a-z]{3,20}|#[a-f0-9]{3,6})(?:\s+(\d{1,3}(?:\.\d+)?)(%|px)?)?(?:\s|$)/i;

module.exports = GradientContainer;

},{}],10:[function(_dereq_,module,exports){
function ImageContainer(src, cors) {
    this.src = src;
    this.image = new Image();
    var self = this;
    this.tainted = null;
    this.promise = new Promise(function(resolve, reject) {
        self.image.onload = resolve;
        self.image.onerror = reject;
        if (cors) {
            self.image.crossOrigin = "anonymous";
        }
        self.image.src = src;
        if (self.image.complete === true) {
            resolve(self.image);
        }
    });
}

module.exports = ImageContainer;

},{}],11:[function(_dereq_,module,exports){
var log = _dereq_('./log');
var ImageContainer = _dereq_('./imagecontainer');
var DummyImageContainer = _dereq_('./dummyimagecontainer');
var ProxyImageContainer = _dereq_('./proxyimagecontainer');
var FrameContainer = _dereq_('./framecontainer');
var SVGContainer = _dereq_('./svgcontainer');
var SVGNodeContainer = _dereq_('./svgnodecontainer');
var LinearGradientContainer = _dereq_('./lineargradientcontainer');
var WebkitGradientContainer = _dereq_('./webkitgradientcontainer');
var bind = _dereq_('./utils').bind;

function ImageLoader(options, support) {
    this.link = null;
    this.options = options;
    this.support = support;
    this.origin = this.getOrigin(window.location.href);
}

ImageLoader.prototype.findImages = function(nodes) {
    var images = [];
    nodes.reduce(function(imageNodes, container) {
        switch(container.node.nodeName) {
        case "IMG":
            return imageNodes.concat([{
                args: [container.node.src],
                method: "url"
            }]);
        case "svg":
        case "IFRAME":
            return imageNodes.concat([{
                args: [container.node],
                method: container.node.nodeName
            }]);
        }
        return imageNodes;
    }, []).forEach(this.addImage(images, this.loadImage), this);
    return images;
};

ImageLoader.prototype.findBackgroundImage = function(images, container) {
    container.parseBackgroundImages().filter(this.hasImageBackground).forEach(this.addImage(images, this.loadImage), this);
    return images;
};

ImageLoader.prototype.addImage = function(images, callback) {
    return function(newImage) {
        newImage.args.forEach(function(image) {
            if (!this.imageExists(images, image)) {
                images.splice(0, 0, callback.call(this, newImage));
                log('Added image #' + (images.length), typeof(image) === "string" ? image.substring(0, 100) : image);
            }
        }, this);
    };
};

ImageLoader.prototype.hasImageBackground = function(imageData) {
    return imageData.method !== "none";
};

ImageLoader.prototype.loadImage = function(imageData) {
    if (imageData.method === "url") {
        var src = imageData.args[0];
        if (this.isSVG(src) && !this.support.svg && !this.options.allowTaint) {
            return new SVGContainer(src);
        } else if (src.match(/data:image\/.*;base64,/i)) {
            return new ImageContainer(src.replace(/url\(['"]{0,}|['"]{0,}\)$/ig, ''), false);
        } else if (this.isSameOrigin(src) || this.options.allowTaint === true || this.isSVG(src)) {
            return new ImageContainer(src, false);
        } else if (this.support.cors && !this.options.allowTaint && this.options.useCORS) {
            return new ImageContainer(src, true);
        } else if (this.options.proxy) {
            return new ProxyImageContainer(src, this.options.proxy);
        } else {
            return new DummyImageContainer(src);
        }
    } else if (imageData.method === "linear-gradient") {
        return new LinearGradientContainer(imageData);
    } else if (imageData.method === "gradient") {
        return new WebkitGradientContainer(imageData);
    } else if (imageData.method === "svg") {
        return new SVGNodeContainer(imageData.args[0], this.support.svg);
    } else if (imageData.method === "IFRAME") {
        return new FrameContainer(imageData.args[0], this.isSameOrigin(imageData.args[0].src), this.options);
    } else {
        return new DummyImageContainer(imageData);
    }
};

ImageLoader.prototype.isSVG = function(src) {
    return src.substring(src.length - 3).toLowerCase() === "svg" || SVGContainer.prototype.isInline(src);
};

ImageLoader.prototype.imageExists = function(images, src) {
    return images.some(function(image) {
        return image.src === src;
    });
};

ImageLoader.prototype.isSameOrigin = function(url) {
    return (this.getOrigin(url) === this.origin);
};

ImageLoader.prototype.getOrigin = function(url) {
    var link = this.link || (this.link = document.createElement("a"));
    link.href = url;
    link.href = link.href; // IE9, LOL! - http://jsfiddle.net/niklasvh/2e48b/
    return link.protocol + link.hostname + link.port;
};

ImageLoader.prototype.getPromise = function(container) {
    return this.timeout(container, this.options.imageTimeout)['catch'](function() {
        var dummy = new DummyImageContainer(container.src);
        return dummy.promise.then(function(image) {
            container.image = image;
        });
    });
};

ImageLoader.prototype.get = function(src) {
    var found = null;
    return this.images.some(function(img) {
        return (found = img).src === src;
    }) ? found : null;
};

ImageLoader.prototype.fetch = function(nodes) {
    this.images = nodes.reduce(bind(this.findBackgroundImage, this), this.findImages(nodes));
    this.images.forEach(function(image, index) {
        image.promise.then(function() {
            log("Succesfully loaded image #"+ (index+1), image);
        }, function(e) {
            log("Failed loading image #"+ (index+1), image, e);
        });
    });
    this.ready = Promise.all(this.images.map(this.getPromise, this));
    log("Finished searching images");
    return this;
};

ImageLoader.prototype.timeout = function(container, timeout) {
    var timer;
    var promise = Promise.race([container.promise, new Promise(function(res, reject) {
        timer = setTimeout(function() {
            log("Timed out loading image", container);
            reject(container);
        }, timeout);
    })]).then(function(container) {
        clearTimeout(timer);
        return container;
    });
    promise['catch'](function() {
        clearTimeout(timer);
    });
    return promise;
};

module.exports = ImageLoader;

},{"./dummyimagecontainer":5,"./framecontainer":8,"./imagecontainer":10,"./lineargradientcontainer":12,"./log":13,"./proxyimagecontainer":17,"./svgcontainer":23,"./svgnodecontainer":24,"./utils":26,"./webkitgradientcontainer":27}],12:[function(_dereq_,module,exports){
var GradientContainer = _dereq_('./gradientcontainer');
var Color = _dereq_('./color');

function LinearGradientContainer(imageData) {
    GradientContainer.apply(this, arguments);
    this.type = GradientContainer.TYPES.LINEAR;

    var hasDirection = LinearGradientContainer.REGEXP_DIRECTION.test( imageData.args[0] ) ||
        !GradientContainer.REGEXP_COLORSTOP.test( imageData.args[0] );

    if (hasDirection) {
        imageData.args[0].split(/\s+/).reverse().forEach(function(position, index) {
            switch(position) {
            case "left":
                this.x0 = 0;
                this.x1 = 1;
                break;
            case "top":
                this.y0 = 0;
                this.y1 = 1;
                break;
            case "right":
                this.x0 = 1;
                this.x1 = 0;
                break;
            case "bottom":
                this.y0 = 1;
                this.y1 = 0;
                break;
            case "to":
                var y0 = this.y0;
                var x0 = this.x0;
                this.y0 = this.y1;
                this.x0 = this.x1;
                this.x1 = x0;
                this.y1 = y0;
                break;
            case "center":
                break; // centered by default
            // Firefox internally converts position keywords to percentages:
            // http://www.w3.org/TR/2010/WD-CSS2-20101207/colors.html#propdef-background-position
            default: // percentage or absolute length
                // TODO: support absolute start point positions (e.g., use bounds to convert px to a ratio)
                var ratio = parseFloat(position, 10) * 1e-2;
                if (isNaN(ratio)) { // invalid or unhandled value
                    break;
                }
                if (index === 0) {
                    this.y0 = ratio;
                    this.y1 = 1 - this.y0;
                } else {
                    this.x0 = ratio;
                    this.x1 = 1 - this.x0;
                }
                break;
            }
        }, this);
    } else {
        this.y0 = 0;
        this.y1 = 1;
    }

    this.colorStops = imageData.args.slice(hasDirection ? 1 : 0).map(function(colorStop) {
        var colorStopMatch = colorStop.match(GradientContainer.REGEXP_COLORSTOP);
        var value = +colorStopMatch[2];
        var unit = value === 0 ? "%" : colorStopMatch[3]; // treat "0" as "0%"
        return {
            color: new Color(colorStopMatch[1]),
            // TODO: support absolute stop positions (e.g., compute gradient line length & convert px to ratio)
            stop: unit === "%" ? value / 100 : null
        };
    });

    if (this.colorStops[0].stop === null) {
        this.colorStops[0].stop = 0;
    }

    if (this.colorStops[this.colorStops.length - 1].stop === null) {
        this.colorStops[this.colorStops.length - 1].stop = 1;
    }

    // calculates and fills-in explicit stop positions when omitted from rule
    this.colorStops.forEach(function(colorStop, index) {
        if (colorStop.stop === null) {
            this.colorStops.slice(index).some(function(find, count) {
                if (find.stop !== null) {
                    colorStop.stop = ((find.stop - this.colorStops[index - 1].stop) / (count + 1)) + this.colorStops[index - 1].stop;
                    return true;
                } else {
                    return false;
                }
            }, this);
        }
    }, this);
}

LinearGradientContainer.prototype = Object.create(GradientContainer.prototype);

// TODO: support <angle> (e.g. -?\d{1,3}(?:\.\d+)deg, etc. : https://developer.mozilla.org/docs/Web/CSS/angle )
LinearGradientContainer.REGEXP_DIRECTION = /^\s*(?:to|left|right|top|bottom|center|\d{1,3}(?:\.\d+)?%?)(?:\s|$)/i;

module.exports = LinearGradientContainer;

},{"./color":3,"./gradientcontainer":9}],13:[function(_dereq_,module,exports){
var logger = function() {
    if (logger.options.logging && window.console && window.console.log) {
        Function.prototype.bind.call(window.console.log, (window.console)).apply(window.console, [(Date.now() - logger.options.start) + "ms", "html2canvas:"].concat([].slice.call(arguments, 0)));
    }
};

logger.options = {logging: false};
module.exports = logger;

},{}],14:[function(_dereq_,module,exports){
var Color = _dereq_('./color');
var utils = _dereq_('./utils');
var getBounds = utils.getBounds;
var parseBackgrounds = utils.parseBackgrounds;
var offsetBounds = utils.offsetBounds;

function NodeContainer(node, parent) {
    this.node = node;
    this.parent = parent;
    this.stack = null;
    this.bounds = null;
    this.borders = null;
    this.clip = [];
    this.backgroundClip = [];
    this.offsetBounds = null;
    this.visible = null;
    this.computedStyles = null;
    this.colors = {};
    this.styles = {};
    this.backgroundImages = null;
    this.transformData = null;
    this.transformMatrix = null;
    this.isPseudoElement = false;
    this.opacity = null;
}

NodeContainer.prototype.cloneTo = function(stack) {
    stack.visible = this.visible;
    stack.borders = this.borders;
    stack.bounds = this.bounds;
    stack.clip = this.clip;
    stack.backgroundClip = this.backgroundClip;
    stack.computedStyles = this.computedStyles;
    stack.styles = this.styles;
    stack.backgroundImages = this.backgroundImages;
    stack.opacity = this.opacity;
};

NodeContainer.prototype.getOpacity = function() {
    return this.opacity === null ? (this.opacity = this.cssFloat('opacity')) : this.opacity;
};

NodeContainer.prototype.assignStack = function(stack) {
    this.stack = stack;
    stack.children.push(this);
};

NodeContainer.prototype.isElementVisible = function() {
    return this.node.nodeType === Node.TEXT_NODE ? this.parent.visible : (
        this.css('display') !== "none" &&
        this.css('visibility') !== "hidden" &&
        !this.node.hasAttribute("data-html2canvas-ignore") &&
        (this.node.nodeName !== "INPUT" || this.node.getAttribute("type") !== "hidden")
    );
};

NodeContainer.prototype.css = function(attribute) {
    if (!this.computedStyles) {
        this.computedStyles = this.isPseudoElement ? this.parent.computedStyle(this.before ? ":before" : ":after") : this.computedStyle(null);
    }

    return this.styles[attribute] || (this.styles[attribute] = this.computedStyles[attribute]);
};

NodeContainer.prototype.prefixedCss = function(attribute) {
    var prefixes = ["webkit", "moz", "ms", "o"];
    var value = this.css(attribute);
    if (value === undefined) {
        prefixes.some(function(prefix) {
            value = this.css(prefix + attribute.substr(0, 1).toUpperCase() + attribute.substr(1));
            return value !== undefined;
        }, this);
    }
    return value === undefined ? null : value;
};

NodeContainer.prototype.computedStyle = function(type) {
    return this.node.ownerDocument.defaultView.getComputedStyle(this.node, type);
};

NodeContainer.prototype.cssInt = function(attribute) {
    var value = parseInt(this.css(attribute), 10);
    return (isNaN(value)) ? 0 : value; // borders in old IE are throwing 'medium' for demo.html
};

NodeContainer.prototype.color = function(attribute) {
    return this.colors[attribute] || (this.colors[attribute] = new Color(this.css(attribute)));
};

NodeContainer.prototype.cssFloat = function(attribute) {
    var value = parseFloat(this.css(attribute));
    return (isNaN(value)) ? 0 : value;
};

NodeContainer.prototype.fontWeight = function() {
    var weight = this.css("fontWeight");
    switch(parseInt(weight, 10)){
    case 401:
        weight = "bold";
        break;
    case 400:
        weight = "normal";
        break;
    }
    return weight;
};

NodeContainer.prototype.parseClip = function() {
    var matches = this.css('clip').match(this.CLIP);
    if (matches) {
        return {
            top: parseInt(matches[1], 10),
            right: parseInt(matches[2], 10),
            bottom: parseInt(matches[3], 10),
            left: parseInt(matches[4], 10)
        };
    }
    return null;
};

NodeContainer.prototype.parseBackgroundImages = function() {
    return this.backgroundImages || (this.backgroundImages = parseBackgrounds(this.css("backgroundImage")));
};

NodeContainer.prototype.cssList = function(property, index) {
    var value = (this.css(property) || '').split(',');
    value = value[index || 0] || value[0] || 'auto';
    value = value.trim().split(' ');
    if (value.length === 1) {
        value = [value[0], isPercentage(value[0]) ? 'auto' : value[0]];
    }
    return value;
};

NodeContainer.prototype.parseBackgroundSize = function(bounds, image, index) {
    var size = this.cssList("backgroundSize", index);
    var width, height;

    if (isPercentage(size[0])) {
        width = bounds.width * parseFloat(size[0]) / 100;
    } else if (/contain|cover/.test(size[0])) {
        var targetRatio = bounds.width / bounds.height, currentRatio = image.width / image.height;
        return (targetRatio < currentRatio ^ size[0] === 'contain') ?  {width: bounds.height * currentRatio, height: bounds.height} : {width: bounds.width, height: bounds.width / currentRatio};
    } else {
        width = parseInt(size[0], 10);
    }

    if (size[0] === 'auto' && size[1] === 'auto') {
        height = image.height;
    } else if (size[1] === 'auto') {
        height = width / image.width * image.height;
    } else if (isPercentage(size[1])) {
        height =  bounds.height * parseFloat(size[1]) / 100;
    } else {
        height = parseInt(size[1], 10);
    }

    if (size[0] === 'auto') {
        width = height / image.height * image.width;
    }

    return {width: width, height: height};
};

NodeContainer.prototype.parseBackgroundPosition = function(bounds, image, index, backgroundSize) {
    var position = this.cssList('backgroundPosition', index);
    var left, top;

    if (isPercentage(position[0])){
        left = (bounds.width - (backgroundSize || image).width) * (parseFloat(position[0]) / 100);
    } else {
        left = parseInt(position[0], 10);
    }

    if (position[1] === 'auto') {
        top = left / image.width * image.height;
    } else if (isPercentage(position[1])){
        top =  (bounds.height - (backgroundSize || image).height) * parseFloat(position[1]) / 100;
    } else {
        top = parseInt(position[1], 10);
    }

    if (position[0] === 'auto') {
        left = top / image.height * image.width;
    }

    return {left: left, top: top};
};

NodeContainer.prototype.parseBackgroundRepeat = function(index) {
    return this.cssList("backgroundRepeat", index)[0];
};

NodeContainer.prototype.parseTextShadows = function() {
    var textShadow = this.css("textShadow");
    var results = [];

    if (textShadow && textShadow !== 'none') {
        var shadows = textShadow.match(this.TEXT_SHADOW_PROPERTY);
        for (var i = 0; shadows && (i < shadows.length); i++) {
            var s = shadows[i].match(this.TEXT_SHADOW_VALUES);
            results.push({
                color: new Color(s[0]),
                offsetX: s[1] ? parseFloat(s[1].replace('px', '')) : 0,
                offsetY: s[2] ? parseFloat(s[2].replace('px', '')) : 0,
                blur: s[3] ? s[3].replace('px', '') : 0
            });
        }
    }
    return results;
};

NodeContainer.prototype.parseTransform = function() {
    if (!this.transformData) {
        if (this.hasTransform()) {
            var offset = this.parseBounds();
            var origin = this.prefixedCss("transformOrigin").split(" ").map(removePx).map(asFloat);
            origin[0] += offset.left;
            origin[1] += offset.top;
            this.transformData = {
                origin: origin,
                matrix: this.parseTransformMatrix()
            };
        } else {
            this.transformData = {
                origin: [0, 0],
                matrix: [1, 0, 0, 1, 0, 0]
            };
        }
    }
    return this.transformData;
};

NodeContainer.prototype.parseTransformMatrix = function() {
    if (!this.transformMatrix) {
        var transform = this.prefixedCss("transform");
        var matrix = transform ? parseMatrix(transform.match(this.MATRIX_PROPERTY)) : null;
        this.transformMatrix = matrix ? matrix : [1, 0, 0, 1, 0, 0];
    }
    return this.transformMatrix;
};

NodeContainer.prototype.parseBounds = function() {
    return this.bounds || (this.bounds = this.hasTransform() ? offsetBounds(this.node) : getBounds(this.node));
};

NodeContainer.prototype.hasTransform = function() {
    return this.parseTransformMatrix().join(",") !== "1,0,0,1,0,0" || (this.parent && this.parent.hasTransform());
};

NodeContainer.prototype.getValue = function() {
    var value = this.node.value || "";
    if (this.node.tagName === "SELECT") {
        value = selectionValue(this.node);
    } else if (this.node.type === "password") {
        value = Array(value.length + 1).join('\u2022'); // jshint ignore:line
    }
    return value.length === 0 ? (this.node.placeholder || "") : value;
};

NodeContainer.prototype.MATRIX_PROPERTY = /(matrix|matrix3d)\((.+)\)/;
NodeContainer.prototype.TEXT_SHADOW_PROPERTY = /((rgba|rgb)\([^\)]+\)(\s-?\d+px){0,})/g;
NodeContainer.prototype.TEXT_SHADOW_VALUES = /(-?\d+px)|(#.+)|(rgb\(.+\))|(rgba\(.+\))/g;
NodeContainer.prototype.CLIP = /^rect\((\d+)px,? (\d+)px,? (\d+)px,? (\d+)px\)$/;

function selectionValue(node) {
    var option = node.options[node.selectedIndex || 0];
    return option ? (option.text || "") : "";
}

function parseMatrix(match) {
    if (match && match[1] === "matrix") {
        return match[2].split(",").map(function(s) {
            return parseFloat(s.trim());
        });
    } else if (match && match[1] === "matrix3d") {
        var matrix3d = match[2].split(",").map(function(s) {
          return parseFloat(s.trim());
        });
        return [matrix3d[0], matrix3d[1], matrix3d[4], matrix3d[5], matrix3d[12], matrix3d[13]];
    }
}

function isPercentage(value) {
    return value.toString().indexOf("%") !== -1;
}

function removePx(str) {
    return str.replace("px", "");
}

function asFloat(str) {
    return parseFloat(str);
}

module.exports = NodeContainer;

},{"./color":3,"./utils":26}],15:[function(_dereq_,module,exports){
var log = _dereq_('./log');
var punycode = _dereq_('punycode');
var NodeContainer = _dereq_('./nodecontainer');
var TextContainer = _dereq_('./textcontainer');
var PseudoElementContainer = _dereq_('./pseudoelementcontainer');
var FontMetrics = _dereq_('./fontmetrics');
var Color = _dereq_('./color');
var StackingContext = _dereq_('./stackingcontext');
var utils = _dereq_('./utils');
var bind = utils.bind;
var getBounds = utils.getBounds;
var parseBackgrounds = utils.parseBackgrounds;
var offsetBounds = utils.offsetBounds;

function NodeParser(element, renderer, support, imageLoader, options) {
    log("Starting NodeParser");
    this.renderer = renderer;
    this.options = options;
    this.range = null;
    this.support = support;
    this.renderQueue = [];
    this.stack = new StackingContext(true, 1, element.ownerDocument, null);
    var parent = new NodeContainer(element, null);
    if (options.background) {
        renderer.rectangle(0, 0, renderer.width, renderer.height, new Color(options.background));
    }
    if (element === element.ownerDocument.documentElement) {
        // http://www.w3.org/TR/css3-background/#special-backgrounds
        var canvasBackground = new NodeContainer(parent.color('backgroundColor').isTransparent() ? element.ownerDocument.body : element.ownerDocument.documentElement, null);
        renderer.rectangle(0, 0, renderer.width, renderer.height, canvasBackground.color('backgroundColor'));
    }
    parent.visibile = parent.isElementVisible();
    this.createPseudoHideStyles(element.ownerDocument);
    this.disableAnimations(element.ownerDocument);
    this.nodes = flatten([parent].concat(this.getChildren(parent)).filter(function(container) {
        return container.visible = container.isElementVisible();
    }).map(this.getPseudoElements, this));
    this.fontMetrics = new FontMetrics();
    log("Fetched nodes, total:", this.nodes.length);
    log("Calculate overflow clips");
    this.calculateOverflowClips();
    log("Start fetching images");
    this.images = imageLoader.fetch(this.nodes.filter(isElement));
    this.ready = this.images.ready.then(bind(function() {
        log("Images loaded, starting parsing");
        log("Creating stacking contexts");
        this.createStackingContexts();
        log("Sorting stacking contexts");
        this.sortStackingContexts(this.stack);
        this.parse(this.stack);
        log("Render queue created with " + this.renderQueue.length + " items");
        return new Promise(bind(function(resolve) {
            if (!options.async) {
                this.renderQueue.forEach(this.paint, this);
                resolve();
            } else if (typeof(options.async) === "function") {
                options.async.call(this, this.renderQueue, resolve);
            } else if (this.renderQueue.length > 0){
                this.renderIndex = 0;
                this.asyncRenderer(this.renderQueue, resolve);
            } else {
                resolve();
            }
        }, this));
    }, this));
}

NodeParser.prototype.calculateOverflowClips = function() {
    this.nodes.forEach(function(container) {
        if (isElement(container)) {
            if (isPseudoElement(container)) {
                container.appendToDOM();
            }
            container.borders = this.parseBorders(container);
            var clip = (container.css('overflow') === "hidden") ? [container.borders.clip] : [];
            var cssClip = container.parseClip();
            if (cssClip && ["absolute", "fixed"].indexOf(container.css('position')) !== -1) {
                clip.push([["rect",
                        container.bounds.left + cssClip.left,
                        container.bounds.top + cssClip.top,
                        cssClip.right - cssClip.left,
                        cssClip.bottom - cssClip.top
                ]]);
            }
            container.clip = hasParentClip(container) ? container.parent.clip.concat(clip) : clip;
            container.backgroundClip = (container.css('overflow') !== "hidden") ? container.clip.concat([container.borders.clip]) : container.clip;
            if (isPseudoElement(container)) {
                container.cleanDOM();
            }
        } else if (isTextNode(container)) {
            container.clip = hasParentClip(container) ? container.parent.clip : [];
        }
        if (!isPseudoElement(container)) {
            container.bounds = null;
        }
    }, this);
};

function hasParentClip(container) {
    return container.parent && container.parent.clip.length;
}

NodeParser.prototype.asyncRenderer = function(queue, resolve, asyncTimer) {
    asyncTimer = asyncTimer || Date.now();
    this.paint(queue[this.renderIndex++]);
    if (queue.length === this.renderIndex) {
        resolve();
    } else if (asyncTimer + 20 > Date.now()) {
        this.asyncRenderer(queue, resolve, asyncTimer);
    } else {
        setTimeout(bind(function() {
            this.asyncRenderer(queue, resolve);
        }, this), 0);
    }
};

NodeParser.prototype.createPseudoHideStyles = function(document) {
    this.createStyles(document, '.' + PseudoElementContainer.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + ':before { content: "" !important; display: none !important; }' +
        '.' + PseudoElementContainer.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER + ':after { content: "" !important; display: none !important; }');
};

NodeParser.prototype.disableAnimations = function(document) {
    this.createStyles(document, '* { -webkit-animation: none !important; -moz-animation: none !important; -o-animation: none !important; animation: none !important; ' +
        '-webkit-transition: none !important; -moz-transition: none !important; -o-transition: none !important; transition: none !important;}');
};

NodeParser.prototype.createStyles = function(document, styles) {
    var hidePseudoElements = document.createElement('style');
    hidePseudoElements.innerHTML = styles;
    document.body.appendChild(hidePseudoElements);
};

NodeParser.prototype.getPseudoElements = function(container) {
    var nodes = [[container]];
    if (container.node.nodeType === Node.ELEMENT_NODE) {
        var before = this.getPseudoElement(container, ":before");
        var after = this.getPseudoElement(container, ":after");

        if (before) {
            nodes.push(before);
        }

        if (after) {
            nodes.push(after);
        }
    }
    return flatten(nodes);
};

function toCamelCase(str) {
    return str.replace(/(\-[a-z])/g, function(match){
        return match.toUpperCase().replace('-','');
    });
}

NodeParser.prototype.getPseudoElement = function(container, type) {
    var style = container.computedStyle(type);
    if(!style || !style.content || style.content === "none" || style.content === "-moz-alt-content" || style.display === "none") {
        return null;
    }

    var content = stripQuotes(style.content);
    var isImage = content.substr(0, 3) === 'url';
    var pseudoNode = document.createElement(isImage ? 'img' : 'html2canvaspseudoelement');
    var pseudoContainer = new PseudoElementContainer(pseudoNode, container, type);

    for (var i = style.length-1; i >= 0; i--) {
        var property = toCamelCase(style.item(i));
        pseudoNode.style[property] = style[property];
    }

    pseudoNode.className = PseudoElementContainer.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + " " + PseudoElementContainer.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER;

    if (isImage) {
        pseudoNode.src = parseBackgrounds(content)[0].args[0];
        return [pseudoContainer];
    } else {
        var text = document.createTextNode(content);
        pseudoNode.appendChild(text);
        return [pseudoContainer, new TextContainer(text, pseudoContainer)];
    }
};


NodeParser.prototype.getChildren = function(parentContainer) {
    return flatten([].filter.call(parentContainer.node.childNodes, renderableNode).map(function(node) {
        var container = [node.nodeType === Node.TEXT_NODE ? new TextContainer(node, parentContainer) : new NodeContainer(node, parentContainer)].filter(nonIgnoredElement);
        return node.nodeType === Node.ELEMENT_NODE && container.length && node.tagName !== "TEXTAREA" ? (container[0].isElementVisible() ? container.concat(this.getChildren(container[0])) : []) : container;
    }, this));
};

NodeParser.prototype.newStackingContext = function(container, hasOwnStacking) {
    var stack = new StackingContext(hasOwnStacking, container.getOpacity(), container.node, container.parent);
    container.cloneTo(stack);
    var parentStack = hasOwnStacking ? stack.getParentStack(this) : stack.parent.stack;
    parentStack.contexts.push(stack);
    container.stack = stack;
};

NodeParser.prototype.createStackingContexts = function() {
    this.nodes.forEach(function(container) {
        if (isElement(container) && (this.isRootElement(container) || hasOpacity(container) || isPositionedForStacking(container) || this.isBodyWithTransparentRoot(container) || container.hasTransform())) {
            this.newStackingContext(container, true);
        } else if (isElement(container) && ((isPositioned(container) && zIndex0(container)) || isInlineBlock(container) || isFloating(container))) {
            this.newStackingContext(container, false);
        } else {
            container.assignStack(container.parent.stack);
        }
    }, this);
};

NodeParser.prototype.isBodyWithTransparentRoot = function(container) {
    return container.node.nodeName === "BODY" && container.parent.color('backgroundColor').isTransparent();
};

NodeParser.prototype.isRootElement = function(container) {
    return container.parent === null;
};

NodeParser.prototype.sortStackingContexts = function(stack) {
    stack.contexts.sort(zIndexSort(stack.contexts.slice(0)));
    stack.contexts.forEach(this.sortStackingContexts, this);
};

NodeParser.prototype.parseTextBounds = function(container) {
    return function(text, index, textList) {
        if (container.parent.css("textDecoration").substr(0, 4) !== "none" || text.trim().length !== 0) {
            if (this.support.rangeBounds && !container.parent.hasTransform()) {
                var offset = textList.slice(0, index).join("").length;
                return this.getRangeBounds(container.node, offset, text.length);
            } else if (container.node && typeof(container.node.data) === "string") {
                var replacementNode = container.node.splitText(text.length);
                var bounds = this.getWrapperBounds(container.node, container.parent.hasTransform());
                container.node = replacementNode;
                return bounds;
            }
        } else if(!this.support.rangeBounds || container.parent.hasTransform()){
            container.node = container.node.splitText(text.length);
        }
        return {};
    };
};

NodeParser.prototype.getWrapperBounds = function(node, transform) {
    var wrapper = node.ownerDocument.createElement('html2canvaswrapper');
    var parent = node.parentNode,
        backupText = node.cloneNode(true);

    wrapper.appendChild(node.cloneNode(true));
    parent.replaceChild(wrapper, node);
    var bounds = transform ? offsetBounds(wrapper) : getBounds(wrapper);
    parent.replaceChild(backupText, wrapper);
    return bounds;
};

NodeParser.prototype.getRangeBounds = function(node, offset, length) {
    var range = this.range || (this.range = node.ownerDocument.createRange());
    range.setStart(node, offset);
    range.setEnd(node, offset + length);
    return range.getBoundingClientRect();
};

function ClearTransform() {}

NodeParser.prototype.parse = function(stack) {
    // http://www.w3.org/TR/CSS21/visuren.html#z-index
    var negativeZindex = stack.contexts.filter(negativeZIndex); // 2. the child stacking contexts with negative stack levels (most negative first).
    var descendantElements = stack.children.filter(isElement);
    var descendantNonFloats = descendantElements.filter(not(isFloating));
    var nonInlineNonPositionedDescendants = descendantNonFloats.filter(not(isPositioned)).filter(not(inlineLevel)); // 3 the in-flow, non-inline-level, non-positioned descendants.
    var nonPositionedFloats = descendantElements.filter(not(isPositioned)).filter(isFloating); // 4. the non-positioned floats.
    var inFlow = descendantNonFloats.filter(not(isPositioned)).filter(inlineLevel); // 5. the in-flow, inline-level, non-positioned descendants, including inline tables and inline blocks.
    var stackLevel0 = stack.contexts.concat(descendantNonFloats.filter(isPositioned)).filter(zIndex0); // 6. the child stacking contexts with stack level 0 and the positioned descendants with stack level 0.
    var text = stack.children.filter(isTextNode).filter(hasText);
    var positiveZindex = stack.contexts.filter(positiveZIndex); // 7. the child stacking contexts with positive stack levels (least positive first).
    negativeZindex.concat(nonInlineNonPositionedDescendants).concat(nonPositionedFloats)
        .concat(inFlow).concat(stackLevel0).concat(text).concat(positiveZindex).forEach(function(container) {
            this.renderQueue.push(container);
            if (isStackingContext(container)) {
                this.parse(container);
                this.renderQueue.push(new ClearTransform());
            }
        }, this);
};

NodeParser.prototype.paint = function(container) {
    try {
        if (container instanceof ClearTransform) {
            this.renderer.ctx.restore();
        } else if (isTextNode(container)) {
            if (isPseudoElement(container.parent)) {
                container.parent.appendToDOM();
            }
            this.paintText(container);
            if (isPseudoElement(container.parent)) {
                container.parent.cleanDOM();
            }
        } else {
            this.paintNode(container);
        }
    } catch(e) {
        log(e);
        if (this.options.strict) {
            throw e;
        }
    }
};

NodeParser.prototype.paintNode = function(container) {
    if (isStackingContext(container)) {
        this.renderer.setOpacity(container.opacity);
        this.renderer.ctx.save();
        if (container.hasTransform()) {
            this.renderer.setTransform(container.parseTransform());
        }
    }

    if (container.node.nodeName === "INPUT" && container.node.type === "checkbox") {
        this.paintCheckbox(container);
    } else if (container.node.nodeName === "INPUT" && container.node.type === "radio") {
        this.paintRadio(container);
    } else {
        this.paintElement(container);
    }
};

NodeParser.prototype.paintElement = function(container) {
    var bounds = container.parseBounds();
    this.renderer.clip(container.backgroundClip, function() {
        this.renderer.renderBackground(container, bounds, container.borders.borders.map(getWidth));
    }, this);

    this.renderer.clip(container.clip, function() {
        this.renderer.renderBorders(container.borders.borders);
    }, this);

    this.renderer.clip(container.backgroundClip, function() {
        switch (container.node.nodeName) {
        case "svg":
        case "IFRAME":
            var imgContainer = this.images.get(container.node);
            if (imgContainer) {
                this.renderer.renderImage(container, bounds, container.borders, imgContainer);
            } else {
                log("Error loading <" + container.node.nodeName + ">", container.node);
            }
            break;
        case "IMG":
            var imageContainer = this.images.get(container.node.src);
            if (imageContainer) {
                this.renderer.renderImage(container, bounds, container.borders, imageContainer);
            } else {
                log("Error loading <img>", container.node.src);
            }
            break;
        case "CANVAS":
            this.renderer.renderImage(container, bounds, container.borders, {image: container.node});
            break;
        case "SELECT":
        case "INPUT":
        case "TEXTAREA":
            this.paintFormValue(container);
            break;
        }
    }, this);
};

NodeParser.prototype.paintCheckbox = function(container) {
    var b = container.parseBounds();

    var size = Math.min(b.width, b.height);
    var bounds = {width: size - 1, height: size - 1, top: b.top, left: b.left};
    var r = [3, 3];
    var radius = [r, r, r, r];
    var borders = [1,1,1,1].map(function(w) {
        return {color: new Color('#A5A5A5'), width: w};
    });

    var borderPoints = calculateCurvePoints(bounds, radius, borders);

    this.renderer.clip(container.backgroundClip, function() {
        this.renderer.rectangle(bounds.left + 1, bounds.top + 1, bounds.width - 2, bounds.height - 2, new Color("#DEDEDE"));
        this.renderer.renderBorders(calculateBorders(borders, bounds, borderPoints, radius));
        if (container.node.checked) {
            this.renderer.font(new Color('#424242'), 'normal', 'normal', 'bold', (size - 3) + "px", 'arial');
            this.renderer.text("\u2714", bounds.left + size / 6, bounds.top + size - 1);
        }
    }, this);
};

NodeParser.prototype.paintRadio = function(container) {
    var bounds = container.parseBounds();

    var size = Math.min(bounds.width, bounds.height) - 2;

    this.renderer.clip(container.backgroundClip, function() {
        this.renderer.circleStroke(bounds.left + 1, bounds.top + 1, size, new Color('#DEDEDE'), 1, new Color('#A5A5A5'));
        if (container.node.checked) {
            this.renderer.circle(Math.ceil(bounds.left + size / 4) + 1, Math.ceil(bounds.top + size / 4) + 1, Math.floor(size / 2), new Color('#424242'));
        }
    }, this);
};

NodeParser.prototype.paintFormValue = function(container) {
    var value = container.getValue();
    if (value.length > 0) {
        var document = container.node.ownerDocument;
        var wrapper = document.createElement('html2canvaswrapper');
        var properties = ['lineHeight', 'textAlign', 'fontFamily', 'fontWeight', 'fontSize', 'color',
            'paddingLeft', 'paddingTop', 'paddingRight', 'paddingBottom',
            'width', 'height', 'borderLeftStyle', 'borderTopStyle', 'borderLeftWidth', 'borderTopWidth',
            'boxSizing', 'whiteSpace', 'wordWrap'];

        properties.forEach(function(property) {
            try {
                wrapper.style[property] = container.css(property);
            } catch(e) {
                // Older IE has issues with "border"
                log("html2canvas: Parse: Exception caught in renderFormValue: " + e.message);
            }
        });
        var bounds = container.parseBounds();
        wrapper.style.position = "fixed";
        wrapper.style.left = bounds.left + "px";
        wrapper.style.top = bounds.top + "px";
        wrapper.textContent = value;
        document.body.appendChild(wrapper);
        this.paintText(new TextContainer(wrapper.firstChild, container));
        document.body.removeChild(wrapper);
    }
};

NodeParser.prototype.paintText = function(container) {
    container.applyTextTransform();
    var characters = punycode.ucs2.decode(container.node.data);
    var textList = (!this.options.letterRendering || noLetterSpacing(container)) && !hasUnicode(container.node.data) ? getWords(characters) : characters.map(function(character) {
        return punycode.ucs2.encode([character]);
    });

    var weight = container.parent.fontWeight();
    var size = container.parent.css('fontSize');
    var family = container.parent.css('fontFamily');
    var shadows = container.parent.parseTextShadows();

    this.renderer.font(container.parent.color('color'), container.parent.css('fontStyle'), container.parent.css('fontVariant'), weight, size, family);
    if (shadows.length) {
        // TODO: support multiple text shadows
        this.renderer.fontShadow(shadows[0].color, shadows[0].offsetX, shadows[0].offsetY, shadows[0].blur);
    } else {
        this.renderer.clearShadow();
    }

    this.renderer.clip(container.parent.clip, function() {
        textList.map(this.parseTextBounds(container), this).forEach(function(bounds, index) {
            if (bounds) {
                this.renderer.text(textList[index], bounds.left, bounds.bottom);
                this.renderTextDecoration(container.parent, bounds, this.fontMetrics.getMetrics(family, size));
            }
        }, this);
    }, this);
};

NodeParser.prototype.renderTextDecoration = function(container, bounds, metrics) {
    switch(container.css("textDecoration").split(" ")[0]) {
    case "underline":
        // Draws a line at the baseline of the font
        // TODO As some browsers display the line as more than 1px if the font-size is big, need to take that into account both in position and size
        this.renderer.rectangle(bounds.left, Math.round(bounds.top + metrics.baseline + metrics.lineWidth), bounds.width, 1, container.color("color"));
        break;
    case "overline":
        this.renderer.rectangle(bounds.left, Math.round(bounds.top), bounds.width, 1, container.color("color"));
        break;
    case "line-through":
        // TODO try and find exact position for line-through
        this.renderer.rectangle(bounds.left, Math.ceil(bounds.top + metrics.middle + metrics.lineWidth), bounds.width, 1, container.color("color"));
        break;
    }
};

var borderColorTransforms = {
    inset: [
        ["darken", 0.60],
        ["darken", 0.10],
        ["darken", 0.10],
        ["darken", 0.60]
    ]
};

NodeParser.prototype.parseBorders = function(container) {
    var nodeBounds = container.parseBounds();
    var radius = getBorderRadiusData(container);
    var borders = ["Top", "Right", "Bottom", "Left"].map(function(side, index) {
        var style = container.css('border' + side + 'Style');
        var color = container.color('border' + side + 'Color');
        if (style === "inset" && color.isBlack()) {
            color = new Color([255, 255, 255, color.a]); // this is wrong, but
        }
        var colorTransform = borderColorTransforms[style] ? borderColorTransforms[style][index] : null;
        return {
            width: container.cssInt('border' + side + 'Width'),
            color: colorTransform ? color[colorTransform[0]](colorTransform[1]) : color,
            args: null
        };
    });
    var borderPoints = calculateCurvePoints(nodeBounds, radius, borders);

    return {
        clip: this.parseBackgroundClip(container, borderPoints, borders, radius, nodeBounds),
        borders: calculateBorders(borders, nodeBounds, borderPoints, radius)
    };
};

function calculateBorders(borders, nodeBounds, borderPoints, radius) {
    return borders.map(function(border, borderSide) {
        if (border.width > 0) {
            var bx = nodeBounds.left;
            var by = nodeBounds.top;
            var bw = nodeBounds.width;
            var bh = nodeBounds.height - (borders[2].width);

            switch(borderSide) {
            case 0:
                // top border
                bh = borders[0].width;
                border.args = drawSide({
                        c1: [bx, by],
                        c2: [bx + bw, by],
                        c3: [bx + bw - borders[1].width, by + bh],
                        c4: [bx + borders[3].width, by + bh]
                    }, radius[0], radius[1],
                    borderPoints.topLeftOuter, borderPoints.topLeftInner, borderPoints.topRightOuter, borderPoints.topRightInner);
                break;
            case 1:
                // right border
                bx = nodeBounds.left + nodeBounds.width - (borders[1].width);
                bw = borders[1].width;

                border.args = drawSide({
                        c1: [bx + bw, by],
                        c2: [bx + bw, by + bh + borders[2].width],
                        c3: [bx, by + bh],
                        c4: [bx, by + borders[0].width]
                    }, radius[1], radius[2],
                    borderPoints.topRightOuter, borderPoints.topRightInner, borderPoints.bottomRightOuter, borderPoints.bottomRightInner);
                break;
            case 2:
                // bottom border
                by = (by + nodeBounds.height) - (borders[2].width);
                bh = borders[2].width;
                border.args = drawSide({
                        c1: [bx + bw, by + bh],
                        c2: [bx, by + bh],
                        c3: [bx + borders[3].width, by],
                        c4: [bx + bw - borders[3].width, by]
                    }, radius[2], radius[3],
                    borderPoints.bottomRightOuter, borderPoints.bottomRightInner, borderPoints.bottomLeftOuter, borderPoints.bottomLeftInner);
                break;
            case 3:
                // left border
                bw = borders[3].width;
                border.args = drawSide({
                        c1: [bx, by + bh + borders[2].width],
                        c2: [bx, by],
                        c3: [bx + bw, by + borders[0].width],
                        c4: [bx + bw, by + bh]
                    }, radius[3], radius[0],
                    borderPoints.bottomLeftOuter, borderPoints.bottomLeftInner, borderPoints.topLeftOuter, borderPoints.topLeftInner);
                break;
            }
        }
        return border;
    });
}

NodeParser.prototype.parseBackgroundClip = function(container, borderPoints, borders, radius, bounds) {
    var backgroundClip = container.css('backgroundClip'),
        borderArgs = [];

    switch(backgroundClip) {
    case "content-box":
    case "padding-box":
        parseCorner(borderArgs, radius[0], radius[1], borderPoints.topLeftInner, borderPoints.topRightInner, bounds.left + borders[3].width, bounds.top + borders[0].width);
        parseCorner(borderArgs, radius[1], radius[2], borderPoints.topRightInner, borderPoints.bottomRightInner, bounds.left + bounds.width - borders[1].width, bounds.top + borders[0].width);
        parseCorner(borderArgs, radius[2], radius[3], borderPoints.bottomRightInner, borderPoints.bottomLeftInner, bounds.left + bounds.width - borders[1].width, bounds.top + bounds.height - borders[2].width);
        parseCorner(borderArgs, radius[3], radius[0], borderPoints.bottomLeftInner, borderPoints.topLeftInner, bounds.left + borders[3].width, bounds.top + bounds.height - borders[2].width);
        break;

    default:
        parseCorner(borderArgs, radius[0], radius[1], borderPoints.topLeftOuter, borderPoints.topRightOuter, bounds.left, bounds.top);
        parseCorner(borderArgs, radius[1], radius[2], borderPoints.topRightOuter, borderPoints.bottomRightOuter, bounds.left + bounds.width, bounds.top);
        parseCorner(borderArgs, radius[2], radius[3], borderPoints.bottomRightOuter, borderPoints.bottomLeftOuter, bounds.left + bounds.width, bounds.top + bounds.height);
        parseCorner(borderArgs, radius[3], radius[0], borderPoints.bottomLeftOuter, borderPoints.topLeftOuter, bounds.left, bounds.top + bounds.height);
        break;
    }

    return borderArgs;
};

function getCurvePoints(x, y, r1, r2) {
    var kappa = 4 * ((Math.sqrt(2) - 1) / 3);
    var ox = (r1) * kappa, // control point offset horizontal
        oy = (r2) * kappa, // control point offset vertical
        xm = x + r1, // x-middle
        ym = y + r2; // y-middle
    return {
        topLeft: bezierCurve({x: x, y: ym}, {x: x, y: ym - oy}, {x: xm - ox, y: y}, {x: xm, y: y}),
        topRight: bezierCurve({x: x, y: y}, {x: x + ox,y: y}, {x: xm, y: ym - oy}, {x: xm, y: ym}),
        bottomRight: bezierCurve({x: xm, y: y}, {x: xm, y: y + oy}, {x: x + ox, y: ym}, {x: x, y: ym}),
        bottomLeft: bezierCurve({x: xm, y: ym}, {x: xm - ox, y: ym}, {x: x, y: y + oy}, {x: x, y:y})
    };
}

function calculateCurvePoints(bounds, borderRadius, borders) {
    var x = bounds.left,
        y = bounds.top,
        width = bounds.width,
        height = bounds.height,

        tlh = borderRadius[0][0] < width / 2 ? borderRadius[0][0] : width / 2,
        tlv = borderRadius[0][1] < height / 2 ? borderRadius[0][1] : height / 2,
        trh = borderRadius[1][0] < width / 2 ? borderRadius[1][0] : width / 2,
        trv = borderRadius[1][1] < height / 2 ? borderRadius[1][1] : height / 2,
        brh = borderRadius[2][0] < width / 2 ? borderRadius[2][0] : width / 2,
        brv = borderRadius[2][1] < height / 2 ? borderRadius[2][1] : height / 2,
        blh = borderRadius[3][0] < width / 2 ? borderRadius[3][0] : width / 2,
        blv = borderRadius[3][1] < height / 2 ? borderRadius[3][1] : height / 2;

    var topWidth = width - trh,
        rightHeight = height - brv,
        bottomWidth = width - brh,
        leftHeight = height - blv;

    return {
        topLeftOuter: getCurvePoints(x, y, tlh, tlv).topLeft.subdivide(0.5),
        topLeftInner: getCurvePoints(x + borders[3].width, y + borders[0].width, Math.max(0, tlh - borders[3].width), Math.max(0, tlv - borders[0].width)).topLeft.subdivide(0.5),
        topRightOuter: getCurvePoints(x + topWidth, y, trh, trv).topRight.subdivide(0.5),
        topRightInner: getCurvePoints(x + Math.min(topWidth, width + borders[3].width), y + borders[0].width, (topWidth > width + borders[3].width) ? 0 :trh - borders[3].width, trv - borders[0].width).topRight.subdivide(0.5),
        bottomRightOuter: getCurvePoints(x + bottomWidth, y + rightHeight, brh, brv).bottomRight.subdivide(0.5),
        bottomRightInner: getCurvePoints(x + Math.min(bottomWidth, width - borders[3].width), y + Math.min(rightHeight, height + borders[0].width), Math.max(0, brh - borders[1].width),  brv - borders[2].width).bottomRight.subdivide(0.5),
        bottomLeftOuter: getCurvePoints(x, y + leftHeight, blh, blv).bottomLeft.subdivide(0.5),
        bottomLeftInner: getCurvePoints(x + borders[3].width, y + leftHeight, Math.max(0, blh - borders[3].width), blv - borders[2].width).bottomLeft.subdivide(0.5)
    };
}

function bezierCurve(start, startControl, endControl, end) {
    var lerp = function (a, b, t) {
        return {
            x: a.x + (b.x - a.x) * t,
            y: a.y + (b.y - a.y) * t
        };
    };

    return {
        start: start,
        startControl: startControl,
        endControl: endControl,
        end: end,
        subdivide: function(t) {
            var ab = lerp(start, startControl, t),
                bc = lerp(startControl, endControl, t),
                cd = lerp(endControl, end, t),
                abbc = lerp(ab, bc, t),
                bccd = lerp(bc, cd, t),
                dest = lerp(abbc, bccd, t);
            return [bezierCurve(start, ab, abbc, dest), bezierCurve(dest, bccd, cd, end)];
        },
        curveTo: function(borderArgs) {
            borderArgs.push(["bezierCurve", startControl.x, startControl.y, endControl.x, endControl.y, end.x, end.y]);
        },
        curveToReversed: function(borderArgs) {
            borderArgs.push(["bezierCurve", endControl.x, endControl.y, startControl.x, startControl.y, start.x, start.y]);
        }
    };
}

function drawSide(borderData, radius1, radius2, outer1, inner1, outer2, inner2) {
    var borderArgs = [];

    if (radius1[0] > 0 || radius1[1] > 0) {
        borderArgs.push(["line", outer1[1].start.x, outer1[1].start.y]);
        outer1[1].curveTo(borderArgs);
    } else {
        borderArgs.push([ "line", borderData.c1[0], borderData.c1[1]]);
    }

    if (radius2[0] > 0 || radius2[1] > 0) {
        borderArgs.push(["line", outer2[0].start.x, outer2[0].start.y]);
        outer2[0].curveTo(borderArgs);
        borderArgs.push(["line", inner2[0].end.x, inner2[0].end.y]);
        inner2[0].curveToReversed(borderArgs);
    } else {
        borderArgs.push(["line", borderData.c2[0], borderData.c2[1]]);
        borderArgs.push(["line", borderData.c3[0], borderData.c3[1]]);
    }

    if (radius1[0] > 0 || radius1[1] > 0) {
        borderArgs.push(["line", inner1[1].end.x, inner1[1].end.y]);
        inner1[1].curveToReversed(borderArgs);
    } else {
        borderArgs.push(["line", borderData.c4[0], borderData.c4[1]]);
    }

    return borderArgs;
}

function parseCorner(borderArgs, radius1, radius2, corner1, corner2, x, y) {
    if (radius1[0] > 0 || radius1[1] > 0) {
        borderArgs.push(["line", corner1[0].start.x, corner1[0].start.y]);
        corner1[0].curveTo(borderArgs);
        corner1[1].curveTo(borderArgs);
    } else {
        borderArgs.push(["line", x, y]);
    }

    if (radius2[0] > 0 || radius2[1] > 0) {
        borderArgs.push(["line", corner2[0].start.x, corner2[0].start.y]);
    }
}

function negativeZIndex(container) {
    return container.cssInt("zIndex") < 0;
}

function positiveZIndex(container) {
    return container.cssInt("zIndex") > 0;
}

function zIndex0(container) {
    return container.cssInt("zIndex") === 0;
}

function inlineLevel(container) {
    return ["inline", "inline-block", "inline-table"].indexOf(container.css("display")) !== -1;
}

function isStackingContext(container) {
    return (container instanceof StackingContext);
}

function hasText(container) {
    return container.node.data.trim().length > 0;
}

function noLetterSpacing(container) {
    return (/^(normal|none|0px)$/.test(container.parent.css("letterSpacing")));
}

function getBorderRadiusData(container) {
    return ["TopLeft", "TopRight", "BottomRight", "BottomLeft"].map(function(side) {
        var value = container.css('border' + side + 'Radius');
        var arr = value.split(" ");
        if (arr.length <= 1) {
            arr[1] = arr[0];
        }
        return arr.map(asInt);
    });
}

function renderableNode(node) {
    return (node.nodeType === Node.TEXT_NODE || node.nodeType === Node.ELEMENT_NODE);
}

function isPositionedForStacking(container) {
    var position = container.css("position");
    var zIndex = (["absolute", "relative", "fixed"].indexOf(position) !== -1) ? container.css("zIndex") : "auto";
    return zIndex !== "auto";
}

function isPositioned(container) {
    return container.css("position") !== "static";
}

function isFloating(container) {
    return container.css("float") !== "none";
}

function isInlineBlock(container) {
    return ["inline-block", "inline-table"].indexOf(container.css("display")) !== -1;
}

function not(callback) {
    var context = this;
    return function() {
        return !callback.apply(context, arguments);
    };
}

function isElement(container) {
    return container.node.nodeType === Node.ELEMENT_NODE;
}

function isPseudoElement(container) {
    return container.isPseudoElement === true;
}

function isTextNode(container) {
    return container.node.nodeType === Node.TEXT_NODE;
}

function zIndexSort(contexts) {
    return function(a, b) {
        return (a.cssInt("zIndex") + (contexts.indexOf(a) / contexts.length)) - (b.cssInt("zIndex") + (contexts.indexOf(b) / contexts.length));
    };
}

function hasOpacity(container) {
    return container.getOpacity() < 1;
}

function asInt(value) {
    return parseInt(value, 10);
}

function getWidth(border) {
    return border.width;
}

function nonIgnoredElement(nodeContainer) {
    return (nodeContainer.node.nodeType !== Node.ELEMENT_NODE || ["SCRIPT", "HEAD", "TITLE", "OBJECT", "BR", "OPTION"].indexOf(nodeContainer.node.nodeName) === -1);
}

function flatten(arrays) {
    return [].concat.apply([], arrays);
}

function stripQuotes(content) {
    var first = content.substr(0, 1);
    return (first === content.substr(content.length - 1) && first.match(/'|"/)) ? content.substr(1, content.length - 2) : content;
}

function getWords(characters) {
    var words = [], i = 0, onWordBoundary = false, word;
    while(characters.length) {
        if (isWordBoundary(characters[i]) === onWordBoundary) {
            word = characters.splice(0, i);
            if (word.length) {
                words.push(punycode.ucs2.encode(word));
            }
            onWordBoundary =! onWordBoundary;
            i = 0;
        } else {
            i++;
        }

        if (i >= characters.length) {
            word = characters.splice(0, i);
            if (word.length) {
                words.push(punycode.ucs2.encode(word));
            }
        }
    }
    return words;
}

function isWordBoundary(characterCode) {
    return [
        32, // <space>
        13, // \r
        10, // \n
        9, // \t
        45 // -
    ].indexOf(characterCode) !== -1;
}

function hasUnicode(string) {
    return (/[^\u0000-\u00ff]/).test(string);
}

module.exports = NodeParser;

},{"./color":3,"./fontmetrics":7,"./log":13,"./nodecontainer":14,"./pseudoelementcontainer":18,"./stackingcontext":21,"./textcontainer":25,"./utils":26,"punycode":1}],16:[function(_dereq_,module,exports){
var XHR = _dereq_('./xhr');
var utils = _dereq_('./utils');
var log = _dereq_('./log');
var createWindowClone = _dereq_('./clone');
var decode64 = utils.decode64;

function Proxy(src, proxyUrl, document) {
    var supportsCORS = ('withCredentials' in new XMLHttpRequest());
    if (!proxyUrl) {
        return Promise.reject("No proxy configured");
    }
    var callback = createCallback(supportsCORS);
    var url = createProxyUrl(proxyUrl, src, callback);

    return supportsCORS ? XHR(url) : (jsonp(document, url, callback).then(function(response) {
        return decode64(response.content);
    }));
}
var proxyCount = 0;

function ProxyURL(src, proxyUrl, document) {
    var supportsCORSImage = ('crossOrigin' in new Image());
    var callback = createCallback(supportsCORSImage);
    var url = createProxyUrl(proxyUrl, src, callback);
    return (supportsCORSImage ? Promise.resolve(url) : jsonp(document, url, callback).then(function(response) {
        return "data:" + response.type + ";base64," + response.content;
    }));
}

function jsonp(document, url, callback) {
    return new Promise(function(resolve, reject) {
        var s = document.createElement("script");
        var cleanup = function() {
            delete window.html2canvas.proxy[callback];
            document.body.removeChild(s);
        };
        window.html2canvas.proxy[callback] = function(response) {
            cleanup();
            resolve(response);
        };
        s.src = url;
        s.onerror = function(e) {
            cleanup();
            reject(e);
        };
        document.body.appendChild(s);
    });
}

function createCallback(useCORS) {
    return !useCORS ? "html2canvas_" + Date.now() + "_" + (++proxyCount) + "_" + Math.round(Math.random() * 100000) : "";
}

function createProxyUrl(proxyUrl, src, callback) {
    return proxyUrl + "?url=" + encodeURIComponent(src) + (callback.length ? "&callback=html2canvas.proxy." + callback : "");
}

function documentFromHTML(src) {
    return function(html) {
        var parser = new DOMParser(), doc;
        try {
            doc = parser.parseFromString(html, "text/html");
        } catch(e) {
            log("DOMParser not supported, falling back to createHTMLDocument");
            doc = document.implementation.createHTMLDocument("");
            try {
                doc.open();
                doc.write(html);
                doc.close();
            } catch(ee) {
                log("createHTMLDocument write not supported, falling back to document.body.innerHTML");
                doc.body.innerHTML = html; // ie9 doesnt support writing to documentElement
            }
        }

        var b = doc.querySelector("base");
        if (!b || !b.href.host) {
            var base = doc.createElement("base");
            base.href = src;
            doc.head.insertBefore(base, doc.head.firstChild);
        }

        return doc;
    };
}

function loadUrlDocument(src, proxy, document, width, height, options) {
    return new Proxy(src, proxy, window.document).then(documentFromHTML(src)).then(function(doc) {
        return createWindowClone(doc, document, width, height, options, 0, 0);
    });
}

exports.Proxy = Proxy;
exports.ProxyURL = ProxyURL;
exports.loadUrlDocument = loadUrlDocument;

},{"./clone":2,"./log":13,"./utils":26,"./xhr":28}],17:[function(_dereq_,module,exports){
var ProxyURL = _dereq_('./proxy').ProxyURL;

function ProxyImageContainer(src, proxy) {
    var link = document.createElement("a");
    link.href = src;
    src = link.href;
    this.src = src;
    this.image = new Image();
    var self = this;
    this.promise = new Promise(function(resolve, reject) {
        self.image.crossOrigin = "Anonymous";
        self.image.onload = resolve;
        self.image.onerror = reject;

        new ProxyURL(src, proxy, document).then(function(url) {
            self.image.src = url;
        })['catch'](reject);
    });
}

module.exports = ProxyImageContainer;

},{"./proxy":16}],18:[function(_dereq_,module,exports){
var NodeContainer = _dereq_('./nodecontainer');

function PseudoElementContainer(node, parent, type) {
    NodeContainer.call(this, node, parent);
    this.isPseudoElement = true;
    this.before = type === ":before";
}

PseudoElementContainer.prototype.cloneTo = function(stack) {
    PseudoElementContainer.prototype.cloneTo.call(this, stack);
    stack.isPseudoElement = true;
    stack.before = this.before;
};

PseudoElementContainer.prototype = Object.create(NodeContainer.prototype);

PseudoElementContainer.prototype.appendToDOM = function() {
    if (this.before) {
        this.parent.node.insertBefore(this.node, this.parent.node.firstChild);
    } else {
        this.parent.node.appendChild(this.node);
    }
    this.parent.node.className += " " + this.getHideClass();
};

PseudoElementContainer.prototype.cleanDOM = function() {
    this.node.parentNode.removeChild(this.node);
    this.parent.node.className = this.parent.node.className.replace(this.getHideClass(), "");
};

PseudoElementContainer.prototype.getHideClass = function() {
    return this["PSEUDO_HIDE_ELEMENT_CLASS_" + (this.before ? "BEFORE" : "AFTER")];
};

PseudoElementContainer.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE = "___html2canvas___pseudoelement_before";
PseudoElementContainer.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER = "___html2canvas___pseudoelement_after";

module.exports = PseudoElementContainer;

},{"./nodecontainer":14}],19:[function(_dereq_,module,exports){
var log = _dereq_('./log');

function Renderer(width, height, images, options, document) {
    this.width = width;
    this.height = height;
    this.images = images;
    this.options = options;
    this.document = document;
}

Renderer.prototype.renderImage = function(container, bounds, borderData, imageContainer) {
    var paddingLeft = container.cssInt('paddingLeft'),
        paddingTop = container.cssInt('paddingTop'),
        paddingRight = container.cssInt('paddingRight'),
        paddingBottom = container.cssInt('paddingBottom'),
        borders = borderData.borders;

    var width = bounds.width - (borders[1].width + borders[3].width + paddingLeft + paddingRight);
    var height = bounds.height - (borders[0].width + borders[2].width + paddingTop + paddingBottom);
    this.drawImage(
        imageContainer,
        0,
        0,
        imageContainer.image.width || width,
        imageContainer.image.height || height,
        bounds.left + paddingLeft + borders[3].width,
        bounds.top + paddingTop + borders[0].width,
        width,
        height
    );
};

Renderer.prototype.renderBackground = function(container, bounds, borderData) {
    if (bounds.height > 0 && bounds.width > 0) {
        this.renderBackgroundColor(container, bounds);
        this.renderBackgroundImage(container, bounds, borderData);
    }
};

Renderer.prototype.renderBackgroundColor = function(container, bounds) {
    var color = container.color("backgroundColor");
    if (!color.isTransparent()) {
        this.rectangle(bounds.left, bounds.top, bounds.width, bounds.height, color);
    }
};

Renderer.prototype.renderBorders = function(borders) {
    borders.forEach(this.renderBorder, this);
};

Renderer.prototype.renderBorder = function(data) {
    if (!data.color.isTransparent() && data.args !== null) {
        this.drawShape(data.args, data.color);
    }
};

Renderer.prototype.renderBackgroundImage = function(container, bounds, borderData) {
    var backgroundImages = container.parseBackgroundImages();
    backgroundImages.reverse().forEach(function(backgroundImage, index, arr) {
        switch(backgroundImage.method) {
        case "url":
            var image = this.images.get(backgroundImage.args[0]);
            if (image) {
                this.renderBackgroundRepeating(container, bounds, image, arr.length - (index+1), borderData);
            } else {
                log("Error loading background-image", backgroundImage.args[0]);
            }
            break;
        case "linear-gradient":
        case "gradient":
            var gradientImage = this.images.get(backgroundImage.value);
            if (gradientImage) {
                this.renderBackgroundGradient(gradientImage, bounds, borderData);
            } else {
                log("Error loading background-image", backgroundImage.args[0]);
            }
            break;
        case "none":
            break;
        default:
            log("Unknown background-image type", backgroundImage.args[0]);
        }
    }, this);
};

Renderer.prototype.renderBackgroundRepeating = function(container, bounds, imageContainer, index, borderData) {
    var size = container.parseBackgroundSize(bounds, imageContainer.image, index);
    var position = container.parseBackgroundPosition(bounds, imageContainer.image, index, size);
    var repeat = container.parseBackgroundRepeat(index);
    switch (repeat) {
    case "repeat-x":
    case "repeat no-repeat":
        this.backgroundRepeatShape(imageContainer, position, size, bounds, bounds.left + borderData[3], bounds.top + position.top + borderData[0], 99999, size.height, borderData);
        break;
    case "repeat-y":
    case "no-repeat repeat":
        this.backgroundRepeatShape(imageContainer, position, size, bounds, bounds.left + position.left + borderData[3], bounds.top + borderData[0], size.width, 99999, borderData);
        break;
    case "no-repeat":
        this.backgroundRepeatShape(imageContainer, position, size, bounds, bounds.left + position.left + borderData[3], bounds.top + position.top + borderData[0], size.width, size.height, borderData);
        break;
    default:
        this.renderBackgroundRepeat(imageContainer, position, size, {top: bounds.top, left: bounds.left}, borderData[3], borderData[0]);
        break;
    }
};

module.exports = Renderer;

},{"./log":13}],20:[function(_dereq_,module,exports){
var Renderer = _dereq_('../renderer');
var LinearGradientContainer = _dereq_('../lineargradientcontainer');
var log = _dereq_('../log');

function CanvasRenderer(width, height) {
    Renderer.apply(this, arguments);
    this.canvas = this.options.canvas || this.document.createElement("canvas");
    if (!this.options.canvas) {
        this.canvas.width = width;
        this.canvas.height = height;
    }
    this.ctx = this.canvas.getContext("2d");
    this.taintCtx = this.document.createElement("canvas").getContext("2d");
    this.ctx.textBaseline = "bottom";
    this.variables = {};
    log("Initialized CanvasRenderer with size", width, "x", height);
}

CanvasRenderer.prototype = Object.create(Renderer.prototype);

CanvasRenderer.prototype.setFillStyle = function(fillStyle) {
    this.ctx.fillStyle = typeof(fillStyle) === "object" && !!fillStyle.isColor ? fillStyle.toString() : fillStyle;
    return this.ctx;
};

CanvasRenderer.prototype.rectangle = function(left, top, width, height, color) {
    this.setFillStyle(color).fillRect(left, top, width, height);
};

CanvasRenderer.prototype.circle = function(left, top, size, color) {
    this.setFillStyle(color);
    this.ctx.beginPath();
    this.ctx.arc(left + size / 2, top + size / 2, size / 2, 0, Math.PI*2, true);
    this.ctx.closePath();
    this.ctx.fill();
};

CanvasRenderer.prototype.circleStroke = function(left, top, size, color, stroke, strokeColor) {
    this.circle(left, top, size, color);
    this.ctx.strokeStyle = strokeColor.toString();
    this.ctx.stroke();
};

CanvasRenderer.prototype.drawShape = function(shape, color) {
    this.shape(shape);
    this.setFillStyle(color).fill();
};

CanvasRenderer.prototype.taints = function(imageContainer) {
    if (imageContainer.tainted === null) {
        this.taintCtx.drawImage(imageContainer.image, 0, 0);
        try {
            this.taintCtx.getImageData(0, 0, 1, 1);
            imageContainer.tainted = false;
        } catch(e) {
            this.taintCtx = document.createElement("canvas").getContext("2d");
            imageContainer.tainted = true;
        }
    }

    return imageContainer.tainted;
};

CanvasRenderer.prototype.drawImage = function(imageContainer, sx, sy, sw, sh, dx, dy, dw, dh) {
    if (!this.taints(imageContainer) || this.options.allowTaint) {
        this.ctx.drawImage(imageContainer.image, sx, sy, sw, sh, dx, dy, dw, dh);
    }
};

CanvasRenderer.prototype.clip = function(shapes, callback, context) {
    this.ctx.save();
    shapes.filter(hasEntries).forEach(function(shape) {
        this.shape(shape).clip();
    }, this);
    callback.call(context);
    this.ctx.restore();
};

CanvasRenderer.prototype.shape = function(shape) {
    this.ctx.beginPath();
    shape.forEach(function(point, index) {
        if (point[0] === "rect") {
            this.ctx.rect.apply(this.ctx, point.slice(1));
        } else {
            this.ctx[(index === 0) ? "moveTo" : point[0] + "To" ].apply(this.ctx, point.slice(1));
        }
    }, this);
    this.ctx.closePath();
    return this.ctx;
};

CanvasRenderer.prototype.font = function(color, style, variant, weight, size, family) {
    this.setFillStyle(color).font = [style, variant, weight, size, family].join(" ").split(",")[0];
};

CanvasRenderer.prototype.fontShadow = function(color, offsetX, offsetY, blur) {
    this.setVariable("shadowColor", color.toString())
        .setVariable("shadowOffsetY", offsetX)
        .setVariable("shadowOffsetX", offsetY)
        .setVariable("shadowBlur", blur);
};

CanvasRenderer.prototype.clearShadow = function() {
    this.setVariable("shadowColor", "rgba(0,0,0,0)");
};

CanvasRenderer.prototype.setOpacity = function(opacity) {
    this.ctx.globalAlpha = opacity;
};

CanvasRenderer.prototype.setTransform = function(transform) {
    this.ctx.translate(transform.origin[0], transform.origin[1]);
    this.ctx.transform.apply(this.ctx, transform.matrix);
    this.ctx.translate(-transform.origin[0], -transform.origin[1]);
};

CanvasRenderer.prototype.setVariable = function(property, value) {
    if (this.variables[property] !== value) {
        this.variables[property] = this.ctx[property] = value;
    }

    return this;
};

CanvasRenderer.prototype.text = function(text, left, bottom) {
    this.ctx.fillText(text, left, bottom);
};

CanvasRenderer.prototype.backgroundRepeatShape = function(imageContainer, backgroundPosition, size, bounds, left, top, width, height, borderData) {
    var shape = [
        ["line", Math.round(left), Math.round(top)],
        ["line", Math.round(left + width), Math.round(top)],
        ["line", Math.round(left + width), Math.round(height + top)],
        ["line", Math.round(left), Math.round(height + top)]
    ];
    this.clip([shape], function() {
        this.renderBackgroundRepeat(imageContainer, backgroundPosition, size, bounds, borderData[3], borderData[0]);
    }, this);
};

CanvasRenderer.prototype.renderBackgroundRepeat = function(imageContainer, backgroundPosition, size, bounds, borderLeft, borderTop) {
    var offsetX = Math.round(bounds.left + backgroundPosition.left + borderLeft), offsetY = Math.round(bounds.top + backgroundPosition.top + borderTop);
    this.setFillStyle(this.ctx.createPattern(this.resizeImage(imageContainer, size), "repeat"));
    this.ctx.translate(offsetX, offsetY);
    this.ctx.fill();
    this.ctx.translate(-offsetX, -offsetY);
};

CanvasRenderer.prototype.renderBackgroundGradient = function(gradientImage, bounds) {
    if (gradientImage instanceof LinearGradientContainer) {
        var gradient = this.ctx.createLinearGradient(
            bounds.left + bounds.width * gradientImage.x0,
            bounds.top + bounds.height * gradientImage.y0,
            bounds.left +  bounds.width * gradientImage.x1,
            bounds.top +  bounds.height * gradientImage.y1);
        gradientImage.colorStops.forEach(function(colorStop) {
            gradient.addColorStop(colorStop.stop, colorStop.color.toString());
        });
        this.rectangle(bounds.left, bounds.top, bounds.width, bounds.height, gradient);
    }
};

CanvasRenderer.prototype.resizeImage = function(imageContainer, size) {
    var image = imageContainer.image;
    if(image.width === size.width && image.height === size.height) {
        return image;
    }

    var ctx, canvas = document.createElement('canvas');
    canvas.width = size.width;
    canvas.height = size.height;
    ctx = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, size.width, size.height );
    return canvas;
};

function hasEntries(array) {
    return array.length > 0;
}

module.exports = CanvasRenderer;

},{"../lineargradientcontainer":12,"../log":13,"../renderer":19}],21:[function(_dereq_,module,exports){
var NodeContainer = _dereq_('./nodecontainer');

function StackingContext(hasOwnStacking, opacity, element, parent) {
    NodeContainer.call(this, element, parent);
    this.ownStacking = hasOwnStacking;
    this.contexts = [];
    this.children = [];
    this.opacity = (this.parent ? this.parent.stack.opacity : 1) * opacity;
}

StackingContext.prototype = Object.create(NodeContainer.prototype);

StackingContext.prototype.getParentStack = function(context) {
    var parentStack = (this.parent) ? this.parent.stack : null;
    return parentStack ? (parentStack.ownStacking ? parentStack : parentStack.getParentStack(context)) : context.stack;
};

module.exports = StackingContext;

},{"./nodecontainer":14}],22:[function(_dereq_,module,exports){
function Support(document) {
    this.rangeBounds = this.testRangeBounds(document);
    this.cors = this.testCORS();
    this.svg = this.testSVG();
}

Support.prototype.testRangeBounds = function(document) {
    var range, testElement, rangeBounds, rangeHeight, support = false;

    if (document.createRange) {
        range = document.createRange();
        if (range.getBoundingClientRect) {
            testElement = document.createElement('boundtest');
            testElement.style.height = "123px";
            testElement.style.display = "block";
            document.body.appendChild(testElement);

            range.selectNode(testElement);
            rangeBounds = range.getBoundingClientRect();
            rangeHeight = rangeBounds.height;

            if (rangeHeight === 123) {
                support = true;
            }
            document.body.removeChild(testElement);
        }
    }

    return support;
};

Support.prototype.testCORS = function() {
    return typeof((new Image()).crossOrigin) !== "undefined";
};

Support.prototype.testSVG = function() {
    var img = new Image();
    var canvas = document.createElement("canvas");
    var ctx =  canvas.getContext("2d");
    img.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";

    try {
        ctx.drawImage(img, 0, 0);
        canvas.toDataURL();
    } catch(e) {
        return false;
    }
    return true;
};

module.exports = Support;

},{}],23:[function(_dereq_,module,exports){
var XHR = _dereq_('./xhr');
var decode64 = _dereq_('./utils').decode64;

function SVGContainer(src) {
    this.src = src;
    this.image = null;
    var self = this;

    this.promise = this.hasFabric().then(function() {
        return (self.isInline(src) ? Promise.resolve(self.inlineFormatting(src)) : XHR(src));
    }).then(function(svg) {
        return new Promise(function(resolve) {
            window.html2canvas.svg.fabric.loadSVGFromString(svg, self.createCanvas.call(self, resolve));
        });
    });
}

SVGContainer.prototype.hasFabric = function() {
    return !window.html2canvas.svg || !window.html2canvas.svg.fabric ? Promise.reject(new Error("html2canvas.svg.js is not loaded, cannot render svg")) : Promise.resolve();
};

SVGContainer.prototype.inlineFormatting = function(src) {
    return (/^data:image\/svg\+xml;base64,/.test(src)) ? this.decode64(this.removeContentType(src)) : this.removeContentType(src);
};

SVGContainer.prototype.removeContentType = function(src) {
    return src.replace(/^data:image\/svg\+xml(;base64)?,/,'');
};

SVGContainer.prototype.isInline = function(src) {
    return (/^data:image\/svg\+xml/i.test(src));
};

SVGContainer.prototype.createCanvas = function(resolve) {
    var self = this;
    return function (objects, options) {
        var canvas = new window.html2canvas.svg.fabric.StaticCanvas('c');
        self.image = canvas.lowerCanvasEl;
        canvas
            .setWidth(options.width)
            .setHeight(options.height)
            .add(window.html2canvas.svg.fabric.util.groupSVGElements(objects, options))
            .renderAll();
        resolve(canvas.lowerCanvasEl);
    };
};

SVGContainer.prototype.decode64 = function(str) {
    return (typeof(window.atob) === "function") ? window.atob(str) : decode64(str);
};

module.exports = SVGContainer;

},{"./utils":26,"./xhr":28}],24:[function(_dereq_,module,exports){
var SVGContainer = _dereq_('./svgcontainer');

function SVGNodeContainer(node, _native) {
    this.src = node;
    this.image = null;
    var self = this;

    this.promise = _native ? new Promise(function(resolve, reject) {
        self.image = new Image();
        self.image.onload = resolve;
        self.image.onerror = reject;
        self.image.src = "data:image/svg+xml," + (new XMLSerializer()).serializeToString(node);
        if (self.image.complete === true) {
            resolve(self.image);
        }
    }) : this.hasFabric().then(function() {
        return new Promise(function(resolve) {
            window.html2canvas.svg.fabric.parseSVGDocument(node, self.createCanvas.call(self, resolve));
        });
    });
}

SVGNodeContainer.prototype = Object.create(SVGContainer.prototype);

module.exports = SVGNodeContainer;

},{"./svgcontainer":23}],25:[function(_dereq_,module,exports){
var NodeContainer = _dereq_('./nodecontainer');

function TextContainer(node, parent) {
    NodeContainer.call(this, node, parent);
}

TextContainer.prototype = Object.create(NodeContainer.prototype);

TextContainer.prototype.applyTextTransform = function() {
    this.node.data = this.transform(this.parent.css("textTransform"));
};

TextContainer.prototype.transform = function(transform) {
    var text = this.node.data;
    switch(transform){
        case "lowercase":
            return text.toLowerCase();
        case "capitalize":
            return text.replace(/(^|\s|:|-|\(|\))([a-z])/g, capitalize);
        case "uppercase":
            return text.toUpperCase();
        default:
            return text;
    }
};

function capitalize(m, p1, p2) {
    if (m.length > 0) {
        return p1 + p2.toUpperCase();
    }
}

module.exports = TextContainer;

},{"./nodecontainer":14}],26:[function(_dereq_,module,exports){
exports.smallImage = function smallImage() {
    return "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
};

exports.bind = function(callback, context) {
    return function() {
        return callback.apply(context, arguments);
    };
};

/*
 * base64-arraybuffer
 * https://github.com/niklasvh/base64-arraybuffer
 *
 * Copyright (c) 2012 Niklas von Hertzen
 * Licensed under the MIT license.
 */

exports.decode64 = function(base64) {
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var len = base64.length, i, encoded1, encoded2, encoded3, encoded4, byte1, byte2, byte3;

    var output = "";

    for (i = 0; i < len; i+=4) {
        encoded1 = chars.indexOf(base64[i]);
        encoded2 = chars.indexOf(base64[i+1]);
        encoded3 = chars.indexOf(base64[i+2]);
        encoded4 = chars.indexOf(base64[i+3]);

        byte1 = (encoded1 << 2) | (encoded2 >> 4);
        byte2 = ((encoded2 & 15) << 4) | (encoded3 >> 2);
        byte3 = ((encoded3 & 3) << 6) | encoded4;
        if (encoded3 === 64) {
            output += String.fromCharCode(byte1);
        } else if (encoded4 === 64 || encoded4 === -1) {
            output += String.fromCharCode(byte1, byte2);
        } else{
            output += String.fromCharCode(byte1, byte2, byte3);
        }
    }

    return output;
};

exports.getBounds = function(node) {
    if (node.getBoundingClientRect) {
        var clientRect = node.getBoundingClientRect();
        var width = node.offsetWidth == null ? clientRect.width : node.offsetWidth;
        return {
            top: clientRect.top,
            bottom: clientRect.bottom || (clientRect.top + clientRect.height),
            right: clientRect.left + width,
            left: clientRect.left,
            width:  width,
            height: node.offsetHeight == null ? clientRect.height : node.offsetHeight
        };
    }
    return {};
};

exports.offsetBounds = function(node) {
    var parent = node.offsetParent ? exports.offsetBounds(node.offsetParent) : {top: 0, left: 0};

    return {
        top: node.offsetTop + parent.top,
        bottom: node.offsetTop + node.offsetHeight + parent.top,
        right: node.offsetLeft + parent.left + node.offsetWidth,
        left: node.offsetLeft + parent.left,
        width: node.offsetWidth,
        height: node.offsetHeight
    };
};

exports.parseBackgrounds = function(backgroundImage) {
    var whitespace = ' \r\n\t',
        method, definition, prefix, prefix_i, block, results = [],
        mode = 0, numParen = 0, quote, args;
    var appendResult = function() {
        if(method) {
            if (definition.substr(0, 1) === '"') {
                definition = definition.substr(1, definition.length - 2);
            }
            if (definition) {
                args.push(definition);
            }
            if (method.substr(0, 1) === '-' && (prefix_i = method.indexOf('-', 1 ) + 1) > 0) {
                prefix = method.substr(0, prefix_i);
                method = method.substr(prefix_i);
            }
            results.push({
                prefix: prefix,
                method: method.toLowerCase(),
                value: block,
                args: args,
                image: null
            });
        }
        args = [];
        method = prefix = definition = block = '';
    };
    args = [];
    method = prefix = definition = block = '';
    backgroundImage.split("").forEach(function(c) {
        if (mode === 0 && whitespace.indexOf(c) > -1) {
            return;
        }
        switch(c) {
        case '"':
            if(!quote) {
                quote = c;
            } else if(quote === c) {
                quote = null;
            }
            break;
        case '(':
            if(quote) {
                break;
            } else if(mode === 0) {
                mode = 1;
                block += c;
                return;
            } else {
                numParen++;
            }
            break;
        case ')':
            if (quote) {
                break;
            } else if(mode === 1) {
                if(numParen === 0) {
                    mode = 0;
                    block += c;
                    appendResult();
                    return;
                } else {
                    numParen--;
                }
            }
            break;

        case ',':
            if (quote) {
                break;
            } else if(mode === 0) {
                appendResult();
                return;
            } else if (mode === 1) {
                if (numParen === 0 && !method.match(/^url$/i)) {
                    args.push(definition);
                    definition = '';
                    block += c;
                    return;
                }
            }
            break;
        }

        block += c;
        if (mode === 0) {
            method += c;
        } else {
            definition += c;
        }
    });

    appendResult();
    return results;
};

},{}],27:[function(_dereq_,module,exports){
var GradientContainer = _dereq_('./gradientcontainer');

function WebkitGradientContainer(imageData) {
    GradientContainer.apply(this, arguments);
    this.type = imageData.args[0] === "linear" ? GradientContainer.TYPES.LINEAR : GradientContainer.TYPES.RADIAL;
}

WebkitGradientContainer.prototype = Object.create(GradientContainer.prototype);

module.exports = WebkitGradientContainer;

},{"./gradientcontainer":9}],28:[function(_dereq_,module,exports){
function XHR(url) {
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url);

        xhr.onload = function() {
            if (xhr.status === 200) {
                resolve(xhr.responseText);
            } else {
                reject(new Error(xhr.statusText));
            }
        };

        xhr.onerror = function() {
            reject(new Error("Network Error"));
        };

        xhr.send();
    });
}

module.exports = XHR;

},{}]},{},[4])(4)
});