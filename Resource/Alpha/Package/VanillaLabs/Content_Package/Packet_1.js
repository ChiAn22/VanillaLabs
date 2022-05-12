var registList=[];
var i=0;

    function registContent(registObject){
        registList[i]=registObject;
        i++;
    }

    var defaultPacket={
        title:'直饮果味维生素C',
        titleImg:'/VanillaLabs/Resource/Alpha/Package/VanillaLabs/Content_Package/Packet/001Avocado/TitleImg.png',
        titleIntroduce:'70%折扣中',
        contentImg:'',
        contentQRCodeUrl:'/VanillaLabs/Resource/Alpha/Package/VanillaLabs/Content_Package/Packet/001Avocado/QRcode.png',
        contentIntroduce:'净含量：700ml',
        contentText:['本商品符合Argeement 3rd For Life Station功能性饮用物生产规范','无内容','本商品不能替代药物。'],
        company:'墨西伊子生物',
        productionPlaceOfOriginLite:'西馆区墨沿',
        productionPlaceOfOrigin:'全港市首都内 西馆区墨沿-木鹫 CBD底环辅路103号',
        backgroundColor:'#800000',
        date:'2085年1月',
        price:'2,000',
        moreType:true,
        type:[
            Type1={
                name:'鳄梨味',
                backgroundColor:'#2b2b2b',
                title:'直饮果味维生素C',
                imgUrl:'/VanillaLabs/Resource/Alpha/Package/VanillaLabs/Content_Package/Packet/001Avocado/TitleImg.png',
                thisPage:'/VanillaLabs/Resource/Alpha/Package/VanillaLabs/Content_Package/Packet/001Avocado/page/page.html',
            },
            Type2={
                name:'杏桃味',
                backgroundColor:'#2b2b2b',
                title:'直饮果味维生素C',
                imgUrl:'/VanillaLabs/Resource/Alpha/Package/VanillaLabs/Content_Package/Packet/001Avocado/TitleImgType2.png',
                thisPage:'/VanillaLabs/Resource/Alpha/Package/VanillaLabs/Content_Package/Packet/001Avocado/page/page.html',
            },
            Type3={
                name:'樱花味',
                backgroundColor:'#2b2b2b',
                title:'直饮果味维生素C',
                imgUrl:'/VanillaLabs/Resource/Alpha/Package/VanillaLabs/Content_Package/Packet/001Avocado/TitleImgType3.png',
                thisPage:'/VanillaLabs/Resource/Alpha/Package/VanillaLabs/Content_Package/Packet/001Avocado/page/page.html',
            },
            Type4={
                name:'桑葚味',
                backgroundColor:'#2b2b2b',
                title:'直饮果味维生素C',
                imgUrl:'/VanillaLabs/Resource/Alpha/Package/VanillaLabs/Content_Package/Packet/001Avocado/TitleImgType4.png',
                thisPage:'/VanillaLabs/Resource/Alpha/Package/VanillaLabs/Content_Package/Packet/001Avocado/page/page.html',
            }],
        introPage_url:'/VanillaLabs/Resource/Alpha/Package/VanillaLabs/Content_Package/Packet/001Avocado/page/page.html',
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
