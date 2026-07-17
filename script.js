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
