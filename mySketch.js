let player = {
	x: 100,
	y: 100,
	speed: 5,
	angle: 0,
};

class Bullet {
	constructor() {
		this.x = player.x;
		this.y = player.y;
		this.angle = Math.atan2(mouseY - player.y, mouseX - player.x);
		this.speed = 3;
	}
	step() {
		this.x += this.speed * Math.cos(this.angle);
		this.y += this.speed * Math.sin(this.angle);
		fill(100);
		ellipse(this.x, this.y, 10);
	}
}

function setup() {
	noCursor();
	createCanvas(500, 500);
	
}

let bullets = [];

function mouseClicked() {
	if(mouseButton == LEFT){
		bullets.push(new Bullet());
	}
}

function draw() {
	
		clear();
		fill(255, 204, 0);
		rect(0, 0, windowWidth, windowHeight);
		fill(0);
		ellipse(player.x, player.y, 20, 20);
		fill(0, 255, 255);
		rect(mouseX-1, mouseY-5, 2, 10);
		rect(mouseX-5, mouseY-1, 10, 2);
	
		player.angle = Math.atan2(mouseY - player.y, mouseX - player.x);
		player.x += player.speed * Math.cos(player.angle);
		player.y += player.speed * Math.sin(player.angle);
		
		if(player.x+20 > 500){
			player.x = 480;
		}
		if(player.x-20 < 0) {
			player.x = 20;
		}
		if(player.y+20 > 500){
			player.y = 480;
		}
		if(player.y-20 < 0){
			player.y = 20;
		}
	
	
	for(i = 0; i < bullets.length; i++){
			bullets[i].step();
	}
}
