function Pipe(option) {
    this.context = option.context;
    this.bottomImg = option.bottomImg;
    this.topImg = option.topImg;
    this.x = option.x;
    this.y = -150 - Math.random() * 200;
    this.colGap = 150;
    this.speed = 2;
}
Pipe.prototype = {
    draw: function () {
        context.rect(this.x, this.y, this.topImg.width, this.topImg.height);
        context.rect(this.x, this.y + this.topImg.height + this.colGap, this.bottomImg.width, this.bottomImg.height);
        context.drawImage(this.topImg, this.x, this.y);
        context.drawImage(this.bottomImg, this.x, this.y + this.topImg.height + this.colGap);
        this.x -= this.speed;
        if (this.x < -this.bottomImg.width) {
            this.x += 6 * 200;
            this.y = -150 - Math.random() * 150;
        }
    }
}