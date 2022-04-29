
var aaa=document.documentElement;
aaa.addEventListener("mousemove",(e)=>{
    var {clientX,clientY}=e;
    aaa.style.setProperty('--x',clientX-40+'px');
    aaa.style.setProperty('--y',clientY-40+'px');
});