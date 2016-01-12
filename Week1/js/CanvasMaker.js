/**
 * Created by Nomad_Mystic on 1/10/2016.
 */

// loading up all of the eventListeners
window.onload = init;
function init() {
    var radiusSlider = document.getElementById('radius');
    var strokeSlider = document.getElementById('stroke');
    var strokeColor = document.getElementById('strokeColor');
    var fillColor = document.getElementById('fillColor');

    var createPage = function() {
        var strokeSliderValue = strokeSlider.value;
        var strokeColorValue = strokeColor.value;
        var radiusSliderValue = radiusSlider.value;
        var fillColorValue = fillColor.value;
        new PageCreator(radiusSliderValue, strokeSliderValue, strokeColorValue, fillColorValue);
    };

    radiusSlider.addEventListener('change', createPage, false);
    strokeSlider.addEventListener('change', createPage, false);
    strokeColor.addEventListener('change', createPage, false);
    fillColor.addEventListener('change', createPage, false);
}

// This creates the data object for the canvas element's attributes and returns to PageCreator Class
PageCreator.prototype.buildData = function(radius, strokeWidth, strokeColor, fillColor) {
    var buildData = {
        x: 200,
        y: 200,
        xr: radius,
        yr: radius,
        strokeWidth: strokeWidth,
        strokeColor: strokeColor,
        fillColor:  fillColor
    };

    return buildData;
};

PageCreator.prototype.createCanvas = function(buildData) {
    // Creating the Canvas element and giving it attributes
    var canvas = document.getElementById('canvas');
    canvas.width = 400;
    canvas.height = 400;

    // Creating the context for the canvas element
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Do the canvas attributes for the ellipse we create
    context.beginPath();
    context.ellipse(buildData.x, buildData.y, buildData.xr, buildData.yr, 0, 0, 2 * Math.PI, false);
    context.fillStyle = buildData.fillColor;
    context.fill();
    context.strokeStyle = buildData.strokeColor;
    context.lineWidth = parseInt(buildData.strokeWidth);
    context.stroke();

    return canvas;
};

function PageCreator(radius, strokeWidth, strokeColor, fillColor) {
    // Show user the value of the ranges
    var radiusValueDiv = document.getElementById('radiusValueDiv');
    radiusValueDiv.innerHTML = '<p>Value: ' + radius + '</p>';

    var strokeValueDiv = document.getElementById('strokeValueDiv');
    strokeValueDiv.innerHTML = '<p>Value: ' + strokeWidth + '</p>';

    // Creating the data for the circle
    var buildData = this.buildData(radius, strokeWidth, strokeColor, fillColor);
    console.log(strokeColor);
    // Grab canvasHolder div
    var canvasHolder = document.getElementById('canvasHolder');
    canvasHolder.addClass = 'canvasHolder';

    // Creating the canvas element
    var canvas = this.createCanvas(buildData);

    // Place the canvas into the DOM
    canvasHolder.appendChild(canvas);
}
