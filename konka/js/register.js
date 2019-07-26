//获取节点

var $uname = $('.username');
var $pwd = $('.userpwd');
var $confpwd = $('.confirmpwd')
var $vcode = $('.code');
var $btn = $('.btn');
var ckCode = randomInt(1000, 9999);
// var $verificationspan = $("#checkcode");

var regstr1 = /^\d{11}$/; //^匹配开始 $匹配结束,11位数字
var regstr2 = /^\w{6,16}$/; //  ^匹配开始 $匹配结束   \w表示数字字母下划线

// 用户名验证
function checkname() {
    // var regstr1 = /^\d{11}$/; //^匹配开始 $匹配结束,11位数字
    var namestr = $uname.val();
    if (!regstr1.test(namestr)) {
        x = document.getElementById("errorname").innerHTML = "*手机号不符合规则     (请输入11位有效数字)";
        // return false;
    }else{
        x = document.getElementById("errorname").innerHTML = "*格式正确";
    // return true;
        $($uname).css('border-color','red')
    }
    
}


var regstr = /^\w{6,16}$/; //  ^匹配开始 $匹配结束   \w表示数字字母下划线

// 密码名验证

function checkpass() {
    // var regstr2 = /^\w{6,16}$/; //  ^匹配开始 $匹配结束   \w表示数字字母下划线
    var passstr = $pwd.val();
    if (!regstr2.test(passstr)) {
        x = document.getElementById("errorpwd").innerHTML = "*密码不符合规则     (请输入6~16位有效 字母 数字 符号)";
        // x.style.color = "red";
        return false;
    }else{
        document.getElementById("errorpwd").innerHTML = "*格式正确";
        return true;
    }
    
}

// 密码验证

function checkpass2() {
    var passstr = $pwd.val()
    var passstr2 = $confpwd.val();
    if (passstr == passstr2) {
        x = document.getElementById("errorpwd2").innerHTML = "*两次密码输入一致";
        return true;
    }else{
        x = document.getElementById("errorpwd2").innerHTML = "*两次密码输入不一致";
        return false;
    }
}

// 验证码

$(".verification_p").text(ckCode)
$(".verification_p").click(function () {
    ckCode = randomInt(1000, 9999);
    $(".verification_p").text(ckCode).css("background", randomColor(randomInt(0, 255)))
})

function checkcode() {
    var codeVal = $vcode.next().html();
    var iptVal = $vcode.val();
    if (codeVal == iptVal) {
        x = document.getElementById("checkcode").innerHTML = "*验证码正确";
    } else {
        x = document.getElementById("checkcode").innerHTML = "*验证码错误，请重新输入";
    }
}

$($btn).on('click', function () {
    if (regstr1.test($uname.val()) && (regstr2.test($pwd.val()) && $pwd.val() == $confpwd.val()) && $vcode.next().html() == $vcode.val()) {
        // alert('注册成功');
        var uname = $uname.val();
        var pwd = $pwd.val();
        var conf = $confpwd.val();
        var iptVal = $vcode.val();
        var json={
            'uname' : uname,
            'pwd' : pwd,
            'conf' : conf,
            'iptVal' :iptVal
        }
        $.cookie('userinfo',JSON.stringify(json));
        // console.log(json)
        console.log($.cookie('userinfo'))
        // register.js:101 {"uname":"11111111111","pwd":"222222","conf":"222222","iptVal":"5220"}
        alert('注册成功');
        location.href='login.html'
    } else {
        alert('注册失败,请重新注册')
    }
    // }
    // alert(111)
})