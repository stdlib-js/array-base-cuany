// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-filled@v0.2.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-complex128array@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-complex64array@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-booleanarray@v0.0.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-arraylike2object@v0.2.1-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-reinterpret-complex128@v0.2.2-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-reinterpret-complex64@v0.2.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-reinterpret-boolean@v0.0.2-esm/index.mjs";function m(s,e,r,t){var n,i,a,o,d;for(i=e.accessors[1],n=e.data,a=!1,o=t,d=0;d<s.length;d+=2)!1===a&&(s[d]||s[d+1])&&(a=!0),i(n,o,a),o+=r;return n}function l(s,e,l,c){var j=i(s),p=i(e);return j.accessorProtocol||p.accessorProtocol?(r(s)?m(a(s,0),p,l,c):t(s)?m(o(s,0),p,l,c):n(s)?function(s,e,r,t){var n,i,a,o,d;for(i=e.accessors[1],n=e.data,a=!1,o=t,d=0;d<s.length;d++)!1===a&&s[d]&&(a=!0),i(n,o,a),o+=r}(d(s,0),p,l,c):function(s,e,r,t){var n,i,a,o,d,m,l;for(n=s.data,i=e.data,a=s.accessors[0],o=e.accessors[1],d=!1,m=t,l=0;l<n.length;l++)!1===d&&a(n,l)&&(d=!0),o(i,m,d),m+=r}(j,p,l,c),e):(function(s,e,r,t){var n,i,a;for(n=!1,i=t,a=0;a<s.length;a++)!1===n&&s[a]&&(n=!0),e[i]=n,i+=r}(s,e,l,c),e)}function c(s){return l(s,e(!1,s.length),1,0)}s(c,"assign",l);export{l as assign,c as default};
//# sourceMappingURL=index.mjs.map
