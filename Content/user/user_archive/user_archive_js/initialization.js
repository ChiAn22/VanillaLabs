let element = document.createElement('div');
element.className='content_leftInner_list_bottom_Inner';
let _contentText1,_contentText2,_contentText3,_contentHref,num,_EmailText,_NameText;

if("string" !== typeof window.localStorage.getItem('User_Statement')){
    _contentText1='登录';
    _contentText2='';
    _contentText3='';
    _contentHref='/VanillaLabs/Content/user/login.html';
}else if(window.localStorage.getItem('User_Statement').split('#,')[1]==='1'){
    _contentText1='登出';
    _contentHref='/VanillaLabs/Content/user/login.html';
}else {
    _contentText1='登录';
    _contentText2='';
    _contentText3='';
    _contentHref='/VanillaLabs/Content/user/login.html';
}
function NL(){
    window.localStorage.removeItem('User_Statement');
}

element.innerHTML='<div class="content_leftInner_list_bottom_Inner_list" style="width: 100%;height: 100%;display: flex;justify-content: center;align-items: center">\n' +
    '                        <a href="'+_contentHref+'" onclick="NL()" style="text-decoration: none;height: 50px;width:50px;border-radius: 25px;background: #000000;display: flex;align-items: center;justify-content: center">\n' +
    '                            <div style="color: #FFFFFF;font-weight: bold">'+_contentText1+'</div>\n' +
    '                        </a>\n' +
    '                    </div>';

document.getElementById('content_leftInner_list_bottom').appendChild(element);