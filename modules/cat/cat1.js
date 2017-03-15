//相对于主页的home.html的路径
define(["jquery","text!./modules/cat/cat1.html","css!./modules/cat/cat1.css","baidu","fly","lazy"],function($,catPage){
	return {
		init:function(){
			// 第二部分
			$("#cat").html(catPage);
				var htmlStr = baidu.template("catList",{});
				//添加数据到页面
			$("#cat").html(htmlStr).show().siblings("div").hide();
             $(".hand").hide();
             moneyChange();
		}
	}
});
function moneyChange(){
	var n =0;
	$("#addMoney").on("click",function(){
		n++;
		$("#addNum").html(n);
		var moneyal = Number($("#money").html())*n;

		$("#allMoney").html(moneyal);
	});
	$("#jianNum").on("click",function(){
		n--;
		$("#addNum").html();
	});
};