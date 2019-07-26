 //LoutiNav效果

    /*
        功能一：点击楼层号，显示对应的楼层
        将页面滚动的距离设置为该楼层离body窗口顶部的距离

        功能二： 回到顶部 设置页面滚动的距离为0
    */

   let $list = $('#LoutiNav li:not(.list)');
   let $lastLi = $('.last');
   let $louti = $('.Louti');
   let flag = true;    //假设值为true时，滚动条事件被执行

   //功能一：点击楼层号  显示对应的楼层

   $list.click(function(){
       flag = false;
       //获取当前点击的楼层号下标
       let index = $(this).index;
       //获取index对应的楼层 相对于内容窗口顶部的距离
       let t = $louti.eq(index).offset().top;
       //设置页面滚动的距离为t的值
       $('body,html').animate({ scrollTop : t },1000,function(){
           flag = true;
       })
       //改变当前点击的楼层号的样式
       $(this).find('span')
           .addClass('active')
           .end()
           .siblings()
           .find('span')
           .removeClass('active');
   })

   //功能二：回到顶部，设置页面滚动的距离为0

   $lastLi.click(function(){
       //设置页面滚动的距离为0
       $('body,html').animate({ scrollTop : 0},1000);
   })

   //功能三：操作滚动条 根据楼层显示信息改变楼层号的样式

   $(window).scroll(function(){
       if(flag){
           //获取页面滚动的距离
           let sTop = $(document).scrollTop();
           //使用filter选择器查找出满足某个条件的楼层
           //条件：当前在可视区显示信息最多楼层-页面滚动距离 <楼层高度的一般
           let $floor = $louti.filter(function(){
               //返回满足某个条件的楼层
               return Math.abs($(this).offset().top - sTop) < $(this).height()/2;

           })
           //获取该楼层在兄弟中的下标
           let index = $floor.index();
           if( index != -1){
               //根据楼层的下标找到要高亮显示的楼层号
               $list.eq(index).find("span").addClass("active").end().siblings().find("span").removeClass("active");
           }else{
               $list.find("span").removeClass();
           }

       }
   })