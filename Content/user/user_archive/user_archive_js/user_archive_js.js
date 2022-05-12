window.onscroll=function (){
    let moveSpeed=1.6;
    document.getElementById('_BehindBackgroundImg').style.transform ='translateY(-'+window.scrollY*moveSpeed+'px)';
    if(window.scrollY>=50){
        document.getElementById('_BackgroundImg').style.filter='blur(20px)';
    }else {
        document.getElementById('_BackgroundImg').style.filter='blur(0)';
    }
}
let _num=parseInt(window.localStorage.getItem('User_Statement').split('#,')[0]);
let favorite=[];
for(let a=1;a<=window.localStorage.getItem('favorite'+_num).split('#,').length-1;a++){
    favorite[a-1]=window.localStorage.getItem('favorite'+_num).split('#,')[a-1];
}

let _msg = document.createElement('div');
_msg.id='_Msg_Inner';
document.getElementById('_Msg').appendChild(_msg);

function iMsg(Content,time){
    _msg.innerHTML='<p style="font-weight: bold;font-size: 16px;color: black;display:flex;justify-content: center;align-items: center;margin: 0 16px">'+Content+'</p>';
    _msg.style.visibility='visible';
    _msg.style.opacity='1';
    setTimeout(function (){
        _msg.style.visibility='hidden';
        _msg.style.opacity='0';
    },time||2000);
}

function icart(){
    iMsg('此功能仍在开发中',2000);
}

function aa(Object) {
    let Obj = JSON.parse(Object);
    let goods;
    goods = document.createElement('a');
    goods.href=Obj.thisPage;
    goods.target='_top';
    goods.className = 'ossm_Content_List';
    goods.innerHTML = '<div class="ossm_Content_List_TitleImg" style="background:'+Obj.backgroundColor+';">\n' +
        '                        <img src="'+Obj.imgUrl+'" alt="" class="ossm_Content_List_TitleImg_Other">\n' +
        '                    </div>\n' +
        '                    <div class="ossm_Content_List_Title">\n' +
        '                        <div class="ossm_Content_List_Title_Content" style="justify-content: left">\n' +
        '                            <p>'+Obj.title+'</p>\n' +
        '                        </div>\n' +
        '                        <div class="ossm_Content_List_Title_Content" style="justify-content: right">\n' +
        '                            <p>'+Obj.name+'</p>\n' +
        '                        </div>\n' +
        '                    </div>';
    document.getElementById('ossm_Content').appendChild(goods);
}

for(let v=0;v<=window.localStorage.getItem('favorite'+_num).split('#,').length;v++){
    aa(favorite[v].replace('null',''));
}

