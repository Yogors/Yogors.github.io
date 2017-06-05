function Bird(option) {
    this.context = option.context;
    this.img = option.img;
    this.x = 50;
    this.y = 0;
    this.img = option.img;
    this.birdWidth = this.img.width / 3;
    this.birdHeight = this.img.height;
    this.count = 0;
    this.acc = 0.0004;
    this.v = 0;
    this.maxAngle = 60;
    this.maxspeed = 0.7;
    this.lastTime = new Date();
}
Bird.prototype = {
    draw: function () {

        var currentTime = new Date();
        var t = currentTime - this.lastTime;
        var s = this.v * t + this.acc / 2 * t * t;

        this.v = this.v + this.acc * t;
        this.lastTime = currentTime;
        this.y += s;

        var degree = this.maxAngle / this.maxspeed * this.v;

        this.context.save();

        this.context.translate(this.x + this.birdWidth / 2, this.y + this.birdHeight / 2);

        this.context.rotate(Math.PI / 180 * degree);
        this.context.drawImage(this.img, this.birdWidth * this.count, 0, this.birdWidth, this.birdHeight, -this.birdWidth / 2, -this.birdHeight / 2, this.birdWidth, this.birdHeight);

        this.context.restore();

        this.count++;
        if (this.count == 3) {
            this.count = 0;
        }
    }
}