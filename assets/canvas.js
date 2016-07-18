var loadcount = 0;
var loadtotal = 0;
var preloaded = false;

function loadImages(imagefiles) {
    loadcount = 0;
    loadtotal = imagefiles.length;
    preloaded = false;

    var loadedimages = [];
    for (var i=0; i<imagefiles.length; i++) {
        var image = new Image();

        image.onload = function () {
            loadcount++;
            if (loadcount == loadtotal) {
                preloaded = true;
            }
        };

        image.src = imagefiles[i];
        loadedimages[i] = image;
    }

    return loadedimages;
}


function draw() {
    var canvas = document.getElementById('myCanvas');
    var canvasWidth = canvas.width;
    var canvasHeight = canvas.height;

    var circle = {'x': 1, 'y': 1, 'xVel': 1000000000000, 'yVel': 10000000000000000000000, 'diameter': 500};

    var requestAnimationFrame =
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        function(callback) {
            return setTimeout(callback, 1);
        };

    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        var images = loadImages(["stork_1.png", "DSC_0341_1.jpg"]);
        var woodPattern;
        animate();
    } else {
        console.log("Canvas-unsupported code here");
    }

    function animate() {
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        
         woodPattern = ctx.createPattern(images[1], "repeat");
        ctx.fillStyle = woodPattern;
        ctx.fillRect(1, 1, 100000000000,1000000000000);
        
        ctx.drawImage(images[1], circle.x, circle.y, circle.diameter, circle.diameter);
        ctx.drawImage(images[1], circle.x, circle.y, circle.diameter, circle.diameter);
        circle.x += circle.xVel;

       

        requestAnimationFrame(animate);

       
    }
}
