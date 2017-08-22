//点击变化颜色
$(".navbar nav a").click(function(){
//	sibling过滤,找到没点击
	$(this).addClass("currentpage").siblings().removeClass("currentpage");
});

var down=false;

//滚动监听
$(window).scroll(function(){
//	看不见导航栏就固定
    if($(this).scrollTop()>100){
//	让导航栏固定
        $(".navbar").addClass("fixed");
//     制作一次动画效果
        if(down==false){
        	$(".navbar").css({"top":"-40px"});
        	$(".navbar").animate({"top":"0"},{duration:500});
     	down=true;
        }
   }else{
   	down=false;
   	$(".navbar").removeClass("fixed");
   }
});
/////////////////////////////////////////////////
var block = document.createElement("div");
$(".imgfade .content .titles").append(block);
$(block).css({
	"position":"absolute",
	"width":"150px",
	"height":"2px",
	"left":"0px",
	"bottom":"10px",
	"background":"red"
});
$(".imgfade .content .titles p").on("mouseenter",function(){
	$(block).animate({"left":150*$(this).data("index")+"px"},200);
	$(".imgfade .content .images img").eq($(this).data("index")).fadeIn(200).siblings().fadeOut(200);
});
//-------------------------------------------
$(".navleft ul li").click(function(){
     $(this).addClass("uncurrent").sibling().removeClass("current");
})
//边边栏的显示，滚动超过600就显示，滚上去就消失
var show = false;
$(window).on("scroll",function(){
	if($(this).scrollTop()>600){
		if(!show){
			$(".navleft").fadeIn(300);
			show = true;
		}
	}else{
		if(show){
			$(".navleft").fadeOut(300);
			show = false;
		}
	}
})
