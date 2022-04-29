
var aaa=document.documentElement;
var bbb=document.getElementById('a');
aaa.addEventListener("mousemove",(e)=>{
    var {clientX,clientY}=e;
    aaa.style.setProperty('--x',clientX-40+'px');
    aaa.style.setProperty('--y',clientY-40+'px');
});

if(aaa.onmousemove){
    alert('aa');

}