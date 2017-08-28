/*
var w = window.innerWidth;
var h = window.innerHeight;
var particle = 1000;
var xyz = [1000][1000][1000];
*/

/*
粒子的思路：
1000个粒子，每一个都有x，y，z
x和y分别是浏览器高和宽，z就自定义个100之类的
x和y决定粒子的横纵坐标，z决定大小（看起来像是远近）

若鼠标移动，则所有粒子加/减鼠标坐标的几分之几？（也要考虑z，否则效果看起来会是所有粒子都在一个平面上的感觉，就错了）
给粒子坐标加一个[-5, 5]范围随机？让它们看起来是在浮动的样子？

查查怎么获取鼠标坐标
查查怎么画出粒子
JS画图
*/

$(document).ready(function() {
    var _width = [100];
    var _padding = [100];
    for(var i = 1; i <= 60; i++) {
        _width[i] = $("." + i).css("width");
        _padding[i] = $("." + i).css("padding-top");
    }

    var randomW = [100];
    var randomP = [100];

    function particle(){
        /*
        $(".inner").css({"color": "rgb("
        + parseInt(Math.random() * 256) + ", "
        + parseInt(Math.random() * 256) + ", "
        + parseInt(Math.random() * 256) + ")"});
        */
        if($(".inner").css("color") == "rgb(255, 255, 255)") {
            $(".inner").css({"color": "rgb(255, 0, 0)"});
        }
        else if($(".inner").css("color") == "rgb(255, 0, 0)") {
            $(".inner").css({"color": "rgb(255, 255, 0)"});
        }
        else if($(".inner").css("color") == "rgb(255, 255, 0)") {
            $(".inner").css({"color": "rgb(0, 255, 0)"});
        }
        else if($(".inner").css("color") == "rgb(0, 255, 0)") {
            $(".inner").css({"color": "rgb(0, 255, 255)"});
        }
        else if($(".inner").css("color") == "rgb(0, 255, 255)") {
            $(".inner").css({"color": "rgb(0, 0, 255)"});
        }
        else if($(".inner").css("color") == "rgb(0, 0, 255)") {
            $(".inner").css({"color": "rgb(255, 0, 255)"});
        }
        else if($(".inner").css("color") == "rgb(255, 0, 255)") {
            $(".inner").css({"color": "rgb(255, 255, 255)"});
        }

        /*
        for(var i = 1; i <= 60; i++) {
            $("." + i).css({
                "width": (((Math.random() - 0.5) * 150) + parseInt($("." + i).css("width"))) + "px",
                //"width": ((Math.random() - 0.5) * 100) + 75 + "%",
                "padding-top": (((Math.random() - 0.85) * 150) + parseFloat($("." + i).css("padding-top"))) + "px"
                //"padding-top": ((Math.random() - 0.5) * 1) + "vh"
            });
        }
        */
        for(var i = 1; i <= 60; i++) {
            if(parseInt($("." + i).css("width")) == parseInt(_width[i]) && parseInt($("." + i).css("padding-top")) == parseInt(_padding[i])) {
                randomW[i] = parseInt(Math.random() * 20) + parseInt($("." + i).css("width") + "px");
                randomP[i] = parseInt(Math.random() * 20) + parseInt($("." + i).css("padding-top") + "px");
                $("." + i).css({"width": randomW[i]});
                $("." + i).css({"padding-top": randomP[i]});
            }
            else if(parseInt($("." + i).css("width")) == parseInt(randomW[i]) && parseInt($("." + i).css("padding-top")) == parseInt(randomP[i])) {
                $("." + i).css({"width": _width[i]});
                $("." + i).css({"padding-top": _padding[i]});
            }
        }
    };

    (function animate() {
        particle();
        requestAnimationFrame(animate);
    })();
});