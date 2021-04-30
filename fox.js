const { thistle } = require("color-name")
const { SSL_OP_EPHEMERAL_RSA } = require("node:constants")

function Fox () {
    this.pos = createVector(random(windowWidth), random(windowHeight))
    this.aggression = random(1)
    this.vel = createVector(0, 0)
    this.hasTarget = false
    this.target = null

    // this.update = () => {} 

    this.show = () => {
        push();
        noStroke();
        var white = color(255);
        var red = color(255, 0, 0);
        var col = lerpColor(white, red, this.aggression);
        fill(col);
        stroke(255)
        translate(this.pos.x, this.pos.y);
        ellipse(15, 15, 20, 20);
        pop();
    }

    this.update = async () => {
        if (this.hasTarget) {
            if (this.pos.x < this.target.pos.x) {
                this.vel.x = 1
            } else if (this.pos.x > this.target.pos.x) {
                this.vel.x = -1
            } else {
                this.vel.x = 0
            }
            
            if (this.pos.y < this.target.pos.y) {
                this.vel.y = 1
            } else if (this.pos.y > this.target.pos.y) {
                this.vel.y = -1
            } else {
                this.vel.y = 0
            }

            this.pos.add(this.vel)
            if ((Math.abs(this.pos.x - this.target.pos.x) < 5) && (Math.abs(this.pos.y - this.target.pos.y) < 5)) {
                this.vel.x = 0
                this.vel.y = 0
                this.hasTarget = false
            }
        }
    }

}