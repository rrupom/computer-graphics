const canvas = document.getElementById("lineCanvas");
const context = canvas.getContext("2d");

context.fillStyle = "red";

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
      context.fillRect(Math.round(x1), Math.round(y1), 2, 2);
      x1 += inx;
      y1 += iny;
    }
  }
};

const drawHorizontalLine = (x1, x2, y) => {
  y = Math.round(y);
  let steps = Math.abs(x1 - x2);
  let inx = (x2 - x1) / steps;

  for (let i = 0; i < steps; i++) {
    context.fillRect(Math.round(x1), y, 2, 2);
    x1 += inx;
  }
};

const drawVerticalLine = (x, y1, y2) => {
  x = Math.round(x);
  let steps = Math.abs(y1 - y2);
  let iny = (y2 - y1) / steps;

  for (let i = 0; i < steps; i++) {
    context.fillRect(x, Math.round(y1), 2, 2);
    y1 += iny;
  }
};

const drawS = (x, y, span) => {
  drawLine(x, y, x + span, y);
  drawLine(x, y, x, y + span / 2);
  drawLine(x, y + span / 2, x + span, y + span / 2);
  drawLine(x + span, y + span / 2, x + span, y + span);
  drawLine(x, y + span, x + span, y + span);
};

const drawW = (x, y, span) => {
  drawLine(x, y, x + span / 4, y + span);
  drawLine(x + span / 4, y + span, x + span / 2, y);
  drawLine(x + span / 2, y, x + (3 * span) / 4, y + span);
  drawLine(x + (3 * span) / 4, y + span, x + span, y);
};

const drawE = (x, y, span) => {
  drawLine(x, y, x + span, y);
  drawLine(x, y, x, y + span / 2);
  drawLine(x, y + span / 2, x + span, y + span / 2);
  drawLine(x, y + span / 2, x, y + span);
  drawLine(x, y + span, x + span, y + span);
};

const drawSWE = () => {
  const name = "SWE";
  let pixelGap = 20;
  let span = 50;
  const len = name.length * span + (name.length - 1) * pixelGap;

  /**
   * Placing SWE middle of the canvas
   */
  let startX = (canvas.width - len) / 2;
  let staticY = (canvas.height - 50) / 2;
  drawS(startX, staticY, span);
  startX = increment(startX, pixelGap, span);

  drawW(startX, staticY, span);
  startX = increment(startX, pixelGap, span);

  drawE(startX, staticY, span);
};

const increment = (startX, pixelGap, span) => {
  return startX + pixelGap + span;
};

drawSWE();

// drawLine(10, 10, 100, 100);
// drawLine(110, 120, 200, 200);
// drawLine(300, 300, 400, 400);
// drawLine(200, 0, 200, 400);
// drawLine(0, 200, 400, 200);
