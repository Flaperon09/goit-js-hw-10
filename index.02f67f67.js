const e=new URLSearchParams({format:"json",has_breeds:"true",order:"RAND",limit:50}),s={method:"GET",headers:new Headers({"Content-Type":"application/json","x-api-key":"live_xLh0xd4Q45caNiYkcZ60mZOWOfvOy7CFgjitW2LhWxbyMwFC9iIxdrvdfjIvRwNt"}),redirect:"follow"},t=document.querySelector(".breed-select"),n=document.querySelector(".cat-info"),a=document.querySelector(".loader"),r=document.querySelector(".error");t.addEventListener("change",(function(e){const t=e.currentTarget.value;a.classList.remove("js-hidden"),r.classList.add("js-hidden"),n.innerHTML="",(i=t,fetch(`https://api.thecatapi.com/v1/images/${i}`,s).then((e=>{if(!e.ok)throw new Error(e.statusText);return e.json()}))).then((e=>{a.classList.add("js-hidden"),n.innerHTML=function(e){const{url:s,breeds:[{name:t,description:n,temperament:a}]}=e;return`<ul class="js-data">\n        <li><img src="${s}" width="400px"></li>\n        <li>\n            <h1 class="js-h1">${t}</h1>\n            <p class="js-text">${n}</p>\n            <p class="js-text"><span class="js-temperament">Temperament: </span>${a}</p>\n       </li>\n    </ul>`}(e)})).catch((e=>{a.classList.add("js-hidden"),r.classList.remove("js-hidden")}));var i})),a.classList.remove("js-hidden"),fetch(`https://api.thecatapi.com/v1/images/search?${e}`,s).then((e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})).then((e=>{a.classList.add("js-hidden"),t.classList.remove("js-hidden"),t.innerHTML=e.map((({id:e,breeds:[{name:s}]})=>`<option class="js-list" value="${e}">${s}</option>`)).join("")})).catch((e=>{a.classList.add("js-hidden"),r.classList.remove("js-hidden")}));
//# sourceMappingURL=index.02f67f67.js.map