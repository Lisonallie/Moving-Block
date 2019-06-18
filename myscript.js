const canvas = document.getElementById("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.backgroundColor = "gray";
//show bigfish and smallfish on canvas
window.onload = () => {
var ctx = canvas.getContext("2d");
var block = document.getElementById("bigfish");
ctx.drawImage(block, 0, 0, 120, 80);
var food = document.getElementById("smallfish");
ctx.drawImage(food, 500, 500, 80, 60);
};

var snake= null;


			function init(){
				snake=document.getElementById("snake");				
				snake.style.position='relative';
				snake.style.left='0px';
				snake.style.top='0px';
			}
			function getKeyAndMove(e){				
				var key_code=e.which||e.keyCode;
				switch(key_code){
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
			function moveLeft(){
				snake.style.left=parseInt(snake.style.left)-7 +'px';
			}
			function moveUp(){
				snake.style.top=parseInt(snake.style.top)-7 +'px';
			}
			function moveRight(){
				snake.style.left=parseInt(snake.style.left)+7 +'px';
			}
			function moveDown(){
				snake.style.top=parseInt(snake.style.top)+7 +'px';
			}
			window.onload=init;