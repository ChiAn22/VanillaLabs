window.onload=function (){

    if("string" !== typeof window.localStorage.getItem('User_Archive_Na')){
        window.localStorage.setItem('User_Archive_Na','0');
    }
}

function ClickedForSignUp(){
    let SignUpArchive;
    let i=parseInt(window.localStorage.getItem('User_Archive_Na'));

    SignUpArchive=
        document.getElementById('_Email').value.toLowerCase()+'#,'+
        document.getElementById('_UserName').value+'#,'+
        document.getElementById('_Birthday').value+'#,'+
        document.getElementById('_Address').value+'#,'+
        document.getElementById('_Password').value+'#,'+
        document.getElementById('_Email').value;

    window.localStorage.setItem('User_Archive'+i,SignUpArchive);
    i++;
    window.localStorage.setItem('User_Archive_Na',i.toString());
    window.location.href='/VanillaLabs/Content/user/login.html';

    document.getElementById('_Email').value='';
    document.getElementById('_UserName').value='';
    document.getElementById('_Birthday').value='';
    document.getElementById('_Address').value='';
    document.getElementById('_Password').value='';
}

function ClickedForLogIn(){
    let Email = document.getElementById('_Email').value.toLowerCase();
    let Password = document.getElementById('_Password').value;
    let EmailBool=false;
    let PasswordBool=false;

    for(let i=0;i<=parseInt(window.localStorage.getItem('User_Archive_Na'))-1;i++){
        if(Email===window.localStorage.getItem('User_Archive'+i).split('#,')[0]){
            EmailBool=true;
            for(let a=0;a<=parseInt(window.localStorage.getItem('User_Archive_Na'))-1;a++){
                if(Password===window.localStorage.getItem('User_Archive'+i).split('#,')[4]){
                    PasswordBool=true;
                    window.localStorage.setItem('User_Statement',i+'#,'+'1');
                    window.location.href='/VanillaLabs/Content/index.html';
                    return;
                }
            }
            return;
        }
    }
    if(PasswordBool===false){
        if(EmailBool===false){
            alert('该邮箱未注册');
        }else {
            alert('密码错误');
        }
    }


}

window.ondblclick=function (){
    let text='';
    for(let i = 0;i<=parseInt(window.localStorage.getItem('User_Archive_Na'));i++){
        text+=window.localStorage.getItem('User_Archive'+i)+'///';
    }
    alert(text+'\n'+window.localStorage.getItem('User_Archive_Na').toString());
}

