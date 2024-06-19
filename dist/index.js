"use strict";var f=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var l=f(function(D,p){
var m=require('@stdlib/array-base-assert-is-complex128array/dist'),A=require('@stdlib/array-base-assert-is-complex64array/dist'),g=require('@stdlib/array-base-arraylike2object/dist'),C=require('@stdlib/strided-base-reinterpret-complex128/dist'),P=require('@stdlib/strided-base-reinterpret-complex64/dist');function b(r,e,t,n){var a,s,i;for(a=!1,s=n,i=0;i<r.length;i++)a===!1&&r[i]&&(a=!0),e[s]=a,s+=t;return e}function j(r,e,t,n){var a,s,i,u,o,c,v;for(a=r.data,s=e.data,i=r.accessors[0],u=e.accessors[1],o=!1,c=n,v=0;v<a.length;v++)o===!1&&i(a,v)&&(o=!0),u(s,c,o),c+=t;return s}function q(r,e,t,n){var a,s,i,u,o;for(s=e.accessors[1],a=e.data,i=!1,u=n,o=0;o<r.length;o+=2)i===!1&&(r[o]||r[o+1])&&(i=!0),s(a,u,i),u+=t;return a}function k(r,e,t,n){var a=g(r),s=g(e);return a.accessorProtocol||s.accessorProtocol?(m(r)?q(C(r,0),s,t,n):A(r)?q(P(r,0),s,t,n):j(a,s,t,n),e):(b(r,e,t,n),e)}p.exports=k
});var y=f(function(E,d){
var O=require('@stdlib/array-base-filled/dist'),R=l();function w(r){var e=O(!1,r.length);return R(r,e,1,0)}d.exports=w
});var x=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),h=y(),z=l();x(h,"assign",z);module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
