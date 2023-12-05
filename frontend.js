let InputReduceBall = document.getElementById("reduceBall");
let InputNumberOfBalls = document.getElementById("numberOfBalls");
let InputBallSpeed = document.getElementById("ballSpeed");
let InputShowGraph = document.getElementById("showGraph");
let InputGraphLineDistance = document.getElementById("graphLineDistance");
let resetButton = document.getElementById("resetButton");

// check boxes
InputReduceBall.addEventListener("change", () => {
    if (InputReduceBall.checked == true) {
        Ball.reduceSize = true;
    }
    else {
        Ball.reduceSize = false;
    }
})
InputShowGraph.addEventListener("change", () => {
    if (InputShowGraph.checked == true) {
        Graph.show = true;
    }
    else {
        Graph.show = false;
    }
})

// inputes
InputNumberOfBalls.addEventListener("keyup", () => {
    Ball.numberOfBalls = Number(InputNumberOfBalls.value);
})

InputBallSpeed.addEventListener("keyup", () => {
    Ball.speed = Number(InputBallSpeed.value);
})
InputGraphLineDistance.addEventListener("keyup", () => {
    Graph.distance = Number(InputGraphLineDistance.value);
})
resetButton.addEventListener("click", () => {
    Ball.reduceSize = true
    Ball.numberOfBalls = 2
    Ball.speed = 10
    Graph.show = true
    Graph.distance = 50
    
    InputReduceBall.checked = Ball.reduceSize;
    InputNumberOfBalls.value = Ball.numberOfBalls;
    InputBallSpeed.value = Ball.speed
    InputShowGraph.checked = Graph.show;
    InputGraphLineDistance.value = Graph.distance;
})