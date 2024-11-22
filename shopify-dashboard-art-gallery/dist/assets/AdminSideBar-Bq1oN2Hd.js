import{G as s,r as d,j as e,p as a,L as l,q as p,s as h,t as u,v as m}from"./index-D5jx_pdz.js";function g(n){return s({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M676 623c-18.8 0-34 15.2-34 34s15.2 34 34 34 34-15.2 34-34-15.2-34-34-34zm204-455H668c0-30.9-25.1-56-56-56h-80c-30.9 0-56 25.1-56 56H264c-17.7 0-32 14.3-32 32v200h-88c-17.7 0-32 14.3-32 32v448c0 17.7 14.3 32 32 32h336c17.7 0 32-14.3 32-32v-16h368c17.7 0 32-14.3 32-32V200c0-17.7-14.3-32-32-32zM448 848H176V616h272v232zm0-296H176v-88h272v88zm20-272v-48h72v-56h64v56h72v48H468zm180 168v56c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-56c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8zm28 301c-50.8 0-92-41.2-92-92s41.2-92 92-92 92 41.2 92 92-41.2 92-92 92zm92-245c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-96c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v96zm-92 61c-50.8 0-92 41.2-92 92s41.2 92 92 92 92-41.2 92-92-41.2-92-92-92zm0 126c-18.8 0-34-15.2-34-34s15.2-34 34-34 34 15.2 34 34-15.2 34-34 34z"},child:[]}]})(n)}function M(n){return s({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M7,12 L11,15 L16,8"},child:[]}]})(n)}function j(n){return s({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M16,12 C18.3736719,13.1826446 20,15.6506255 20,19 L20,23 L4,23 L4,19 C4,15.6457258 5.6310898,13.1754259 8,12 M12,13 C15.3137085,13 18,10.3137085 18,7 C18,3.6862915 15.3137085,1 12,1 C8.6862915,1 6,3.6862915 6,7 C6,10.3137085 8.6862915,13 12,13 Z M18,7 C16.5,7 15,7.3599999 13,5 C11,7.3599999 8.5,8 6,7 M7,13 L12.0249378,18.2571942 L17,13 M12,18 L12,23"},child:[]}]})(n)}function I(n){return s({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M22.84 2.9982v17.9987c.0086 1.6473-1.3197 2.9897-2.967 2.9984a2.9808 2.9808 0 01-.3677-.0208c-1.528-.226-2.6477-1.5558-2.6105-3.1V3.1204c-.0369-1.5458 1.0856-2.8762 2.6157-3.1 1.6361-.1915 3.1178.9796 3.3093 2.6158.014.1201.0208.241.0202.3619zM4.1326 18.0548c-1.6417 0-2.9726 1.331-2.9726 2.9726C1.16 22.6691 2.4909 24 4.1326 24s2.9726-1.3309 2.9726-2.9726-1.331-2.9726-2.9726-2.9726zm7.8728-9.0098c-.0171 0-.0342 0-.0513.0003-1.6495.0904-2.9293 1.474-2.891 3.1256v7.9846c0 2.167.9535 3.4825 2.3505 3.763 1.6118.3266 3.1832-.7152 3.5098-2.327.04-.1974.06-.3983.0593-.5998v-8.9585c.003-1.6474-1.33-2.9852-2.9773-2.9882z"},child:[]}]})(n)}const f=()=>{const[n,r]=d.useState(null),[c,x]=d.useState(null),v=t=>{r(n===t?null:t)},o=t=>{x(t)};return e.jsx("section",{className:"sidebarListStyle md:pl-5 md:pr-3 h-[95.6vh] bg-[#EBEBEB] overflow-auto",children:e.jsx("ul",{children:B.map((t,C)=>t.index===8?e.jsxs("div",{className:"flex justify-between pr-1 my-2 relative md:right-[12px] text-black",children:[e.jsx("p",{children:"Sales channels"}),e.jsx("span",{className:"relative top-[6px] text-zinc-400",children:e.jsx(a,{})})]},t.index):t.index===11?e.jsxs("div",{className:"flex justify-between pr-1 my-2 relative right-[12px]",children:[e.jsx("p",{children:"Add apps"}),e.jsx("span",{className:"relative top-[6px] text-zinc-400",children:e.jsx(a,{})})]},t.index):e.jsxs("div",{className:"py-[4px] pl-2",children:[e.jsx(l,{to:`${t.route}`,children:e.jsxs("li",{className:`flex gap-2 py-1 px-3 hover:bg-[#f3f3f3] text-[#212529] text-lg font-semibold rounded-lg ${c===t.activeIndex?"bg-active text-active":""}`,onClick:()=>{o(t.activeIndex),v(t.index)},children:[e.jsx("span",{className:"relative top-1 text-xg",children:t.IconBase}),e.jsx("span",{children:t.title})]})}),n===t.index&&t.items&&e.jsx("ul",{className:"dropdown pl-4",children:t.items.map((i,b)=>e.jsx(l,{to:i.route,children:e.jsx("li",{className:`text-[#75777d] hover:text-black my-[4px] py-1 px-3 hover:bg-[#f3f3f3] text-lg font-semibold rounded-lg ${c===i.activeIndex?"bg-active text-active":""}`,onClick:()=>o(i.activeIndex),children:i.label})},i.activeIndex))})]},t.index))})})},B=[{title:"Home",route:"/admin",IconBase:e.jsx(p,{}),activeIndex:0,index:0},{title:"Orders",route:"/admin/order",IconBase:e.jsx(g,{}),activeIndex:1,index:1},{title:"Products",route:"/admin/prooduct",IconBase:e.jsx(h,{}),activeIndex:4,index:2,items:[{label:"Collections",route:"/admin/prooduct/coollection",activeIndex:5}]},{title:"Customers",route:"/admin/customer",IconBase:e.jsx(j,{}),activeIndex:10,index:3,items:[]},{title:"Analytics",route:"/admin/analytics",IconBase:e.jsx(I,{}),activeIndex:15,index:5},{title:"Discounts",route:"/admin/discount",IconBase:e.jsx(u,{}),activeIndex:21,index:7},{index:8,title:"Add apps",IconBase:e.jsx(a,{})},{title:"Online Store",route:"/admin/blog-post",IconBase:e.jsx(m,{}),activeIndex:24,index:9,items:[{label:"Blog posts",route:"/admin/blog-post",activeIndex:24,index:9}]}],y=Object.freeze(Object.defineProperty({__proto__:null,default:f},Symbol.toStringTag,{value:"Module"}));export{f as A,M as G,y as a};