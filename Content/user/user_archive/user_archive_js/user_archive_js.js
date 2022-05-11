window.onscroll=function (){
    let moveSpeed=1.6;
    document.getElementById('_BehindBackgroundImg').style.transform ='translateY(-'+window.scrollY*moveSpeed+'px)';
    if(window.scrollY>=50){
        document.getElementById('_BackgroundImg').style.filter='blur(20px)';
    }else {
        document.getElementById('_BackgroundImg').style.filter='blur(0)';
    }
}
let cart=[];
for(let a=1;a<=window.localStorage.getItem('cart').split('#,').length-1;a++){
    cart[a-1]=window.localStorage.getItem('cart').split('#,')[a-1];
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

for(let v=0;v<=window.localStorage.getItem('cart').split('#,').length;v++){
    aa(cart[v].replace('null',''));
}

