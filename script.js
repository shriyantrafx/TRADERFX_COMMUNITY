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

// ===== Floating Particles Effect =====

const particles = [];

function createParticle(){

    particles.push({

        x: Math.random() * canvas.width,

        y: canvas.height + 20,

        size: Math.random() * 3 + 1,

        speed: Math.random() * 0.8 + 0.2,

        opacity: Math.random()

    });

}


function drawParticles(){

    particles.forEach((p,index)=>{

        ctx.beginPath();

        ctx.arc(
            p.x,
            p.y,
            p.size,
            0,
            Math.PI*2
        );

        ctx.fillStyle = 
        `rgba(0,191,255,${p.opacity})`;

        ctx.shadowBlur = 15;

        ctx.shadowColor="#00bfff";

        ctx.fill();


        p.y -= p.speed;


        if(p.y < -20){

            particles.splice(index,1);

        }

    });

}


setInterval(createParticle,200);
function animate(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    drawCandles();

    drawParticles();

    requestAnimationFrame(animate);

}

animate();

animate();
// ===== Premium Market Glow =====

const glow = {
    x: 0,
    y: 0,
    radius: 250
};


function drawMarketGlow(){

    const gradient = ctx.createRadialGradient(
        glow.x,
        glow.y,
        0,
        glow.x,
        glow.y,
        glow.radius
    );


    gradient.addColorStop(
        0,
        "rgba(0,191,255,0.18)"
    );

    gradient.addColorStop(
        1,
        "rgba(0,191,255,0)"
    );


    ctx.fillStyle = gradient;


    ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    glow.x += 0.8;

    if(glow.x > canvas.width + 300){

        glow.x = -300;

    }

}
