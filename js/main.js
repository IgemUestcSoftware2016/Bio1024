var elemToBeGene = '<div class="myblock block1" id="draggable"><button class="clickCir clickCirTop"></button><button class="clickCir clickCirRight"></button><button class="clickCir clickCirBottom"></button><button class="clickCir clickCirLeft"></button></div>'
var kindof = 3
$("#leftSide").ready(function() {
	for (var i = 3; i >= 0; i--) {
		$("#leftSide").append(elemToBeGene)
	}
});
// $(document).ready(function() {
// 	$(".clickCir").click(function() {
// 	});
// });

$(document).ready(function() {
	$("body").mousemove(function(event) {
		// showPos(event)
	});
	$(".main").mousemove(function(event) {
		//显示当前的鼠标绝对坐标
		// var x,y = showPos(event)
		// var $pos = showElePos($(".main"))
		// var y = $pos.top;
		// var x = $pos.left;
		// console.log("top:"+y,"left:"+x)
	});
	$(".main").on('click', '.clickCir', function(event) {
		checkForDraw($(this))
		console.log($(".activeCir").length)
		if ($(".activeCir").length == 2) {
			$(".clickCir").attr('disabled', 'disabled');
			$(".activeCir").removeAttr('disabled')
			readyForDraw()
		} else {
			$(".clickCir").removeAttr('disabled')
		}
		//*****7.12 13:19
		// if (clickTime%2 == 0) {
		// 	click1($(this))
		// }else if (clickTime%2==1) {
		// 	click2($(this))
		// }



		// else if(clickTime%3==2){
		// 	click3($(this))
		// }
		// clickTime++;
		// console.log(clickTime)
		//*****7.12 13:19
	});
	// rightClick($("body"))	
});

function showPos(event) {
	var x = event.clientX
	var y = event.clientY
	return x, y
}

function showElePos($elem) {
	var $pos = $elem.position()
	return $pos;
}

function followMyArr() {

}

function leaveMyArr() {

} //跟随鼠标的时间日后再写
function generateM(x, y) { //生成与clickCir 相同位置的M
	var path = '<path d=M"' + x + " " + y + '" stroke-width="2" stroke="green" fill="red"/>'
} //生成线路日后在写

function checkForDraw($this) {
	if (elemClickOnceCheck($this)) {
		$this.removeClass('activeCir')
		console.log("click double, R U kidding?")
		$("#drawline").attr('disabled', 'disabled');
	} else {
		console.log("Hello?")
		$this.addClass('activeCir')
	}
}

function readyForDraw() { //日后更改，复用
	var $ele1 = $(".activeCir").eq(0)
	var $ele2 = $(".activeCir").eq(1)
	if ($ele1 && $ele2) {
		var ele1Pos = showElePos($ele1)
		var ele2Pos = showElePos($ele2)
		nowElem.y1 = ele1Pos.top;
		nowElem.x1 = ele1Pos.left;
		nowElem.y2 = ele2Pos.top;
		nowElem.x2 = ele2Pos.left;
		if (nowElem.y1, nowElem.x1, nowElem.y2, nowElem.x2) {
			$("#drawline").removeAttr('disabled')
			$("#drawline").one('click', function(event) {
				drawLine(nowElem.y1, nowElem.x1, nowElem.y2, nowElem.x2);
				$("#drawline").attr('disabled', 'disabled')
			});
		} else {
			console.log("what?!!")
		}
	}
	return $ele1, $ele2
}

function drawLine(y1, x1, y2, x2) {
	// console.log("what")
	// var X1 = $('.myblock').eq(0).position().left;
	// var Y1 = $('.myblock').eq(0).position().top;
	// var X2 = $('.myblock').eq(1).position().left;
	// var Y2 = $('.myblock').eq(1).position().top;
	// console.log(X1,Y1,X2,Y2)
	var svgElem = '<path d="M' + x1 + ' ' + y1 + ' L ' + x2 + ' ' + y2 + '" stroke-width="10" stroke="black"/>'
	$('#mainSvg').append(svgElem)
	$("body").html($("body").html()); //强制body刷新
	console.log("哈哈哈")
	$(".activeCir").removeClass('activeCir')
	$(".clickCir").removeAttr('disabled');


}

function rightClick($elem) {
	$elem.mousedown(function(event) {
		if (event.which == 3) {
			alert("I am right click")
		}
	});
}
// 	function click1($this) {
// 		// console.log("fuck HTML")
// // folloMywArr($(this))
// // $(this).css('background-color', 'black');
// if (elemClickOnceCheck($this)) {
// 			//click double
// 		$tempElem.removeClass('activeCir').removeClass('activeCir1')
// 		console.log("click double, R U kidding?")
// 		$("#drawline").attr('disabled', 'disabled');
// 		$tempElem = "what";
// 		clickTime --;
// 	}else{
// 		console.log("Hello?")
// 		$this.addClass('activeCir').addClass("activeCir1")
// 		$tempElem = $this
// 		$this.myNum = 1
// 	}
// 	}
// 	function click2($this) {
// 		if (elemClickOnceCheck($this)) {
// 			//click double
// 		$tempElem.removeClass('activeCir').removeClass('activeCir1')
// 		console.log("click double, R U kidding?")
// 		$("#drawline").attr('disabled', 'disabled');
// 		$tempElem = "what?";
// 		clickTime--;
// 	}else{
// 	//click once
// 		$this.addClass('activeCir').addClass("activeCir2")
// 		setTimeout(function() {
// 			readyForDraw();
// 			console.log("yes!")
// 		}, 10);
// 	}
// 	}
function elemClickOnceCheck($elem) {
	if ($elem.hasClass('activeCir')) {
		return true
	} else {
		return false
	}
}