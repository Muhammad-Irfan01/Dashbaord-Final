import{r as a,j as e,L as o,x as n,z as N}from"./index-D5jx_pdz.js";import{S as g}from"./index-CxYL_upP.js";const v=()=>{const[t,x]=a.useState(!1),[r,p]=a.useState("Today"),m=()=>x(!t),c=i=>{p(i),x(!1)};return e.jsxs("section",{className:"overflow-hidden",children:[e.jsx("div",{children:e.jsxs("div",{className:"flex justify-evenly bg-white whitespace-nowrap p-4",children:[e.jsx("div",{className:"w-auto border-r border-gray-700 pr-4",children:e.jsxs("button",{onClick:m,className:"flex lg:text-base text-sm p-4 hover:bg-[#f1f1f1] hover:rounded-lg",children:[e.jsx(g,{className:"text-2xl mr-2"}),r]})}),e.jsx("div",{className:"flex items-center px-4",children:e.jsxs(o,{to:"/",className:"hover:bg-[#f1f1f1] hover:rounded-lg p-2 flex flex-col items-center",children:[e.jsx("p",{className:"lg:text-base text-sm font-semibold",children:"Total Products"}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("p",{className:"font-semibold",children:"0"}),e.jsx(n,{className:"text-xl ml-2"})]})]})}),e.jsx("hr",{className:"w-[1px] h-[70px] bg-gray-300"}),e.jsx("div",{className:"flex items-center px-4",children:e.jsxs(o,{to:"/",className:"hover:bg-[#f1f1f1] hover:rounded-lg p-2 flex flex-col items-center",children:[e.jsx("p",{className:"lg:text-base text-sm font-semibold",children:"Products Sold"}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("p",{className:"font-semibold",children:"0"}),e.jsx(n,{className:"text-xl ml-2"})]})]})}),e.jsx("hr",{className:"w-[1px] h-[70px] bg-gray-300"}),e.jsx("div",{className:"flex items-center px-4",children:e.jsxs(o,{to:"/",className:"hover:bg-[#f1f1f1] hover:rounded-lg p-2 flex flex-col items-center",children:[e.jsx("p",{className:"lg:text-base text-sm font-semibold",children:"Returns"}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("p",{className:"font-semibold",children:"0"}),e.jsx(n,{className:"text-xl ml-2"})]})]})}),e.jsx("hr",{className:"w-[1px] h-[70px] bg-gray-300"}),e.jsx("div",{className:"flex items-center px-4",children:e.jsxs(o,{to:"/",className:"hover:bg-[#f1f1f1] hover:rounded-lg p-2 flex flex-col items-center",children:[e.jsx("p",{className:"lg:text-base text-sm font-semibold",children:"Stock Levels"}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("p",{className:"font-semibold",children:"0"}),e.jsx(n,{className:"text-xl ml-2"})]})]})}),e.jsx("hr",{className:"w-[1px] h-[70px] bg-gray-300"}),e.jsx("div",{className:"flex items-center px-4",children:e.jsxs(o,{to:"/",className:"hover:bg-[#f1f1f1] hover:rounded-lg p-2 flex flex-col items-center",children:[e.jsx("p",{className:"lg:text-base text-sm font-semibold",children:"Pending Orders"}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("p",{className:"font-semibold",children:"0"}),e.jsx(n,{className:"text-xl ml-2"})]})]})}),e.jsx("hr",{className:"w-[1px] h-[70px] bg-gray-300"}),e.jsx("div",{className:"flex items-center px-4",children:e.jsxs(o,{to:"/",className:"hover:bg-[#f1f1f1] hover:rounded-lg p-2 flex flex-col items-center",children:[e.jsx("p",{className:"lg:text-base text-sm font-semibold",children:"Low Stock Alerts"}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("p",{className:"font-semibold",children:"0"}),e.jsx(n,{className:"text-xl ml-2"})]})]})})]})}),e.jsx("div",{className:"mt-3 inline-block",children:t&&e.jsxs("div",{className:"bg-white rounded-lg shadow-lg",children:[e.jsxs("div",{onClick:()=>c("Today"),className:"px-4 py-2 hover:bg-gray-200 cursor-pointer",children:[e.jsx("p",{className:"text-base font-semibold",children:"Today"}),e.jsx("p",{children:"Compared to yesterday up to current hour"})]}),e.jsxs("div",{onClick:()=>c("7 Days"),className:"px-4 py-2 hover:bg-gray-200 cursor-pointer",children:[e.jsx("p",{className:"text-base font-semibold",children:"Last 7 Days"}),e.jsx("p",{children:"Compared to the previous 7 days"})]}),e.jsxs("div",{onClick:()=>c("30 Days"),className:"px-4 py-2 hover:bg-gray-200 cursor-pointer",children:[e.jsx("p",{className:"text-base font-semibold",children:"Last 30 Days"}),e.jsx("p",{children:"Compared to the previous 30 days"})]})]})})]})},h=["id","title","description","vendor","product_type","tags","variants","images","price","compare_at_price","inventory_quantity","availability","weight","weight_unit","dimensions","height","width","depth","seo_title","seo_description","url_handle","template"],f=t=>t.charAt(0).toUpperCase()+t.slice(1),C=()=>{const[t,x]=a.useState([]),[r,p]=a.useState(h.map((l,s)=>s<12)),[m,c]=a.useState(!1),i=a.useRef(null);a.useEffect(()=>{(async()=>{try{const d=await(await fetch("http://127.0.0.1:8000/store/products/")).json();x(d)}catch(s){console.error("Error fetching products:",s)}})()},[]),a.useEffect(()=>{const l=s=>{i.current&&!i.current.contains(s.target)&&c(!1)};return document.addEventListener("mousedown",l),()=>document.removeEventListener("mousedown",l)},[]);const j=l=>{const s=[...r];if(s[l])s[l]=!1;else{if(s.filter(Boolean).length>=10){const u=s.findIndex(b=>b);s[u]=!1}s[l]=!0}p(s)};return e.jsxs("section",{className:"p-4",children:[e.jsx("div",{className:"mb-6",children:e.jsx("p",{className:"text-2xl font-bold text-[#303030]",children:"Products"})}),e.jsx("div",{className:"mb-8",children:e.jsx(v,{})}),e.jsxs("div",{className:"bg-white p-4 rounded shadow mt-4",children:[e.jsxs("div",{className:"flex justify-end mb-4",ref:i,children:[e.jsx("button",{className:"bg-blue-500 text-white px-4 py-2 rounded focus:outline-none",onClick:()=>c(!m),children:e.jsx("span",{children:e.jsx(N,{})})}),m&&e.jsx("div",{className:"absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-10 h-[300px] overflow-y-auto",children:h.map((l,s)=>e.jsx("div",{className:"px-4 py-2",children:e.jsxs("label",{className:"inline-flex items-center",children:[e.jsx("input",{type:"checkbox",className:"form-checkbox text-blue-600",checked:r[s],onChange:()=>j(s)}),e.jsx("span",{className:"ml-2",children:f(l.replace(/_/g," "))})]})},s))})]}),t.length===0?e.jsxs("div",{className:"bg-white py-3 rounded-xl text-center mb-6",children:[e.jsx("img",{src:"",className:"m-auto",alt:"Order Placeholder"}),e.jsxs("div",{className:"text-center",children:[e.jsx("p",{className:"text-base font-semibold",children:"Your Products Will Show Here"}),e.jsx("p",{className:"text-sm w-full md:w-1/3 m-auto py-4",children:"To add products and manage inventory, you need to select a plan. You’ll only be charged for your plan after your free trial ends."})]})]}):e.jsx("div",{className:"overflow-x-auto mt-4",children:e.jsxs("table",{className:"min-w-full table-auto border-collapse",children:[e.jsx("thead",{children:e.jsx("tr",{children:h.map((l,s)=>r[s]&&e.jsx("th",{className:"border px-6 py-4 bg-[#D9D9D9]",children:f(l.replace(/_/g," "))},s))})}),e.jsx("tbody",{children:t.map(l=>e.jsx("tr",{className:"hover:bg-gray-100 transition-colors",children:h.map((s,d)=>r[d]&&e.jsx("td",{className:"border px-6 py-4",children:l[s]!==null?l[s].toString():"N/A"},d))},l))})]})})]})]})};export{C as default};
