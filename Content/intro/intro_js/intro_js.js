
function aa(Object) {
    let goods;
    goods = document.createElement('div');
    goods.className = 'ossm_Content_List';
    goods.innerHTML = '<div class="ossm_Content_List_TitleImg">\n' +
        '                        <img src="../Resource/Alpha/Package/VanillaLabs/Content_Package/Packet/001Avocado/TitleImg.png" alt="" class="ossm_Content_List_TitleImg_Other">\n' +
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
