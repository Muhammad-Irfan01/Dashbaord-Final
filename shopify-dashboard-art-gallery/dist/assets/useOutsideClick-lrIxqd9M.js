import{r as s}from"./index-D5jx_pdz.js";const u=({ref:e,handler:t})=>{s.useEffect(()=>{const n=o=>{e.current&&!e.current.contains(o.target)&&t()};return document.addEventListener("mousedown",n),()=>{document.removeEventListener("mousedown",n)}},[e,t])};export{u};