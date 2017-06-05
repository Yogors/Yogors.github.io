function Land(option) {
    this.context = option.context;
    this.img = option.img;
    this.x = option.x;
    this.width = this.img.width;
    this.height = this.img.height;
    this.y = cs.height - this.height;
    this.speed = 2;
}
Land.prototype = {
    constructor: Land,
    draw: function () {
        context.drawImage(this.img, this.x, this.y);
        this.x -= this.speed;
        if (this.x < -this.width) {
            this.x += 6 * this.width;
        }
    }
}