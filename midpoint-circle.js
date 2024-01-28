const canvas = document.getElementById("circle");
const context = canvas.getContext("2d");
context.fillStyle = "red";

const drawCircle = (cx, cy, r) => {
  let x = 0;
  let y = r;
  let d = 5 / 4 - r;

  while (x <= y) {
    context.fillRect(x + cx, y + cy, 3, 3);
    context.fillRect(y + cx, x + cy, 3, 3);
    context.fillRect(-y + cx, x + cy, 3, 3);
    context.fillRect(-x + cx, y + cy, 3, 3);
    context.fillRect(-x + cx, -y + cy, 3, 3);
    context.fillRect(-y + cx, -x + cy, 3, 3);
    context.fillRect(y + cx, -x + cy, 3, 3);
    context.fillRect(x + cx, -y + cy, 3, 3);

    if (d < 0) {
      d = d + 2 * x + 3;
    } else {
      d = d + 2 * (x - y) + 5;
      y--;
    }
    x++;
  }
};

drawCircle(250, 250, 50);
