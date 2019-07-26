function detail() {
    var smallImg = document.querySelectorAll('.product-others-img li');
    var bigImg = document.querySelectorAll('.product-img img');
    // console.log(bigImg)
    for (let i = 0; i < smallImg.length; i++) {
        smallImg[i].onmouseover = function () {
            for (let k = 0; k < bigImg.length; k++) {
                bigImg[k].style.opacity = 0;
                console.log(bigImg[k])
            }
            bigImg[i].style.opacity = 1;
            // console.log(1)
            // oShowImg.src = this.firstElementChild.src;
            // oGlassImg.src = this.firstElementChild.src;
        }
    }
}
detail();