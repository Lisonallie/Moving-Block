
canvas.onload = () => {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var hungry = document.querySelector("#snake > .snake");
    ctx.drawImage(hungry, 0, 0, 170, 170);
    var food = document.querySelector("#food > .mouse");
    ctx.drawImage(food, 20, 20, 120, 120);
};

var snake = null;


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