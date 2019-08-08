require.config({
    baseUrl:"module",
    paths:{
        jq:"../libs/jquery.1.12.4",
        jb:"../libs/jquery.banner.2.1.2",
        list:"list",
        map:"map",
        tab:"tab",
        floor:"floor"
    }
})

require(["jb","list","jq"],function(_,l,_){
    $("#banner").banner({
        items:$("#banner").find("img"),        
        autoPlay:true,                          
        delayTime:7000,                         
        moveTime:3000,                          
        index:0,                                
    })
    var myList= new l({
        aLi:$("#nav .list-l li"),
        aDiv:$("#nav .list-box .more")
    }) 
})