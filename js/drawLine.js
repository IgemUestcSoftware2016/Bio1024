// $("#mainSvg").height($(window).height())
// $(window).resize(function() {
// 	$("#mainSvg").height($(window).height())
// });
var lastPath
var lastX, lastY
// drawOrNot()
document.onkeydown=function(event){
  var e = event || window.event || arguments.callee.caller.arguments[0];
  if(e && e.keyCode==27){ // 按 Esc 
    $('#mainSvg').unbind("mousemove")
    if ($(".path")) {
    	$(".path").remove()
    }
    lastPath = undefined
    lastX = undefined
   }
}; 
$(document).ready(function() {
	$("#main").click(function(event) {
		$('#mainSvg').css('z-index', '1');
	});
	$("#draggable").click(function(event) {
		$('#mainSvg').css('z-index', '0');
	});
	$('#mainSvg').click(function(event) {
		console.log(event)
		if (lastPath) {
			drawPath()
		}
		if (lastX) {
			var x = lastX
			var y = lastY
		} else {
			var x = posUnify(event.pageX-$('#mainSvg').offset().left)
			var y = posUnify(event.pageY-$('#mainSvg').offset().top)
		}

		var clickPos = $('<circle r="2" cx="' + x + '" cy="' + y + '" fill="black" stroke="black" stroke-width="1"/>')
		clickPos.addClass('clickPos')
		$("#mainSvg").append(clickPos)
		$("#mainSvg").html($("#mainSvg").html());

		$("#mainSvg").mousemove(function($mouse) {
			lastPath = createPath(x, y, $mouse)
				// console.log(lastPath)
		});

	});
});

function createPath(x, y, $mouse) {
	// console.log(x,y,$mouse.pageX,$mouse.pageY)
	$(".path").remove()
	var cx = posUnify($mouse.pageX-$('#mainSvg').offset().left)
	var cy = posUnify($mouse.pageY-$('#mainSvg').offset().top)
	if (Math.abs(cx - x) >= Math.abs(cy - y)) {
		var path = '<path class="path" d="M' + x + ' ' + y + ' L' + cx + ' ' + y + ' "stroke-width="3px" stroke="red" fill="yellow">'
		lastX = cx
		lastY = y
	} else {
		var path = '<path class="path" d="M' + x + ' ' + y + ' L' + x + ' ' + cy + ' "stroke-width="3px" stroke="red" fill="yellow">'
		lastX = x
		lastY = cy
	}
	$("#mainSvg").append(path)
	$("#mainSvg").html($("#mainSvg").html());
	// console.log(path)
	return path
}

function posUnify(x) {
	var gap = 25;
	var fuckNum = x % gap - gap / 2;
	if (fuckNum >= 0) {
		return x - x % gap + gap
	} else {
		return x - x % gap
	}
}

function drawPath() {
	var draw = $(lastPath)
	draw.removeClass('path')
	$("#mainSvg").append(draw[0])
		// console.log(draw[0])
	$("#mainSvg").html($("#mainSvg").html());
}

function drawOrNot() {
	// $(document).keypress(function(e) {
	// 	// var code = e.keyCode ? e.keyCode : e.which;
	// 	// if (code == 27 || code == 96) {
	// 	// 	console.log("hehe")
	// 	// }
	// 	console.log(e.keyCode)
	// });

}