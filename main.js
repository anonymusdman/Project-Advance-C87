var canvas = new fabric.Canvas('myCanvas');
var width_car = 30;
var height_car = 30;
var car_x = 10;
var car_y = 10;
var car;
var car_image;
function carUpdate() {
    fabric.Image.fromUrl("tunedsupra2.jpg", function(Img){
    car = Img;
    car.scaleToWidth(width_car);
    car.scaleToHeight(height_car);
    car.set({
        top:car_y,
        left:car_x
    });
    canvas.add(car);
});
}
function NewImage(getImage) {
    fabric.Image.fromUrl(getImage, function(Img){
        car_image = Img;
        car_image.scaleToWidth();
        car_image.scaleToHeight();
        car_image.set({
        top:car_y,
        left:car_x
    });
    canvas.add(car_image);
});
}
window.addEventListener("keydown", keydown_event);
function keydown_event(e) {
    keypressed = e.keyCode;
    if(e.shiftKey == true && keypressed == '80'){
        width_car = width_car + 10;
        height_car = height_car + 10;
        document.getElementById("current_width").innerHTML = width_car;
        document.getElementById("current_height").innerHTML = height_car;
    }
    if(e.shiftKey == true && keypressed == '77'){
        width_car = width_car - 10;
        height_car = height_car - 10;
        document.getElementById("current_width").innerHTML = width_car;
        document.getElementById("current_height").innerHTML = height_car;
    }
    if(keypressed == '70'){
        uploadfrontbumper();
    }
    if(keypressed == '68'){
        uploadbackbumper();
    }
    if(keypressed == '66'){
        uploadbody();
    }
}