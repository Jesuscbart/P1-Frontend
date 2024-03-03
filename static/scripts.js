// Script del botón que se mueve aleatoriamente por la pantalla
const button = document.getElementById("button");

button.addEventListener('mouseover', () => {

  const newX = Math.random() * (globalThis.innerWidth - button.clientWidth);
  const newY = Math.random() * (globalThis.innerHeight - button.clientHeight);

  button.style.left = `${newX}px`;
  button.style.top = `${newY}px`;

});

// Script de las dos imágenes que se mueven aleatoriamente por la pantalla
var images = document.querySelectorAll('.windows #error, .windows #virus_detected'); 

function moveImage(img) {
    var x = Math.random() * (window.innerWidth - img.offsetWidth);
    var y = Math.random() * (window.innerHeight - img.offsetHeight);

    img.style.top = y + 'px';
    img.style.left = x + 'px';
}

setInterval(function() {images.forEach(moveImage)}, 1000);

var img = document.querySelector('.download #downloading'); 
var velocity = { x: 2, y: 2 };

function imgBounce() {
    var currentPos = img.getBoundingClientRect();

    if (currentPos.top <= 0 || currentPos.bottom >= window.innerHeight) {
        velocity.y *= -1;
    }
    if (currentPos.left <= 0 || currentPos.right >= window.innerWidth) {
        velocity.x *= -1;
    }

    img.style.top = (img.offsetTop + velocity.y) + 'px';
    img.style.left = (img.offsetLeft + velocity.x) + 'px';
}

setInterval(imgBounce, 10);