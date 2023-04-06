class Player {
    constructor(parentCanvas) {
        this.width = 30;
        this.height = 30;

        this.image = Assets.playerAsset;

        this.context = Level.context;
        this.x = Level.canvas.width / 3;
        this.y = Level.getFloorHeight();

        this.dt = 1 / Level.frameRate;
        this.verticalVelocity = 0;
        this.JUMP_VELOCITY = -10;
        this.ACCELERATION = this.JUMP_VELOCITY*this.JUMP_VELOCITY / ( 2 * this.height );
    }

    render() {
        this.context.drawImage(
            this.image,
            this.x - this.width/2, this.y - this.height,
            this.width, this.height
        );
    }

    update() {
        this.y += this.verticalVelocity * this.dt;
        console.log(this.y)
        this.verticalVelocity += this.ACCELERATION * this.dt;
        if (this.verticalVelocity > this.JUMP_VELOCITY) {
            this.verticalVelocity = 0;
            this.y = Level.getFloorHeight();
        }
    }

    jump() {
        if (this.verticalVelocity !== 0) return;
        this.verticalVelocity = this.JUMP_VELOCITY;
    }
};