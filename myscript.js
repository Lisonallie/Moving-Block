
var snake = null;
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
    update();
}
function moveUp() {
    snake.style.top = parseInt(snake.style.top) - 7 + 'px';
    update();
}
function moveRight() {
    snake.style.left = parseInt(snake.style.left) + 7 + 'px';
    update();
}
function moveDown() {
    snake.style.top = parseInt(snake.style.top) + 7 + 'px';
    update();
}
window.onload = init;

var update = () => {
    if (
        mouse.x === slither.x || mouse.y === slither.y || mouse.y === slither.y && mouse.x === slither.x
    ) {
        mouse.x = Math.floor((Math.random() * 30) + 1);
        mouse.y = Math.floor((Math.random() * 30) + 1);
    }
};