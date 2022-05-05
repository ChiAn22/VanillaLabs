function Pickup(){//(〃＾▽＾〃)//
    let ub=document.getElementById('_titleImg').style;
    let lab=document.getElementById('_labsImg').style;
    ub.transform='scale(0.8,0.8)';
    setTimeout(function (){
        ub.transform='scale(0.6,0.6) translateY(+20px)';
        lab.transform='scale(1.1,1.1) translateY(-180px) translateX(-6px)'
    },1000);
}

function PageInitialize(Object){
    var element=document.createElement('div');
    var element2=document.createElement('div');

    element2.id='content_rightInner_right';
    element.className='content_rightInner_Content';
    function moreType(){
        var Type=Object.type;
        for (let i=0;i<=Type.length;i++){
            let a=document.createElement('div');
            a.className='content_rightInner_Type';
            document.getElementById('content_rightInner_left_Type').appendChild(a);
        }

    }

    element.innerHTML='<div id="content_rightInner_left">\n' +
        '                    <div style="height: 26%;width: 100%">\n' +
        '                        <div class="content_rightInner_leftTitle" style="background: #000000">\n' +
        '                            <p class="content_rightInner_leftTitle_text">\'+Object.title+\'</p>\n' +
        '                        </div>\n' +
        '                        <div class="content_rightInner_leftTitle" style="background:#FF0000">\n' +
        '                            <p class="content_rightInner_leftTitle_text">\'+Object.titleIntroduce+\'</p>\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                    <div class="content_rightInner_ContentInner">\n' +
        '                        <div class="content_rightInner_ContentInner_Text">\n' +
        '                            <div class="content_rightInner_ContentInner_Text_Inner">\n' +
        '                                <p class="_Medium_Font" style="align-items: center;display: flex">商品种类</p>\n' +
        '                                <div id="content_rightInner_left_Type">\n' +
        '                                    <div class="content_rightInner_Type">芒果味</div>\n' +
        '                                    <div class="content_rightInner_Type">桑葚味</div>\n' +
        '                                </div>\n' +
        '                            </div>\n' +
        '                            <hr class="Intro_Content_Text_Hr">\n' +
        '                        </div>\n' +
        '                        <div class="content_rightInner_ContentInner_Text">\n' +
        '                            <div class="content_rightInner_ContentInner_Text_Inner">\n' +
        '                                <p class="_Medium_Font" style="align-items: center;display: flex">原产地</p>\n' +
        '                                <p class="_Medium_Font_Lite" style="margin-left: 10px;display: flex;align-items: center">aaa</p>\n' +
        '                            </div>\n' +
        '                            <hr class="Intro_Content_Text_Hr">\n' +
        '                        </div>\n' +
        '                        <div class="content_rightInner_ContentInner_Text" style="margin-bottom: 0">\n' +
        '                            <div class="content_rightInner_ContentInner_Text_Inner">\n' +
        '                                <p class="_Medium_Font" style="align-items: center;display: flex">详细</p>\n' +
        '                            </div>\n' +
        '                        </div>\n' +
        '                        <div class="content_rightInner_ContentInner_Information" style="margin-top: 2%">\n' +
        '                            <div class="content_rightInner_ContentInner_Information_LeftContent">\n' +
        '                                <div style="height: 20%;width: 80%;" class="_Medium_Font_NoSize">\n' +
        '                                    <p>内容</p>\n' +
        '                                </div>\n' +
        '                            </div>\n' +
        '                            <div class="content_rightInner_ContentInner_Information_RightContent">\n' +
        '                                <div class="content_rightInner_ContentInner_Information_RightContent_Inner1">\n' +
        '                                    <img src="./../TitleImg.png" alt="" id="_titleImg">\n' +
        '                                </div>\n' +
        '                                <div class="content_rightInner_ContentInner_Information_RightContent_Inner2">\n' +
        '                                    <img src="./../labs.png" alt="" id="_labsImg">\n' +
        '                                </div>\n' +
        '                                <div class="content_rightInner_ContentInner_Information_RightContent_Inner3" onclick="Pickup()">\n' +
        '                                    <div class="pick_up">\n' +
        '                                        <p class="_Medium_Font_NoSize" id="pick_up_text">加入购物车</p>\n' +
        '                                    </div>\n' +
        '                                </div>\n' +
        '                            </div>\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                </div>';

    document.getElementById('content_rightInner').appendChild(element);
    document.getElementById('content_rightInner').appendChild(element2);
}

PageInitialize(registList[0]);//(〃＾▽＾〃)


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



