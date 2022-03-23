/*var canvas =  document.getElementById("draw");
var btnClean = document.getElementById("clean");
var ctx = canvas.getContext("2d");
resize();

// add window event listener to trigger when window is resized
window.addEventListener("resize", resize);
// add event listeners to trigger on different mouse events
document.addEventListener("mousemove", draw);
document.addEventListener("mousedown", setPosition);
document.addEventListener("mouseenter", setPosition);


btnClean.addEventListener("click",clean);

function clean(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// resize canvas when window is resized
function resize() {
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
  }


  // last known position
var pos = { x: 0, y: 0 };

// new position from mouse events
function setPosition(e) {
  pos.x = e.clientX;
  pos.y = e.clientY;
}


function draw(e) {
    if (e.buttons !== 1) return; // if mouse is not clicked, do not go further
    var color = "#0";
    ctx.beginPath(); // begin the drawing path
    
    // line properties
    ctx.lineWidth = 8; // width of line
    ctx.lineCap = "round"; // rounded end cap
    ctx.strokeStyle = color; // hex color of line

     // draw line
     ctx.moveTo(pos.x, pos.y); // from position
     setPosition(e);
     ctx.lineTo(pos.x, pos.y); // to position
  
     ctx.stroke(); // draw it!
}*/

window.onload = function() {
	var myCanvas = document.getElementById("draw");
	var ctx = myCanvas.getContext("2d");
    
    // Fill Window Width and Height
    myCanvas.width = window.innerWidth;
	myCanvas.height = window.innerHeight;
	
	
    // Mouse Event Handlers
	if(myCanvas){
		var isDown = false;
		var canvasX, canvasY;
		ctx.lineWidth = 5;
		
		$(myCanvas)
		.mousedown(function(e){
			isDown = true;
			ctx.beginPath();
			canvasX = e.pageX - myCanvas.offsetLeft;
			canvasY = e.pageY - myCanvas.offsetTop;
			ctx.moveTo(canvasX, canvasY);
		})
		.mousemove(function(e){
			if(isDown !== false) {
				canvasX = e.pageX - myCanvas.offsetLeft;
				canvasY = e.pageY - myCanvas.offsetTop;
				ctx.lineTo(canvasX, canvasY);
				ctx.strokeStyle = "#000";
				ctx.stroke();
			}
		})
		.mouseup(function(e){
			isDown = false;
			ctx.closePath();
		});
	}
	
	// Touch Events Handlers
	draw = {
		started: false,
		start: function(evt) {

			ctx.beginPath();
			ctx.moveTo(
				evt.touches[0].pageX,
				evt.touches[0].pageY
			);

			this.started = true;

		},
		move: function(evt) {

			if (this.started) {
				ctx.lineTo(
					evt.touches[0].pageX,
					evt.touches[0].pageY
				);

				ctx.strokeStyle = "#000";
				ctx.lineWidth = 8;
				ctx.stroke();
			}

		},
		end: function(evt) {
			this.started = false;
		}
	};
	
	// Touch Events
	myCanvas.addEventListener('touchstart', draw.start, false);
	myCanvas.addEventListener('touchend', draw.end, false);
	myCanvas.addEventListener('touchmove', draw.move, false);
	
	// Disable Page Move
	document.body.addEventListener('touchmove',function(evt){
		evt.preventDefault();
	},false);
};