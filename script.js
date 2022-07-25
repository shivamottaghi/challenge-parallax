const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 700;
const CANVAS_HEIGHT = canvas.height = 600;
const GAME_SPEED = 5;

const image1 = new Image();
image1.src = 'images/01_ground.png';
const image2 = new Image();
image2.src = 'images/02_trees and bushes.png';
const image3 = new Image();
image3.src = 'images/03_distant_trees.png';
const image4 = new Image();
image4.src = 'images/04_bushes.png';
const image5 = new Image();
image5.src = 'images/05_hill1.png';
const image6 = new Image();
image6.src = 'images/06_hill2.png';
const image7 = new Image();
image7.src = 'images/07_huge_clouds.png';
const image8 = new Image();
image8.src = 'images/08_clouds.png';
const image9 = new Image();
image9.src = 'images/09_distant_clouds1.png';
const image10 = new Image();
image10.src = 'images/10_distant_clouds.png';
const image11 = new Image();
image11.src = 'images/11_background.png';

class Layer {
    constructor(image , speedModifier) {
        this.x = 0;
        this.y = 0;
        this.image = image;
        this.speedModifier = speedModifier;
        this.speed = GAME_SPEED * this.speedModifier;
        this.width = 2048;
        this.height = 600;
        this.x2 = this.width;
    }
    update(){
        if (this.x <= -this.width){
            this.x = this.width + this.x2 - this.speed;
        }
        if (this.x2 <= - this.width){
            this.x2 = this.width + this.x - this.speed;
        }
        this.x -= this.speed;
        this.x2 -= this.speed;
    }
    draw(){
        ctx.drawImage(this.image , this.x, this.y, this.width, this.height);
        ctx.drawImage(this.image , this.x, this.y, this.width, this.height);
    }
}



