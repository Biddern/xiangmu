    //导航置顶

    $(function () {
        var banOffTop = $(".nav").offset().top; //获取到距离顶部的垂直距离
        var scTop = 0; //初始化垂直滚动的距离
        $(document).scroll(function () {
            scTop = $(this).scrollTop(); //获取到滚动条拉动的距离
            // console.log(scTop);
            //console.log(scTop);查看滚动时，垂直方向上，滚动条滚动的距离
            if (scTop >= banOffTop) {
                //核心部分：当滚动条拉动的距离大于等于导航栏距离顶部的距离时，添加指定的样式
                $(".nav").addClass("fixDiv");
            } else {
                $(".nav").removeClass("fixDiv");
            }

        })
    })


    //侧边栏hover效果
    var backIndex = $('.back-top li');
    backIndex.mousemove(function () {
        $(this).find(".iconfont").hide();
        $(this).find(".backShow").show();
    });
    backIndex.mouseout(function () {
        $(this).find(".iconfont").show();
        $(this).find(".backShow").hide();
    });

    /*
     *回到顶部
     */
    $('#the-top').hide();
    //网页首屏高度
    var frist = $(window).height();
    $(window).scroll(function () {
        //第一屏不显示按钮
        if ($(window).scrollTop() > frist) {
            $('#the-top').fadeIn()
        } else {
            $('#the-top').fadeOut();
        }
    });
    $('#the-top').on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        }, 500);
        return true;
    });