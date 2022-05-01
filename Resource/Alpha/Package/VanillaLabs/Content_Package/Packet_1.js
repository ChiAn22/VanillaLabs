

    var registList=[];
    var i=0;

    function registContent(registObject){
        registList[i]=registObject;
        i++;
    }

    var defualtPacket={
        title:'qwq',
        titleImg:'',
        titleIntroduce:'',
        ContentImg:'',
        ContentIntroduce:'',
        ContentText:'',
        Date:'',
    }
    registContent(defualtPacket);

    alert(registList[0].title);
