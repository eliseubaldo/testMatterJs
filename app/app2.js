var Mod = (function(Matter){


	// module aliases
	var _Engine = Matter.Engine,
	    _Render = Matter.Render,
	    _World = Matter.World,
	    _Bodies = Matter.Bodies,
	    _Body = Matter.Body,
	    _Common = Matter.Common;
	    



	//Create Body
	var _body = _Body.create({
	    render:{
	        fillStyle: '#a6a674'
	    }
	    
	})

	// create an engine
	var _engine = _Engine.create();

	// create a renderer
	var _render = _Render.create({
	    canvas: myCanvas,
	    engine: _engine,    
	    options:{        
	        height:500,
	        width:900,
	        background:'#fff134',
	        wireframes:false
	        }
	});

	_Render.setPixelRatio(_render, 'auto');

	var _walls = [
	        // walls
	        _Bodies.rectangle(500, 490, 1000, 20, { isStatic: true }), // bottom
	        _Bodies.rectangle(890, 250, 20, 500, { isStatic: true }), //right
	        _Bodies.rectangle(10, 250, 20, 500, { isStatic: true }) // left       
	        ];

	// add all of the bodies to the world
	_World.add(_engine.world, _walls);


	// run the engine
	_Engine.run(_engine);

	// run the renderer
	_Render.run(_render);



	var _addItem = function (){
	    _World.add(_engine.world, _Bodies.circle(430,150, 40));
	    _raiserWater();
	}


	var _raiserWater = function (){
	    var elem = document.getElementById("water");
	    
	    var increment = 8;
	    var pos = window.getComputedStyle(elem).getPropertyValue('background-position');	    
	    var currPos = pos.substr(0,2);
	    if(currPos<10){currPos = 49};
	    console.log(currPos);
	    elem.style.backgroundPosition = currPos-increment+"% 0%";


	    var pos = window.getComputedStyle(elem).getPropertyValue('height');
	    var currPos = Number(pos.replace("px",""));    
	    elem.style.height = currPos+20+"px";
	}

		


	var self = {
		addItem:function(){ _addItem() }
	};
	return self;	


}(Matter));