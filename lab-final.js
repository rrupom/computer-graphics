const canvas = document.getElementById("final");
const context = canvas.getContext("2d");

const drawVerticalLine = (x, y1, y2) => {
  x = Math.round(x);
  let steps = Math.abs(y1 - y2);
  let iny = (y2 - y1) / steps;

  for (let i = 0; i < steps; i++) {
    context.fillRect(x, Math.round(y1), 3, 3);

    y1 += iny;
  }
};

const drawHorizontalLine = (x1, x2, y) => {
  y = Math.round(y);
  let steps = Math.abs(x1 - x2);
  let inx = (x2 - x1) / steps;

  for (let i = 0; i < steps; i++) {
    context.fillRect(Math.round(x1), y, 3, 3);
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
  let d = 3 - 2 * r;
  let x = 0;
  let y = r;

  while (x < y) {
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

const drawMinar = () => {
  drawLine(20, 300, 320, 300);

  let span = 50;
  let gap = 20;

  let x = 50;
  let y = 300;
  drawLine(x, y, x, 200);
  drawLine(x, 200, x + span, 200);
  drawLine(x + span, 200, x + span, y);

  x = x + span + gap;

  drawLine(x, y, x, 200);
  drawLine(x + span, y, x + span, 200);
  drawLine(x + span + span, y, x + span + span, 200);
  drawLine(x, 200, x + span, 200 - span);
  drawLine(x + span, 200, x + span + span, 200 - span);
  drawLine(x + span + span, 200, x + span + span + span, 200 - span);
  drawLine(x + span, 200 - span, x + span + span + span, 200 - span);

  x = x + span + span + gap;

  drawLine(x, y, x, 200);
  drawLine(x, 200, x + span, 200);
  drawLine(x + span, 200, x + span, y);

  drawCircle(170, 300 - span, 50);

  drawLine(20, y, 20 + span, y + span);
  drawLine(20 + span, y + span, 320 - span, y + span);
  drawLine(320, y, 320 - span, y + span);

  drawLine(20 + span / 2, y + span / 2, 320 - span / 2, y + span / 2);
};

drawMinar();

const drawSecond = () => {
  let span = 50;
  let x = 50;
  let y = 450;

  drawLine(x, y, x + span * 2, y + span * 2);
  drawLine(x + span * 2, y + span * 2, x, y + span * 2);
  drawLine;
  drawLine(x, y + span * 2, x + span * 2, y + span * 4);

  x = x + span * 2 + 40;

  drawLine(x, y, x + span * 2, y);
  drawLine(x, y, x, y + span * 4);
  drawLine(x, y + span * 4, x + span * 2, y + span * 4);
  drawLine(x + span * 2, y + span * 4, x + span * 2, y);

  x = x + span * 2 + 40;
  drawLine(x, y, x + span * 2, y + span * 2);
  drawLine(x + span * 2, y + span * 2, x, y + span * 2);
  drawLine;
  drawLine(x, y + span * 2, x + span * 2, y + span * 4);

  x = x + span * 2 + 40;
  drawLine(x, y, x, y + span * 2);
  drawLine(x, y + span * 2, x + span * 2, y + span * 2);
  drawLine(
    x + span * 2 - 10,
    y + span * 2 - 10,
    x + span * 2 - 10,
    y + span * 4
  );
};

drawSecond();
