class Sprite {
    constructor (config) {
        // Set up the image
        this.image = new Image();
        this.image.src = config.src;
        this.image.onload = () => {
            this.isLoaded = true;
        }

        //Shadow
        this.shadow = new Image();
        this.useShadow = true;
        this.useShadow ? this.shadow.src = "/img/characters/shadow.png": null;
        this.shadow.onload = () => { this.isShadowLoaded = true };
        // Configure animation and Initial state
        this.animations = config.animations || {
            idleDown: [ [0,0] ]
        }
        this.currentAnimation = config.currentAnimation || "idleDown";
        this.currentAnimationFrame = 0;
        // Reference the game object
        this.gameObject = config.gameObject;
    }


    draw(ctx){
        const x = this.gameObject.x * 16 - 8;
        const y = this.gameObject.y * 16 - 18;

        this.isShadowLoaded && ctx.drawImage(this.shadow, x,y);
        this.isLoaded && ctx.drawImage(this.image, 
            0,0,
            32,32,
            x,y,
            32,32
        ); 
    }
}