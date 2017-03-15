//配置路径信息
require.config({
	paths:{
		"jquery":"js/jquery-1.11.2",
		"index":"modules/index/index",
		"market":"modules/market/market",
		"cat":"modules/cat/cat1",
		"mine":"modules/mine/mine",
		"text":"js/text",
		"css":"js/css",
		"backbone":"js/backbone",
		"underscore":"js/underscore",
		"fly":"js/jquery.fly.min",
		"baidu":"js/baiduTemplate",
		"lazy":"js/jquery.lazyload"

	}
});
//开启监听 
require(["router"],function(){
	Backbone.history.start();
});
//购物车数目添加函数
function numProd(){
	var i = $("#numPro").html();
	$(".addAll").on("click",function(){
	 	$("#numPro").show();
         i++;
        $("#numPro").html(i);

        var addcarrr = $(this);
        var srcNa = addcarrr.siblings(".main_in1").find("img").attr('src') || addcar.parents("dd").siblings().find('img').attr('src');
        // var moneyNa = addcarrr.addcarrr.siblings(".main_in4").find("a").html();
        // console.log(srcNa); 

  //       for(var i = 0;i<9;i++){
		// var htmlStrPro = '<div  class="xin1_five"><dl><input type="checkbox"><dt><img src='++'/></dt><dd><span>爱鲜蜂打火机</span><br/><span >￥<strong id="money">2</strong ></span><span id="jianNum"></span><span id="addNum" style="font-size:16px;color:red;"></span><span id="addMoney"></span></dd></dl></div>'
		// };
	});
};

	
	
	

