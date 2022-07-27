const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width;
const CANVAS_HEIGHT = canvas.height;
console.log(CANVAS_HEIGHT);
const GAME_SPEED = 9;
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
const playerRun = new Image();
playerRun.src = 'images/Run.png';
const playerJump = new Image();
playerJump.src = 'images/jumpHunter.png';
const playerFall = new Image();
playerFall.src = 'images/Fall.png';
console.log(Math.round(CANVAS_HEIGHT * IMAGE_WIDTH / IMAGE_HEIGHT));

let jumpFlag = false;
let runFlag = false;

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

class Player {
    constructor(imageRun, /*imageFight1, imageFight2 , imageIdle,*/  imageJump , imageFall) {
        this.sw = 150;
        this.dw = 300;
        this.imageRun = imageRun;
        /*this.imageFight1 = imageFight1;
        this.imageFight2 = imageFight2;
        this.imageIdle = imageIdle;*/
        this.imageJump = imageJump;
        this.imageFall = imageFall;
        this.jumpCounter = 0;
        this.runCounter = 0;
    }
    jump(){
        ctx.drawImage(playerJump, playerSx , 0 , 150 , 150 , 0 , jumpDy , 400, 400);
        if (jumpFrameCounter == 15){
            playerSx+=playerSw;
            this.jumpCounter ++;
            jumpFrameCounter=0;
        }
        if (playerSx ==150 || playerSx == 300){
            jumpDy = 200;
        }else {
            jumpDy = 300;
        }
        if (playerSx> 450){
            playerSx = 0;
            jumpFlag = false;
        }
        jumpFrameCounter++;
        /*switch (this.jumpCounter){
            case ((this.jumpCounter>= 0) && (this.jumpCounter< 5)):
                ctx.drawImage(this.imageJump , 0 , 0 , this.sw , this.sw, 0 , 300 , this.dw  , this.dw);
                this.jumpCounter ++;
                console.log(this.jumpCounter);
                break;
            case ((this.jumpCounter>=5) && (this.jumpCounter< 10)):
                ctx.drawImage(this.imageJump, 150 , 0 , this.sw, this.sw, 0 , 300, this.dw, this.dw);
                this.jumpCounter ++;
                break;
            case ((this.jumpCounter>=10) && (this.jumpCounter< 15)):
                ctx.drawImage(this.imageFall, 0 , 0 , this.sw, this.sw, 0 , 300, this.dw, this.dw);
                this.jumpCounter ++;
                break;
            case ((this.jumpCounter>=15) && (this.jumpCounter< 20)):
                ctx.drawImage(this.imageJump, 150 , 0 , this.sw, this.sw, 0 , 300, this.dw, this.dw);
                this.jumpCounter++;
                if (this.jumpCounter == 20){
                    jumpFlag = false;
                }
                break;
        }*/
    }
    run(){

    }
}
 window.addEventListener('keydown', (e)=>{
     if (e.key = 'Space'){
         console.log('jump');
         playerSx = 0;
         jumpFlag = true;
     }
 });

const layer1 = new Layer(image1 , 0.1);
const layer2 = new Layer(image2 , 0.2);
const layer3 = new Layer(image3 , 0.3);
const layer4 = new Layer(image4 , 0.4);
const layer5 = new Layer(image5 , 0.5);
const layer6 = new Layer(image6 , 0.6);

const player = new Player(playerRun , playerJump , playerFall);

const layers = [layer1 , layer2 , layer3 , layer4 , layer5 , layer6 /*, layer7 , layer8 , layer9 , layer10*/];
let playerSw = 150;
let playerSx = 0;
let frameCounter = 0;
let jumpDy = 300;
let jumpFrameCounter =0;
const main = () => {
    ctx.clearRect(0 , 0 , CANVAS_WIDTH, CANVAS_HEIGHT);
    layers.forEach(layer => {
        layer.update();
        layer.draw();
    });
    if (jumpFlag){
        /*ctx.drawImage(playerJump, playerSx , 0 , 150 , 150 , 0 , jumpDy , 400, 400);
        if (jumpFrameCounter == 20){
            playerSx+=playerSw;
            jumpFrameCounter=0;
        }
        if (playerSx ==150 || playerSx == 300){
            jumpDy = 200;
        }else {
            jumpDy = 300;
        }
        if (playerSx> 450){
            playerSx = 0;
            jumpFlag = false;
        }
        jumpFrameCounter++;*/
        player.jump();
        console.log('playerSx: ' + playerSx);
        console.log('jumpFlag: '+ jumpFlag);
        /*player.jump();
        console.log('jump');*/
    }else{
        ctx.drawImage(playerRun, playerSx , 0 , 150 , 150 , 0 , 300 , 400, 400);
        //ctx.drawImage(playerFall, playerSx , 0 , 150 , 150 , 0 , 300 , 400, 400);
        if (frameCounter == 4){
            playerSx+=playerSw;
            frameCounter=0;
        }
        if (playerSx> 1050){
            playerSx = 0;
        }
        frameCounter++;
    }
    requestAnimationFrame(main);
}

main();
