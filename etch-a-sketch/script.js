const canvas = document.querySelector('#etch-a-sketch');
const clearBtn = document.querySelector('#clear');
const ctx = canvas.getContext('2d');
const {width, height} = canvas;
let x = Math.floor(Math.random()*width);
let y = Math.floor(Math.random()*height);

let hue = 0;
ctx.strokeStyle = `hsl(${hue},100%,50%)`;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = '15';
ctx.beginPath(); 
ctx.moveTo(x,y);
ctx.lineTo(x,y);
ctx.stroke();

window.addEventListener('keydown', handleKey);

function handleKey(event){
    if (event.key.includes('Arrow')){
        event.preventDefault()
        draw({key: event.key})
    };
};

function draw({key}){
    console.log(key);
    hue = hue + 5;
    ctx.strokeStyle = `hsl(${hue},100%,50%)`;
    ctx.beginPath();
    ctx.moveTo(x,y);
    switch(key){
        case 'ArrowRight':
            x=x+15; 
            break;
        case 'ArrowLeft':
            x=x-15;
            break; 
        case 'ArrowUp':
            y=y-15; 
            break;
        case 'ArrowDown':
            y=y+15;
            break;     
    }
    ctx.lineTo(x,y);
    ctx.stroke();
};

clearBtn.addEventListener('click',clearCanvas);

function clearCanvas(){
    ctx.clearRect(0, 0, width, height);
};

