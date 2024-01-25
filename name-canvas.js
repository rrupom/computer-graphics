const canvas = document.getElementById("name-canvas");
const context = canvas.getContext("2d");

let color = true;

const setContextColor = () => {
  if (color) {
    context.fillStyle = "red";
  } else {
    context.fillStyle = "green";
  }
};

const drawVerticalLine = (x, y1, y2) => {
  let steps = Math.abs(y1 - y2);
  let iny = (y2 - y1) / steps;
  x = Math.round(x);

  for (let i = 0; i < steps; i++) {
    context.fillRect(x, Math.round(y1), 3, 3);
    y1 += iny;
  }
};

const drawHorizontalLine = (x1, x2, y) => {
  let steps = Math.abs(x1 - x2);
  let inx = (x2 - x1) / steps;
  y = Math.round(y);

  for (let i = 0; i < steps; i++) {
    context.fillRect(Math.round(x1), y, 3, 3);
    x1 += inx;
  }
};

const drawLine = (x1, y1, x2, y2) => {
  let dx = Math.abs(x1 - x2);
  let dy = Math.abs(y1 - y2);

  if (dx == 0) {
    /**
     * It is parallel line to the y-axis
     */
    drawVerticalLine(x1, y1, y2);
  } else if (dy == 0) {
    /**
     * It is parallel line to the x-axis
     */
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

const drawR = (x, y, span) => {
  setContextColor();
  drawLine(x, y, x + span, y);
  drawLine(x, y, x, y + span);
  drawLine(x, y + span / 2, x + span, y + span / 2);
  drawLine(x + span, y, x + span, y + span / 2);
  drawLine(x + span / 2, y + span / 2, x + span, y + span);

  color = !color;
};

const drawA = (x, y, span) => {
  setContextColor();
  drawLine(x, y, x, y + span);
  drawLine(x, y, x + span, y);
  drawLine(x + span, y, x + span, y + span);
  drawLine(x, y + span / 2, x + span, y + span / 2);

  color = !color;
};

const drawK = (x, y, span) => {
  setContextColor();
  drawLine(x, y, x, y + span);
  drawLine(x, y + span / 2, x + span, y);
  drawLine(x, y + span / 2, x + span, y + span);
  color = !color;
};

const drawI = (x, y, span) => {
  setContextColor();
  drawLine(x + span / 2, y, x + span / 2, y + span);
  drawLine(x, y, x + span, y);
  drawLine(x, y + span, x + span, y + span);
  color = !color;
};

const drawB = (x, y, span) => {
  setContextColor();
  drawLine(x, y, x, y + span);
  drawLine(x, y, x + span, y);
  drawLine(x + span, y, x + span, y + span);
  drawLine(x, y + span / 2, x + span, y + span / 2);
  drawLine(x, y + span, x + span, y + span);
  color = !color;
};

const drawRAKIB = () => {
  const name = "RAKIB";
  let pixelGap = 20;
  let span = 50;
  const len = name.length * span + (name.length - 1) * pixelGap;

  /**
   * Placing rakib middle of the canvas
   */
  let startX = (canvas.width - len) / 2;
  let staticY = (canvas.height - 50) / 2;

  drawR(startX, staticY, span);
  startX = increment(startX, pixelGap, span);

  drawA(startX, staticY, span);
  startX = increment(startX, pixelGap, span);

  drawK(startX, staticY, span);
  startX = increment(startX, pixelGap, span);

  drawI(startX, staticY, span);
  startX = increment(startX, pixelGap, span);

  drawB(startX, staticY, span);
};

const increment = (start, pixelGap, span) => {
  return start + pixelGap + span;
};

drawRAKIB();
