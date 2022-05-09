window.onload=function (){

    if("string" !== typeof window.localStorage.getItem('User_Archive_Na')){
        window.localStorage.setItem('User_Archive_Na','0');
    }
    alert(window.localStorage.getItem('User_Archive_Na'));
}

function ClickedForSignUp(){
    let SignUpArchive;
    let i=parseInt(window.localStorage.getItem('User_Archive_Na'));

    SignUpArchive=
        document.getElementById('_Email').value+'#,'+
        document.getElementById('_UserName').value+'#,'+
        document.getElementById('_Birthday').value+'#,'+
        document.getElementById('_Address').value+'#,'+
        document.getElementById('_Password').value;


    window.localStorage.setItem('User_Archive'+i,SignUpArchive);
    i++;
    window.localStorage.setItem('User_Archive_Na',i.toString());
}

window.ondblclick=function (){
    let text='';
    for(let i = 0;i<=parseInt(window.localStorage.getItem('User_Archive_Na'));i++){
        text+=window.localStorage.getItem('User_Archive'+i)+'///';
    }
    alert(text+'\n'+window.localStorage.getItem('User_Archive_Na').toString());

}