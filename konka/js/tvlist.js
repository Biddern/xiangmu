axios({
    method: 'get',
    url: 'json/tvlist.json',
    data: {}
}).then(function (data) {
    // console.log(data)
    var box = document.querySelector('.gl-default');
    var str = '';
    for (var i = 0; i < data.length; i++) {
        str +=
            `
        <div class="col-xs-3" style="position: relative;">
                    <div class="figure">
                        <a href="javascript:void(0);">
                            <img src='${data[i].img}' class="layz" alt="65G10U 65吋4K超薄 AI全景智能">
                        </a>
                    </div>
                    <h4 class="text-uppercase figure-title">${data[i].name}</h4>
                    <div class="figure-title figureColor">${data[i].title}</div>
                    <p class="price">${data[i].price}</p>
                    <div class="wrapper">
                        <a href="/cart-add-813.html" type="button" class="btn btn-default">加入购物车</a>
                        <a href="/cart-fastbuy-813.html" type="button" class="btn btn-danger">立即购买</a>
                    </div>
                </div>
        
        `
    }
    box.innerHTML = str;
    // console.log(box)

    var smallBox = box.children;
    // console.log(smallBox)
    for (var k = 0; k < smallBox.length; k++) {
        smallBox[k].style.marginRight = '20px';
        if ((k + 1) % 4 == 0) {
            smallBox[k].style.marginRight = 0;
        }
        // var goods = smallBox[k].lastElementChild
        // console.log(goods);
    }
    
})


    //每一页放20个  20
    //一共的页码数 Math.ceil(data.length / 20)
    // var pageNum = Math.ceil(data.length / 20);
    // console.log(pageNum)

    //数据的渲染 核心代码

    // function renderPage(n) {
    //     // var str1 = '';
    //     for (var i = (n - 1) * 20; i < Math.min(data.length, 20 * n); i++) {
    //         str += `
    //         <div class="col-xs-3" style="position: relative;">
    //         <div class="figure">
    //             <a href="">
    //                 <img src='${data[i].img}' class="layz" alt="65G10U 65吋4K超薄 AI全景智能">
    //             </a>
    //         </div>
    //         <h4 class="text-uppercase figure-title">${data[i].name}</h4>
    //         <div class="figure-title figureColor">${data[i].title}</div>
    //         <p class="price">${data[i].price}</p>
    //         <div class="wrapper">
    //             <a href="/cart-add-813.html" type="button" class="btn btn-default">加入购物车</a>
    //             <a href="/cart-fastbuy-813.html" type="button" class="btn btn-danger">立即购买</a>
    //         </div>
    //     </div>
            
    //         `
    //     }
    //     box.innerHTML = str;
    // }
    // renderPage(1);




    