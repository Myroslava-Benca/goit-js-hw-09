const e={delay:document.querySelector(".delay"),step:document.querySelector(".step"),amount:document.querySelector(".amount"),btn:document.querySelector(".btn")};function t(e,t){const o=Math.random()>.3;return new Promise(((n,l)=>{setTimeout((()=>{o?n({position:e,delay:t}):l({position:e,delay:t})}),t)}))}e.btn.addEventListener("click",(function(o){o.preventDefault();const n=Number(e.delay.value),l=Number(e.step.value);for(let o=0;o<e.amount.value;o++)t(1+o,n+o*l).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)}))}));
//# sourceMappingURL=03-promises.08808295.js.map