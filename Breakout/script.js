const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");


ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI * 2, false);
ctx.fillStyle = "red";
ctx.fill();
ctx.closePath();


ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.strokeStyle = "rgb(0,0,0)";
ctx.stroke();
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();



let x = canvas.width / 2;
let y = canvas.height -30;
let dx = 2;
let dy = - 5;
function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
    x += dx;
    y += dy;

}setInterval(draw,10);
function drawBall(){
    ctx.beginPath();
    ctx.arc(x,y,10,0,Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

