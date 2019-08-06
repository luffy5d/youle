require.config({
    baseUrl:"module",
    paths:{
        jq:"../libs/jquery.1.12.4",
        jb:"../libs/jquery.banner.2.0.0",
        list:"list",
        map:"map",
        tab:"tab",
        floor:"floor"
    }
})

require(["jq","jb","list","map","tab","floor"],function($,_,l,m,t,f){
    console.log($);
})