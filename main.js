function setup() {
    canvas = createCanvas(280, 280);
    canvas.center();
    background("white");
}

function clearCanvas() {
    background("white");
}

for (let i = 0; i >= 0; i++)
{
    document.getElementById("score").innerHTML=i;
}