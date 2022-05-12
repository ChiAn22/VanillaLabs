let element2 = document.createElement('div');
element2.id='Intro_Content_Title_Inner';

element2.innerHTML='<div id="_BehindBackgroundImg" style="position:fixed;z-index: -2;width: 100%;height: 30%;transform: translateY(0px);">\n' +
    '                <img alt="" src="/VanillaLabs/Content/index_css/Img/Img1.jpg" id="_BackgroundImg" style="transition: 0.3s;width: 100%;height: auto;">\n' +
    '            </div>\n'+
    '<div style="height: 100%;width: 100%;display: flex;flex-direction: column;justify-content: center;align-items: center">\n' +
    '                    <p style="color: #FFFFFF;font-size: 38px;font-weight: bold;">香草实验室</p>\n' +
    '                    <p style="color: rgba(255,255,255,0.6);font-size: 18px;font-weight: bold;">向下滑动</p>\n' +
    '                </div>';
document.getElementById('Intro_Content_Title').appendChild(element2);

window.onscroll=function (){
    let moveSpeed=1.6;
    document.getElementById('_BehindBackgroundImg').style.transform ='translateY(-'+window.scrollY*moveSpeed+'px)';
    if(window.scrollY>=50){
        document.getElementById('_BackgroundImg').style.filter='blur(20px)';
    }else {
        document.getElementById('_BackgroundImg').style.filter='blur(0)';
    }
}