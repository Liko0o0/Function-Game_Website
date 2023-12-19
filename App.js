// Adjust width and height
const canvas = document.getElementById('functionCanvas');
const context = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth * 0.8; 
    canvas.height = window.innerHeight * 0.6; 

}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();