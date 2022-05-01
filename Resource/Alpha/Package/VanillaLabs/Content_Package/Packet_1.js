var registList=[];
var i=0;

    function registContent(registObject){
        registList[i]=registObject;
        i++;
    }

    var defualtPacket={
        title:'超鳄梨维生素C',
        titleImg:'',
        titleIntroduce:'',
        contentImg:'',
        contentIntroduce:'',
        contentText:'',
        date:'',
        price:'2,000',
    }
    registContent(defualtPacket);

    var defualtPacket2={
        title:'qwq',
        titleImg:'',
        titleIntroduce:'',
        contentImg:'',
        contentIntroduce:'',
        contentText:'',
        date:'',
        price:'2,000',
    }
    registContent(defualtPacket2);
