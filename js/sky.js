function Sky(option) {
    this.img = option.img;
    this.context = option.context;
    this.x = option.x;
    this.y = 0;
    this.speed = 2;
}
Sky.prototype = {
    draw: function () {
        context.drawImage(this.img, this.x, this.y);
        this.x -= this.speed;
        if (this.x < -this.img.width) {
            this.x += this.img.width * 2;
        }
    }
}