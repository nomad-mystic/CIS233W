/**
 * Created by Nomad_Mystic on 1/10/2016.
 */




PageCreator.prototype.createCanvas = function(canvasHolder) {

    var canvas = document.createElement('canvas');
    canvas.id = 'canvas';
    //canvas.style.top = '400px';
    //canvas.style.left = canvasHolder.style.left;
    canvas.style.width = canvasHolder.clientWidth + 'px';
        //canvasHolder.clientWidth + 'px';
    canvas.style.height = canvasHolder.clientHeight + 'px';
        //canvasHolder.clientHeight + 'px';

    var context = canvas.getContext('2d');

    context.beginPath();
    context.ellipse(100, 100, 50, 75, Math.PI / 2, 0, 2 * Math.PI);
    context.stroke();

    //void ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise);
    return canvas;
};


function PageCreator() {
    // Create the canvas
    var canvasHolder = document.getElementById('canvasHolder');
    var canvas = this.createCanvas(canvasHolder);

    console.log(canvas);

    // Place the canvas into the DOM

    canvasHolder.appendChild(canvas);
}