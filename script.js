// ===== TradersFX Background Engine =====

const bg = document.querySelector(".background");

const canvas = document.createElement("canvas");

bg.appendChild(canvas);

const ctx = canvas.getContext("2d");

function resizeCanvas(){

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

}

resizeCanvas();

window.addEventListener("resize",resizeCanvas);


// ===== Candle Data =====

const candles=[];

function random(min,max){

return Math.random()*(max-min)+min;

}

function createCandle(){

const open=random(120,500);

const close=open+random(-70,70);

candles.push({

x:canvas.width+40,

open,

close,

high:Math.max(open,close)+random(10,35),

low:Math.min(open,close)-random(10,35),

});

if(candles.length>70){

candles.shift();

}

}
// ===== Draw Candles =====

function drawCandles(){

ctx.clearRect(0,0,canvas.width,canvas.height);

candles.forEach(candle=>{

const green = candle.close > candle.open;

const color = green ? "#22c55e" : "#ef4444";

ctx.strokeStyle = color;
ctx.fillStyle = color;

ctx.shadowBlur = 20;
ctx.shadowColor = color;

// Wick
ctx.beginPath();
ctx.moveTo(candle.x,candle.high);
ctx.lineTo(candle.x,candle.low);
ctx.stroke();

// Body
ctx.fillRect(
    candle.x-5,
    candle.open,
    10,
    candle.close-candle.open
);

// Move candle
candle.x -= 2;

});

ctx.shadowBlur = 0;

}

setInterval(createCandle,350);
