// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Body = Matter.Body,
    Common = Matter.Common;
    



//Create Body
var body = Body.create({
    render:{
        fillStyle: '#a6a674'
    }
    
})

// create an engine
var engine = Engine.create();

// create a renderer
var render = Render.create({
    canvas: myCanvas,
    engine: engine,    
    options:{        
        height:500,
        width:900,
        background:'#fff134',
        wireframes:false
        }
});

Render.setPixelRatio(render, 'auto');

var walls = [
        // walls
        Bodies.rectangle(500, 490, 1000, 20, { isStatic: true }), // bottom
        Bodies.rectangle(890, 250, 20, 500, { isStatic: true }), //right
        Bodies.rectangle(10, 250, 20, 500, { isStatic: true }) // left       
        ];

// add all of the bodies to the world
World.add(engine.world, walls);


// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);



function addItem(){
    World.add(engine.world, Bodies.circle(430,150, 40));
    raiserWater();
}


function raiserWater(){
    var elem = document.getElementById("water");
    var increment = 10;
    var pos = window.getComputedStyle(elem).getPropertyValue('top');
    var currPos = Number(pos.replace("px",""));    
    elem.style.top = currPos-increment+"px";
}