"use strict";function l(r,e,f="label",n="value"){let t="";if(Array.isArray(r)&&e){const c=e.toString();let s;Array.isArray(e)?s=e:typeof e=="string"?s=c.split(","):typeof e=="number"&&(s=[e]),s==null||s.forEach(o=>{const i=r.find(y=>y[n]===o);i&&(t+=`${i[f]},`)})}return(t.includes(",")?t.slice(0,-1):t)||""}module.exports=l;