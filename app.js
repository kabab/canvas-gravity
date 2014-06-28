ph = document.getElementById("ph");
ph.width = 700;
ph.height = 400;
world = {};
world.ctx = ph.getContext('2d');
world.height = 400;
world.width = 700;
world.color = "#000000";
world.grav = 0.1;
world.elementNum = 0;
world.element = new Array();
world.draw = function(){
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(0,0,this.width,this.height);
    for(var i=0;i<this.elementNum;i++){
	if(this.element[i].visible){
	    this.ctx.fillStyle = this.element[i].color;
	    this.ctx.fillRect(this.element[i].x,this.element[i].y,this.element[i].width,this.element[i].height);
	}
	
    }
};
world.addElement = function(a){
    this.elementNum++;
    return this.element.push(a)-1;
};
world.col = function(e){
    if(e.y+e.height >= this.height){
	this.element[i].vel += this.elem;
    }
};
world.nextFrame = function(){
    for(var i=0;i<this.elementNum;i++){
	var e = this.element[i];
	
	for(var j=0;j<this.elementNum;j++){
	    ee = this.element[j];
	    if(j==i)
		continue;
	    if(Math.abs(e.x-ee.x) >= Math.abs(e.y-ee.y)){
		if(e.x > ee.x-e.width && e.x < ee.x && e.y+e.height > ee.y && e.y < ee.y+ee.height){
		    e.xVel = ee.xVel*e.e;
		    e.x = ee.x-e.width-1;
		    ee.xVel = -(e.xVel*ee.e)/2;
		    //e.x = ee.x-e.width;
		}
	    }else{
		if(e.y > ee.y-e.height && e.y < ee.y && e.x+e.width > ee.x && e.x < ee.x+ee.width){
		    e.yVel *= -1*e.e;
		    e.y = ee.y-e.height;
		}
	    }
	    
	}

	if(e.y < this.height-e.height){
	    e.yVel += (e.termVel-e.yVel)*e.ac;
	}else{
	    e.yVel *= -1*e.e;
	    e.xVel *= e.f;
	    e.y = this.height-e.height;
	}
	
	if(e.x > this.width-e.width){
	    e.xVel *= -1*e.e;
	    e.yVel *= e.f;
	    e.x = this.width-e.width;
	}
	if(e.x < 0 ){
	    e.xVel *= -1*e.e;
	    e.yVel *= e.f;
	    e.x = 0;
	}
	e.x += e.xVel;
	e.y += e.yVel;
    }
    this.draw();
}

sq0 = {};
sq0.height = 50;
sq0.width = 50;
sq0.xVel = 0;
sq0.yVel = 0;
sq0.termVel = 20;
sq0.ac = 0.005;
sq0.e = 0.9;
sq0.f = 0.98;
sq0.x = 350;
sq0.y = 350;
sq0.color = "#ff0000";
sq0.visible = true;
sq0.getSq = function(){
    return {height:50,width:50,xVel:0,yVel:0,termVel:20,ac:0.005,e:0.9,f:0.98,x:0,y:0,color:"#ffffff",visible:true};
}
sq3 = sq0.getSq();

sq1 = {};
sq1.height = 50;
sq1.width = 50;
sq1.xVel = 0;
sq1.yVel = 3;
sq1.termVel = 20;
sq1.ac = 0.005;
sq1.e = 0.3;
sq1.f = 0.9;
sq1.x = 300;
sq1.y = 0;
sq1.color = "#ffffff";
sq1.visible = true;


//world.addElement(sq0);
world.addElement(sq1);
//world.addElement(sq3);
world.draw();

function ani(){
    world.nextFrame();
    setTimeout(ani,10);
}
function addX(a){
    sq1.xVel += a;
}

var up,down,left,right;
var _up = false,_down = false,_left = false,_right = false;
function goUp(){
    sq1.yVel -= 0.8;
    up = setTimeout(goUp,65);
}
function goLeft(){
    sq1.xVel -= 0.3;
    left = setTimeout(goLeft,50);
}
function goRight(){
    sq1.xVel += 0.3;
    right = setTimeout(goRight,50);
}
document.onkeydown = function(event){
    
    if(event.keyCode == 32 && _up==false){
	goUp();
	_up = true;
    }
    if(event.keyCode == 68 && _right==false){
	goRight();
	_right = true;
    }
    if(event.keyCode == 81 && _left==false){
	goLeft();
	_left = true;
    }
    //document.getElementById("data").innerHTML = event.keyCode;
    /*if(event.keyCode == 32)
      sq1.yVel -= 0.5;
      if(event.keyCode == 81)
      sq1.xVel -= 0.5;
      if(event.keyCode == 68)
      sq1.xVel += 0.5;
    */
}

document.onkeyup = function(event){
    if(event.keyCode == 32){
	clearTimeout(up);
	_up=false;
    }
    
    if(event.keyCode == 68){
	clearTimeout(right);
	_right=false;
    }
    
    if(event.keyCode == 81){
	clearTimeout(left);
	_left=false;
    }
    
    /*if(event.keyCode == 32)
      sq1.yVel -= 0.5;
      if(event.keyCode == 81)
      sq1.xVel -= 0.5;
      if(event.keyCode == 68)
      sq1.xVel += 0.5;
    */
}
function addY(a){
    sq1.yVel += a;
}
function data(){
    document.getElementById("data").innerHTML += "<br/>sq0.x = "+Math.floor(sq0.x)+" | sq0.y = "+Math.floor(sq0.y);
    b = setTimeout(data,100);
    
}
//data();
ani();
