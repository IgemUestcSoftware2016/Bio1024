$("#mySvg").height($(window).height())
$(window).resize(function() {
	$("#mySvg").height($(window).height())
});
var lastPath
var lastX, lastY
// drawOrNot()
document.onkeydown=function(event){
  var e = event || window.event || arguments.callee.caller.arguments[0];
  if(e && e.keyCode==27){ // 按 Esc 
    $('#mySvg').unbind("mousemove")
    if ($(".path")) {
    	$(".path").remove()
    }
    lastPath = undefined
    lastX = undefined
   }
}; 
$(document).ready(function() {
	$('#mySvg').click(function(event) {
		if (lastPath) {
			drawPath()
		}
		if (lastX) {
			var x = lastX
			var y = lastY
		} else {
			var x = posUnify(event.pageX)
			var y = posUnify(event.pageY)
		}

		var clickPos = $('<circle r="10" cx="' + x + '" cy="' + y + '" fill="red" stroke="black" stroke-width="1"/>')
		clickPos.addClass('clickPos')
		$("#mySvg").append(clickPos)
		$("#mySvg").html($("#mySvg").html());

		$("#mySvg").mousemove(function($mouse) {
			lastPath = createPath(x, y, $mouse)
				// console.log(lastPath)
		});

	});
});

function createPath(x, y, $mouse) {
	// console.log(x,y,$mouse.pageX,$mouse.pageY)
	$(".path").remove()
	var cx = posUnify($mouse.pageX)
	var cy = posUnify($mouse.pageY)
	if (Math.abs(cx - x) >= Math.abs(cy - y)) {
		var path = '<path class="path" d="M' + x + ' ' + y + ' L' + cx + ' ' + y + ' "stroke-width="3px" stroke="red" fill="yellow">'
		lastX = cx
		lastY = y
	} else {
		var path = '<path class="path" d="M' + x + ' ' + y + ' L' + x + ' ' + cy + ' "stroke-width="3px" stroke="red" fill="yellow">'
		lastX = x
		lastY = cy
	}
	$("#mySvg").append(path)
	$("#mySvg").html($("#mySvg").html());
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
	$("#mySvg").append(draw[0])
		// console.log(draw[0])
	$("#mySvg").html($("#mySvg").html());
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