(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(6004)}])},1516:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,o){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5569:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(2648).Z,r=n(7273).Z,l=o(n(7294)),u=n(4532),a=n(3353),c=n(1410),i=n(9064),s=n(370),f=n(9955),d=n(4224),p=n(508),_=n(1516),h=n(4266);let m=new Set;function v(e,t,n,o,r){if(r||a.isLocalURL(t)){if(!o.bypassPrefetchedCheck){let r=void 0!==o.locale?o.locale:"locale"in e?e.locale:void 0,l=t+"%"+n+"%"+r;if(m.has(l))return;m.add(l)}Promise.resolve(e.prefetch(t,n,o)).catch(e=>{})}}function g(e){return"string"==typeof e?e:c.formatUrl(e)}let x=l.default.forwardRef(function(e,t){let n,o;let{href:c,as:m,children:x,prefetch:j,passHref:y,replace:C,shallow:b,scroll:S,locale:k,onClick:M,onMouseEnter:N,onTouchStart:E,legacyBehavior:O=!1}=e,P=r(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=x,O&&("string"==typeof n||"number"==typeof n)&&(n=l.default.createElement("a",null,n));let w=!1!==j,T=l.default.useContext(f.RouterContext),L=l.default.useContext(d.AppRouterContext),R=null!=T?T:L,B=!T,{href:A,as:I}=l.default.useMemo(()=>{if(!T){let e=g(c);return{href:e,as:m?g(m):e}}let[e,t]=u.resolveHref(T,c,!0);return{href:e,as:m?u.resolveHref(T,m):t||e}},[T,c,m]),H=l.default.useRef(A),U=l.default.useRef(I);O&&(o=l.default.Children.only(n));let K=O?o&&"object"==typeof o&&o.ref:t,[D,Z,W]=p.useIntersection({rootMargin:"200px"}),X=l.default.useCallback(e=>{(U.current!==I||H.current!==A)&&(W(),U.current=I,H.current=A),D(e),K&&("function"==typeof K?K(e):"object"==typeof K&&(K.current=e))},[I,K,A,W,D]);l.default.useEffect(()=>{R&&Z&&w&&v(R,A,I,{locale:k},B)},[I,A,Z,k,w,null==T?void 0:T.locale,R,B]);let F={ref:X,onClick(e){O||"function"!=typeof M||M(e),O&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(e),R&&!e.defaultPrevented&&function(e,t,n,o,r,u,c,i,s,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!s&&!a.isLocalURL(n)))return;e.preventDefault();let _=()=>{"beforePopState"in t?t[r?"replace":"push"](n,o,{shallow:u,locale:i,scroll:c}):t[r?"replace":"push"](o||n,{forceOptimisticNavigation:!f})};s?l.default.startTransition(_):_()}(e,R,A,I,C,b,S,k,B,w)},onMouseEnter(e){O||"function"!=typeof N||N(e),O&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),R&&(w||!B)&&v(R,A,I,{locale:k,priority:!0,bypassPrefetchedCheck:!0},B)},onTouchStart(e){O||"function"!=typeof E||E(e),O&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),R&&(w||!B)&&v(R,A,I,{locale:k,priority:!0,bypassPrefetchedCheck:!0},B)}};if(i.isAbsoluteUrl(I))F.href=I;else if(!O||y||"a"===o.type&&!("href"in o.props)){let e=void 0!==k?k:null==T?void 0:T.locale,t=(null==T?void 0:T.isLocaleDomain)&&_.getDomainLocale(I,e,null==T?void 0:T.locales,null==T?void 0:T.domainLocales);F.href=t||h.addBasePath(s.addLocale(I,e,null==T?void 0:T.defaultLocale))}return O?l.default.cloneElement(o,F):l.default.createElement("a",Object.assign({},P,F),n)});t.default=x,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},508:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:c}=e,i=c||!l,[s,f]=o.useState(!1),d=o.useRef(null),p=o.useCallback(e=>{d.current=e},[]);o.useEffect(()=>{if(l){if(i||s)return;let e=d.current;if(e&&e.tagName){let o=function(e,t,n){let{id:o,observer:r,elements:l}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},o=a.find(e=>e.root===n.root&&e.margin===n.margin);if(o&&(t=u.get(o)))return t;let r=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:l,elements:r},a.push(n),u.set(n,t),t}(n);return l.set(e,t),r.observe(e),function(){if(l.delete(e),r.unobserve(e),0===l.size){r.disconnect(),u.delete(o);let e=a.findIndex(e=>e.root===o.root&&e.margin===o.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n});return o}}else if(!s){let e=r.requestIdleCallback(()=>f(!0));return()=>r.cancelIdleCallback(e)}},[i,n,t,s,d.current]);let _=o.useCallback(()=>{f(!1)},[]);return[p,s,_]};var o=n(7294),r=n(29);let l="function"==typeof IntersectionObserver,u=new Map,a=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6004:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var o=n(5893);n(4627);var r=n(7132),l=n(4090);function u(e){let{Component:t,pageProps:n}=e;return(0,o.jsxs)(l.default,{children:[(0,o.jsx)(r.default,{}),(0,o.jsx)(t,{...n})]})}},7132:function(e,t,n){"use strict";n.r(t);var o=n(5893),r=n(1664),l=n.n(r);n(7294);var u=n(6536),a=n.n(u);n(5485),t.default=function(){return(0,o.jsx)("div",{className:a().header,children:(0,o.jsx)(l(),{href:"/",children:"HARUBRO"})})}},4090:function(e,t,n){"use strict";n.r(t),n.d(t,{MyContext:function(){return l}});var o=n(5893),r=n(7294);let l=(0,r.createContext)(null),u=e=>{let{children:t}=e,[n,u]=(0,r.useState)(!0);return(0,o.jsx)(l.Provider,{value:{menu:n,setMenu:u},children:t})};t.default=u},5485:function(e,t,n){"use strict";var o=n(5893),r=n(7294),l=n(9165),u=n.n(l),a=n(6536),c=n.n(a),i=n(1664),s=n.n(i),f=n(4090);t.Z=function(){let{menu:e,setMenu:t}=(0,r.useContext)(f.MyContext);function n(){t(!e)}return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:u().menuBTN,children:(0,o.jsxs)("div",{onClick:n,className:u().toogle,children:[(0,o.jsx)("span",{className:e?u().toogleSpan:"".concat(u().toogleSpanA)}),(0,o.jsx)("span",{className:e?u().toogleSpan:"".concat(u().toogleSpanB," ").concat(u().action)}),(0,o.jsx)("span",{className:e?u().toogleSpan:"".concat(u().toogleSpanC," ").concat(u().action)})]})}),(0,o.jsxs)("div",{className:e?u().menu:"".concat(u().menu," ").concat(u().action),children:[(0,o.jsx)("div",{className:c().menuHeader,children:(0,o.jsx)(s(),{href:"/",children:"HARUBRO"})}),(0,o.jsxs)("div",{className:u().menuCont,children:[(0,o.jsx)(s(),{href:"/",onClick:n,children:"MAIN"}),(0,o.jsx)(s(),{href:"/projectA",onClick:n,children:"PROJECT"}),(0,o.jsx)(s(),{href:"/about",onClick:n,children:"ABOUT/SKILL"}),(0,o.jsxs)("div",{className:u().info,children:[(0,o.jsx)("p",{children:"e-mail : gktjd1904@naver.com"}),(0,o.jsx)("p",{children:"Phone : 010-4276-3676"})]})]})]})]})}},4627:function(){},6536:function(e){e.exports={header:"head_header__LZSLv",menuHeader:"head_menuHeader___ofXw"}},9165:function(e){e.exports={menuBTN:"menu_menuBTN__GWIeF",toogle:"menu_toogle__WFDI6",toogleSpan:"menu_toogleSpan__HCtQc",toogleSpanA:"menu_toogleSpanA__K40Xe",toogleSpanB:"menu_toogleSpanB__aNroW",xx:"menu_xx__69vcB",toogleSpanC:"menu_toogleSpanC__z813J",menu:"menu_menu__9MCHk",action:"menu_action__k2_5Z",menuCont:"menu_menuCont__lep3i",info:"menu_info__BwdNW"}},1664:function(e,t,n){e.exports=n(5569)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(6885)}),_N_E=e.O()}]);