import{r,R as p}from"./react-6b071ed0.js";import{R as T}from"./react-router-dedb48a4.js";import{c as b}from"./@remix-run-503e748c.js";/**
 * React Router DOM v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const v="startTransition",l=p[v];function I(t){let{basename:f,children:S,future:R,window:h}=t,s=r.useRef();s.current==null&&(s.current=b({window:h,v5Compat:!0}));let e=s.current,[a,o]=r.useState({action:e.action,location:e.location}),{v7_startTransition:n}=R||{},i=r.useCallback(c=>{n&&l?l(()=>o(c)):o(c)},[o,n]);return r.useLayoutEffect(()=>e.listen(i),[e,i]),r.createElement(T,{basename:f,children:S,location:a.location,navigationType:a.action,navigator:e})}var u;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(u||(u={}));var m;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(m||(m={}));export{I as B};
