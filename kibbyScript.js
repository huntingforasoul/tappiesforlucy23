var kibbySize = 15;
var kibbyDirection = "left";
var flowers = false;

function changeKibby(){
    var image = document.getElementById("kibby");
    if (kibbyDirection == "left" && !flowers){
        image.src = "walkright.png";
        kibbyDirection = "right";
    }
    else if (kibbyDirection == "right" && !flowers){
        image.src = "walkleft.png";
        kibbyDirection = "left";
    }
    if (kibbySize == 100){
        flowerKibby();
    }
    else {
        var label = "";
        label += kibbySize + "%";
        image.style.maxWidth = label;
        kibbySize += 5;
    }
}

function flowerKibby() {
    var image = document.getElementById("kibby");
    if (!flowers){
        image.src = "sit.png";
        flowers = true;
    }
    else {
        image.src = "flowers.png";
        var header = document.getElementById("changeTitle");
        header.removeChild(header.firstChild);
        header.appendChild(document.createTextNode("I love you!!! <3"));
    }
}