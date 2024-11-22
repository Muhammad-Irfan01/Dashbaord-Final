import{r as a,j as e,I as h,e as j,g as S,G as y,h as k,i as C,k as B,l as F,m as E,n as M,M as O}from"./index-D5jx_pdz.js";import{u as x}from"./useOutsideClick-lrIxqd9M.js";import{A as I,G as b}from"./AdminSideBar-Bq1oN2Hd.js";const A=()=>{const[s,r]=a.useState(!0),[d,i]=a.useState("Apps"),n=()=>{r(!s)},t=o=>{i(o)};return e.jsx(e.Fragment,{children:e.jsxs("section",{className:"min-w-[202px]",children:[s&&e.jsxs("div",{className:"bg-[#fdfdfd] p-2 rounded-xl z-30",children:[e.jsxs("form",{className:"relative",children:[e.jsx("span",{className:"absolute left-3 top-3 text-gray-400",children:e.jsx(h,{})}),e.jsx("input",{type:"text",placeholder:"Search",className:"w-full pl-10 pr-10 px-2 py-1 border-2 border-black rounded-md"}),e.jsx("button",{onClick:n,className:"absolute right-3 top-2 text-gray-500 p-1 bg-[#EBEBEB] rounded-lg",children:e.jsx(j,{})})]}),e.jsxs("div",{className:"p-3",children:[e.jsxs("div",{className:"flex flex-wrap flex-row gap-3",children:[e.jsx(c,{text:"Apps"}),e.jsx(c,{text:"Customers"}),e.jsx(c,{text:"Orders"}),e.jsx(c,{text:"Products"}),e.jsx(c,{text:"Sales channels",width:"118px"})]}),e.jsxs("div",{className:"py-5 flex flex-col items-center gap-4",children:[e.jsx("span",{className:"text-6xl text-[#c5c5c5]",children:e.jsx(h,{})}),e.jsx("p",{className:"text-lg font-medium text-[#8f8f8f]",children:"Find anything in My Store"})]})]})]}),!s&&e.jsxs("div",{className:"bg-white p-2 rounded-xl",children:[e.jsxs("form",{action:"",className:"relative",children:[e.jsx("span",{className:"absolute left-3 top-3 text-gray-400",children:e.jsx(h,{})}),e.jsx("input",{type:"text",placeholder:d,className:"w-full pl-10 pr-10 px-2 py-1 border-2 border-black rounded-md"}),e.jsxs("div",{className:"absolute right-3 top-2 flex gap-3",children:[e.jsx("button",{className:"relative",onClick:n,children:e.jsx(S,{})}),e.jsx("button",{onClick:n,className:"text-gray-500  p-1 rounded-lg",children:e.jsx(j,{})})]})]}),e.jsxs("div",{className:"flex flex-col pt-3 pb-1",children:[e.jsx(l,{text:"Apps",updatePlaceholder:t}),e.jsx(l,{text:"Customers",updatePlaceholder:t}),e.jsx(l,{text:"Orders",updatePlaceholder:t}),e.jsx(l,{text:"Products",updatePlaceholder:t}),e.jsx(l,{text:"Sales channels",updatePlaceholder:t}),e.jsx(l,{text:"Articles",updatePlaceholder:t}),e.jsx(l,{text:"Blogs",updatePlaceholder:t}),e.jsx(l,{text:"Collections",updatePlaceholder:t}),e.jsx(l,{text:"Companies",updatePlaceholder:t}),e.jsx(l,{text:"Pages",updatePlaceholder:t}),e.jsx(l,{text:"Collections",updatePlaceholder:t}),e.jsx(l,{text:"Settings",updatePlaceholder:t})]})]})]})})},c=({text:s,width:r})=>e.jsx("button",{className:`bg-[#EBEBEB] px-2 rounded-lg ${r}`,children:s}),l=({text:s,updatePlaceholder:r})=>e.jsx("div",{onMouseEnter:()=>r(s),className:"p-2 rounded-lg hover:bg-[#F7F7F7]",children:e.jsx("button",{className:"bg-[#EBEBEB] px-2 rounded-lg text-sm max-w-max",children:s})});function D(s){return y({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19 17h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2zM19 10h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2zM19 3h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2z"},child:[]}]})(s)}function z(s){return y({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"},child:[]}]})(s)}const K=()=>{const[s,r]=a.useState(!1),[d,i]=a.useState(!1),[n,t]=a.useState(!1),[o,m]=a.useState(!1),u=a.useRef(null),f=a.useRef(null),N=a.useRef(null),g=a.useRef(null);return x({ref:f,handler:()=>r(!1)}),x({ref:N,handler:()=>i(!1)}),x({ref:g,handler:()=>t(!1)}),x({ref:u,handler:()=>m(!1)}),a.useEffect(()=>{const v=p=>{p.ctrlKey&&p.key==="k"&&(p.preventDefault(),r(w=>!w))};return window.addEventListener("keydown",v),()=>{window.removeEventListener("keydown",v)}},[]),e.jsx("section",{className:"bg-[#1A1A1A]",children:e.jsxs("div",{className:"flex justify-between items-center p-2",children:[" ",e.jsxs("div",{className:"hidden md:block",children:[e.jsx("img",{src:"",alt:"Logo Image",className:"h-8"})," "]}),e.jsxs("div",{className:"block md:hidden text-white relative",ref:u,children:[e.jsx("div",{onClick:()=>m(!o),className:"cursor-pointer",children:e.jsx(D,{className:"text-2xl"})}),o&&e.jsxs("div",{className:"absolute top-9 left-0 z-30",children:[e.jsx("button",{className:"absolute top-1 right-1 text-black p-1",onClick:()=>m(!1),children:"✕"}),e.jsx(I,{})]})]}),e.jsxs("div",{className:"w-1/3 relative",ref:f,children:[e.jsx(P,{onClick:()=>r(!s)}),s&&e.jsx("div",{className:"absolute top-0 w-full z-20 shadow-xl",children:e.jsx(A,{})})]}),e.jsxs("div",{className:"flex gap-3 items-center text-white",children:[" ",e.jsxs("div",{ref:N,children:[e.jsxs("div",{className:"px-2 py-1 rounded-md hover:bg-[#2b2b2b] cursor-pointer",onClick:()=>i(!d),children:[e.jsx(k,{className:"text-xl"})," "]}),d&&e.jsxs("div",{className:"absolute top-14 right-0 px-3 py-3 bg-white text-black rounded-lg w-max z-20",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("div",{children:"Alerts"}),e.jsxs("div",{className:"flex items-center gap-2",children:[" ",e.jsx("div",{children:e.jsx(j,{})}),e.jsx("div",{children:e.jsx(b,{})})]})]}),e.jsx("div",{className:"flex gap-1 py-1 sm:px-2 mt-4 rounded-lg",children:e.jsxs("div",{className:"py-1 px-2",children:[e.jsxs("div",{className:"flex font-bold",children:[e.jsx("p",{children:"Point of Sale"}),e.jsx("span",{className:"relative top-[5px]",children:e.jsx(z,{})}),e.jsx("p",{children:"Friday at 4:01 pm"}),e.jsx("span",{className:"relative top-[5px] ml-auto",children:e.jsx(b,{})})]}),e.jsx("p",{className:"text-zinc-600",children:"Your free of POS Pro ends in 3 days"}),e.jsx("p",{className:"w-[200px] md:w-[300px] mt-2",children:"Upgrade to your plan to retail features like exchange and staff management."})]})})]})]}),e.jsxs("div",{className:"flex gap-1 items-center px-2 py-1 rounded-md hover:bg-[#2b2b2b] cursor-pointer",onClick:()=>t(!n),ref:g,children:[e.jsxs("div",{className:"relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-[#26F22C] rounded-full",children:[" ",e.jsx("span",{className:"font-medium text-gray-600",children:"MS"})]}),e.jsx("p",{className:"hidden md:block text-sm",children:"My Stores"}),n&&e.jsxs("div",{className:"absolute top-14 right-0 px-1 py-3 bg-white text-black rounded-lg z-20 shadow-lg",children:[e.jsxs("div",{className:"flex items-center p-4 border-b border-gray-200",children:[e.jsx("div",{className:"bg-green-400 rounded-full w-8 h-8 flex justify-center items-center",children:"MS"}),e.jsx("div",{className:"ml-3",children:e.jsx("p",{className:"text-sm font-semibold",children:"My Store"})})]}),e.jsxs("div",{className:"p-2",children:[e.jsxs("div",{className:"flex items-center py-1 hover:bg-gray-100 cursor-pointer",children:[" ",e.jsx(C,{className:"w-5 h-5"}),e.jsx("p",{className:"ml-2 text-sm",children:"All stores"})]}),e.jsxs("div",{className:"flex items-center py-1 hover:bg-gray-100 cursor-pointer",children:[e.jsx(B,{className:"w-5 h-5"}),e.jsx("p",{className:"ml-2 text-sm",children:"Help Center"})]}),e.jsxs("div",{className:"flex items-center py-1 hover:bg-gray-100 cursor-pointer",children:[e.jsx(F,{className:"w-5 h-5"}),e.jsx("p",{className:"ml-2 text-sm",children:"Changelog"})]}),e.jsxs("div",{className:"flex items-center py-1 hover:bg-gray-100 cursor-pointer",children:[e.jsx(E,{className:"w-5 h-5"}),e.jsx("p",{className:"ml-2 text-sm",children:"Community forums"})]}),e.jsxs("div",{className:"flex items-center py-1 hover:bg-gray-100 cursor-pointer",children:[e.jsx(M,{className:"w-5 h-5"}),e.jsx("p",{className:"ml-2 text-sm",children:"Keyboard shortcuts"})]})]}),e.jsxs("div",{className:"border-t border-gray-200 p-1",children:[" ",e.jsx("p",{className:"text-sm p-2",children:"yoceca6285@ploncy.com"}),e.jsxs("div",{className:"flex items-center p-1 hover:bg-gray-100 cursor-pointer",children:[" ",e.jsx("p",{className:"ml-2 text-sm",children:"Manage account"})]}),e.jsx("div",{className:"flex items-center p-1 hover:bg-gray-100 cursor-pointer",children:e.jsx("p",{className:"ml-2 text-sm",children:"Log out"})})]})]})]})]})]})})},P=({onClick:s})=>e.jsxs("button",{type:"button",onClick:s,className:"w-full bg-[#303030] rounded-xl px-2 py-1 flex justify-between text-[#898989] border-x border-t border-[#474747]",children:[e.jsxs("div",{className:"flex justify-between gap-1 text-[#a1a1a1]",children:[e.jsx("div",{className:"relative top-1",children:e.jsx(O,{})}),e.jsx("div",{children:"Search"})]}),e.jsxs("div",{className:"flex items-center gap-1 font-medium",children:[e.jsx("div",{className:"bg-[#404040] rounded-md px-[4px] py-[1px] text-sm hidden md:block",children:"CTRL"}),e.jsx("div",{className:"bg-[#404040] rounded-md px-[4px] py-[1px] text-sm hidden md:block",children:"K"})," "]})]});export{K as default};