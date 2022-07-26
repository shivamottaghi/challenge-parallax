const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width;
const CANVAS_HEIGHT = canvas.height;
console.log(CANVAS_HEIGHT);
const GAME_SPEED = 5;
const IMAGE_WIDTH = 512;
const IMAGE_HEIGHT = 256;
ctx.imageSmoothingEnabled = false;
const image1 = new Image();
image1.src = 'images/Hills Layer 01.png';
const image2 = new Image();
image2.src = 'images/Hills Layer 02.png';
const image3 = new Image();
image3.src = 'images/Hills Layer 03.png';
const image4 = new Image();
image4.src = 'images/Hills Layer 04.png';
const image5 = new Image();
image5.src = 'images/Hills Layer 05.png';
const image6 = new Image();
image6.src = 'images/Hills Layer 06.png';
/*const image7 = new Image();
image7.src = 'images/07_huge_clouds.png';
const image8 = new Image();
image8.src = 'images/08_clouds.png';
const image9 = new Image();
image9.src = 'images/09_distant_clouds1.png';
const image10 = new Image();
image10.src = 'images/10_distant_clouds.png';
const image11 = new Image();
image11.src = 'images/11_background.png';
const playerRun =new SuperGif();
playerRun.src = 'images/run.gif';*/

const playerRun = new Image();
playerRun.src = 'images/Run.png';
console.log(Math.round(CANVAS_HEIGHT * IMAGE_WIDTH / IMAGE_HEIGHT));

class Layer {
    constructor(image , speedModifier) {
        this.x = 0;
        this.y = 0;
        this.image = image;
        this.speedModifier = speedModifier;
        this.speed = GAME_SPEED * this.speedModifier;
        this.width = Math.round(CANVAS_HEIGHT * IMAGE_WIDTH / IMAGE_HEIGHT);
       // this.width = 500;
        this.height = CANVAS_HEIGHT;
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
        ctx.drawImage(this.image , this.x2, this.y, this.width, this.height);
    }
}
const layer1 = new Layer(image1 , 0.1);
const layer2 = new Layer(image2 , 0.2);
const layer3 = new Layer(image3 , 0.3);
const layer4 = new Layer(image4 , 0.4);
const layer5 = new Layer(image5 , 0.5);
const layer6 = new Layer(image6 , 0.6);
/*const layer7 = new Layer(image7 , 0.4);
const layer8 = new Layer(image8 , 0.3);
const layer9 = new Layer(image9 , 0.2);
const layer10 = new Layer(image10 , 0.1);*/
const layers = [layer1 , layer2 , layer3 , layer4 , layer5 , layer6 /*, layer7 , layer8 , layer9 , layer10*/];
let playerSw = 150;
let playerSx = 0;
let i = 0;
const main = () => {
    ctx.clearRect(0 , 0 , CANVAS_WIDTH, CANVAS_HEIGHT);
    layers.forEach(layer => {
        layer.update();
        layer.draw();
    });
    ctx.drawImage(playerRun, playerSx , 0 , 150 , 150 , 0 , 300 , 400, 400);
    if (i%5 == 4){
        playerSx+=playerSw;
        i=0;
    }
    if (playerSx> 1050){
        playerSx = 0;
    }
    i++;
   // ctx.drawImage(playerRun , 350, 250);
    requestAnimationFrame(main);
}

main();
