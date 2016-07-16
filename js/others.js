//右键点击事件
$('div').chromeContext({
	items: [{
		title: '连线',
		onclick: function() {
			console.log('success!.');
		}
	}, {
		separator: true
	}, {
		title: '改变距离',
		onclick: function() {
			console.log('Oh no!.');
		}
	}, {
		title: '改变大小',
		onclick: function() {
			console.log('Oh no!.');
		}
	}, {
		title: '改变心态',
		onclick: function() {
			console.log('Oh no!.');
		}
	}]
});

//拖动事件
dragula([$('#leftSide')[0], $('#main')[0]], {
	copy: function(el,sourse) {
		return sourse === $('#leftSide')[0]
	}
})
// dragula([document.getElementById($('#leftSide')[0])]);//click and drag
dragula([document.getElementById('main')], {
	"removeOnSpill": true 	//可以拖动删除
})