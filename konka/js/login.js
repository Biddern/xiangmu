//获取节点

var $uname = $('.username');
var $pwd = $('.userpwd');
var $confpwd = $('.confirmpwd')
var $vcode = $('.code');
var $btn = $('#bttn');
// var ckCode = randomInt(1000, 9999);
// console.log($btn)
// function login(){

function checkcode() {
    var codeVal = $vcode.next().html();
    var iptVal = $vcode.val();
    if (codeVal == iptVal) {
        x = document.getElementById("checkcode").innerHTML = "*验证码正确";
    } else {
        x = document.getElementById("checkcode").innerHTML = "*验证码错误，请重新输入";
    }
}

$($btn).on("click", function () {
    var uname = $uname.val();
    var pwd = $pwd.val();
    var conf = $confpwd.val();
    var iptVal = $vcode.val();
    var cook = $.cookie("userinfo")
    var obj = JSON.parse(cook)
    // console.log(cook)  {"uname":"12222222222","pwd":"123321","conf":"123321","iptVal":"2528"}
    console.log(uname);
    console.log(pwd);
    console.log(conf);
    console.log(cook)
    if (uname == obj.uname && pwd == obj.pwd && conf == obj.conf && $vcode.next().html() == $vcode.val() ) {
        alert('登陆成功')
        location.href = "http://127.0.0.1/konka/index.html"
    } else {
        alert('用户名或密码错误，请重新登录')
    }
})

//{"name":"weishuai","tel":"15123456789","pwd":"111111"}

// }
// login();