const canvas = document.getElementById("minar");
const context = canvas.getContext("2d");

context.fillStyle = "green";

const drawVerticalLine = (x, y1, y2) => {
  x = Math.abs(x);
  let steps = Math.abs(y1 - y2);
  let iny = (y2 - y1) / steps;

  for (let i = 0; i < steps; i++) {
    context.fillRect(x, Math.abs(y1), 3, 3);
    y1 += iny;
  }
};

const drawHorizontalLine = (x1, x2, y) => {
  y = Math.abs(y);
  let steps = Math.abs(x1 - x2);
  let inx = (x2 - x1) / steps;

  for (let i = 0; i < steps; i++) {
    context.fillRect(Math.abs(x1), y, 3, 3);
    x1 += inx;
  }
};

const drawLine = (x1, y1, x2, y2) => {
  let dx = Math.abs(x1 - x2);
  let dy = Math.abs(y1 - y2);

  if (dx == 0) {
    drawVerticalLine(x1, y1, y2);
  } else if (dy == 0) {
    drawHorizontalLine(x1, x2, y1);
  } else {
    let steps = Math.max(dx, dy);
    let inx = (x2 - x1) / steps;
    let iny = (y2 - y1) / steps;

    for (let i = 0; i < steps; i++) {
      context.fillRect(Math.round(x1), Math.round(y1), 3, 3);
      x1 += inx;
      y1 += iny;
    }
  }
};

const drawCircle = (cx, cy, r) => {
  context.fillStyle = "red";
  let x = 0;
  let y = r;
  let d = 3 - 2 * r;

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

const drawShaheedMina = () => {
  let width = canvas.width;
  let height = canvas.height;
  let maxW = 420;
  let maxH = 200;
  let remW = width - maxW;
  let remH = height - maxH;
  let gap = 20;
  let span = 50;

  let baseX = remW / 2;
  let baseY = height - remH / 2;

  let cx = (baseX + maxW + 40) / 2;
  let cy = baseY - 150 / 2;

  // draw base line
  drawLine(baseX, baseY, baseX + maxW, baseY);

  // drawing first block
  baseX = baseX + gap;
  drawLine(baseX, baseY, baseX, baseY - 50);
  drawLine(baseX, baseY - 50, baseX + span, baseY - 50);
  drawLine(baseX + span, baseY - 50, baseX + span, baseY);

  baseX = baseX + span + gap;

  // drawing second block
  drawLine(baseX, baseY, baseX, baseY - 100);
  drawLine(baseX, baseY - 100, baseX + span, baseY - 100);
  drawLine(baseX + span, baseY - 100, baseX + span, baseY);

  baseX = baseX + span + gap;

  // drawing main block
  drawLine(baseX, baseY, baseX, baseY - 150);
  drawLine(baseX, baseY - 150, baseX + span * 2, baseY - 150);
  drawLine(baseX + span * 2, baseY - 150, baseX + span * 2, baseY);

  // drawing fourth block

  baseX = baseX + span + gap + span;
  drawLine(baseX, baseY, baseX, baseY - 100);
  drawLine(baseX, baseY - 100, baseX + span, baseY - 100);
  drawLine(baseX + span, baseY - 100, baseX + span, baseY);

  // drawing last block
  baseX = baseX + span + gap;
  drawLine(baseX, baseY, baseX, baseY - 50);
  drawLine(baseX, baseY - 50, baseX + span, baseY - 50);
  drawLine(baseX + span, baseY - 50, baseX + span, baseY);

  // drawing circle
  drawCircle(cx, cy, 25);
};

const increment = (baseX, span) => {
  return baseX + span;
};

drawShaheedMina();
