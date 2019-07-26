//封装cookie的设置
function setCookie(cName,cVal,expires){
    //获取当前时间
    var d = new Date();
    d.setDate(d.getDate() +expires );
    document.cookie = cName + "=" + cVal + ";path = /;expires=" + d.toGMTString();
}

//读取cookie
function getCookie(cName){
    //获取全部的cookie
    var cookieStr = document.cookie;
    //把cookie分隔成数组
    var cookieArr = cookieStr.split('; ');
    //遍历数组
    for(var i = 0, k = cookieArr.length; i < k ; i++){
        //分隔数组
        var items = cookieArr[i].split('=');
        if(items[0] == cName){
            return items[1];
        }
    }
}
//cookie的删除
function removeCookie(cName){
    setCookie(cName,null,-1); //设置成过期cookie
}