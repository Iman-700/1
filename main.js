porsentaje = 0;
objets = [];
function setup() {
    canvas=createCanvas(640, 420);
    canvas.center();
    od = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("estatus").innerHTML = "estatus:detectando objetos";
}
function preload() {
    img = loadImage("dog_cat.jpg");
}
function draw() {
    image(img, 0, 0, 640, 420);
    /*fill("black");
    text("perro siendo abrasado por gato", 45, 75);
    noFill();
    stroke("blue");
    noFill();
    stroke("orange");
    fill("black");
    text("gato abrasando a un perro", 320, 120);
    noFill();
    stroke("orange");
    rect(300, 90, 270, 320);*/
    if (estatus!="") {
        console.log("hola");
        for (let i = 0;i < objets.lengt;i++) {
            document.getElementById("estatus").innerHTML = "estatus:objetos detectado ";;
            porsentaje = floor(objets[i].confidence*100);
            fill("red");
            text(objets[i].label + " " + porsentaje + "%", objets[i].x + 15, objets[i].y + 15);
            noFill();
            stroke("orange");
            noFill();
            rect(objets[i].x, objets[i].y, objets[i].width, objets[i].height);
        }
    }
}
function modelLoaded() {
    console.log("modelo cargado");
    estatus = true;
    od.detect(img, gotResult);
}
function gotResult(error, results) {
    if (error == true) {
        console.error(error);
    }else{
        console.log(results);
        objets = results;
    }
}