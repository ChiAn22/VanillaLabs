var registList=[];
var i=0;

    function registContent(registObject){
        registList[i]=registObject;
        i++;
    }

    var defaultPacket={
        title:'鳄梨直饮维生素C',
        titleImg:'./../../Resource/Alpha/Package/VanillaLabs/Content_Package/Packet/001Avocado/TitleImg.png',
        titleIntroduce:'70%折扣中',
        contentImg:'',
        contentIntroduce:'',
        contentText:'',
        backgroundColor:'maroon',
        date:'',
        price:'2,000',
        moreType:true,
        type:['芒果味','桑葚味'],
        introPage_url:'./../../Resource/Alpha/Package/VanillaLabs/Content_Package/Packet/001Avocado/page/page.html',
    }
    registContent(defaultPacket);

    var defaultPacket2={
        title:'qwq',
        titleImg:'./../../Resource/Alpha/Package/VanillaLabs/Content_Package/Packet/001Avocado/TitleImg.png',
        titleIntroduce:'',
        contentImg:'',
        contentIntroduce:'',
        contentText:'',
        backgroundColor:'#343434',
        date:'',
        price:'2,000',
        introPage_url:'./../../Resource/Alpha/Package/VanillaLabs/Content_Package/Packet/001Avocado/page/page.html',
    }
    registContent(defaultPacket2);
