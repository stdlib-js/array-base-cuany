"use strict";var f=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var c=f(function(H,p){
var m=require('@stdlib/array-base-assert-is-complex128array/dist'),A=require('@stdlib/array-base-assert-is-complex64array/dist'),b=require('@stdlib/array-base-assert-is-booleanarray/dist'),g=require('@stdlib/array-base-arraylike2object/dist'),B=require('@stdlib/strided-base-reinterpret-complex128/dist'),C=require('@stdlib/strided-base-reinterpret-complex64/dist'),P=require('@stdlib/strided-base-reinterpret-boolean/dist');function j(r,e,n,o){var a,i,s;for(a=!1,i=o,s=0;s<r.length;s++)a===!1&&r[s]&&(a=!0),e[i]=a,i+=n;return e}function k(r,e,n,o){var a,i,s,v,t,u,l;for(a=r.data,i=e.data,s=r.accessors[0],v=e.accessors[1],t=!1,u=o,l=0;l<a.length;l++)t===!1&&s(a,l)&&(t=!0),v(i,u,t),u+=n;return i}function q(r,e,n,o){var a,i,s,v,t;for(i=e.accessors[1],a=e.data,s=!1,v=o,t=0;t<r.length;t+=2)s===!1&&(r[t]||r[t+1])&&(s=!0),i(a,v,s),v+=n;return a}function O(r,e,n,o){var a,i,s,v,t;for(i=e.accessors[1],a=e.data,s=!1,v=o,t=0;t<r.length;t++)s===!1&&r[t]&&(s=!0),i(a,v,s),v+=n;return a}function R(r,e,n,o){var a=g(r),i=g(e);return a.accessorProtocol||i.accessorProtocol?(m(r)?q(B(r,0),i,n,o):A(r)?q(C(r,0),i,n,o):b(r)?O(P(r,0),i,n,o):k(a,i,n,o),e):(j(r,e,n,o),e)}p.exports=R
});var y=f(function(I,d){
var w=require('@stdlib/array-base-filled/dist'),z=c();function D(r){var e=w(!1,r.length);return z(r,e,1,0)}d.exports=D
});var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),h=y(),F=c();E(h,"assign",F);module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
