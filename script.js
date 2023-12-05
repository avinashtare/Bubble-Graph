// init
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

// canvas SetUp
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// global variables
const particlesArray = []
let hue = 0;
const Graph = {
    show: true,
    distance: 50
}
const Ball = {
    reduceSize : true,
    numberOfBalls: 2,
    speed: 10
}
let mosue = {
    x: undefined,
    y: undefined
}

// particle class
class particle {
    constructor() {
        this.x = mosue.x;
        this.y = mosue.y;
        this.size = 10;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = `hsl(${hue}deg,100%,50%)`;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        // reduce size
        if (Ball.reduceSize&&this.size > 0.2) this.size -= 0.01*Ball.speed;
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
    }
}

function handleParticles() {
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].draw();
        particlesArray[i].update();

        // add graph
        if (Graph.show) {
            for (let j = i; j < particlesArray.length; j++) {
                let dx = particlesArray[i].x - particlesArray[j].x;
                let dy = particlesArray[i].y - particlesArray[j].y;
                let distance = Math.sqrt(dx * dx + dy * dy)
                if (distance <= Graph.distance) {
                    ctx.beginPath()
                    ctx.lineWidth = 1;
                    ctx.strokeStyle = particlesArray[i].color;
                    ctx.moveTo(particlesArray[i].x, particlesArray[i].y)
                    ctx.lineTo(particlesArray[j].x, particlesArray[j].y)
                    ctx.stroke()
                }
            }
        }

        // remove particles from the element
        if (particlesArray[i].size <= 0.3) {
            particlesArray.splice(i, 1);
            i++;
        };
    };

};


// mouse events
window.addEventListener("mousemove", (e) => {
    mosue.x = e.x;
    mosue.y = e.y;
    for (let i = 0; i < Ball.numberOfBalls; i++) {
        particlesArray.push(new particle());
    };
});

// resize event
window.addEventListener("resize",()=>{
    
// canvas SetUp
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
})

// start animation function
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleParticles();
    window.requestAnimationFrame(animate);
    hue += 5;
};
animate()