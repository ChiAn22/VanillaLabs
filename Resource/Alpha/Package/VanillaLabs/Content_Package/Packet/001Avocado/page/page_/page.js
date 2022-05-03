
function TouchedCircle(){
    var Circle_1=document.getElementById('a');
    Circle_1.style.setProperty('visibility','visible');
    Circle_1.style.setProperty('opacity','1');
}
function TouchedCircleHidden(){
    var Circle_1=document.getElementById('a');
    Circle_1.style.setProperty('visibility','hidden');
    Circle_1.style.setProperty('opacity','0');
}

var aaa=document.documentElement;
aaa.addEventListener("mousemove",(e)=>{
    var {clientX,clientY}=e;
    aaa.style.setProperty('--x',clientX-100+'px');
    aaa.style.setProperty('--y',clientY-100+'px');
});



