let list=0;
let H=registList[list];
let TitleImg=H.type[0].imgUrl;
let a=registList[0].type[0];

window.ondblclick=function (){
    alert(JSON.stringify(a));
    if(confirm('测试')===true){
        window.localStorage.setItem('cart','');
        alert('clear\n');
    }else {
        alert(window.localStorage.getItem('cart'));
        alert(window.innerHeight+','+window.innerWidth)
    }

}
let OnPickUp=false;
function Pickup(type){//(〃＾▽＾〃)//
    if("string" !== typeof window.localStorage.getItem('User_Statement')){
        window.location.href='/VanillaLabs/Content/user/login.html';
    }else {
        if(window.localStorage.getItem('User_Statement').split('#,')[1]==='1'){
            if(OnPickUp===false){
                setTimeout(function (){OnPickUp=false},5100);
                OnPickUp=true;
                window.localStorage.setItem('cart',window.localStorage.getItem('cart')+JSON.stringify(type)+'#,');
                let ub=document.getElementById('_titleImg').style;
                let lab=document.getElementById('_labsImg').style;
                ub.transitionDuration='1s';
                lab.transitionDuration='1s';
                ub.transitionTimingFunction='ease-in';
                lab.transitionTimingFunction='ease-in';
                ub.transform='scale(0.8,0.8)';
                setTimeout(function (){
                    ub.transitionTimingFunction='ease-out';
                    lab.transitionTimingFunction='ease-out';
                    ub.transform='scale(0.6,0.6) translateY(+10px)';
                    lab.transform='scale(1,1) translateY(-220px) translateX(-6px)'
                },1000);
                setTimeout(function (){
                    ub.transitionDuration='2s';
                    lab.transitionDuration='2s';
                    ub.transitionTimingFunction='ease-in';
                    lab.transitionTimingFunction='ease-in';
                    ub.transform='scale(0.6,0.6) translateY(+700px)';
                    lab.transform='scale(1,1) translateY(200px) translateX(-6px)'
                },2500);
                setTimeout(function (){
                    ub.transitionDuration='0.1s';
                    lab.transitionDuration='0.1s';
                    ub.setProperty('visibility','hidden');
                    ub.setProperty('opacity','0');
                },4500);
                setTimeout(function (){
                    ub.transitionDuration='0s';
                    lab.transitionDuration='0s';
                    ub.transform='scale(0.8,0.8) translateY(0px)';
                    lab.transform='scale(1,1) translateY(200px) translateX(-6px)'
                },4800);
                setTimeout(function (){
                    ub.transitionDuration='0.5s';
                    lab.transitionDuration='0.5s';
                    ub.transitionTimingFunction='ease-out';
                    lab.transitionTimingFunction='ease-out';
                    ub.transform='scale(1,1)';
                    ub.setProperty('visibility','visible');
                    ub.setProperty('opacity','1');
                },5000);
            }else {
                console.log('正在包装中');
            }
        }else {
            window.location.href='/VanillaLabs/Content/user/login.html';
        }
    }





}

function typeClicked(type){
    document.getElementById('_titleImg').src=type.imgUrl;
    a=type;
}

function PageInitialize(Object){
    var element=document.createElement('div');
    var element2=document.createElement('div');
    var element3='';
    var f='此商品无其他类型';

    element2.id='content_rightInner_right';
    element.className='content_rightInner_Content';

    function moreType(Object){
        var Type=Object.type;
        for (let i=0;i<=Type.length-1;i++){
            let a='<div class="content_rightInner_Type touch2" style="cursor: pointer" onclick="typeClicked(registList['+list+'].type['+i+'])">'+Object.type[i].name+'</div>'+'\n';
            element3=element3+a;
        }
    }


    if(Object.moreType===true){
        moreType(Object);
        f='商品种类';
    }

    element.innerHTML='<div id="content_rightInner_left">\n' +
        '                    <div style="height: 24%;width: 100%">\n' +
        '                        <div class="content_rightInner_leftTitle" style="background: #ffffff">\n' +
        '                            <p class="content_rightInner_leftTitle_text" style="color: #212121">'+Object.title+'</p>\n' +
        '                        </div>\n' +
        '                        <div class="content_rightInner_leftTitle" style="background:linear-gradient(45deg, #1b5743, #388c73, #62a43b)">\n' +
        '                            <p class="content_rightInner_leftTitle_text" style="font-size: 26px">'+Object.titleIntroduce+'</p>\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                    <div class="content_rightInner_ContentInner">\n' +
        '                        <div class="content_rightInner_ContentInner_Text">\n' +
        '                            <div class="content_rightInner_ContentInner_Text_Inner">\n' +
        '                                <p class="_Medium_Font" style="align-items: center;display: flex">'+f+'</p>\n' +
        '                                <div id="content_rightInner_left_Type">\n' + element3 +
        '                                </div>\n' +
        '                            </div>\n' +
        '                            <hr class="Intro_Content_Text_Hr">\n' +
        '                        </div>\n' +
        '                        <div class="content_rightInner_ContentInner_Text">\n' +
        '                            <div class="content_rightInner_ContentInner_Text_Inner">\n' +
        '                                <p class="_Medium_Font" style="align-items: center;display: flex">原产地</p>\n' +
        '                                <p class="_Medium_Font_Lite" style="margin-left: 10px;display: flex;align-items: center">'+Object.productionPlaceOfOriginLite+'</p>\n' +
        '                            </div>\n' +
        '                            <hr class="Intro_Content_Text_Hr">\n' +
        '                        </div>\n' +
        '                        <div class="content_rightInner_ContentInner_Text" style="margin-bottom: 0">\n' +
        '                            <div class="content_rightInner_ContentInner_Text_Inner">\n' +
        '                                <p class="_Medium_Font" style="align-items: center;display: flex">单价：'+Object.price+'</p>\n' +
        '                            </div>\n' +
        '                        </div>\n' +
        '                        <div class="content_rightInner_ContentInner_Information" style="margin-top: 2%">\n' +
        '                            <div class="content_rightInner_ContentInner_Information_LeftContent">\n' +
        '                                <div style="height: 100%;width: 100%;line-height: 16px;overflow: hidden" class="_Medium_Font_NoSize">\n' +
        '                                    <p style="font-size: 14px;font-weight: bold;color: white;margin-bottom: 6px">详细</p>\n' +
        '                                    <p style="font-size: 14px;font-weight: bold;color: white;margin-bottom: 6px">'+Object.contentIntroduce+'</p>\n' +
        '                                    <p style="font-size: 14px;font-weight: bold;color: white;margin-bottom: 6px">生产商：'+Object.company+'</p>\n' +
        '                                    <p style="font-size: 14px;font-weight: bold;color: white;margin-bottom: 6px">产地信息：'+Object.productionPlaceOfOrigin+'</p>\n' +
        '                                    <p style="font-size: 14px;font-weight: bold;color: white;margin-top: 20px;margin-bottom: 20px">即刻下单，发货源为：'+Object.date+' (生产日期)</p>\n' +
        '                                   <div class="content_rightInner_ContentInner_Information_QRcode">' +
        '                                        <img src="'+Object.contentQRCodeUrl+'" alt="" id="_QRcode">' +
        '                                   </div>'+
        '                                    <p style="font-size: 8px;font-weight: bold;color: white;margin-bottom: 4px">'+Object.contentText[0]+'</p>\n' +
        '                                    <p style="font-size: 10px;font-weight: bold;color: white;margin-bottom: 4px">'+Object.contentText[1]+'</p>\n' +
        '                                    <p style="font-size: 10px;font-weight: bold;color: #5fc071;margin-bottom: 4px">'+Object.contentText[2]+'</p>\n' +
        '                                </div>\n' +
        '                            </div>\n' +
        '                            <div class="content_rightInner_ContentInner_Information_RightContent" style="overflow: hidden">\n' +
        '                                <div class="content_rightInner_ContentInner_Information_RightContent_Inner1">\n' +
        '                                    <img src="'+TitleImg+'" alt="" id="_titleImg">\n' +
        '                                </div>\n' +
        '                                <div class="content_rightInner_ContentInner_Information_RightContent_Inner2">\n' +
        '                                    <img src="./../labs.png" alt="" id="_labsImg">\n' +
        '                                </div>\n' +
        '                                <div class="content_rightInner_ContentInner_Information_RightContent_Inner3">\n' +
        '                                    <div class="pick_up">\n' +
        '                                        <div style="width: 25%;height: 100%;padding:3% 0 3% 3%;cursor: pointer" class="touch">' +
        '                                           <div style="width: 100%;height: 100%;background: #2b2b2b;border-radius: 8px;display: flex;justify-content: center">' +
        '                                               <p id="pick_up_text">分享</p>' +
        '                                           </div>' +
        '</div>'+
        '                                        <div style="width: 25%;height: 100%;padding:3% 0 3% 3%;cursor: pointer" class="touch">' +
        '                                           <div style="width: 100%;height: 100%;background: #2b2b2b;border-radius: 8px;display: flex;justify-content: center">' +
        '                                               <p id="pick_up_text">收藏</p>' +
        '                                           </div>' +
        '</div>'+
        '                                        <div style="width: 50%;height: 100%;padding: 3%;cursor: pointer" class="touch" onclick="Pickup(a)">' +
        '                                           <div style="width: 100%;height: 100%;background:white;border-radius: 8px;display: flex;justify-content: center">' +
        '                                               <p id="pick_up_text" style="color: #212121">加入购物车</p>' +
        '                                           </div>' +
        '                                        </div>'+
        '                                    </div>\n' +
        '                                </div>\n' +
        '                            </div>\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                </div>';

    document.getElementById('content_rightInner').appendChild(element);
    document.getElementById('content_rightInner').appendChild(element2);
}

PageInitialize(H);//(〃＾▽＾〃)


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

