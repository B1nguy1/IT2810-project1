var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
let isHovering = false;
let animation = null;

const canvasWidth = ctx.canvas.clientWidth,
      canvasHeight = ctx.canvas.clientHeight,
      twoPi = 2* Math.PI;

const COLOR = {
    LIGHT_BROWN: "#8B572A",
    LIGHT_GREEN: "#59A608",
    RED: "#FF0000",
    BLACK: "#000000",
    GREEN: "#008000",
    WHITE: "#FFFFFF",
    GREY:"rgb(138,138,138)",
    GOLD: "gold",
    BROWN: "brown",
    ORANGE: "orange",
    YELLOW: "yellow",
    SKYBLUE: "skyblue",
    SLATEGRAY: "slategray"
};

// the radialcolor sun coordinates
var x = 330,
y = 90,
innerRadius = 5,
outerRadius = 85,
radius = 45;

const settings = {
    cloudX:180,
    cloudX2:200,
    cloudX3:210,
    cloudX4:230,
    cloudX5:240,
    cloudXDirection:1,
    
    sunY: 100,
    sunYDirection:1.2
};

drawCanvas();

canvas.addEventListener('mouseover',function(event){
    animate();
},false);

canvas.addEventListener('mouseout',function(event){
    mouseOut();
},false);

function animate(){
    if(!isHovering){
    isHovering = true;
    animation = requestAnimationFrame(animate);
    clearCanvas();
    drawCanvas();
    }
    isHovering = false;
    return;
}

function drawSun(){
    var gradient = ctx.createRadialGradient(x,y,innerRadius,x,y,outerRadius);   
    ctx.beginPath();
    gradient.addColorStop(0,COLOR.ORANGE);
    gradient.addColorStop(1,COLOR.YELLOW);
    ctx.fillStyle= gradient;
    if(animation){
        ctx.arc(330,settings.sunY,45,0,twoPi);
        settings.sunY += settings.sunYDirection;
    }else{
        ctx.arc(330,100,45,0,twoPi);
    }
    ctx.fill();
}

function drawClouds(){
    ctx.beginPath();
    ctx.fillStyle=COLOR.WHITE;
    if(animation){
        ctx.arc(settings.cloudX,80,20,0,twoPi);
        ctx.arc(settings.cloudX2,70,20,0,twoPi);
        ctx.arc(settings.cloudX3,80,20,0,twoPi);
        ctx.arc(settings.cloudX4,70,20,0,twoPi);
        ctx.arc(settings.cloudX5,80,20,0,twoPi);
        settings.cloudX += settings.cloudXDirection;
        settings.cloudX2 += settings.cloudXDirection;
        settings.cloudX3 += settings.cloudXDirection;
        settings.cloudX4 += settings.cloudXDirection;
        settings.cloudX5 += settings.cloudXDirection;
    }else{
        ctx.arc(180,80,20,0,twoPi);
        ctx.arc(200,70,20,0,twoPi);   
        ctx.arc(210,80,20,0,twoPi);
        ctx.arc(230,70,20,0,twoPi);
        ctx.arc(240,80,20,0,twoPi);
    }
    ctx.fill();
}

function drawGrass(){
    ctx.beginPath();
    ctx.rect(0,300,400,100);
    ctx.fillStyle=COLOR.LIGHT_GREEN;
    ctx.fill();
    ctx.closePath();
}

function drawHouse(){
    drawHouseBase();
    drawDoor();
    drawWindow();
    drawRoof();
}

function drawHouseBase(){
    ctx.beginPath();
    ctx.fillStyle=COLOR.RED;
    ctx.fillRect(240,220,120,120);
    ctx.fill();
}

function drawDoor(){
    ctx.beginPath();
    ctx.fillStyle=COLOR.BROWN;
    ctx.fillRect(285,280,30,60);
    ctx.fill();

    ctx.beginPath();
    ctx.strokeStyle=COLOR.BLACK;
    ctx.fillStyle=COLOR.GOLD;
    ctx.arc(310,310,5,0,twoPi);
    ctx.stroke();
    ctx.fill();
}

function drawWindow(){
    ctx.beginPath();
    ctx.fillStyle=COLOR.SKYBLUE;
    ctx.fillRect(250,280,30,30);
    ctx.fillRect(320,280,30,30);
    ctx.fill();
}

function drawRoof(){
    ctx.beginPath();
    ctx.strokeStyle=COLOR.BLACK;
    ctx.fillStyle=COLOR.SLATEGRAY;
    ctx.moveTo(240, 220);
    ctx.lineTo(300, 150);
    ctx.lineTo(360, 220);  
    ctx.lineTo(240,220);
    ctx.stroke();
    ctx.fill();
}

function drawTree(){
    drawTreeTrunk();
    drawTreeTop();
}

function drawTreeTrunk(){
    ctx.beginPath();
    ctx.rect(70,190,70,150);
    ctx.fillStyle = COLOR.LIGHT_BROWN;  
    ctx.fill();
}

function drawTreeTop(){
    ctx.beginPath();
    ctx.arc(65,165,40,0,twoPi);
    ctx.arc(120,170,50,0,twoPi);
    ctx.arc(100,130,50,0,twoPi);
    ctx.arc(160,125,50,0,twoPi);
    ctx.fillStyle=COLOR.GREEN;
    ctx.fill();
}

function drawBird(){
    ctx.beginPath();
    ctx.moveTo(50,30);
    ctx.lineTo(95,80);
    ctx.lineTo(145,30);
    ctx.lineTo(95,55);
    ctx.lineTo(50,30);
    ctx.fillStyle = COLOR.GREY;
    ctx.fill();
}

function drawCanvas(){    
    drawSun();
    drawGrass();
    drawHouse();
    drawBird();
    drawClouds();
    drawTree();
}

function clearCanvas(){
    ctx.beginPath();
    ctx.clearRect(0,0,canvasWidth,canvasHeight);
}

function mouseOut(){
    cancelAnimationFrame(animation);
    animation = null;
    clearCanvas();
    drawCanvas();
    settings.sunY=100;
    settings.cloudX = 180;
    settings.cloudX2=200;
    settings.cloudX3=210;
    settings.cloudX4=230;
    settings.cloudX5=240;
}