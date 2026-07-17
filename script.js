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

let open = Math.random()*300 + 100;

let close = open + (Math.random()-0.5)*80;


candles.push({

    x: canvas.width + 40,

    open: open,

    close: close,

    high: Math.max(open,close) - 40,

    low: Math.min(open,close) + 40

});


if(candles.length > 50){

    candles.shift();

}

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
ctx.shadowBlur = 35;
ctx.shadowColor = color;
ctx.globalAlpha = 0.85;


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
ctx.globalAlpha = 1;
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
    drawSafeLight();
    requestAnimationFrame(animate);

}


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
// ===== TradersFX Market Light Effect =====

let marketLightX = -300;


function drawMarketLight(){

    const gradient = ctx.createLinearGradient(
        marketLightX,
        0,
        marketLightX + 300,
        0
    );


    gradient.addColorStop(
        0,
        "rgba(0,191,255,0)"
    );

    gradient.addColorStop(
        0.5,
        "rgba(0,191,255,0.08)"
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


    marketLightX += 2;


    if(marketLightX > canvas.width){

        marketLightX = -300;

    }

}// ===== Safe Background Light =====

const lightCanvas = document.createElement("canvas");

bg.appendChild(lightCanvas);

const lightCtx = lightCanvas.getContext("2d");


function resizeLight(){

    lightCanvas.width = window.innerWidth;
    lightCanvas.height = window.innerHeight;

}

resizeLight();

window.addEventListener("resize",resizeLight);


let lightX = -300;


function drawSafeLight(){

    lightCtx.clearRect(
        0,
        0,
        lightCanvas.width,
        lightCanvas.height
    );


    const glow = lightCtx.createRadialGradient(
        lightX,
        lightCanvas.height/2,
        0,
        lightX,
        lightCanvas.height/2,
        300
    );


    glow.addColorStop(
        0,
        "rgba(0,191,255,0.15)"
    );


    glow.addColorStop(
        1,
        "rgba(0,191,255,0)"
    );


    lightCtx.fillStyle = glow;


    lightCtx.fillRect(
        0,
        0,
        lightCanvas.width,
        lightCanvas.height
    );


    lightX += 2;


    if(lightX > lightCanvas.width + 300){

        lightX = -300;

    }

}

