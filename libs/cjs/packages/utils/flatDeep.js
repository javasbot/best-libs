"use strict";function s(r=[],c=1,t="children"){return c>0?r.reduce((u,e)=>u.concat(Array.isArray(e==null?void 0:e[t])?[e,...s(e==null?void 0:e[t],c-1,t)]:e),[]):r.slice()}module.exports=s;
