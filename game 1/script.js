//element of the pages
const block1 = document.getElementById("block1");
const block2 = document.getElementById("block2");
const block2 = document.getElementById("block2");
const character = document.getElementById("character");
this.speedX = 0;
this.speedY = 0;

// variables for the games
let counter = 0;

const speed = 2;
let direction = 0;
let chLeft = 200

// time management
setInterval(() => {
  chLeft = chLeft + (speed * direction)
  // console.log(chLeft)
  character.style.left = chLeft + "px"
},1000 / 40 )

// input management
document.onkeydown = (e) => {
  if (e.key ==="ArrowLeft"){
    direction = -3
  }
  if (e.key ==="ArrowRight"){
    direction = 3
  }
}

document.onkeyup = () => {
direction = 0
}