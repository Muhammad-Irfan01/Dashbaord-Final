import{G as I,r as t,j as e,w as M,L as r,x as c,y as T,z as F}from"./index-D5jx_pdz.js";import{S as B}from"./index-CxYL_upP.js";const P="/assets/order_main-UJFSCRXo.png",U="/assets/arrow_down-8aXtd44X.png";function V(m){return I({tag:"svg",attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M7.5 11C4.80285 11 2.52952 9.62184 1.09622 7.50001C2.52952 5.37816 4.80285 4 7.5 4C10.1971 4 12.4705 5.37816 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11ZM7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C1.65639 10.2936 4.30786 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C13.3436 4.70638 10.6921 3 7.5 3ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z",fill:"currentColor"},child:[]}]})(m)}const x=["id","fulfillment_status","payment_status","order_number","email","billing_address","shipping_address","tracking_number","total_price","subtotal_price","shipping_price","tax_price","discount_price","created_at","updated_at","note","tags","customer","shipping_method"],z=()=>{const[m,y]=t.useState([]),[n,w]=t.useState(x.map((l,s)=>s<10)),[j,u]=t.useState(!1),h=t.useRef(null);t.useEffect(()=>{(async()=>{try{const s=await fetch("http://127.0.0.1:8000/store/orders/");if(!s.ok)throw new Error("Network response was not ok");const a=await s.json();y(a)}catch(s){console.error("Error fetching orders:",s)}})()},[]),t.useEffect(()=>{const l=s=>{h.current&&!h.current.contains(s.target)&&u(!1)};return document.addEventListener("mousedown",l),()=>document.removeEventListener("mousedown",l)},[]);const C=l=>{const s=[...n];if(s[l])s[l]=!1;else{if(s.filter(Boolean).length>=10){const R=s.findIndex(L=>L);s[R]=!1}s[l]=!0}w(s)},[b,g]=t.useState(!1),[k,O]=t.useState("Today"),_=()=>g(!b),p=l=>{O(l),g(!1)},[o,d]=t.useState(!1),[i,N]=t.useState(!1),[S,D]=t.useState([]),f=t.useRef(null),E=()=>{d(!o)},v=()=>{N(!i),d(!1)},A=()=>{!o&&!i&&d(!o)};return t.useEffect(()=>{const l=s=>{f.current&&!f.current.contains(s.target)&&(d(!1),N(!1))};return document.addEventListener("mousedown",l),()=>{document.removeEventListener("mousedown",l)}},[]),t.useEffect(()=>{(async()=>{try{const a=await(await fetch("http://127.0.0.1:8000/store/orders/")).json();D(a)}catch(s){console.error("Error fetching orders:",s)}})()},[]),e.jsx(e.Fragment,{children:e.jsxs("section",{className:"p-10",children:[e.jsxs("div",{className:"w-[100%] flex justify-around p-5",children:[e.jsx("div",{className:"mr-auto",children:e.jsx("p",{className:"text-2xl font-bold text-[#303030]",children:"Orders"})}),e.jsx("div",{className:"md:w-[40%]",children:e.jsxs("div",{className:"flex flex-col justify-end items-end space-y-3",children:[e.jsxs("button",{onClick:A,className:"flex bg-[#e3e3e3] hover:bg-[#d4d4d4] text-xs font-bold rounded-lg px-2 py-1 text-[#303030]",children:["More Action ",e.jsx("img",{src:U,alt:"",className:"h-3 w-3 m-1"})]}),o&&e.jsx("ul",{className:"",ref:f,children:e.jsx("li",{children:e.jsxs("div",{className:"flex text-sm bg-white rounded-lg px-auto py-2 px-2 text-[#303030]",onClick:()=>{v(),E()},children:[e.jsx(V,{className:"mr-2 text-xl"}),"Show Analytic Bar"]})})}),i&&e.jsx("ul",{className:"",children:e.jsx("li",{children:e.jsxs("a",{className:"flex text-sm bg-white rounded-lg px-2 py-2 text-[#303030]",href:"",onClick:l=>{l.preventDefault(),v()},children:[e.jsx(M,{className:"mx-3 text-xl"}),"Close Analytic Bar"]})})})]})})]}),e.jsx("div",{children:i&&e.jsx("div",{children:e.jsxs("section",{className:"overflow-hidden ",children:[e.jsx("div",{children:e.jsxs("div",{className:"flex justify-evenly bg-white whitespace-nowrap",children:[e.jsx("div",{className:" w-auto p-2 border-r border-gray-700",children:e.jsxs("button",{onClick:_,className:"flex lg:text-base text-sm p-4 hover:bg-[#f1f1f1] hover:rounded-lg",children:[" ",e.jsx(B,{className:"text-2xl mr-2"}),k]})}),e.jsx("div",{className:"flex p-3",children:e.jsxs(r,{to:"",className:"hover:bg-[#f1f1f1] hover:rounded-lg p-2",children:[e.jsx("p",{className:"lg:text-base text-sm font-semibold",children:"Total Orders"}),e.jsxs("div",{children:[e.jsxs("span",{className:"flex ",children:[e.jsx("p",{className:"font-semibold",children:"0"}),e.jsx(c,{className:"text-xl ml-2 mt-1"})]}),e.jsx("hr",{className:"w-[40px] h-[2px] bg-sky-300 ml-auto -mt-3"})]})]})}),e.jsx("hr",{className:"w-[1px] h-[70px] bg-gray-300 ml-4"}),e.jsx("div",{className:"hidden lg:block",children:e.jsxs("div",{className:" lg:flex p-3",children:[e.jsxs(r,{to:"",className:"hover:bg-[#f1f1f1] hover:rounded-lg p-2",children:[e.jsx("p",{className:"lg:text-base text-sm font-semibold",children:"Ordered items over time"}),e.jsxs("div",{children:[e.jsxs("span",{className:"flex ",children:[e.jsx("p",{className:"font-semibold",children:"0"}),e.jsx(c,{className:"text-xl ml-2 mt-1"})]}),e.jsx("hr",{className:"w-[40px] h-[2px] bg-sky-300 ml-auto -mt-3"})]})]}),e.jsx("hr",{className:"w-[1px] h-[70px] bg-gray-300 mx-4"})]})}),e.jsx("div",{className:"hidden xl:block",children:e.jsxs("div",{className:" xl:flex p-3 ",children:[e.jsxs(r,{to:"",className:"hover:bg-[#f1f1f1] hover:rounded-lg p-2",children:[e.jsx("p",{className:"lg:text-base text-sm font-semibold",children:"Returns"}),e.jsx("div",{children:e.jsxs("span",{className:"flex ",children:[e.jsx("p",{className:"font-semibold",children:"0"}),e.jsx(c,{className:"text-xl ml-2 mt-1"})]})})]}),e.jsx("hr",{className:"w-[1px] h-[70px] bg-gray-300 mx-4"})]})}),e.jsxs("div",{className:"flex p-3",children:[e.jsxs(r,{to:"",className:"hover:bg-[#f1f1f1] hover:rounded-lg p-2",children:[e.jsx("p",{className:"lg:text-base text-sm font-semibold",children:"Fulfilled orders over time"}),e.jsxs("div",{children:[e.jsxs("span",{className:"flex ",children:[e.jsx("p",{className:"font-semibold",children:"0"}),e.jsx(c,{className:"text-xl ml-2 mt-1"})]}),e.jsx("hr",{className:"w-[40px] h-[2px] bg-sky-300 ml-auto -mt-3"})]})]}),e.jsx("hr",{className:"w-[1px] h-[70px] bg-gray-300 mx-4"})]}),e.jsx("div",{className:"hidden md:block",children:e.jsxs("div",{className:" md:flex p-3",children:[e.jsxs(r,{to:"",className:"hover:bg-[#f1f1f1] hover:rounded-lg p-2",children:[e.jsx("p",{className:"lg:text-base text-sm font-semibold",children:"Delivered orders over time"}),e.jsxs("div",{children:[e.jsxs("span",{className:"flex ",children:[e.jsx("p",{className:"font-semibold",children:"0"}),e.jsx(c,{className:"text-xl ml-2 mt-1"})]}),e.jsx("hr",{className:"w-[40px] h-[2px] bg-sky-300 ml-auto -mt-3"})]})]}),e.jsx("hr",{className:"w-[1px] h-[70px] bg-gray-300 mx-4"})]})}),e.jsx("div",{className:"hidden lg:block",children:e.jsxs("div",{className:" lg:flex p-3",children:[e.jsxs(r,{to:"",className:"hover:bg-[#f1f1f1] hover:rounded-lg p-2",children:[e.jsx("p",{className:"lg:text-base text-sm font-semibold",children:"Time to fulfill"}),e.jsxs("div",{children:[e.jsxs("span",{className:"flex ",children:[e.jsx("p",{className:"font-semibold",children:"0"}),e.jsx(c,{className:"text-xl ml-2 mt-1"})]}),e.jsx("hr",{className:"w-[40px] h-[2px] bg-sky-300 ml-auto -mt-3"})]})]}),e.jsx("hr",{className:"w-[1px] h-[70px] bg-gray-300 mx-4"})]})})]})}),e.jsx("div",{className:"mt-3 inline-block",children:b&&e.jsxs("div",{className:" bg-white rounded-lg",children:[e.jsxs("div",{onClick:()=>p("Today"),className:"px-4 py-2 hover:bg-gray-200 cursor-pointer",children:[e.jsx("p",{className:"text-base font-semibold",children:"Today"}),e.jsx("p",{children:"Compared to yesterday up to current hour"})]}),e.jsxs("div",{onClick:()=>p("7 Days"),className:"px-4 py-2 hover:bg-gray-200 cursor-pointer",children:[e.jsx("p",{className:"text-base font-semibold",children:"Last 7 Days"}),e.jsx("p",{children:"Compared to the previous 7 days"})]}),e.jsxs("div",{onClick:()=>p("30 Days"),className:"px-4 py-2 hover:bg-gray-200 cursor-pointer",children:[e.jsx("p",{className:"text-base font-semibold",children:"Last 30 Days"}),e.jsx("p",{children:"Compared to the previous 30 days"})]})]})})]})})}),e.jsx("div",{className:"bg-white p-3 rounded-xl",children:S.length===0?e.jsxs("div",{className:"pb-16 pt-5",children:[e.jsx("img",{src:P,className:"m-auto",alt:"Order Placeholder"}),e.jsxs("div",{className:"text-center",children:[e.jsx("p",{className:"text-base font-semibold",children:"Your Orders Will Show Here"}),e.jsx("p",{className:"text-sm w-full md:w-1/3 m-auto py-4",children:"To get orders and accept payments from customers, you need to select a plan. You’ll only be charged for your plan after your free trial ends."})]}),e.jsxs("div",{className:"flex flex-col md:flex-row justify-center md:space-x-4 md:space-y-0 space-y-2",children:[e.jsx(r,{to:"/admin/order/newOrder",children:e.jsxs("button",{className:"bg-gradient-to-b bg-black/75 hover:bg-black text-white rounded-lg px-3 py-1.5 text-sm flex items-center m-auto ",children:[e.jsx(T,{className:"mr-1 text-lg"})," Add Order"]})}),e.jsx(r,{to:"/admin/prooduct/allProducts",children:e.jsx("button",{className:"rounded-lg border-2 m-auto md:m-0 bg-white hover:bg-stone-200 px-3 py-1 text-sm flex items-center",children:"Show All Products"})})]})]}):e.jsxs("div",{className:"p-4",children:[e.jsx("div",{className:"flex justify-end",children:e.jsxs("div",{className:"relative inline-block",ref:h,children:[e.jsx("button",{className:"bg-blue-500 text-white px-4 py-2 rounded focus:outline-none",onClick:()=>u(!j),children:e.jsx("span",{children:e.jsx(F,{})})}),j&&e.jsx("div",{className:"absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-10 h-[300px] overflow-y-auto",children:x.map((l,s)=>e.jsx("div",{className:"px-4 py-2",children:e.jsxs("label",{className:"inline-flex items-center",children:[e.jsx("input",{type:"checkbox",className:"form-checkbox text-blue-600",checked:n[s],onChange:()=>C(s)}),e.jsx("span",{className:"ml-2",children:l.replace(/_/g," ").replace(/\b\w/g,a=>a.toUpperCase())})]})},s))})]})}),e.jsx("div",{className:"overflow-x-auto mt-4",children:e.jsxs("table",{className:"min-w-full table-auto border-collapse",children:[e.jsx("thead",{children:e.jsx("tr",{children:x.map((l,s)=>n[s]&&e.jsx("th",{className:"border px-4 py-2 bg-[#D9D9D9]",children:l.replace(/_/g," ").replace(/\b\w/g,a=>a.toUpperCase())},s))})}),e.jsx("tbody",{children:m.map(l=>e.jsx("tr",{children:x.map((s,a)=>n[a]&&e.jsx("td",{className:"border px-4 py-2",children:l[s]!==null?l[s].toString():""},a))},l))})]})})]})})]})})};export{z as default};
