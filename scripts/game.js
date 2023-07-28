// DRAW IMAGE METHOD const spriteHeight = 523; const spriteWidth = 575; const playerImage = new Image(); PlayerImage.scr = 'https://www.frankslaboratory.co.uk/downloads/shadow_dog.png'; let frameX = 0; let frameY = 0; function animate(){ ctx.clearRect(0, 0, CANVAS_WITH, CANVAS_Hight); ctx.drawImage(PlayerImage, frameX, frameY, spriteWidth, spriteHeight, 0, 0,CANVAS_WIDTH, CANVAS_HEIGHT); if (frameX < 6) frameX++ else frameX = 0; requestAnimationFrame(animate); }; //

const canvas = document.getElemntById('canvas1');
const ctx = canvas.getContext('2d');
/* Allow Inspect */
console.log(ctx);
/* Size of canvas */
const CANVAS_WIDTH = canvas.with = 600;
const CANVAS_HEIGHT = canvas.height = 600;

// test//
var myImage = new Image();
myImage.src = "https://www.frankslaboratory.co.uk/downloads/shadow_dog.png";
myImage.addEventListener("load", loadImage, false);
 
function loadImage(e) {
  context.drawImage(myImage, 0, 0);
} 


