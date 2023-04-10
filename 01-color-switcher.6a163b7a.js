const t=document.querySelector("body"),e=document.querySelector(".btn-start"),n=document.querySelector(".btn-stop");let r=null;e.addEventListener("click",(function(){r=setInterval((()=>{t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),n.addEventListener("click",(()=>{clearInterval(r)}));
//# sourceMappingURL=01-color-switcher.6a163b7a.js.map
