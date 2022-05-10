
function aa(Object) {
    let goods;
    goods = document.createElement('a');
    goods.href=Object.introPage_url;
    goods.target='_top';
    goods.className = 'ossm_Content_List';
    goods.innerHTML = '<div class="ossm_Content_List_TitleImg" style="background:'+Object.backgroundColor+';">\n' +
        '                        <img src="'+Object.titleImg+'" alt="" class="ossm_Content_List_TitleImg_Other">\n' +
        '                    </div>\n' +
        '                    <div class="ossm_Content_List_Title">\n' +
        '                        <div class="ossm_Content_List_Title_Content" style="justify-content: left">\n' +
        '                            <p>'+Object.title+'</p>\n' +
        '                        </div>\n' +
        '                        <div class="ossm_Content_List_Title_Content" style="justify-content: right">\n' +
        '                            <p>'+Object.price+'</p>\n' +
        '                        </div>\n' +
        '                    </div>';
    document.getElementById('ossm_Content').appendChild(goods);
}

for(let v=0;v<=i;v++){
    aa(registList[v]);
}
