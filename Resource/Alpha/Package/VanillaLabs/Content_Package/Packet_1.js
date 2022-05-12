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
        contentText:['本商品符合Argeement 3rd For Life Station功能性饮用物生产规范','"可以不吃水果，只靠喝这个来补充身体里的维生素C吗？答案不能。"','本商品不能替代药物。'],
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
        title:'速降 · 袖珍冰箱',
        titleImg:'/VanillaLabs/Resource/Alpha/Package/VanillaLabs/Content_Package/Packet/002Icetube/TitleImg.png',
        titleIntroduce:'促销中',
        contentImg:'',
        contentQRCodeUrl:'/VanillaLabs/Resource/Alpha/Package/VanillaLabs/Content_Package/Packet/002Icetube/QRcode.png',
        contentIntroduce:'功率:300w',
        contentText:['本商品符合Argeement 2nd For Life Station电器生产规范','“在安氏科技的办公室里，总能见到许多这样的小玩意儿。据说是花石送给维斯塔菈用于保鲜奶茶的生日礼物？不知为何流通到市场上了。”','严禁危险使用[!]'],
        company:'An Company安氏科技',
        productionPlaceOfOriginLite:'芝港区南海岸',
        productionPlaceOfOrigin:'全港市首都内 芝港区南海岸-西芝山埗 安德塔街1号',
        backgroundColor:'#27806b',
        date:'2085年1月',
        price:'15,000',
        moreType:false,
        type:[
            Type1={
                name:'默认款',
                backgroundColor:'#ffffff',
                title:'速降 · 袖珍冰箱',
                imgUrl:'/VanillaLabs/Resource/Alpha/Package/VanillaLabs/Content_Package/Packet/002Icetube/TitleImg.png',
                thisPage:'/VanillaLabs/Resource/Alpha/Package/VanillaLabs/Content_Package/Packet/002Icetube/page/page.html',
            }],
        introPage_url:'/VanillaLabs/Resource/Alpha/Package/VanillaLabs/Content_Package/Packet/002Icetube/page/page.html',
    }
    registContent(defaultPacket2);
