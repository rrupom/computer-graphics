const canvas = document.getElementById("circle");
const context = canvas.getContext("2d");

context.fillStyle = "red";

const drawCircle = (cx, cy, r) => {
  let d = 3 - 2 * r;
  let x = 0;
  let y = r;

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
      d = d + 4 * x + 6;
    } else {
      d = d + 4 * (x - y) + 10;
      y--;
    }
    x++;
  }
};

let cx = 200;
let cy = 200;
let r = 100;

drawCircle(cx, cy, r);
