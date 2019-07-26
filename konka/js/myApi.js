//随机数，m - n   m < n;
function randomNum(m,n){
    var num = parseInt(Math.random() * (n - m + 1) + m);
    return num;
}


//获取数组中的最大值  arr传递的数组
function getMax(arr){
    var maxNum = arr[0];
    for(var i = 1 ; i < arr.length ; i++){
        if(maxNum < arr[i]){
            maxNum = arr[i];
        }
    }
    return maxNum;
}

//获取数组中的最小值  arr传递的数组
function getMin(arr){
    var minNum = arr[0];
    for(var i = 1 ; i < arr.length ; i++){
        if(minNum > arr[i]){
            minNum = arr[i];
        }
    }
    return minNum;
}

//冒泡排序  arr 传递的数组.
function arrOrder(arr){
    //几轮
    for(var i = 0 ; i < arr.length - 1 ; i++){
        //每一轮进来之后开始比较
        for(var k = 0 ; k < arr.length - 1 - i ; k++){
            if(arr[k] > arr[k + 1]){
                var temp = arr[k];
                arr[k] = arr[k + 1];
                arr[k + 1] = temp;
            }
        }
    }
    return arr;
}

//选择排序
function choiceOrder(arr){
    for(var i = 0 ; i < arr.length - 1 ; i++){
        for(var k = i + 1 ; k < arr.length ; k++){
            if(arr[i] > arr[k]){
                var temp = arr[i];
                arr[i] = arr[k];
                arr[k] = temp;
            }
        }
    }
    return arr;
}
//字符串去重
var str = "hjklsrrrrefsefggggggppppw";
var newStr = "";
for(var i = 0 ; i < str.length ; i++){
    if(newStr.indexOf(str.charAt(i)) == -1){
        newStr += str.charAt(i);
    }
}
//console.log(newStr);

//随机颜色
function randomColor(){
    var  
     r = randomNum(0,255);
     g = randomNum(0,255);
     b = randomNum(0,255);
     //return "rgb("+ r +","+  g +","+ b +")";
     return "#" + systemChange(r,g,b);
}
//转十六进制颜色值
function systemChange(r,g,b){
    r = r.toString(16).length < 2 ?"0" + r.toString(16) : r.toString(16);       
    g = g.toString(16).length < 2 ?"0" + g.toString(16) : g.toString(16);
    b = b.toString(16).length < 2 ?"0" + b.toString(16) : b.toString(16);
    return "" + r + g + b;
}

//时间转成字符串格式
function dateStr(d,sign){
    //如果没有传递符号，给一个默认的符号
    if(!sign){
        sign = "-";
    }else{
        sign = "sign";
    }
        //获取d里面年月日，时分秒
var 
    year = d.getFullYear();
    month = d.getMonth() + 1;
    sun = d.getDate();
    hours = d.getHours();
    minutes = d.getMinutes();
    seconds = d.getSeconds();
return year + sign + mendZero(month) + sign + mendZero(sun) + " " + mendZero(hours) + ":" + mendZero(minutes) + ":" + mendZero(seconds);
}

//字符串补零
function mendZero(num){
    return num = num < 10 ?'0' + num : num;
}

//阻止浏览器的默认行为
function preventDefault(e){
			return e.preventDefault ? e.preventDefault() : e.returnValue = false;
		}
//封装监听事件
function addEventListener(ele,eventType,fn){
        return ele.addEventListener ? ele.addEventListener(eventType,fn) : ele.attchEvent('on' + eventType,fn);
    }

//获取非行内样式
function getStyle(ele,attr){
    //如果判断是IE？？
    if(ele.currentStyle){
        return ele.currentStyle[attr ];
    } else {
        return getComputedStyle(ele,null)[attr ]; //
    }
}

//封装阻止冒泡事件
	function stopPropagetion(e){
    	return  e.stopPropagetion?e.stopPropagation():e.cancelBubble = true;
	}
	
//addClass方法（添加类名）
 function addClass(ele,classN){
        //获取当前元素所有的类名。
        var strClass = ele.getAttribute('class');
        //var reg = /^$/       不支持变量
        var reg = new RegExp('(^|\\s)'+classN+'(\\s|$)','g');
        if(!reg.test(strClass)){
            ele.className += ' ' + classN;
        }   
    }

//完美运动框架插件
function getStyle(ele,attr){
    return ele.currentStyle ? ele.currentStyle[attr] :  getComputedStyle(ele,null)[attr];
}
function move(ele,json,fn){      //json的接收  {width:10900}
    //清除定时器
    clearInterval(ele.timer);
    //开启定时器
    ele.timer = setInterval(function(){
        var mStop = true;            //设置开关门
        //遍历json
        for(attr in json){
            //获取变换的属性的值
            var iCur = getStyle(ele,attr);
            //判断是否为透明    
            if(attr == 'opacity'){
                iCur *= 100;
            }else{
                iCur = parseInt(iCur);
            }
            //设置速度
            var speed = (json[attr] - iCur) / 8;
            //速度取整
            speed = speed > 0 ? Math.ceil(speed) :  Math.floor(speed);
            //判断
            if(iCur != json[attr]){
                mStop = false;
            }
            //运动的逻辑
            if(attr == 'opacity'){
                ele.style.opacity = (iCur + speed) / 100;
                ele.style.filter = 'alpha(opacity='+(iCur +  speed)+')'
            }else{
                ele.style[attr] = iCur + speed + 'px';
            }
        }
        if(mStop){
            clearInterval(ele.timer);
            if(fn){
                fn();
            }
        }
    },30)
}