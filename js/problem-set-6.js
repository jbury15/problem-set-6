/*
 * Hello. 2 points.
 *
 * Write a function that draws "Hello, World!" on the canvas. You should
 * begin drawing at [10, 50], relative to the canvas, and your text should
 * be a 48px sans-serif font. Make sure the canvas is clear before drawing!
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Hello" button, your output should match that of the example.
 */

function sayHello() {
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');

  ctx.font = '48px sans-serif';
  ctx.strokeText('Hello, World!', 10, 50);

}

/*
 * Rectangle. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. You should prompt
 * the user for the height and width. You should also prompt the user for the
 * X- and Y-coordinates of the topleft corner of the rectangle.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Rectangle" button, your output should match that of the example.
 *
 * Certain values, such as heights and widths that are logically too small or
 * practically too large, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Width values less than 1
 *     - Height values less than 1
 *     - X- or Y- coordinates less than 5
 *     - Combinations of heights/widths and X-/Y-coordinates that would make
 *       it impossible to draw the rectangle within the bounds of the canvas
 */

function drawRectangle() {
const canvas = document.getElementById('canvas2')
const ctx = canvas.getContext('2d')
let height = prompt("Height:")
let width = prompt("Width:")
let x = prompt("X:")
let y = prompt("Y:")
if (width < 1){
  alert("Your width is too small.")
}
else if (height < 1){
  alert("Your height is too small.")
}
else if (x < 5){
  alert("Your x-coordinate is too small.")
}
else if (y < 5){
  alert("Your y-coordinate is too small.")
}
else if (height > 256 || width > 256 || x > 256 || y > 256){
  alert("The rectangle will not fit on the canvas")
}
else {
  ctx.strokeRect(height, width, x, y)
}
}

/*
 * Color. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. By default, the
 * rectangle will have a height and width of 50px and 100px, respectively. It
 * will be positioned at [10, 10] on the canvas. You'll need to prompt the
 * user to enter a color for the rectangle.
 *
 * Support the following colors:
 *     - black
 *     - blue
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Color" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawColoredRectangle() {
  let canvas = document.getElementById("canvas3");
    let context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);

    let color;
    while(true){
      color=prompt("Color:")
      if(color=="black" || color=="blue" || color=="green" || color=="orange" || color=="purple" || color=="red" || color=="yellow") {
        break;
      }
    }
    context.fillStyle=color;
    context.fillRect(10,10,100,50);

  }

/*
 * Triangle. 5 points.
 *
 * Write a function that draws a right triangle on the canvas. The triangle
 * should be outlined only, not filled. You'll need to prompt the user for the
 * lengths of each of the sides. By default, position your triangle so that
 * its leftmost and topmost points have X- and Y-coordinates of 10.
 *
 * When drawing your right triangles, the left side shall be designated as the
 * first side and will be smallest of the three side lengths. The bottom side
 * shall be designated as the second side and will be second smallest of the
 * three side lengths. The hypotenuse shall be designated as the third side
 * and will be the largest of the three side lengths.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Triangle" button, your output should match that of the example.
 *
 * Certain values, such as side lengths that make it impossible to create a
 * valid right triangle, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Combinations of side lengths that would make it impossible to draw
 *       a valid triangle
 *     - Combinations of side lengths that would make it impossible to draw
 *       the triangle within the bounds of the canvas
 */

function drawTriangle() {
  let x=10;
   let y=10;
   let a;
   let b;
   let c;
   let canvas = document.getElementById("canvas4");
   let context = canvas.getContext("2d");
   context.clearRect(0, 0, canvas.width, canvas.height);
   while(true){
 	a=Number(prompt("Side 1:"));
 	b=Number(prompt("Side 2:"));
 	c=Number(prompt("Side 3:"));
 	if(((a**2) + (b**2) == (c**2)) && a>0 && b>0 && c>0 && canvas.width-x-a>=0 && canvas.height-y-b>=0){
 		break;
 	}else{
 		alert("That is not a valid triangle")
 	}
   }
  //Line A
  context.beginPath(); //Begins a path
  context.moveTo(x,y); //Choses the starting point
  context.lineTo(x,y+a); //Line A coordinates: It is a vertical line, therefore the same x value but different y-value
  context.stroke(); //Draws the line
  //Line B
  context.beginPath();
  context.moveTo(x,y+a);
  context.lineTo(x+b,y+a);
  context.stroke();
  //Hypotenuse
  context.beginPath();
  context.moveTo(x,y);
  context.lineTo(x+b,y+a);
  context.stroke();
 }
/*
 * Smile. 7 points.
 *
 * Write a function that draws a smiley face on the canvas. The head should
 * be a perfect circle with a radius specified by the user. The eyes should
 * also be perfect circles with radii that are 10% of that of the head. The
 * radius of the mouth should be 70% of that of the head. A nose is not
 * required, and the position of the eyes and mouth are up to you (provided)
 * they are on the face.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Smile" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawSmileyFace() {
  let radius;
    let canvas = document.getElementById('canvas5');
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  	while(true){
  		radius=Number(prompt("Radius:"));
  		if(radius>=1 && radius<=canvas.width && Number.isInteger(radius)){
  			break;
  		}
  	}
    let x=canvas.width;
    let y=canvas.height;
    let eyeRadius=radius*.1
    let mouthRadius=radius*.7
    ctx.beginPath();
    ctx.arc(x/2, y/2, radius, 0, Math.PI*2); // Face
    ctx.stroke();

    ctx.beginPath(); //Right Eye
    ctx.arc(x/2 - radius/3, y/2-radius/4, eyeRadius,0, Math.PI*2);
    ctx.stroke();

    ctx.beginPath(); //Left Eye
    ctx.arc(x/2+radius/3, y/2-radius/4, eyeRadius,0, Math.PI*2);
    ctx.stroke();

    ctx.beginPath(); //Mouth
    ctx.arc(x/2, y/2, mouthRadius,0, Math.PI);
    ctx.stroke();
    }


/*
 * Star. 9 points.
 *
 * Write a function that draws a five-point star on the canvas. Prompt the
 * user for the outer radius (i.e., a circle that would connect each of the
 * star's outer points) and inner radius (i.e., a circle that would connect
 * each of the star's inner points). The center of the star should be placed
 * at [125, 125].
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Star" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawStar() {
  let canvas = document.getElementById('canvas6');
   let ctx = canvas.getContext('2d');
   ctx.clearRect(0, 0, canvas.width, canvas.height);

     let outerRadius=Number(prompt("Outer radius:"));
     let innerRadius=Number(prompt("Inner radius:"));
     if (outerRadius>=innerRadius && canvas.width>=outerRadius+125 && canvas.height>=outerRadius+125 && innerRadius>=1 && outerRadius>=1){
       let points=5;
       let outerx=[];
       let outery=[];
       let innerx=[];
       let innery=[];
       for(let i=0;i<points;i++){
         outerx.push(Math.cos((Math.PI*2*i)/points-(Math.PI/2))*outerRadius+125);
         outery.push(Math.sin((Math.PI*2*i)/points-(Math.PI/2))*outerRadius+125);
         innerx.push(Math.cos(((Math.PI*2*i)/points)-(Math.PI/2)+(Math.PI/points))*innerRadius+125);
         innery.push(Math.sin(((Math.PI*2*i)/points)-(Math.PI/2)+(Math.PI/points))*innerRadius+125);
       }
       ctx.beginPath();
       ctx.moveTo(outerx[0], outery[0]);
       for(let j=0;j<outerx.length;j++){
         ctx.lineTo(innerx[j], innery[j]);
         ctx.lineTo(outerx[j+1], outery[j+1]);
       }
       ctx.lineTo(outerx[0], outery[0]);
       ctx.stroke();
       ctx.closePath();
   }
   else{
       alert('invalid inputs');
     }
 }

/*
 * Stop Sign. 7 points.
 *
 * Write a function that draws a stop sign. The stop sign should be outlined
 * in black, but filled red. At the center of the stop sign, the same height
 * as the length of the sides, should be the word STOP (all capitals, white).
 * Each side length should be 80px.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Stop Sign" button, your output should match that of the example.
 *
 * The leftmost and topmost sides should have X- and Y-coordinates of 10.
 */

function drawStopSign() {
  let canvas = document.getElementById('canvas7');
  let ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  let sidelength=80;
  let center=[10+(sidelength)/2+sidelength/Math.sqrt(2), 10+(sidelength/2)+(sidelength/Math.sqrt(2))]
  console.log(center)
  let points=8;
  let pointx=[];
  let pointy=[];

  for(let i=0;i<points;i++){
    pointx.push(Math.cos(((Math.PI*2*i)/points)-Math.PI/8)*100+center[0]);
    pointy.push(Math.sin(((Math.PI*2*i)/points)-Math.PI/8)*100+center[1]);
  }
  ctx.beginPath();
  ctx.moveTo([pointx][0], pointy[0]);
  for(let j=0;j<pointx.length;j++){
    ctx.lineTo(pointx[j], pointy[j]);
  }
  ctx.lineTo(pointx[0], pointy[0]);
  ctx.stroke();

  ctx.fillStyle="red";
  ctx.fill();
  ctx.closePath();
  ctx.beginPath();
  ctx.textAlign="center";
  ctx.font="62px sans-serif";
  ctx.fillStyle="white";
  ctx.fillText("STOP", center[0], center[1]+15);
  ctx.closePath()
}

/*
 * Pyramid. 7 points.
 *
 * Write a function that draws a block pyramid, where the user specifies the
 * side length of each block. By default, we'll draw a pyramid with a base
 * of five blocks. Give the leftmost point of the pyramid an X-coordinates of
 * 10. Give the bottom of the pyramid a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Pyramid" button, your output should match that of the example.
 *
 * Certain values, such as lengths that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawPyramid() {
  let canvas = document.getElementById('canvas8');
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let sideLength=Number(prompt("Length:"));
    let x=10;
    let y=canvas.height-10;
    let i=0;
    lineNumber=1;
    while(i<5){
      for(let j=0+lineNumber;j<=5;j++){
        ctx.strokeRect(x,y-sideLength,sideLength,sideLength);
        x+=sideLength;
      }
      x=10+(sideLength/2)*lineNumber;
      y-=sideLength;
      lineNumber++;
      i++;
    }

  }

/*
 * House. 7 points.
 *
 * Write a function that draws a two-story house. The house should have a
 * rectangular frame, a front door, two square windows on the first floor,
 * two square windows on the second floor, and a triangular roof. Your house
 * and front door should be painted a solid color of the user's choice (these
 * colors should be different). The windows should be light blue, and the roof
 * should be gray. Give the leftmost point of your house an X-coordinate of
 * 150, and the bottom of your house a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * Support the following front door and/or house colors:
 *     - blue
 *     - brown
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "House" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawHouse() {
  const canv = document.getElementById("canvas9")
  	const ctxt = canv.getContext('2d');
  	ctxt.clearRect(0, 0, canv.width, canv.height);

  	let draw = false;
  	let xdim = canv.width*.7;
  	let ydim = canv.height*.6;
  	let yroofdim = canv.height*.3;

  	let housecol = prompt("House Color:");
  	let doorcol = prompt("Door Color:");
  	if((housecol == "blue" || housecol == "brown" || housecol == "green" ||
  		housecol == "orange" || housecol == "purple" || housecol == "red" || housecol == "yellow")
  		&& (doorcol == "blue" || doorcol == "brown" || doorcol == "green" ||
  		doorcol == "orange" || doorcol == "purple" || doorcol == "red" || doorcol == "yellow")) {
  		draw = true;
  	}
  	else {alert("Invalid input(s)");}

  	if (draw) {
  		ctxt.strokeStyle="black";
  		ctxt.lineWidth=2;


  		//House Frame
  		ctxt.fillStyle=housecol;
  		ctxt.fillRect(150, canv.height-ydim-10, xdim, ydim);
  		ctxt.strokeRect(150, canv.height-ydim-10, xdim, ydim);
  		//Roof
  		ctxt.fillStyle="grey";
  		ctxt.beginPath();
  		ctxt.moveTo(150, canv.height-ydim-10);
  		ctxt.lineTo(150+xdim/2, canv.height-ydim-yroofdim-10);
  		ctxt.lineTo(150+xdim, canv.height-ydim-10);
  		ctxt.closePath();
  		ctxt.stroke();
  		ctxt.fill()
  		//Door
  		ctxt.fillStyle=doorcol;
  		ctxt.fillRect(150 + (xdim/2-50), canv.height-10-160, 100, 160);
  		ctxt.strokeRect(150 + (xdim/2-50), canv.height-10-160, 100, 160);
  		ctxt.fillStyle="gold"
  		ctxt.beginPath();
  		ctxt.arc(150 + (xdim/2-35), canv.height-10-80, 6, Math.PI*0, Math.PI*2)
  		ctxt.closePath();
  		ctxt.stroke();
  		ctxt.fill();
  		//Windows
  		ctxt.fillStyle="LightBlue";
  		ctxt.fillRect(150+(xdim)*.15, canv.height-10-(ydim)*.4, xdim*.15, xdim*.15)
  		ctxt.fillRect(150+(xdim-xdim*.3), canv.height-10-(ydim)*.4, xdim*.15, xdim*.15)
  		ctxt.fillRect(150+(xdim)*.15, canv.height-10-(ydim-ydim*.15), xdim*.15, xdim*.15)
  		ctxt.fillRect(150+(xdim-xdim*.3), canv.height-10-(ydim-ydim*.15), xdim*.15, xdim*.15)
  		ctxt.strokeRect(150+(xdim)*.15, canv.height-10-(ydim)*.4, xdim*.15, xdim*.15)
  		ctxt.strokeRect(150+(xdim-xdim*.3), canv.height-10-(ydim)*.4, xdim*.15, xdim*.15)
  		ctxt.strokeRect(150+(xdim)*.15, canv.height-10-(ydim-ydim*.15), xdim*.15, xdim*.15)
  		ctxt.strokeRect(150+(xdim-xdim*.3), canv.height-10-(ydim-ydim*.15), xdim*.15, xdim*.15)
  		ctxt.stroke();

  	}



  }
