var windowBody;
var ballIdArray = new Array();
window.onload = function() {
	windowBody = document.getElementById('windowBody');
	bounceBall();
}
var bounceBall = function() {
	var addBallButton = document.getElementById('addBallButton');
	addBallButton.addEventListener('click',bounce);
}

var bounce = function() {
	var ball = new Ball(0,0);
	ball.appendAndInitiate();
	ballIdArray.push(ball);
	setInterval(moveBall,30);
}

var moveBall = function() {
	for (var arrayElement = 0; arrayElement < ballIdArray.length; arrayElement++) {
		var ball = ballIdArray[arrayElement];
		ball.move();
	}
}

var Ball = function(xPosition,yPosition) {
	var ballElement = document.createElement('div');
	var applyStyle = function() {
		ballElement.style.position = "absolute";
		ballElement.style.background='#f00';
		ballElement.style.width="20px";
		ballElement.style.height="20px";
		ballElement.style.borderRadius="50%";
		ballElement.style.left = xPosition;
		ballElement.style.top = yPosition;
	}

	var initiate = function() {
		ballElement.style.left = 0 + 'px';
		ballElement.style.top = window.innerHeight/2 + 'px';
	}

	this.move = function() {
		var topPosn = parseInt(ballElement.style.top.substring(0,ballElement.style.top.length-2));
		var leftPosn = parseInt(ballElement.style.left.substring(0,ballElement.style.left.length-2));
		if( (topPosn + this.incrimentTop ) > window.innerHeight-20 || (topPosn + this.incrimentTop ) < 20) {
			this.incrimentTop = this.incrimentTop * -1;
		}
		if((leftPosn + this.incrimentLeft ) > window.innerWidth-20 || (leftPosn + this.incrimentLeft) < 0) {
			this.incrimentLeft = this.incrimentLeft * -1;
		}
		ballElement.style.left = leftPosn + this.incrimentLeft + 'px';
		ballElement.style.top = topPosn + this.incrimentTop + 'px';
	}
	this.incrimentTop = Math.floor((Math.random()+ 0.1) * (10));
	this.incrimentLeft = Math.floor((Math.random()+ 0.1) * (10));

	this.appendAndInitiate = function() {
		windowBody.appendChild(ballElement);
		applyStyle();
		initiate();
	}
}