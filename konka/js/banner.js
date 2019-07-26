
    // 轮播图  

    var
        oShow = document.querySelector('.show'),
        oImgBox = document.querySelector('.imgBox'),
        aImg = oImgBox.getElementsByTagName('img'), //querySelectorAll 不能获取动态添加的节点的长度。        
        oRadiusBox = document.querySelector('.radiusBox'),
        aSpan = document.querySelectorAll('.show span'),
        //计数器
        count = 0,
        //每次移动的距离
        distance = aImg[0].offsetWidth;
    var timer = null; //定义一个计时器
    //克隆节点（把第一张再次放到最后一个）
    var cloneFirst = aImg[0].cloneNode();
    //克隆的节点添加到父级
    oImgBox.appendChild(cloneFirst);
    //动态设置imgBox 的宽度
    oImgBox.style.width = aImg.length * aImg[0].offsetWidth + 'px';

    //图片的运动
    function toImg() {
        move(oImgBox, {
            'left': -count * distance
        });
    }

    //nextImg
    function nextImg() {
        if (count >= aImg.length - 1) {
            oImgBox.style.left = 0; //如果count大于图片长度 - 1    直接让oImgBox  left 为0
            count = 1
        } else {
            count++;
        }
        //console.log(count);
        toImg()
        //控制圆点的样式
        clearActive();
        aRadius[count >= aImg.length - 1 ? 0 : count].className = 'active';
    }

    //pre
    function preImg() {
        if (count <= 0) {
            oImgBox.style.left = -(aImg.length - 1) * distance + 'px';
            count = aImg.length - 2;
        } else {
            count--;
        }
        toImg()
        clearActive();
        aRadius[count].className = 'active';
    }

    aSpan[1].onclick = function () {
        nextImg()
    }

    aSpan[0].onclick = function () {
        preImg();
    }



    //添加圆点
    for (var i = 0; i < aImg.length - 1; i++) {
        var createLi = document.createElement('li');
        oRadiusBox.appendChild(createLi);
    }
    var aRadius = oRadiusBox.querySelectorAll('li');
    aRadius[0].className = 'active';

    //给圆点添加事件
    for (var i = 0; i < aRadius.length; i++) {
        aRadius[i].index = i;
        aRadius[i].onclick = function () {
            clearActive()
            this.className = 'active';
            count = this.index;
            toImg()
        }
    }

    //清除圆点的leiming 
    function clearActive() {
        for (var k = 0; k < aRadius.length; k++) {
            aRadius[k].className = '';
        }
    }


    //自动滚动
    function autoPlay() {
        timer = setInterval(() => {
            nextImg();
        }, 3000)
    }
    autoPlay();

    //鼠标滑过定时器关闭
    oShow.onmouseover = function () {
        clearInterval(timer);
    }
    oShow.onmouseout = function () {
        autoPlay();
    }




   