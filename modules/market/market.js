//相对于主页的html的路径
define(["jquery" ,"text!./modules/market/marketMo.html" ,"css!./modules/market/market.css","baidu","fly","lazy"],function($,marketPage){
    return {
        init: function(){
            $.getJSON("json/market.json",function(data){
                $("#market").html(marketPage);
                 var htmlStr = baidu.template("stuList",data);
                //添加数据到页面
                $("#market").html(htmlStr).show().siblings("div").hide();
                addcar1();
                numProd();
                $("#merList104749").show().siblings("ol").hide();
                $(".hand").show();
                lazyAll();
                chnage();
                });
            }
        }
    });
function chnage(){
     //添加点击事件使之菜单对应
        $(".main_one ul").on("click",function(e){
            e = e || window.event;
            //获取菜单标号
            $.getJSON("json/market.json",function(data){
            var n = e.target.attributes["num"].value;
            
           var numList =data.data.categories[n].id;
            $(".classNa").parents("ul").parents(".main_one").siblings(".main_two").find('#merList'+numList).show().siblings("ol").hide();
            //样式改变
            $(".classNa").parents("li").siblings().find(".classNa").removeClass("classN");
            $(".classNa").eq(n).addClass("classN");
        });
    });
}
//加入购物车效果
function addcar1() { 
    var offset = $("#end").offset();
    $(".addcar").on("click",function(event){ 
        
        var addcar = $(this); 
        var img = addcar.parents("dd").siblings().find('img').attr('src'); 
        var flyer = $('<img src="'+img+'" style="height:100px;width:100px;border-radius:50%;"/>'); 
        flyer.fly({ 
            start: { 
                left: event.clientX-200, //开始位置（必填）#fly元素会被设置成position: fixed 
                top: event.clientY-80 //开始位置（必填） 
            }, 
            end: { 
                left: offset.left+50, //结束位置（必填） 
                top: offset.top-20, //结束位置（必填） 
                width: 0, //结束时宽度 
                height: 0 //结束时高度 
            }, 
            onEnd: function(){ //结束回调
            } 
        }); 
    }); 
}; 
function lazyAll(){
    $("img.lazyAll").lazyload({
            //目标图片加载前显示额备用图片  相对于主页面的路径
            placeholder: "modules/market/imgs/bei.png",
            //外部盒子
            container:$(".main_two"),
           // 图片加载的效果  淡入淡出
            effect:"fadeIn"
        })
}
