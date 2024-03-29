var gameport = document.getElementById("gameport");

var renderer = PIXI.autoDetectRenderer(400, 400, {backgroundColor: 0x3344ee});
gameport.appendChild(renderer.view);

var stage = new PIXI.Container();

var texture = PIXI.Texture.fromImage("jet1.png");

var sprite = new PIXI.Sprite(texture);

// position we rotate around

sprite.anchor.x = 0.5;
sprite.anchor.y = 0.5;

// sprites location on grid
sprite.position.x = 200;
sprite.position.y = 200;

stage.addChild(sprite);

function animate() 
{
	requestAnimationFrame(animate);
	sprite.rotation += 0.1;
	renderer.render(stage);
}

animate();
