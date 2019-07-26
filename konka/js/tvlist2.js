function tvlist(){

    var oList = document.querySelector('.gl-default')
    oList.onclick = function(e){
        e = e || window.event
        //获取事件源
        var target = e.target || e.srcElement;
        // alert(1)
        if(target.className == 'layz' ){
            // console.log(11)
            // console.log(target.src)
            var imgSrc = target.src;
            var name = oList.firstElementChild.firstElementChild.nextElementSibling.innerHTML;
            var title = oList.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.innerHTML;
            var price = oList.firstElementChild.lastElementChild.previousElementSibling.innerHTML;
            // console.log(price);
            var json = {
                imgSrc : imgSrc,
                name :name,
                title : title,
                price : price

            }
            setCookie('info',JSON.stringify(json));
            console.log(getCookie('info'))
            location.href='http://127.0.0.1/konka/detail.html'

        }

    }
}
tvlist();