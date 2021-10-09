var screen = document.querySelector("canvas");
var brush = screen.getContext("2d");

brush.fillStyle = "white";
brush.fillRect(0, 0, 600, 400);

var radius = 10;

function desenhaCirculo(evento) {
    var x = evento.pageX - screen.offsetLeft;
    var y = evento.pageY - screen.offsetTop;
    var shift = evento.shiftKey;
    var alt = evento.altKey;
    if (shift == true && radius <= 40) {
        radius += 5;
    }

    if (alt == true && radius >= 10) {
        radius -= 5;
    }

    if (shift == true && alt == true) {
        alert("Aperte uma tecla de cada vez, por favor!");
    }

    brush.fillStyle = colors[currentColor];
    brush.beginPath();
    brush.arc(x, y, radius, 0, 2 * Math.PI);
    brush.fill();
    console.log(x + ", " + y);
}

var colors = ["blue", "red", "green", "yellow", "orange", "pink", "purple", "black", "white"]
var currentColor = 0; //Cor atual é a azul
screen.onclick = desenhaCirculo;

function mudaCor() {
    currentColor++;

    if (currentColor >= colors.length) {
        currentColor = 0;
    }

    alert("Now your color is " + colors[currentColor]);
            
    return false;
}

screen.oncontextmenu = mudaCor;