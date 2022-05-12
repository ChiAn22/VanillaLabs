let element2 = document.createElement('div');
element2.id='Intro_Content_Title_Inner';
let _contentText1,_contentText2,_contentText3,_contentHref,num,_EmailText,_NameText,_Birthday,_Address;

if("string" !== typeof window.localStorage.getItem('User_Statement')){
    _contentText1='登录';
    _contentText2='';
    _contentText3='';
    _contentHref='./user/login.html';
}else if(window.localStorage.getItem('User_Statement').split('#,')[1]==='1'){
    let num=parseInt(window.localStorage.getItem('User_Statement').split('#,')[0]);
    _EmailText=window.localStorage.getItem('User_Archive'+num).split('#,')[5];
    _NameText=window.localStorage.getItem('User_Archive'+num).split('#,')[1];
    _Birthday=window.localStorage.getItem('User_Archive'+num).split('#,')[2];
    _Address=window.localStorage.getItem('User_Archive'+num).split('#,')[3];
    _contentText1=_NameText.substr(0,2);
    _contentText2=_NameText;
    _contentText3=_EmailText;
    _contentHref='./user/user.html';
}else {
    _contentText1='登录';
    _contentText2='';
    _contentText3='';
    _contentHref='./user/login.html';
}


element2.innerHTML='<div id="_BehindBackgroundImg" style="position:fixed;z-index: -2;width: 100%;height: 30%;transform: translateY(0px);">\n' +
    '                <img alt="" src="./Img/BackgroundImg.jpg" id="_BackgroundImg" style="transition: 0.3s;width: 100%;height: auto;">\n' +
    '            </div>\n' +
    '            <div style="width: 100%;height: 100%;display: flex;flex-direction: column;justify-content: center;align-items: center">\n' +
    '                <div style="width: 100%;height: 30%;display: flex;justify-content: center;">\n' +
    '                    <div style="width: 150px;height: 150px;border-radius: 75px;background: black;display: flex;justify-content: center;align-items: center">\n' +
    '                        <p style="font-size: 28px;font-weight: bold;color: #FFFFFF">'+_contentText1+'</p>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <p style="font-size: 24px;font-weight: bold;color: #FFFFFF">'+_contentText2+'</p>\n' +
    '                <p style="font-size: 24px;font-weight: bold;color: #FFFFFF">'+_contentText3+'</p>\n' +
    '                <div style="height: 8%;width: 100%;display: flex;justify-content: center;align-items: center">\n' +
    '                    <p style="font-size: 16px;font-weight: bold;color: #6e6e6e;margin-right: 10px">'+_Birthday.split('-')[1]+'月'+_Birthday.split('-')[2]+'日'+'</p>\n' +
    '                    <p style="font-size: 16px;font-weight: bold;color: #6e6e6e;margin-left: 10px">'+_Address+'</p>\n' +
    '                </div>\n' +
    '            </div>';
document.getElementById('Intro_Content_Title').appendChild(element2);