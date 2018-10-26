let type = "WebGL"
    if(!PIXI.utils.isWebGLSupported()){
      type = "canvas"
    }

 PIXI.utils.sayHello();
	

	
	var renderer = PIXI.autoDetectRenderer(400,400,{
	transparent:true,
	resolution:1
	});
	
	document.getElementById('display').appendChild(renderer.view);
	
	var stage = new PIXI.Container();
	
	PIXI.loader
	.add("spritesheet","Images/Tigers.png")
	.load(setup);
	
	var sprite;
	
	function setup(){
	stage.interactive = true;
	
	var rect = new PIXI.Rectangle(0,0,260,336);
	var texture =PIXI.loader.resources["spritesheet"].texture;
	texture.frame = rect;
	
	
	sprite = new PIXI.Sprite(texture);
	
	var idle = setInterval(function(){
		if (rect.x >= 260 * 15) rect.x = 0;
		rect.x+=260;
		sprite.texture.frame = rect;
		
		
	},200);
		
		
		sprite.scale.set(1, 1);
		stage.addChild(sprite);
		
		animationLoop();
		
	}
	
	function animationLoop(){
		requestAnimationFrame(animationLoop);
		
		renderer.render(stage);
	}