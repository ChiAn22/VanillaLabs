let element = document.createElement('div');
element.className='content_leftInner_list_bottom_Inner';
let _contentText1,_contentText2,_contentText3,_contentHref,num,_EmailText,_NameText;

if("string" !== typeof window.localStorage.getItem('User_Statement')){
    _contentText1='登录';
    _contentText2='';
    _contentText3='';
    _contentHref='./user/login.html';
}else if(window.localStorage.getItem('User_Statement').split('#,')[1]==='1'){
    num=parseInt(window.localStorage.getItem('User_Statement').split('#,')[0]);
    _EmailText=window.localStorage.getItem('User_Archive'+num).split('#,')[5];
    _NameText=window.localStorage.getItem('User_Archive'+num).split('#,')[1];
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

element.innerHTML='<div class="content_leftInner_list_bottom_Inner_list" style="width: 100%;height: 100%;display: flex;justify-content: center;align-items: center">\n' +
    '                        <a href="'+_contentHref+'" style="text-decoration: none;height: 50px;width:50px;border-radius: 25px;background: #000000;display: flex;align-items: center;justify-content: center">\n' +
    '                            <div style="color: #FFFFFF;font-weight: bold">'+_contentText1+'</div>\n' +
    '                        </a>\n' +
    '                    </div>';

document.getElementById('content_leftInner_list_bottom').appendChild(element);