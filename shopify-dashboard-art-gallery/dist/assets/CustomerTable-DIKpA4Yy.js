import{r as a,j as e,L as o,x as n,z as u}from"./index-D5jx_pdz.js";import{S as N}from"./index-CxYL_upP.js";const g=()=>{const[d,x]=a.useState(!1),[r,p]=a.useState("Today"),m=()=>x(!d),c=i=>{p(i),x(!1)};return e.jsxs("section",{className:"overflow-hidden",children:[e.jsx("div",{children:e.jsxs("div",{className:"flex justify-evenly bg-white whitespace-nowrap p-4",children:[e.jsx("div",{className:"w-auto border-r border-gray-700 pr-4",children:e.jsxs("button",{onClick:m,className:"flex lg:text-base text-sm p-4 hover:bg-[#f1f1f1] hover:rounded-lg",children:[e.jsx(N,{className:"text-2xl mr-2"}),r]})}),e.jsx("div",{className:"flex items-center px-4",children:e.jsxs(o,{to:"/",className:"hover:bg-[#f1f1f1] hover:rounded-lg p-2 flex flex-col items-center",children:[e.jsx("p",{className:"lg:text-base text-sm font-semibold",children:"Total Customers"}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("p",{className:"font-semibold",children:"0"}),e.jsx(n,{className:"text-xl ml-2"})]})]})}),e.jsx("hr",{className:"w-[1px] h-[70px] bg-gray-300"}),e.jsx("div",{className:"flex items-center px-4",children:e.jsxs(o,{to:"/",className:"hover:bg-[#f1f1f1] hover:rounded-lg p-2 flex flex-col items-center",children:[e.jsx("p",{className:"lg:text-base text-sm font-semibold",children:"New Customers"}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("p",{className:"font-semibold",children:"0"}),e.jsx(n,{className:"text-xl ml-2"})]})]})}),e.jsx("hr",{className:"w-[1px] h-[70px] bg-gray-300"}),e.jsx("div",{className:"flex items-center px-4",children:e.jsxs(o,{to:"/",className:"hover:bg-[#f1f1f1] hover:rounded-lg p-2 flex flex-col items-center",children:[e.jsx("p",{className:"lg:text-base text-sm font-semibold",children:"Active Customers"}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("p",{className:"font-semibold",children:"0"}),e.jsx(n,{className:"text-xl ml-2"})]})]})}),e.jsx("hr",{className:"w-[1px] h-[70px] bg-gray-300"}),e.jsx("div",{className:"flex items-center px-4",children:e.jsxs(o,{to:"/",className:"hover:bg-[#f1f1f1] hover:rounded-lg p-2 flex flex-col items-center",children:[e.jsx("p",{className:"lg:text-base text-sm font-semibold",children:"Retention Rate"}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("p",{className:"font-semibold",children:"0%"}),e.jsx(n,{className:"text-xl ml-2"})]})]})}),e.jsx("hr",{className:"w-[1px] h-[70px] bg-gray-300"}),e.jsx("div",{className:"flex items-center px-4",children:e.jsxs(o,{to:"/",className:"hover:bg-[#f1f1f1] hover:rounded-lg p-2 flex flex-col items-center",children:[e.jsx("p",{className:"lg:text-base text-sm font-semibold",children:"Churn Rate"}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("p",{className:"font-semibold",children:"0%"}),e.jsx(n,{className:"text-xl ml-2"})]})]})}),e.jsx("hr",{className:"w-[1px] h-[70px] bg-gray-300"}),e.jsx("div",{className:"flex items-center px-4",children:e.jsxs(o,{to:"/",className:"hover:bg-[#f1f1f1] hover:rounded-lg p-2 flex flex-col items-center",children:[e.jsx("p",{className:"lg:text-base text-sm font-semibold",children:"Feedback Score"}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("p",{className:"font-semibold",children:"0"}),e.jsx(n,{className:"text-xl ml-2"})]})]})})]})}),e.jsx("div",{className:"mt-3 inline-block",children:d&&e.jsxs("div",{className:"bg-white rounded-lg shadow-lg",children:[e.jsxs("div",{onClick:()=>c("Today"),className:"px-4 py-2 hover:bg-gray-200 cursor-pointer",children:[e.jsx("p",{className:"text-base font-semibold",children:"Today"}),e.jsx("p",{children:"Compared to yesterday up to current hour"})]}),e.jsxs("div",{onClick:()=>c("7 Days"),className:"px-4 py-2 hover:bg-gray-200 cursor-pointer",children:[e.jsx("p",{className:"text-base font-semibold",children:"Last 7 Days"}),e.jsx("p",{children:"Compared to the previous 7 days"})]}),e.jsxs("div",{onClick:()=>c("30 Days"),className:"px-4 py-2 hover:bg-gray-200 cursor-pointer",children:[e.jsx("p",{className:"text-base font-semibold",children:"Last 30 Days"}),e.jsx("p",{children:"Compared to the previous 30 days"})]})]})})]})},h=["id","first_name","last_name","email","phone","company","address1","address2","city","province","country","zip_code","accepts_marketing","tags","note","loyalty_points","groups"],w=()=>{const[d,x]=a.useState([]),[r,p]=a.useState(h.map((l,s)=>s<10)),[m,c]=a.useState(!1),i=a.useRef(null);a.useEffect(()=>{(async()=>{try{const s=await fetch("http://127.0.0.1:8000/store/customers/");if(!s.ok)throw new Error("Network response was not ok");const t=await s.json();x(t)}catch(s){console.error("Error fetching customers:",s)}})()},[]),a.useEffect(()=>{const l=s=>{i.current&&!i.current.contains(s.target)&&c(!1)};return document.addEventListener("mousedown",l),()=>document.removeEventListener("mousedown",l)},[]);const f=l=>{const s=[...r];if(s[l])s[l]=!1;else{if(s.filter(Boolean).length>=10){const j=s.findIndex(b=>b);s[j]=!1}s[l]=!0}p(s)};return e.jsxs("div",{className:"p-4 space-y-6",children:[e.jsx("h1",{className:"text-2xl font-bold",children:"Customers"}),e.jsx(g,{}),e.jsxs("div",{className:"bg-white p-4 rounded shadow-md",children:[e.jsx("div",{className:"flex justify-end mb-4",children:e.jsxs("div",{className:"relative inline-block",ref:i,children:[e.jsx("button",{className:"bg-blue-500 text-white px-4 py-2 rounded focus:outline-none",onClick:()=>c(!m),children:e.jsx(u,{})}),m&&e.jsx("div",{className:"absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-10 h-[300px] overflow-y-auto",children:h.map((l,s)=>e.jsx("div",{className:"px-4 py-2",children:e.jsxs("label",{className:"inline-flex items-center",children:[e.jsx("input",{type:"checkbox",className:"form-checkbox text-blue-600",checked:r[s],onChange:()=>f(s)}),e.jsx("span",{className:"ml-2",children:l.replace(/_/g," ").replace(/\b\w/g,t=>t.toUpperCase())})]})},s))})]})}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"min-w-full table-auto border-collapse",children:[e.jsx("thead",{children:e.jsx("tr",{children:h.map((l,s)=>r[s]&&e.jsx("th",{className:"border px-6 py-4 bg-[#D9D9D9] text-left",children:l.replace(/_/g," ").replace(/\b\w/g,t=>t.toUpperCase())},s))})}),e.jsx("tbody",{children:d.map(l=>e.jsx("tr",{children:h.map((s,t)=>r[t]&&e.jsx("td",{className:"border px-6 py-4",children:l[s]!==null?l[s].toString():"N/A"},t))},l))})]})})]})]})};export{w as default};
