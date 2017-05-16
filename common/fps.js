
var FPS = function(fpsCount) {
	this.interval = 1000 / fpsCount;
	this.checkPoint = new Date();
	this.fps = 0;
}
FPS.prototype = {
	check:function() {
		var now = new Date();
		this.fps = 1000 / (now - this.checkPoint);
		this.checkPoint = new Date();
	},
	getInterval:function() {
		var elapsed = new Date() - this.checkPoint;
		var interval = (this.interval - elapsed)
		var ret = (interval > 10) ? interval : 10;
		return ret;
	},
	show:function() {

		ctx.fillStyle = "white";
		ctx.fillRect(15, 10, 60, 20);
		ctx.fillStyle = "black";
		ctx.fillText("FPS: " + this.fps.toFixed(2), 20, 20);
	}
}
