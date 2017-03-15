//相对于主页的home.html的路径
define("index",["jquery","text!./modules/index/index.html","css!./modules/index/index.css","baidu","fly","lazy"],function($,indexPage){
	return {
		init:function(){
			// 第二部分
			$.getJSON("json/index.json",function(data){
				$("#index").html(indexPage);
				var htmlStr = baidu.template("stuListTem",data);
				//添加数据到页面
				$("#index").html(htmlStr).show().siblings("div").hide();
                 $(".hand").show();
                lazyAll1();
				addcar();
                numProd();
				});
		}
	}
});

//加入购物车效果
function addcar() { 
    var offset = $("#end").offset();
    $(".addcar1").on("click",function(event){ 
        var addcar1 = $(this); 
        var img = addcar1.siblings(".main_in1").find("img").attr('src'); 
        var flyer = $('<img src="'+img+'" style="height:100px;width:100px;border-radius:50%;"/>'); 
        flyer.fly({ 
            start: { 
                left: event.clientX-100, //开始位置（必填）#fly元素会被设置成position: fixed 
                top: event.clientY-170 //开始位置（必填） 
            }, 
            end: { 
                left: offset.left+50, //结束位置（必填） 
                top: offset.top, //结束位置（必填） 
                width: 0, //结束时宽度 
                height: 0 //结束时高度 
            }, 
            onEnd: function(){ //结束回调
            } 
        });

    }); 
}; 
function lazyAll1(){
    $("img.lazyAll").lazyload({
            //目标图片加载前显示额备用图片
            placeholder: "modules/index/imgs/bei.png",
            //图片加载的效果  淡入淡出
            effect:"fadeIn"
        })
}
