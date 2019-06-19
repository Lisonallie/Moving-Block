
var snake = null;
var food = null;
var slither = document.querySelector("#snake > .snake");
var mouse = document.querySelector("#food > .mouse");

function init() {
    snake = document.getElementById("snake");
    snake.style.position = 'relative';
    snake.style.left = '0px';
    snake.style.top = '0px';
    food = document.getElementById("food");
    food.style.position = 'relative';
}


function getKeyAndMove(e) {
    collisionCheck(slither, mouse);
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
}
function moveUp() {
    snake.style.top = parseInt(snake.style.top) - 7 + 'px';
}
function moveRight() {
    snake.style.left = parseInt(snake.style.left) + 7 + 'px';
}
function moveDown() {
    snake.style.top = parseInt(snake.style.top) + 7 + 'px';
}
window.onload = init;

function collisionCheck(slither, mouse) {
    var snakeBounds = slither.getBoundingClientRect();
    var mouseBounds = mouse.getBoundingClientRect();
    var distance = Math.sqrt(
        Math.pow(snakeBounds.x - mouseBounds.x, 2) +
        Math.pow(snakeBounds.y - mouseBounds.y, 2));

    // initialize if element 1 is within the viewport
    if (!((snakeBounds.top + snakeBounds.height) < mouseBounds.top ||
        snakeBounds.top > (mouseBounds.height + mouseBounds.top) ||
        (snakeBounds.left + snakeBounds.width) < mouseBounds.left ||
        snakeBounds.left > (mouseBounds.width + mouseBounds.left))) {
        // return true;
        // no collision   
        food.style.left = Math.floor((Math.random() * window.innerWidth) - mouse.width) + 'px';  
        food.style.top = Math.floor((Math.random() * window.innerHeight) - mouse.height) + 'px';
        // } else {
        //     // collision detected!
        //     mouse.x = Math.floor((Math.random() * 30) + 1) + 'px';
        //     mouse.y = Math.floor((Math.random() * 30) + 1) + 'px';
        // }
    }
}