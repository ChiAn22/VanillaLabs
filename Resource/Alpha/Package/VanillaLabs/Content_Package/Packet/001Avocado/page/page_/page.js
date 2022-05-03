function PageInitialize(){
    var Object=document.createElement('div');

    Object.className='content_rightInner_Content';
    Object.innerHTML='<div id="content_rightInner_left">\n' +
        '                <div class="content_rightInner_leftTitle" style="background: #000000">\n' +
        '                    <p class="content_rightInner_leftTitle_text">Content name</p>\n' +
        '                </div>\n' +
        '                <div class="content_rightInner_leftTitle" style="background: #910d0d">\n' +
        '                    <p class="content_rightInner_leftTitle_text">70%折扣中</p>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '            <div id="content_rightInner_right"></div>';



    var ContentForPage=document.getElementById('content_rightInner');
    ContentForPage.appendChild(Object);
}
PageInitialize();


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



