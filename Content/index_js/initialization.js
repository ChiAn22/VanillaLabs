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
    }else {
        _contentText1='登录';
        _contentText2='';
        _contentText3='';
        _contentHref='./user/login.html';
    }

    element.innerHTML='<div class="content_leftInner_list_bottom_Inner_list" style="width: 20%">\n' +
        '                        <a href="'+_contentHref+'" style="text-decoration: none;height: 50px;width:50px;border-radius: 25px;background: #000000;display: flex;align-items: center;justify-content: center">\n' +
        '                            <div style="color: #FFFFFF;font-weight: bold">'+_contentText1+'</div>\n' +
        '                        </a>\n' +
        '                    </div>\n' +
        '                    <div class="content_leftInner_list_bottom_Inner_list" style="width: 80%">\n' +
        '                        <div style="margin-left: 10px;height: 100%;width: 100%;display: flex;justify-content: center;flex-direction: column;overflow: hidden;">\n' +
        '                            <p style="font-size: 14px;color: #FFFFFF;font-weight: bold;text-align: left">'+_contentText2+'</p>\n' +
        '                            <p style="font-size: 14px;color: #FFFFFF;font-weight: bold;text-align: left">'+_contentText3+'</p>\n' +
        '                        </div>\n' +
        '                    </div>';

    document.getElementById('content_leftInner_list_bottom').appendChild(element);
