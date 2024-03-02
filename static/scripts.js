const img = document.getElementById("error");

let x = 0, y = 0;
let dx = 1, dy = 1;

function animar() {
  const img = document.getElementById("error"); // Se asegura de obtener el elemento en cada ciclo
  if (!img) return; // En caso de que img no esté disponible

  const maxWidth = window.innerWidth - img.offsetWidth;
  const maxHeight = window.innerHeight - img.offsetHeight;

  x += dx;
  y += dy;

  if (x >= maxWidth || x <= 0) {
    dx *= -1;
  }
  if (y >= maxHeight || y <= 0) {
    dy *= -1;
  }

  img.style.left = `${x}px`;
  img.style.top = `${y}px`;

  requestAnimationFrame(animar);
}

animar();
