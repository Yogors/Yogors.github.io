function Time(option) {
    this.context = option.context;
    this.startTime = new Date();
    this.context.textAlign = 'right';
    this.context.textBaseline = 'top';
    this.context.font = "20px Microsoft yahei"
}
Time.prototype = {
    draw: function () {
        var currentTime = new Date();
        var duration = (currentTime - this.startTime) / 1000;
        var h = Math.floor(duration / 3600);
        var m = Math.floor(duration % 3600 / 60);
        var s = Math.floor(duration % 60);
        var text = "你已经坚持了" + h + "时" + m + "分" + s + "秒";
        this.context.fillText(text, cs.width, 0);
    }
}