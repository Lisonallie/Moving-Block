
var snake = null;
var food = null;
var slither = document.querySelector("#snake > .snake");
var mouse = document.querySelector("#food > .mouse");
var body = document.getElementById("grass");
x = body.width / 2;
y = body.height / 2;

function init() {
    snake = document.getElementById("snake");
    snake.style.position = 'relative';
    snake.style.left = '0px';
    snake.style.top = '0px';
    food = document.getElementById("food");
    food.style.position = 'relative';
}


function getKeyAndMove(e) {
    var key_code = e.which || e.keyCode;
    switch (key_code) {
        case 37: //left arrow key
            moveLeft();
            break;
        case 38: //Up arrow key
            moveUp();
            break;
        case 39: //right arrow key
            moveRight();
            break;
        case 40: //down arrow key
            moveDown();
            break;
    }
}

function moveLeft() {
    snake.style.left = parseInt(snake.style.left) - 7 + 'px';
    collisionCheck(slither, mouse);
}
function moveUp() {
    snake.style.top = parseInt(snake.style.top) - 7 + 'px';
    collisionCheck(slither, mouse);
}
function moveRight() {
    snake.style.left = parseInt(snake.style.left) + 7 + 'px';
    collisionCheck(slither, mouse);
}
function moveDown() {
    snake.style.top = parseInt(snake.style.top) + 7 + 'px';
    collisionCheck(slither, mouse);
}
window.onload = init;

// var update = () => {
//     if (
//         mouse.x === slither.x || mouse.y === slither.y || mouse.y === slither.y && mouse.x === slither.x
//     ) {
//         mouse.x = Math.floor((Math.random() * 30) + 1) + 'px';
//         mouse.y = Math.floor((Math.random() * 30) + 1) + 'px';
//     }
// };

function collisionCheck(snake, mouse) {
    var snakeBounds = slither.getBoundingClientRect();
    var mouseBounds = mouse.getBoundingClientRect();

    var snakeCenter = {
      x: snakeBounds.left + (snakeBounds.width / 2),
      y: snakeBounds.top + (snakeBounds.height / 2)
    }

    var mouseCenter = {
      x: mouseBounds.left + (mouseBounds.width / 2),
      y: mouseBounds.top + (mouseBounds.height / 2)
    }

    // initialize if element 1 is within the viewport
    if (
        snakeBounds.top >= 0 &&
        snakeBounds.left >= 0 &&
        snakeBounds.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        snakeBounds.right <= (window.innerWidth || document.documentElement.clientWidth)
    ) {

      // see https://stackoverflow.com/a/17628488/2116041
      var distance = Math.sqrt(
        Math.pow(snakeBounds.x - mouseBounds.x, 2) + 
        Math.pow(snakeBounds.y - mouseBounds.y, 2) 
      );

      if (distance > snakeBounds.width && distance > snakeBounds.height) {
        // no collision
        return false; 
      } else {
        // collision detected!
        return true; 
      }
    }
};