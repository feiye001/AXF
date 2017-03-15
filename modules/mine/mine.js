define(["jquery","text!./modules/mine/mine.html","css!./modules/mine/mine.css","baidu","fly","lazy"],function($,minePage){
    return {
        init: function(){
            //添加数据到页面
            $("#mine").html(minePage);
             var htmlStr = baidu.template("stuListMine",{});
            $("#mine").html(htmlStr).show().siblings("div").hide();
            $(".hand").hide();
            }
        }
    });
 